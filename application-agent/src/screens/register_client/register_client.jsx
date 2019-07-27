import React, { useReducer } from 'react';

import { Typography, Button } from 'antd';
import { createEmptyAntValidationObj } from 'antd-fv';

import { Register as RegisterReducer } from '../../reducers';

import RegisterClientSteps from '../../components/register_client_steps';
import VariantControl from './variant_control';

import { updateField, submitStep } from '../../actions/register_user';

import './styles.css';

export default () => {
    const [state, dispatch] = useReducer(RegisterReducer, {
        ...RegisterReducer.INITIAL_STATE,
        error: {
            username: createEmptyAntValidationObj(),
            password: createEmptyAntValidationObj(),
            email: createEmptyAntValidationObj()
        },
        fields: { username: "", password: "", email: ""}
    })

    return (
        <main className="register_client">
            <div className="register_top">
                <Typography.Title level={1}>Join TruAuth</Typography.Title>
            </div>

            <div className="step_container">
                <RegisterClientSteps current={state.step} loading={state.loading}/>
            </div>

            <div className="client_form">
                <VariantControl loading={state.loading} error={state.error} step={state.step} onChange={(target) => updateField(dispatch, target)}/>
                <Button
                    onClick={() => submitStep(dispatch, state)}
                    type="primary"
                    style={{ marginTop: 30}}
                >
                    {
                        state.state === 0 ? "Next" :  "Create Account"
                    }
                </Button>
            </div>
        </main>
    )
}