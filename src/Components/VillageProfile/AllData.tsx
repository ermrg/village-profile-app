import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Api/api";
import {
  getAllHousehold,
  IHousehold,
  updateHousehold,
} from "../../db/models/Household";

export default function AllData() {
  const [households, setHousholds] = useState([] as IHousehold[]);
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
    if (window.navigator.onLine) {
      let res = await api.postHousehold(hh);
      if (res.status === 200) {
        await updateHousehold({ ...hh, is_posted: 1 });
      } else {
        console.log(hh.id, "Failed");
      }
      getHouseholds();
    } else {
      alert("Please connect to WIFI!");
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
            <th>Id</th>
            <th>User</th>
            <th>Posted</th>
            <th>Complete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {households.length ? (
            households.map((hh, key) => (
              <tr key={key}>
                <td>{++key}</td>
                <td>{hh.id}</td>
                <td>{hh.user_id}</td>
                <td>
                  {hh.is_posted}
                </td>
                <td>
                  {hh.is_complete}
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
