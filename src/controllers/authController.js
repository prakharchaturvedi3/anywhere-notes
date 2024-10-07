import { createUser } from "../models/userModel.js";
import { createJWT, hashPassword } from "../services/authService.js";

export async function registerUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const user = {
    email: email,
    name: name,
    password: await hashPassword(password),
  };
  const result = await createUser(user);
  const token = await createJWT(user);
  res.json({ token, message: "User created successfully!" });
  res.end();
}

export async function loginUser(req, res) {
  const token = await createJWT(req._user);
  res.json({ token, message: "User logged in successfully!" });
  res.end();
}
