import React from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  CardTitle,
  CardHeader,
} from 'reactstrap';

class CreateAppointmentContainer extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col md='10' style={{ paddingLeft: '12%' }}>
              <Card className='card-user'>
                <CardHeader>
                  <CardTitle tag='h5'> Create Appointment</CardTitle>
                </CardHeader>
                <CardBody style={{ paddingLeft: '25%' }}>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>FirstName</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>Tim</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>LastName</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>Martin</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>Email</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>Timmartin@gmail.com</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>Age</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>24</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>Sex</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>Male</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>Height</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>176</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>Weight</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>65</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>Phone Number</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>9495893938</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col className='px-1' md='4'>
                      <span>Country</span>
                    </Col>
                    <Col className='pl-1' md='4'>
                      <span>United States</span>
                    </Col>
                  </Row>
                  <br></br>
                  <Row style={{ paddingRight: '50%' }}>
                    <div className='update ml-auto mr-auto'>
                      <Button
                        className='btn-round'
                        color='primary'
                        type='submit'
                      >
                        Create Appointment
                      </Button>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default CreateAppointmentContainer;
