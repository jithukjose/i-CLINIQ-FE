import React from 'react';
import {
  Button,
  Modal,
  ModalFooter,
  Row,
  CardTitle,
  Input,
  FormGroup,
  CardBody,
  Col,
  ModalBody,
  CardHeader,
} from 'reactstrap';

const ModalModule = ({
  setModal,
  Children,
  onCancelClick,
  onEditChangeHandler,
  updatedName,
}) => (
  <Row>
    <div>
      <Modal isOpen={setModal}>
        <ModalBody style={{ fontFamily: 'Varela Round' }} key={'index'}>
          <CardHeader>
            <CardTitle tag='h3'> Update Medicine Name</CardTitle>
          </CardHeader>
          <CardBody>
            {/* <Form> */}
            <Row>
              <Col className='pr-1' md='10'>
                <FormGroup>
                  <label>Medicine Name </label>
                  <Input
                    value={updatedName}
                    placeholder='Medicine Name'
                    type='text'
                    onChange={onEditChangeHandler}
                    key={'index'}
                  />
                </FormGroup>
              </Col>
            </Row>
            {/* </Form> */}
          </CardBody>
        </ModalBody>
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
            onClick={(e) => onCancelClick(e)}
          >
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  </Row>
);

export default ModalModule;
