import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus} //focus out
        onFocus={() =>
          //focus in - password 확인시에는 계속해서 check해 주기 위해서
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()} //boolean을 string으로 바꾸어 표현
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
