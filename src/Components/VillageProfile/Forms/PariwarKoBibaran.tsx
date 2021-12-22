import React, { useEffect, useState } from "react";
import { getMembersbyHousehold, IMember } from "../../../db/models/Member";
import { relations } from "../../../enums";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

export default function PariwarKoBibaran(props: any) {
  let { data, household } = props;
  let { handleMemberChange, saveHousehold } = props;
  const [members, setMembers] = useState([] as IMember[]);
  const [editingMember, setEditingMember] = useState({} as IMember);
  let member_counts = [1];
  useEffect(() => {
    // if (household.id) {
    //   loadMembersByHoushold();
    // } else {
    //   saveHousehold();
    // }
  }, [household]);

  const loadMembersByHoushold = async () => {
    let mems = await getMembersbyHousehold(household.id);
    setMembers([...mems]);
    console.log(members);
  };

  const checkRequired = (id: number) => {
    let requiredFields = data?.requiredFields || [];
    return requiredFields.indexOf(id) > -1;
  };
  if (household.num_of_member) {
    console.log(household);
    member_counts = Array.from(
      new Array(parseInt(household.num_of_member)),
      (x, i) => i
    );
  }
  console.log(household);
  return (
    <>
      {member_counts.map((m: any) => (
        <div
          className={`form-group ${
            data && checkRequired(13 + 1 + m) ? "required" : ""
          }`}
          id={13 + 1 + m}
          key={m}
        >
          <h5>Member: {m + 1}</h5>
          <label className="label">13. सदस्यको नामथर:</label>
          <div className="options-verical">
            <input
              onChange={(e) => handleMemberChange(e, m)}
              type="text"
              className="form-control"
              placeholder="In English"
              defaultValue={
                members.length > m
                  ? members[m].name_eng
                  : m === 0
                  ? household.hoh_name
                  : ""
              }
              name="name_eng"
              required
            />
          </div>
          <label className="label">14. मोवाईल नम्बर:</label>
          <div className="options-verical">
            <input
              onChange={(e) => handleMemberChange(e, m)}
              type="text"
              className="form-control"
              defaultValue={members.length > m ? members[m].mobile_num : ""}
              name="mobile_num"
              placeholder="Mobile"
            />
          </div>
          <label className="label">15. सदस्यको नागरिकता नं.</label>
          <div className="options-verical">
            <input
              onChange={(e) => handleMemberChange(e, m)}
              type="text"
              className="form-control"
              defaultValue={
                members.length > m ? members[m].citizenship_num : ""
              }
              name="citizenship_num"
              placeholder="Citizenship No"
            />
          </div>
          <label className="label">16. घरमुलीसँग नाता:</label>
          <div className="options-verical">
            <select
              className="form-control"
              value={
                members.length > m && members[m].relation_with_hoh_id
                  ? members[m].relation_with_hoh_id
                  : ""
              }
              name="relation_with_hoh_id"
              onChange={handleMemberChange}
            >
              {relations.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <label className="label">17. जन्ममितिः</label>
          <div className="options-verical">
            <NepaliDatePicker
              inputClassName="form-control"
              className=""
              value={
                members.length > m && members[m].relation_with_hoh_id
                  ? members[m].relation_with_hoh_id
                  : ""
              }
              //   onChange={}
              options={{ calenderLocale: "en", valueLocale: "en" }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
