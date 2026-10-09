import { type FC, useCallback } from 'react';
import {
  Button,
  ContentLayout,
  type IHeaderContent,
  PageHeader,
  useModal,
  useNotification,
} from 'scorer-ui-kit';
import styled from 'styled-components';

const ModalBody = styled.div`
  padding: 20px 30px;
  max-width: 480px;
`;

const Home: FC = () => {
  const { createModal } = useModal();
  const { sendNotification } = useNotification();

  const openModal = useCallback(() => {
    createModal({
      customComponent: (
        <ModalBody>
          <h2>Modal is wired</h2>
          <p>Close this modal to trigger a notification.</p>
        </ModalBody>
      ),
      dismissCallback: () =>
        sendNotification({ type: 'success', message: 'Notifications are wired. Ready to code.' }),
    });
  }, [createModal, sendNotification]);

  const headerContent: IHeaderContent = {
    PageHeaderArea: (
      <PageHeader
        icon='Home'
        title='Ready to code'
        introductionText='Providers, theme, fonts and layout are pre-wired. Verify the setup below, then start building.'
      />
    ),
  };

  return (
    <ContentLayout layout='default' HeaderContent={headerContent}>
      <Button design='primary' onClick={openModal}>
        Test Modal &amp; Notification
      </Button>
    </ContentLayout>
  );
};

export default Home;
