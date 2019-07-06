import React, { useState, useEffect, useRef } from 'react';
import FirstStep from './firststep';
import { Stepper } from '@material-ui/core';
import StepLabel from '@material-ui/core/StepLabel';
const steps = ['step-1', 'step-2', 'Review'];
import Step from '@material-ui/core/Step';
import useDebounce from '../hooks/use-debounce';
import { StateForm } from '../store/model/form-model';
import SecondStep from './secondStep';
import Review from './review';

export  const Wizard =() =>{
  let Mounted= true;
  const [allForm, setForm] = useState(
    {
      firstStep:{
        fields:[
          {
            fieldId:'0',
            name:'first name',
            value:'',
            validation: {
              required: true
            },
            valid: false,
            touched: false
          },
          {
            fieldId:'1',
            name:'lest name',
            value:'',
            validation: {
              required: true
            },
            valid: false,
            touched: false
          },
          {
            fieldId: '2',
            name: 'comment',
            value: '',
          }
        ],
        isValid: false
      },
      secondStep:{
        fields:[
          {
            fieldId:'0',
            name: 'email',
            value:'',
            valid: false,
            touched: false,
            validation: {
              required: true,
              isEmail: true
            },
          },
          {
            fieldId:'1',
            name:'selected item',
            value:'',
            valid: false,
            touched: false,
            validation: {
              required: true,
            }
          }
        ],
        isValid: false
      }
    }
  )
  const formElementsArray = [];
  for( const el in allForm) {
    if(el){
      formElementsArray.push({
        id: el,
        form: allForm[el]
      })
    }
  }
    const [chalkValidationTerm, setSearchTerm] = useState({
      id:'',
      filide:'',
      value:''
    });
  const debouncedSearchTerm: StateForm = useDebounce(chalkValidationTerm, 0);
  useEffect(() =>{
    Mounted = true;
     const storeForm = JSON.parse(localStorage.getItem('form'));
    if(storeForm) {
      setForm({...storeForm});
    }
    return () =>{
      Mounted= false
    }
  },[])
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        switch (debouncedSearchTerm.filide) {
          case 'firstStep':
            setFormState('firstStep');
            break;
          case 'secondStep':
            setFormState('secondStep');
          break;
        }
      }
    },
      [debouncedSearchTerm] // Only call effect if debounced search term changes
    );
  const  checkValidations= (value ,rules) =>{
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }
    return isValid;
  }
  const [activeStep, setActiveStep] = React.useState(0);
   const setFormState= (form) =>{
     const el = {...allForm};
     const i = {...allForm[form]};
     i.fields[debouncedSearchTerm.id].value=debouncedSearchTerm.value;
     i.fields[debouncedSearchTerm.id].touched=true;
     i.fields[debouncedSearchTerm.id].valid=checkValidations( i.fields[debouncedSearchTerm.id].value,  i.fields[debouncedSearchTerm.id].validation);
     el[form] = i
     let formIsValid = true;
     for(const key of el[form].fields ){
       if(key.hasOwnProperty('validation')) {
         formIsValid = key.valid && formIsValid;
       }
     }
     el[form].isValid = formIsValid;
     if(Mounted) {
       setForm({ ...el });
     }
     const saveToLocalStore = setTimeout(() =>{
       localStorage.setItem('form', JSON.stringify(allForm));

     },1000)
     return () => {
       Mounted = false;
       clearTimeout(saveToLocalStore);
     };
   }
  const handleSubmit =() =>{
     localStorage.removeItem('form');
     alert('our order is sent.');
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return  <FirstStep activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}
                           changeData={e => setSearchTerm({filide:formElementsArray[0].id, id:e.target.id, value: e.target.value})}
                           formData={formElementsArray[0].form}  />;
      case 1:
        return  <SecondStep activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}
                           changeData={e => setSearchTerm({filide:formElementsArray[1].id, id:e.target.id, value: e.target.value})}
                           formData={formElementsArray[1].form}  />;
      case 2:
        return  <Review handleBack={handleBack} handleSubmit={handleSubmit} formData={formElementsArray}  />;
      default:
        throw new Error('Unknown step');
    }
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <React.Fragment>
      <Stepper activeStep={activeStep} >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {getStepContent(activeStep)}
      </React.Fragment>
    </React.Fragment>
  )
}
export  default Wizard
