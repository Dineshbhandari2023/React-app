import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

interface Like {
  onClick: () => void;
}

const Like = ({ onClick }: Like) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return (
      <div>
        <AiFillLike color="green" size={50} onClick={toggle} />
      </div>
    );
  else
    return (
      <div>
        <AiOutlineLike size={50} onClick={toggle} />
      </div>
    );
};

export default Like;
