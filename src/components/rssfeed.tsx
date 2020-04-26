import React from 'react';
import { RootState } from '../store';
import { removePostFromNewsfeed, addPostToNewsfeed } from '../store/newsfeed/action';
import { Post } from '../store/newsfeed/types';
import { Grid, Image, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './newsfeed.css';
// import myImage from '../painting.jpg';

export interface INewsfeedProps {
  removePostFromNewsfeed: typeof removePostFromNewsfeed,
  addPostToNewsfeed: typeof addPostToNewsfeed,
  posts: Post[]
}

// const post: string = 'this is the way to go';

export class Newsfeed extends React.Component<INewsfeedProps, Post>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.posts.length;
    return randomNumber;
  }
  newPost = (post: string) => {
    // Handle retrieval of form field value.
    const formField: HTMLInputElement | null = document.querySelector('[article="product-name"]');
    let formFieldValue: string = '';
    if (formField !== null) formFieldValue = formField.value;
    // Add new item to inventory.
    this.props.addPostToNewsfeed({
      id: this.generateID(),
      thumbnailUrl: formFieldValue,
      article: formFieldValue
    });
  }
  deleteProduct = (id: number) => {
    // Remove this product by the ID!
    this.props.removePostFromNewsfeed(id);
  }

  componentDidMount(){
    console.log( 'component ran' );
  }

  render() {
    return (
      <Container>
          <Grid centered>
            <ul>
            {this.props.posts.map(element => 
            setInterval(() => 
              <li>
                <Grid.Row>
                  <Image src={element.thumbnailUrl} />
                  {element.article}
                </Grid.Row>
              </li>
            , 5000))}
            </ul>
        </Grid>
      </Container>
    )
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