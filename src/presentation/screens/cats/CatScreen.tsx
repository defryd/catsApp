import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { globalTheme } from '../../../config/theme/global-theme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator';
import { Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonBack } from '../../components/ui/ButtonBack';
import { Title } from '../../components/ui/Title';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { FootBg } from '../../components/ui/FootBg';

interface Props extends StackScreenProps<RootStackParams, 'CatScreen'> {}


export const CatScreen = ({ route }: Props) => {

    const { theme } = useContext(ThemeContext);

    const { catId, cat } = route.params;

    const renderDots = (count: number) => {
        return (
            <Text>
                {Array.from({ length: count }, (_, i) => (
                    <Text key={i} style={{ color: theme.varts.start, fontSize: 25 }}>★</Text>
                ))}
            </Text>
        );
    };

    const catAttributes = [
        { label: 'Description', value: cat?.description },
        { label: 'Temperament', value: cat?.temperament },
        { label: 'Country of Origin', value: cat?.origin },
        { label: 'Life Span', value: cat?.life_span },
        { label: 'Adaptability', value: renderDots(cat?.adaptability) },
        { label: 'Affection Level', value: renderDots(cat?.affection_level) },
        { label: 'Child Friendly', value: renderDots(cat?.child_friendly) },
        { label: 'Dog Friendly', value: renderDots(cat?.dog_friendly) },
        { label: 'Energy Level', value: renderDots(cat?.energy_level) },
        { label: 'Grooming', value: renderDots(cat?.grooming) },
        { label: 'Health Issues', value: renderDots(cat?.health_issues) },
        { label: 'Intelligence', value: renderDots(cat?.intelligence) },
        { label: 'Social Needs', value: renderDots(cat?.social_needs) },
        { label: 'Stranger Friendly', value: renderDots(cat?.stranger_friendly) },
        { label: 'Wikipedia', value: cat?.wikipedia_url, isLink: true },
      ];

    return (
        <CustomView safe style={[globalTheme.mainContainer]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 2 }}>
                <ButtonBack />
                <View style={styles.centeredView}>
                    <Title text='Busqueda' />
                </View>
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
                    {catAttributes.map((attr, index) => (
                        attr.isLink ? (
                            <TouchableOpacity key={index} onPress={() => Linking.openURL(attr.value)} style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                                <Text style={[styles.infoText, { color: theme.varts.text, fontWeight: 'bold' }]}>{attr.label}: </Text>
                                <Text style={[styles.infoText, { color: theme.varts.link, textDecorationLine: 'underline' }]}>Pick me</Text>
                            </TouchableOpacity>
                        ) : (
                            <Text key={index} style={[styles.infoText, { color: theme.varts.text }]}>
                                <Text style={[styles.infoText, { color: theme.varts.text,  fontWeight: 'bold' }]}>{attr.label}:</Text> {attr.value}
                            </Text>
                        )
                    ))}
                </View>
            </ScrollView>
            <FootBg style={styles.footBg} />
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
    centeredView: {
        width: '65%',
        alignItems: 'center',
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
        borderRadius: 20,
    },
    infoContainer: {
        padding: 20,
    },
    infoText: {
        fontSize: 18,
        marginVertical: 5,
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
        margin: 10,
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 20,
    },
    footBg: {
        position: 'absolute',
        bottom: -20,
        right: -40,
        opacity: 0.2,
        width: 200,
        height: 200,
        zIndex: -1,
        transform: [{ rotate: '-45deg' }],
    },
});