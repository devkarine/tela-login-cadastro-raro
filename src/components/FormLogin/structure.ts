export const initialValues = {
  email: '',
  password: '',
  checkBox: false,
  name: '',
  password_confirmation: ''
};

export interface FormProps {
  email: string;
  password: string;
  name: string;
  password_confirmation: string;
  checkBox: boolean;
}
