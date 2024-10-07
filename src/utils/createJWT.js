import jwt from 'jsonwebtoken'
export const createJWT = (user) => {
    const payload = {
        id: user.id,
        email: user.email
    }
    const options = {
        expiresIn: '2h'
    }
    return jwt.sign(payload, process.env.SECRET, options);
}