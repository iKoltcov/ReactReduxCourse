import React, { useEffect, useState, useCallback } from 'react';

const withData = Wrapped => props => {
    const { itemId } = props;

    const getData = useCallback(props.getData, [ itemId, props.getData ]);
    const [ data, setData ] = useState(null);

    useEffect(() => {
        if(itemId !== null && itemId !== undefined) {
            getData(itemId)
                .then((result) => {
                    setData(result);
                });
        }
    }, [ itemId, getData ])

    return <Wrapped {...props} data={data} />;
};

export default withData;