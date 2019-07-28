import React, { useCallback } from 'react';

import { Input, Typography, Form } from 'antd';

const fieldDefault = { username: "", email: "", password: "" }

export default ({ fieldValues = fieldDefault, onChange, error = fieldDefault, loading }) => {
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
                    <Form.Item
                        validateStatus={error['username'].status}
                        help={error['username'].help}
                    >
                        <Typography.Text strong>Username</Typography.Text>
                        <Input value={fieldValues.username} id="username" onChange={onFieldChange} />
                    </Form.Item>
                </div>
                <div className="input_container">
                    <Form.Item
                        validateStatus={error['email'].status}
                        help={error['email'].help}
                    >
                        <Typography.Text strong>Email Address</Typography.Text>
                        <Input value={fieldValues.email} id="email" onChange={onFieldChange} />
                    </Form.Item>
                </div>
                <div className="input_container">
                    <Form.Item
                        validateStatus={error['password'].status}
                        help={error['password'].help}
                    >
                        <Typography.Text strong>Password</Typography.Text>
                        <Input.Password value={fieldValues.password} id="password" onChange={onFieldChange} />
                    </Form.Item>
                </div>
            </div>
        </>
    )
}