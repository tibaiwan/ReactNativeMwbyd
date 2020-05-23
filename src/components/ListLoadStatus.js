import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ListLoadStatus = (props) => {
    const { hasMore } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.loadText}>
                { hasMore ? '加载中...' : '没有更多了～'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadText: {
        fontSize: 10,
        color: '#666',
    }
})
