import exp from "constants";
import { prisma } from "./db.js";

export async function createUser(record) {
  return await prisma.user.create({
    data: {
      name: record.name,
      email: record.email,
      password: record.password,
    },
  });
}

export async function emailCount(email) {
  return await prisma.user.count({
    where: {
      email: email,
    },
  });
}

export async function getUser(email) {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}



// (async ()=> {
//   const result = await emailCount("imtheonly1.in@gmail.com");
//   console.log(result);
// })();
