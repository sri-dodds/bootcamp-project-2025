import mongoose, { Schema } from "mongoose";
const projSchema = new Schema({
        title: { type: String, required: true },
        slug: { type: String, required: true },
        date: { type: Date, required: false, default: new Date()},
        description: { type: String, required: true },
        image: { type: String, required: true },
      imageAlt: { type: String, required: true },
})

const Project = mongoose.models['projects'] ||
    mongoose.model('projects', projSchema);

export default Project;