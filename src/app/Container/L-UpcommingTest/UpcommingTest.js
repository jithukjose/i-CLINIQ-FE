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
              Tests
            </Button>
          </div>
          <div>
            <Row>
              <div className='col'>
                <Card className='shadow'>
                  <CardHeader className='border-0'>
                    <h3 className='mb-0'>Upcomming Test</h3>
                  </CardHeader>
                  <Table className='align-items-center table-flush' responsive>
                    <thead className='thead-light'>
                      <tr>
                        <th scope='col'>Patient Name</th>
                        <th scope='col'>Doctor</th>
                        <th scope='col'>Test</th>
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
                          <Badge color='' className='badge-dot mr-3'>
                            <i className='bg-warning' />
                            pending
                          </Badge>
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
