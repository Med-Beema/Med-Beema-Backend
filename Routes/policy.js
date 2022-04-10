const router = require("express").Router();

//  Policy Schema
const Policy = require("../Models/policySchema");

/**
 *  @route GET /policy
 *  @desc Get All policy for each user
 *  @access Private
 */
router.get("/policy", (req, res) => {
  Policy.find({ userId: req.user.id })
    .sort({ favourite: "desc", name: "asc" })
    .then((policy) => res.json(policy));
});

/**
 *  @route POST /policy
 *  @desc Create a Policy
 */
router.post("/policy", (req, res) => {
  const newPolicy = new Policy({
    userId: req.body.userId,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });
  console.log(newPolicy);
  newPolicy.save().then((policy) => res.json(policy));
});

// /**
//  *  @route DELETE /policy/:id
//  *  @desc Delete a Policy
//  *  @access Private
//  */
// router.delete("/policy/:id", (req, res) => {
//   Policy.findById(req.params.id)
//     .then((policy) => policy.remove().then(() => res.json({ success: true })))
//     .catch((err) => res.status(404).json({ success: false }));
// });

module.exports = router;
