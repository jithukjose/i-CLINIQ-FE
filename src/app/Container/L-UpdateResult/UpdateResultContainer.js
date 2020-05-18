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
  FormText,
} from 'reactstrap';

class UpdateResultContainer extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col md='11'>
              <Card className='card-user'>
                <CardHeader>
                  <CardTitle tag='h5'> Update Lab Result</CardTitle>
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
                          <Label for='exampleSelect'>Lab Test Status</Label>
                          <Input type='select' name='select' id='exampleSelect'>
                            <option>Pending</option>
                            <option>Processing</option>
                            <option>Completed</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup>
                      <Label for='exampleFile'>File</Label>
                      <Input type='file' name='file' id='exampleFile' />
                      <FormText color='muted'>
                        This is some placeholder block-level help text for the
                        above input. It's a bit lighter and easily wraps to a
                        new line.
                      </FormText>
                    </FormGroup>
                    <Row>
                      <FormGroup>
                        <Button>
                          <Label for='exampleFile'>Upload Result</Label>
                          <Input type='file' name='file' id='exampleFile' />
                        </Button>
                      </FormGroup>
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

export default UpdateResultContainer;
