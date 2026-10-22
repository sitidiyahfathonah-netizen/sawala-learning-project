
type ButtonProps = {
  teks: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

function Button({
  teks,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="primary-button"
    >
      {teks}
    </button>
  );
}

export default Button;
