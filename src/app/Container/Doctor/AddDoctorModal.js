import React from 'react';
import {
  Button,
  Modal,
  ModalFooter,
  Row,
  ModalBody,
  Form,
  Input,
  FormGroup,
  CardBody,
  Col,
  CardHeader,
  CardTitle,
} from 'reactstrap';

const AddDoctorModal = ({ setModal, onCancelClick }) => (
  <Row>
    <div>
      <Modal isOpen={setModal}>
        <ModalBody style={{ fontFamily: 'Varela Round' }}>
          <CardHeader>
            <CardTitle tag='h3'> Add Doctor</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col className='pr-1' md='10'>
                  <FormGroup>
                    <label>First Name </label>
                    <Input
                      //  value={}
                      type='text'
                    />
                    <label>Last Name</label>
                    <Input
                      //  value={}
                      type='text'
                    />
                    <label>Email </label>
                    <Input
                      //  value={}
                      type='text'
                    />
                    <label>Phone Number </label>
                    <Input
                      //  value={}
                      type='text'
                    />
                    <label>password </label>
                    <Input value='password' disabled type='text' />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </ModalBody>

        <ModalFooter>
          <Button className='btn-round' color='primary' onClick={onCancelClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  </Row>
);

export default AddDoctorModal;
