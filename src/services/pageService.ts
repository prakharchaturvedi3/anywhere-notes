import type { page } from "../index.js";
import {
  dbCreatePage,
  dbReadPageById,
  dbReadPageByUserId,
  dbUpdatePage,
} from "../models/pageModels.js";

export function findPagesByUserId(id: string) {
  return dbReadPageByUserId(id);
}

export function findPageById(id: string) {
  return dbReadPageById(id);
}



export function newPage(record: page) {
  return dbCreatePage(record);
}

export function updatePage(record: page) {
  return dbUpdatePage(record);
}

export function deactivatePage(record: page) {
  record.active = false;
  return dbUpdatePage(record);
}
