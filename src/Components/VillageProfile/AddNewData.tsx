import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import { getBastiByWardId, IBasti } from "../../db/models/BastiModel";
import {
  addNewHousehold,
  getAllHousehold,
  IHousehold,
} from "../../db/models/Household";
import { getAllUsers, IUser } from "../../db/models/UserModel";
import { getAllWards, IWard } from "../../db/models/WardModel";
import GharKoBiabarn from "./Forms/GharKoBiabarn";
const requiredFields = [1, 2];

export default function AddNewData(props: any) {
  // To edit send data.household
  const history = useHistory();
  let { data } = props;
  const [auth, setAuth] = useState({} as IUser)
  const [wards, setWards] = useState([] as IWard[]);
  const [bastis, setBastis] = useState([] as IBasti[]);
  const [household, setHousehold] = useState({
    ...data.household,
  } as IHousehold);
  data.requiredFields = requiredFields;
  useEffect(() => {
    checkUser();
    loadAllWada();
  }, []);

  const checkUser = async () => {
    let auth = await getAllUsers()
    if (auth.length) {
      setAuth({ ...auth[0] });
    }
  };

  async function loadAllWada() {
    let wards = await getAllWards();
    setWards([...wards]);
  }

  const saveHousehold = async () => {
    await addNewHousehold({
      ...household,
      status: "0",
      is_posted: "0",
      user_id: auth.id?.toString(),
    });
    history.push("/village-profile-app/app");
  };

  const loadBastiByWadaId = async (e: any) => {
    let wardId = e.target.value;
    let bastis = await getBastiByWardId(wardId);
    setBastis([...bastis]);
  };

  const handleChange = (e: any) => {
    if (e.target.name === "ward_id") {
      loadBastiByWadaId(e);
    }
    setHousehold((household) => ({
      ...household,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="vp-form-wrapper">
      <div className="save-btns">
        <button onClick={saveHousehold}>Save</button>
        <button>Save & Exit</button>
      </div>
      <GharKoBiabarn
        data={data}
        household={household}
        handleChange={handleChange}
        wards={wards}
        bastis={bastis}
      />
    </div>
  );
}
