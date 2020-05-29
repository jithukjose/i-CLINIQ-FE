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

const AppointmentDetailModal = ({
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
                    <label>Name </label>
                    <Input
                      value={
                        filteredDetail[0] &&
                        filteredDetail[0].patient &&
                        filteredDetail[0].patient.firstName
                      }
                      placeholder='Medicine Name'
                      type='text'
                    />
                    <label>Age</label>
                    <Input
                      value={
                        filteredDetail[0] &&
                        filteredDetail[0].patient &&
                        filteredDetail[0].patient.age
                      }
                      placeholder='Medicine Name'
                      type='text'
                    />
                    <label>Sex </label>
                    <Input
                      value={
                        filteredDetail[0] &&
                        filteredDetail[0].patient &&
                        filteredDetail[0].patient.sex
                      }
                      placeholder='Medicine Name'
                      type='text'
                    />
                    <label>Height </label>
                    <Input
                      value={
                        filteredDetail[0] &&
                        filteredDetail[0].patient &&
                        filteredDetail[0].patient.height
                      }
                      placeholder='Medicine Name'
                      type='text'
                    />
                    <label>Weight</label>
                    <Input
                      value={
                        filteredDetail[0] &&
                        filteredDetail[0].patient &&
                        filteredDetail[0].patient.weight
                      }
                      placeholder='Medicine Name'
                      type='text'
                    />
                    <label>Phone Number </label>
                    <Input
                      value={
                        filteredDetail[0] &&
                        filteredDetail[0].patient &&
                        filteredDetail[0].patient.phoneNumber
                      }
                      placeholder='Medicine Name'
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

export default AppointmentDetailModal;
