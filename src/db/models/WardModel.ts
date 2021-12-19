import { db } from "../db";

export interface IWard {
  id?: number;
  name: string;
  status: number;
}
export class Ward {
  id: number;
  name: string;
  status: number;

  constructor(name: string, status: number, id?: number) {
    this.name = name;
    this.status = status;
    if (id) this.id = id;
    db.wards.mapToClass(Ward);
  }
  save() {
    return db.wards.put(this);
  }
}

export async function addNewWard(data: IWard) {
  await db.transaction("rw", db.wards, async function () {
    let ward = await db.wards.add(
      new Ward(data.name, data.status, data.id)
    );
    console.log(ward);
  });
}

export async function getAllWards() {
  return await db.transaction("r", db.wards, async function () {
    let wards = await db.wards.toArray();
    return wards;
  });
}

export async function getWardById(id: number) {
  return await db.wards.get(id);
}

export async function getWardByName(name: string) {
  return await db.wards.where('name').startsWithAnyOfIgnoreCase(name).toArray();
}

export async function updateWard(data: IWard) {
  return await db.wards.put({
    id: data.id,
    name: data.name,
    status: data.status,
  });
}
