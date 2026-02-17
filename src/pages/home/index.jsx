import Header from '../../components/header/index.jsx'
import Modal from '../../components/modal/index.jsx'
import Main from '../../components/main/index.jsx'
import './style.css'
import { useState } from 'react'

function Home() {
  const [openModal, setOpenModal] = useState(false)

  function abrirModal() {
    setOpenModal(true);
  }

  function fecharModal() {
    setOpenModal(false);
  }

  return (
    <div className='home-conteiner'>
      <Header abrirModal={abrirModal}/>
      <Main />

      {openModal && (
        <Modal fecharModal={fecharModal} />
      )}
    </div>
  )
}

export default Home
