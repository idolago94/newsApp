import React, { useState, useEffect } from 'react'
import { Text, FlatList, View, StyleSheet, ScrollView } from 'react-native'
import { AppStore } from '../../stores'
import Api from '../../utils/Api'
import { groupBy } from 'lodash'
import Accordion from 'react-native-collapsible/Accordion';
import Article from '../../components/Article/Article'

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
            console.log("loadNewsCategories -> articlesGroupByCategory", articlesGroupByCategory)
            setCategories(articlesGroupByCategory)
            AppStore.hideLoader()
        } catch (e) {
            AppStore.hideLoader()
            console.log("loadNewsCategories -> e", e)
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
                renderItem={({ item, index }) => <Article data={item} key={index}/>}
            />
        );
    };

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
    categoryText: { fontWeight: 'bold', letterSpacing: 1, fontSize: 18 }
})