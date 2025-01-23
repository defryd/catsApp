import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
    safe?: boolean;
}

export const CustomView = ({ style, children, margin = false, safe = false }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={[
            globalTheme.mainContainer,
            margin ? globalTheme.globalMargin : null,
            { marginTop: safe ? top : 0 },
            style
        ]}>
            {children}
        </View>
    )
}