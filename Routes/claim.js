const router = require("express").Router();

//  Claim Schema
const Claim = require("../Models/claimSchema");

const {
  getClaimCount,
  getAllClaims,
} = require("../Controllers/claimController");

/**
 *  @route GET /claim
 *  @desc Get All claim for each user
 *  @access Private
 */
router.get("/claim", (req, res) => {
  console.log(req.query.userId);
  Claim.find({ userId: req.query.userId })
    .sort({ createdDate: "desc" })
    .then((claim) => res.json(claim));
});

/**
 *  @route GET /claim/:id
 *  @desc Get claim with id
 *  @access Private
 */
router.get("/claim/:id", (req, res) => {
  Claim.find({ claimId: req.params.id })
    .sort({ createdDate: "desc" })
    .then((claim) => res.json(claim));
});
/**
 *  @route GET /claim/all
 *  @desc Get All claim for all user
 *  @access Private
 */
router.get("/claimall", (req, res) => getAllClaims(req, res));

/**
 *  @route POST /claim
 *  @desc Create a Claim
 */
router.post("/claim", (req, res) => {
  let claimId = getClaimCount() + 1;
  const newClaim = new Claim({
    userId: req.body.userId,
    claimId: claimId,
    amount: req.body.amount,
    instname: req.body.institutionName,
    instAddress: req.body.institutionAddress,
    contact: req.body.contact,
    description: req.body.description,
    documents: req.body.suppDocs,
  });
  console.log(newClaim);
  newClaim.save().then((claim) => res.json(claim));
});

// /**
//  *  @route DELETE /claim/:id
//  *  @desc Delete a Claim
//  *  @access Private
//  */
// router.delete("/claim/:id", (req, res) => {
//   Claim.findById(req.params.id)
//     .then((claim) => claim.remove().then(() => res.json({ success: true })))
//     .catch((err) => res.status(404).json({ success: false }));
// });

module.exports = router;
