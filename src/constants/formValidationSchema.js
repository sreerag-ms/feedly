import * as Yup from 'yup';

export default {
  subscription: Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  }),
  writeToUs: Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    response: Yup.string().min(10, 'Too Short!').max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email').required('Required'),
  }),
};
