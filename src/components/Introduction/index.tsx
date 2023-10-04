import { Button } from '../Button';
import './style.css';

export const Introduction = () => {
  return (
    <section className="introduction">
      <div className="wrapper-introduction">
        <h1>GoFinance</h1>
        <p>O empréstimo ponto a ponto mais popular do mundo</p>

        <Button
          text="Read me"
          width="13.5rem"
          height="3.7rem"
          disabled={false}
        />
      </div>
    </section>
  );
};
