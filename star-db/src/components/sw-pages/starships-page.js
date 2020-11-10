import React, { useState } from 'react';
import Row from '../row/row';
import { StarshipsList } from '../sw-components/sw-lists';
import StarshipPanel from '../sw-components/starship-panel';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({itemId, history}) =>  {
    const [page] = useState(1);

    return <Row
        left={<StarshipsList itemId={page} onChoseItem={(itemId) => history.push(`/starships/${itemId}`)} />}
        right={<StarshipPanel itemId={itemId} />}
    />
}

export default withRouter(StarshipsPage);