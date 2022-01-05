import React, { useState } from "react";
import { ITrainingDetail, IVehicle } from "../../../db/models/Member";
import {
  developmentOption,
  disability_card_types,
  disability_types,
  disease_names,
  education_faculties,
  education_levels,
  education_statuses,
  gender_choice,
  marital_statuses,
  relations,
  socialNetworks,
  vehicle_types,
  yes_nos,
} from "../../../enums";
import Multiselect from "multiselect-react-dropdown";
import RadioComponent from "./FormComponent/RadioComponent";
import InputComponent from "./FormComponent/InputComponent";
import SelectComponent from "./FormComponent/SelectComponent";

const initialTechSkill = {
  skill_id: "",
  source: "0",
  duration: "",
} as ITrainingDetail;
const initialVehicle = {
  vehicle_type: "",
  vehicle_type_id: "",
  count: "1",
} as IVehicle;

export default function PariwarKoBibaran(props: any) {
  let { household, occupations, technical_skills, errors } = props;
  let { handleMemberChange } = props;
  const [techSkill, setTechSkill] = useState(initialTechSkill);
  const [vehicle, setVehicle] = useState(initialVehicle);

  const handleTechSkillChange = (e: any) => {
    setTechSkill((techSkill) => ({
      ...techSkill,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "skill_id") {
      let skill = technical_skills.find((s: any) => s.id == e.target.value);
      setTechSkill((techSkill) => ({
        ...techSkill,
        skill_name: skill.name,
      }));
    }
  };

  const handleVehicleChange = (e: any) => {
    setVehicle((vehicle) => ({
      ...vehicle,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name == "vehicle_type_id") {
      let v = vehicle_types.find((s: any) => s.id == e.target.value);
      setVehicle((vehicle) => ({
        ...vehicle,
        vehicle_type_name: v.name,
      }));
    }
  };

  const saveTechSkill = (key: any, cmd: string, skill_name?: any) => {
    let newTechSkills;
    if (cmd == "add") {
      newTechSkills = household.members[key].technical_skills ?? [];
      newTechSkills.push(techSkill);
    } else {
      newTechSkills = household.members[key].technical_skills ?? [];
      const index = newTechSkills.findIndex(
        (obj: any) => obj.skill_name === skill_name
      );
      newTechSkills.splice(index, 1);
    }
    handleMemberChange(key, "technical_skills", newTechSkills);
    setTechSkill({ ...initialTechSkill });
  };

  const saveVehicle = (key: any, cmd: string, vehicle_name?: any) => {
    let newVehicles;
    if (cmd == "add") {
      newVehicles = household.members[key].vehicles ?? [];
      newVehicles.push(vehicle);
    } else {
      newVehicles = household.members[key].vehicles ?? [];
      const index = newVehicles.findIndex(
        (obj: any) => obj.vehicle_type_name === vehicle_name
      );
      newVehicles.splice(index, 1);
    }
    handleMemberChange(key, "vehicles", newVehicles);
    setVehicle({ ...initialVehicle });
  };

  return (
    <>
      {household.members &&
        household.members.map((member: any, memberKey: any) => (
          <>
            <div
              className={`form-group member-form-one`}
              key={"member-form-one-" + memberKey}
            >
              <h5>Member: {memberKey + 1} *</h5>
              <InputComponent
                name={"name_eng"}
                label={"15. सदस्यको नामथर:"}
                wrapperClass={"options-verical"}
                handleChange={(e: any) =>
                  handleMemberChange(memberKey, "name_eng", e.target.value)
                }
                defaultValue={member.name_eng}
                palceholder={"नामथर"}
                type={"text"}
                id={"name_eng-" + memberKey}
                errors={errors}
              />
              <InputComponent
                name={"mobile_num"}
                label={"16. मोवाईल नम्बर:"}
                wrapperClass={"options-verical"}
                handleChange={(e: any) =>
                  handleMemberChange(memberKey, "mobile_num", e.target.value)
                }
                defaultValue={member.mobile_num}
                palceholder={"मोवाईल नम्बर"}
                type={"text"}
                id={"mobile_num-" + memberKey}
                errors={errors}
              />
              <InputComponent
                name={"citizenship_num"}
                label={"17. सदस्यको नागरिकता नं."}
                wrapperClass={"options-verical"}
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "citizenship_num",
                    e.target.value
                  )
                }
                defaultValue={member.citizenship_num}
                palceholder={"नागरिकता नं."}
                type={"text"}
                id={"citizenship_num-" + memberKey}
                errors={errors}
              />

              <SelectComponent
                options={gender_choice}
                wrapperClass="options-verical"
                label={"18. सदस्यको लिंग"}
                name="gender_id"
                handleChange={(e: any) =>
                  handleMemberChange(memberKey, "gender_id", e.target.value)
                }
                defaultValue={member.gender_id}
                id={"gender_id"}
                placeholder="लिंग"
                errors={errors}
              />
              <SelectComponent
                options={relations}
                wrapperClass="options-verical"
                label={"19. घरमुलीसँग नाता:"}
                name="relation_with_hoh_id"
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "relation_with_hoh_id",
                    e.target.value
                  )
                }
                defaultValue={member.relation_with_hoh_id}
                id={"relation_with_hoh_id-" + memberKey}
                placeholder="नाता"
                errors={errors}
              />
              <InputComponent
                name={"dob_bs"}
                label={"20. जन्ममितिः"}
                wrapperClass={"options-verical"}
                handleChange={(e: any) =>
                  handleMemberChange(memberKey, "dob_bs", e.target.value)
                }
                defaultValue={member.dob_bs}
                palceholder={"Ex: 2065-10-24"}
                type={"text"}
                id={"dob_bs-" + memberKey}
                errors={errors}
              />
              <SelectComponent
                options={education_levels}
                wrapperClass="options-verical"
                label={"21. सदस्यको शैक्षिक स्तरः"}
                name="education_level_id"
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "education_level_id",
                    e.target.value
                  )
                }
                defaultValue={member.education_level_id}
                id={"education_level_id-" + memberKey}
                placeholder="शैक्षिक स्तरः"
                errors={errors}
              />
              {member.education_level_id == "4" ||
              member.education_level_id == "5" ||
              member.education_level_id == "6" ? (
                <div className="child-section">
                  <SelectComponent
                    options={education_faculties}
                    wrapperClass="options-verical"
                    label={"a. बिसय"}
                    name="education_faculty"
                    handleChange={(e: any) =>
                      handleMemberChange(
                        memberKey,
                        "education_faculty",
                        e.target.value
                      )
                    }
                    defaultValue={member.education_faculty}
                    id={"education_faculty-" + memberKey}
                    placeholder="बिसय"
                    errors={errors}
                  />
                </div>
              ) : (
                ""
              )}

              <SelectComponent
                options={education_statuses}
                wrapperClass="options-verical"
                label={"22.सदस्यको पढाईको अवस्थाः"}
                name="education_status_id"
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "education_status_id",
                    e.target.value
                  )
                }
                defaultValue={member.education_status_id}
                id={"education_status_id-" + memberKey}
                placeholder="शैक्षिक अवस्थाः"
                errors={errors}
              />

              <SelectComponent
                options={yes_nos}
                wrapperClass="options-verical"
                label={"23. अनौपचारिक शिक्षा लिएको छ?"}
                name="has_informal_education"
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "has_informal_education",
                    e.target.value
                  )
                }
                defaultValue={member.has_informal_education}
                id={"has_informal_education-" + memberKey}
                placeholder="शैक्षिक स्तरः"
                errors={errors}
              />

              <SelectComponent
                options={occupations}
                wrapperClass="options-verical"
                label={"24. मुख्य पेशा"}
                name="main_occupation_id"
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "main_occupation_id",
                    e.target.value
                  )
                }
                defaultValue={member.main_occupation_id}
                id={"main_occupation_id-" + memberKey}
                placeholder="मुख्य पेशा"
                errors={errors}
              />

              <SelectComponent
                options={occupations}
                wrapperClass="options-verical"
                label={"25. सहायक पेशा:"}
                name="other_occupation_id"
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "other_occupation_id",
                    e.target.value
                  )
                }
                defaultValue={member.other_occupation_id}
                id={"other_occupation_id-" + memberKey}
                placeholder="सहायक पेशा"
                errors={errors}
              />
              <InputComponent
                label={"25. मासिक आय:"}
                wrapperClass={"options-verical"}
                name={"monthly_income"}
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "monthly_income",
                    e.target.value
                  )
                }
                defaultValue={member.monthly_income}
                palceholder={"मासिक आय"}
                type={"text"}
                id={"monthly_income-" + memberKey}
                errors={errors}
              />
            </div>

            <div
              className={`form-group member-form-two`}
              id={14 + 2 + memberKey}
              key={"member-form-two-" + memberKey}
            >
              <h5>Member: {memberKey + 1} **</h5>
              <SelectComponent
                options={yes_nos}
                wrapperClass="options-verical"
                label={"26. प्राविधिक सिप"}
                name="has_technical_training"
                handleChange={(e: any) =>
                  handleMemberChange(
                    memberKey,
                    "has_technical_training",
                    e.target.value
                  )
                }
                defaultValue={member.has_technical_training}
                id={"has_technical_training-" + memberKey}
                placeholder="प्राविधिक सिप"
                errors={errors}
              />

              {member.has_technical_training == "1" && (
                <div className="child-section">
                  {member.technical_skills.map((ts: any, ts_key: any) => (
                    <>
                      <button
                        className="btn btn-outline-secondary btn-sm btn-block"
                        key={"technical_skills" + ts_key}
                        onClick={() =>
                          saveTechSkill(memberKey, "remove", ts.skill_name)
                        }
                      >
                        {ts.skill_name} - {ts.duration}
                      </button>
                      <br />
                    </>
                  ))}
                  <SelectComponent
                    options={technical_skills}
                    wrapperClass="options-verical"
                    label={"a. सिपको नामः"}
                    name="skill_id"
                    handleChange={handleTechSkillChange}
                    defaultValue={techSkill.skill_id}
                    id={"skill_id-" + memberKey}
                    placeholder="प्राविधिक सिप"
                    errors={errors}
                  />
                  <label className="label">b. सिप हासिलः </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      key={"b सिप हासिलः" + memberKey}
                      name="source"
                      value={techSkill.source}
                      onChange={handleTechSkillChange}
                    >
                      <option
                        value={""}
                        key={"29.0 सिप हासिलःoption-1" + memberKey}
                      >
                        ------ सिप हासिल ------
                      </option>
                      <option
                        value={"0"}
                        key={"29.1 सिप हासिलःoption1" + memberKey}
                      >
                        स्वज्ञान
                      </option>
                      <option
                        value={"1"}
                        key={"29.1 सिप हासिलःoption2" + memberKey}
                      >
                        तालिम
                      </option>
                    </select>
                  </div>
                  {techSkill.source == "1" && (
                    <>
                      <label className="label">
                        c. तालिम लिएको भए तालिमको अविधिः महिनामा{" "}
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="duration"
                        key={
                          "तालिम लिएको भए तालिमको अविधिः महिनामा" + memberKey
                        }
                        // value={}
                        onChange={handleTechSkillChange}
                        placeholder="Ex: 3"
                      />
                    </>
                  )}
                  <button
                    onClick={() => saveTechSkill(memberKey, "add")}
                    className="btn btn-sm btn-success"
                  >
                    Add
                  </button>
                </div>
              )}
              <label className="label" id={"is_married-" + memberKey}>
                27. वैवाविक स्थितिः{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="is_married"
                  key={"वैवाविक स्थितिः" + memberKey}
                  value={member.is_married ?? ""}
                  onChange={(e) =>
                    handleMemberChange(memberKey, "is_married", e.target.value)
                  }
                >
                  <option value={""}>----- वैवाविक स्थिति ------</option>

                  <option value={"0"}>अबिवाहित</option>
                  <option value={"1"}>विवाहित</option>
                </select>
              </div>
              {member.is_married == "1" && (
                <div className="child-section">
                  <label
                    className="label"
                    id={"marital_status_id-" + memberKey}
                  >
                    a. स्थिति{" "}
                  </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      name="marital_status_id"
                      key={"वैवाविक स्थितिः" + memberKey}
                      value={member.marital_status_id ?? ""}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "marital_status_id",
                          e.target.value
                        )
                      }
                    >
                      {marital_statuses.map((ms, keym) => (
                        <option
                          value={ms.id}
                          key={"वैवाविक स्थितिःoption" + keym}
                        >
                          {ms.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="label" id={"marriage_year-" + memberKey}>
                    b. विवाह भएको सालः{" "}
                  </label>
                  <div className="options-vertical">
                    <input
                      type="number"
                      className="form-control"
                      name="marriage_year"
                      key={"वैवाविक स्थितिः" + memberKey}
                      value={member.marriage_year ?? ""}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "marriage_year",
                          e.target.value
                        )
                      }
                      placeholder="Ex: 2077"
                    />
                  </div>

                  <label className="label" id={"age_on_marriage-" + memberKey}>
                    c. विबाह हुँदाको उमेर{" "}
                  </label>
                  <div className="options-vertical">
                    <input
                      type="number"
                      className="form-control"
                      name="age_on_marriage"
                      key={"विबाह हुँदाको उमेर" + memberKey}
                      value={member.age_on_marriage ?? ""}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "age_on_marriage",
                          e.target.value
                        )
                      }
                      placeholder="Ex: 26"
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              className={`form-group member-form-three`}
              id={14 + 2 + memberKey}
              key={"member-form-three-" + memberKey}
            >
              <h5>Member: {memberKey + 1} ***</h5>
              <label className="label" id={"resident_place-" + memberKey}>
                28. बसोबास गर्ने ठाउः
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="resident_place"
                  key={"बसोबास गर्ने ठाउः" + memberKey}
                  value={member.resident_place ?? ""}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "resident_place",
                      e.target.value
                    )
                  }
                >
                  <option value={""}>----- बसोबास गर्ने ठाउ ------</option>
                  <option value={"गाउँ"}>पुर्ण गाउँ</option>
                  <option value={"काठमान्डौ"}>काठमान्डौ</option>
                  <option value={"गाउँ/शहर"}>गाउँ/शहर</option>
                  <option value={"बिदेश"}>बिदेश</option>
                  <option value={"अन्य"}>अन्य</option>
                </select>
              </div>
              <label className="label" id={"has_vehicle-" + memberKey}>
                29. सवारी साधन ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_vehicle"
                  key={"सवारी साधन ?" + memberKey}
                  value={member.has_vehicle ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(memberKey, "has_vehicle", e.target.value)
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>

              {member.has_vehicle == "1" && (
                <div className="child-section">
                  {member.vehicles.map((v: any, ts_key: any) => (
                    <button
                      className="btn btn-outline-success btn-block"
                      key={"vehicles" + ts_key}
                      onClick={() =>
                        saveVehicle(memberKey, "remove", v.vehicle_type_name)
                      }
                    >
                      {v.vehicle_type_name} - {v.count}
                    </button>
                  ))}
                  <br />
                  <label className="label" id={"vehicle_type_id-" + memberKey}>
                    a. सवारी साधनको नामः{" "}
                  </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      key={"28.1 सवारी साधनको नामः" + memberKey}
                      name="vehicle_type_id"
                      value={vehicle.vehicle_type_id}
                      onChange={handleVehicleChange}
                    >
                      <option
                        value={""}
                        key={"29.0 सिप सवारी साधनको नामः" + memberKey}
                      >
                        ------ सवारी साधनको नाम ------
                      </option>
                      {vehicle_types.map((ms: any, keyv: any) => (
                        <option
                          value={ms.id}
                          key={"28.1 सवारी साधनको नाम नामःoption" + keyv}
                        >
                          {ms.name}
                        </option>
                      ))}
                    </select>
                    <label className="label" id={"count-" + memberKey}>
                      b. कति?{" "}
                    </label>
                    <div className="options-vertical">
                      <input
                        type="number"
                        className="form-control"
                        name="count"
                        key={"b.  कति?" + memberKey}
                        onChange={handleVehicleChange}
                        placeholder="Ex: 1"
                        value={1}
                      />
                    </div>
                    <button
                      onClick={() => saveVehicle(memberKey, "add")}
                      className="btn btn-sm btn-success"
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
              <label className="label" id={"has_health_insurance-" + memberKey}>
                30. स्वास्थ्य बिमा गरिएको छ ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_health_insurance"
                  key={"स्वास्थ्य बिमा गरिएको छ.?" + memberKey}
                  value={member.has_health_insurance ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_health_insurance",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>

              <label className="label" id={"has_life_insurance-" + memberKey}>
                31. जिमा बिमा गरिएको छ ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_life_insurance"
                  key={"जिमा बिमा गरिएको छ ?" + memberKey}
                  value={member.has_life_insurance ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_life_insurance",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>

              <label className="label" id={"has_bank_account-" + memberKey}>
                32. बैंकमा खाता छ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_bank_account"
                  key={"बैंकमा खाता छ?" + memberKey}
                  value={member.has_bank_account ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_bank_account",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>

              <label
                className="label"
                id={"has_cooperative_account-" + memberKey}
              >
                33. सहकारीमा सदस्य हुनुहुन्छ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_cooperative_account"
                  key={"सहकारीमा सदस्य हुनुहुन्छ?" + memberKey}
                  value={member.has_cooperative_account ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_cooperative_account",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>

              <label className="label" id={"has_pension-" + memberKey}>
                34. तपाई पेन्सन बुझ्नुहुन्छ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_pension"
                  key={"तपाई पेन्सन बुझ्नुहुन्छ?" + memberKey}
                  value={member.has_pension ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(memberKey, "has_pension", e.target.value)
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>
              {member.has_pension == "1" && (
                <>
                  <label className="label" id={"pension_income-" + memberKey}>
                    a. पेन्सन आम्दानी मासिक (रू.){" "}
                  </label>
                  <div className="options-vertical">
                    <input
                      type="number"
                      className="form-control"
                      name="pension_income"
                      key={"पेन्सन आम्दानी मासिक (रू.)" + memberKey}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "pension_income",
                          e.target.value
                        )
                      }
                      placeholder="Ex: 25000"
                      defaultValue={member.pension_income ?? ""}
                    />
                  </div>
                </>
              )}
              <label className="label" id={"has_disability-" + memberKey}>
                35. अपाङ्ता छ?
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_disability"
                  key={"अपाङ्ता छ?" + memberKey}
                  value={member.has_disability ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_disability",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>

              {member.has_disability == "1" && (
                <div className="child-section">
                  <label
                    className="label"
                    id={"disability_type_id-" + memberKey}
                  >
                    a. अपाङ्गताको प्रकार:{" "}
                  </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      name="disability_type_id"
                      key={"अपाङ्गताको प्रकार:" + memberKey}
                      value={member.disability_type_id ?? ""}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "disability_type_id",
                          e.target.value
                        )
                      }
                    >
                      <option
                        value={""}
                        key={"disability_type_id - 1" + memberKey}
                      >
                        ----------
                      </option>
                      {disability_types.map((dt: any, keydt: any) => (
                        <option
                          value={dt.id}
                          key={keydt + "disability_type_id कार्डः"}
                        >
                          {dt.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label
                    className="label"
                    id={"disability_card_id-" + memberKey}
                  >
                    b. अपाङ्गताको कार्डः{" "}
                  </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      name="disability_card_id"
                      key={"अपाङ्गताको कार्डः" + memberKey}
                      value={member.disability_card_id ?? "0"}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "disability_card_id",
                          e.target.value
                        )
                      }
                    >
                      <option value={""}>----------</option>
                      {disability_card_types.map((dt: any, keydt: any) => (
                        <option value={dt.id} key={keydt + "अपाङ्गताको कार्डः"}>
                          {dt.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`form-group member-form-four`}
              id={14 + 2 + memberKey}
              key={"member-health-2-" + memberKey}
            >
              <h5>Member: {memberKey + 1} ****</h5>

              <label className="label" id={"has_chronic_disease-" + memberKey}>
                36. रोग छ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_chronic_disease"
                  key={"रोग छ?" + memberKey}
                  value={member.has_chronic_disease ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_chronic_disease",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>

              {member.has_chronic_disease == "1" && (
                <div className="child-section">
                  <label className="label" id={"disease_name-" + memberKey}>
                    a. रोगको नाम:{" "}
                  </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      name="disease_name"
                      key={"रोगको नाम:" + memberKey}
                      value={member.disease_name ?? "0"}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "disease_name",
                          e.target.value
                        )
                      }
                    >
                      <option value={""}>----------</option>
                      {disease_names.map((dt: any, keydt: any) => (
                        <option
                          value={dt.id}
                          key={keydt + "disability_type_id disease_name"}
                        >
                          {dt.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label
                    className="label"
                    id={"treatment_condition-" + memberKey}
                  >
                    b. उपचारको अवस्थाः{" "}
                  </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      name="treatment_condition"
                      key={"उपचारको अवस्थाः" + memberKey}
                      value={member.treatment_condition ?? "0"}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "treatment_condition",
                          e.target.value
                        )
                      }
                    >
                      <option value={""}>----------</option>
                      <option value={"औषधी गरिरहेको"}>औषधी गरिरहेको</option>
                      <option value={"नगरेको"}>नगरेको</option>
                      <option value={"छाडेको"}>छाडेको</option>
                    </select>
                  </div>
                </div>
              )}

              <label
                className="label"
                id={"covid_infection_status-" + memberKey}
              >
                37. तपाईलाई कोरोना सक्रमण वा शंका लागेको थियो ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="covid_infection_status"
                  key={
                    "तपाईलाई कोरोना सक्रमण वा शंका लागेको थियो ?" + memberKey
                  }
                  value={member.covid_infection_status ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "covid_infection_status",
                      e.target.value
                    )
                  }
                >
                  <option value={"सक्रमण भएको"}>सक्रमण भएको</option>
                  <option value={"सक्रमण नभएको"}>सक्रमण नभएको</option>
                  <option value={"शंका लागेको"}>शंका लागेको</option>
                </select>
              </div>

              <label className="label" id={"has_covid_vaccine-" + memberKey}>
                38. कोभिड भ्याक्सिन लगाएको/ नलगाएको
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_covid_vaccine"
                  key={"कोभिड भ्याक्सिन लगाएको/ नलगाएको" + memberKey}
                  value={member.has_covid_vaccine ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_covid_vaccine",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>नलगाएको</option>
                  <option value={"1"}>लगाएको</option>
                </select>
              </div>

              {member.has_covid_vaccine == "1" && (
                <div className="child-section">
                  <label
                    className="label"
                    id={"covid_vaccine_status-" + memberKey}
                  >
                    a. कुन भ्याक्सिन?{" "}
                  </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      name="covid_vaccine_status"
                      key={"रोगको नाम:" + memberKey}
                      value={member.covid_vaccine_status ?? "0"}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "covid_vaccine_status",
                          e.target.value
                        )
                      }
                    >
                      <option value={""}>----------</option>
                      <option value={"भेरोसेल(पहिलो डोज)"}>
                        भेरोसेल (पहिलो दोस्रो)
                      </option>
                      <option value={"भेरोसेल(दुवै डोज)"}>
                        भेरोसेल दुवै डोज
                      </option>
                      <option value={"जोनसन"}>जोनसन</option>
                      <option value={"कोभिसिल्ड(पहिलो डोज)"}>
                        कोभिसिल्ड ( पहिलो डोज)
                      </option>
                      <option value={"एस्ट्राजेनिका(पहिलो डोज)"}>
                        एस्ट्राजेनिका ( पहिलो डोज)
                      </option>
                      <option value={"कोभिसिल्ड(दुबै डोज)"}>
                        कोभिसिल्ड(दुबै डोज)
                      </option>
                      <option value={"एस्ट्राजेनिका(दुबै डोज)"}>
                        एस्ट्राजेनिका(दुबै डोज)
                      </option>
                    </select>
                  </div>
                </div>
              )}

              <label className="label" id={"has_smartphone-" + memberKey}>
                39. तपाईको स्माट्रफोन छ ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_smartphone"
                  key={"तपाईको स्माट्रफोन छ?" + memberKey}
                  value={member.has_smartphone ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_smartphone",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>
              {member.has_smartphone == "1" && (
                <div className="child-section">
                  <label className="label" id={"social_networks-" + memberKey}>
                    a. तपाईको तलको कुन कुन प्रयोग गर्नुहुन्छ?{" "}
                  </label>
                  <div className="options-vertical">
                    <Multiselect
                      options={socialNetworks} // Options to display in the dropdown
                      selectedValues={member.social_networks}
                      onSelect={(value) =>
                        handleMemberChange(memberKey, "social_networks", value)
                      }
                      onRemove={(value) =>
                        handleMemberChange(memberKey, "social_networks", value)
                      }
                      displayValue="name"
                    />
                  </div>
                </div>
              )}

              <label className="label" id={"has_voter_card-" + memberKey}>
                40. भोटर कार्ड भएको नभएको ?{" "}
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="has_voter_card"
                  key={"भोटर कार्ड भएको नभएको ?" + memberKey}
                  value={member.has_voter_card ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "has_voter_card",
                      e.target.value
                    )
                  }
                >
                  <option value={"0"}>छैन</option>
                  <option value={"1"}>छ</option>
                </select>
              </div>

              {member.has_voter_card == "1" && (
                <div className="child-section">
                  <label
                    className="label"
                    id={"voter_card_location-" + memberKey}
                  >
                    a. भोटर कार्ड कुन स्थानको भएको?
                  </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      name="voter_card_location"
                      key={"भोटर कार्ड भएको नभएको ?" + memberKey}
                      value={member.voter_card_location ?? "0"}
                      onChange={(e) =>
                        handleMemberChange(
                          memberKey,
                          "voter_card_location",
                          e.target.value
                        )
                      }
                    >
                      <option value={"गाउँपालिका"}>गाउँपालिका</option>
                      <option value={"गाउँपालिका बाहिर (रामेछाप जिल्ला)"}>
                        गाउँपालिका बाहिर (रामेछाप जिल्ला)
                      </option>
                      <option value={"काठमान्डौ"}>काठमान्डौ</option>
                      <option value={"अन्य जिल्ला"}>अन्य जिल्ला</option>
                    </select>
                  </div>
                </div>
              )}

              <label
                className="label"
                id={"feelings_for_local_government-" + memberKey}
              >
                41. अहिलेको स्थानिय सरकारको काम कस्तो लागेको छ?
              </label>
              <div className="options-vertical">
                <select
                  className="form-control"
                  name="feelings_for_local_government"
                  key={
                    "अहिलेको स्थानिय सरकारको काम कस्तो लागेको छ?" + memberKey
                  }
                  value={member.feelings_for_local_government ?? "0"}
                  onChange={(e) =>
                    handleMemberChange(
                      memberKey,
                      "feelings_for_local_government",
                      e.target.value
                    )
                  }
                >
                  <option value={"5"}>राम्रो</option>
                  <option value={"3"}>ठिकै सन्तोषजनक</option>
                  <option value={"1"}>नराम्रो</option>
                </select>
              </div>

              <label
                className="label"
                id={"recommendation_for_local_level-" + memberKey}
              >
                42. गाउँपालिकाले तिब्र विकासको लागि कुन क्षेत्रमा बढी ध्यान
                दिनुपर्छ ?
              </label>
              <div className="options-vertical">
                <Multiselect
                  key={"कुन क्षेत्रमा बढी ध्यान दिनुपर्छ ? " + memberKey}
                  options={developmentOption} // Options to display in the dropdown
                  selectedValues={member.recommendation_for_local_level}
                  onSelect={(value) =>
                    handleMemberChange(
                      memberKey,
                      "recommendation_for_local_level",
                      value
                    )
                  }
                  onRemove={(value) =>
                    handleMemberChange(
                      memberKey,
                      "recommendation_for_local_level",
                      value
                    )
                  }
                  displayValue="name"
                  selectionLimit={2}
                />
              </div>

              <label className="label" id={"house_count-" + memberKey}>
                43. तपाइँको गाउँपालिका भित्रको घरको संख्या?
              </label>
              <div className="options-verical">
                <input
                  onChange={(e) =>
                    handleMemberChange(memberKey, "house_count", e.target.value)
                  }
                  type="text"
                  className="form-control"
                  value={member.house_count ?? ""}
                  name="house_count"
                  placeholder="घरको संख्या"
                />
              </div>

              <label className="label" id={"land_count-" + memberKey}>
                44. जग्गा जमिनको संख्या?
              </label>
              <div className="options-verical">
                <input
                  onChange={(e) =>
                    handleMemberChange(memberKey, "land_count", e.target.value)
                  }
                  type="number"
                  className="form-control"
                  value={member.land_count ?? ""}
                  name="land_count"
                  placeholder="जमिनको संख्या"
                />
              </div>
            </div>
          </>
        ))}
    </>
  );
}
