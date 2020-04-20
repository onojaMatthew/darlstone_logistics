import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import Auth from "../../helper/Auth";
import { localAuth } from "../../helper/authentcate";
import { LogoutOutlined } from "@ant-design/icons";
import { logout } from "../../store/actions/action_user";

const { Header } = Layout;

const DashboardHeader = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const username = localAuth().user && localAuth().user.fullname
  const onLogout = () => {
    dispatch(logout());
  }

  useEffect(() => {
    if (user.logoutSuccess === true) {
      Auth.deauthenticateUser();
      window.location.href = "/accountl";
    }
  }, [ user ]);
  return (
    <Header className="site-layout-background" style={{ paddingRight: 25 }}>
      <div><Link to="/" style={{
          color: "#fff"
        }}>Home</Link></div>
      <div className="text-right" style={{
        color: "#fff"
      }}>
        <span>{username}</span> <LogoutOutlined style={{ marginLeft: "15px" }} onClick={() => onLogout()} />
      </div>
    </Header>
  );
}

export default DashboardHeader;