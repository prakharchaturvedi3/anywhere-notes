import {
  dbCreatePage,
  dbReadPageById,
  dbReadPageByUserId,
  dbUpdatePage,
} from "../models/pageModels.js";

export function findPagesByUserId(id) {
  return dbReadPageByUserId(id);
}

export function findPageById(id) {
  return dbReadPageById(id);
}

export function newPage(record) {
  return dbCreatePage(record);
}

export function updatePage(record) {
  return dbUpdatePage(record);
}

export function deactivatePage(record) {
  record.active = false;
  return dbUpdatePage(record);
}
