import { useState } from "react";

const useToggle = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);
  return [value, () => setValue((value) => !value)];
};

export default useToggle;
