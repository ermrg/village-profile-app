import React from "react";

export default function RadioComponent(props: any) {
  let { options, defaultValue, handleChange, label, wrapperClass, name, id } =
    props;
  return (
    <div className="question"  key={id} id={id}>
      <label className="label">{label}</label>
      <div className={wrapperClass}>
        {options.map((o: any, key: any) => (
          <div className="radio" key={key}>
            <label>
              <input
                type="radio"
                value={o.id}
                name={name}
                checked={defaultValue === o.id.toString()}
                onChange={handleChange}
              />
              {o.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
