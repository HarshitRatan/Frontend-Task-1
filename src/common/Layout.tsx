import React from "react";
import { Avatar, Tabs } from "antd";
import Home from "../pages/Home/Home";
import { HomeOutlined, MenuOutlined, ProfileOutlined } from "@ant-design/icons";

const Layout: React.FC = () => {
  const iconsArray = [
    <></>,
    <MenuOutlined style={{ fontSize: "1.5rem" }} />,
    <></>,
    <></>,
    <HomeOutlined style={{ fontSize: "1.5rem" }} />,
    <></>,
    <ProfileOutlined style={{ fontSize: "1.5rem" }} />,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
    <Avatar
      style={{ backgroundColor: "green", verticalAlign: "middle" }}
      size="large"
    >
      NS
    </Avatar>,
    <></>,
    <></>,
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="4"
        tabPosition="left"
        items={iconsArray.map((i, index) => {
          const id = String(index);
          return {
            label: i,
            key: id,
            disabled:
              index === 0 ||
              index === 2 ||
              index === 3 ||
              index === 5 ||
              index === 7 ||
              index === 8 ||
              index === 9 ||
              index === 10 ||
              index === 11 ||
              index === 12 ||
              index === 13 ||
              index === 14 ||
              index === 15 ||
              index === 16 ||
              index === 17 ||
              index === 18 ||
              index === 20 ||
              index === 21,
            children: <Home />,
          };
        })}
      />
    </div>
  );
};

export default Layout;
