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

const LabTechnicianDetailModal = ({
  setModal,
  onCancelClick,
  filteredDetail,
}) => (
  <Row>
    <div>
      <Modal isOpen={setModal}>
        <ModalBody style={{ fontFamily: 'Varela Round' }}>
          <CardHeader>
            <CardTitle tag='h3'> Patient Details</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col className='pr-1' md='10'>
                  <FormGroup>
                    <label>First Name </label>
                    <Input
                      value={filteredDetail[0] && filteredDetail[0].firstName}
                      type='text'
                    />
                    <label>Last Name</label>
                    <Input
                      value={filteredDetail[0] && filteredDetail[0].lastName}
                      type='text'
                    />
                    <label>Email </label>
                    <Input
                      value={filteredDetail[0] && filteredDetail[0].email}
                      type='text'
                    />
                    <label>Phone Number </label>
                    <Input
                      value={filteredDetail[0] && filteredDetail[0].phoneNumber}
                      type='text'
                    />
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

export default LabTechnicianDetailModal;
