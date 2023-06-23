import * as yup from 'yup';

export const financialRecordValidationSchema = yup.object().shape({
  type: yup.string().required(),
  amount: yup.number().integer().required(),
  date: yup.date().required(),
  organization_id: yup.string().nullable(),
});
