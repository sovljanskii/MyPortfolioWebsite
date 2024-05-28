import { useCallback, useEffect, useState } from "react";

const roles = ["Software engineer", "Web developer", "creative problem-solver"];

function ChangingText() {
  const [newRole, setNewRole] = useState(roles[0]);
  let index = 0;
  const shuffle = useCallback(() => {
    if (index == roles.length - 1) index = 0;
    else index++;
    setNewRole(roles[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 700);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return <>{newRole}</>;
}

export default ChangingText;
