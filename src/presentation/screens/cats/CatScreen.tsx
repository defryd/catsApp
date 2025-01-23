import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { globalTheme } from '../../../config/theme/global-theme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator';
import { Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'CatScreen'> {}


export const CatScreen = ({ navigation, route }: Props) => {

    const { catId, cat } = route.params;

    return (
        <CustomView safe style={[globalTheme.mainContainer]}>
            <View style={{ flexDirection: 'row', backgroundColor: 'red', height: 60, paddingVertical: 10, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: 'blue', padding: 10 }}>
                    <Text>Go back</Text>
                </TouchableOpacity>

                <Text style={styles.title}>{cat.name}</Text>
            </View>
            
            {cat?.image ?
                <Image source={{ uri: cat.image.url }} style={styles.catImage} />
                :
                <View style={styles.centeredContainer}>
                    <Image source={require('../../../assets/no-image.png')} style={styles.image} />
                    <Text style={styles.textNoImage}>No image in database</Text>
                </View>
            }

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.infoContainer}>

                    <Text style={styles.infoText}>Temperament: {cat.temperament}</Text>
                    <Text style={styles.infoText}>Origin: {cat.origin}</Text>
                    <Text style={styles.infoText}>Description: {cat.description}</Text>
                    <Text style={styles.infoText}>Life Span: {cat.life_span}</Text>
                    <Text style={styles.infoText}>Adaptability: {cat.adaptability}</Text>
                    <Text style={styles.infoText}>Affection Level: {cat.affection_level}</Text>
                    <Text style={styles.infoText}>Child Friendly: {cat.child_friendly}</Text>
                    <Text style={styles.infoText}>Dog Friendly: {cat.dog_friendly}</Text>
                    <Text style={styles.infoText}>Energy Level: {cat.energy_level}</Text>
                    <Text style={styles.infoText}>Grooming: {cat.grooming}</Text>
                    <Text style={styles.infoText}>Health Issues: {cat.health_issues}</Text>
                    <Text style={styles.infoText}>Intelligence: {cat.intelligence}</Text>
                    <Text style={styles.infoText}>Social Needs: {cat.social_needs}</Text>
                    <Text style={styles.infoText}>Stranger Friendly: {cat.stranger_friendly}</Text>
                    <Text style={styles.infoText}>Wikipedia: {cat.wikipedia_url}</Text>
                </View>
            </ScrollView>

        </CustomView>
    )
}

const styles = StyleSheet.create({
    imgPosition: {
        position: 'absolute',
        top: -20,
        right: -100,
        transform: [{ rotate: '-45deg' }],
    },
    title: {
        left: '25%',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    catImage: {
        width: '90%',
        height: 300,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 10,
    },
    infoContainer: {
        padding: 20,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 2,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    image: {
        height: 300,
        width: '100%',
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