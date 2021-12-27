import { useEffect, useState } from "react";
import {
  IForeignMember,
  IHousehold,
  IMissingDeceasedMember,
} from "../../../db/models/Household";
import {
  countries,
  death_reasons,
  festivals,
  foreign_reasons,
  water_sources,
} from "../../../enums";
import Multiselect from "multiselect-react-dropdown";

let initialForeignMember = {
  member_name: "",
  reason_id: "",
  reason: "",
  country: "",
  country_id: "",
  visited_year_bs: "",
  return_year_bs: "",
  monthly_income: 0,
} as IForeignMember;
let initialMissingMember = {
  name: "",
  reason_id: "",
  reason: "",
  gender: "",
  age: "",
} as IMissingDeceasedMember;
export default function GharKoDetailBiabarn(props: any) {
  let { hh, members } = props;
  let { handleChange, handleArrayChangeInHousehold } = props;
  const [household, setHousehold] = useState({ ...hh } as IHousehold);
  const [foreignMember, setForeignMember] = useState(initialForeignMember);
  const [missingMember, setMissingMember] = useState(initialMissingMember);

  useEffect(() => {
    setHousehold({ ...hh });
  }, [hh]);

  const handleForeignMemberChange = (e: any) => {
    setForeignMember((foreignMember) => ({
      ...foreignMember,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "member_name") {
      let v = members.find((s: any) => s.name_eng == e.target.value);
      if (v) {
        setForeignMember((foreignMember) => ({
          ...foreignMember,
          member_name: v.name_eng,
        }));
      }
    }
    if (e.target.name == "country_id") {
      let v = countries.find((s: any) => s.value == e.target.value);
      console.log(v);
      setForeignMember((foreignMember) => ({
        ...foreignMember,
        country: v.label,
      }));
    }
  };

  const saveForeignMember = (cmd: string, member_name?: any) => {
    let newForeignMember;
    if (cmd == "add") {
      newForeignMember = household.foreign_members ?? [];
      newForeignMember.push(foreignMember);
    } else {
      newForeignMember = household.foreign_members ?? [];
      const index = newForeignMember.findIndex(
        (obj: any) => obj.member_name === member_name
      );
      newForeignMember.splice(index, 1);
    }
    handleArrayChangeInHousehold("foreign_members", newForeignMember);
    setForeignMember({ ...initialForeignMember });
  };

  const handleMissingChange = (e: any) => {
    setMissingMember((missingMember) => ({
      ...missingMember,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "reason_id") {
      let v = death_reasons.find((s: any) => s.value == e.target.value);
      setMissingMember((missingMember) => ({
        ...missingMember,
        reason: v.label,
      }));
    }
  };

  const saveMissing = (cmd: string, reason_id?: any) => {
    let newMissingMember;
    if (cmd == "add") {
      newMissingMember = household.missing_deceased_members ?? [];
      newMissingMember.push(missingMember);
    } else {
      newMissingMember = household.missing_deceased_members ?? [];
      const index = newMissingMember.findIndex(
        (obj: any) => obj.reason_id === reason_id
      );
      newMissingMember.splice(index, 1);
    }
    console.log(newMissingMember);
    handleArrayChangeInHousehold("missing_deceased_members", newMissingMember);
    setMissingMember({ ...initialMissingMember });
  };

  return (
    <>
      <div className={`form-group`} id="16">
        <label className="label">
          15. परिवारमा कोही बेपत्ता/मृत्यु/दुर्घटना/आत्महत्या/हत्या भएको छ?
        </label>
        <div className="options-horizontal">
          <select
            className="form-control"
            name="has_missing_deceased_member"
            key={
              "परिवारमा कोही बेपत्ता/मृत्यु/दुर्घटना/आत्महत्या/हत्या भएको छ?"
            }
            value={household.has_missing_deceased_member == "1" ? "1" : ""}
            onChange={(e) => handleChange(e)}
          >
            <option value={"0"}>छैन</option>
            <option value={"1"}>छ</option>
          </select>
        </div>

        {household.has_missing_deceased_member == "1" && (
          <div className="child-section">
            {household.missing_deceased_members &&
              household.missing_deceased_members.map((ts: any, ts_key: any) => (
                <button
                  className="btn btn-outline-secondary btn-sm btn-block"
                  key={ts_key}
                  onClick={() => saveMissing("remove", ts.reason_id)}
                >
                  {ts.name} - {ts.reason}
                </button>
              ))}
            <br />
            {/* <label className="label">a. नाम?</label> */}
            <div className="options-horizontal">
              <input
                className="form-control"
                value={missingMember.name}
                name="name"
                onChange={handleMissingChange}
                placeholder="नाम"
              />
            </div>
            {/* <label className="label">b. कारन?</label> */}
            <div className="options-horizontal">
              <select
                className="form-control"
                value={missingMember.reason_id}
                name="reason_id"
                onChange={handleMissingChange}
              >
                <option value={""} key={"कारन-1"}>
                  ---- कारन -----
                </option>
                {death_reasons.map((option, key) => (
                  <option value={option.value} key={"death_reasons" + key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* <label className="label">c. लिङ्ग?</label> */}
            <div className="options-horizontal">
              <select
                className="form-control"
                value={missingMember.gender}
                name="gender"
                onChange={handleMissingChange}
              >
                <option value={""} key={"लिङ्ग-1"}>
                  ----- लिङ्ग ----
                </option>
                <option value={1} key={"death_reasons"}>
                  पुरुष
                </option>
                <option value={2} key={"death_reasonsमहिला"}>
                  महिला
                </option>
                <option value={3} key={"death_reasonsअन्य"}>
                  अन्य
                </option>
              </select>
            </div>
            {/* <label className="label">d. उमेर?</label> */}
            <div className="options-horizontal">
              <input
                className="form-control"
                value={missingMember.age}
                name="age"
                onChange={handleMissingChange}
                placeholder="उमेर"
              />
            </div>
            <button
              onClick={() => saveMissing("add")}
              className="btn btn-sm btn-success"
            >
              Add
            </button>
          </div>
        )}

        <label className="label">
          16. परिवारमा रहेको पशु चौपायाहरुको संख्या?
        </label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            value={household.animal_count ?? 0}
            name="animal_count"
          />
        </div>

        <label className="label">
          17. परिवारबाट संचालित ब्यापार, ब्याबसाय, उद्योगको संख्या?
        </label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            value={household.business_count ?? 0}
            name="business_count"
          />
        </div>

        <label className="label">
          18. परिवारले भाडामा दिई संचालन भएका व्यवापार, व्यवसाय, उद्योगको
          संख्या?
        </label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            value={household.rent_business_count ?? 0}
            name="rent_business_count"
          />
        </div>

        <label className="label">
          19. परिवारको वार्षिक खर्च उल्लेख गर्नुहोस
        </label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            value={household.annual_expense ?? 0}
            name="annual_expense"
          />
        </div>
        <label className="label">
          43. परिवारमा कोई बिदेशमा बसेको वा गएको छ?
        </label>
        <div className="options-horizontal">
          <select
            className="form-control"
            name="has_foreign_member"
            key={"परिवारमा कोई बिदेशमा बसेको वा गएको छ?"}
            value={household.has_foreign_member ? "1" : ""}
            onChange={(e) => handleChange(e)}
          >
            <option value={"0"}>छैन</option>
            <option value={"1"}>छ</option>
          </select>
        </div>

        {household.has_foreign_member == "1" && (
          <div className="child-section">
            {household.foreign_members &&
              household.foreign_members.map((ts: any, ts_key: any) => (
                <button
                  className="btn btn-outline-primary btn-sm btn-block"
                  key={ts_key}
                  onClick={() => saveForeignMember("remove", ts.member_name)}
                >
                  {ts.member_name} - {ts.country}
                </button>
              ))}
            <br />
            <div className="options-horizontal">
              <select
                className="form-control"
                value={foreignMember.member_name}
                name="member_name"
                onChange={handleForeignMemberChange}
              >
                <option value={""} key={"member-1"}>
                  ---- सदस्य -----
                </option>
                {members.map((option: any, key: any) => (
                  <option value={option.name_eng} key={"option.name" + key}>
                    {option.name_eng}
                  </option>
                ))}
              </select>
            </div>
            <div className="options-horizontal">
              <select
                className="form-control"
                value={foreignMember.country_id}
                name="country_id"
                onChange={handleForeignMemberChange}
              >
                <option value={""} key={"कारन-1"}>
                  ---- देश -----
                </option>
                {countries.map((option, key) => (
                  <option value={option.value} key={"death_reasons" + key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="options-horizontal">
              <select
                className="form-control"
                value={foreignMember.reason_id}
                name="reason_id"
                onChange={handleForeignMemberChange}
              >
                <option value={""} key={"कारन-1"}>
                  ---- कारन -----
                </option>
                {foreign_reasons.map((option, key) => (
                  <option value={option.value} key={"death_reasons" + key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="options-horizontal">
              <input
                className="form-control"
                value={foreignMember.visited_year_bs}
                name="visited_year_bs"
                onChange={handleForeignMemberChange}
                placeholder="गएको वर्ष"
              />
            </div>

            <div className="options-horizontal">
              <input
                className="form-control"
                value={foreignMember.return_year_bs}
                name="return_year_bs"
                onChange={handleForeignMemberChange}
                placeholder="फर्केको वर्ष"
              />
            </div>

            <div className="options-horizontal">
              <input
                type="number"
                className="form-control"
                value={foreignMember.monthly_income ?? ""}
                name="monthly_income"
                onChange={handleForeignMemberChange}
                placeholder="विदेशबाट आउने रकम (मासिक)"
              />
            </div>

            <button
              onClick={() => saveForeignMember("add")}
              className="btn btn-sm btn-success"
            >
              Add
            </button>
          </div>
        )}
        <label className="label">
          44. तपाईले मान्ने पर्वहरु प्राथमिकता अनुसार स्तरीकरण गर्नुहोस्(मुख्य
          बढीमा ५ वटा मात्र)
        </label>
        <div className="options-vertical">
          <Multiselect
            options={festivals}
            selectedValues={household.festivals}
            onSelect={(value) =>
              handleArrayChangeInHousehold("festivals", value)
            }
            onRemove={(value) =>
              handleArrayChangeInHousehold("festivals", value)
            }
            displayValue="name"
            selectionLimit={5}
          />
        </div>

        <label className="label">45. खानेपानीको मुख्य श्रोत</label>
        <div className="options-horizontal">
          <select
            className="form-control"
            value={household.water_source_id ?? ""}
            name="water_source_id"
            onChange={handleChange}
          >
            <option value={""} key={"श्रोत-1"}>
              ---- श्रोत -----
            </option>
            {water_sources.map((option, key) => (
              <option value={option.value} key={"water_source_id" + key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {(household.water_source_id == "1" ||
          household.water_source_id == "6") && (
          <>
            <label className="label">a. घरमा कि साझा ?</label>

            <div className="options-horizontal">
              <select
                className="form-control"
                value={household.water_source_location ?? "घरमा"}
                name="water_source_location"
                onChange={handleChange}
              >
                <option value={"घरमा"} key={"घरमा121"}>
                  घरमा
                </option>
                <option value={"साझा"} key={"घरमा"}>
                  साझा
                </option>
              </select>
            </div>
          </>
        )}
        {household.water_source_location == "साझा" && (
          <>
            <label className="label">b. लाग्ने समय ? (मिनेट)</label>
            <div className="options-horizontal">
              <input
                className="form-control"
                value={household.water_source_distance ?? ""}
                name="water_source_distance"
                onChange={handleChange}
                placeholder="दुरी (मिनेट)"
              />
            </div>
          </>
        )}
        <label className="label">
          46. सार्वजनिक यातायात चल्ने सम्मको दुरी ? (मिटर/मिनेट)
        </label>
        <div className="options-horizontal">
          <input
            className="form-control"
            value={household.public_vehicle_distance_meter ?? ""}
            name="public_vehicle_distance_meter"
            onChange={handleChange}
            placeholder="दुरी (मिटरमा)"
          />
          <input
            className="form-control"
            value={household.public_vehicle_distance_minute ?? ""}
            name="public_vehicle_distance_minute"
            onChange={handleChange}
            placeholder="दुरी (मिनेट)"
          />
        </div>
      </div>

      <div className={`form-group`} id="17">
        <label className="label">48. गर्भवर्ती परिवारमा छ/ छैन?</label>
        <div className="options-horizontal">
          <select
            className="form-control"
            name="has_pregnant_member"
            key={"गर्भवर्ती परिवारमा छ/ छैन?"}
            value={household.has_pregnant_member == "1" ? "1" : "0"}
            onChange={(e) => handleChange(e)}
          >
            <option value={"0"}>छैन</option>
            <option value={"1"}>छ</option>
          </select>
        </div>
        {household.has_pregnant_member == "1" && (
          <>
            <label className="label">a. गर्भ जाच गराएको/ नगराएको?</label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="has_pregnancy_test"
                key={"गर्भ जाच गराएको/ नगराएको?"}
                value={household.has_pregnancy_test == "1" ? "1" : "0"}
                onChange={(e) => handleChange(e)}
              >
                <option value={"0"}>नगराएको</option>
                <option value={"1"}>गराएको</option>
              </select>
            </div>
            {household.has_pregnancy_test == "1" && (
              <>
                <label className="label">b. कति पटक?</label>
                <div className="options-horizontal">
                  <input
                    className="form-control"
                    name="pregnancy_test_count"
                    key={"कति पटक (गराएको भए)"}
                    value={
                      household.pregnancy_test_count
                        ? household.pregnancy_test_count
                        : "0"
                    }
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </>
            )}
          </>
        )}

        <label className="label">
          49. परीवारमा ६ महिनाभित्रको सुत्केरी छ/ छैन?
        </label>
        <div className="options-horizontal">
          <select
            className="form-control"
            name="has_maternity_member"
            key={"परीवारमा  ६ महिनाभित्रको सुत्केरी छ/ छैन?"}
            value={household.has_maternity_member == "1" ? "1" : "0"}
            onChange={(e) => handleChange(e)}
          >
            <option value={"0"}>छैन</option>
            <option value={"1"}>छ</option>
          </select>
        </div>

        {household.has_maternity_member == "1" && (
          <>
            <label className="label">a. कहाँ सुत्केरी भएको?</label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="maternity_location"
                key={"कहाँ सुत्केरी भएको?"}
                value={household.maternity_location == "1" ? "1" : "0"}
                onChange={(e) => handleChange(e)}
              >
                <option value={"स्वास्थ्य संस्था"}>स्वास्थ्य संस्था</option>
                <option value={"घर"}>घर</option>
              </select>
            </div>
            <label className="label">b. सुत्केरी जाच? गराएको नगराएको? </label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="has_maternity_test"
                key={"सुत्केरी जाच? गराएको नगराएको?  "}
                value={household.has_maternity_test == "1" ? "1" : "0"}
                onChange={(e) => handleChange(e)}
              >
                <option value={"0"}>नगराएको</option>
                <option value={"1"}>गराएको</option>
              </select>
            </div>
          </>
        )}

        <label className="label">50. मातृ मृत्यु भएको छ/ छैन?</label>
        <div className="options-horizontal">
          <select
            className="form-control"
            name="has_maternity_death"
            key={"मातृ मृत्यु भएको छ/ छैन?"}
            value={household.has_maternity_death == "1" ? "1" : "0"}
            onChange={(e) => handleChange(e)}
          >
            <option value={"0"}>छैन</option>
            <option value={"1"}>छ</option>
          </select>
        </div>
        {household.has_maternity_death == "1" && (
          <>
            <label className="label">
              a. गर्भाअवस्था/ ४५ दिनभितत्रको सुत्केरी?
            </label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="maternity_death_condition"
                key={"गर्भाअवस्था/ ४५ दिनभितत्रको सुत्केरी?"}
                value={household.maternity_death_condition ? household.maternity_death_condition : "गर्भाअवस्था"}
                onChange={(e) => handleChange(e)}
              >
                <option value={"गर्भाअवस्था"}>गर्भाअवस्था</option>
                <option value={"४५ दिनभितत्रको सुत्केरी"}>
                  ४५ दिनभितत्रको सुत्केरी
                </option>
              </select>
            </div>
          </>
        )}

        <label className="label">51. नवशिशु / शिशु/ बाल मृत्यु भएको छ?</label>
        <div className="options-horizontal">
          <select
            className="form-control"
            name="child_death"
            key={"नवशिशु / शिशु/ बाल मृत्यु भएको छ?"}
            value={household.child_death == "1" ? "1" : "0"}
            onChange={(e) => handleChange(e)}
          >
            <option value={"0"}>छैन</option>
            <option value={"1"}>छ</option>
          </select>
        </div>
        {household.child_death == "1" && (
          <>
            <label className="label">a. नवशिशु / शिशु/ बाल मृत्यु</label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="child_death_condition"
                key={"नवशिशु / शिशु/ बाल मृत्यु भएको छ?"}
                value={household.child_death_condition ? household.child_death_condition : "नवशिशु"}
                onChange={(e) => handleChange(e)}
              >
                <option value={"नवशिशु"}>नवशिशु</option>
                <option value={"शिशु"}>शिशु</option>
                <option value={"बाल"}>बाल</option>
              </select>
            </div>
            <label className="label">b. कतिजना?</label>
            <div className="options-horizontal">
            <input
                className="form-control"
                value={household.child_death_count ?? ""}
                name="child_death_count"
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}