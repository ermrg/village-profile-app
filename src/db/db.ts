import Dexie from "dexie";
import { IBasti } from "./models/BastiModel";
import { ICountry } from "./models/CountryModel";
import { ICountrySamuha } from "./models/CountrySamuhaModel";
import { IDharma } from "./models/DharmaModel";
import { IHousehold } from "./models/Household";
import { IJaati } from "./models/JaatiModel";
import { IJaatiSamuha } from "./models/JaatiSamuhaModel";
import { IMarga } from "./models/MargaModel";
import { IMember } from "./models/Member";
import { IMotherTongue } from "./models/MotherTongue";
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
  countries: Dexie.Table<ICountry>;
  country_samuhas: Dexie.Table<ICountrySamuha>;
  mother_toungues: Dexie.Table<IMotherTongue>;
  jaati_samuhas: Dexie.Table<IJaatiSamuha>;
  dharmas: Dexie.Table<IDharma>;
  occupations: Dexie.Table<IOccupation>;
  households: Dexie.Table<IHousehold>;
  members: Dexie.Table<IMember>;
  technicalSkills: Dexie.Table<ITechnicalSkill>;

  constructor() {
    super("VPDB");

    var db = this;
    db.version(2).stores({
      users: "++id, name, phone, password",
      wards: "id, name, status",
      bastis: "id, name, status, wardId",
      margas: "id, name, status, wardId, bastiId",
      jaatis: "id, name, status, jaati_samuha_id",
      jaati_samuhas: "id, name, status",
      countries: "id, name, jaati_samuha_id",
      country_samuhas: "id, name",
      mother_toungues: "id, name, status",
      dharmas: "id, name, status",
      occupations: "id, name, status",
      technicalSkills: "id, name, status",
      households:
        "++id, name, phone, password, [is_posted+is_complete], is_complete",
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
