import React from 'react';
import { RootState } from '../store';
import { removePostFromNewsfeed, addPostToNewsfeed } from '../store/newsfeed/newsfeed_action';
import { Post } from '../store/newsfeed/newsfeed_types';
import { Item, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './newsfeed.css';

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
  
  // this function enables the periodic posts of articles
  componentDidMount() {
    console.log('component ran');
    setInterval(() => {this.setState({index: this.state.index + 1})}, 10000);
    // this.setState({ display: setInterval(() => { this.generateID() }, 10000) });
    // setTimeout(() => {}, 10000);
  }

  // componentWillUnmount() {
  //   // to clear my interval in here (but this is needs debugging)
  //   console.log('component unran')
  //   clearInterval(this.state.index);
  // }

  render() {
    let {index} = this.state;
    setTimeout(() => {}, 1000);
    return (
      <Grid columns="two">
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