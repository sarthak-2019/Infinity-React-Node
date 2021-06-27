const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const globalErrorHandler = require("./controller/errorController");
// const helmet = require("helmet");
// const mongoSanitize = require("express-mongo-sanitize");
// const xss = require("xss-clean");
const AppError = require("./utils/appError");
const app = express();

// Set Security Http Headers
// app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:63000"],
    credentials: true,
  })
);

// app.use(mongoSanitize());
// app.use(xss());

//   Set up the routes

app.use("/games", require("./routers/gameRouter"));

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this Server!`, 404));
});

// Global Error Handling Middleware
app.use(globalErrorHandler);

module.exports = app;
