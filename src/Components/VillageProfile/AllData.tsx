import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  getAllHousehold,
  IHousehold,
} from "../../db/models/Household";
import { getMembersbyHousehold } from "../../db/models/Member";

export default function AllData() {
  const [households, setHousholds] = useState([] as IHousehold[]);
  const history = useHistory();

  useEffect(() => {
    getHouseholds();
  }, []);

  const getHouseholds = async () => {
    let hhs = await getAllHousehold();
    let hhWithMembers = [] as IHousehold[];
    await Promise.all(
      hhs.map(async (hh) => {
        await getMembersbyHousehold(hh.id.toString());
        hhWithMembers.push(hh);
      })
    );
    setHousholds([...hhWithMembers]);
  };
  return (
    <div>
      <button
        className="btn btn-warning back-btn"
        onClick={() => history.goBack()}
      >
        Back
      </button>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>SN</th>
            <th>Id</th>
            <th>HOH</th>
            <th>Members</th>
            <th>Posted</th>
            <th>Complete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {households.length ? (
            households.map((hh, key) => (
              <tr key={key}>
                <td>{++key} {hh.user_id}</td>
                <td>{hh.id}</td>
                <td>{hh.hoh_name}</td>
                <td>{hh.members?.length}</td>
                <td>
                  {hh.is_posted == "1" && "Y"}
                  {hh.is_posted == "0" && "N"}
                </td>
                <td>
                  {hh.is_complete == "1" && "Y"}
                  {hh.is_complete == "0" && "N"}
                </td>
                <td>
                  {hh.is_posted == "0" && (
                    <>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() =>
                          history.push("/village-profile-app/app/edit/" + hh.id)
                        }
                      >
                        Edit
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() =>
                      history.push("/village-profile-app/app/view/" + hh.id)
                    }
                  >
                    View
                  </button>
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
