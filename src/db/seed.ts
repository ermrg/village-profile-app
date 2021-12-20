import api from "../Api/api";
import { addNewBasti, getBastiByName } from "./models/BastiModel";
import { addNewWard, getWardByName } from "./models/WardModel";

export async function getWadas(office_id: String) {
  console.log("Synchronizing Wards...");
  let res = await api.loadWada(office_id);
  if (res.status === 200) {
    let wards = res.data;
    wards.map(async (w: any) => {
      let checkWard = await getWardByName(w.name);
      if (checkWard.length === 0) {
        await addNewWard({ name: w.name, status: w.status, id: w.id });
      }
    });
    console.log(wards.length, " Wards Synced.");
    return wards;
  }
  return null;
}

export async function getBastis(office_id: String) {
  console.log("Synchronizing Basti...");
  let res = await api.loadBasti(office_id);
    if (res.status === 200) {
      let basti = res.data;
      basti.map(async (w: any) => {
        let checkWard = await getBastiByName(w.name);
        if (checkWard.length === 0) {
          await addNewBasti({ name: w.name, status: w.status, id: w.id, wardId: w.ward_id });
        }
      });
      console.log(basti.length , " Bastis Synced.")
    }
}

export async function syncDb(data: any) {
  if (window.navigator.onLine) {
    await getWadas(data.office_id);
    await getBastis(data.office_id);
  }
}
