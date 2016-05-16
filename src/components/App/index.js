import App from './component';
import {connect} from 'react-redux';

const mapStateToProps = function(state) {
    return {
        modal: state.modal
    };
}

export default connect(
    mapStateToProps,
    null
)(App);
