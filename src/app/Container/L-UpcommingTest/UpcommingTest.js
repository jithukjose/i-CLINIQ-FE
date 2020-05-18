import React from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Row,
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  UncontrolledTooltip,
} from 'reactstrap';

class UpcommingTestContainer extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <div>
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
                        <th scope='col'>Patient </th>
                        <th scope='col'>Doctor</th>
                        <th scope='col'>Test</th>
                        <th scope='col'>Test Status</th>

                        <th scope='col' />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <Media>
                              <span className='mb-0 text-sm'>Tim</span>
                            </Media>
                          </Media>
                        </th>
                        <td>Renjith</td>
                        <td>Sugar test</td>
                        <td>Pending</td>

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

                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <Media>
                              <span className='mb-0 text-sm'>Tim</span>
                            </Media>
                          </Media>
                        </th>
                        <td>Renjith</td>
                        <td>Sugar test</td>
                        <td>Pending</td>

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

                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <Media>
                              <span className='mb-0 text-sm'>Tim</span>
                            </Media>
                          </Media>
                        </th>
                        <td>Renjith</td>
                        <td>Sugar test</td>
                        <td>Pending</td>

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

                      <tr>
                        <th scope='row'>
                          <Media className='align-items-center'>
                            <Media>
                              <span className='mb-0 text-sm'>Tim</span>
                            </Media>
                          </Media>
                        </th>
                        <td>Renjith</td>
                        <td>Sugar test</td>
                        <td>Pending</td>

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
                  <CardFooter className='py-4'>
                    <nav aria-label='...'>
                      <Pagination
                        className='pagination justify-content-end mb-0'
                        listClassName='justify-content-end mb-0'
                      >
                        <PaginationItem className='disabled'>
                          <PaginationLink
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                            tabIndex='-1'
                          >
                            <i className='fas fa-angle-left' />
                            <span className='sr-only'>Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className='active'>
                          <PaginationLink
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className='sr-only'>(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className='fas fa-angle-right' />
                            <span className='sr-only'>Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
export default UpcommingTestContainer;
