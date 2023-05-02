import { useState } from 'react';
import Navbar from './Navbar';
import CreateModal from '../Modal/CreateModal';

export default function Header() {
    const [isCreateModal, setCreateModal] = useState(false);

  const handleModal = (status) => {
    setCreateModal(status);
  }
    return (
      <>
        <header className="fixed-top">
          <Navbar status={isCreateModal} onGetModal={handleModal} />
        </header>

        {isCreateModal && (
          <CreateModal onGetModal={handleModal} />
        )}
      </>
    );
}
