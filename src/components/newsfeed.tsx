import React from 'react';
import { RootState } from '../store';
import { removePostFromNewsfeed, addPostToNewsfeed } from '../store/newsfeed/action';
import { Post } from '../store/newsfeed/types';
import { Grid, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface INewsfeedProps {
    removePostFromNewsfeed: typeof removePostFromNewsfeed,
    addPostToNewsfeed: typeof addPostToNewsfeed,
    posts: Post[]
}

// const post: string = 'this is the way to go';

export class Newsfeed extends React.Component<INewsfeedProps, Post>
{
    generateID = (): number => {
        let randomNumber: number = Math.floor( Math.random() * 1000 );
        randomNumber += this.props.posts.length;
        return randomNumber;
      }
      newProduct = ( post: string ) => {
        // Handle retrieval of form field value.
        const formField: HTMLInputElement | null = document.querySelector( '[name="product-name"]' );
        let formFieldValue: string = '';
        if ( formField !== null ) formFieldValue = formField.value;
        // Add new item to inventory.
        this.props.addPostToNewsfeed( {
          id: this.generateID(),
          article: formFieldValue
        } );
      }
      deleteProduct = ( id: number ) => {
        // Remove this product by the ID!
        this.props.removePostFromNewsfeed( id );
      }
      render ()
      {
        return (
            <Grid>
              <h3>Future-Tech Newsfeed</h3>
              <Message color='teal'>Future-Tech Newsfeed</Message>
              <Grid.Row>
                <ul>
                  {this.props.posts.map( element => (
                  <li>
                    {element.article}
                    </li>
                    ) )}
                </ul>
              </Grid.Row>
            </Grid>
          );
        }
      }

const mapStateToProps = (state: RootState) => {
    return {
        posts: state.newsfeed.posts
    }
}

export default connect(
    mapStateToProps,
    { addPostToNewsfeed, removePostFromNewsfeed }
)(Newsfeed);