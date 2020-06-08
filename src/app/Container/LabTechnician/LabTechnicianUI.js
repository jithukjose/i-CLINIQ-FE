import React from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Row,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Button,
  Badge,
} from 'reactstrap';

const labTechnicianList = ({
  labTechnicianAppointmentList,
  onDetailClick,
  onDeleteClick,
}) => {
  let count,
    completeCount,
    pentingCount = 0;
  const renderDoctorList =
    labTechnicianAppointmentList &&
    labTechnicianAppointmentList.records &&
    labTechnicianAppointmentList.records.map((list) => (
      <React.Fragment key={list.id}>
        <tr>
          <th scope='row'>
            <Media className='align-items-center'>
              <Media>
                <span className='mb-0 text-sm'>{list.firstName}</span>
              </Media>
            </Media>
          </th>
          <td>{list.user_labTestcase.length}</td>
          <td>
            <Badge color='' className='badge-dot mr-4'>
              <i className='bg-warning' />
              {list.user_labTestcase.length === 0
                ? (count = 0)
                : list &&
                  list.user_labTestcase.map((appointmentList) =>
                    appointmentList.status === 'pending'
                      ? (pentingCount = pentingCount + 1)
                      : appointmentList.status === 'completed'
                      ? (completeCount = completeCount + 1)
                      : null
                  )}
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
                <DropdownItem onClick={(e) => onDetailClick(e, list.id)}>
                  More details
                </DropdownItem>
                <DropdownItem onClick={(e) => e.preventDefault()}>
                  Edit
                </DropdownItem>
                <DropdownItem onClick={(e) => onDeleteClick(e, list.id)}>
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </React.Fragment>
    ));
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
            Add Lab Technician
          </Button>
        </div>
        <div>
          <Row>
            <div className='col'>
              <Card className='shadow'>
                <CardHeader className='border-0'>
                  <h3 className='mb-0'>Lab Technician</h3>
                </CardHeader>
                <Table className='align-items-center table-flush' responsive>
                  <tbody></tbody>
                  <thead className='thead-light'>
                    <tr>
                      <th scope='col'>Name</th>
                      <th scope='col'>Appointments</th>
                      <th scope='col'>Pending</th>

                      <th scope='col' />
                    </tr>
                  </thead>
                  <tbody>{renderDoctorList}</tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};
export default labTechnicianList;