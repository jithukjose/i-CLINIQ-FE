import React from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Row,
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip,
  Button,
} from 'reactstrap';

class PatientAppointmentContainer extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <div>
            {' '}
            <Button
              block
              color='primary'
              //   onClick={() => this.notify('tr')}
              style={{ width: '20%' }}
            >
              Create Appointment
            </Button>
          </div>
          <div>
            <Row>
              <div className='col'>
                <Card className='shadow'>
                  <CardHeader className='border-0'>
                    <h3 className='mb-0'>Appointments</h3>
                  </CardHeader>
                  <Table className='align-items-center table-flush' responsive>
                    <thead className='thead-light'>
                      <tr>
                        <th scope='col'>Patient Name</th>
                        <th scope='col'>Assigned To</th>
                        <th scope='col'>Created At</th>
                        <th scope='col'>Completed</th>

                        <th scope='col' />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <Media>
                              <span className='mb-0 text-sm'>
                                Argon Design System
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>$2,500 USD</td>
                        <td>
                          <Badge color='' className='badge-dot mr-4'>
                            <i className='bg-warning' />
                            pending
                          </Badge>
                        </td>
                        <td>75</td>

                        <td className='text-right'>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className='btn-icon-only text-light'
                              href='#pablo'
                              role='button'
                              size='sm'
                              color=''
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className='fas fa-ellipsis-v' />
                            </DropdownToggle>
                            <DropdownMenu className='dropdown-menu-arrow' right>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Prescription
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                More details
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Edit
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>

                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <a
                              className='avatar rounded-circle mr-3'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                // src={require('assets/img/theme/sketch.jpg')}
                              />
                            </a>
                            <Media>
                              <span className='mb-0 text-sm'>
                                Black Dashboard
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>$3,150 USD</td>
                        <td>
                          <Badge color='' className='badge-dot mr-4'>
                            <i className='bg-danger' />
                            delayed
                          </Badge>
                        </td>
                        <td>
                          <div className='avatar-group'>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip753056318'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-1-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip753056318'
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip441753266'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-2-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip441753266'
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip188462246'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-3-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip188462246'
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip621168444'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-4-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip621168444'
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>

                        <td className='text-right'>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className='btn-icon-only text-light'
                              href='#pablo'
                              role='button'
                              size='sm'
                              color=''
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className='fas fa-ellipsis-v' />
                            </DropdownToggle>
                            <DropdownMenu className='dropdown-menu-arrow' right>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>

                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <a
                              className='avatar rounded-circle mr-3'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                // src={require('assets/img/theme/react.jpg')}
                              />
                            </a>
                            <Media>
                              <span className='mb-0 text-sm'>
                                React Material Dashboard
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>$4,400 USD</td>
                        <td>
                          <Badge color='' className='badge-dot'>
                            <i className='bg-info' />
                            on schedule
                          </Badge>
                        </td>
                        <td>
                          <div className='avatar-group'>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip875258217'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-1-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip875258217'
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip834416663'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-2-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip834416663'
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip372449339'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-3-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip372449339'
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip108714769'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-4-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip108714769'
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>

                        <td className='text-right'>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className='btn-icon-only text-light'
                              href='#pablo'
                              role='button'
                              size='sm'
                              color=''
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className='fas fa-ellipsis-v' />
                            </DropdownToggle>
                            <DropdownMenu className='dropdown-menu-arrow' right>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>

                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <a
                              className='avatar rounded-circle mr-3'
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                // src={require('assets/img/theme/vue.jpg')}
                              />
                            </a>
                            <Media>
                              <span className='mb-0 text-sm'>
                                Vue Paper UI Kit PRO
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>$2,200 USD</td>
                        <td>
                          <Badge color='' className='badge-dot mr-4'>
                            <i className='bg-success' />
                            completed
                          </Badge>
                        </td>
                        <td>
                          <div className='avatar-group'>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip664029969'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-1-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip664029969'
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip806693074'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-2-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip806693074'
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip844096937'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-3-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip844096937'
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className='avatar avatar-sm'
                              href='#pablo'
                              id='tooltip757459971'
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt='...'
                                className='rounded-circle'
                                // src={require('assets/img/theme/team-4-800x800.jpg')}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target='tooltip757459971'
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>

                        <td className='text-right'>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className='btn-icon-only text-light'
                              href='#pablo'
                              role='button'
                              size='sm'
                              color=''
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className='fas fa-ellipsis-v' />
                            </DropdownToggle>
                            <DropdownMenu className='dropdown-menu-arrow' right>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href='#pablo'
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
export default PatientAppointmentContainer;