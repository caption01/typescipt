"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not Permitted");
}
var router = express_1.Router();
exports.router = router;
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are loggin</div>\n        <a href=\"/logout\">Log out</a>\n      </div>\n      ");
    }
    else {
        res.send("\n      <div>\n        <div>You are not loggin</div>\n        <a href=\"/login\">Log in</a>\n      </div>\n      ");
    }
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === "hi@hi.com" && password === "hi") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to protected router");
});
