import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

function Loading() {
    return <LottieView source={require('../../assets/loading.json')} autoPlay loop /> ;
}

export default Loading;