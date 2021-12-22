import { db } from "../db";

export interface IHousehold {
  id?: number;
  id_string?: String;
  hoh_name?: String;
  hoh_role?: String;
  hoh_gender?: String;
  hoh?: String;
  province?: String;
  district?: String;
  local_level?: String;
  ward_id?: String;
  basti_id?: String;
  marga_id?: String;
  religion_id?: String;
  jaati_id?: String;
  mother_tongue?: String;
  main_occupation?: String;
  has_bank_acc?: String;
  has_cooperative_acc?: String;
  has_garden?: String;
  member_with_life_insurance?: String;
  member_with_health_insurance?: String;
  responder_name?: String;
  house_num?: String;
  num_of_member?: String;
  resident_type?: String;
  phone_num?: String;
  mobile_num?: String;
  longitude?: String;
  latitude?: String;
  geo_location?: String;
  altitude?: String;
  accuracy?: String;
  responder_image?: String;
  step?: String;
  status?: String;
  remarks?: String;
  office?: String;
  user_id?: String;
  is_posted?: String;
}
export class Household {
  id: number;
  hoh_name?: String;
  hoh_role?: String;
  hoh_gender?: String;
  hoh?: String;
  ward_id?: String;
  basti_id?: String;
  marga_id?: String;
  religion_id?: String;
  jaati_id?: String;
  mother_tongue?: String;
  main_occupation?: String;
  has_bank_acc?: String;
  has_cooperative_acc?: String;
  has_garden?: String;
  member_with_life_insurance?: String;
  member_with_health_insurance?: String;
  responder_name?: String;
  house_num?: String;
  num_of_member?: String;
  resident_type?: String;
  phone_num?: String;
  mobile_num?: String;
  longitude?: String;
  latitude?: String;
  geo_location?: String;
  altitude?: String;
  accuracy?: String;
  responder_image?: String;
  step?: String;
  status?: String;
  remarks?: String;
  user_id?: String;
  is_posted?: String;

  constructor(data: IHousehold) {
    this.hoh_name = data.hoh_name;
    this.hoh_role = data.hoh_role;
    this.hoh_gender = data.hoh_gender;
    this.hoh = data.hoh;
    this.ward_id = data.ward_id;
    this.basti_id = data.basti_id;
    this.marga_id = data.marga_id;
    this.religion_id = data.religion_id;
    this.jaati_id = data.jaati_id;
    this.mother_tongue = data.mother_tongue;
    this.main_occupation = data.main_occupation;
    this.has_bank_acc = data.has_bank_acc;
    this.has_cooperative_acc = data.has_cooperative_acc;
    this.has_garden = data.has_garden;
    this.member_with_life_insurance = data.member_with_life_insurance;
    this.member_with_health_insurance = data.member_with_health_insurance;
    this.responder_name = data.responder_name;
    this.house_num = data.house_num;
    this.num_of_member = data.num_of_member;
    this.resident_type = data.resident_type;
    this.phone_num = data.phone_num;
    this.mobile_num = data.mobile_num;
    this.longitude = data.longitude;
    this.latitude = data.latitude;
    this.geo_location = data.geo_location;
    this.altitude = data.altitude;
    this.accuracy = data.accuracy;
    this.responder_image = data.responder_image;
    this.step = data.step;
    this.status = data.status;
    this.remarks = data.remarks;
    this.user_id = data.user_id;
    this.is_posted = data.is_posted;
    if (data.id) this.id = data.id;
    db.households.mapToClass(Household);
  }
  save() {
    return db.households.put(this);
  }
}

export async function addNewHousehold(data: IHousehold) {
  return await db.transaction("rw", db.households, async function () {
    return await db.households.add(
      new Household({...data})
    );
  });
}

export async function getAllHousehold() {
  return await db.transaction("r", db.households, async function () {
    let households = await db.households.toArray();
    return households;
  });
}

export async function getHouseholdById(id: number) {
  return await db.households.get(id);
}

export async function getPendingHouseholds(user_id: string) {
  return await db.households
    .where("[user_id+is_posted]").equals([user_id,"0"]).toArray();
}

export async function updateHousehold(data: IHousehold) {
  return await db.households.put({...data});
}
