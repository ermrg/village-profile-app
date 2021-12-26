import { db } from "../db";

export interface ITrainingDetail {
  skill_id: string;
  skill_name: string;
  source?: string;
  duration?: string;
}

export interface IVehicle {
  vehicle_type: string;
  vehicle_type_id: string;
  count: string
}
export interface IMember {
  id?: number;
  name_eng?: string;
  name_nep?: String;
  gender?: String;
  dob_ad?: String;
  dob_bs?: String;
  age?: String;
  hh_id?: String;
  education_status_id?: String;
  main_occupation_id?: String;
  other_occupation_id?: String;
  citizenship_num?: string;
  relation_with_hoh_id?: string;
  phone_num?: String;
  mobile_num?: string;
  is_married?: String;
  resident_place?: string;
  monthly_income?: String;
  education_level_id?: String;
  has_informal_education?: String;
  marital_status_id?: string;
  marriage_year?: string;
  age_on_marriage?: string;

  spouse?: String;
  guardian?: String;
  has_disability?: String;
  has_chronic_disease?: String;
  has_technical_training?: string;
  foreign_stay?: String;
  is_child_marriage?: String;
  is_vaccinated?: String;
  is_hoh?: String;
  bank_account?: String;
  disability_card?: String;
  disability_type?: String;
  country_visited?: String;
  technical_skills?: ITrainingDetail[];
  vehicles?: IVehicle[];
  has_vehicle?: string;
  vaccine_name?: String;
  foreign_reason?: String;
  disease_name?: String;
  status?: String;
  remarks?: String;
  user_id?: String;
}
export class Member {
  id?: number;
  name_eng?: string;
  name_nep?: String;
  gender?: String;
  dob_ad?: String;
  dob_bs?: String;
  age?: String;
  hh_id?: String;
  education_status_id?: String;
  main_occupation_id?: String;
  other_occupation_id?: String;
  citizenship_num?: string;
  relation_with_hoh_id?: string;
  phone_num?: String;
  mobile_num?: string;
  resident_place?: string;
  is_married?: String;
  monthly_income?: String;
  education_level_id?: String;
  has_informal_education?: String;
  marital_status_id?: string;
  marriage_year?: string;
  age_on_marriage?: string;

  spouse?: String;
  guardian?: String;
  has_disability?: String;
  has_chronic_disease?: String;
  has_technical_training?: string;
  foreign_stay?: String;
  is_child_marriage?: String;
  is_vaccinated?: String;
  is_hoh?: String;
  bank_account?: String;
  disability_card?: String;
  disability_type?: String;
  country_visited?: String;
  technical_skills?: ITrainingDetail[];
  vehicles?: IVehicle[];
  has_vehicle?: string;

  vaccine_name?: String;
  foreign_reason?: String;
  disease_name?: String;
  status?: String;
  remarks?: String;
  user_id?: String;

  constructor(data: IMember) {
    this.name_eng = data.name_eng;
    this.name_nep = data.name_nep;
    this.gender = data.gender;
    this.dob_ad = data.dob_ad;
    this.dob_bs = data.dob_bs;
    this.age = data.age;
    this.hh_id = data.hh_id;
    this.education_status_id = data.education_status_id;
    this.main_occupation_id = data.main_occupation_id;
    this.other_occupation_id = data.other_occupation_id;
    this.citizenship_num = data.citizenship_num;
    this.relation_with_hoh_id = data.relation_with_hoh_id;
    this.phone_num = data.phone_num;
    this.mobile_num = data.mobile_num;
    this.is_married = data.is_married;
    this.resident_place = data.resident_place;
    this.monthly_income = data.monthly_income;
    this.education_level_id = data.education_level_id;
    this.marital_status_id = data.marital_status_id;
    this.marriage_year = data.marriage_year;
    this.age_on_marriage = data.age_on_marriage;

    this.spouse = data.spouse;
    this.guardian = data.guardian;
    this.has_disability = data.has_disability;
    this.has_chronic_disease = data.has_chronic_disease;
    this.has_informal_education = data.has_informal_education;
    this.has_technical_training = data.has_technical_training;
    this.foreign_stay = data.foreign_stay;
    this.is_child_marriage = data.is_child_marriage;
    this.is_vaccinated = data.is_vaccinated;
    this.is_hoh = data.is_hoh;
    this.bank_account = data.bank_account;
    this.disability_card = data.disability_card;
    this.disability_type = data.disability_type;
    this.country_visited = data.country_visited;

    this.technical_skills = data.technical_skills;
    this.vehicles = data.vehicles;
    this.has_vehicle = data.has_vehicle;

    this.vaccine_name = data.vaccine_name;
    this.foreign_reason = data.foreign_reason;
    this.disease_name = data.disease_name;
    this.status = data.status;
    this.remarks = data.remarks;
    this.user_id = data.user_id;
    if (data.id) this.id = data.id;
    db.members.mapToClass(Member);
  }
  save() {
    return db.members.put(this);
  }
}

export async function addNewMember(data: IMember) {
  return await db.transaction("rw", db.members, async function () {
    return await db.members.add(new Member({ ...data }));
  });
}

export async function getAllMember() {
  return await db.transaction("r", db.members, async function () {
    let members = await db.members.toArray();
    return members;
  });
}

export async function getMemberById(id: number) {
  return await db.members.get(id);
}

export async function getMembersbyHousehold(hh_id: string) {
  return await db.members.where("hh_id").equals(hh_id).toArray();
}

export async function updateMember(data: IMember) {
  return await db.members.put({ ...data });
}
