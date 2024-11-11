import jwt from "jsonwebtoken";

export function verifyToken(bearer: string | undefined) {
  if (!bearer) {
    return null;
  }
  const [_, token] = bearer.split(" ");
  if (!token) {
    return null;
  }
  return jwt.verify(token, String(process.env.SECRET) || "SECRETNOTFOUND");
}

export function createToken(id: string) {
  return jwt.sign(
    {
      id,
    },
    String(process.env.SECRET) || "SECRETNOTFOUND",
    {
      expiresIn: 152800,
    }
  );
}
