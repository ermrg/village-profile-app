import { db } from "../db";

export interface IMissingDeceasedMember{
  reason_id: string;
  reason: string;
  age?: string;
  name?: string;
  gender?: string;
}
export interface IHousehold {
  id?: number;
  id_string?: string;
  hoh_name?: string;
  hoh_role?: string;
  hoh_gender?: string;
  hoh?: string;
  province?: string;
  district?: string;
  local_level?: string;
  ward_id?: string;
  basti_id?: string;
  marga_id?: string;
  religion_id?: string;
  jaati_id?: string;
  mother_tongue_id?: string;
  main_occupation?: string;
  has_bank_acc?: string;
  has_cooperative_acc?: string;
  has_garden?: string;
  member_with_life_insurance?: string;
  member_with_health_insurance?: string;
  responder_name?: string;
  house_num?: string;
  num_of_member?: string;
  resident_type?: string;
  migration_date?: string;
  phone_num?: string;
  mobile_num?: string;
  longitude?: string;
  latitude?: string;
  geo_location?: string;
  altitude?: string;
  accuracy?: string;
  responder_image?: string;
  step?: string;
  status?: string;
  remarks?: string;
  office?: string;
  user_id?: string;
  is_posted?: string;

  missing_deceased_members?: IMissingDeceasedMember[];
  has_missing_deceased_member?: string;
}
export class Household {
  id: number;
  hoh_name?: string;
  hoh_role?: string;
  hoh_gender?: string;
  hoh?: string;
  ward_id?: string;
  basti_id?: string;
  marga_id?: string;
  religion_id?: string;
  jaati_id?: string;
  mother_tongue_id?: string;
  main_occupation?: string;
  has_bank_acc?: string;
  has_cooperative_acc?: string;
  has_garden?: string;
  member_with_life_insurance?: string;
  member_with_health_insurance?: string;
  responder_name?: string;
  house_num?: string;
  num_of_member?: string;
  resident_type?: string;
  migration_date?: string;
  phone_num?: string;
  mobile_num?: string;
  longitude?: string;
  latitude?: string;
  geo_location?: string;
  altitude?: string;
  accuracy?: string;
  responder_image?: string;
  step?: string;
  status?: string;
  remarks?: string;
  user_id?: string;
  is_posted?: string;

  missing_deceased_members?: IMissingDeceasedMember[];
  has_missing_deceased_member?: string;


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
    this.mother_tongue_id = data.mother_tongue_id;
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
    this.migration_date = data.migration_date;
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
    this.missing_deceased_members = data.missing_deceased_members;
    this.has_missing_deceased_member = data.has_missing_deceased_member;
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

export async function getHouseholdById(id: any) {
  return await db.households.get(parseInt(id));
}

export async function getPendingHouseholds(user_id: string) {
  return await db.households
    .where("[user_id+is_posted]").equals([user_id,"0"]).toArray();
}

export async function updateHousehold(data: IHousehold) {
  return await db.households.put({...data});
}
