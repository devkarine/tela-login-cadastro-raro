import { api } from './api';

export interface CriarUsuarioProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface CadastrarLogin {
  email: string;
  password: string;
}

export interface obterIdProps {
  id: string;
  token: string;
}

export async function criarUsuario({
  name,
  email,
  password,
  password_confirmation
}: CriarUsuarioProps) {
  try {
    const response = await api.post('/users', {
      name,
      email,
      password,
      password_confirmation
    });
    const { status } = response;
    return status;
  } catch (error) {
    console.log(error);
  }
}

export async function cadastrarLogin({ email, password }: CadastrarLogin) {
  try {
    const response = await api.post('/auth/login', {
      email,
      password
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function obterId({ id, token }: obterIdProps) {
  const obterToken = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await api.get(`/users/${id}`, obterToken);

  return response;
}
