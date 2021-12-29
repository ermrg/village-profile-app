export default function SelectComponent(props: any) {
  let { options, defaultValue, handleChange, label, wrapperClass, name, id, placeholder } =
    props;
  return (
    <div className="question" key={id} id={id}>
      <label className="label">{label}</label>
      <div className={wrapperClass}>
        <select
          className="form-control"
          name={name}
          onChange={handleChange}
          value={defaultValue}
        >
          <option value={""} key={name + "-option-1"}>
            ---{placeholder}---
          </option>
          {options.map((d: any, key: any) => (
            <option value={d.id} key={name + "-option-" + key}>
              {d.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
