import Header from "../../components/header/index.jsx";
import ModalAdd from "../../components/modal-add/index.jsx";
import Main from "../../components/main/index.jsx";
import "./style.css";
import { useState } from "react";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [books, setBooks] = useState([]);

  const addBooks = (titulo, autor, imagem, status, comentario) => {
    const newBooks = {
      id: crypto.randomUUID(),
      titulo,
      autor,
      imagem,
      status,
      comentario
    }

    setBooks(prev => [...prev, newBooks]);
    fecharModal();
  };

  function abrirModal() {
    setOpenModal(true);
  }

  function fecharModal() {
    setOpenModal(false);
  }

  return (
    <div className="home-conteiner">
      <Header abrirModal={abrirModal} />
      <Main books={books}/>
      {openModal && ( <ModalAdd fecharModal={fecharModal} addBooks={addBooks}/>)}
    </div>
  );
}

export default Home;
