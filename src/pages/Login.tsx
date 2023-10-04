import { Elipses } from '../components/Elipses';
import { Introduction } from '../components/Introduction';
import { RecordLogin } from '../components/RecordLogin';

export const Login = () => {
  return (
    <>
      <main>
        <Introduction />
        <RecordLogin />
      </main>
      <Elipses />
    </>
  );
};
