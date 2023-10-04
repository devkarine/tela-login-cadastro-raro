import './style.css';

interface ButtonProps {
  text: string;
  width: string;
  height: string;
  disabled: boolean;
}

export const Button = ({ text, width, height, disabled }: ButtonProps) => {
  return (
    <button className="btn" style={{ width, height }} disabled={disabled}>
      {text}
    </button>
  );
};
