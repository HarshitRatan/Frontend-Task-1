import React from "react";
import { Tabs } from "antd";
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
              index === 0 || index === 2 || index === 3 || index === 5,
            children: <Home />,
          };
        })}
      />
    </div>
  );
};

export default Layout;
