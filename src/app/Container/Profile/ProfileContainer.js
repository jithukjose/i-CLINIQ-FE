import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from 'reactstrap';

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col md='4'>
              <Card className='card-user'>
                <div className='image'>
                  <img
                    alt='...'
                    src={require('../../assets/img/damir-bosnjak.jpg')}
                  />
                </div>
                <CardBody>
                  <div className='author'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        className='avatar border-gray'
                        src={require('../../assets/img/default-avatar.png')}
                      />
                      <h5 className='title'>Chet Faker</h5>
                    </a>
                    <p
                      className='description'
                      style={{ color: 'green', fontSize: '1.5em' }}
                    >
                      Admin
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md='8'>
              <Card className='card-user'>
                <CardHeader>
                  <CardTitle tag='h5'>Edit Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className='pr-1' md='5'>
                        <FormGroup>
                          <label>logged in as</label>
                          <Input
                            defaultValue='Admin'
                            disabled
                            placeholder='Company'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='pr-1' md='6'>
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue='Chet'
                            placeholder='Company'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                      <Col className='pl-1' md='6'>
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue='Faker'
                            placeholder='Last Name'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md='12'>
                        <FormGroup>
                          <label>Email address</label>
                          <Input
                            defaultValue='Chet@gmail.com'
                            placeholder='Email'
                            type='email'
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className='pr-1' md='1'>
                        <FormGroup>
                          <label>Code</label>
                          <Input
                            defaultValue='91'
                            placeholder='City'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                      <Col className='px-1' md='4'>
                        <FormGroup>
                          <label>Number</label>
                          <Input
                            defaultValue='9495648930'
                            placeholder='Country'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                      <Col className='pl-1' md='4'>
                        <FormGroup>
                          <label>Country</label>
                          <Input placeholder='India' type='text' />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <div className='update ml-auto mr-auto'>
                        <Button
                          className='btn-round'
                          color='primary'
                          type='submit'
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Profile;
