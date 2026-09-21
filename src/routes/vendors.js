const router = require("express").Router();

router.get("/", (req, res) => {
  res.json([
    { handle: "ashen-lotus", rating: 4.8 },
    { handle: "cinderwire", rating: 4.4 }
  ]);
});

module.exports = router;
