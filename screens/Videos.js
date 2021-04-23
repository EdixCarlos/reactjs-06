import React from 'react';
import Video from 'react-native-video';
import {global} from '../styles/global';

const Videos = ({navigation, route}) => {
  const goToHome = () => {
    // navigation.goBack()
    navigation.pop();
  };
  return (
    <Video
      source={{
        uri:
          'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
      }} // Can be a URL or a local file.
      style={{width: 300, height: 300}}
      controls={true}
      ref={ref => {
        this.player = ref;
      }}
    />
  );
};

export default Videos;
