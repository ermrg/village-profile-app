import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import { getBastiByWardId, IBasti } from "../../db/models/BastiModel";
import {
  addNewHousehold,
  getAllHousehold,
  IHousehold,
} from "../../db/models/Household";
import { getAllWards, IWard } from "../../db/models/WardModel";
import GharKoBiabarn from "./Forms/GharKoBiabarn";
const requiredFields = [1, 2];
const cookies = new Cookies();

export default function AddNewData(props: any) {
  // To edit send data.household
  const history = useHistory();
  let { data } = props;
  let auth = cookies.get("auth");
  const [wards, setWards] = useState([] as IWard[]);
  const [bastis, setBastis] = useState([] as IBasti[]);
  const [household, setHousehold] = useState({
    ...data.household,
  } as IHousehold);
  data.requiredFields = requiredFields;
  useEffect(() => {
    loadAllWada();
  }, []);
  async function loadAllWada() {
    let wards = await getAllWards();
    setWards([...wards]);
  }

  const saveHousehold = async () => {
    await addNewHousehold({
      ...household,
      status: "0",
      is_posted: "0",
      user_id: auth.id,
    });
    history.push("/vp-app/app");
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
