import React from 'react';

import { Menu, Icon } from 'antd';

export default (Component) => {
    return ({...props}) => (
        <div className="dashboard" style={{ margin: '15px 10%' }}>
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item>
                    <span>
                        <Icon type="setting" />
                        <span>Profile</span>
                    </span>
                </Menu.Item>
                <Menu.SubMenu
                    title={
                        <span>
                            <Icon type="setting" />
                            <span>Developer</span>
                        </span>
                    }>
                    <Menu.Item>
                        <span>
                            <Icon type="" />
                            <span>Clients</span>
                        </span>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item>
                    <span>
                        <Icon type="setting" />
                        <span>Account Settings</span>
                    </span>
                </Menu.Item>

            </Menu>

            <Component {...props}/>
        </div>
    )
}