import Close from '../../assets/close.png'
import './modal.css'


function ModalAdd({fecharModal}) {

    return (
        <div className='modal-container'>
            <div className="modal-background"></div>
            <section className='modal-content'>
                <header className='modal-header'>
                    <h1 className="modal-header-text">Adicionar livro</h1>
                    <img src={Close} alt="close-icon" className="close-modal-icon" onClick={fecharModal}/>
                </header>
                <section className='form-container'>
                    <form action="#" className='form-cadastro'>
                        <label className='input-label'>Titulo *</label>
                        <input type="text" className="form-input" required/>
                        <label className='input-label'>Autor *</label>
                        <input type="text" className="form-input" required/>
                        <label className='input-label'>URL da imagem *</label>
                        <input type="text" className="form-input" required/>
                        <label className='input-label'>Status</label>
                        <select type="text" className="form-input">
                            <option value="">Lido</option>
                            <option value="">Lendo</option>
                            <option value="">Quero ler</option>
                        </select>
                        <label className='input-label'>Comentário *</label>
                        <textarea className="form-textarea" required placeholder='Suas anotações sobre o livro (opcional)'/>
                        <footer className='footer-buttons'>
                            <button className='btn-cancel' onClick={fecharModal}>Cancelar</button>
                            <button className='btn-add' type='submit'>Adicionar</button>
                        </footer>
                    </form>
                </section>
            </section>    
        </div>
    )
}


export default ModalAdd