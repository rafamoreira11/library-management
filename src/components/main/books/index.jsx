import Trash from '../../../assets/trash.png'
import Pen from '../../../assets/pen.png'

function Books({abrirModal}){

    return (
    
        <section className='books-conteiner'>
            <article className='book-info-container'>
                <div className='book-cover-container'>
                    <img src="https://i.pinimg.com/736x/a4/d9/77/a4d977c6e5d16f624ff9f53ad5d6d919.jpg" alt="" className='book-cover'/>
                </div>
                <div className='book-texts-container'>
                    <h2 className="book-title">Jujutsu Kaisen</h2>
                    <p className="book-autor">Gege Akutami</p>
                    <p className="book-status">Lido</p>
                    <p className="book-coment">Gostei muito do mangá, lerei os proximos capitulos</p>
                </div>
                <div className="books-buttons">
                    <button className="btn-edit-book" onClick={abrirModal}><img src={Pen} alt="" /> Editar</button>
                    <button className="btn-remove-book"><img src={Trash} alt="" /> Excluir</button>
                </div>
            </article>
            <article className='book-info-container'>
                <div className='book-cover-container'>
                    <img src="https://i.pinimg.com/1200x/f6/80/18/f680180ecad299b6e8f2f0ef76809e40.jpg" alt="" className='book-cover'/>
                </div>
                <div className='book-texts-container'>
                    <h2 className="book-title">Jujutsu Kaisen</h2>
                    <p className="book-autor">Gege Akutami</p>
                    <p className="book-status">Lido</p>
                    <p className="book-coment">Gostei muito do mangá, lerei os proximos capitulos</p>
                </div>
                <div className="books-buttons">
                    <button className="btn-edit-book" onClick={abrirModal}><img src={Pen} alt="" /> Editar</button>
                    <button className="btn-remove-book"><img src={Trash} alt="" /> Excluir</button>
                </div>
            </article>
            <article className='book-info-container'>
                <div className='book-cover-container'>
                    <img src="https://i.pinimg.com/736x/d2/b9/32/d2b932c0c3320a2f1514e34af2df6088.jpg" alt="" className='book-cover'/>
                </div>
                <div className='book-texts-container'>
                    <h2 className="book-title">Jujutsu Kaisen</h2>
                    <p className="book-autor">Gege Akutami</p>
                    <p className="book-status">Lido</p>
                    <p className="book-coment">Gostei muito do mangá, lerei os proximos capitulos</p>
                </div>
                <div className="books-buttons">
                        <button className="btn-edit-book" onClick={abrirModal}><img src={Pen} alt="" /> Editar</button>
                        <button className="btn-remove-book"><img src={Trash} alt="" /> Excluir</button>
                </div>
            </article>
            <article className='book-info-container'>
                <div className='book-cover-container'>
                    <img src="https://i.pinimg.com/736x/65/e2/95/65e29591f6e4ca99940844192d833a06.jpg" alt="" className='book-cover'/>
                </div>
                <div className='book-texts-container'>
                    <h2 className="book-title">Jujutsu Kaisen</h2>
                    <p className="book-autor">Gege Akutami</p>
                    <p className="book-status">Lido</p>
                    <p className="book-coment">Gostei muito do mangá, lerei os proximos capitulos</p>
                </div>
                <div className="books-buttons">
                    <button className="btn-edit-book" onClick={abrirModal}><img src={Pen} alt="" /> Editar</button>
                    <button className="btn-remove-book"><img src={Trash} alt="" /> Excluir</button>
                </div>
            </article>
            <article className='book-info-container'>
                <div className='book-cover-container'>
                    <img src="https://i.pinimg.com/1200x/a9/3a/1c/a93a1c715bae0c50f2760ff20f256caf.jpg" alt="" className='book-cover'/>
                </div>
                <div className='book-texts-container'>
                    <h2 className="book-title">Jujutsu Kaisen</h2>
                    <p className="book-autor">Gege Akutami</p>
                    <p className="book-status">Lido</p>
                    <p className="book-coment">Gostei muito do mangá, lerei os proximos capitulos</p>
                </div>
                <div className="books-buttons">
                    <button className="btn-edit-book" onClick={abrirModal}><img src={Pen} alt="" /> Editar</button>
                    <button className="btn-remove-book"><img src={Trash} alt="" /> Excluir</button>
                </div>
            </article>
            
            
        </section>
    )
}

export default Books