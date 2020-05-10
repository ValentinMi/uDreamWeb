import { useState } from "react";

const useForm = (initialValues: Object): Array<any> => {
  const [values, setValues] = useState(initialValues);

  const onChange = (event: React.FormEvent<EventTarget>): void => {
    let target = event.target as HTMLInputElement;
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, onChange];
};

export default useForm;
