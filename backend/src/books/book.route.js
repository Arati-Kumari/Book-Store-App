const express = require("express");
const book = require("./book.model");
const { postABook, getAllBooks, getSingleBook, UpdateBook, DeleteBook } = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

//post a book
router.post("/create-book", verifyAdminToken, postABook);

//get the book in forntend
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBook);

// Delete book endpoint
router.delete("/:id", verifyAdminToken,DeleteBook);

module.exports = router;