import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUsersRequest } from '../../actions/home';

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }
  render() {
    const { users } = this.props;
    return (
      <section>
        <div>Home works</div>
        <Link to={'/dashboard'}>Go to Dashboard</Link>
        <div>
          <strong>Users</strong>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.home.users
});

const mapDispatchToProps = (dispatch) => ({
  getUsersRequest: () => dispatch(getUsersRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);