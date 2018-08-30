// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {getAppartament, selectCurrency} from '../actions/appartamentActions';
// import PriceList from './PriceList';
// import SelectBox from './SelectBox';

// const CURRENCY = [
//     "UAH",
//     "USD",
//     "EUR"
// ];

// class Price extends Component {
//     componentDidMount() {
//         this.props.getAppartament();
//     }

//     componentWillReceiveProps(nextProps) {
        
//         if (this.props.currency != nextProps.currency) {
//             this.props.getAppartament()
//         }
//     }

//     handleCurrencyChange = currency => {
//         this.props.selectCurrency(currency);
//     }

//   render() {
//       const {appa, isFetching, currency} = this.props;

//       return (
//           <div>
//               <SelectBox
//                 value={currency}
//                 options={CURRENCY}
//                 onChange={this.handleCurrencyChange}
//               />
//               {
//                   isFetching ?
//                     <div>Loading...</div>
//                         :
//                     <PriceList apartaments={appa} />
//               }
//           </div>
//       );
//   }
// }

// Price.propTypes = {
//     getAppartament: PropTypes.func.isRequired,
//     appa: PropTypes.object.isRequired,
//     selectCurrency: PropTypes.func.isRequired
// }

// const mapStateToProps = (state) => {
//     return {
//         appa: state.appartament,
//         isFetching: state.appartament.isFetching,
//         currency: state.currency
//     }
// }

// export default connect(mapStateToProps, {getAppartament, selectCurrency})(Price);