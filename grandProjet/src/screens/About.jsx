import React, { Fragment } from 'react';
import { View,Text,Button,Linking, TouchableOpacity, SafeAreaView } from 'react-native';
import AboutScreen from './AboutScreen';
import AutoLayouts from '../layouts/AutoLayouts';
const About = () => {

    return (
      <Fragment>
        <AutoLayouts value="1">
          <AboutScreen />
        </AutoLayouts>
      </Fragment>
    );
};

export default About;