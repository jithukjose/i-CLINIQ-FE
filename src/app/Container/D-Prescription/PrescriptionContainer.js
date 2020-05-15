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

class PrescriptionContainer extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col md='11'>
              <Card className='card-user'>
                <CardHeader>
                  <CardTitle tag='h5'> Observation</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className='pr-1' md='6'>
                        <FormGroup>
                          <label>Patient Name </label>
                          <Input
                            defaultValue='Tim'
                            placeholder='First Name'
                            type='text'
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col className='pr-1' md='6'>
                        <FormGroup>
                          <label>Email </label>
                          <Input
                            type='email'
                            defaultValue='Timmartin@gmail.com'
                            placeholder='Email'
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='6'>
                        <FormGroup>
                          <Label for='exampleSelect'>Lab Test Required</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Yes</option>
                            <option>No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md='3'>
                        <FormGroup>
                          <Label for='exampleSelect'>Medicine</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Select</option>
                            <option>Allergy Blood Test</option>
                            <option>ALT Blood Test</option>
                            <option>Ammonia Levels</option>
                            <option>Amylase Test</option>
                            <option>Balance Tests</option>
                            <option>Blood Alcohol Level</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md='4'>
                        <FormGroup>
                          <Label for='exampleSelect'>Medicine</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Select</option>
                            <option>Allergy Blood Test</option>
                            <option>ALT Blood Test</option>
                            <option>Ammonia Levels</option>
                            <option>Amylase Test</option>
                            <option>Balance Tests</option>
                            <option>Blood Alcohol Level</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md='4'>
                        <FormGroup>
                          <Label for='exampleSelect'>Medicine</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Select</option>
                            <option>Allergy Blood Test</option>
                            <option>ALT Blood Test</option>
                            <option>Ammonia Levels</option>
                            <option>Amylase Test</option>
                            <option>Balance Tests</option>
                            <option>Blood Alcohol Level</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md='3'>
                        <FormGroup>
                          <Label for='exampleSelect'>Medicine</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Select</option>
                            <option>Acetaminophen</option>
                            <option>Adderall</option>
                            <option>Cyclobenzaprine</option>
                            <option>Cymbalta</option>
                            <option>Doxycycline</option>
                            <option>Gabapentin</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md='4'>
                        <FormGroup>
                          <Label for='exampleSelect'>Medicine</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Select</option>
                            <option>Acetaminophen</option>
                            <option>Adderall</option>
                            <option>Cyclobenzaprine</option>
                            <option>Cymbalta</option>
                            <option>Doxycycline</option>
                            <option>Gabapentin</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md='4'>
                        <FormGroup>
                          <Label for='exampleSelect'>Medicine</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Select</option>
                            <option>Acetaminophen</option>
                            <option>Adderall</option>
                            <option>Cyclobenzaprine</option>
                            <option>Cymbalta</option>
                            <option>Doxycycline</option>
                            <option>Gabapentin</option>
                          </Input>
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
                          submit
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

export default PrescriptionContainer;
