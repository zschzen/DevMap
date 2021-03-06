import React from 'react';
import { StyleSheet, View } from 'react-native';

import { WebView } from "react-native-webview";

export default function Profile({ navigation }) {
    const github_username = navigation.getParam('github_username');
    return <WebView source={{ uri: `https://github.com/${github_username}` }} style={styles.webview} />
}

const styles = StyleSheet.create({
    webview: {
        flex: 1,
    },
});