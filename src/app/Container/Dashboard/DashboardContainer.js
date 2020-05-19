import React from 'react';

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle, Row, Col } from 'reactstrap';
// core components

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats' style={{ height: '300px' }}>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5' style={{ paddingLeft: '40%' }}>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-globe text-warning' />
                      </div>
                    </Col>
                    <Col md='8' xs='7' style={{ textAlign: 'center' }}>
                      <div className='numbers' style={{ paddingTop: '30%' }}>
                        <div
                          className='card-category'
                          style={{ textAlign: 'unset' }}
                        >
                          Doctors
                        </div>
                        <CardTitle tag='p'>21</CardTitle>

                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='fas fa-sync-alt' /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats' style={{ height: '300px' }}>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5' style={{ paddingLeft: '40%' }}>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-globe text-warning' />
                      </div>
                    </Col>
                    <Col md='8' xs='7' style={{ textAlign: 'center' }}>
                      <div className='numbers' style={{ paddingTop: '30%' }}>
                        <div
                          className='card-category'
                          style={{ textAlign: 'unset' }}
                        >
                          Tests
                        </div>
                        <CardTitle tag='p'>21</CardTitle>

                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='fas fa-sync-alt' /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats' style={{ height: '300px' }}>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5' style={{ paddingLeft: '40%' }}>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-globe text-warning' />
                      </div>
                    </Col>
                    <Col md='8' xs='7' style={{ textAlign: 'center' }}>
                      <div className='numbers' style={{ paddingTop: '30%' }}>
                        <div
                          className='card-category'
                          style={{ textAlign: 'unset' }}
                        >
                          Medicines
                        </div>
                        <CardTitle tag='p'>21</CardTitle>

                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='fas fa-sync-alt' /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats' style={{ height: '300px' }}>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5' style={{ paddingLeft: '40%' }}>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-globe text-warning' />
                      </div>
                    </Col>
                    <Col md='8' xs='7' style={{ textAlign: 'center' }}>
                      <div className='numbers' style={{ paddingTop: '30%' }}>
                        <div
                          className='card-category'
                          style={{ textAlign: 'unset' }}
                        >
                          Lab Technicians
                        </div>
                        <CardTitle tag='p'>21</CardTitle>

                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='fas fa-sync-alt' /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats' style={{ height: '300px' }}>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5' style={{ paddingLeft: '40%' }}>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-globe text-warning' />
                      </div>
                    </Col>
                    <Col md='8' xs='7' style={{ textAlign: 'center' }}>
                      <div className='numbers' style={{ paddingTop: '30%' }}>
                        <div
                          className='card-category'
                          style={{ textAlign: 'unset' }}
                        >
                          Appointments
                        </div>
                        <CardTitle tag='p'>21</CardTitle>

                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='fas fa-sync-alt' /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
