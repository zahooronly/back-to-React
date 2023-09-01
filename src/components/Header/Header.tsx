import { useState } from "react";

const Header = () => {
  const [show, setSow] = useState(false);
  const toggle = () => {
    setSow(!show);
  };

  return (
    <div>
      <nav className="container mx-auto flex justify-between">
        <h1 className="">LOGO</h1>
        <div>
          <button onClick={toggle} className="sm:hidden block">
            LOGO
          </button>
          <ul className={`sm:flex sm:justify-between ${show && "hidden"}`}>
            <li className="px-4">Home</li>
            <li className="px-4">Abdullah</li>
            <li className="px-4">Zahoor</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
