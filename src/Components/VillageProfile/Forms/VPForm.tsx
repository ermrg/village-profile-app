import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getBastiByWardId, IBasti } from "../../../db/models/BastiModel";
import { getAllDharmas, IDharma } from "../../../db/models/DharmaModel";
import {
  addNewHousehold,
  IHousehold,
  updateHousehold,
} from "../../../db/models/Household";
import { getAllJaatis, IJaati } from "../../../db/models/JaatiModel";
import { getMargaByBastiId, IMarga } from "../../../db/models/MargaModel";
import {
  addNewMember,
  getMembersbyHousehold,
  IMember,
  updateMember,
} from "../../../db/models/Member";
import { getAllOccupations, IOccupation } from "../../../db/models/Occupation";
import {
  getAllTechnicalSkills,
  ITechnicalSkill,
} from "../../../db/models/TechnicalSkill";
import { getAllUsers, IUser } from "../../../db/models/UserModel";
import { getAllWards, IWard } from "../../../db/models/WardModel";
import GharKoBiabarn from "./GharKoBiabarn";
import GharKoDetailBiabarn from "./GharKoDetailBiabarn";
import PariwarKoBibaran from "./PariwarKoBibaran";

export default function VPForm(props: any) {
  const history = useHistory();
  let { data } = props;

  const [auth, setAuth] = useState({} as IUser);
  const [wards, setWards] = useState([] as IWard[]);
  const [bastis, setBastis] = useState([] as IBasti[]);
  const [margas, setMargas] = useState([] as IMarga[]);
  const [jaatis, setJaatis] = useState([] as IJaati[]);
  const [dharmas, setDharmas] = useState([] as IDharma[]);
  const [household, setHousehold] = useState({} as IHousehold);
  const [members, setMembers] = useState([] as IMember[]);
  const [occupations, setOccupations] = useState([] as IOccupation[]);
  const [technical_skills, setTechnicalSkills] = useState(
    [] as ITechnicalSkill[]
  );
  useEffect(() => {
    checkUser();
    loadAllWada();
    loadJaatiAndDharma();
    setHousehold({ ...data.household });
    if (data.household) {
      if (data.household.ward_id) {
        loadBastiByWadaId(data.household.ward_id);
      }
      if (data.household.basti_id) {
        loadMargaByBastiId(data.household.basti_id);
      }
      if (data.household.id) {
        loadMembersByHoushold(data.household.id);
      }
    }
  }, [data]);
  const loadMembersByHoushold = async (household_id: string) => {
    let mems = await getMembersbyHousehold(household_id);
    setMembers([...mems]);
  };

  const checkUser = async () => {
    let auth_ = await getAllUsers();
    if (auth_.length) {
      setAuth({ ...auth_[0] });
    }
  };

  async function loadAllWada() {
    let wards = await getAllWards();
    setWards([...wards]);
  }

  const loadJaatiAndDharma = async () => {
    let jaatis_ = await getAllJaatis();
    setJaatis([...jaatis_]);
    let dharmas_ = await getAllDharmas();
    setDharmas([...dharmas_]);
    let occupations_ = await getAllOccupations();
    setOccupations([...occupations_]);
    let ts = await getAllTechnicalSkills();
    setTechnicalSkills([...ts]);
  };

  const saveAndExitHousehold = async () => {
    let hh_id: any;
    if (household.id) {
      hh_id = household.id;
      await updateHousehold(household);
      console.log("Updated!");
    } else {
      hh_id = await addNewHousehold({
        ...household,
        status: "0",
        is_posted: "0",
        user_id: auth.id?.toString(),
      });
      setHousehold((household) => ({
        ...household,
        id: hh_id,
        is_posted: "0",
        user_id: auth.id?.toString(),
      }));
      console.log("Saved!");
    }
    await saveMembers(hh_id);
    history.push("/village-profile-app/app");
  };

  const saveHousehold = async () => {
    let hh_id: any;
    if (household.id) {
      hh_id = household.id;
      await updateHousehold(household);
      console.log("Updated!");
    } else {
      hh_id = await addNewHousehold({
        ...household,
        status: "0",
        is_posted: "0",
        user_id: auth.id?.toString(),
      });
      setHousehold((household) => ({
        ...household,
        id: hh_id,
        is_posted: "0",
        user_id: auth.id?.toString(),
      }));
      console.log("Saved!");
    }
    await saveMembers(hh_id);
  };

  const saveMembers = async (hh_id: any) => {
    let memberList = members;
    if (members.length) {
      members.map(async (m, key) => {
        if (m.id) {
          await updateMember(m);
        } else {
          m.hh_id = hh_id;
          let m_id = await addNewMember(m);
          memberList[key].id = m_id;
        }
      });
      setMembers([...memberList]);
    }
  };

  const loadBastiByWadaId = async (wardId: any) => {
    let bastis = await getBastiByWardId(wardId);
    setBastis([...bastis]);
  };

  const loadMargaByBastiId = async (bastiId: any) => {
    let margas = await getMargaByBastiId(bastiId);
    setMargas([...margas]);
  };

  const handleChange = (e: any) => {
    if (e.target.name === "ward_id") {
      loadBastiByWadaId(e.target.value);
    }
    if (e.target.name === "basti_id") {
      loadMargaByBastiId(e.target.value);
    }
    setHousehold((household) => ({
      ...household,
      [e.target.name]: e.target.value,
    }));
  };

  const handleArrayChangeInHousehold = (name: string, value: any) => {
    setHousehold((household) => ({
      ...household,
      [name]: value,
    }));
  };

  const handleMemberChange = (index: number, name: string, value: any) => {
    let mem = members.length > index ? members[index] : ({} as any);
    mem[name] = value;
    let newMemberList = members;
    newMemberList[index] = mem;
    setMembers([...newMemberList]);
  };
  return (
    <div className="vp-form-wrapper">
      <div className="save-btns">
        <button className="btn btn-sm btn-primary" onClick={saveHousehold}>
          Save
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={saveAndExitHousehold}
        >
          Save & Exit
        </button>
      </div>
      <div className="vp-form">
        <GharKoBiabarn
          hh={household}
          handleChange={handleChange}
          wards={wards}
          bastis={bastis}
          margas={margas}
          jaatis={jaatis}
          dharmas={dharmas}
          handleArrayChangeInHousehold={handleArrayChangeInHousehold}
        />
        <PariwarKoBibaran
          household={household}
          mems={members}
          handleMemberChange={handleMemberChange}
          saveHousehold={saveHousehold}
          occupations={occupations}
          technical_skills={technical_skills}
        />
        <GharKoDetailBiabarn
          hh={household}
          handleChange={handleChange}
          members={members}
          wards={wards}
          handleArrayChangeInHousehold={handleArrayChangeInHousehold}
        />
        <div className="form-group" style={{ height: "50vh" }}>
          <div className="vp-home">
            <div className="btn btn-success">Complete</div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
}
