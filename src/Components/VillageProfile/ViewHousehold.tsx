import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getBastiById, IBasti } from "../../db/models/BastiModel";
import { getHouseholdById, IHousehold } from "../../db/models/Household";
import { getJaatiById, IJaati } from "../../db/models/JaatiModel";
import { getMargaById, IMarga } from "../../db/models/MargaModel";
import { getMembersbyHousehold, IMember } from "../../db/models/Member";
import { getWardById, IWard, getAllWards } from "../../db/models/WardModel";
import { gender_choice, hoh_roles } from "../../enums";

export default function ViewHousehold() {
  let { id } = useParams<{ id: any }>();
  const history = useHistory();

  const [household, setHousehold] = useState({} as IHousehold);
  const [ward, setWard] = useState({} as IWard);
  const [marga, setMarga] = useState({} as IMarga);
  const [basti, setBasti] = useState({} as IBasti);
  const [jaati, setJaati] = useState({} as IJaati);
  const [members, setMembers] = useState([] as IMember[]);
  useEffect(() => {
    getHousehold();
  }, []);

  const getHousehold = async () => {
    let hh = await getHouseholdById(id);
    setHousehold({ ...hh });
    getWard(hh);
    getMarga(hh);
    getBasti(hh);
    getJaati(hh);
    getMembers(hh);
  };
  const getWard = async (hh: IHousehold) => {
    let w = await getWardById(hh.ward_id);
    setWard(w);
  };
  const getBasti = async (hh: IHousehold) => {
    let b = await getBastiById(hh.ward_id);
    setBasti(b);
  };
  const getMarga = async (hh: IHousehold) => {
    let m = await getMargaById(hh.marga_id);
    setMarga(m);
  };
  const getJaati = async (hh: IHousehold) => {
    let j = await getJaatiById(hh.jaati_id);
    setJaati(j);
  };

  const getMembers = async (hh: IHousehold) => {
    let mems = await getMembersbyHousehold(hh.id.toString());
    setMembers([...mems]);
    console.log(mems);
  };

  const findInEnumById = (options: any, id: string) => {
    let v = options.find((s: any) => s.id === id);
    if (v) {
      return v.name;
    }
    return "";
  };

  if (household) {
    return (
      <div className="view-household">
       <button className="btn btn-warning back-btn" onClick={() => history.goBack()}>
        Back
      </button>
        {household.is_posted == "0" && (
          <button
            className="btn btn-danger"
            onClick={() =>
              history.push("/village-profile-app/app/edit/" + household.id)
            }
          >
            Edit
          </button>
        )}

        <h3>{household.hoh_name}</h3>
        <img src={household.hoh_image}/>
        <p>
          Ward: <h4>{ward?.name}</h4>
        </p>
        <p>
          Basti:<h4> {basti?.name}</h4>
        </p>
        <p>
          Marga:<h4> {marga?.name}</h4>
        </p>
        <p>
          House No:<h4> {household.house_num}</h4>
        </p>
        <p>
          HOH Gender:
          <h4> {findInEnumById(gender_choice, household.hoh_gender)}</h4>
        </p>
        <p>
          HOH Role:
          <h4> {findInEnumById(hoh_roles, household.hoh_role)}</h4>
        </p>
        <p>
          Jaati:
          <h4> {jaati?.name}</h4>
        </p>
      </div>
    );
  } else {
    return <div className="vp-home">Server Loading...</div>;
  }
}
