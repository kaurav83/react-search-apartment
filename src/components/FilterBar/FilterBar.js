import React, { Component } from 'react';
// import FilterItem from './FilterItem';
// import { filterApartament } from '../../actions/appartamentActions';

class FilterBar extends Component {
    
    render() {

        return (
            <div>
                {/* {
                    CHECKBOXES.map(item => {
                        return (
                            <FilterItem
                                id={item.id}
                                value={selectedApartments}
                                key={item.id}
                                onClick={this.changeFilter}
                            />
                        )
                    })
                } */}

            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         selectedApartments: state.selectedApartments
//     }
// }

export default FilterBar;