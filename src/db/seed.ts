import api from "../Api/api";
import { addNewBasti, getBastiByName } from "./models/BastiModel";
import { addNewDharma, getDharmaByName } from "./models/DharmaModel";
import { addNewJaati, getJaatiByName } from "./models/JaatiModel";
import { addNewMarga, getMargaByName } from "./models/MargaModel";
import { addNewOccupation, getOccupationByName } from "./models/Occupation";
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
      let checkBasti = await getBastiByName(w.name);
      if (checkBasti.length === 0) {
        await addNewBasti({
          name: w.name,
          status: w.status,
          id: w.id,
          wardId: w.ward_id,
        });
      }
    });
    console.log(basti.length, " Bastis Synced.");
  }
}

export async function getMargas(office_id: String) {
  console.log("Synchronizing Marga...");
  let res = await api.loadMarga(office_id);
  if (res.status === 200) {
    let margas = res.data;
    margas.map(async (m: any) => {
      let checkMarga = await getMargaByName(m.name);
      if (checkMarga.length === 0) {
        await addNewMarga({
          id: m.id,
          name: m.name,
          bastiId: m.basti_id,
          wardId: m.wardId,
          status: m.status,
        });
      }
    });
    console.log(margas.length, " Marga Synced.");
  }
}

export async function getJaati() {
  console.log("Synchronizing Jaati...");
  let res = await api.loadJaati();
  if (res.status === 200) {
    let jaatis = res.data;
    jaatis.map(async (m: any) => {
      let checkJaati = await getJaatiByName(m.name);
      if (checkJaati.length === 0) {
        await addNewJaati({ ...m });
      }
    });
    console.log(jaatis.length, " Jaati Synced.");
  }
}

export async function getDharma() {
  console.log("Synchronizing Dharma...");
  let res = await api.loadDharma();
  if (res.status === 200) {
    let dharmas = res.data;
    dharmas.map(async (m: any) => {
      let checkDharma = await getDharmaByName(m.name);
      if (checkDharma.length === 0) {
        await addNewDharma({ ...m });
      }
    });
    console.log(dharmas.length, " Dharma Synced.");
  }
}

export async function getOccupation() {
  console.log("Synchronizing Occupation...");
  let res = await api.loadOccupations();
  if (res.status === 200) {
    let occupations = res.data;
    occupations.map(async (m: any) => {
      let checkDharma = await getOccupationByName(m.name);
      if (checkDharma.length === 0) {
        await addNewOccupation({ ...m });
      }
    });
    console.log(occupations.length, " Occupation Synced.");
  }
}

export async function syncDb(data: any) {
  if (window.navigator.onLine) {
    await getWadas(data.office_id);
    await getBastis(data.office_id);
    await getMargas(data.office_id);
    await getJaati();
    await getDharma();
    await getOccupation();
  }
}
