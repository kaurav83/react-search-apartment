import React from 'react';

const FilterItem = (props) => {
    return (
        <div>
            <input 
                type="checkbox" 
                id={props.id} 
                value={props.id}
                onClick={(e) => props.onClick(e.target.value) }
            />
        </div>
    );
};

export default FilterItem;