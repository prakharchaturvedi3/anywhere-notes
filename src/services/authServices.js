import jwt from "jsonwebtoken";

export function verifyToken(bearer) {
  console.log("her");

  if (!bearer) {
    return null;
  }
  const [_, token] = bearer.split(" ");
  if (!token) {
    console.log("her");

    return null;
  }
  try {
    return jwt.verify(token, process.env.SECRET || "hafs");
  } catch (err) {
    return null;
  }
}

export function createToken(id) {
  return jwt.sign(
    {
      id,
    },
    process.env.SECRET || "hafs",
    {
      expiresIn: 152800,
    }
  );
}
