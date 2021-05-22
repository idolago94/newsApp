import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { observer, inject } from 'mobx-react'
import { FlatList } from 'react-native-gesture-handler'
import Article from '../../components/Article/Article'

const MyArticles = inject(({ AppStore }) => ({
    articles: AppStore.getMyArticles
}))(observer(({ articles }) => {
    console.log("articles", articles)
    const ListEmpty = () => (
        <View style={s.listEmptyContainer}>
            <Text style={s.listEmptyText}>No saved articles</Text>
        </View>
    )

    return <FlatList
        keyExtractor={(item, i) => i.toString()}
        data={articles}
        renderItem={({ item, index }) => <Article data={item} key={index} />}
        ListEmptyComponent={ListEmpty}
    />
}))

export default MyArticles

const s = StyleSheet.create({
    listEmptyContainer: { alignItems: 'center' },
    listEmptyText: { fontSize: 20, fontWeight: 'bold', padding: 20 }
})