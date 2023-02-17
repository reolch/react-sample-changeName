import { useContext } from "react";
import { useState } from "react";

import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

export function App() {
  const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

  const handledOnClick = () => {
    setIsAdmin(!isAdmin);
  }

  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={handledOnClick}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
}
