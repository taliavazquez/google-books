import axios from "axios";

export default {
    googleBooks: function(query){
      // do an api call to google and grab all the books with that search title
          return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      },
      // Saves book to the DB
        saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      },
      // Gets saved books from DB
      getBooks: function() {
          return axios.get("/api/books");
      },
      // Gets book with the given ID
      getBook: function(id) {
          return axios.get("/api/books/" + id);
      },
      // Deletes book with the given ID
      deleteBook: function(id) {
          return axios.delete("/api/books/" + id);
      }
  };