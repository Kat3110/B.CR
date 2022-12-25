import * as React from 'react';
import './style.css'


function Checkbox() {

    return (
        <div>
            <input type="checkbox" id="cb1"/> <label htmlFor="cb1">Show Only My Templates</label>
        </div>
    );
}

export default Checkbox;
