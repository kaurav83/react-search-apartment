import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { selectCurrency } from '../../actions/appartamentActions';

class TabSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label
        };
    }

    handleCurrencyTab = tab => {
        this.setState({ activeTab: tab });
        this.props.selectCurrency(tab);
    };

    render() {
        const { handleCurrencyTab, props: { children }, state: { activeTab }} = this;
        
        return (
            <div className="tab-list">
                {
                    children.map(child => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={handleCurrencyTab}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currency: state.currency,
    };
};

export default connect(mapStateToProps, { selectCurrency })(TabSet);