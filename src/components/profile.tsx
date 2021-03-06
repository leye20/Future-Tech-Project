import React from 'react';
import { RootState } from '../store';
import { removeItemFromProfile, addItemToProfile } from '../store/profile/kounandi_action';
import { Item }  from '../store/profile/kounandi_types';
import { Grid, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface IProfileProps {
  removeItemFromProfile: typeof removeItemFromProfile,
  addItemToProfile: typeof addItemToProfile,
  items: Item[]
}

export class Profile extends React.Component<IProfileProps> 
{
  generateID = (): number => {
    let randomNumber: number = Math.floor( Math.random() * 1000 );
    randomNumber += this.props.items.length;
    return randomNumber;
  }
  newProduct = ( event: any ) => {
    event.preventDefault();
    // Handle retrieval of form field value.
    const formField: HTMLInputElement | null = document.querySelector( '[name="product-name"]' );
    let formFieldValue: string = '';
    if ( formField !== null ) formFieldValue = formField.value;
    // Add new item to inventory.
    this.props.removeItemFromProfile(formFieldValue);
  }
  //deleteProduct =  () => {
    // Remove this product by the ID!
    //this.props.removeItemFromProfile(formFieldValue);
  //}
  render ()
  {
    return (
      <Grid>
        <Grid.Row>
          <Form onSubmit={this.newProduct}>
            <Form.Field>
              <label htmlFor="product-name">Enter User ID</label>
              <Input name="product-name" type='text' />
            </Form.Field>
            <Input type="submit" value="Submit" />
          </Form>
        </Grid.Row>
        <h3>User Information</h3>
        <ul>
          {/* Loop through our REDUX product items... */}
          { this.props.items.map( element => (
              <li>
                {element.name}   
              </li>
          ) ) }
        </ul>
      </Grid>
    );
  }
}

// Retrieve "items" from our "global" redux state.
const mapStateToProps = ( state: RootState ) => {
  return {
    items: state.profile.items
  }
}

// Connect Redux and React using our values and "view!"
export default connect(
  mapStateToProps,
  { addItemToProfile, removeItemFromProfile }
)( Profile );