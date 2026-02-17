import SearchIcon from '../../../assets/search.png'

function Search(){

    return (
    
        <section className='search-conteiner'>
            <article className='search-input-conteiner'>
                <img src={SearchIcon} alt="search-icon" className='search-icon'/>
                <input type="text" name="search" id="search-input" className="search-input" placeholder='Buscar por titulo ou autor...'/>
            </article>
            <article className='status-conteiner'>
                <select name="" id="" className='select-status'>
                    <option value="">Todos os status</option>
                    <option value="">Quero ler</option>
                    <option value="">Lendo</option>
                    <option value="">Lido</option>
                </select>
            </article>
        </section>
    )
}

export default Search