import { useState } from 'react'
import Close from '../../assets/close.png'
import './modal.css'


function ModalAdd({addBooks, fecharModal}) {

    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem, setImagem] = useState("")
    const [status, setStatus] = useState("")
    const [comentario, setComentario] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!titulo || !autor || !imagem || !status || !comentario) return;
        addBooks(titulo,autor,imagem,status,comentario);
    }
    

    return (
        <div className='modal-container'>
            <div className="modal-background"></div>
            <section className='modal-content'>
                <header className='modal-header'>
                    <h1 className="modal-header-text">Adicionar livro</h1>
                    <img src={Close} alt="close-icon" className="close-modal-icon" onClick={fecharModal}/>
                </header>
                <section className='form-container'>
                    <form  className='form-cadastro' onSubmit={handleSubmit}>
                        <label className='input-label'>Titulo *</label>
                        <input type="text" className="form-input" required onChange={(e)=> setTitulo(e.target.value)}/>
                        <label className='input-label'>Autor *</label>
                        <input type="text" className="form-input" required onChange={(e)=> setAutor(e.target.value)}/>
                        <label className='input-label'>URL da imagem *</label>
                        <input type="text" className="form-input" required onChange={(e)=> setImagem(e.target.value)}/>
                        <label className='input-label'>Status</label>
                        <select type="text" className="form-input" onChange={(e)=> setStatus(e.target.value)}>
                            <option value="">Escolher status</option>
                            <option value="Lido">Lido</option>
                            <option value="Lendo">Lendo</option>
                            <option value="Quero ler">Quero ler</option>
                        </select>
                        <label className='input-label'>Comentário *</label>
                        <textarea className="form-textarea" onChange={(e)=> setComentario(e.target.value)} required placeholder='Suas anotações sobre o livro (opcional)' />
                        <footer className='footer-buttons'>
                            <button type='button' className='btn-cancel' onClick={fecharModal}>Cancelar</button>
                            <button className='btn-add' type='submit'>Adicionar</button>
                        </footer>
                    </form>
                </section>
            </section>    
        </div>
    )
}


export default ModalAdd