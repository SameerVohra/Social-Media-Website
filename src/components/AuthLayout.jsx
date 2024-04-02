import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    //TODO : Make it more easy to understand
    if (authentication && authStatus !== authentication) navigate("/login");
    else if (!authentication && authStatus !== authentication) navigate("/");
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>LOADING........</h1> : <>{children}</>;
}

export default Protected;
