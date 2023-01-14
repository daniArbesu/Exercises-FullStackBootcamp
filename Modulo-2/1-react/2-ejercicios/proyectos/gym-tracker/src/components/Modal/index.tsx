import ReactDom from 'react-dom';
import { ModalContent, ModalPopover } from './styles';

const Modal = ({ open, children }: Props): React.ReactElement => {
  return (
    <>
      {open
        ? ReactDom.createPortal(
            <ModalPopover>
              <ModalContent>{children}</ModalContent>
            </ModalPopover>,
            document.getElementById('portal') as HTMLDivElement
          )
        : null}
    </>
  );
};

export type Props = {
  children: React.ReactNode;
  open: boolean;
};

export default Modal;
