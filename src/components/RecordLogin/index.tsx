import { Link } from 'react-router-dom';
import { FormLogin } from '../FormLogin';
import './style.css';

export const RecordLogin = () => {
  return (
    <section className="record">
      <div className="wrapper-info-record">
        <h2>Login</h2>
        <p>
          Entre ou <Link to="/register">faça seu cadastro</Link>
        </p>
      </div>
      <FormLogin />
    </section>
  );
};
