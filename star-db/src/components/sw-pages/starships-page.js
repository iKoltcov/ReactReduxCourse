import React, { useState } from 'react';
import Row from '../row/row';
import { StarshipsList } from '../sw-components/sw-lists';
import StarshipPanel from '../sw-components/starship-panel';

const StarshipsPage = () =>  {
    const [ item, setItem ] = useState(null);
    const [ page ] = useState(1);

    return <Row
        left={<StarshipsList itemId={page} onChoseItem={setItem} />}
        right={<StarshipPanel itemId={item} />} />
}

export default StarshipsPage;