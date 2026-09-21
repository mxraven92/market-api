module.exports = function audit(req, res, next) {
  req.auditId = `audit-${Date.now()}`;
  next();
};
