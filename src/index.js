import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'

//setup vars
const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71xLmdLOQ0L._AC_UL200_SR200,200_.jpg',
    title: 'Beyond Order: 12 More Rules for Life',
    author: 'Peter B. Peterson',
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised Land',
    author: 'Barack Obama',
  },
]
const names = ['john', 'peter', 'susan']
const newName = names.map((name) => {
  return <h1>{name}</h1>
})
console.log(newName)
function BookList() {
  return <section className='booklist'>{newName}</section>
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
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
