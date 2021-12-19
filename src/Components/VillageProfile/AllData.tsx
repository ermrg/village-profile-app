import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import api from "../../Api/api";
import {
  getAllHousehold,
  getPendingHouseholds,
  IHousehold,
  updateHousehold,
} from "../../db/models/Household";
const cookies = new Cookies();

export default function AllData() {
  const [households, setHousholds] = useState([] as IHousehold[]);
  let auth = cookies.get("auth");
  const history = useHistory();

  useEffect(() => {
    getHouseholds();
  }, []);

  const getHouseholds = async () => {
    let hhs = await getAllHousehold();
    console.log(hhs);
    setHousholds([...hhs]);
  };

  const postHousehold = async (hh: any) => {
    let res = await api.postHousehold(hh);
    if (res.status === 200) {
      let local_hh = await updateHousehold({ ...hh, is_posted: 1 });
      console.log(local_hh);
    } else {
      console.log(hh.id, "Failed");
    }
    getHouseholds();
  };
  return (
    <div>
      <button
        className="btn btn-warning"
        onClick={() => history.push("/village-profile-app/app")}
      >
        Back
      </button>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>SN</th>
            <th>Household Id</th>
            <th>Ward</th>
            <th>Posted</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {households.length ? (
            households.map((hh, key) => (
              <tr key={key}>
                <td>{++key}</td>
                <td>{hh.id}</td>
                <td>{hh.ward_id}</td>
                <td>
                  {hh.is_posted == "1" ? (
                    <label className="badge badge-success">YES</label>
                  ) : (
                    <label className="badge badge-danger">NO</label>
                  )}
                </td>
                <td>
                  {hh.is_posted == "0" && (
                    <>
                      <button
                        className="btn btn-warning"
                        onClick={() => postHousehold(hh)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => postHousehold(hh)}
                      >
                        Post
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
