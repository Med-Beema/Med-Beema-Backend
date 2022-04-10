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
  newClaim.save().then((claim) => res.json(claim));
};

const getClaimCount = () => {
  return Claim.countDocuments({});
  // Claim.find().count(function (err, count) {
  //   if (err) console.log(err);
  //   else return count;
  // });
};

const getAllClaims = (req, res) => {
  // console.log(getClaimCount());
  Claim.find()
    .sort({ createdDate: "desc", name: "asc" })
    .then((claim) => res.json(claim));
};

module.exports = { addClaim, getClaimCount, getAllClaims };
