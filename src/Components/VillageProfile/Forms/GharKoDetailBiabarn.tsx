import { useEffect, useState } from "react";
import {
  IAnimal,
  IForeignMember,
  IHousehold,
  ILand,
  IMissingDeceasedMember,
} from "../../../db/models/Household";
import {
  animal_types,
  cooking_fuels,
  countries,
  death_reasons,
  festivals,
  foreign_reasons,
  land_types,
  light_fuels,
  toilet_types,
  water_sources,
} from "../../../enums";
import Multiselect from "multiselect-react-dropdown";
import { IWard } from "../../../db/models/WardModel";

let initialForeignMember = {
  member_name: "",
  reason_id: "",
  reason: "",
  country: "",
  country_id: "",
  visited_year_bs: "",
  return_year_bs: "",
  monthly_income: "",
} as IForeignMember;
let initialMissingMember = {
  name: "",
  reason_id: "",
  reason: "",
  gender: "",
  age: "",
} as IMissingDeceasedMember;
let initialAnimal = {
  animal: "",
  animal_type_id: "",
  count: "1",
} as IAnimal;
let initialLand = {
  land_type_id: "",
  land_type: "",
  location: "",
  total_area: "",
  area_unit: "",
  irrigation: "",
  kitta_no: "",
  ward_id: "",
  remarks: "",
} as ILand;
export default function GharKoDetailBiabarn(props: any) {
  let { hh, members, wards } = props;
  let { handleChange, handleArrayChangeInHousehold } = props;
  const [household, setHousehold] = useState({ ...hh } as IHousehold);
  const [foreignMember, setForeignMember] = useState(initialForeignMember);
  const [missingMember, setMissingMember] = useState(initialMissingMember);
  const [animal, setAnimal] = useState(initialAnimal);
  const [land, setLand] = useState(initialLand);

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
      setForeignMember((foreignMember) => ({
        ...foreignMember,
        country: v.name,
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
        reason: v.name,
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
    handleArrayChangeInHousehold("missing_deceased_members", newMissingMember);
    setMissingMember({ ...initialMissingMember });
  };

  const handleAnimalChange = (e: any) => {
    setAnimal((animal) => ({
      ...animal,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "animal_type_id") {
      let v = animal_types.find((s: any) => s.id == e.target.value);
      setAnimal((animal) => ({
        ...animal,
        animal: v.name,
      }));
    }
  };

  const saveAnimal = (cmd: string, animal_type_id?: any) => {
    let newAnimal;
    if (cmd == "add") {
      newAnimal = household.animals ?? [];
      newAnimal.push(animal);
    } else {
      newAnimal = household.animals ?? [];
      const index = newAnimal.findIndex(
        (obj: any) => obj.animal_type_id === animal_type_id
      );
      newAnimal.splice(index, 1);
    }
    handleArrayChangeInHousehold("animals", newAnimal);
    setAnimal({ ...initialAnimal });
  };

  const handleLandChange = (e: any) => {
    setLand((land) => ({
      ...land,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "land_type_id") {
      let v = land_types.find((s: any) => s.id == e.target.value);
      setLand((land) => ({
        ...land,
        land_type: v.name,
      }));
    }
  };

  const saveLand = (cmd: string, index?: any) => {
    let newLand;
    newLand = household.lands ?? [];
    if (cmd == "add") {
      newLand.push(land);
    } else {
      newLand.splice(index, 1);
    }
    handleArrayChangeInHousehold("lands", newLand);
    setLand({ ...initialLand });
  };

  const getHohPhoto = async () => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      let video = document.querySelector("#video") as HTMLVideoElement;
      let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      video!.srcObject = stream;

      let click_photo = document.querySelector(
        "#click-photo"
      ) as HTMLButtonElement;

      video.style.display = "block";
      click_photo.style.display = "block";
    }
  };

  const clickPhoto = async () => {
    let video = document.querySelector("#video") as HTMLVideoElement;
    let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    canvas!
      .getContext("2d")
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL("image/jpeg");
    video.style.display = "none";
    canvas.style.display = "block";
    let click_photo = document.querySelector(
      "#click-photo"
    ) as HTMLButtonElement;
    let reset = document.querySelector("#reset-photo") as HTMLButtonElement;
    click_photo.style.display = "none";
    reset.style.display = "block";
    handleArrayChangeInHousehold("responder_image", image_data_url);
  };

  const resetPhoto = async () => {
    let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
    let reset = document.querySelector("#reset-photo") as HTMLButtonElement;
    reset.style.display = "none";
    canvas.style.display = "none";
    getHohPhoto();
  };

  return (
    <>
      <div className={`form-group`} id="16">
        <h5>Family Detail</h5>

        <label className="label" id={"has_missing_deceased_member"}>
          45. परिवारमा कोही बेपत्ता/मृत्यु/दुर्घटना/आत्महत्या/हत्या भएको छ?
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
            {/* <label className="label" id={"name"}>a. नाम?</label> */}
            <div className="options-horizontal">
              <input
                className="form-control"
                value={missingMember.name}
                name="name"
                onChange={handleMissingChange}
                placeholder="नाम"
              />
            </div>
            {/* <label className="label" id={"reason_id"}>b. कारन?</label> */}
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
                  <option value={option.id} key={"death_reasons" + key}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            {/* <label className="label" id={"gender"}>c. लिङ्ग?</label> */}
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
            {/* <label className="label" id={"age"}>d. उमेर?</label> */}
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

        <label className="label" id={"animal_count"}>
          46. परिवारमा रहेको पशु चौपायाहरुको संख्या?
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

        <label className="label" id={"business_count"}>
          47. परिवारबाट संचालित ब्यापार, ब्याबसाय, उद्योगको संख्या?
        </label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            className="form-control"
            value={household.business_count ?? 0}
            name="business_count"
          />
        </div>

        <label className="label" id={"rent_business_count"}>
          48. परिवारले भाडामा दिई संचालन भएका व्यवापार, व्यवसाय, उद्योगको
          संख्या?
        </label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            className="form-control"
            value={household.rent_business_count ?? 0}
            name="rent_business_count"
          />
        </div>

        <label className="label" id={"annual_expense"}>
          49. परिवारको वार्षिक खर्च उल्लेख गर्नुहोस
        </label>
        <div className="options-verical">
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            className="form-control"
            value={household.annual_expense ?? 0}
            name="annual_expense"
          />
        </div>
        <label className="label" id={"has_foreign_member"}>
          50. परिवारमा कोई बिदेशमा बसेको वा गएको छ?
        </label>
        <div className="options-horizontal">
          <select
            className="form-control"
            name="has_foreign_member"
            key={"परिवारमा कोई बिदेशमा बसेको वा गएको छ?"}
            value={household.has_foreign_member}
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
                <option value={""} key={"परिवारमा कोई बिदेशमा-1"}>
                  ---- सदस्य -----
                </option>
                {hh && hh.members && hh.members.map((option: any, key: any) => (
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
                  <option value={option.id} key={"death_reasons" + key}>
                    {option.name}
                  </option>
                ))}
              </select>
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
                  <option value={option.id} key={"death_reasons" + key}>
                    {option.name}
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
        <label className="label" id={"festivals"}>
          51. तपाईले मान्ने पर्वहरु प्राथमिकता अनुसार स्तरीकरण गर्नुहोस्(मुख्य
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
      </div>

      <div className={`form-group`} id="17">
        <h5>Health</h5>

        <label className="label" id={"has_pregnant_member"}>
          52. गर्भवर्ती परिवारमा छ/ छैन?
        </label>
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
            <label className="label" id={"has_pregnancy_test"}>
              a. गर्भ जाच गराएको/ नगराएको?
            </label>
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
                <label className="label" id={"pregnancy_test_count"}>
                  b. कति पटक?
                </label>
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

        <label className="label" id={"has_maternity_member"}>
          53. परीवारमा ६ महिनाभित्रको सुत्केरी छ/ छैन?
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
            <label className="label" id={"maternity_location"}>
              a. कहाँ सुत्केरी भएको?
            </label>
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
            <label className="label" id={"has_maternity_test"}>
              b. सुत्केरी जाच? गराएको नगराएको?{" "}
            </label>
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

        <label className="label" id={"has_maternity_death"}>
          54. मातृ मृत्यु भएको छ/ छैन?
        </label>
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
            <label className="label" id={"maternity_death_condition"}>
              a. गर्भाअवस्था/ ४५ दिनभितत्रको सुत्केरी?
            </label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="maternity_death_condition"
                key={"गर्भाअवस्था/ ४५ दिनभितत्रको सुत्केरी?"}
                value={
                  household.maternity_death_condition
                    ? household.maternity_death_condition
                    : "गर्भाअवस्था"
                }
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

        <label className="label" id={"child_death"}>
          55. नवशिशु / शिशु/ बाल मृत्यु भएको छ?
        </label>
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
            <label className="label" id={"child_death_condition"}>
              a. नवशिशु / शिशु/ बाल मृत्यु
            </label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="child_death_condition"
                key={"नवशिशु / शिशु/ बाल मृत्यु भएको छ?"}
                value={
                  household.child_death_condition
                    ? household.child_death_condition
                    : "नवशिशु"
                }
                onChange={(e) => handleChange(e)}
              >
                <option value={"नवशिशु"}>नवशिशु</option>
                <option value={"शिशु"}>शिशु</option>
                <option value={"बाल"}>बाल</option>
              </select>
            </div>
            <label className="label" id={"child_death_count"}>
              b. कतिजना?
            </label>
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

      <div className={`form-group`} id="17">
        <h5>Resources</h5>
        <label className="label" id={"water_source_id"}>
          56. खानेपानीको मुख्य श्रोत
        </label>
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
              <option value={option.id} key={"water_source_id" + key}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        {(household.water_source_id == "1" ||
          household.water_source_id == "6") && (
          <div className="child-section">
            <label className="label" id={"water_source_location"}>
              a. घरमा कि साझा ?
            </label>

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
            {household.water_source_location == "साझा" && (
              <>
                <label className="label" id={"water_source_distance"}>
                  b. लाग्ने समय ? (मिनेट)
                </label>
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
          </div>
        )}

        <label className="label" id={"cooking_fuels"}>
          57. खाना पकाउन
        </label>
        <div className="options-vertical">
          <Multiselect
            options={cooking_fuels}
            selectedValues={household.cooking_fuels}
            onSelect={(value) =>
              handleArrayChangeInHousehold("cooking_fuels", value)
            }
            onRemove={(value) =>
              handleArrayChangeInHousehold("cooking_fuels", value)
            }
            displayValue="name"
            selectionLimit={5}
          />
        </div>

        <label className="label" id={"light_fuels"}>
          58. बत्ति बाल्न
        </label>
        <div className="options-vertical">
          <Multiselect
            options={light_fuels}
            selectedValues={household.light_fuels}
            onSelect={(value) =>
              handleArrayChangeInHousehold("light_fuels", value)
            }
            onRemove={(value) =>
              handleArrayChangeInHousehold("light_fuels", value)
            }
            displayValue="name"
            selectionLimit={5}
          />
        </div>

        <label className="label" id={"public_vehicle_distance_meter"}>
          59. सार्वजनिक यातायात चल्ने सम्मको दुरी ? (मिटर/मिनेट)
        </label>
        <div className="options-horizontal">
          <input
            type="number"
            className="form-control"
            value={household.public_vehicle_distance_meter ?? ""}
            name="public_vehicle_distance_meter"
            onChange={handleChange}
            placeholder="दुरी (मिटरमा)"
          />
          <input
            type="number"
            className="form-control"
            value={household.public_vehicle_distance_minute ?? ""}
            name="public_vehicle_distance_minute"
            onChange={handleChange}
            placeholder="दुरी (मिनेट)"
          />
        </div>
        <label className="label" id={"hospital_distance_meter"}>
          60. स्वास्थ्य चौकी वा अस्पताल सम्म लाग्ने दुरी? (मिटर/मिनेट)
        </label>
        <div className="options-horizontal">
          <input
            type="number"
            className="form-control"
            value={household.hospital_distance_meter ?? ""}
            name="hospital_distance_meter"
            onChange={handleChange}
            placeholder="दुरी (मिटरमा)"
          />
          <input
            type="number"
            className="form-control"
            value={household.hospital_distance_minute ?? ""}
            name="hospital_distance_minute"
            onChange={handleChange}
            placeholder="दुरी (मिनेट)"
          />
        </div>
        <label className="label" id={"primary_distance"}>
          61. आधारभुत विद्यालय सम्म लाग्ने समय
        </label>
        <div className="options-horizontal">
          <input
            type="number"
            className="form-control"
            value={household.primary_distance ?? ""}
            name="primary_distance"
            onChange={handleChange}
            placeholder="दुरी (मिनेट)"
          />
        </div>
        <label className="label" id={"secondary_distance"}>
          62. माध्यमिक विद्यालय सम्म लाग्ने समय
        </label>
        <div className="options-horizontal">
          <input
            type="number"
            className="form-control"
            value={household.secondary_distance ?? ""}
            name="secondary_distance"
            onChange={handleChange}
            placeholder="दुरी (मिनेट)"
          />
        </div>
        <label className="label" id={"higher_secondary_distance"}>
          63. माध्यमिक विद्यालय सम्म लाग्ने समय
        </label>
        <div className="options-horizontal">
          <input
            type="number"
            className="form-control"
            value={household.higher_secondary_distance ?? ""}
            name="higher_secondary_distance"
            onChange={handleChange}
            placeholder="दुरी (मिनेट)"
          />
        </div>
      </div>

      <div className={`form-group`} id="18">
        <h5>Household</h5>
        <label className="label" id={"toilet_type_id"}>
          64. सौचालयको प्रकार
        </label>
        <div className="options-horizontal">
          <select
            className="form-control"
            value={household.toilet_type_id ?? ""}
            name="toilet_type_id"
            onChange={handleChange}
          >
            <option value={""} key={"सौचालयको प्रकार-1"}>
              ---- प्रकार -----
            </option>
            {toilet_types.map((option, key) => (
              <option value={option.id} key={"सौचालयको प्रकार" + key}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <label className="label" id={"has_earthquake_relief_plan"}>
          65. भुकम्पमा घर पुननिर्माणमा परेको छ?
        </label>
        <div className="options-horizontal">
          <div className="radio" key={"has_earthquake_relief_plan1"}>
            <label>
              <input
                type="radio"
                value={"1"}
                name="has_earthquake_relief_plan"
                checked={household.has_earthquake_relief_plan == "1"}
                onChange={(e) => handleChange(e)}
              />
              छ
            </label>
          </div>
          <div className="radio" key={"has_earthquake_relief_plan2"}>
            <label>
              <input
                type="radio"
                value={"0"}
                name="has_earthquake_relief_plan"
                checked={household.has_earthquake_relief_plan == "0"}
                onChange={(e) => handleChange(e)}
              />
              छैन
            </label>
          </div>
        </div>
        {household.has_earthquake_relief_plan == "1" && (
          <>
            <label className="label" id={"earthquake_house_damage_count"}>
              a. कतिवटा परेको ?
            </label>
            <div className="options-horizontal">
              <input
                className="form-control"
                value={household.earthquake_house_damage_count ?? ""}
                name="earthquake_house_damage_count"
                onChange={handleChange}
              />
            </div>

            <label className="label" id={"earthquake_house_relief_status"}>
              b. निर्माण अवस्था ?
            </label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="earthquake_house_relief_status"
                key={"मातृ मृत्यु भएको छ/ छैन?"}
                value={
                  household.earthquake_house_relief_status == "1" ? "1" : "0"
                }
                onChange={(e) => handleChange(e)}
              >
                <option value={"सम्झौता मात्र गरेको"}>
                  सम्झौता मात्र गरेको
                </option>
                <option value={"घर निर्माणधीन"}>घर निर्माणधीन</option>
                <option value={"घर निर्माण सम्पन्न"}>घर निर्माण सम्पन्न</option>
              </select>
            </div>
          </>
        )}
        <label className="label" id={"map_pass"}>
          66. घरको नक्सापास गरेको छ?
        </label>
        <div className="options-horizontal">
          <div className="radio" key={"घरको नक्सापास गरेको छ1"}>
            <label>
              <input
                type="radio"
                value={"1"}
                name="map_pass"
                checked={household.map_pass == "1"}
                onChange={(e) => handleChange(e)}
              />
              छ
            </label>
          </div>
          <div className="radio" key={"घरको नक्सापास गरेको छ2"}>
            <label>
              <input
                type="radio"
                value={"0"}
                name="map_pass"
                checked={household.map_pass == "0"}
                onChange={(e) => handleChange(e)}
              />
              छैन
            </label>
          </div>
        </div>
        <label className="label" id={"animal_type_id"}>
          67. पशुपन्छीको संख्या?{" "}
        </label>
        <div className="options-horizontal">
          <div className="child-section">
            {household.animals &&
              household.animals.map((an: any, an_key: any) => (
                <button
                  className="btn btn-outline-info btn-sm btn-block"
                  key={an_key}
                  onClick={() => saveAnimal("remove", an.animal_type_id)}
                >
                  {an.animal} - {an.count}
                </button>
              ))}
            <br />

            <div className="options-horizontal">
              <select
                className="form-control"
                value={animal.animal_type_id}
                name="animal_type_id"
                onChange={handleAnimalChange}
              >
                <option value={""} key={"कारन-1"}>
                  ---- पशुपन्छी -----
                </option>
                {animal_types.map((option, key) => (
                  <option value={option.id} key={"death_reasons" + key}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="options-horizontal">
              <input
                type="number"
                className="form-control"
                value={animal.count ?? ""}
                name="count"
                onChange={handleAnimalChange}
                placeholder="विदेशबाट आउने रकम (मासिक)"
              />
            </div>

            <button
              onClick={() => saveAnimal("add")}
              className="btn btn-sm btn-success"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className={`form-group`} id="19">
        <label className="label" id={"total_area"}>
          68. जग्गा सम्बन्धी{" "}
        </label>
        <div className="options-horizontal">
          <div className="child-section">
            {household.lands &&
              household.lands.map((an: any, an_key: any) => (
                <button
                  className="btn btn-outline-info btn-sm btn-block"
                  key={an_key}
                  onClick={() => saveLand("remove", an_key)}
                >
                  {an.location} - {an.total_area} {an.area_unit}
                </button>
              ))}
            <br />
            <label className="label" id={"location"}>
              a. जग्गाको स्थान
            </label>

            <div className="options-horizontal">
              <select
                className="form-control"
                value={land.location}
                name="location"
                onChange={handleLandChange}
              >
                <option value={""} key={"जग्गाको स्थान"}>
                  ---- स्थान -----
                </option>

                <option value={"गाउँपालिका"}>गाउँपालिका</option>
                <option value={"जिल्ला"}>जिल्ला</option>
                <option value={"काठमान्डौ"}>काठमान्डौ</option>
                <option value={"अन्य"}>अन्य</option>
              </select>
            </div>
            {land.location == "गाउँपालिका" && (
              <>
                <select
                  className="form-control"
                  value={land.ward_id}
                  name="ward_id"
                  onChange={handleLandChange}
                >
                  <option value={""} key={"जग्गाको वडा नं"}>
                    ---- वडा नं -----
                  </option>
                  {wards.map((w: IWard, keyw: any) => (
                    <option value={w.id} key={keyw}>
                      {w.name}
                    </option>
                  ))}
                </select>
              </>
            )}
            <label className="label" id={"land_type_id"}>
              b. जग्गाको प्रकार
            </label>
            <div className="options-verticle">
              <select
                className="form-control"
                value={land.land_type_id}
                name="land_type_id"
                onChange={handleLandChange}
              >
                <option value={""} key={"जग्गाको प्रकारः"}>
                  ---- जग्गाको प्रकार -----
                </option>
                {land_types.map((option, key) => (
                  <option value={option.id} key={"जग्गाको प्रकारः" + key}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/* <label className="label" id={"total_area"}>c. क्षेत्रफल</label> */}
            <div className="options-horizontal">
              <input
                type="number"
                className="form-control"
                value={land.total_area ?? ""}
                name="total_area"
                onChange={handleLandChange}
                placeholder="क्षेत्रफल"
              />
              <select
                className="form-control"
                value={land.area_unit}
                name="area_unit"
                onChange={handleLandChange}
              >
                <option value={""} key={"जग्गाको क्षेत्रफल"}>
                  ---- क्षेत्रफल -----
                </option>

                <option value={"रोपनी"}>रोपनी</option>
                <option value={"आना"}>आना</option>
                <option value={"दाम"}>दाम</option>
              </select>
            </div>
            <label className="label" id={"kitta_no"}>
              d. कित्ता नं
            </label>
            <div className="options-verticle">
              <input
                className="form-control"
                value={land.kitta_no ?? ""}
                name="kitta_no"
                onChange={handleLandChange}
                placeholder="कित्ता नं"
              />
            </div>
            <label className="label" id={"irrigation"}>
              e. सिचाई सुविधा
            </label>
            <div className="options-horizontal">
              <div className="radio" key={"irrigation"}>
                <label>
                  <input
                    type="radio"
                    value={"1"}
                    name="irrigation"
                    checked={land.irrigation == "1"}
                    onChange={handleLandChange}
                  />
                  छ
                </label>
              </div>
              <div className="radio" key={"irrigation2"}>
                <label>
                  <input
                    type="radio"
                    value={"0"}
                    name="irrigation"
                    checked={land.irrigation == "0"}
                    onChange={handleLandChange}
                  />
                  छैन
                </label>
              </div>
            </div>
            <div className="options-horizontal">
              <input
                type="text"
                className="form-control"
                value={land.remarks ?? ""}
                name="remarks"
                onChange={handleLandChange}
                placeholder="कैफियत"
              />
            </div>
            <button
              onClick={() => saveLand("add")}
              className="btn btn-sm btn-success"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className={`form-group`} id="20">
        <label className="label" id={"responder_name"}>
          69. उत्तरदाताको नाम
        </label>
        <div className="options-horizontal">
          <input
            className="form-control"
            value={household.responder_name ?? ""}
            name="responder_name"
            onChange={handleChange}
            placeholder="उत्तरदाताको नाम"
          />
        </div>
        <label className="label" id={"responder_image"}>
          70. उत्तरदाताको फोटोः
        </label>
        <div className="options-verical">
          <video
            id="video"
            width="320"
            height="240"
            autoPlay
            style={{ display: "none" }}
          ></video>

          <canvas
            id="canvas"
            width="320"
            height="240"
            style={{ display: "none" }}
          ></canvas>
          <button
            id="click-photo"
            className="btn btn-sm btn-success"
            onClick={clickPhoto}
            style={{ display: "none" }}
          >
            Click Photo
          </button>
          <button
            id="reset-photo"
            className="btn btn-sm btn-danger"
            onClick={resetPhoto}
            style={{ display: "none" }}
          >
            Reset
          </button>
          <input
            type="hidden"
            name="responder_image"
            id="responder_image"
            onChange={(e) => handleChange(e)}
          />
          <button className="btn btn-secondary" onClick={getHohPhoto}>
            उत्तरदाताको फोटो
          </button>
        </div>
      </div>
    </>
  );
}
