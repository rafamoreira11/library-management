import './main.css'
import Search from '../../assets/search.png'

function Main() {

  return (
    <main>
        <section className='search-conteiner'>
            <article className='search-input-conteiner'>
                <img src={Search} alt="search-icon" className='search-icon'/>
                <input type="text" name="search" id="search-input" className="search-input" placeholder='Buscar por titulo ou autor...'/>
            </article>
            <article className='status-conteiner'>
                <select name="" id="" className='select-status'>
                    <option value="">Todos os status</option>
                    <option value="">A</option>
                    <option value="">b</option>
                </select>
            </article>
        </section>
        <section className='books-conteiner'>
            <p className='nobooks=text'>Nenhum livro adicionado ainda. Comece adicionando seu primeiro livro!</p>
        </section>
    </main>
  )
}

export default Main