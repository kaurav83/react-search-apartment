import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addRoomFilter, removeRoomFilter } from '../../actions/appartamentActions';

class FilterBar extends Component {

    handleRoomFilter(e) {
        let totalRoomType = e.target.value;
        if (e.target.checked) {
            this.props.addRoomFilter(totalRoomType);
        } else {
            this.props.removeRoomFilter(totalRoomType);
        }
    }

    render() {
        
        return (
            <div>
                <h3>Filter Options</h3>
                <div className="filter">
                    <h4>Price</h4>
                    {/* <input type="checkbox" value="all" onClick={(e) => this.handleRoomFilter(e)} />1 комната<br /> */}
                    <input type="checkbox" value="1" onClick={(e) => this.handleRoomFilter(e)} />1 комната<br />
                    <input type="checkbox" value="2" onClick={(e) => this.handleRoomFilter(e)} />2 комнаты<br />
                    <input type="checkbox" value="3" onClick={(e) => this.handleRoomFilter(e)} />3 комнаты<br />
                </div>
            </div>
        )
    }
}

export default connect(null, {addRoomFilter, removeRoomFilter})(FilterBar);