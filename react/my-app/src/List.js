import React from 'react';

function bookList({books}){
    return(
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    <h3>{book.title}</h3>
                    <p>By {book.author}</p>
                </li>
            ))}
        </ul>
    );
}

export default function List(){
    const books=[
        {id: 1, title: 'Book1', Author: 'Author1'},
        {id: 2, title: 'Book2', Author: 'Author2'},
        {id: 3, title: 'Book3', Author: 'Author3'}
    ];

    return (
        <div>
            <h2>Books List</h2>
            <bookList books={books}></bookList>
        </div>
    )
}