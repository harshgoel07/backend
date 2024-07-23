const Project = require('../models/Project');

const createProject = async (req, res) => {
  const { name } = req.body;
  const userId = req.user.userId;

  try {
    const project = new Project({ name, user: userId });
    await project.save();

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getProjects = async (req, res) => {
  const userId = req.user.userId;

  try {
    const projects = await Project.find({ user: userId });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createProject, getProjects };
