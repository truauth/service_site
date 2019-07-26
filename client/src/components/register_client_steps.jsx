import React from 'react';

import { Steps } from 'antd';

export default ({ current, loading }) => (
    <Steps current={current}>
        <Steps.Step title="Create User" description="Create a basic user account" />
        <Steps.Step title="Choose Account Type" />
        <Steps.Step title="Finish" />
    </Steps>
)