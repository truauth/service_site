import React from 'react';

import { Steps, Icon } from 'antd';

export default ({ current, loading }) => (
    <Steps current={current}>
        <Steps.Step title="Create User" description="Create a basic user account"  icon={loading && current === 0 ? <Icon type="loading" /> : null}/>
        <Steps.Step title="Choose Account Type"  icon={loading && current === 1? <Icon type="loading" /> : null}/>
        <Steps.Step title="Finish" icon={loading && current === 2 ? <Icon type="loading" /> : null}/>
    </Steps>
)