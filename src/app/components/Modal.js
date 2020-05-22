import React from 'react';
import { Button, Modal, ModalFooter, Row } from 'reactstrap';

const DeleteModalModule = ({
  isDeleteModalButtonClicked,
  onModalClick,
  onDeleteConfirmClick,
  setModal,
  medicineList,
  children,
  onCancelClick,
}) => (
  <Row>
    <div>
      <Modal isOpen={setModal}>
        {children}
        <ModalFooter>
          <Button
            className='btn-round'
            color='secondary'
            onClick={onCancelClick}
          >
            Cancel
          </Button>
          <Button
            color='primary'
            className='btn-round'
            onClick={(e) => onDeleteConfirmClick(e)}
          >
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  </Row>
);

export default DeleteModalModule;
