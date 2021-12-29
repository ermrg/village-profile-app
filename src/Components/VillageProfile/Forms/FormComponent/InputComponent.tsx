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
    id
  } = props;
  return (
    <div className="question" key={id} id={id}>
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
