import React, { useReducer, useCallback } from 'react';

import { Typography, Button } from 'antd';
import { createEmptyAntValidationObj } from 'antd-fv';

import { Register as RegisterReducer } from '../../reducers';

import RegisterClientSteps from '../../components/register_client_steps';
import VariantControl from './variant_control';

import { updateField, submitStep } from '../../actions/register_user';

import './styles.css';

export default ({ history }) => {
    const lsData = JSON.parse(localStorage.getItem('_register-user'));

    const username = typeof lsData !== 'undefined' ? lsData.username : "";
    const password = typeof lsData !== 'undefined' ? lsData.password : "";
    const email = typeof lsData !== 'undefined' ? lsData.email : "";

    const initialState = {
        ...RegisterReducer.INITIAL_STATE,
        error: {
            username: createEmptyAntValidationObj(),
            password: createEmptyAntValidationObj(),
            email: createEmptyAntValidationObj(),
        },
        fields: { username, password, email, isDeveloper: false }
    };

    const [state, dispatch] = useReducer(RegisterReducer, initialState);

    const handleClick = useCallback(() => {
        if (state.step === 2) {
            history.push('/')
        } else {
            submitStep(dispatch, state)
        }
    }, [state, history])

    return (
        <main className="register_client">
            <div className="register_top">
                <Typography.Title level={1}>Join TruAuth</Typography.Title>
            </div>

            <div className="step_container">
                <RegisterClientSteps current={state.step} loading={state.loading} />
            </div>

            <div className="client_form">
                <VariantControl
                    fieldValues={state.fields}
                    loading={state.loading}
                    error={state.error}
                    step={state.step}
                    onChange={(target) => updateField(dispatch, target)}
                />
                <Button
                    onClick={handleClick}
                    type="primary"
                    style={{ marginTop: 30 }}
                >
                    {
                        state.step !== 2 ? "Next" : "Finish"
                    }
                </Button>
            </div>
        </main>
    )
}