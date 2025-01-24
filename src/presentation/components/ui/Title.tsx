import { StyleProp, Text, ViewStyle } from 'react-native'
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
    style?: StyleProp<ViewStyle>;
    text?: string;
    safe?: boolean;
}

export const Title = ({style, text, safe = false }: Props) => {

    const { theme } = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();

    return (
        <Text
            style={[{
                ...globalTheme.title,
                color: theme.varts.text,
                marginBottom: 10,
                marginTop: safe ? top : 0,
            },
            style
        ]
        }
        >{text}
        </Text>
    )
}