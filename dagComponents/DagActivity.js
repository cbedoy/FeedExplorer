import React, {Fragment} from 'react';

import {
    StreamApp,
    FlatFeed,
    Activity,
    StatusUpdateForm,
    LikeButton,
    ReactionToggleIcon,
    ReactionIcon,
    ReactionIconBar,
    RepostIcon, HeartIcon, ReplyIcon
  } from 'react-native-activity-feed';


class DagActivity extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
            <Activity 
            activity={{
                actor: {
                data: {
                    name: 'Nora Ferguson',
                    profileImage: 'https://randomuser.me/api/portraits/women/72.jpg',
                },
                },
                verb: 'post',
                object: this.state,
                time: new Date(),
            }}
            />
        );
    }
  }
  

export default DagActivity;