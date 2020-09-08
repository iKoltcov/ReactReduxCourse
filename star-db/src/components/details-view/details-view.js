import React from 'react'

import './details-view.css';

const Detail = ( {item, field, name} ) => {
    return (
        <tr>
            <th>{name}</th>
            <td>{item[field]}</td>
        </tr>
    );
};

const DetailsView = ({ item, children }) => {
    const content = React.Children.map(
        children,
        (child) => {
            return React.cloneElement(child, { item });
        });

    return (
        <React.Fragment>
            <div className='item-details'>
                <img src={item.imageUrl} className='details-image' alt={item.name}/>
                <h4>{item.name}</h4>
                <table className='table'>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export {
    Detail,
}
export default DetailsView;