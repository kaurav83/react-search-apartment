import React, { Component } from 'react';
import FilterItem from './FilterItem';
import { connect } from 'react-redux';
import { filterApartament } from '../../actions/appartamentActions';

const CHECKBOXES = [
    { id: "all" },
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

class FilterBar extends Component {
    
    changeFilter = (selectedApartments) => {
        this.props.filterApartament(selectedApartments);
    }
    render() {
        const { selectedApartments } = this.props;

        return (
            <div>
                {
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
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedApartments: state.selectedApartments
    }
}

export default connect(mapStateToProps, { filterApartament })(FilterBar);