import React, { Component } from 'react';
import {
  Menu,
  Sidebar,
  Button,
  Icon,
  Input,
  Breadcrumb
} from 'semantic-ui-react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'editorials',
      visible: false
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleTitleClick = () => this.setState({ visible: !this.state.visible });

  buttonHtml = () => {
    const { visible } = this.state;
    if(!visible) {
      return(
        <Button onClick={this.handleTitleClick} className='logo logo__small'>W</Button>
      )
    }
    return (
      <Button onClick={this.handleTitleClick} className='logo logo__big'>Wunder</Button>
    )
  }

  navigationHtml = () => {
    const { activeItem, visible } = this.state;
    if (!visible) {
      return (
        <Sidebar
          className="sideBar"
          animation="push"
          visible={true}
          direction='left'
          width='very thin'>
          <Menu icon vertical>
            <Menu.Item
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}>
              <Icon name="search"></Icon>
            </Menu.Item>

            <Menu.Item
              name='schedule'
              active={activeItem === 'schedule'}
              onClick={this.handleItemClick}>
              <Icon name="calendar alternate outline"></Icon>
            </Menu.Item>

            <Menu.Item
              name='routes'
              active={activeItem === 'routes'}
              onClick={this.handleItemClick}>
              <Icon name="map"></Icon>
            </Menu.Item>

            <Menu.Item
              name='users'
              active={activeItem === 'users'}
              onClick={this.handleItemClick}>
              <Icon name="users"></Icon>
            </Menu.Item>

            <Menu.Item
              name='bus'
              active={activeItem === 'bus'}
              onClick={this.handleItemClick}>
              <Icon name="bus"></Icon>
            </Menu.Item>
          </Menu>

        </Sidebar>
      );
    }
    return (
      <Sidebar
        animation="push"
        visible={visible}
        direction='left'>
        <Menu vertical>
          <Menu.Item
            name='search'
            active={activeItem === 'search'}
            onClick={this.handleItemClick}>
            <Input icon='search' placeholder='Search' />
          </Menu.Item>

          <Menu.Item
            name='schedule'
            active={activeItem === 'schedule'}
            onClick={this.handleItemClick}>
            <Icon name="calendar alternate outline"></Icon> Schedule
              </Menu.Item>

          <Menu.Item
            name='routes'
            active={activeItem === 'routes'}
            onClick={this.handleItemClick}>
            <Icon name="map"></Icon> Routes
              </Menu.Item>

          <Menu.Item
            name='users'
            active={activeItem === 'users'}
            onClick={this.handleItemClick}>
            <Icon name="users"></Icon> Users
              </Menu.Item>

          <Menu.Item
            name='bus'
            active={activeItem === 'bus'}
            onClick={this.handleItemClick}>
            <Icon name="bus"></Icon> Fleet
              </Menu.Item>
        </Menu>
      </Sidebar>
    );
  }

  render() {
    return (
      <nav>
        <div className='topNavigation'>
          {this.buttonHtml()}
        </div>
        <Sidebar.Pushable>
          {this.navigationHtml()}
          <Sidebar.Pusher>
            <div className='topNavigation__breadcrumb'>
              <Breadcrumb>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section link>Store</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
              </Breadcrumb>
              {this.props.children}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </nav>
    );
  }
}

export default Navbar;