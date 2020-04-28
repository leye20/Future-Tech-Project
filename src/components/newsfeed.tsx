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

export interface INewsfeedState {
  interval: NodeJS.Timeout;
  displayPicker: number;
  index: number
}

export class Newsfeed extends React.Component<INewsfeedProps, INewsfeedState>
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

  // Generates random ID used used for the automated newsfeed display
  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.posts.length;
    return randomNumber;
  }

  // this function enables the periodic posts of articles
  componentDidMount() {
    console.log('component ran');
    setInterval(() => { this.setState({ index: this.state.index + 1 }) }, 10000);
  }

  // The rendering method that pushes the posts.
  render() {
    let { index } = this.state;
    setTimeout(() => { }, 1000);
    return (
      <Grid columns="two" className="container">
        <Item.Group className='feedblk'>
          {this.props.posts.slice(0, index).map(element =>  // this loops through the posts and actuivates the rendering
            <Item className='post'>
              <Item.Image size='small' src={element.thumbnailUrl} />
              <Item.Content>
                <Item.Header as='a'><em>...Updated feed</em></Item.Header>
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

// Connecting our functions/action to our store
export default connect(
  mapStateToProps,
  { addPostToNewsfeed, removePostFromNewsfeed }
)(Newsfeed);