import React from "react";

export default function InputComponent(props: any) {
  let {
    palceholder,
    defaultValue,
    handleChange,
    label,
    wrapperClass,
    name,
    type,
    id,
    errors
  } = props;
  const checkIfError = () => {
    let v = errors.find((s: any) => s.name == name);
    if (v) {
      return "error";
    }
    return "";
  };
  return (
    <div className={`question ${checkIfError()}`} key={id} id={id}>
      <label className="label">{label}</label>
      <div className={wrapperClass}>
        <input
          onChange={handleChange}
          type={type ?? "text"}
          className="form-control"
          value={defaultValue ?? ""}
          name={name}
          placeholder={palceholder}
        />
      </div>
    </div>
  );
}
