import { useEffect } from "react";
import { useSelector } from "react-redux";

const ScrollTop = () => {
  const currentList = useSelector((state) => state.list);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [currentList]);
  return null;
};

export default ScrollTop;
