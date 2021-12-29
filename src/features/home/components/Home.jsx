import { useEffect, useState } from 'react';

import { Header } from '../../../core/Header';
import { api } from '../../../utils/axios';
import { NewClientModal } from '../../modal/components/NewClientModal';
import { Container } from './styles';

export const Home = () => {
  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);

  const handleOpenNewClienteModal = () => {
    setIsNewClientModalOpen(true);
  };

  const handleCloseNewClienteModal = () => {
    setIsNewClientModalOpen(false);
  };

  useEffect(() => {
    api.get('usuarios').then((response) => console.log(response));
  }, []);

  return (
    <>
      <Container>
        <Header title='Clientes' />
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cpf</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>teste</td>
              <td>054.147.858-87</td>
            </tr>
            <tr>
              <td>teste</td>
              <td>054.147.858-87</td>
            </tr>
            <tr>
              <td>teste</td>
              <td>054.147.858-87</td>
            </tr>
            <tr>
              <td>teste</td>
              <td>054.147.858-87</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <button onClick={handleOpenNewClienteModal}>Novo Cliente</button>
      <NewClientModal isOpen={isNewClientModalOpen} onRequestClose={handleCloseNewClienteModal} />
    </>
  );
};
