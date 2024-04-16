export default function ErrorMiddleware(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Error occurred!")
}