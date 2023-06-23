import * as yup from 'yup';

export const bankStatementValidationSchema = yup.object().shape({
  file_path: yup.string().required(),
  upload_date: yup.date().required(),
  organization_id: yup.string().nullable(),
});
