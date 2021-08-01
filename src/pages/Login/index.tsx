import { connect } from 'react-redux';
import { applicationState } from 'store/rootReducer';

import Login from './Login';

const mapStateToProps = ({ auth }: typeof applicationState) => ({
  loading: auth.loading,
  isLoggedIn: auth.loginSuccess,
});

export default connect(mapStateToProps, null)(Login);
