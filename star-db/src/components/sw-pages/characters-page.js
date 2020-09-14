import React, { useState } from 'react'
import Row from '../row/row';
import { CharactersList } from '../sw-components/sw-lists';
import CharacterPanel from '../sw-components/character-panel';

const CharactersPage = () => {
    const [ item, setItem ] = useState(null);
    const [ page ] = useState(1);

    return <Row
        left={<CharactersList itemId={page} onChoseItem={setItem} />}
        right={<CharacterPanel itemId={item} />} />
}

export default CharactersPage;