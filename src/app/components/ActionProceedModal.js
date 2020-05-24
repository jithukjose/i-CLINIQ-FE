import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Row } from 'reactstrap';

const ActionProceedModule = ({ onCancelClick, onYesBtnClick, setModal }) => (
  <Row>
    <div>
      <Modal isOpen={setModal}>
        <ModalBody style={{ fontFamily: 'Varela Round' }}>
          <i
            class='fas fa-times-circle fa-4x text-danger'
            style={{ paddingLeft: '45%' }}
          ></i>
          <h4
            style={{
              textAlign: 'center',
              fontSize: '26px',
              margin: '30px 0 -10px',
            }}
          >
            Are you sure?
          </h4>
          <br></br>
          <h6 style={{ textAlign: 'center' }}>
            Do you really want to Proceed? This process cannot be undone.
          </h6>
        </ModalBody>
        <ModalFooter>
          <Button
            color='secondary'
            className='btn-round'
            onClick={onCancelClick}
          >
            Cancel
          </Button>
          <Button
            color='danger'
            className='btn-round'
            onClick={(e) => onYesBtnClick(e)}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  </Row>
);

export default ActionProceedModule;
