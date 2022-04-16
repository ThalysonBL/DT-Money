import { Dashboard } from "./components/dashboard";
import Modal from 'react-modal';
import { useState } from "react";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { NewtransactionModal } from "./components/dashboard/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewtransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </>
  );
}
