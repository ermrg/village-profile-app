import Dexie from "dexie";
import { IBasti } from "./models/BastiModel";
import { IDharma } from "./models/DharmaModel";
import { IHousehold } from "./models/Household";
import { IJaati } from "./models/JaatiModel";
import { IMarga } from "./models/MargaModel";
import { IMember } from "./models/Member";
import { IOccupation } from "./models/Occupation";
import { ITechnicalSkill } from "./models/TechnicalSkill";
import { IUser } from "./models/UserModel";
import { IWard } from "./models/WardModel";

export class AppDatabase extends Dexie {
  users: Dexie.Table<IUser>;
  wards: Dexie.Table<IWard>;
  bastis: Dexie.Table<IBasti>;
  margas: Dexie.Table<IMarga>;
  jaatis: Dexie.Table<IJaati>;
  dharmas: Dexie.Table<IDharma>;
  occupations: Dexie.Table<IOccupation>;
  households: Dexie.Table<IHousehold>;
  members: Dexie.Table<IMember>;
  technicalSkills: Dexie.Table<ITechnicalSkill>;

  constructor() {
    super("VPDB");

    var db = this;
    db.version(1).stores({
      users: "++id, name, phone, password",
      wards: "id, name, status",
      bastis: "id, name, status, wardId",
      margas: "id, name, status, wardId, bastiId",
      jaatis: "id, name, status",
      dharmas: "id, name, status",
      occupations: "id, name, status",
      technicalSkills: "id, name, status",
      households: "++id, name, phone, password, [user_id+is_posted+is_complete], is_complete",
      members: "++id, name, hh_id",
    });
    db.open()
      .then(async function (db) {
        console.log("DB opened Succefully");
        db.tables.forEach(function (table) {
          console.log(table.name);
        });
      })
      .catch(function (err) {
        console.log("DB error", err);
      });
  }
}
export var db = new AppDatabase();
