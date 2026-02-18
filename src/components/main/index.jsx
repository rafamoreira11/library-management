import './main.css'
import Search from './search/index.jsx'
import Info from './info/index.jsx'
import Book from './books/index.jsx'

function Main() {

  return (
    <main>
        <Info />
        <Search />
        <Book />
    </main>
  )
}

export default Main