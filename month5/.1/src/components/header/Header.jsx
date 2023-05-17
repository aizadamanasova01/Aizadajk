import React from 'react'
import { Layout}  from 'antd'
const { Header: AntHeader } = Layout;
import { BsSearch } from ""

import logo from "../../assets/"

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const Header = () => {
  return (
    <Layout>
      <AntHeader style={headerStyle}>
    <div>
      <ul className='d-flex' style={{columnGap: "22px"}}>
       <li> </li>
       <li> </li>
       <li> </li>
      </ul>
    </div>
    </AntHeader>
    </Layout>
  )
}

export default Header