import { Elipses } from '../components/Elipses';
import { Introduction } from '../components/Introduction';
import { RecordRegister } from '../components/RecordRegister';

export const Register = () => {
  return (
    <>
      <main>
        <Introduction />
        <RecordRegister />
      </main>
      <Elipses />
    </>
  );
};
