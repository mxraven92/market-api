const express = require("express");
const config = require("../config/default");
const orders = require("./routes/orders");
const vendors = require("./routes/vendors");
const audit = require("./middleware/audit");

const app = express();
app.use(express.json());
app.use(audit);
app.use("/orders", orders);
app.use("/vendors", vendors);

app.get("/health", (req, res) => {
  res.json({ ok: true, version: config.apiVersion });
});

app.listen(config.port, () => {
  console.log(`market-api listening on ${config.port}`);
});
