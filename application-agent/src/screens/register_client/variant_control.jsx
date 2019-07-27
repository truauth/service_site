import React from 'react';

import { RegisterClient, RegisterUser } from '../../components/forms';


export default (props) => {
    switch(props.step) {
        case 0:
            return (
                <RegisterUser {...props} />
               
            )
        case 1: 
            return (
                <RegisterClient {...props} />
            )
        default: {
            console.error(`Error: Variant Control: Invalid Step Value`)
            return null;
        }
    }
}