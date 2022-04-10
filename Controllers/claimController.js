//  Claim Schema
const Claim = require("../Models/claimSchema");

const addClaim = (req, res) => {
  const newClaim = new Claim({
    userId: req.body.userId,
    claimId: claimId,
    amount: req.body.amount,
    instname: req.body.instname,
    instAddress: req.body.instAddress,
    contact: req.body.contact,
    description: req.body.description,
    documents: req.body.documents,
    endDate: req.body.endDate,
  });
  console.log(newClaim);
  setClaimCount();
  newClaim.save().then((claim) => res.json(claim));
};

// const setClaimCount = () => {
//   // return Claim.countDocuments({});
//   Claim.find().count(function (err, count) {
//     if (err) console.log(err);
//     else localStorage.setItem("claimCount", count);
//   });
// };

// const getClaimCount = () => {
//   let count =  localStorage.getItem("claimCount");
//   localStorage.getItem("claimCount"
//   )
// };

const getAllClaims = (req, res) => {
  // console.log(getClaimCount());
  Claim.find()
    .sort({ createdDate: "desc", name: "asc" })
    .then((claim) => res.json(claim));
};

const yesVote = (req, res) => {
  console.log("id", req.params.claimId);
  Claim.findOneAndUpdate(
    { claimId: req.params.claimId },
    { $inc: { voteFor: 1, quorum: 1 } }
  )
    .then((claim) => res.json({ claim }))
    .catch((err) => res.status(404).json({ success: false }));
};

const noVote = (req, res) => {
  Claim.findOneAndUpdate(
    { claimId: req.params.claimId },
    { $inc: { voteAgainst: 1, quorum: 1 } }
  )
    .then((claim) => res.json({ claim, success: true }))
    .catch((err) => res.status(404).json({ success: false }));
};

const addAssessment = (req, res) => {
  Claim.findOneAndUpdate(
    { claimId: req.params.claimId },
    { assessment: req.body.assessment }
  )
    // .then()
    .then((claim) => res.json({ claim, success: true }))
    .catch((err) => res.status(404).json({ success: false }));
    // req.body.vote == "Accept" ? yesVote(req, res) : noVote(req, res)
};

module.exports = {
  addClaim,
  // getClaimCount,
  // setClaimCount,
  getAllClaims,
  yesVote,
  noVote,
  addAssessment,
};
