import React, { useEffect, useState } from "react";
import { IMember } from "../../../db/models/Member";
import {
  education_levels,
  education_statuses,
  relations,
} from "../../../enums";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

export default function PariwarKoBibaran(props: any) {
  let { data, household, mems, occupations } = props;
  let { handleMemberChange } = props;
  const [members, setMembers] = useState([] as IMember[]);
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
  console.log(members);
  return (
    <>
      {member_counts.map((m: any, key: any) => (
        <div
          className={`form-group ${
            data && checkRequired(13 + 1 + m) ? "required" : ""
          }`}
          id={13 + 1 + m}
          key={"member" + key}
        >
          <h5>Member: {m + 1}</h5>
          <label className="label">14. सदस्यको नामथर:</label>
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
          <label className="label">15. मोवाईल नम्बर:</label>
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
          <label className="label">16. सदस्यको नागरिकता नं.</label>
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
          <label className="label">17. घरमुलीसँग नाता:</label>
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
          <label className="label">18. जन्ममितिः</label>
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

          <label className="label">19. सदस्यको शैक्षिक स्तरः:</label>
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

          <label className="label">20.सदस्यको पढाईको अवस्थाः</label>
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
                <option value={option.value} key={"education_status_id" + key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <label className="label">21. अनौपचारिक शिक्षा लिएको?</label>
          <div className="options-horizontal">
            <div className="radio" key={"अनौपचारिक शिक्षा लिएको?"}>
              <label>
                <input
                  type="radio"
                  value={"1"}
                  name="has_informal_education"
                  checked={
                    members.length > m &&
                    members[m].has_informal_education == "1"
                      ? true
                      : false
                  }
                  onChange={(e) =>
                    handleMemberChange(
                      m,
                      "has_informal_education",
                      e.target.value
                    )
                  }
                />
                लिएको
              </label>
            </div>
            <div className="radio" key={key}>
              <label>
                <input
                  type="radio"
                  value={"0"}
                  name="has_informal_education"
                  checked={
                    members.length > m &&
                    members[m].has_informal_education == "0"
                      ? true
                      : false
                  }
                  onChange={(e) =>
                    handleMemberChange(
                      m,
                      "has_informal_education",
                      e.target.value
                    )
                  }
                />
                नलिएको
              </label>
            </div>
          </div>

          <label className="label">22. मुख्य पेशा</label>
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

          <label className="label">23. सहायक पेशा:</label>
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

          <label className="label">24. मासिक आय:</label>
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
      ))}
    </>
  );
}
