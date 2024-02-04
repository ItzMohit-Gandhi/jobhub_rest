const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorization, verifyToken, verifyAndAdmin } = require("../middleware/verifyToken")


//update User
router.put("/:id", verifyAndAuthorization, userController.updateUser);
//delete User
router.delete("/:id", verifyAndAuthorization, userController.deleteUser);
//get user
router.get("/:id", verifyAndAuthorization, userController.getUser);
//get user
router.get("/", verifyAndAdmin, userController.getAllUsers);
module.exports = router