import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
    state = {
        isValidated: false,
    }

    validate = () => {
        console.log("validating from form.js")
        const formLength = this.formEl.length;
        let validity = false
        if (this.formEl.checkValidity() === false) {
            for (var i = 0; i < formLength; i++) {
                const elem = this.formEl[i];
                const errorLabel = elem.parentNode.querySelector('.invalid-feedback');

                if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                    if (!elem.validity.valid) {
                        errorLabel.textContent = elem.validationMessage;

                    } else {
                        errorLabel.textContent = '';
                    }
                }
            }
        } else {
            for (var j = 0; j < formLength; j++) {
                const elem = this.formEl[j];
                const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
                if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                    errorLabel.textContent = '';
                }
            };
            validity = true;
        }
        return validity
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.validate() === true) {
            this.props.submit(this.props.data, this.props.isLogin);
            // this.props.history.push('/')
        }
        this.setState({ isValidated: true });
    }

    render() {
        const props = [...this.props];

        let classNames = [];
        if (props.className) {
            classNames = [...props.className];
            delete props.className;
        }

        if (this.state.isValidated) {
            classNames.push('.was-validated');
        }

        return (
            <form 
                ref={form => this.formEl = form} 
                onSubmit={this.submitHandler} 
                className={classNames} 
                {...props} 
                noValidate>
                {this.props.children}
            </form>
        );
    }
}

Form.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    data: PropTypes.object,
    isLogin: PropTypes.bool
};


const mapDispatchToProps = dispatch => {
    return {
        submit: (user, isLogin) => dispatch(actions.auth(user, isLogin))
    }
}

export default connect(null, mapDispatchToProps)(Form);

