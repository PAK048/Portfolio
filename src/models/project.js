import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  techStack: { type: [String], default: [] },
  imagesUrl: { type: [String], default: [] },
  introUrl: { type: String },
  liveUrl: { type: String },
});

const Project =
  mongoose.models.projects || mongoose.model("projects", ProjectSchema);
export default Project;
