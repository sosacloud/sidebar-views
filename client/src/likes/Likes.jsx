import styled from 'styled-components';
import React from 'react';
import LikesAnchor from '../styled-comps/AnchorRelatedTracks.jsx';


export default class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userIds: []};
  }

  componentDidMount() {
    let id = this.props.trackId || Math.ceil(Math.random() * 100);

    fetch(`/api/likes/${id}`, {
      method: 'GET'
    })
      .then(data => data.json())
      .then(jsonData => {
        if (Array.isArray(jsonData)) {
          console.log('This is our userIds jsonData from Likes component: ', jsonData);
          this.setState({ userIds: jsonData })
        }
      })
      .then(() => {
        if (this.state.Likes.length) {
          this.props.renderLikes();
        }
      })
      .catch((err) => {
        console.log('***Client componentDidMount fetch error in Likes component***, ', err);
      })
  }

  
  render() {
    
    return (
       <LikesAnchor textHeader={"Likes"} imageSize={"21px 24px"} imageUrl={"url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/like.svg)"}/>
    );
  }
}