import { useContext } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ImageStyle>;
}

export const FootBg = ({ style }: Props) => {

    const { isDark } = useContext(ThemeContext);

    const footImg = isDark
        ? require('../../../assets/foot-light.png')
        : require('../../../assets/foot-dark.png')


    return (
        <Image
            source={footImg}
            style={[
                {
                    width: 300,
                    height: 300,
                    opacity: 0.3,
                },
                style,
            ]}
        />
    )
}