import * as Yup from 'yup';

export const yup = Yup;

const MAX_LENGTH = 30;
const MIN_LENGTH = 6;

export const errorMessageRules = {
  username: Yup.string()
    .min(MIN_LENGTH, `Must be at least ${MIN_LENGTH} characters`)
    .max(MAX_LENGTH, `Must be less  than ${MAX_LENGTH} characters`)
    .required('Username is required')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Cannot contain special characters or spaces'
    ),
  email: Yup.string()
    .required('Please enter Email Address')
    .max(
      MAX_LENGTH,
      `Password should not exceed ${MAX_LENGTH} characters`
    )
    .email('Invalid Email Address'),
  password: Yup.string()
    .max(
      MAX_LENGTH,
      `Password should not exceed ${MAX_LENGTH} characters`
    )
    .min(
      MIN_LENGTH,
      `Password must be at least ${MIN_LENGTH} characters`
    )
    .required('Please enter Password')
};

export const validatorHelper = () => ({
  validationSchema: Yup.object({
    username: validatorHelper.username
  })
});
