interface Props {
  children: string;
  clickFunc: () => void;
}

const Button = ({ children, clickFunc }: Props) => {
  return (
    <button className="btn btn-primary" onClick={clickFunc}>
      {children}
    </button>
  );
};

export default Button;
