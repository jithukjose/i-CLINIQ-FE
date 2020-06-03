import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
class SectionLogin extends React.Component {
  render() {
    return (
      <>
        <div
          className='wrapper'
          style={{
            backgroundImage: 'url(' + require('app/assets/img/j.jpg') + ')',
          }}
        >
          <Container>
            <Row>
              <Col
                className='mx-auto'
                lg='4'
                md='6'
                style={{ paddingTop: '60px' }}
              >
                <Card className='card-register' style={{ padding: '15px' }}>
                  <h3 className='title mx-auto'>Welcome</h3>
                  <div className='social-line text-center'>
                    <Button
                      className='btn-neutral btn-just-icon mt-0'
                      color='facebook'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className='fab fa-facebook fa-3x'
                        style={{ color: '#3b5998' }}
                      />
                    </Button>
                    <Button
                      className='btn-neutral btn-just-icon mt-0 ml-1'
                      color='google'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className='fab fa-google-plus fa-3x'
                        style={{ color: '#db4a39' }}
                      />
                    </Button>
                    <Button
                      className='btn-neutral btn-just-icon mt-0 ml-1'
                      color='twitter'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className='fab fa-twitter fa-3x'
                        style={{ color: '#00acee' }}
                      />
                    </Button>
                  </div>
                  <Form className='register-form'>
                    <label>Email</label>
                    <InputGroup className='form-group-no-border'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='nc-icon nc-email-85' />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder='Email' type='email' />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className='form-group-no-border'>
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='nc-icon nc-key-25' />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder='Password' type='password' />
                    </InputGroup>
                    <Button
                      block
                      className='btn-round'
                      color='warning'
                      type='button'
                    >
                      Register
                    </Button>
                  </Form>
                  <div className='forgot'>
                    <Button
                      className='btn-link'
                      color='secondary'
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot password?
                    </Button>
                  </div>
                </Card>
                <div className='col text-center'>
                  {/* <Button
                    className='btn-round'
                    outline
                    color='neutral'
                    href='/register-page'
                    size='lg'
                    target='_blank'
                  >
                    View Register Page
                  </Button> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
export default SectionLogin;
