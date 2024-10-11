
import { createPage, readPageById, readPagesByUserId, writePage } from "../models/pageModels.js";

export function findPagesByUserId(id) {
  return readPagesByUserId(id);
}

export function findPageById(id) {
  return readPageById(id);
}

export function newPage(record) {
  return createPage(record);
}

export function updatePage(record) {
  return writePage(record);
}

export function deactivatePage(record) {
  record.active = false;
  return writePage(record);
}
