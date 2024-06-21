import * as Yup from 'yup';

export const validationSchema = (totalAmount) => Yup.object().shape({
  customerName: Yup.string()
    .required('Customer name is required'),
  moneyReceived: Yup.number()
    .typeError('Money received must be a number')
    .min(totalAmount, `Money received must be at least ${totalAmount}`)
    .required('Money received is required')
});
