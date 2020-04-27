import React from 'react';
import { RootState } from '../store';
import { removePostFromNewsfeed, addPostToNewsfeed } from '../store/newsfeed/newsfeed_action';
import { Post } from '../store/newsfeed/newsfeed_types';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './newsfeed.css';
// import myImage from '../painting.jpg';

export interface INewsfeedProps {
  removePostFromNewsfeed: typeof removePostFromNewsfeed,
  addPostToNewsfeed: typeof addPostToNewsfeed,
  posts: Post[]
}

export interface IState {
  interval: NodeJS.Timeout;
  displayPicker: number;
  index: number
}

export class Newsfeed extends React.Component<INewsfeedProps, IState>
{

  constructor(props: INewsfeedProps) {
    super(props);
    this.state = ({
      interval: setTimeout(() => {       
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
  
  // this function enables the periodic posts of articles
  componentDidMount() {
    console.log('component ran');
    setInterval(() => {this.setState({index: this.state.index + 1})}, 10000);
    // this.setState({ display: setInterval(() => { this.generateID() }, 10000) });
    // setTimeout(() => {}, 10000);
  }

  componentWillUnmount() {
    // to clear my interval in here (but this is needs debugging)
    console.log('component unran')
    clearInterval(this.state.index);
  }

  render() {
    let {index} = this.state;
    setTimeout(() => {}, 1000);
    return (
      <Item.Group className='feedblk'>
      {this.props.posts.slice(0, index).map(element => 
      <Item className='post'>
        {/* {this.props.posts.slice(0, index).map(element =>  */}
          <Item.Image size='small' src={element.thumbnailUrl} />

          <Item.Content>
            <Item.Header as='a'>...Updated feed</Item.Header>
            <Item.Description>
              <p>
              {element.article}
              </p>
            </Item.Description>
          </Item.Content>
          </Item>
        )}
      
      </Item.Group>
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