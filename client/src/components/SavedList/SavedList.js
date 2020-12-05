import React, { Component } from 'react';
import SavedListItem from "../SavedListItem/SavedListItem";

class ResultList extends Component {


    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <SavedListItem 
            key={book._id}
            id={book._id}
            title={book.title}
            link={book.link}
            authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
            image={book.image ? book.image : "https://previews.123rf.com/images/dp3010/dp30101501/dp3010150100032/35946610-brown-leather-book-cover-on-white-with-long-shadow.jpg"}
            description={book.description}
            deleteGoogleBook={this.props.deleteGoogleBook}
            />
        ))
        )
                           
    }
}

export default ResultList


