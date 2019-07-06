import * as React from 'react';

export interface Iform {
  [index: number] :[
    {
      fileId: string,
      value: string | number,
    }
    ]
}

export interface Istep {
  formData: any
  changeData: any,
  activeStep:number,
  handleBack : any,
  handleNext: any
}


export interface StateForm {
   allForm: Array<Iform>
  setForm: any
}
export interface StateForm {
  id: string
  filide:string
  value: string
}
