const catchAsync = require("./../utils/catchAsync");
const Games = require("../models/gameModel");

exports.gameList = catchAsync(async (req, res, next) => {
  const games = await Games.find().select("-_id -__v");
  res.status(200).json({
    status: "success",
    results: games.length,
    data: {
      games,
    },
  });
});
exports.gameCategoryList = catchAsync(async (req, res, next) => {
  const type = req.params.type;
  console.log(type);
  const games = await Games.find({ category: { $eq: type } }).select(
    "-_id -__v"
  );

  if (!games) {
    return next(new AppError("No Games found with this category", 404));
  }
  res.status(200).json({
    status: "sucess",
    results: games.length,
    data: {
      games,
    },
  });
});
