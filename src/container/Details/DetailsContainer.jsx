import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import selector from './DetailsSelector';
import * as actions from './DetailsThunk';
import Header from '../../components/Header';

import './DetailsStyle.scss';

export class DetailsContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { getData, match: { params } } = this.props;
    // console.log(match);
    getData && getData(params.userId);
  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { user, isFetching } = this.props;
    return (
      <div className="Detail">
        <Header text="Person" onBack={this.goBack} />

        {user && (
        <div className="Details__Panel">
          <img className="Details__Img" src={user.avatar_url} alt={user.name} />
          <div className="Details__Info">
            <h4>{user.name}</h4>
            <p>{user.location}</p>
          </div>
        </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: selector.isFetching(state),
  user: selector.user(state),
});

const mapDispatchToProps = dispatch => ({
  getData: name => dispatch(actions.getDataThunk(name)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailsContainer),
);
