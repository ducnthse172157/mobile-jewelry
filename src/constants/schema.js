// src/validation/CustomerSchema.js
import * as Yup from 'yup';

export const CustomerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').positive().integer(),
  phone: Yup.string().required('Phone is required'),
  address: Yup.string().required('Address is required')
});
