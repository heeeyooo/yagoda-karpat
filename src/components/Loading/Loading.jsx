import { useEffect } from "react";
import "./Loading.css";

const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".wrapper").style.display = "initial";
      document.body.style.overflowY = "visible";
      document.body.style.position = "static";
    }, 3000);
  }, []);

  return (
    <div className="loading">
      <p className="loading__title">Yagoda Karpat</p>
    </div>
  );
};

export default Loading;
