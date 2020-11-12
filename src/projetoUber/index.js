const path = require("path");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const UserModel = require("../../models/users");
const app = express();
const MemoryStore = require("memorystore")(session);
const dataDir = path.resolve("src/projetoUber");
const templateDir = path.resolve(`${dataDir}${path.sep}templates`);
app.use("/public", express.static(__dirname + "/public"));

app.use(passport.initialize());
app.use(passport.session());

app.locals.domain = "localhost:8080";

app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const renderTemplate = (res, req, template, data = {}) => {
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

app.get("/login", function (req, res) {
    renderTemplate(res, req, "login.ejs");
});

app.get("/login/motorista", function (req, res) {
    renderTemplate(res, req, "logMotorista.ejs");
});

app.get("/login/passageiro", function (req, res) {
    renderTemplate(res, req, "logPassageiro.ejs");
});

app.get("/registro", function (req, res) {
    renderTemplate(res, req, "registro.ejs");
});

app.get("/registro/motorista", function (req, res) {
    renderTemplate(res, req, "regMotorista.ejs");
});

app.get("/registro/passageiro", function (req, res) {
    renderTemplate(res, req, "regPassageiro.ejs");
});

app.get("/configurações", function (req, res) {
    renderTemplate(res, req, "configurações.ejs");
});

app.get("*", function (req, res) {
    renderTemplate(res, req, "404.ejs");
});

app.listen(8080, null, null, () =>
    console.log(`Site aberto na porta 8080.`)
);
