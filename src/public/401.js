export function na(req, res) {
    res.status(401);
    res.json({message: "not authorized"});
}