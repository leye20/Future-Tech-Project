import React from 'react';
import { RootState } from '../store';
import { removePostFromNewsfeed, addPostToNewsfeed } from '../store/newsfeed/action';
import { Post } from '../store/newsfeed/types';
import { Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './newsfeed.css';
// import myImage from '../painting.jpg';

export interface INewsfeedProps {
  removePostFromNewsfeed: typeof removePostFromNewsfeed,
  addPostToNewsfeed: typeof addPostToNewsfeed,
  posts: Post[]
}

export interface INewsfeedState {
  display: NodeJS.Timeout;
  displayPicker: number;
  index: number
}

// const post: string = 'this is the way to go';

export class Newsfeed extends React.Component<INewsfeedProps, INewsfeedState>
{

  constructor(prop: INewsfeedProps) {
    super(prop);
    this.state = ({
      display: setTimeout(() => {
        
      }, 0),
      displayPicker: 1,
      index: 1
    });
  }

  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.posts.length;
    return randomNumber;
  }
  // newProduct = (post: string) => {
  //   // Handle retrieval of form field value.
  //   const formField: HTMLInputElement | null = document.querySelector('[article="product-name"]');
  //   let formFieldValue: string = '';
  //   if (formField !== null) formFieldValue = formField.value;
  //   // Add new item to inventory.
  //   this.props.addPostToNewsfeed({
  //     id: this.generateID(),
  //     thumbnailUrl: formFieldValue,
  //     article: formFieldValue
  //   });
  // }
  // deleteProduct = (id: number) => {
  //   // Remove this product by the ID!
  //   this.props.removePostFromNewsfeed(id);
  // }
  // componentWillUpdate(){
  //   if (this.state.index < this.props.posts.length) {
  //     this.setState({index: this.state.index + 1})
  //     console.log( 'working' );
  //     setTimeout(() => {}, 10000);
  //   }
  // }

  componentDidMount() {
    console.log('component ran');
    setInterval(() => {this.setState({index: this.state.index + 1})}, 10000);
    // this.setState({ display: setInterval(() => { this.generateID() }, 10000) });
    // setTimeout(() => {}, 10000);
  }

  // componentWillUnmount() {
  //   // to clear my interval in here
  //   console.log('component unran')
  //   clearInterval(this.state.display);
  // }

  render() {
    let {index} = this.state;
    setTimeout(() => {}, 1000);
    return (
      <Grid centered>
        {this.props.posts.slice(0, index).map(element =>

          <Grid.Row>
            <Grid.Column width={2}>
              <Image src={element.thumbnailUrl} />
            </Grid.Column>
            <Grid.Column width={7}>
              {element.article}
            </Grid.Column>

          </Grid.Row>
         
        )}
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