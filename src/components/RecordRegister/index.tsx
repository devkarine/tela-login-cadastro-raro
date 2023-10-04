import '../RecordLogin/style.css';
import { FormRegister } from '../FormRegister';

export const RecordRegister = () => {
  return (
    <section className="record">
      <div className="wrapper-info-record">
        <h2>Cadastro</h2>
        <p>para inciar</p>
      </div>
      <FormRegister />
    </section>
  );
};
