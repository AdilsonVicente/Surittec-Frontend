import Modal from 'react-modal';
import { Container } from './styles';

Modal.setAppElement('#root');

export const NewClientModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
        <h2>Cadastrar Cliente</h2>
        <input placeholder='Nome' />
        <input placeholder='Email' />
        <input placeholder='CPF' />
        <input placeholder='Tipo Telefone' />
        <input placeholder='Telefone' />
        <input placeholder='Cep' />
        <button>Cancelar</button>
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
};
