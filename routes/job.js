const router = require("express").Router();
const jobController = require("../controllers/jobController");
const {verifyAndAuthorization, verifyToken, verifyAndAdmin } = require("../middleware/verifyToken")


//post Job
router.post("/", verifyAndAdmin, jobController.createJob);

//update job 
router.put("/:id", verifyAndAdmin, jobController.updateJob);

//delete job 
router.delete("/:id", verifyAndAdmin, jobController.deleteJob);


//get job                                                               
router.get("/:id", jobController.getJob);

//get job                                                               
router.get("/", jobController.getAllJobs);

//search job                                                               
router.get("/search/:key", jobController.searchJobs);


module.exports = router