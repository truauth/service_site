import { createAntValidationObj, createEmptyAntValidationObj } from 'antd-fv';
import { isEqual } from 'lodash';

import * as BaseRegister from './base_register';

import * as UserValidation from '../helpers/validate_user';

export const updateField = (...args) => BaseRegister.updateField(...args)

export const submitStep = async (dispatch, state) => {
    switch (state.step) {
        case 0: {
            await BaseRegister.submitStep(dispatch, () => validateUserCreds(state))
            break;
        }
        case 1: {
            const secondaryOperation = async () => console.log('api call', state.fields)
            // TODO: when this resolves, it should popuplate the finish state object (need to create).

            await BaseRegister.submitStep(dispatch, () => validateAccountDetails(state), secondaryOperation)

            break;
        }
        default: {
            break;
        }
    }
}

export const validateUserCreds = async ({ error, fields: { username, email, password } }) => {
    const empty = createEmptyAntValidationObj();

    const updatedError = {
        ...error,
        password: !UserValidation.validatePassword(password) ? createAntValidationObj('error', 'Invalid Password, the password that you choose should be greater 8 charactes, less than 16, contain at least 1 symbol and number.') : empty,
        email: !UserValidation.validateEmail(email) ? createAntValidationObj('error', 'Should be a valid email') : empty,
        username: !UserValidation.validateUsername(username) ? createAntValidationObj('error', 'This username is invalid or already taken, please try another.') : empty,
    }

    return {
        updatedError,
        valid: Object.values(error).reduce((prev, current) => {
            const isPrevValid = prev === true || isEqual(prev, empty)

            return isEqual(current, empty) && isPrevValid
        })
    };
}

export const validateAccountDetails = async (state) => {
    return { // TODO:
        valid: true,
        error: { ...state.error },
    }
}