import React, { Component } from 'react';
// Import the Library
import Rave from 'react-flutterwave-rave'
 
class Ravepay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "FLWPUBK_TEST-118880f82de7711adda92a77ef895e1f-X", // RavePay PUBLIC KEY
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
    return (
      <div className="App">
        <Rave
          pay_button_text="Pay With Rave"
          class="button"
          metadata={[
            { metaname: 'Tickets', metavalue: this.state.ticket_number },
            { metaname: 'Hostel', metavalue: this.state.hostel },
            { metaname: 'Room', metavalue: this.state.room_number }
          ]}
          payment_method="card"
          customer_email={this.state.email}
          customer_phone={this.state.phone}
          amount={"" + this.state.amount * this.state.ticket_number + ""}
          ravePubKey={this.state.key}
          callback={this.callback}
          onclose={this.close}
        />
      </div>
    );
  }
}
 
export default Ravepay;
 
 