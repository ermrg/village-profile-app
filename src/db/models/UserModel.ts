import { db } from "../db";

export interface IUser {
  id?: number;
  name: string;
  username: string;
  office_name?: string;
  office_id?: string;
  phone: string;
  password: string;
}
export class User {
  id: number;
  name: string;
  username: string;
  phone: string;
  password: string;

  constructor(name: string, username: string, phone: string, password: string, id?: number) {
    this.name = name;
    this.username = username;
    this.phone = phone;
    this.password = password;
    if (id) this.id = id;
    db.users.mapToClass(User);
  }
  save() {
    return db.users.put(this);
  }
}

export async function addNewUser(data: IUser) {
  await db.transaction("rw", db.users, async function () {
    let user = await db.users.add(
      new User(data.name, data.username, data.phone, data.password)
    );
    console.log(user);
  });
}

export async function getAllUsers() {
  return await db.transaction("r", db.users, async function () {
    let users = await db.users.toArray();
    return users;
  });
}

export async function getUserById(id: number) {
  return await db.users.get(id);
}

export async function updateUser(data: IUser) {
  return await db.users.put({
    id: data.id,
    name: data.name,
    username: data.username,
    password: data.password,
    phone: data.phone,
  });
}
