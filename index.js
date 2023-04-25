import express from "express"
const app = express();

app.get("/", (req, res) =>{
    res.json({
        message: "Hello, World!"
    })
});

app.post("/", (req, res) => {
    res.json({
        message: "Pointless posting",
        data: req.body
    })
});


app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
})