import React from 'react';
import { Button, Modal, ModalFooter, Row } from 'reactstrap';

const ModalModule = ({ setModal, Children, onCancelClick, onUpdateClick }) => (
  <Row>
    <div>
      <Modal isOpen={setModal}>
        <Children />
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
            onClick={(e) => onUpdateClick(e)}
          >
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  </Row>
);

export default ModalModule;
