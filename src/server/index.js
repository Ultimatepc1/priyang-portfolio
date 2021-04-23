import express from 'express';
import bodyParser from 'body-parser';

import '@babel/polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import mongoose from 'mongoose'

import App from '../client/App';

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 9002;

var skills_route = require('./skills/skills_controller');
var projects_route = require('./projects/projects_controller');
var resume_route = require('./resume/resume_controller');

app.use("/api/projects", projects_route);
app.use("/api/skills", skills_route);
app.use("/api/resume", resume_route);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
    var title = "Priyang's Full Stack MERN Portfolio";
    var description = "A portfolio site is essential for every software developer to showcase projects and technical skills which demonstrates what he can do based upon your resume.";
    var thumb = "https://github.com/Ultimatepc1/bestpapersolutions/blob/master/media/s2portfolio.png?raw=true";
    var favicon = "https://media-exp1.licdn.com/dms/image/C5603AQHFeTEk5JG1wQ/profile-displayphoto-shrink_800_800/0/1611211669999?e=1624492800&v=beta&t=x9yKsJ5Nylw0eHzQ_XrH4vElgsK-O8tmmdNTMHK9u3s";
    var link = "https://priyang-portfolio.herokuapp.com";
    console.log("server started on port " + PORT)

    const context = {}

    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta content="IE=edge" http-equiv="X-UA-Compatible">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <title>${title}</title>
            <meta name="keywords" content="portfolio, software developer portfolio, priyang chaurasia, full stack application, web application development, react application, mern application, mern stack application, portfolio design"/>
            <meta name="description" content="${description}">
        
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:site" content="@priyang">
            <meta name="twitter:title" content="${title}">
            <meta name="twitter:description" content="${description}">
            <meta name="twitter:creator" content="@priyang">
            <meta name="twitter:image" content="${thumb}">
            <meta property="og:title" content="${title}" />
            <meta property="og:description" content="${description}">
            <meta property="og:type" content="article" />
            <meta property="og:url" content="${link}" />
            <meta property="og:image" content="${thumb}" />
            <meta property="og:site_name" content="${title}" />
            <link rel="canonical" href="${link}"/>
            <link rel="shortcut icon" type="image/png" href="${favicon}"/>
            <link rel="apple-touch-icon-precomposed" href="${thumb}"/>
        </head>
        <body>
            <div id="root">${markup}</div>
            <script src="client_bundle.js"></script>
        </body>
        </html>`;

    res.send(html);
})

mongoose.connect("mongodb+srv://"+process.env.USERNAME+":"+process.env.PASSWORD+"@testcluster.w56bm.mongodb.net/portfolio?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);