import React from 'react';
import { RootState } from '../store';
import { removeNewsFromNewsfeed, addNewsToNewsfeed } from '../store/newsfeed/action';
import { News } from '../store/newsfeed/types';
import { Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface INewsfeedProps {
    removeNewsFromNewsfeed: typeof removeNewsFromNewsfeed,
    addNewsToNewsfeed: typeof addNewsToNewsfeed,
    news: News[]
  }
  
  export class Newsfeed extends React.Component<INewsfeedProps>
  {
    generateID = (): number => {
      let randomNumber: number = Math.floor( Math.random() * 1000 );
      randomNumber += this.props.news.length;
      return randomNumber;
    }
    newNewsfeed = ( event: any ) => {
      event.preventDefault();
      const formField: HTMLInputElement | null = document.querySelector( '[name="Newsfeed-name"]' );
      let formFieldValue: string = '';
      if ( formField !== null ) formFieldValue = formField.value;
          this.props.addNewsToNewsfeed( {
          id: this.generateID(),
          article: formFieldValue
      } );
    }
    deleteNewsfeed = ( id: number ) => {
      this.props.removeNewsFromNewsfeed( id );
    }
    render ()
    {
      return (
          <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Image src='/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Image src='/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
            </Grid.Row>
            <h3>List of Newsfeeds</h3>
            <Grid.Row>
              
            </Grid.Row>
          </Grid>
        );
      }
    }
    
  const mapStateToProps = ( state: RootState ) => {
      return {
        news: state.newsfeed.news
      }
    }
    
  export default connect(
      mapStateToProps,
      { addNewsToNewsfeed, removeNewsFromNewsfeed }
    )( Newsfeed );