import { IHousehold } from "./db/models/Household";
import { IMember } from "./db/models/Member";

export const memberDefault = {
  name_eng: "",
  relation_with_hoh_id: "",
  gender_id: "",
  dob_bs: "",
  technical_skills: [],
  vehicles: [],
  social_networks: [],
  recommendation_for_local_level: [{ name: "सडक", id: "सडक" }],
  education_level_id: "9",
  education_status_id: "4",
  has_informal_education: "0",
  main_occupation_id: "12",
  other_occupation_id: "",
  has_technical_training: "0",
  is_married: "0",
  resident_place: "गाउँ",
  has_vehicle: "0",
  has_health_insurance: "0",
  has_life_insurance: "0",
  has_bank_account: "0",
  has_cooperative_account: "0",
  has_pension: "0",
  has_disability: "0",
  has_chronic_disease: "0",
  covid_infection_status: "सक्रमण नभएको",
  has_covid_vaccine: "0",
  has_smartphone: "0",
  has_voter_card: "1",
  voter_card_location: "गाउँपालिका",
  feelings_for_local_government: "5",
} as IMember;


export const householdDefault = {
  is_posted: "0",
  is_complete: "0",
  ward_id: "1",
  basti_id: "1",
  marga_id: "1",
  hoh_name: "Head of House",
  jaati_id: "5",
  num_of_member: 1,
  migration_date: "",
  water_source_id: "1",
  water_source_location: "घरमा",
  cooking_fuels: [
    { id: "1", name: "बिद्युत" },
    { id: "2", name: "एलपी ग्याँस" },
    { id: "4", name: "दाउरा" },
  ],
  light_fuels: [
    { id: "1", name: "रास्टिय बिदयुत" },
    { id: "3", name: "सोलार" },
    { id: "4", name: "मट्टितेल" },
    { id: "5", name: "दाउरा" },
  ],
  public_vehicle_distance_meter: "",
  public_vehicle_distance_minute: "",
  hospital_distance_meter: "",
  hospital_distance_minute: "",
  primary_distance: "",
  secondary_distance: "",
  higher_secondary_distance: "",
  toilet_type_id: "1",
  members: [memberDefault] as IMember[],
  hoh_role: "father",
  hoh_gender: "1",
  religion_id: "1",
  mother_tongue_id: "1",
  resident_type: "1",
  has_missing_deceased_member: "0",
  animal_count: "",
  business_count: "",
  rent_business_count: "",
  annual_expense: "",
  has_foreign_member: "0",
  festivals: [
    { id: "3", name: "तिहार" },
    { id: "7", name: "दशैँ" },
    { id: "19", name: "माघे संक्रान्ती" },
  ],
  has_pregnant_member: "0",
  has_maternity_member: "0",
  has_maternity_death: "0",
  child_death: "0",
  has_earthquake_relief_plan: "0",
  map_pass: "0",
  responder_name: "",
} as IHousehold;


export const memberRequired = [
  "name_eng",
  "relation_with_hoh_id",
  "gender_id",
  "recommendation_for_local_level",
];

export const householdRequired = [
  "ward_id",
  "basti_id",
  "marga_id",
  "hoh_name",
  "jaati_id",
  // "num_of_member",
  // "water_source_id",
  // "cooking_fuels",
  // "light_fuels",
  // "public_vehicle_distance_meter",
  // "public_vehicle_distance_minute",
  // "hospital_distance_meter",
  // "hospital_distance_minute",
  // "primary_distance",
  // "secondary_distance",
  // "higher_secondary_distance",
  // "toilet_type_id",
  "responder_name",
] as any;
