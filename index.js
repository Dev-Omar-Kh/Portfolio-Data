const express = require("express");
const app = express();
const { portfolioData } = require("./db");

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("Portfolio API is running 🎉");
});

app.get("/about-me", (req, res) => {
    res.json(portfolioData.aboutMe);
});

app.get("/tech-skills", (req, res) => {
    res.json(portfolioData.technicalSkillsData);
});

app.get("/projects", (req, res) => {
    res.json(portfolioData.projectsData);
});

app.get("/certifications", (req, res) => {
    res.json(portfolioData.certificationsData);
});

app.get("/portfolio-data", (req, res) => {
    res.json(portfolioData);
});

module.exports = app;
