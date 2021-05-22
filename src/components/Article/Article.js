import React from 'react'
import { View, Image, Text, StyleSheet, Button, Dimensions } from 'react-native'
import { AppStore } from '../../stores'
import { observer, inject } from 'mobx-react'
import { isEqual } from 'lodash'

const Article = inject(({ AppStore }) => ({
    myArticles: AppStore.getMyArticles
}))(observer(({ data, myArticles }) => {
    return (
        <View style={s.article}>
            <Image style={s.articleImage} source={{ uri: data.image }} />
            <View style={s.content}>
                <View style={s.articleDetails}>
                    <Text style={s.articleTitle}>{data.title}</Text>
                    <Text style={s.articleDetail}>Author: {data.author || '-'}</Text>
                    <Text style={s.articleDetail}>Source: {data.source || '-'}</Text>
                </View>
                <Button style={s.favouriteButton} title={myArticles.find(art => isEqual(art, data)) ? 'unF' : 'F'} onPress={() => AppStore.toggleArticleFavourite(data)} />
            </View>
        </View>
    )
}))

export default Article

const s = StyleSheet.create({
    article: {
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 7,
        marginHorizontal: 7,
        overflow: 'hidden',
    },
    articleImage: { height: 50, marginRight: 3, flex: 1 },
    articleTitle: { fontWeight: 'bold', paddingBottom: 2 },
    articleDetail: { color: 'gray', paddingLeft: 7 },
    content: { flexDirection: 'row', flex: 4 },
    articleDetails: { flex: 5 },
    favouriteButton: { flex: 1 }
})