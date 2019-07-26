import React from 'react';

import { RegisterClient as RegisterClientForm } from '../../components/forms';

export default (props) => {
    switch(props.step) {
        case 0: 
            return (
                <RegisterClientForm {...props} />
            )
        default: {
            console.error(`Error: Variant Control: Invalid Step Value`)
            return null;
        }
    }
}