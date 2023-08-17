import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  clickOnLike: () => void;
}
const Like = ({ clickOnLike }: Props) => {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
    clickOnLike();
  };
  if (like)
    return <AiFillHeart color="#ff6b81" size={20} onClick={toggleLike} />;

  return <AiOutlineHeart color="#ff6b81" size={20} onClick={toggleLike} />;
};

export default Like;
