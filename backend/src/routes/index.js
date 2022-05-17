const express = require("express");

const politicianRoutes = require("./v1/politician.route");

// base route - /api
const router = express.Router();

// Health check route
router.get("/v1/health", (req, res) => res.status(200).send("UP"));

// v1 politician routes
router.use("/v1/politician", politicianRoutes);

module.exports = router;
