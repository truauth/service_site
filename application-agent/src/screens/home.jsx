import React from 'react';

import { Link } from 'react-router-dom';

export default () => (
    <>
        <div>
            <Link to="register_client">Register Client</Link>
        </div>
        <div>
            <Link to="register_user">Register User</Link>
        </div>
    </>
)