import { useState } from "react";

const Content = () => {
  const [toggle, setToggle] = useState(false);

  const hendelToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div style={{ display: "block" , marginBottom : "5px" }}>
        <button onClick={hendelToggle}>Click</button>
      </div>
      {toggle && <textarea></textarea>}
    </div>
  );
};

export default Content;
