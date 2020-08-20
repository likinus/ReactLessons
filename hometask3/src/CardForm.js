import React from 'react';

function validateCardNumber(cardNumber) {
    let cardNumberError = [];

    if(cardNumber.length < 16) {
        cardNumberError.push("Length of card number mast be 16 chars")
    }

    return cardNumberError
}

function validateOwnerName(ownerName) {
    let ownerNameError = [];
    const ownerNameChars = ownerName.split('');
    const latinLetter = ownerNameChars.find((letter) => (letter  >= "A" && letter <= "Z") || (letter  >= "a" && letter <= "z"));

    if (!latinLetter) {
        ownerNameError.push("English letters is required");
    }

    return ownerNameError;
}

function validateYear(year) {
    let yearError = []
    const currentYear = new Date().getFullYear().toString().split("").slice(2, 4)

    if (year < currentYear) {
        yearError.push("Your card has expired");
    }

    return yearError;
}

function validateMonth(month) {
    let monthError = [];

    if (month < 1 || month > 12) {
        monthError.push("Value must be from 1 to 12");
    }

    return monthError;
}

function validateCvv(cvv) {
    let cvvError = [];
    const cvvChars = cvv.split('');
    const isNumber = cvvChars.find((number) => number >= "0" && number <= "9")

    if (cvv.length < 3 || cvv.length > 4) {
        cvvError.push("Required 3 or 4 chars")
    }

    if (!isNumber) {
        cvvError.push("Only numbers is required")
    }

    return cvvError;
}

class CardForm extends React.Component {
    
    state = {
       cardNumber: '',
       ownerName: '',
       year: '',
       month:'',
       cvv: '',
       errors: {
           cardNumber: [],
           ownerName: [],
           year: [],
           month: [],
           cvv: []
       },
    };

    onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

    render() {
        return (
            <React.Fragment>
                <p>Введите данные вашей банковской платежной карты</p>
                <form 
                className="card" 
                onSubmit={(e) => {
                    e.preventDefault();

                    this.setState((state) => ({
                        errors: {
                            ...state.errors,
                            cardNumber: validateCardNumber(state.cardNumber),
                            ownerName: validateOwnerName(state.ownerName),
                            year: validateYear(state.year),
                            month: validateMonth(state.month),
                            cvv: validateCvv(state.cvv),
                        },
                    })); 
                }}
                >
                   <label>Your card number</label> 
                   <input name="cardNumber" 
                        type="text" 
                        maxLength="16" 
                        value={this.state.cardNumber} 
                        onChange={this.onChange} 
                        className={this.state.errors.cardNumber.length ? "error" : ""}
                    ></input>
                    {this.state.errors.cardNumber.length ? this.state.errors.cardNumber.map((error, index) => (
                         <div key={index} className="error">
                            {error}
                        </div>
                    )) : null}
                   <label>Name and Surname</label>
                   <input 
                        name="ownerName" 
                        type="text" 
                        value={this.state.ownerName} 
                        onChange={this.onChange} 
                        className={this.state.errors.ownerName.length ? "error" : ""}
                    ></input>
                    {this.state.errors.ownerName.length ? this.state.errors.ownerName.map((error, index) => (
                         <div key={index} className="error">
                            {error}
                        </div>
                    )) : null}
                   <label>Month</label>
                   
                   <input 
                        name="month" 
                        type="text" 
                        size="5" 
                        value={this.state.month} 
                        onChange={this.onChange}
                        className={this.state.errors.month.length ? "error" : ""}
                    ></input>
                    {this.state.errors.month.length ? this.state.errors.month.map((error, index) => (
                         <div key={index} className="error">
                            {error}
                        </div>
                    )) : null}
                   <label>Year</label>
                   <input 
                        name="year" 
                        type="text" 
                        size="5" 
                        value={this.state.year} 
                        onChange={this.onChange}
                        className={this.state.errors.year.length ? "error" : ""}
                   ></input>
                   {this.state.errors.year.length ? this.state.errors.year.map((error, index) => (
                         <div key={index} className="error">
                            {error}
                        </div>
                    )) : null}
                   <label>CVV</label>
                   <input 
                        name="cvv" 
                        type="text" 
                        value={this.state.cvv} 
                        onChange={this.onChange}
                        className={this.state.errors.cvv.length ? "error" : ""}
                    ></input>
                    {this.state.errors.cvv.length ? this.state.errors.cvv.map((error, index) => (
                         <div key={index} className="error">
                            {error}
                        </div>
                    )) : null}
                   <button>Send</button>
                </form>
            </React.Fragment>
        )
    }
}

export default CardForm