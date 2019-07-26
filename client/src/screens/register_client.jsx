import React from 'react';

import { Input, Typography } from 'antd';

export default () => {

    
    return (
        <>
            <Typography.Title level={1}>Join TruAuth</Typography.Title>

            Create your account
    
        <div className="input_group">
                <div className="password">
                    <Typography.Text strong>Username</Typography.Text>
                    <Input />
                </div>
                <div className="password">
                    <Typography.Text strong>Email Address</Typography.Text>
                    <Input />
                </div>
                <div className="password">
                    <Typography.Text strong>Password</Typography.Text>
                    <Input.Password />
                </div>
            </div>
        </>
    )
}