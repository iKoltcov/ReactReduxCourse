import React, { useEffect, useState } from 'react';

const withData = Wrapped => props => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        if(props.itemId !== null){
            props.getData(props.itemId)
                .then((result) => {
                    setData(result);
                });
        }
    })

    return <Wrapped {...props} data={data} />;
};

export default withData;