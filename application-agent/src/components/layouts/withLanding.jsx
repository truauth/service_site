import React from 'react';

import { Layout, Menu, Icon } from 'antd';

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
                    <Icon type="user" onClick={() => props.history.push('/login')} style={{ float: 'right', marginTop: 20 }} />
                </Menu>
            </Layout.Header>
            <Component {...props} />
        </Layout>
    )
}