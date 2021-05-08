import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'

//setup vars
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/71xLmdLOQ0L._AC_UL200_SR200,200_.jpg',
  title: 'Beyond Order: 12 More Rules for Life',
  author: 'Peter B. Peterson',
}

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
  title: 'A Promised Land',
  author: 'Barack Obama',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

// const Greetings = () => {
//   return React.createElement('h1', 'hello word, I am Theo')
// }
const Book = (props) => {
  const { img, title, author } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
