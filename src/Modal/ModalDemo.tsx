import { useState } from "react";
import { Modal } from "./Modal";

export const ModalDemo = () => {
     const [isModalOpen, setModalOpen] = useState(false);
    
      return (
        <div>
          <h1>Hayu</h1>
          <button onClick={() => setModalOpen(true)}>Show modal</button>
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <h1>This is modal</h1>
          </Modal>
        </div>
      );
};

