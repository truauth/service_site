import React, { useCallback} from 'react';

import { Input, Typography, Form } from 'antd';

export default ({ onChange, error }) => {
    const onFieldChange = useCallback(({ target }) => {
        onChange(target)
    }, [onChange]);

    return (
        <>
            <Typography.Title level={4} style={{ marginTop: 10 }}>Register Client</Typography.Title>

            <div className="input_group">
                <div className="input_container">
                    <Form.Item
                        validateStatus={error['clientName'].status}
                        help={error['clientName'].help}
                    >
                        <Typography.Text strong>Name</Typography.Text>
                        <Input id="name" onChange={onFieldChange} />
                        <div>
                            <Typography.Text style={{ fontSize: 10 }}>
                                Name of the client utilizing truauth
                                        </Typography.Text>
                        </div>
                    </Form.Item>
                </div>
                <div className="input_container">
                    <Form.Item
                        validateStatus={error['callbackURI'].status}
                        help={error['callbackURI'].help}
                    >
                        <Typography.Text strong>Callback Uri</Typography.Text>
                        <Input id="callbackURI" onChange={onFieldChange} />
                    </Form.Item>
                </div>
                <div className="input_container">
                    <Form.Item
                        validateStatus={error['redirectURI'].status}
                        help={error['redirectURI'].help}
                    >
                        <Typography.Text strong>Redirect URI</Typography.Text>
                        <Input id="redirectURI" onChange={onFieldChange} />
                    </Form.Item>
                </div>
            </div>
        </>
    )
}