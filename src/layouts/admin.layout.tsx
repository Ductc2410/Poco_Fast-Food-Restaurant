import { useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";

import { AppDispatch } from "../redux/store";
import "./admin.style.scss";
import { logout } from "../redux/slice/auth.slide";

const { Content, Sider, Header } = Layout;

const items = [
  {
    label: "Product",
    key: "product",
    children: [
      { label: <Link to="/admin/product">List</Link>, key: "product-list" },
      { label: <Link to="/admin/product/create">Create</Link>, key: "product-create" }
    ]
  },
  {
    label: <Link to="/admin/category">Category</Link>,
    key: "category"
  },
  {
    label: <Link to="/admin/order">Order</Link>,
    key: "order"
  },
  {
    label: <Link to="/shop">Back to Shop</Link>,
    key: "Shop"
  }
];

export default function AdminLayout() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header className="site-layout-background header-admin">
          <Button type="primary" onClick={() => dispatch(logout())}>
            Log out
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px" }}>
          <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
