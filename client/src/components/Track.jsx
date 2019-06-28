import React from 'react';
import Artwork from '../styled-comps/Artwork.jsx';
import TrackInfo from '../styled-comps/TrackInfo.jsx';
import styled from 'styled-components';


const StyledDiv = styled.div`
  height: 62px;
  width:306px;
  :hover {
    .overlay_buttons {
      visibility: visible;
    }
  }
`;



export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreClicked: false
    }
    this.moreButtonHandler = this.moreButtonHandler.bind(this);
  }

  moreButtonHandler() {
    this.setState({moreClicked: !this.state.moreClicked});
  }

  render() {
    return (
      <li>
        <StyledDiv >
          <Artwork imageUrl={"https://pics01212001.s3-us-west-1.amazonaws.com/4"} clicked={this.state.moreClicked}/>
          <TrackInfo clicked={this.state.moreClicked} clickHandler={this.moreButtonHandler}/>  
        </StyledDiv>
      </li>
    );
  }
}