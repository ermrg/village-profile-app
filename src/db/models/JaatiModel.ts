import { db } from "../db";

export interface IJaati {
  id?: number;
  name: string;
  status: number;
}
export class Jaati {
  id: number;
  name: string;
  status: number;

  constructor(data: IJaati) {
    this.name = data.name;
    this.status = data.status;
    if (data.id) this.id = data.id;
    db.jaatis.mapToClass(Jaati);
  }
  save() {
    return db.jaatis.put(this);
  }
}

export async function addNewJaati(data: IJaati) {
  await db.transaction("rw", db.jaatis, async function () {
    await db.jaatis.add(
      new Jaati({...data})
    );
  });
}

export async function getAllJaatis() {
  return await db.transaction("r", db.jaatis, async function () {
    let jaatis = await db.jaatis.toArray();
    return jaatis;
  });
}

export async function getJaatiById(id: string) {
  return await db.jaatis.get(id);
}

export async function getJaatiByName(name: string) {
  return await db.jaatis.where('name').startsWithAnyOfIgnoreCase(name).toArray();
}

export async function updateWard(data: IJaati) {
  return await db.jaatis.put({...data});
}
