import mongoose from "mongoose";

const projectsDb = mongoose.Schema({
    name: String,
    description: String,
    link: String,
    date: String,
})

export default mongoose.model('projects', projectsDb);