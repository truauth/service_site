import React, { useCallback, useState } from 'react';

import { Col, Row, Card, Typography, Button } from 'antd';
import { RegisterUser } from '../components/forms';

export default ({ history }) => {
    const [fields, setFields] = useState();
    const onFormChange = useCallback(({ id, value }) => {
        setFields({
            ...fields,
            [id]: value,
        })
    }, [fields]);

    const handleSubmit = useCallback(() => {
        localStorage.setItem('_register-user', JSON.stringify(fields))

        history.push('/register/user')
    }, [fields, history]);

    return (
        <Row style={{ padding: 30, margin: '0 20% 0 15%' }}>
            <Col span={10} push={14}>
                <Card>
                    <RegisterUser fieldValues={fields} onChange={onFormChange} />
                    <Button onClick={handleSubmit} style={{ width: '100%' }} type="primary"> Create Account </Button>
                </Card>
            </Col>
            <Col span={14} pull={10}>
                <div style={{ textAlign: 'center', padding: '0 20px' }}>
                    <Typography.Title level={2}>
                        TruAuth
                </Typography.Title>
                    <Typography.Title level={4}>
                        Sign up for TruAuth, an openID compliant OAuth 2.0 authentication service.
            </Typography.Title>
                </div>
            </Col>
        </Row>
    )
}