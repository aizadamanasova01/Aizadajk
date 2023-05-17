import React from 'react'
import { Layout } from "antd "
const { Header: AntHeader} = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };

const Header = () => {
  return  <Layout>
    <AntHeader style={headerStyle}>HEADER</AntHeader>
  </Layout>

}

export default Header