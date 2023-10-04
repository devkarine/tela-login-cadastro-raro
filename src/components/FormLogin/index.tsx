import './style.css';
import '../ErrorsMessage/style.css';
import { Form, Formik } from 'formik';
import { FormProps, initialValues } from './structure';
import { Input } from '../Inputs';
import { Button } from '../Button';
import * as Yup from 'yup';
import { CadastrarLogin, cadastrarLogin, obterId } from '../../services';

export const FormLogin = ({ values }: { values: FormProps }) => {
  const onSubmit = async (values: CadastrarLogin) => {
    const response = await cadastrarLogin(values);
    const { id, token } = response;
    const respostaId = await obterId({ id, token });
    console.log(response);
    localStorage.setItem('user', JSON.stringify({ respostaId }));
  };

  const validation = Yup.object().shape({
    email: Yup.string()
      .email('Insira um email válido')
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        'Insira um email válido'
      )
      .required('O campo Email é obrigatório'),
    password: Yup.string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-z]).{8,}$/,
        'A senha deve conter pelo menos uma letra maiúscula e um caractere especial'
      )
      .required('O campo Senha é obrigatório')
  });

  return (
    <Formik<FormProps>
      initialValues={initialValues}
      onSubmit={values => onSubmit(values)}
      validationSchema={validation}
    >
      {({ isSubmitting, errors, touched, isValid }) => (
        <Form className="form">
          <div className="wrapper-input">
            <img src="src/assets/img/mail.svg" alt="envelope para email" />
            <Input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
            />
          </div>
          {touched.email && errors.email && (
            <div className="errorMEssage">{errors.email}</div>
          )}
          <div className="wrapper-input">
            <img src="src/assets/img/lock.svg" alt="cadeado para senha" />
            <Input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
            />
          </div>
          {touched.password && errors.password && (
            <div className="errorMEssage">{errors.password}</div>
          )}
          <Button
            text="Entrar"
            width="30.7rem"
            height="5.7rem"
            disabled={
              !isValid ||
              isSubmitting ||
              JSON.stringify(initialValues) === JSON.stringify(values)
            }
          />
          <a href="#">Esqueceu sua senha</a>
        </Form>
      )}
    </Formik>
  );
};
