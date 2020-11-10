import React, { useState } from 'react';
import Row from '../row/row';
import { CharactersList } from '../sw-components/sw-lists';
import CharacterPanel from '../sw-components/character-panel';
import { withRouter } from 'react-router-dom';

const CharactersPage = ({itemId, history}) => {
    const [page] = useState(1);

    return <Row
        left={<CharactersList itemId={page} onChoseItem={(itemId) => history.push(`/characters/${itemId}`)} />}
        right={<CharacterPanel itemId={itemId} />}
    />
}

export default withRouter(CharactersPage);