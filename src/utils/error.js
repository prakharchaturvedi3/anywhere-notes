export function error(msg, req, res) {
    console.error(msg);
    res.status(401);
    res.json({message: msg});
    res.end();
}