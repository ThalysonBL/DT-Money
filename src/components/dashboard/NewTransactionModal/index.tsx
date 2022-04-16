import Modal from 'react-modal';
import { Container } from './styles';
interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void
}
export function NewtransactionModal({isOpen, onRequestClose}: NewTransactionProps){
    return(
        <Modal isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content">
                <Container>
                    <h2>Cadastrar transação</h2>
                    <input placeholder="Título">
                    </input>
                    <input type="number" placeholder="Valor">
                    </input>
                    <input placeholder="Título">
                    </input>
                    <button type="submit">Cadastrar</button>
                    
                </Container>
        </Modal>
    );
}