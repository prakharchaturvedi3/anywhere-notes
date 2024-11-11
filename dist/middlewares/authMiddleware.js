import { verifyToken } from "../services/authServices.js";
import { validEmail, validName, validPassword, } from "../utils/validationUtils.js";
import { comparePassword, findUserByEmail } from "../services/userService.js";
import { ErrorConstructors } from "../utils/errorUtils.js";
export async function registrationCheck(req, res, next) {
    const { email, password } = req.body;
    try {
        if (!validEmail(email)) {
            throw new ErrorConstructors.BadRequest("Invalid Email");
        }
        if (!validPassword(password)) {
            throw new ErrorConstructors.BadRequest("Invalid Password");
        }
        const result = await findUserByEmail(email);
        if (!result) {
            throw new ErrorConstructors.BadRequest("User Not Found");
        }
        if (!(await comparePassword(password, result.password))) {
            throw new ErrorConstructors.ForbiddenRequest("Invalid Password or Email");
        }
        req.body.user_ = { id: result.id };
    }
    catch (err) {
        next(err);
        return;
    }
    next();
}
export function protect(req, res, next) {
    const claim = verifyToken(req.headers.authorization);
    if (!claim) {
        throw new ErrorConstructors.UnauthorizedRequest("Please login Again!");
    }
    req.body.user_ = claim;
    next();
}
export async function emailAvailability(req, res, next) {
    const { email, password, name } = req.body;
    try {
        if (!validEmail(email)) {
            throw new ErrorConstructors.BadRequest("Invalid Email");
        }
        if (!validPassword(password)) {
            throw new ErrorConstructors.BadRequest("Invalid Password");
        }
        if (!validName(name)) {
            throw new ErrorConstructors.BadRequest("Invalid Name");
        }
        const result = await findUserByEmail(email);
        if (result) {
            throw new ErrorConstructors.BadRequest("User Already Exist");
        }
    }
    catch (err) {
        return next(err);
    }
    req.body.user_ = { name, email, password };
    next();
}
//# sourceMappingURL=authMiddleware.js.map