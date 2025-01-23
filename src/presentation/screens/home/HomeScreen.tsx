import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, Button, FAB, Text, useTheme } from 'react-native-paper'
import { getBreeds } from '../../../actions/cats';
import { useInfiniteQuery } from '@tanstack/react-query';
import { FootBg } from '../../components/ui/FootBg';
import { CustomView } from '../../components/ui/CustomView';
import { globalTheme } from '../../../config/theme/global-theme';
import { FlatList } from 'react-native-gesture-handler';
import { CatCard } from '../../components/cats/CatCard';
import { RootStackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams,'HomeScreen'>{};


export const HomeScreen = ({ navigation }: Props) => {

    // const {isLoading, data: breeds = []} = useQuery({ queryKey: ['breeds'], queryFn: () => getBreeds(0), staleTime: 1000 * 60 * 5 });
    const theme = useTheme();
    
    const {isLoading, data, fetchNextPage } = useInfiniteQuery({ 
        queryKey: ['breeds', 'infinite'], 
        initialPageParam: 0,
        queryFn: ( params ) => getBreeds(params.pageParam),
        // getNextPageParam: (lastPage, allPages) => lastPage.length === 10 ? allPages.length : false, 
        getNextPageParam: (lastPage, pages) => pages.length,
        staleTime: 1000 * 60 * 5 
    });

    return (
        <CustomView safe style={[globalTheme.mainContainer]}>
            <FootBg style={styles.imgPosition} />
            <View style={globalTheme.globalMargin}>
                <FlatList
                    data={data?.pages?.flat() ?? []}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <View>
                            <CatCard data={item} />
                            {/* <Text>{item.id}</Text> */}
                        </View>
                    )}
                    ListHeaderComponent={() => (
                        <View>
                            <Text>Breads</Text>
                        </View>
                    )}
                    onEndReachedThreshold={0.6}
                    onEndReached={() => fetchNextPage()}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <FAB
                label="Buscar"
                style={[globalTheme.fab, { backgroundColor: theme.colors.primary }]}
                mode="elevated"
                color={theme.dark ? 'black' : 'white'}
                onPress={() => navigation.push('SearchScreen')}
            />
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
});