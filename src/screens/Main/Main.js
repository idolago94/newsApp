import React, { useState, useEffect } from 'react'
import { Text, FlatList, View, StyleSheet, Image, ScrollView } from 'react-native'
import { AppStore } from '../../stores'
import Api from '../../utils/Api'
import { groupBy } from 'lodash'
import Accordion from 'react-native-collapsible/Accordion';

const Main = () => {
    const [categories, setCategories] = useState([])
    const [sectionActive, setSection] = useState([])
    useEffect(() => {
        loadNewsCategories()
    }, [])

    const loadNewsCategories = async () => {
        try {
            AppStore.showLoader()
            let res = await Api.GetNews()
            let articlesGroupByCategory = groupBy(res.data, art => art.category)
            articlesGroupByCategory = Object.keys(articlesGroupByCategory).map(category => ({
                title: category,
                articles: articlesGroupByCategory[category]
            }))
            setCategories(articlesGroupByCategory)
            AppStore.hideLoader()
        } catch (e) {
            AppStore.hideLoader()
        }
    }

    const _renderCategoryHeader = (section) => {
        return (
            <View style={s.sectionHeader}>
                <Text style={s.categoryText}>{section.title}</Text>
            </View>
        );
    };

    const _renderCategoryContent = (section) => {
        return (
            <FlatList
                keyExtractor={(item, i) => i.toString()}
                data={section.articles}
                renderItem={Article}
            />
        );
    };

    const Article = ({ item, index }) => {
        return (
            <View style={s.article}>
                <Image style={s.articleImage} source={{ uri: item.image }} />
                <View>
                    <Text style={s.articleTitle}>{item.title}</Text>
                    <Text style={s.articleDetail}>Author: {item.author || '-'}</Text>
                    <Text style={s.articleDetail}>Source: {item.source || '-'}</Text>
                </View>
            </View>
        )
    }

    return <ScrollView style={s.container}>
        <Accordion
            sections={categories}
            activeSections={sectionActive}
            renderHeader={_renderCategoryHeader}
            renderContent={_renderCategoryContent}
            onChange={i => setSection(i)}
        />
    </ScrollView>
}

export default Main

const s = StyleSheet.create({
    container: { flex: 1 },
    sectionHeader: {
        padding: 5,
        backgroundColor: 'rgb(229,229,229)'
    },
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
    categoryText: { fontWeight: 'bold', letterSpacing: 1, fontSize: 18 }
})