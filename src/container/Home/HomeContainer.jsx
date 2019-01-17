import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selector from './HomeSelector';
import * as actions from './HomeThunk';

export class HomeComponent extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    getData: PropTypes.func.isRequired,
  }

  state = {

  }

  componentDidMount() {
    const { getData } = this.props;
    getData && getData();
  }


  render() {
    const { isFetching } = this.props;
    return (
      <div className="container">
        {!isFetching && (
          <div className="row">
              Home work!
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: selector.isFetching(state),
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(actions.getDataThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
