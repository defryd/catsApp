import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { globalTheme } from '../../../config/theme/global-theme'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { FootBg } from '../../components/ui/FootBg'
import { RootStackParams } from '../../navigator/StackNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { useQuery } from '@tanstack/react-query'
import { getBreedByName } from '../../../actions/cats'
import { useState } from 'react'
import { CatCard } from '../../components/cats/CatCard'

interface Props extends StackScreenProps<RootStackParams, 'SearchScreen'> {}


export const SearchScreen = ({ navigation, route }: Props) => {

    const [term, setTerm] = useState('');

    const { isLoading, data: catList = [] } = useQuery({
        queryKey: ['breeds', term],
        queryFn: () => getBreedByName(term),
        enabled: !!term,
    });

    return (
        <CustomView safe style={[globalTheme.mainContainer]}>

            <View style={{ flexDirection: 'row', backgroundColor: 'red', height: 60, paddingVertical: 10, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: 'blue', padding: 10 }}>
                    <Text>Go back</Text>
                </TouchableOpacity>
                <View style={styles.centeredView}>

                <Text style={styles.title}>Busqueda</Text>
                </View>
            </View>

            <TextInput
                placeholder="Buscar Raza"
                mode="flat"
                autoFocus
                autoCorrect={false}
                style={{ marginHorizontal: 20, marginBottom: 10 }}
                onChangeText={setTerm}
                value={term}
            />

            {isLoading && 
            <ActivityIndicator style={{ paddingTop: 20 }} />
            }

            <FlatList
                data={catList}
                keyExtractor={(cat, index) => `${cat.id}-${index}`}
                numColumns={1}
                renderItem={({ item }) => <CatCard data={item} />}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 150 }} />}
            />
            <FootBg style={styles.footBg} />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    footBg: {
        position: 'absolute',
        bottom: -40,
        left: -70,
        opacity: 0.5,
        width: 300,
        height: 300,
        zIndex: -1,
        transform: [{ rotate: '45deg' }],
    },
    title: {
        // left: '25%',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    centeredView: {
        width: '66%',
        alignItems: 'center',
    },
})