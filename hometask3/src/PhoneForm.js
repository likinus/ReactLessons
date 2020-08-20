import React from 'react';

function validatePhone(phone) {
    let phoneError = [];

    if (phone.length < 13) {
        phoneError.push("Length should be 13 chars.")
    }

    if (!(phone.slice(0, 4).includes('+375'))) {
        phoneError.push("Phone should begin from +375.")
    }

    return phoneError;
}

class PhoneForm extends React.Component {
    
    state = {
        phone: "",
        isValidPhone: false,
        errors: {
            phone: []
        },
    };

    onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });


    render() {
        return (
        <React.Fragment>
            <p>Введите номер телефона</p>
            <form onSubmit={(e) => {
                e.preventDefault();

                this.setState((state) => ({
                    errors: {
                        ...state.errors,
                        phone: validatePhone(state.phone)
                    }

                }))
            }}
            >
                <label>Ваш телефон: </label>
                <input className={this.state.errors.phone.length ? "error" : ""} 
                    value={this.state.phone} 
                    type="tel" 
                    maxLength="13" 
                    name="phone" 
                    onChange={this.onChange}></input>
                    {this.state.errors.phone.length ? this.state.errors.phone.map((error, index) => (
                        <div key={index} className="error">
                        {error}
                        </div>
                    )) : null}
                <button type="submit">Отправить</button>
            </form>
        </React.Fragment>
        )
    }
}

export default PhoneForm