import React, { useState } from 'react';

import { Typography, Switch } from 'antd';

export default ({ onChange, error }) => {
    const [showGroup, setShowGroup] = useState(false);
    const toggleSwitch = () => {
        setShowGroup(!showGroup)

        onChange({ id: 'isDeveloper', value: !showGroup })
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
        </>
    )
}
