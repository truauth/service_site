import React from 'react';

import { AccountSettings, RegisterUser } from '../../components/forms';


export default (props) => {
    switch(props.step) {
        case 0:
            return (
                <RegisterUser {...props} />
               
            )
        case 1: 
            return (
                <AccountSettings {...props} />
            )
        case 2: 
            return (
                "review"
            )
        default: {
            console.error(`Error: Variant Control: Invalid Step Value`)
            return null;
        }
    }
}