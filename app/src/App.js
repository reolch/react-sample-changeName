import { useState } from "react";
import { Card } from "./components/Card";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
}
