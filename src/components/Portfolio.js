import React from "react";
import Project from "./Project";

const projects = [
    {
        id: 0,
        title: "Text Editor",
        languages: "jsx, css, js, html",
        packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
        image: "/img/pocket-traders.png",
        description: "Allows you to trade pokemon and create a team. I did the design and front end!",
        repo: "https://github.com/oameeno/text-editor",
        live: "https://textt-editor.herokuapp.com/",
    },
    {
        id: 1,
        title: "Contact Card",
        languages: "html, handlebars, js, css",
        packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
        image: "/img/techtopics.png",
        description: "Allows you to be able to add, remove and edit each contact card for anything related to your business.",
        repo: "https://github.com/oameeno/contact-card",
        live: "https://oameeno.github.io/contact-card/",
    },
    {
        id: 2,
        title: "CoinWiki",
        languages: "html, css, js",
        packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, puppeteer, sequelize",
        image: "/img/quizam.png",
        description: "All you can get Crypto information, including current trading prices!",
        live: "https://github.com/oameeno/CoinWiki",
        repo: "https://oameeno.github.io/CoinWiki/",
    },
    {
        id: 3,
        title: "Work Scheduler",
        languages: "html, css, js",
        image: "/img/noheadphones.png",
        packages: "none",
        description: "Gives you the ability to schedule certain tasks with ease.",
        repo: "https://github.com/oameeno/Work-Scheduler",
        live: "https://oameeno.github.io/Work-Scheduler/",
    },
    {
        id: 4,
        title: "Note Taker App",
        languages: "html, css, js",
        packages: "Express.js, Generate Unique IDs",
        image: "/img/duly-noted.png",
        description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
        repo: "https://github.com/oameeno/Note-Taker",
        live: "https://oameeno.github.io/Note-Taker/",
    },
    {
        id: 5,
        title: "Portfolio",
        languages: "html, css, js, react",
        packages: "none",
        image: "/img/work-portfolio.png",
        description: "A basic work portfolio that holds my projects for the full stack development class.",
        repo: "https://github.com/oameeno/Amins-Portfolio",
        live: "https://oameeno.github.io/Amins-Portfolio/",
    },
    {
        id: 6,
        title: "Weather Dashboard",
        languages: "html, css, js",
        packages: "none",
        image: "/img/weather-app.png",
        description: "A basic app that allows you to see the weather for a specific searched or saved city.",
        repo: "https://github.com/oameeno/Weather-Dashboard",
        live: "https://oameeno.github.io/Weather-Dashboard/",
    },
];

function Portfolio() {
    return (
        <div>
            <p className="content is-medium">Portfolio</p>
            <hr />

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;