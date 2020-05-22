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
  Progress,
  Button,
} from 'reactstrap';

class DoctorContainer extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <div>
            <Button
              block
              color='primary'
              // onClick={() => this.notify('tr')}
              style={{ width: '20%' }}
            >
              Add Doctor
            </Button>
          </div>
          <div>
            <Row>
              <div className='col'>
                <Card className='shadow'>
                  <CardHeader className='border-0'>
                    <h3 className='mb-0'>Doctors</h3>
                  </CardHeader>
                  <Table className='align-items-center table-flush' responsive>
                    <thead className='thead-light'>
                      <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Appointments</th>
                        <th scope='col'>Pending</th>
                        <th scope='col'>Completed</th>
                        <th scope='col'>Completion</th>
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
                        <td>
                          <div className='d-flex align-items-center'>
                            <span className='mr-2'>60%</span>
                            <div>
                              <Progress
                                max='100'
                                value='60'
                                barClassName='bg-danger'
                              />
                            </div>
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
export default DoctorContainer;
