const router = require("express").Router();
const formController = require("../Controllers/formController");

const upload = require("../Middlewares/upload");

// router.get("/", (req, res) => {
//     res.send("k cha");
// });

router.post("/api/uploadImage", upload, formController.imageUpload);
router.post("/api/data", upload, formController.jsonUpload);

module.exports = router;
