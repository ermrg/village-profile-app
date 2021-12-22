import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addNewUser,
  deleteUser,
  getAllUsers,
  IUser,
} from "../db/models/UserModel";
import api from "../Api/api";
import { syncDb } from "../db/seed";

const initialAuth = {
  name: "",
  username: "",
  phone: "",
  password: "",
  office_name: "",
  office_id: "",
} as IUser;
export default function VillageProfileHome() {
  const [auth, setAuth] = useState(initialAuth as IUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    checkUser();
    // checkGeoLocation();
  }, []);

  // const checkGeoLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((positions: any) => {
  //       console.log(positions);
  //     });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // };

  const handleValueChance = (e: any) => {
    e.persist();
    setAuth((auth) => ({
      ...auth,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let res = await api.login(auth);
    if (res.data) {
      let data = res.data;
      await addNewUser(data);
      setAuth({ ...data });
    } else {
      setError("Username or Password did not match!");
    }
    setLoading(false);
  };

  const checkUser = async () => {
    let auth = await getAllUsers();
    console.log(auth);
    if (auth.length) {
      setAuth({ ...auth[0] });
    }
  };

  const syncServerData = async () => {
    setLoading(true)
    await syncDb(auth);
    setLoading(false)
  }

  const logout = () => {
    setAuth({ ...initialAuth });
    deleteUser();
  };

  if (loading) {
    return <div className="vp-home">Server Loading...</div>;
  }
  if (!auth.id) {
    return (
      <div className="vp-home">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="username"
              placeholder="Username"
              name="username"
              value={auth?.username}
              onChange={handleValueChance}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={auth?.password}
              onChange={handleValueChance}
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
  return (
    <div className="vp-home">
      <div className="welcome">
        Welcome <br />
        {auth?.name}
        <p className="logout" onClick={logout}>
          Logout
        </p>
      </div>
      <Link to="/village-profile-app/app/add-new">Add New Household</Link>
      <Link to="/village-profile-app/app/pending">Pending Data</Link>
      {/* <Link to="/village-profile-app/app/incomplete">Incomplete Data</Link> */}
      <Link to="/village-profile-app/app/all">All Data</Link>
      <button className="btn btn-sm btn-secondary" onClick={syncServerData}>Pull Data</button>
    </div>
  );
}
