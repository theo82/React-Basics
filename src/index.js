import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'

//setup vars
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71xLmdLOQ0L._AC_UL200_SR200,200_.jpg',
    title: 'Beyond Order: 12 More Rules for Life',
    author: 'Peter B. Peterson',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised Land',
    author: 'Barack Obama',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg',
    title: 'The Midnight Library: A Novel',
    author: 'Matt Haig',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
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
const Book = (props) => {
  // const { img, title, author } = props.book
  const { img, title, author } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
