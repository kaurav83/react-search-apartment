import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAppartament} from '../actions/appartamentActions';

class Currency extends Component {
    componentDidMount() {
        this.props.getAppartament();
    }
  render() {
      const {appa} = this.props;
      console.log(appa.stuff[0], 'stuff');
    
    return (
      <div>
        
            {
                // appa ? appa.stuff[1].id : null
            }
            {/* {
                appa ? appa.stuff.map(item => {
                    return (
                        <div key={item.id}>{item.id}</div>
                    )
                }) : null
            } */}
        
      </div>
    )
  }
}

Currency.propTypes = {
    getAppartament: PropTypes.func.isRequired,
    appa: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        appa: state.appartament
    }
}

export default connect(mapStateToProps, {getAppartament})(Currency);