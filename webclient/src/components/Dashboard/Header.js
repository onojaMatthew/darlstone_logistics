import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import Auth from "../../helper/Auth";
import { LogoutOutlined } from "@ant-design/icons";
import { logout } from "../../store/actions/action_user";

const { Header } = Layout;

const DashboardHeader = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  }

  useEffect(() => {
    if (user.logoutSuccess === true) {
      Auth.deauthenticateUser();
      window.location.href = "/";
    }
  }, [ user ]);
  return (
    <Header className="site-layout-background" style={{ paddingRight: 15 }}>
      <div className="text-right" style={{
        color: "#fff"
      }}>
        <LogoutOutlined onClick={() => onLogout()} />
      </div>
    </Header>
  );
}

export default DashboardHeader;