import React from 'react';

import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

const RESPONSE_TYPE = "code"
const CLIENT_ID = "tru_auth_service_site"
const REDIRECT_URI = "http://localhost:3000/loginCallback"
const SCOPE = ['openid']
const scopeURIFragment = SCOPE.join(',')
const STATE = "service_site";

export default (Component) => {
    return (...props) => (
        <Layout style={{ height: '100vh' }}>
            <Layout.Header style={{ zIndex: 1, width: '100%' }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Icon type="user" onClick={handleLoginBtn} style={{ float: 'right', marginTop: 20 }} />
                </Menu>
            </Layout.Header>
            <Component {...props} />
        </Layout>
    )
}

function handleLoginBtn() {
    const win = window.open(
          `http://localhost:4820/auth?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopeURIFragment}&state=${STATE}`,
          "_blank",
          "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
        )
      
    win.focus()
}