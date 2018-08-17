import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
    state = {
        isValidated: false
    }

    validate = () => {
        const formLength = this.formEl.length;

        if (this.formEl.checkValidity() === false) {
            for (var i = 0; i < formLength; i++) {
                const elem = this.formEl[i];
                const errorLabel = elem.parentNode.querySelector('.invalid-feedback');

                if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                    if (errorLabel && elem.nodeName.toLowerCase() === 'passwordConfirm') {
                        const pwCheck = this.formEl[i--];
                        console.log("Checking password confirmation")
                        console.log(pwCheck.textContent)
                        if (elem.textContent !== pwCheck.textContent) {
                            errorLabel.innerHTML = 'Password and Password Confirmation do not match'
                        }
                    } else if (errorLabel && elem.nodeName.toLowerCase() === 'fName') {
                        if (elem.validity.valueMissing) {
                            errorLabel.textContent = elem.validationMessage;
                        }
                        if (!elem.validity.valid) {
                            errorLabel.innerHTML = "Please enter a first name with at least 2 characters";
                        }
                    } else if (errorLabel && elem.nodeName.toLowerCase() === 'lName') {
                        if (elem.validity.valueMissing) {
                            errorLabel.textContent = elem.validationMessage;
                        }
                        if (!elem.validity.valid) {
                            errorLabel.innerHTML = "Please enter a last name with at least 2 characters";
                        }
                    } else if (!elem.validity.valid) {
                        errorLabel.textContent = elem.validationMessage;

                    } else {
                        errorLabel.textContent = '';
                    }
                }
            }
            return false;
        } else {
            for (var j = 0; j < formLength; j++) {
                const elem = this.formEl[j];
                const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
                if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                    errorLabel.textContent = '';
                }
            };
            return true;
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (this.validate()) {
            this.props.submit();
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
            <form method={this.props.method} action={this.props.action} ref={form => this.formEl = form} onSubmit={this.submitHandler} {...props} className={classNames} noValidate>
                {this.props.children}
            </form>
        );
    }
}

Form.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    submit: PropTypes.func.isRequired
};

export default Form;