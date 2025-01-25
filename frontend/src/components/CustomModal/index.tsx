import { XCircle } from "@phosphor-icons/react";

import * as M from "./styles";


type ModalProps = {
  children: React.ReactNode;
  isopen: boolean;
  onRequestClose: () => void; // Define o callback para fechar o modal
};

const CustomModal = ({ children, isopen, onRequestClose }: ModalProps) => {
  return (
    <M.ModaldMain>
      <M.Modal
        isopen={isopen}
        onRequestClose={onRequestClose} // Fecha o modal ao clicar fora ou apertar ESC
      >
        {children}
      </M.Modal>
    </M.ModaldMain>
  );
};

export default CustomModal;
