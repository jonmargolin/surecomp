import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

 function text(obj) {
  const  test = [];
  for( const key in obj){
    if(key) {
      obj[key].form.fields.map((value, index) => {
        test.push(
          <p key={value.name + index}>
            <span key={value.name}>{value.name}:</span>
          <span key={value.value}>{value.value}</span>
          </p>);
      })
    }
  }
   return test;
 }
export const Review =({ formData, handleBack, handleSubmit }) =>(
  <div>
    <Typography variant="h6" gutterBottom>
      Review
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          {text(formData)}
      </Grid>
      <Grid item xs={12} sm={12}>
        <button type="button" onClick={handleBack}>Back</button>
        <button type="button" onClick={handleSubmit}>submit</button>
      </Grid>
    </Grid>
  </div>
)
export default  Review
