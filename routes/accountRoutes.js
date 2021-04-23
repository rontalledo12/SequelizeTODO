const express = require("express");
const router = express.Router();
const accountController = require("../controller/accountController");

router.post("/create_account", accountController.createAccount);
router.get("/read_account", accountController.readAccount);
router.post("/update_account", accountController.updateAccount);
router.post("/delete_account", accountController.deleteAccount);

module.exports = router;