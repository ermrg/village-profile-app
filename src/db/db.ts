import Dexie from "dexie";
import { IBasti } from "./models/BastiModel";
import { IHousehold } from "./models/Household";
import { IUser } from "./models/UserModel";
import { IWard } from "./models/WardModel";
import { syncDb } from "./seed";

export class AppDatabase extends Dexie {
  users: Dexie.Table<IUser>;
  wards: Dexie.Table<IWard>;
  bastis: Dexie.Table<IBasti>;
  households: Dexie.Table<IHousehold>;

  constructor() {
    super("VPDB");

    var db = this;
    // db.delete()
    //   .then(() => {
    //     console.log("Database successfully deleted");
    //   })
    //   .catch((err) => {
    //     console.error("Could not delete database");
    //   })
    //   .finally(() => {
    //     // Do what should be done next...
    //   });
    db.version(1).stores({
      users: "++id, name, phone, password",
      wards: "id, name, status",
      bastis: "id, name, status, wardId",
      households: "++id, name, phone, password, [user_id+is_posted]",
    });
    db.open()
      .then(async function (db) {
        console.log("DB opened Succefully");
        console.log("Sync Complete");
      })
      .catch(function (err) {
        console.log("DB error", err);
      });
  }
}
export var db = new AppDatabase();
