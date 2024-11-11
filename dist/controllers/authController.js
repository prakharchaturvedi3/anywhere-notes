import { createToken } from "../services/authServices.js";
import { generateHash, newUser } from "../services/userService.js";
export function login(req, res) {
    const token = createToken(req.body.user_.id);
    res.status(200);
    res.json({ token, user: req.body.user_ });
    res.end();
}
export async function register(req, res, next) {
    try {
        req.body.user_.password = await generateHash(req.body.user_.password);
        const result = await newUser(req.body.user_);
        if (!result) {
            throw new Error("User couldn't be Crated");
        }
        req.body.user_.id = result.id;
        login(req, res);
    }
    catch (err) {
        return next(err);
    }
}
//# sourceMappingURL=authController.js.map