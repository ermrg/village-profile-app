import { getHashes } from "crypto";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHouseholdById, IHousehold } from "../../db/models/Household";
import AddNewData from "./AddNewData";

export default function EditHousehold() {
  let { id } = useParams<{ id: any }>();
  const [household, setHousehold] = useState({} as IHousehold);
  useEffect(() => {
    getHousehold();
  }, []);
  
  const getHousehold = async () => {
    let hh = await getHouseholdById(id);
    setHousehold({ ...hh });
  };
  if(household){
    return <AddNewData data={{household: household}} />;
  }else{
    return <div className="vp-home">Server Loading...</div>;
  }
}
