import { useEffect } from "react";
import { useLocation } from "react-router";

const STT = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default STT;