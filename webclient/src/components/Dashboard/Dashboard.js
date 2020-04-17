import React, { Component } from "react";
import { Route, Switch, Link  } from "react-router-dom";
import { Layout, Breadcrumb } from 'antd';

import SideBar from "./Sidebar";
import Shipments from "./Shipments";
import ShipmentDetails from "./ShipmentDetails";

const { Header, Content, Footer } = Layout;

export default class Dashboard extends Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { match } = this.props;
    
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar onCollapse={this.onCollapse} collapsed={collapsed} />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>Dashboard header</Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 4, minHeight: 360 }}>
              <Switch>
                <Route exact path={`${match.url}`} render={(props) => <Shipments {...props} />} />
                <Route  path={`${match.url}/:shipmentId`} render={(props) => <ShipmentDetails {...props} />} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}