import './main.css'
import Search from './search/index.jsx'
import Info from './info/index.jsx'
import Book from './books/index.jsx'
import ModalEdit from './books/modal-edit/index.jsx'
import { useState } from 'react'

function Main({books}) {

  const [openModal, setOpenModal] = useState(false)

  function abrirModal() {
    setOpenModal(true);
  }

  function fecharModal() {
    setOpenModal(false);
  }

  return (
    <main>
        <Info />
        <Search />
        <Book books={books} abrirModal={abrirModal}/>
        {openModal && (
          <ModalEdit fecharModal={fecharModal}/>
        )}

    </main>
  )
}

export default Main