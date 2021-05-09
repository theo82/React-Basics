import React from 'react'
import ReactDOM from 'react-dom'
// CSS
import './index.css'

import { books } from './books'
import Book from './Book'
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return (
          // <div>
          //   <h3>{title}</h3>
          //   <h6>{author}</h6>
          // </div>
          //
          <Book key={book.id} {...book} />
        )
      })}
    </section>
  )
}

// const Greetings = () => {
//   return React.createElement('h1', 'hello word, I am Theo')
// }

ReactDOM.render(<BookList />, document.getElementById('root'))
