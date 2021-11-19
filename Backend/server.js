import express from "express";
import moongoose from 'mongoose';
import projectsDb from "./projectsDb.js";
import Cors from 'cors';

// App initialize
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:Miiti0U4D8rGV4uf@cluster0.08mtg.mongodb.net/projectsDb?retryWrites=true&w=majority";
// password Miiti0U4D8rGV4uf

// MiddleWares
app.use(express.json());
app.use(Cors());
// DB Config
moongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// API EndPoints --> "/getProjects", "/addProject", "removeProject";

app.get("/getProjects", (req, res) => {
    projectsDb.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post("/addProject", (req, res) => {
    const projectData = req.body; // {
    //     name: String,
    //     description: String,
    //     link: String,
    //     date: String,
    // }
    const projectToBeAdded = {
        name: projectData.name,
        description: projectData.description,
        link: projectData.link,
        date: projectData.date
    };

    projectsDb.create(projectToBeAdded, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

})

app.post("/removeProject", (req, res) => {
    const projectName = req.body.name; // name

    projectsDb.findOneAndDelete({ name: projectName }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

// Listener
app.listen(port, () => { console.log(`Listening to the PORT ${port}`) });