import { InputHTMLAttributes } from 'react';
import { Field } from 'formik';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // errors: ErrorMessageType
}

export const Input = ({ id, name, type, placeholder }: FormInputProps) => {
  return <Field id={id} name={name} type={type} placeholder={placeholder} />;
};
