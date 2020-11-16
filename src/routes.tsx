import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListMovies from './Views/ListMovies';
import ListFavorites from './Views/ListFavorites';

import { useFavorite } from './hooks/favorites'


const Routes = () => {

    const { listFavorites } = useFavorite();

    let totalFavorites = 0;

    if (listFavorites) {
        totalFavorites = listFavorites.length
    }

    return (
        <Tab.Navigator
            initialRouteName="ListMovies"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';

                    if (route.name === 'ListMovies') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'ListFavorites') {
                        iconName = focused ? 'star' : 'star-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#e50914',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="ListMovies" component={ListMovies} options={{ title: 'Procurar' }} />
            <Tab.Screen name="ListFavorites" component={ListFavorites} options={{ title: 'Favoritos', tabBarBadge: totalFavorites }} />
        </Tab.Navigator>
    )

}

export default Routes;