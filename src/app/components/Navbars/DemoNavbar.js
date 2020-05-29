import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from 'reactstrap';

import routes from '../../routes';
// import FixedPlugin from '../FixedPlugin/FixedPlugin';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      profileDownOpen: false,
      color: 'transparent',
      classes: 'dropdown ',
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.classes === 'dropdown show') {
      this.setState({ classes: 'dropdown ' });
    } else {
      this.setState({ classes: 'dropdown show' });
    }
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: 'transparent',
      });
    } else {
      this.setState({
        color: 'dark',
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  profileDropDown(e) {
    this.setState({
      profileDownOpen: !this.state.profileDownOpen,
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  getBrand() {
    let brandName = 'Default Brand';
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  }
  openSidebar() {
    document.documentElement.classList.toggle('nav-open');
    this.sidebarToggle.current.classList.toggle('toggled');
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: 'dark',
      });
    } else {
      this.setState({
        color: 'transparent',
      });
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
      this.sidebarToggle.current.classList.toggle('toggled');
    }
  }
  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf('full-screen-maps') !== -1
            ? 'dark'
            : this.state.color
        }
        expand='lg'
        className={
          this.props.location.pathname.indexOf('full-screen-maps') !== -1
            ? 'navbar-absolute fixed-top'
            : 'navbar-absolute fixed-top ' +
              (this.state.color === 'transparent' ? 'navbar-transparent ' : '')
        }
      >
        <Container fluid>
          <div className='navbar-wrapper'>
            <div className='navbar-toggle'>
              <button
                type='button'
                ref={this.sidebarToggle}
                className='navbar-toggler'
                onClick={() => this.openSidebar()}
              >
                <span className='navbar-toggler-bar bar1' />
                <span className='navbar-toggler-bar bar2' />
                <span className='navbar-toggler-bar bar3' />
              </button>
            </div>
            <NavbarBrand href='/'>{this.getBrand()}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className='justify-content-end'
          >
            <form>
              <InputGroup className='no-border'>
                <Input placeholder='Search...' />
                <InputGroupAddon addonType='append'>
                  <InputGroupText>
                    <i className='nc-icon nc-zoom-split' />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form>
            <Nav navbar>
              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={(e) => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  <i className='nc-icon nc-bell-55' />
                  <p>
                    <span className='d-lg-none d-md-block'>Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag='a'>Action</DropdownItem>
                  <DropdownItem tag='a'>Another Action</DropdownItem>
                  <DropdownItem tag='a'>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <Link to='#pablo' className='nav-link btn-rotate'>
                  <i
                    className='nc-icon nc-settings-gear-65'
                    onClick={this.handleClick}
                  />

                  <div className='fixed-plugin'>
                    <div className={this.state.classes}>
                      <ul className='dropdown-menu show'>
                        <li className='header-title'>SIDEBAR BACKGROUND</li>
                        <li className='adjustments-line'>
                          <div className='badge-colors text-center'>
                            <span
                              className={
                                this.props.bgColor === 'black'
                                  ? 'badge filter badge-dark active'
                                  : 'badge filter badge-dark'
                              }
                              data-color='black'
                              onClick={() => {
                                this.props.handleBgClick('black');
                              }}
                            />
                            <span
                              className={
                                this.props.bgColor === 'white'
                                  ? 'badge filter badge-light active'
                                  : 'badge filter badge-light'
                              }
                              data-color='white'
                              onClick={() => {
                                this.props.handleBgClick('white');
                              }}
                            />
                          </div>
                        </li>
                        <li className='header-title'>SIDEBAR ACTIVE COLOR</li>
                        <li className='adjustments-line'>
                          <div className='badge-colors text-center'>
                            <span
                              className={
                                this.props.activeColor === 'primary'
                                  ? 'badge filter badge-primary active'
                                  : 'badge filter badge-primary'
                              }
                              data-color='primary'
                              onClick={() => {
                                this.props.handleActiveClick('primary');
                              }}
                            />
                            <span
                              className={
                                this.props.activeColor === 'info'
                                  ? 'badge filter badge-info active'
                                  : 'badge filter badge-info'
                              }
                              data-color='info'
                              onClick={() => {
                                this.props.handleActiveClick('info');
                              }}
                            />
                            <span
                              className={
                                this.props.activeColor === 'success'
                                  ? 'badge filter badge-success active'
                                  : 'badge filter badge-success'
                              }
                              data-color='success'
                              onClick={() => {
                                this.props.handleActiveClick('success');
                              }}
                            />
                            <span
                              className={
                                this.props.activeColor === 'warning'
                                  ? 'badge filter badge-warning active'
                                  : 'badge filter badge-warning'
                              }
                              data-color='warning'
                              onClick={() => {
                                this.props.handleActiveClick('warning');
                              }}
                            />
                            <span
                              className={
                                this.props.activeColor === 'danger'
                                  ? 'badge filter badge-danger active'
                                  : 'badge filter badge-danger'
                              }
                              data-color='danger'
                              onClick={() => {
                                this.props.handleActiveClick('danger');
                              }}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <span className='d-lg-none d-md-block'>Account</span>
                </Link>
              </NavItem>

              <Dropdown
                nav
                isOpen={this.state.profileDownOpen}
                toggle={(e) => this.profileDropDown(e)}
              >
                <DropdownToggle caret nav>
                  <i className='nc-icon nc-single-02' />
                  <p>
                    <span className='d-lg-none d-md-block'>Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag='a'>Profile</DropdownItem>
                  <DropdownItem tag='a'>Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
