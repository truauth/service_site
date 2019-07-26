import React, { useCallback } from 'react';

import { Input, Typography } from 'antd';

export default ({ onChange }) => {
    const onFieldChange = useCallback(({ target }) => {
        onChange(target)
    }, [onChange]);

    return (
        <>
            <Typography.Title level={4}>
                Create your account
            </Typography.Title>
    
            <div className="input_group">
                <div className="input_container">
                    <Typography.Text strong>Username</Typography.Text>
                    <Input id="username" onChange={onFieldChange}/>
                </div>
                <div className="input_container">
                    <Typography.Text strong>Email Address</Typography.Text>
                    <Input id="email" onChange={onFieldChange}/>
                </div>
                <div className="input_container">
                    <Typography.Text strong>Password</Typography.Text>
                    <Input.Password id="password" onChange={onFieldChange}/>
                </div>
            </div>
        </>
    )
}