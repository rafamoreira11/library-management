import Trash from '../../../assets/trash.png'
import Pen from '../../../assets/pen.png'



function Books({abrirModal, books}){

    

    return (
    
        <section className='books-conteiner'>
            {books.map(book => (
                <article className='book-info-container' key={book.id}>
                    <div className='book-cover-container'>
                        <img src= {book.imagem} alt="" className='book-cover'/>
                    </div>
                    <div className='book-texts-container'>
                        <h2 className="book-title">{book.titulo}</h2>
                        <p className="book-autor">{book.autor}</p>
                        <p className="book-status">{book.status}</p>
                        <p className="book-coment">{book.comentario}</p>
                    </div>
                    <div className="books-buttons">
                        <button className="btn-edit-book" onClick={abrirModal}><img src={Pen} alt="" /> Editar</button>
                        <button className="btn-remove-book"><img src={Trash} alt="" /> Excluir</button>
                    </div>
                </article>
            ))}            
        </section>
    )
}

export default Books