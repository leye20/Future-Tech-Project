import React from 'react';
import {RootState} from '../store';
import {addNewSignupToUsersList, checkUsersListForExistingUsername} from '../store/signup/action';
import {UsersList} from '../store/signup/types';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';
import {connect} from 'react-redux';

export interface ISignupPageProps {
    addNewSignupToUsersList: typeof addNewSignupToUsersList,
    checkUsersListForExistingUsername: typeof checkUsersListForExistingUsername,
    userslist: UsersList []
}

export class SignupPage extends React.Component<ISignupPageProps>
{
    generateID = (): number => {
        let randomNumber: number = Math.floor(Math.random() * 1000);
        randomNumber += this.props.userslist.length;
        return randomNumber;
    }
 

SignedUp = ( event: any ) => {
    event.preventDefault();
    // Handle retrieval of form field value.
    const userField: HTMLInputElement | null = document.querySelector( '[name="username"]' );
    let userFieldValue: string = '';
    if ( userField !== null ) userFieldValue = userField.value;
    // Add new item to inventory.
    this.props.addNewSignupToUsersList( {
        id: this.generateID(),
        name: userFieldValue
    });
    const passField: HTMLInputElement | null = document.querySelector( '[name="password"]' );
    let passFieldValue: string = '';
    if ( passField !== null ) passFieldValue = passField.value;
    // Add new item to inventory.
    this.props.addNewSignupToUsersList( {
        id: this.generateID(),
        name: passFieldValue
    });
    const intField: HTMLInputElement | null = document.querySelector( '[name="interests"]' );
    let intFieldValue: string = '';
    if ( intField !== null ) intFieldValue = intField.value;
    // Add new item to inventory.
    this.props.addNewSignupToUsersList( {
        id: this.generateID(),
        name: intFieldValue
    });
   
 console.log(userField,  passField, intField );

    if ( userField !== null ) userField.value = '';
    if ( passField !== null ) passField.value = '';
    if ( intField !== null ) intField.value = '';

}

render() {
    let {userslist}=this.props;
    console.log (userslist);
    return (
<Grid centered>
  <Form onSubmit= {this.SignedUp}>
    <Form.Field>
        <br></br>
        <h1> Signup </h1>
        <br></br>
      <label>Username</label>
      <input name= 'username' placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type= 'password' placeholder='Password' name='password' />
    </Form.Field>
    <Form.Field>
      <label>Interests</label>
      <input name= 'interests' placeholder='Interests' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Signup</Button>
  </Form>
  </Grid>
    )
}
}

  
const mapStateToProps = (state: RootState) => {
    return {
        userslist: state.signup.userslist
    }
}

export default connect(
    mapStateToProps,
    { addNewSignupToUsersList, checkUsersListForExistingUsername}
)(SignupPage);