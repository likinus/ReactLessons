import React from 'react';
import Proptypes from 'prop-types'
import ListItem from './ListItem'

const styles = {
    ul: {
        listStyle: 'none'
    }
}

function List(props) {
    return (
        <ul style={styles.ul}>
            { props.listFields.map((listField, index) => {
                return <ListItem listField={listField} key={listField.id} index={index} />
            }) }
        </ul>
    )
}

List.propTypes = {
    listFields: Proptypes.arrayOf(Proptypes.object).isRequired
}

export default List
