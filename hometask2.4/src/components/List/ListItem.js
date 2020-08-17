import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';

const styles ={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '15px'
    }
}


function ListItem({ listField, index }) {
    const { removeList } = useContext(Context)
    return (
    <li style={styles.li}>
        <strong>{ index + 1}</strong>
        {listField.money}, {listField.description}
        <button className='delete-button' onClick={() => removeList(listField.id)}>&times;</button>
        </li>
    )
}

ListItem.propTypes = {
    listField: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default ListItem