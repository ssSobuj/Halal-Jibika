import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./notfound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "NotFound";
  });
  const naviget = useNavigate();

  const goBackHandle = () => {
    naviget(-1);
  };
  const goBacktoHomeHandle = () => {
    naviget("/");
  };

  return (
    <div className="notfound-section">
      <div className="notfound-container">
        <div className="notfound-content">
          <h1>Page Not Found</h1>
          <p>
            There is some problem <br /> please check it.
          </p>
          <div className="btn">
            <button onClick={goBackHandle}>Go Back</button>
            <button onClick={goBacktoHomeHandle}>Back Home</button>
          </div>
        </div>
        <div className="notfound-img">
          <img src="https://shorturl.at/sBPU0" alt="#" />
        </div>
      </div>
    </div>
  );
}
