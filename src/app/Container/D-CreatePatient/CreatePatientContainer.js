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
  Label,
} from 'reactstrap';

class CreatePatientContainer extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col md='11'>
              <Card className='card-user'>
                <CardHeader>
                  <CardTitle tag='h5'> Create Patient</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className='pr-1' md='4'>
                        <FormGroup>
                          <label>First Name </label>
                          <Input
                            defaultValue='Tim'
                            placeholder='First Name'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                      <Col className='px-1' md='4'>
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue=' Martin'
                            placeholder='Last Name'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                      <Col className='pl-1' md='4'>
                        <FormGroup>
                          <label htmlFor='exampleInputEmail1'>
                            Email address
                          </label>
                          <Input
                            type='email'
                            defaultValue='Timmartin@gmail.com'
                            placeholder='Email'
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <FormGroup>
                          <label>Age</label>
                          <Input
                            type='number'
                            placeholder='Age'
                            defaultValue='24'
                          />
                        </FormGroup>
                      </Col>

                      <Col md='6'>
                        <FormGroup>
                          <Label for='exampleSelect'>Sex</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <FormGroup>
                          <label>Height(cm)</label>
                          <Input
                            defaultValue='176'
                            placeholder='Height '
                            type='number'
                          />
                        </FormGroup>
                      </Col>
                      <Col md='6'>
                        <FormGroup>
                          <label>Weight</label>
                          <Input
                            defaultValue='62'
                            placeholder='Weight '
                            type='number'
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
                            placeholder='Code'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                      <Col className='px-1' md='4'>
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            defaultValue='7078347820'
                            placeholder='Phone Number'
                            type='text'
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='pr-1' md='5'>
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            placeholder='Country'
                            type='text'
                            defaultValue='India'
                          />
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
                          Next
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

export default CreatePatientContainer;
