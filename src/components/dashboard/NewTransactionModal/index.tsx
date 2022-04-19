import { useTransactions } from '../../../hooks/useTransactions';
import { useState, FormEvent, useContext } from 'react';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal';

import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/Entrada.svg'
import outcomeImg from '../../../assets/saidas.svg'


interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void
}
export function NewtransactionModal({isOpen, onRequestClose}: NewTransactionProps){
    const {createTransaction} = useTransactions()

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit')


    async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();

         await createTransaction({
             title,
             amount,
             category,
             type
         });
         setTitle('');
         setAmount(0);
         setCategory('Deposit');
         setType('');

         onRequestClose();
        

    }

    return(
        <Modal isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content">
                    <button type="button" 
                    onClick={onRequestClose} 
                    className="react-modal-close"> 
                        <img src={closeImg} alt="Fechar" />
                    </button>


                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar transação</h2>
                    <input placeholder="Título"
                    value={title}
                    onChange={ event => setTitle(event.target.value)}>
                    </input>

                    <input type="number" placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}>
                    </input>



                    < TransactionTypeContainer>
                        <RadioBox type="button" 
                        onClick={ () => {setType('deposit');}}
                        isActive={type === 'deposit'}
                        activeColor="green">
                            <img src={incomeImg} alt="Entrada" />

                        <span>
                            Entrada
                        </span>
                        </RadioBox>
                        <RadioBox type="button" 
                        onClick={ () => {setType('withdraw');}}
                        isActive={type === 'withdraw'}
                        activeColor="red">
                            <img src={outcomeImg} alt="Saida" />
                        <span>
                            Saída
                        </span>
                        </RadioBox>
                    </TransactionTypeContainer>



                    <input placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}>
                    </input>
                    <button type="submit">Cadastrar</button>
                    
                </Container>
        </Modal>
    );
}