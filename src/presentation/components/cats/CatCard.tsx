import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Breed } from '../../../domain/entities/breed';
import { Button, Card, Text } from 'react-native-paper';
import { FadeInImage } from '../ui/FadeInImage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/StackNavigator';

interface Props {
    data: Breed;
}

export const CatCard = ({data}: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Card style={[styles.cardContainer]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>Nombre de raza: {data.name}</Text>
                <Button
                style={{  borderRadius: 10, marginBottom: 10 }}
                    onPress={() => navigation.navigate('CatScreen', { catId: data.id, cat: data })}
                >
                    <Text style={styles.text}>Ver mas</Text>
                </Button>
            </View>
            <View>
                {data?.image ?
                    <FadeInImage uri={data.image.url} style={styles.image} />
                    : 
                    <View style={styles.centeredContainer}>
                    <Image source={require('../../../assets/no-image.png')} style={styles.image} />
                    <Text style={styles.textNoImage}>No image in database</Text>
                  </View>
                }
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>Pais de origen: {data.origin}</Text>
                <Text style={styles.text}>Inteligencia: {data.intelligence}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'grey',
        // height: 200,
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
        color: 'white',
        // top: 10,
        // left: 10,
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
