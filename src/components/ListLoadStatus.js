import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ListLoadStatus = ({ hasMore }) => {
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
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    loadText: {
        fontSize: 10,
        color: '#666',
    }
})
