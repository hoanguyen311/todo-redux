require('normalize.css/normalize.css');
require('bootstrap/less/bootstrap.less');
require('styles/App.css');

import React from 'react';

import AddTodo from '~/components/AddTodo';
import Footer from '~/components/Footer';
import TodoList from '~/components/TodoList';
import ConfirmModal from '~/components/ConfirmModal';

class AppComponent extends React.Component {
    renderModal() {
        if (this.props.modal.show) {
            return (
                <ConfirmModal />
            );
        }
        return false;
    }
    render() {
        let modalState = this.props.modal.show ? 'modal-open' : '';
        return (
            <div className ={`container ${modalState}`}>
                <div className = "row">
                    <div className = "col-xs-12 col-md-12">
                        <div className = "row">
                            <AddTodo />
                        </div>
                        <div className = "row">
                            <TodoList />
                        </div>
                        <div className = "row">
                            <Footer />
                        </div>
                    </div>
                </div>
                {this.renderModal()}
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
