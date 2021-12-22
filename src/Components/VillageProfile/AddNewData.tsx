import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getBastiByWardId, IBasti } from "../../db/models/BastiModel";
import { getAllDharmas, IDharma } from "../../db/models/DharmaModel";
import {
  addNewHousehold,
  IHousehold,
  updateHousehold,
} from "../../db/models/Household";
import { getAllJaatis, IJaati } from "../../db/models/JaatiModel";
import { getMargaByBastiId, IMarga } from "../../db/models/MargaModel";
import { getAllUsers, IUser } from "../../db/models/UserModel";
import { getAllWards, IWard } from "../../db/models/WardModel";
import GharKoBiabarn from "./Forms/GharKoBiabarn";
import PariwarKoBibaran from "./Forms/PariwarKoBibaran";
const requiredFields = [1, 2];

export default function AddNewData(props: any) {
  // To edit send data.household
  const history = useHistory();
  let { data } = props;
  const [auth, setAuth] = useState({} as IUser);
  const [wards, setWards] = useState([] as IWard[]);
  const [bastis, setBastis] = useState([] as IBasti[]);
  const [margas, setMargas] = useState([] as IMarga[]);
  const [jaatis, setJaatis] = useState([] as IJaati[]);
  const [dharmas, setDharmas] = useState([] as IDharma[]);
  const [household, setHousehold] = useState({
    ...data.household,
  } as IHousehold);
  data.requiredFields = requiredFields;
  useEffect(() => {
    checkUser();
    loadAllWada();
    loadJaatiAndDharma();
  }, []);

  const checkUser = async () => {
    let auth = await getAllUsers();
    if (auth.length) {
      setAuth({ ...auth[0] });
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
  };

  const saveAndExitHousehold = async () => {
    await addNewHousehold({
      ...household,
      status: "0",
      is_posted: "0",
      user_id: auth.id?.toString(),
    });
    history.push("/village-profile-app/app");
  };
  const saveHousehold = async () => {
    if (household.id) {
      await updateHousehold(household);
      console.log("Updated!");
    } else {
      let hh = await addNewHousehold({
        ...household,
        status: "0",
        is_posted: "0",
        user_id: auth.id?.toString(),
      });
      setHousehold((household) => ({
        ...household,
        id: hh,
      }));
      console.log("Saved!");
    }
  };

  const loadBastiByWadaId = async (e: any) => {
    let wardId = e.target.value;
    let bastis = await getBastiByWardId(wardId);
    setBastis([...bastis]);
  };

  const loadMargaByBastiId = async (e: any) => {
    let bastiId = e.target.value;
    let margas = await getMargaByBastiId(bastiId);
    setMargas([...margas]);
  };

  const handleChange = (e: any) => {
    if (e.target.name === "ward_id") {
      loadBastiByWadaId(e);
    }
    if (e.target.name === "basti_id") {
      loadMargaByBastiId(e);
    }
    setHousehold((household) => ({
      ...household,
      [e.target.name]: e.target.value,
    }));
  };

  const handleMemberChange = (e: any) => {
    console.log(e.target.value);
  };
  console.log(household);
  return (
    <div className="vp-form-wrapper">
      <div className="save-btns">
        <button onClick={saveHousehold}>Save</button>
        <button onClick={saveAndExitHousehold}>Save & Exit</button>
      </div>
      <div className="vp-form">
        <GharKoBiabarn
          data={data}
          household={household}
          handleChange={handleChange}
          wards={wards}
          bastis={bastis}
          margas={margas}
          jaatis={jaatis}
          dharmas={dharmas}
        />
        <PariwarKoBibaran
          data={data}
          household={household}
          handleMemberChange={handleMemberChange}
          saveHousehold={saveHousehold}
        />
      </div>
    </div>
  );
}
