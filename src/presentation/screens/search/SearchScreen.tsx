import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { globalTheme } from '../../../config/theme/global-theme'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { FootBg } from '../../components/ui/FootBg'
import { RootStackParams } from '../../navigator/StackNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import { useQuery } from '@tanstack/react-query'
import { getBreedByName } from '../../../actions/cats'
import { useContext, useState } from 'react'
import { CatCard } from '../../components/cats/CatCard'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'
import { Title } from '../../components/ui/Title'
import { ThemeContext } from '../../context/ThemeContext'
import { ButtonBack } from '../../components/ui/ButtonBack'

interface Props extends StackScreenProps<RootStackParams, 'SearchScreen'> {}


export const SearchScreen = ({ navigation, route }: Props) => {

    const { theme } = useContext(ThemeContext);
    const [term, setTerm] = useState('');
    const debouncedValue = useDebouncedValue(term);

    console.log(debouncedValue);

    const { isLoading, data: catList = [] } = useQuery({
        queryKey: ['breeds', debouncedValue],
        queryFn: () => getBreedByName(debouncedValue),
        enabled: !!debouncedValue,
    });

    console.log(catList);

    return (
        <CustomView safe style={[globalTheme.mainContainer]}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ButtonBack />
                <View style={styles.centeredView}>
                    <Title text='Busqueda' />
                </View>
            </View>

            <TextInput
                placeholder="Buscar Raza"
                mode="flat"
                autoFocus
                autoCorrect={false}
                style={[styles.input,{ marginHorizontal: 20, marginBottom: 10 }]}
                onChangeText={setTerm}
                value={term}
                textColor={theme.varts.text}
                
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
                ListEmptyComponent={
                    ( term === '' ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                            <Text style={{ fontSize: 18, color: 'gray' }}>Por favor, ingrese un término de búsqueda</Text>
                        </View>
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                            <Text style={{ fontSize: 18, color: 'gray' }}>No se encontraron resultados</Text>
                        </View>
                    )
                }
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
        width: '73%',
        alignItems: 'center',
    },
    input: {
        color: 'blue', 
    }
})