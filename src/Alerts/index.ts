import AlertBar from './atom/AlertBar';
import Notification from './atom/Notification';
import Modal from './atom/Modal';
import ConfirmationModal from './atom/ConfirmationModal';

// Components
export {
  AlertBar,
  Notification,
  Modal,
  ConfirmationModal,
};

export type AlertType = 'error'|'warning'|'info'|'success'|'neutral';