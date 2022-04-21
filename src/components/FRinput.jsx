import React, {forwardRef} from 'react'

const FRinput = forwardRef((props, ref)=>{
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
})

export default FRinput