const router = require("express").Router();

router.get("/", (req, res) => {
  res.json([
    { id: "ORD-7714", state: "pending_escrow" },
    { id: "ORD-7719", state: "vendor_accepted" }
  ]);
});

module.exports = router;
