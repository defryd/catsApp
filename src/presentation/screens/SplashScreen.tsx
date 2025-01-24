import React, { useContext, useEffect } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { CustomView } from '../components/ui/CustomView';
import { globalTheme } from '../../config/theme/global-theme';
import { Title } from '../components/ui/Title';


interface Props extends StackScreenProps<RootStackParams,'SplashScreen'>{};

const SplashScreen = ({ navigation }: Props) => {
    
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomeScreen');
        }, 3000);
    }, [navigation]);

    return (
        <CustomView style={[globalTheme.mainContainer, styles.container]}>
            <Title text='CatBreeds' />
            <Image source={require('../../assets/cat.png')} style={styles.image}/>
        </CustomView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        marginTop: 20,
        height: 300,
        width: 300,
    }
});

export default SplashScreen;