const url = require("url");
const path = require("path");
const express = require("express");
const session = require("express-session");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const MemoryStore = require("memorystore")(session);

const templateDir = path.resolve("templates/");
app.use("/public", express.static(__dirname + "/public"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const renderTemplate = (res, req, template, data = {}) => {
    const os = require("os");
    const baseData = {
        path: req.path,
    };
    res.render(
        path.resolve(`${templateDir}${path.sep}${template}`),
        Object.assign(baseData, data)
    );
};

app.get("/", (req, res) => {
    renderTemplate(res, req, "landing.ejs");
});

app.listen(80, '192.168.1.4', null, () =>
    console.log("Site aberto na porta 80.")
);
