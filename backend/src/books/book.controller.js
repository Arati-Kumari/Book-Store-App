const book = require("./book.model");


const postABook = async (req, res) => {
    // console.log(req.body)
    try {
        const newBook = await book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book posted sucessfully"})
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({message: "Failed to create book"})
    }
}

// get all Books
const getAllBooks = async (req, res) => {
    try {
        const books = await book.find().sort({ createdAt: -1});
        res.status(200).send(books);

    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message: "Failed to fectch books"});
    }
}

const getSingleBook = async (req, res) => {
    try {
        const {id} = req.params;
        const books = await book.findById(id)
        console.log(books)
        if(!books){
            res.status(404).send({message: "Book not found!"});
        }
        res.status(200).send(books);
        

    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message: "Failed to fectch books"});
    }
}

const UpdateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const UpdateBook =  await book.findByIdAndUpdate(id, req.body, {new :true});
        if(!UpdateBook) {
            res.status(404).send({message: "Book is not Found!"});
        }
        res.status(200).send({ message: "Book updated successfully", data: UpdateBook });

    } catch (error) {
        console.error("Error upadating a books", error);
        res.status(500).send({message: "Failed to update book"});
    }

}

const DeleteBook = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBook =  await book.findByIdAndDelete(id);
        if(!deletedBook) {
            res.status(404).send({message: "Book is not Found!"});
        }
        res.status(200).send({ 
            message: "Book deleted successfully", 
            data: deletedBook });

    } catch (error) {
        console.error("Error deleting a books", error);
        res.status(500).send({message: "Failed to delete book"});
    }

}
module.exports =  {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    DeleteBook,
}