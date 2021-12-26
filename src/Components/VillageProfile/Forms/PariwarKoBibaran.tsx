import React, { useEffect, useState } from "react";
import { IMember, ITrainingDetail, IVehicle } from "../../../db/models/Member";
import {
  disability_card_types,
  disability_types,
  disease_names,
  education_levels,
  education_statuses,
  marital_statuses,
  relations,
  vehicle_types,
} from "../../../enums";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
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
  let { data, household, mems, occupations, technical_skills } = props;
  let { handleMemberChange } = props;
  const [members, setMembers] = useState([] as IMember[]);
  const [techSkill, setTechSkill] = useState(initialTechSkill);
  const [vehicle, setVehicle] = useState(initialVehicle);
  let member_counts = [1];
  useEffect(() => {
    setMembers([...mems]);
  }, [mems]);

  const checkRequired = (id: number) => {
    let requiredFields = data?.requiredFields || [];
    return requiredFields.indexOf(id) > -1;
  };
  if (household.num_of_member) {
    member_counts = Array.from(
      new Array(parseInt(household.num_of_member)),
      (x, i) => i
    );
  } else {
    member_counts = [];
  }
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
      let v = vehicle_types.find((s: any) => s.value == e.target.value);
      setVehicle((vehicle) => ({
        ...vehicle,
        vehicle_type_name: v.label,
      }));
    }
  };

  const saveTechSkill = (m: any, cmd: string, skill_name?: any) => {
    let newTechSkills;
    if (cmd == "add") {
      newTechSkills = members[m].technical_skills ?? [];
      newTechSkills.push(techSkill);
    } else {
      newTechSkills = members[m].technical_skills ?? [];
      const index = newTechSkills.findIndex(
        (obj: any) => obj.skill_name === skill_name
      );
      newTechSkills.splice(index, 1);
    }
    console.log(newTechSkills);
    handleMemberChange(m, "technical_skills", newTechSkills);
    setTechSkill({ ...initialTechSkill });
  };

  const saveVehicle = (m: any, cmd: string, vehicle_name?: any) => {
    let newVehicles;
    if (cmd == "add") {
      newVehicles = members[m].vehicles ?? [];
      newVehicles.push(vehicle);
    } else {
      newVehicles = members[m].vehicles ?? [];
      const index = newVehicles.findIndex(
        (obj: any) => obj.vehicle_type_name === vehicle_name
      );
      newVehicles.splice(index, 1);
    }
    console.log(newVehicles);
    handleMemberChange(m, "vehicles", newVehicles);
    setVehicle({ ...initialVehicle });
  };
  return (
    <>
      {member_counts.map((m: any, key: any) => (
        <>
          <div
            className={`form-group ${
              data && checkRequired(14 + 1 + m) ? "required" : ""
            }`}
            id={14 + 1 + m}
            key={"member" + key}
          >
            <h5>Member: {m + 1}</h5>
            <label className="label">15. सदस्यको नामथर:</label>
            <div className="options-verical">
              <input
                onChange={(e) =>
                  handleMemberChange(m, "name_eng", e.target.value)
                }
                type="text"
                className="form-control"
                placeholder="In English"
                defaultValue={members.length > m ? members[m].name_eng : ""}
                name="name_eng"
                required
              />
            </div>
            <label className="label">16. मोवाईल नम्बर:</label>
            <div className="options-verical">
              <input
                onChange={(e) =>
                  handleMemberChange(m, "mobile_num", e.target.value)
                }
                type="text"
                className="form-control"
                defaultValue={members.length > m ? members[m].mobile_num : ""}
                name="mobile_num"
                placeholder="Mobile"
              />
            </div>
            <label className="label">17. सदस्यको नागरिकता नं.</label>
            <div className="options-verical">
              <input
                onChange={(e) =>
                  handleMemberChange(m, "citizenship_num", e.target.value)
                }
                type="text"
                className="form-control"
                defaultValue={
                  members.length > m ? members[m].citizenship_num : ""
                }
                name="citizenship_num"
                placeholder="Citizenship No"
              />
            </div>
            <label className="label">18. घरमुलीसँग नाता:</label>
            <div className="options-verical">
              <select
                className="form-control"
                value={
                  members.length > m && members[m].relation_with_hoh_id
                    ? members[m].relation_with_hoh_id.toString()
                    : ""
                }
                name="relation_with_hoh_id"
                onChange={(e) =>
                  handleMemberChange(m, "relation_with_hoh_id", e.target.value)
                }
              >
                <option value={""} key={"relation_with_hoh-1"}>
                  ------ नाता ------
                </option>
                {relations.map((option, key) => (
                  <option value={option.value} key={"relation_with_hoh" + key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <label className="label">19. जन्ममितिः</label>
            <div className="options-verical">
              <NepaliDatePicker
                inputClassName="form-control"
                className=""
                value={
                  members.length > m && members[m].dob_bs
                    ? members[m].dob_bs.toString()
                    : null
                }
                onChange={(value) => handleMemberChange(m, "dob_bs", value)}
                options={{ calenderLocale: "en", valueLocale: "en" }}
              />
            </div>

            <label className="label">20. सदस्यको शैक्षिक स्तरः:</label>
            <div className="options-verical">
              <select
                className="form-control"
                value={
                  members.length > m && members[m].education_level_id
                    ? members[m].education_level_id.toString()
                    : ""
                }
                name="education_level_id"
                onChange={(e) =>
                  handleMemberChange(m, "education_level_id", e.target.value)
                }
              >
                <option value={""} key={"education_level_id-1"}>
                  ------ शैक्षिक स्तरः ------
                </option>
                {education_levels.map((option, key) => (
                  <option value={option.value} key={"education_level_id" + key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <label className="label">21.सदस्यको पढाईको अवस्थाः</label>
            <div className="options-verical">
              <select
                className="form-control"
                value={
                  members.length > m && members[m].education_status_id
                    ? members[m].education_status_id.toString()
                    : ""
                }
                name="education_status_id"
                onChange={(e) =>
                  handleMemberChange(m, "education_status_id", e.target.value)
                }
              >
                <option value={""} key={"education_status_id-1"}>
                  ------ पढाईको अवस्था ------
                </option>
                {education_statuses.map((option, key) => (
                  <option
                    value={option.value}
                    key={"education_status_id" + key}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <label className="label">22. अनौपचारिक शिक्षा लिएको?</label>
            <div className="options-horizontal">
              <select
                className="form-control"
                name="has_informal_education"
                key={"अनौपचारिक शिक्षा लिएको" + key}
                value={
                  members.length > m && members[m].has_informal_education
                    ? members[m].has_informal_education.toString()
                    : ""
                }
                onChange={(e) =>
                  handleMemberChange(
                    m,
                    "has_informal_education",
                    e.target.value
                  )
                }
              >
                <option value={"1"}>लिएको</option>
                <option value={"0"}>नलिएको</option>
              </select>
            </div>

            <label className="label">23. मुख्य पेशा</label>
            <div className="options-verical">
              <select
                className="form-control"
                name="main_occupation_id"
                required
                value={
                  members.length > m && members[m].main_occupation_id
                    ? members[m].main_occupation_id.toString()
                    : ""
                }
                onChange={(e) =>
                  handleMemberChange(m, "main_occupation_id", e.target.value)
                }
              >
                <option value={""} key={"main_occupation_id-1"}>
                  ------ मुख्य पेशा ------
                </option>
                {occupations.map((d: any, key: any) => (
                  <option value={d.id} key={"main_occupation_id" + key}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            <label className="label">24. सहायक पेशा:</label>
            <div className="options-verical">
              <select
                className="form-control"
                name="other_occupation_id"
                required
                value={
                  members.length > m && members[m].other_occupation_id
                    ? members[m].other_occupation_id.toString()
                    : ""
                }
                onChange={(e) =>
                  handleMemberChange(m, "other_occupation_id", e.target.value)
                }
              >
                <option value={""} key={"other_occupation_id-1"}>
                  ------ सहायक पेशा ------
                </option>
                {occupations.map((d: any, key: any) => (
                  <option value={d.id} key={"other_occupation_id" + key}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            <label className="label">25. मासिक आय:</label>
            <div className="options-verical">
              <input
                onChange={(e) =>
                  handleMemberChange(m, "monthly_income", e.target.value)
                }
                type="text"
                className="form-control"
                value={
                  members.length > m && members[m].monthly_income
                    ? members[m].monthly_income.toString()
                    : ""
                }
                name="monthly_income"
              />
            </div>
          </div>

          <div
            className={`form-group ${
              data && checkRequired(14 + 1 + m) ? "required" : ""
            }`}
            id={14 + 1 + m}
            key={"member-2-" + key}
          >
            <h5>Member: {m + 1} ..</h5>
            <label className="label">26. बसोबास गर्ने ठाउः</label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="resident_place"
                key={"बसोबास गर्ने ठाउः" + key}
                value={
                  members.length > m && members[m].resident_place
                    ? members[m].resident_place.toString()
                    : ""
                }
                onChange={(e) =>
                  handleMemberChange(m, "resident_place", e.target.value)
                }
              >
                <option value={"गाउँ"}>पुर्ण गाउँ</option>
                <option value={"काठमान्डौ"}>काठमान्डौ</option>
                <option value={"गाउँ/शहर"}>गाउँ/शहर</option>
                <option value={"बिदेश"}>बिदेश</option>
                <option value={"अन्य"}>अन्य</option>
              </select>
            </div>

            <label className="label">27. वैवाविक स्थितिः </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="is_married"
                key={"वैवाविक स्थितिः" + key}
                value={
                  members.length > m && members[m].is_married
                    ? members[m].is_married.toString()
                    : ""
                }
                onChange={(e) =>
                  handleMemberChange(m, "is_married", e.target.value)
                }
              >
                <option value={"0"}>अबिवाहित</option>
                <option value={"1"}>विवाहित</option>
              </select>
            </div>
            {members.length > m && members[m].is_married == "1" && (
              <>
                <label className="label">27.1. विवाहित भएमाः </label>
                <div className="options-vertical">
                  <select
                    className="form-control"
                    name="marital_status_id"
                    key={"वैवाविक स्थितिः" + key}
                    value={
                      members.length > m && members[m].marital_status_id
                        ? members[m].marital_status_id.toString()
                        : ""
                    }
                    onChange={(e) =>
                      handleMemberChange(m, "marital_status_id", e.target.value)
                    }
                  >
                    {marital_statuses.map((ms, keym) => (
                      <option
                        value={ms.value}
                        key={"वैवाविक स्थितिःoption" + keym}
                      >
                        {ms.label}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="label">27.2. विवाह भएको सालः </label>
                <div className="options-vertical">
                  <input
                    type="number"
                    className="form-control"
                    name="marriage_year"
                    key={"वैवाविक स्थितिः" + key}
                    value={
                      members.length > m && members[m].marriage_year
                        ? members[m].marriage_year.toString()
                        : ""
                    }
                    onChange={(e) =>
                      handleMemberChange(m, "marriage_year", e.target.value)
                    }
                    placeholder="Ex: 2077"
                  />
                </div>

                <label className="label">27.3. विबाह हुँदाको उमेर </label>
                <div className="options-vertical">
                  <input
                    type="number"
                    className="form-control"
                    name="age_on_marriage"
                    key={"विबाह हुँदाको उमेर" + key}
                    value={
                      members.length > m && members[m].age_on_marriage
                        ? members[m].age_on_marriage.toString()
                        : ""
                    }
                    onChange={(e) =>
                      handleMemberChange(m, "age_on_marriage", e.target.value)
                    }
                    placeholder="Ex: 26"
                  />
                </div>
              </>
            )}
            <label className="label">28. प्राविधिक सिप </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_technical_training"
                key={"प्राविधिक सिप" + key}
                value={
                  members.length > m && members[m].has_technical_training
                    ? members[m].has_technical_training.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(
                    m,
                    "has_technical_training",
                    e.target.value
                  )
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>

            {members.length > m && members[m].has_technical_training == "1" && (
              <div
                style={{
                  background: "#bbbbbb73",
                  margin: "10px",
                  padding: "0 10px 15px 10px",
                }}
              >
                {members[m].technical_skills &&
                  members[m].technical_skills.length &&
                  members[m].technical_skills.map((ts: any, ts_key: any) => (
                    <button
                      className="btn btn-outline-secondary btn-block"
                      key={ts_key}
                      onClick={() => saveTechSkill(m, "remove", ts.skill_name)}
                    >
                      {ts.skill_name} - {ts.duration}
                    </button>
                  ))}
                <br />
                <label className="label">a. सिपको नामः </label>
                <div className="options-vertical">
                  <select
                    className="form-control"
                    key={"28.1 सिपको नामः" + key}
                    name="skill_id"
                    value={techSkill.skill_id}
                    onChange={handleTechSkillChange}
                  >
                    <option value={""} key={"29.0 सिप सिपको नामः"}>
                      ------ सिपको नाम ------
                    </option>
                    {technical_skills.map((ms: any, keyt: any) => (
                      <option
                        value={ms.id}
                        key={"28.1 सिपको नामःoption" + keyt}
                      >
                        {ms.name}
                      </option>
                    ))}
                  </select>
                  <label className="label">b. सिप हासिलः </label>
                  <div className="options-vertical">
                    <select
                      className="form-control"
                      key={"28.2 सिप हासिलः" + key}
                      name="source"
                      value={techSkill.source}
                      onChange={handleTechSkillChange}
                    >
                      <option value={""} key={"29.0 सिप हासिलःoption1"}>
                        ------ सिप हासिल ------
                      </option>
                      <option value={"0"} key={"29.1 सिप हासिलःoption1"}>
                        स्वज्ञान
                      </option>
                      <option value={"1"} key={"29.1 सिप हासिलःoption2"}>
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
                        key={"तालिम लिएको भए तालिमको अविधिः महिनामा" + key}
                        // value={}
                        onChange={handleTechSkillChange}
                        placeholder="Ex: 3"
                      />
                    </>
                  )}
                  <button
                    onClick={() => saveTechSkill(m, "add")}
                    className="btn btn-sm btn-success"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}

            <label className="label">29. सवारी साधन ? </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_vehicle"
                key={"सवारी साधन ?" + key}
                value={
                  members.length > m && members[m].has_vehicle
                    ? members[m].has_vehicle.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(m, "has_vehicle", e.target.value)
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>

            {members.length > m && members[m].has_vehicle == "1" && (
              <div
                style={{
                  background: "#bbbbbb73",
                  margin: "10px",
                  padding: "0 10px 15px 10px",
                }}
              >
                {members[m].vehicles &&
                  members[m].vehicles.length &&
                  members[m].vehicles.map((v: any, ts_key: any) => (
                    <button
                      className="btn btn-outline-success btn-block"
                      key={ts_key}
                      onClick={() =>
                        saveVehicle(m, "remove", v.vehicle_type_name)
                      }
                    >
                      {v.vehicle_type_name} - {v.count}
                    </button>
                  ))}
                <br />
                <label className="label">a. सवारी साधनको नामः </label>
                <div className="options-vertical">
                  <select
                    className="form-control"
                    key={"28.1 सवारी साधनको नामः" + key}
                    name="vehicle_type_id"
                    value={vehicle.vehicle_type_id}
                    onChange={handleVehicleChange}
                  >
                    <option value={""} key={"29.0 सिप सवारी साधनको नामः"}>
                      ------ सवारी साधनको नाम ------
                    </option>
                    {vehicle_types.map((ms: any, keyv: any) => (
                      <option
                        value={ms.value}
                        key={"28.1 सवारी साधनको नाम नामःoption" + keyv}
                      >
                        {ms.label}
                      </option>
                    ))}
                  </select>
                  <label className="label">b. कति? </label>
                  <div className="options-vertical">
                    <input
                      type="number"
                      className="form-control"
                      name="count"
                      key={"b.  कति?" + key}
                      onChange={handleVehicleChange}
                      placeholder="Ex: 1"
                      value={1}
                    />
                  </div>
                  <button
                    onClick={() => saveVehicle(m, "add")}
                    className="btn btn-sm btn-success"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
            <label className="label">30. स्वास्थ्य बिमा गरिएको छ ? </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_health_insurance"
                key={"स्वास्थ्य बिमा गरिएको छ.?" + key}
                value={
                  members.length > m && members[m].has_health_insurance
                    ? members[m].has_health_insurance.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(m, "has_health_insurance", e.target.value)
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>

            <label className="label">31. जिमा बिमा गरिएको छ ? </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_life_insurance"
                key={"जिमा बिमा गरिएको छ ?" + key}
                value={
                  members.length > m && members[m].has_life_insurance
                    ? members[m].has_life_insurance.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(m, "has_life_insurance", e.target.value)
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>

            <label className="label">32. बैंकमा खाता छ? </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_bank_account"
                key={"बैंकमा खाता छ?" + key}
                value={
                  members.length > m && members[m].has_bank_account
                    ? members[m].has_bank_account.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(m, "has_bank_account", e.target.value)
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>

            <label className="label">33. सहकारीमा सदस्य हुनुहुन्छ? </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_cooperative_account"
                key={"सहकारीमा सदस्य हुनुहुन्छ?" + key}
                value={
                  members.length > m && members[m].has_cooperative_account
                    ? members[m].has_cooperative_account.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(
                    m,
                    "has_cooperative_account",
                    e.target.value
                  )
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>

            <label className="label">34. तपाई पेन्सन बुझ्नुहुन्छ? </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_pension"
                key={"तपाई पेन्सन बुझ्नुहुन्छ?" + key}
                value={
                  members.length > m && members[m].has_pension
                    ? members[m].has_pension.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(m, "has_pension", e.target.value)
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>
            {members.length > m && members[m].has_pension == "1" && (
              <>
                <label className="label">a. पेन्सन आम्दानी मासिक (रू.) </label>
                <div className="options-vertical">
                  <input
                    type="number"
                    className="form-control"
                    name="pension_income"
                    key={"पेन्सन आम्दानी मासिक (रू.)" + key}
                    onChange={(e) =>
                      handleMemberChange(m, "pension_income", e.target.value)
                    }
                    placeholder="Ex: 25000"
                    defaultValue={
                      members[m].pension_income ? members[m].pension_income : ""
                    }
                  />
                </div>
              </>
            )}

            <label className="label">35. अपाङ्ता छ? </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_disability"
                key={"अपाङ्ता छ?" + key}
                value={
                  members.length > m && members[m].has_disability
                    ? members[m].has_disability.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(m, "has_disability", e.target.value)
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>

            {members.length > m && members[m].has_disability == "1" && (
              <>
                <label className="label">a. अपाङ्गताको प्रकार: </label>
                <div className="options-vertical">
                  <select
                    className="form-control"
                    name="disability_type_id"
                    key={"अपाङ्गताको प्रकार:" + key}
                    value={
                      members.length > m && members[m].disability_type_id
                        ? members[m].disability_type_id.toString()
                        : "0"
                    }
                    onChange={(e) =>
                      handleMemberChange(
                        m,
                        "disability_type_id",
                        e.target.value
                      )
                    }
                  >
                    <option value={""}>----------</option>
                    {disability_types.map((dt: any, keydt: any) => (
                      <option
                        value={dt.value}
                        key={keydt + "disability_type_id कार्डः"}
                      >
                        {dt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="label">b. अपाङ्गताको कार्डः </label>
                <div className="options-vertical">
                  <select
                    className="form-control"
                    name="disability_card_id"
                    key={"अपाङ्गताको कार्डः" + key}
                    value={
                      members.length > m && members[m].disability_card_id
                        ? members[m].disability_card_id.toString()
                        : "0"
                    }
                    onChange={(e) =>
                      handleMemberChange(
                        m,
                        "disability_card_id",
                        e.target.value
                      )
                    }
                  >
                    <option value={""}>----------</option>
                    {disability_card_types.map((dt: any, keydt: any) => (
                      <option
                        value={dt.value}
                        key={keydt + "अपाङ्गताको कार्डः"}
                      >
                        {dt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <label className="label">36. रोग छ? </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_chronic_disease"
                key={"रोग छ?" + key}
                value={
                  members.length > m && members[m].has_chronic_disease
                    ? members[m].has_chronic_disease.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(m, "has_chronic_disease", e.target.value)
                }
              >
                <option value={"0"}>छैन</option>
                <option value={"1"}>छ</option>
              </select>
            </div>

            {members.length > m && members[m].has_chronic_disease == "1" && (
              <>
                <label className="label">a. रोगको नाम: </label>
                <div className="options-vertical">
                  <select
                    className="form-control"
                    name="disease_name"
                    key={"रोगको नाम:" + key}
                    value={
                      members.length > m && members[m].disease_name
                        ? members[m].disease_name.toString()
                        : "0"
                    }
                    onChange={(e) =>
                      handleMemberChange(m, "disease_name", e.target.value)
                    }
                  >
                    <option value={""}>----------</option>
                    {disease_names.map((dt: any, keydt: any) => (
                      <option
                        value={dt.value}
                        key={keydt + "disability_type_id disease_name"}
                      >
                        {dt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="label">b. उपचारको अवस्थाः </label>
                <div className="options-vertical">
                  <select
                    className="form-control"
                    name="treatment_condition"
                    key={"उपचारको अवस्थाः" + key}
                    value={
                      members.length > m && members[m].treatment_condition
                        ? members[m].treatment_condition.toString()
                        : "0"
                    }
                    onChange={(e) =>
                      handleMemberChange(
                        m,
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
              </>
            )}

            <label className="label">
              37. तपाईलाई कोरोना सक्रमण वा शंका लागेको थियो ?{" "}
            </label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="covid_infection_status"
                key={"तपाईलाई कोरोना सक्रमण वा शंका लागेको थियो ?" + key}
                value={
                  members.length > m && members[m].covid_infection_status
                    ? members[m].covid_infection_status.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(
                    m,
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

            <label className="label">38. कोभिड भ्याक्सिन लगाएको/ नलगाएको</label>
            <div className="options-vertical">
              <select
                className="form-control"
                name="has_covid_vaccine"
                key={"कोभिड भ्याक्सिन लगाएको/ नलगाएको" + key}
                value={
                  members.length > m && members[m].has_covid_vaccine
                    ? members[m].has_covid_vaccine.toString()
                    : "0"
                }
                onChange={(e) =>
                  handleMemberChange(m, "has_covid_vaccine", e.target.value)
                }
              >
                <option value={"0"}>नलगाएको</option>
                <option value={"1"}>लगाएको</option>
              </select>
            </div>

            {members.length > m && members[m].has_covid_vaccine == "1" && (
              <>
                <label className="label">a. कुन भ्याक्सिन? </label>
                <div className="options-vertical">
                  <select
                    className="form-control"
                    name="covid_vaccine_status"
                    key={"रोगको नाम:" + key}
                    value={
                      members.length > m && members[m].covid_vaccine_status
                        ? members[m].covid_vaccine_status.toString()
                        : "0"
                    }
                    onChange={(e) =>
                      handleMemberChange(
                        m,
                        "covid_vaccine_status",
                        e.target.value
                      )
                    }
                  >
                    <option value={""}>----------</option>
                    <option value={"भेरोसेल(पहिलो डोज)"}>भेरोसेल (पहिलो दोस्रो)</option>
                    <option value={"भेरोसेल(दुवै डोज)"}>भेरोसेल दुवै डोज</option>
                    <option value={"जोनसन"}>जोनसन</option>
                    <option value={"कोभिसिल्ड(पहिलो डोज)"}>कोभिसिल्ड ( पहिलो डोज)</option>
                    <option value={"एस्ट्राजेनिका(पहिलो डोज)"}>एस्ट्राजेनिका ( पहिलो  डोज)</option>
                    <option value={"कोभिसिल्ड(दुबै डोज)"}>कोभिसिल्ड(दुबै डोज)</option>
                    <option value={"एस्ट्राजेनिका(दुबै डोज)"}>एस्ट्राजेनिका(दुबै डोज)</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </>
      ))}
    </>
  );
}
