import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Istep } from '../store/model/form-model';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const checkValid = (t, b) => {
	if (t && b) {
		return false;
	} else if (!t && b) {
		return true;
	} else {
		return false;
	}
};
function generate(element: React.ReactElement) {
	return [0, 1, 2].map(value =>
		React.cloneElement(element, {
			key: value
		})
	);
}
export const SecondStep = ({ formData, changeData, activeStep, handleBack, handleNext }: Istep) => (
	<div>
		<Typography variant="h6" gutterBottom>
			step 2
		</Typography>
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6}>
				<TextField
					required
					error={checkValid(formData.fields[0].valid, formData.fields[0].touched)}
					id={formData.fields[0].fieldId}
					name="email"
					label="email"
					fullWidth
					autoComplete="email "
					value={formData.fields[0].value}
					onChange={changeData}
				/>
			</Grid>
			<Grid item xs={12} sm={12}>
				<InputLabel htmlFor={formData.fields[1].fieldId}>select option</InputLabel>
				<Select
					native
					error={checkValid(formData.fields[1].valid, formData.fields[1].touched)}
					value={formData.fields[1].value}
					inputProps={{
						name: 'age',
						id: formData.fields[1].fieldId
					}}
					onChange={changeData}
				>
					<option value="" disabled>
						select item
					</option>
					<option value="Ten">Ten</option>
					<option value="Twenty">Twenty</option>
					<option value="Thirty">Thirty</option>
				</Select>
			</Grid>
			<Grid item xs={12} sm={6}>
				<button type="button" onClick={handleBack}>
					Back
				</button>
				<button type="button" disabled={!formData.isValid} onClick={handleNext}>
					next
				</button>
			</Grid>
		</Grid>
	</div>
);
export default SecondStep;
