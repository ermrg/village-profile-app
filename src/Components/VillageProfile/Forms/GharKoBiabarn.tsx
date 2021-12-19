import { IBasti } from "../../../db/models/BastiModel";
import { IWard } from "../../../db/models/WardModel";

export default function GharKoBiabarn(props: any) {
  let { data, bastis, wards, household } = props;
  let { handleChange } = props;

  const checkRequired = (id: number) => {
    let requiredFields = data?.requiredFields || [];
    return requiredFields.indexOf(id) > -1;
  };
  return (
    <div className="vp-form">
      <div
        className={`form-group ${data && checkRequired(1) ? "required" : ""}`}
        id="1"
      >
        <label className="label">1. Ward No</label>
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          {wards.map((w: IWard, key: any) => (
            <div className="radio" key={key}>
              <label>
                {household.ward_id == w.id ? (
                  <input type="radio" value={w.id} name="ward_id" defaultChecked/>
                ) : (
                  <input type="radio" value={w.id} name="ward_id" />
                )}
                {w.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`form-group ${data && checkRequired(2) ? "required" : ""}`}
        id="2"
      >
        <label className="label">2. Basti ko Naam</label>
        <div className="options-verical" onChange={(e) => handleChange(e)}>
          {bastis.map((b: IBasti, key: any) => (
            <div className="radio" key={key}>
              <label>
                <input type="radio" value={b.id} name="basti_id" />
                {b.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
