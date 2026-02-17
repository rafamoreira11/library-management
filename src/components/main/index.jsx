import './main.css'
import Search from './search/index.jsx'
import Info from './info/index.jsx'

function Main() {

  return (
    <main>
        <Info />
        <Search />
        <section className='books-conteiner'>
            <p className='nobooks-text'>Nenhum livro adicionado ainda. Comece adicionando seu primeiro livro!</p>
        </section>
    </main>
  )
}

export default Main