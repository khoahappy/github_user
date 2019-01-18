import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// import _ from 'lodash';
import selector from './HomeSelector';
import * as actions from './HomeThunk';
import Header from '../../components/Header';


import './HomeStyle.scss';

export class HomeComponent extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    getData: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,

  }

  state = {

  }

  componentDidMount() {
    const { getData } = this.props;
    getData && getData();
  }

  gotoDetail = (item) => {
    const { history } = this.props;
    console.log(item);
    history.push(`/user/${item.login}`);
  }

  render() {
    const { isFetching, users } = this.props;
    return (
      <div className="container Home">
        <Header text="Home" />
        <p className="Home__Text">
        Top 5 Github Users
          <br />
          {'Tap the username to see more information'}
        </p>
        {!isFetching && (
          <div className="row">
              {
                users && users.map(item => (
                  <button key={item.id} className="Home__Button" onClick={() => this.gotoDetail(item)}>
                    {item.login}
                  </button>
                ))
              }
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: selector.isFetching(state),
  users: selector.topFive(state),
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(actions.getDataThunk()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeComponent),
);
