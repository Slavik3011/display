import React from 'react';

import Input from '../input/Input';

export default () => {


    return (
        <form>
            <Input type="text" name="name" placeholder="Username" />
            <Input type="password" name="password" placeholder="Password" />
            <button>log in</button>
        </form>
    )
}