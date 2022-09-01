import { ReactElement } from "react";
import styled from "styled-components/macro";
import Modal from "@/components/lib/Modal";

interface Props {
  icon: ReactElement;
  title: string;
  onClose: () => void;
  className?: string;
  children: ReactElement | ReactElement[];
}

/**
 * This is a modal that acts as a "page" in the application
 * @param icon      Icon
 * @param title     Title
 * @param onClose   Close handler
 * @param className Class name
 * @param children  Children
 * @constructor
 */
const PageModal = ({ icon, title, onClose, className, children }: Props) => (
  <Modal icon={icon} title={title} closeModal={onClose} className={className}>
    {children}
  </Modal>
);

export default styled(PageModal)`
  width: 94vw;
  height: 94vh;
  left: 3vw;
  top: 2vh;
`;
