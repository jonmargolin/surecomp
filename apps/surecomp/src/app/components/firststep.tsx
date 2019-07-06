import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Istep } from '../store/model/form-model';
const  checkValid =(t, b)=>{
   if(t && b){
      return  false;
   }
   else if(!t && b ){
     return  true;
   } else {
     return false;
   }
}
export const FirstStep =({ formData, changeData, activeStep, handleBack, handleNext }:Istep) =>(
<div>
  <Typography variant="h6" gutterBottom>
    Step-1
  </Typography>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <TextField
        required
        error = { checkValid(formData.fields[0].valid, formData.fields[0].touched)}
        id={formData.fields[0].fieldId}
        name="firstName"
        label="First name"
        fullWidth
        autoComplete="fname"
        value ={formData.fields[0].value}
        onChange={changeData}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        required
        error = { checkValid(formData.fields[1].valid, formData.fields[1].touched)}
        id={formData.fields[1].fieldId}
        name="firstName"
        label="First name"
        fullWidth
        autoComplete="fname"
        value ={formData.fields[1].value}
        onChange={changeData}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id={formData.fields[2].fieldId}
        label="comment"
        multiline
        rowsMax="4"
        margin="normal"
        helperText="enter your comment"
        variant="outlined"
        value={formData.fields[2].value}
        onChange={changeData}
      />
    </Grid>
    <Grid item xs={12}>
    </Grid>
  </Grid>
  <div>
    {activeStep !== 0 && (
      <input type= 'button'  onClick={handleBack}>
        Back
      </input>
    )}
    <input type='button'
           value='next'
          disabled={!formData.isValid}
      onClick={handleNext}
    >
    </input>
  </div>
  </div>
)
export default  FirstStep
