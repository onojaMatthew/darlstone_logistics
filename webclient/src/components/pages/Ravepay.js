import React, { Component } from 'react';
// Import the Library
import Rave from 'react-flutterwave-rave'
 
class Ravepay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      phone: "0000000000000",
      amount: 2000,
      firstname: "Oluwole",
      lastname: "Adebiyi",
      email: "test@test.com",
      room_number: "23A",
      hostel: "Silver 1",
      ticket_number: 3,
    }
    this.callback = this.callback.bind(this);
    this.close = this.close.bind(this);
  }
 
  callback = (response) => {
    
    console.log(response);
    
    
  }
 
 
  close = () => {
    console.log("Payment closed");
  }
 
  render() {
    const { phone, email, amount } = this.props;
    const pubkey = process.env.REACT_APP_FLWPUBKEY;
    return (
      <div className="App" >
        <Rave
          pay_button_text="Pay With Card"
          className="button"
          payment_method="card"
          customer_email={email}
          customer_phone={phone}
          amount={amount}
          ravePubKey={pubkey}
          callback={this.callback}
          onclose={this.close}
        />
      </div>
    );
  }
}
 
export default Ravepay;
 
 