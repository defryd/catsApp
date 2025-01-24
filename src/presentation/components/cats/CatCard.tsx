import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Breed } from '../../../domain/entities/breed';
import { Button, Card, Text } from 'react-native-paper';
import { FadeInImage } from '../ui/FadeInImage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
    data: Breed;
}

export const CatCard = ({ data }: Props) => {

    const { theme } = useContext(ThemeContext);

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Card style={[styles.cardContainer, { backgroundColor: theme.varts.cardBackground }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.text, { color: theme.varts.text, fontWeight: 500 }]}><Text style={{ fontWeight: 'bold' }}>Breed name:</Text> {data.name}</Text>
                <Button
                    style={{ borderRadius: 10, marginBottom: 5 }}
                    onPress={() => navigation.navigate('CatScreen', { catId: data.id, cat: data })}
                >
                    <Text style={[styles.text, {fontWeight: 'bold'}]}>See more</Text>
                </Button>
            </View>
            <View>
                {data?.image ?
                    <FadeInImage uri={data.image.url} style={styles.image} />
                    :
                    <View style={styles.centeredContainer}>
                        <Image source={require('../../../assets/no-image.png')} style={styles.image} />
                        <Text style={[styles.textNoImage, { color: theme.varts.text }]}>No image in database</Text>
                    </View>
                }
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.text, { color: theme.varts.text }]}><Text style={{ fontWeight: 'bold' }}>Origin:</Text> {data.origin}</Text>
                <Text style={[styles.text, { color: theme.varts.text }]}><Text style={{ fontWeight: 'bold' }}>Intelligence: </Text> {data.intelligence}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        flex: 0.5,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        height: 210,
        width: '100%',
        // borderRadius: 10,
    },
    text: {
        fontSize: 15,
        margin: 10,
    },
    centeredContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNoImage: {
        color: 'white',
        // top: 10,
        // left: 10,
        margin: 10,
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
