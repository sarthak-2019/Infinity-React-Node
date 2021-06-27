const router = require("express").Router();
const gameController = require("./../controller/gameController");

router.get("/allgames", gameController.gameList);
router.route("/allgames/:type").get(gameController.gameCategoryList);

module.exports = router;
