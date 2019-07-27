import React, { useCallback, useState } from 'react';

import { Input, Typography, Switch } from 'antd';

export default ({ onChange }) => {
    const onFieldChange = useCallback(({ target }) => {
        onChange(target)
    }, [onChange]);

    const [showGroup, setShowGroup] = useState(false);
    const toggleSwitch = () => {
        setShowGroup(!showGroup)
    }

    return (
        <>
            <Typography.Title level={4}>
                Choose Account Settings
            </Typography.Title>
            <div className="input_container">
                <Typography.Text strong style={{ marginRight: 10 }}>Developer Account</Typography.Text>
                <Switch onChange={toggleSwitch} />
                <div>
                    <Typography.Text style={{ fontSize: 10 }}>
                        Enable the developer account for integrating your applications with truauth, if you do not plan to integrate, do not select this option.
                        You can select this option later, if you choose to. 
                    </Typography.Text>
                </div>
            </div>
            {
                showGroup && (
                    <>
                        <Typography.Title level={4} style={{ marginTop: 10 }}>Register Client</Typography.Title>

                        <div className="input_group">
                            <div className="input_container">
                                <Typography.Text strong>Name</Typography.Text>
                                <Input id="name" onChange={onFieldChange} />
                                <div>
                                    <Typography.Text style={{ fontSize: 10 }}>
                                        Name of the client utilizing truauth
                                    </Typography.Text>
                                </div>
                            </div>
                            <div className="input_container">
                                <Typography.Text strong>Callback Uri</Typography.Text>
                                <Input id="callbackURI" onChange={onFieldChange} />
                            </div>
                            <div className="input_container">
                                <Typography.Text strong>Redirect URI</Typography.Text>
                                <Input id="redirectURI" onChange={onFieldChange} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}