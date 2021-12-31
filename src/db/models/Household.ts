import { db } from "../db";
import { IMember } from "./Member";

interface IObjectKeys {
  [key: string]: any;
}
export interface IMissingDeceasedMember {
  reason_id: string;
  reason: string;
  age?: string;
  name?: string;
  gender?: string;
}

export interface IFestivals {
  id: string;
  name: string;
}
export interface ILand {
  land_type_id: string;
  land_type: string;
  location?: string;
  total_area?: string;
  area_unit?: string;
  irrigation?: string;
  kitta_no?: string;
  ward_id?: string;
  remarks?: string;
}
export interface IFule {
  id: string;
  name: string;
}
export interface IAnimal {
  animal_type_id: string;
  animal: string;
  count: string;
}

export interface IWaterSource {
  water_source_id: string;
  distance: string;
}

export interface IForeignMember {
  member_name: string;
  reason: string;
  reason_id: string;
  country: string;
  country_id: string;
  visited_year_bs?: string;
  return_year_bs?: string;
  monthly_income?: string;
}
export interface IHousehold extends IObjectKeys {
  id?: number;
  id_string?: string;
  members?: IMember[];
  hoh_name?: string;
  hoh_image?: string;
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
  is_complete?: string;

  missing_deceased_members?: IMissingDeceasedMember[];
  has_missing_deceased_member?: string;
  has_foreign_member?: string;
  foreign_members?: IForeignMember[];
  animal_count?: string;
  business_count?: string;
  rent_business_count?: string;
  annual_expense?: string;
  festivals?: IFestivals[];
  water_source_id?: string;
  water_source_location?: string;
  water_source_distance?: string;
  public_vehicle_distance_meter?: string;
  public_vehicle_distance_minute?: string;

  has_pregnant_member?: string;
  has_pregnancy_test?: string;
  pregnancy_test_count?: string;
  has_maternity_member?: string;
  has_maternity_test?: string;
  maternity_location?: string;
  has_maternity_death?: string;
  maternity_death_condition?: string;
  child_death?: string;
  child_death_condition?: string;
  child_death_count?: string;
  hospital_distance_meter?: string;
  hospital_distance_minute?: string;
  cooking_fuels?: IFule[];
  light_fuels?: IFule[];
  higher_secondary_distance?: string;
  secondary_distance?: string;
  primary_distance?: string;
  toilet_type_id?: string;
  earthquake_house_relief_status?: string;
  earthquake_house_damage_count?: string;
  has_earthquake_relief_plan?: string;
  map_pass?: string;
  animals?: IAnimal[];
  lands?: ILand[];
}
export class Household {
  id: number;
  hoh_name?: string;
  hoh_image?: string;
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
  is_complete?: string;

  missing_deceased_members?: IMissingDeceasedMember[];
  has_missing_deceased_member?: string;
  has_foreign_member?: string;
  foreign_members?: IForeignMember[];
  animal_count?: string;
  business_count?: string;
  rent_business_count?: string;
  annual_expense?: string;
  festivals?: IFestivals[];
  water_source_id?: string;
  water_source_location?: string;
  water_source_distance?: string;
  public_vehicle_distance_meter?: string;
  public_vehicle_distance_minute?: string;
  has_pregnant_member?: string;
  has_pregnancy_test?: string;
  pregnancy_test_count?: string;
  has_maternity_member?: string;
  has_maternity_test?: string;
  maternity_location?: string;
  has_maternity_death?: string;
  maternity_death_condition?: string;
  child_death?: string;
  child_death_condition?: string;
  child_death_count?: string;
  hospital_distance_meter?: string;
  hospital_distance_minute?: string;
  cooking_fuels?: IFule[];
  light_fuels?: IFule[];
  higher_secondary_distance?: string;
  secondary_distance?: string;
  primary_distance?: string;
  toilet_type_id?: string;
  earthquake_house_relief_status?: string;
  earthquake_house_damage_count?: string;
  has_earthquake_relief_plan?: string;
  map_pass?: string;
  animals?: IAnimal[];
  lands?: ILand[];

  constructor(data: IHousehold) {
    this.hoh_name = data.hoh_name;
    this.hoh_image = data.hoh_image;
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
    this.is_complete = data.is_complete;
    this.missing_deceased_members = data.missing_deceased_members;
    this.has_missing_deceased_member = data.has_missing_deceased_member;
    this.has_foreign_member = data.has_foreign_member;
    this.foreign_members = data.foreign_members;
    this.animal_count = data.animal_count;
    this.business_count = data.business_count;
    this.rent_business_count = data.rent_business_count;
    this.annual_expense = data.annual_expense;
    this.festivals = data.festivals;
    this.water_source_id = data.water_source_id;
    this.water_source_distance = data.water_source_distance;
    this.water_source_location = data.water_source_location;
    this.public_vehicle_distance_minute = data.public_vehicle_distance_minute;
    this.public_vehicle_distance_meter = data.public_vehicle_distance_meter;
    this.has_pregnant_member = data.has_pregnant_member;
    this.has_pregnancy_test = data.has_pregnancy_test;
    this.pregnancy_test_count = data.pregnancy_test_count;
    this.has_maternity_member = data.has_maternity_member;
    this.has_maternity_test = data.has_maternity_test;
    this.maternity_location = data.maternity_location;
    this.has_maternity_death = data.has_maternity_death;
    this.maternity_death_condition = data.maternity_death_condition;
    this.child_death = data.child_death;
    this.child_death_condition = data.child_death_condition;
    this.child_death_count = data.child_death_count;

    this.hospital_distance_meter = data.hospital_distance_meter;
    this.hospital_distance_minute = data.hospital_distance_minute;
    this.light_fuels = data.light_fuels;
    this.cooking_fuels = data.cooking_fuels;
    this.higher_secondary_distance = data.higher_secondary_distance;
    this.secondary_distance = data.secondary_distance;
    this.primary_distance = data.primary_distance;
    this.toilet_type_id = data.toilet_type_id;
    this.earthquake_house_damage_count = data.earthquake_house_damage_count;
    this.earthquake_house_relief_status = data.earthquake_house_relief_status;
    this.has_earthquake_relief_plan = data.has_earthquake_relief_plan;
    this.map_pass = data.map_pass;
    this.animals = data.animals;
    this.lands = data.lands;

    if (data.id) this.id = data.id;
    db.households.mapToClass(Household);
  }
  save() {
    return db.households.put(this);
  }
}

export async function addNewHousehold(data: IHousehold) {
  return await db.transaction("rw", db.households, async function () {
    return await db.households.add(new Household({ ...data }));
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
    .where("[user_id+is_posted+is_complete]")
    .equals([parseInt(user_id), "0", "1"])
    .toArray();
}

export async function getIncompleteHouseholds(user_id: string) {
  return await db.households.where("is_complete").equals("0").toArray();
}

export async function updateHousehold(data: IHousehold) {
  return await db.households.put({ ...data });
}

export async function deleteAllData(test: string) {
  if (test === "deleteall") {
    return db
      .delete()
      .then(() => {
        console.log("Database successfully deleted");
        return true;
      })
      .catch((err) => {
        console.error("Could not delete database");
      })
      .finally(async () => {
        await db.open();
        return true;
      });
  }
  return false;
}
