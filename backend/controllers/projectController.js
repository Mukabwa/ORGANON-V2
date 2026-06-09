const Project =
  require("../models/Project");

// CREATE
exports.createProject =
  async (req, res) => {

    try {

      const project =
        await Project.create({

          ...req.body,

          ownerId:
            req.userId,
        });

      res.status(201).json(
        project
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET ALL
exports.getProjects =
  async (req, res) => {

    try {

      const projects =
        await Project.find({

          ownerId:
            req.userId,

          archived:
            false,
        }).sort({
          createdAt: -1,
        });

      res.json(projects);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// GET ONE
exports.getProject =
  async (req, res) => {

    try {

      const project =
        await Project.findOne({

          _id:
            req.params.id,

          ownerId:
            req.userId,
        });

      if (!project) {

        return res.status(404).json({
          message:
            "Project not found",
        });
      }

      res.json(project);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// UPDATE
exports.updateProject =
  async (req, res) => {

    try {

      const project =
        await Project.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          req.body,

          {
            new: true,
          }
        );

      if (!project) {

        return res.status(404).json({
          message:
            "Project not found",
        });
      }

      res.json(project);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

// ARCHIVE
exports.archiveProject =
  async (req, res) => {

    try {

      const project =
        await Project.findOneAndUpdate(

          {
            _id:
              req.params.id,

            ownerId:
              req.userId,
          },

          {
            archived:
              true,
          },

          {
            new: true,
          }
        );

      if (!project) {

        return res.status(404).json({
          message:
            "Project not found",
        });
      }

      res.json({
        message:
          "Project archived",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};