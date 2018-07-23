import { connect } from 'react-redux';
import HelloWorldApp from './HelloWorldApp';

const mapStateToProps = state => ({
	tech: state.helloWorldReducer.tech,
});

export default connect(mapStateToProps)(HelloWorldApp);
