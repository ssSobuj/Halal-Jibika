import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Page Not Found</h1>
      <button onClick={goBackHandle}>Go Back</button>
      <button onClick={goBacktoHomeHandle}>Go Back To home</button>
    </div>
  );
}
