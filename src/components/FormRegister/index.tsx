import '../FormLogin/style.css';
import { Form, Formik } from 'formik';
import { FormProps } from '../FormLogin/structure';
import { Input } from '../Inputs';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { initialValues } from '../FormLogin/structure';
import * as Yup from 'yup';
import { CriarUsuarioProps, criarUsuario } from '../../services';

export const FormRegister = () => {
  const onSubmit = async (values: CriarUsuarioProps) => {
    const response = await criarUsuario(values);
    console.log(response);
  };

  const validation = Yup.object().shape({
    name: Yup.string()
      .test(
        'is-full-name',
        'O campo Nome e Sobrenome deve conter pelo menos dois nomes separados por espaço',
        value => {
          if (!value) return false;
          const names = value.trim().split(' ');
          return names.length >= 2;
        }
      )
      .required('O campo Nome e Sobrenome é obrigatório'),

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
      .required('O campo Senha é obrigatório'),

    password_confirmation: Yup.string()
      .required('A confirmação de senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas precisam coincidir'),

    checkBox: Yup.boolean().oneOf(
      [true],
      'Você deve concordar com os termos e condições'
    )
  });

  return (
    <Formik<FormProps>
      initialValues={initialValues}
      onSubmit={values => onSubmit(values)}
      validationSchema={validation}
    >
      {({
        isSubmitting,
        errors,
        touched,
        isValid,
        handleChange,
        initialValues,
        values
      }) => (
        <Form className="form">
          <div className="wrapper-input">
            <img src="src/assets/img/profile.svg" alt="envelope para email" />
            <Input
              className="input"
              id="profile"
              name="name"
              type="text"
              placeholder="Nome e Sobrenome"
            />
          </div>
          {touched.name && errors.name && (
            <div className="errorMEssage">{errors.name}</div>
          )}
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
          <div className="wrapper-input">
            <img src="src/assets/img/lock.svg" alt="cadeado para senha" />
            <Input
              className="input"
              id="confirmPassword"
              name="password_confirmation"
              type="password"
              placeholder="Confirma senha"
            />
          </div>
          {touched.password_confirmation && errors.password_confirmation && (
            <div className="errorMEssage">{errors.password_confirmation}</div>
          )}
          <div className="checkbox">
            <input
              type="checkbox"
              id="checkBox"
              name="checkBox"
              className="checkbox-input"
              checked={values.checkBox}
              onChange={handleChange}
            />
            <span>
              Declaro que li e concordo com os termos e condições de uso.
            </span>
          </div>

          {touched.checkBox && errors.checkBox && (
            <div className="errorMEssage">{errors.checkBox}</div>
          )}
          <Button
            text="Cadastrar"
            width="30.7rem"
            height="5.7rem"
            disabled={
              !isValid ||
              isSubmitting ||
              JSON.stringify(initialValues) === JSON.stringify(values)
            }
          />
          <Link to="/login" className="return">
            Voltar
          </Link>
        </Form>
      )}
    </Formik>
  );
};
