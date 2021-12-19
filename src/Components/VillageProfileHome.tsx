import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { IUser } from "../db/models/UserModel";
import api from "../Api/api";
import { syncDb } from "../db/seed";

const cookies = new Cookies();
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
    checkInCookies();
    // loadAllCollectors();
  }, []);
  // async function syncDbWithServer() {
  //   if (window.navigator.onLine) {
  //     setLoad ing(true);
  //     syncDb();
  //     setLoading(false);
  //   }
  // }
  // async function createUser(data: IUser) {
  //   await addNewUser(data);
  // }

  // async function getUsers() {
  //   let users = await getAllUsers();
  //   console.log(users);
  // }

  // async function getById(id: number) {
  //   let user = await getUserById(id);
  //   console.log(user);
  // }

  // async function updateUserModel(data: IUser) {
  //   let user = await updateUser(data);
  //   console.log(user);
  // }


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
      setAuth((auth) => ({
        ...auth,
        id: data?.id ? data?.id : initialAuth.id,
        name: data?.name ? data?.name : "",
        office_name: data?.office_name
          ? data?.office_name
          : initialAuth.office_name,
        office_id: data?.office_id ? data?.office_id : initialAuth.office_id,
      }));
      setInCookies(data);
      await syncDb(data)
    } else {
      setError("Phone or Password did not match!");
    }
    setLoading(false);
  };

  const checkInCookies = () => {
    let auth = cookies.get("auth");
    if (auth) {
      setAuth({ ...auth });
    }
  };
  const setInCookies = (colelctor: IUser) => {
    cookies.set("auth", colelctor);
  };
  const clearCookies = () => {
    cookies.remove("auth");
  };

  const logout = () => {
    setAuth({ ...initialAuth });
    clearCookies();
  };
  console.log(auth);

  if (loading) {
    return <div className="vp-home">Loading...</div>;
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
      <Link to="/village-profile-app/app/incomplete">Incomplete Data</Link>
      <Link to="/village-profile-app/app/all">All Data</Link>
    </div>
  );
}
