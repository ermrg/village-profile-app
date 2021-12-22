import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Api/api";
import {
  getPendingHouseholds,
  IHousehold,
  updateHousehold,
} from "../../db/models/Household";
import { getAllUsers, IUser } from "../../db/models/UserModel";

export default function AllData() {
  const [households, setHousholds] = useState([] as IHousehold[]);
  const [auth, setAuth] = useState({} as IUser);

  const history = useHistory();

  useEffect(() => {
    checkUser();
  }, []);

  const getHouseholds = async (auth_: IUser) => {
    let hhs = await getPendingHouseholds(auth_.id ? auth_.id.toString() : "");
    setHousholds([...hhs]);
  };
  console.log('s');
  const postHousehold = async (hh: any) => {
    if (window.navigator.onLine) {
      let res = await api.postHousehold(hh);
      if (res.status === 200) {
        await updateHousehold({ ...hh, is_posted: 1 });
      } else {
        console.log(hh.id, "Failed");
      }
      getHouseholds(auth);
    } else {
      alert("Please connect to WIFI!");
    }
  };

  const checkUser = async () => {
    let auth_ = await getAllUsers();
    if (auth_.length) {
      setAuth({...auth_[0]});
      getHouseholds(auth_[0]);
    }
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
