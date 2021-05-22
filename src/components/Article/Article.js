import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Article = ({ data }) => {
    return (
        <View style={s.article}>
            <Image style={s.articleImage} source={{ uri: data.image }} />
            <View>
                <Text style={s.articleTitle}>{data.title}</Text>
                <Text style={s.articleDetail}>Author: {data.author || '-'}</Text>
                <Text style={s.articleDetail}>Source: {data.source || '-'}</Text>
            </View>
        </View>
    )
}

export default Article

const s = StyleSheet.create({
    article: {
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 7,
        marginHorizontal: 7,
        overflow: 'hidden'
    },
    articleImage: { width: 50, height: 50, marginRight: 3 },
    articleTitle: { fontWeight: 'bold', paddingBottom: 2 },
    articleDetail: { color: 'gray', paddingLeft: 7 },
})