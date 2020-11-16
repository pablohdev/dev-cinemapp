import React, { createContext, useEffect, useState, useCallback, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import ListFavorites from '../Views/ListFavorites';

interface IFavoriteContextData {
    listFavorites: Array<IListMovieState>;
    addFavorite(item: IListMovieState): Promise<void>;
    removeFavorite(imdbID: string): Promise<void>

}

interface IListMovieState {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
    isFavorite: boolean;
}

const FavoriteContext = createContext<IFavoriteContextData>({} as IFavoriteContextData);



const FavoriteProvider: React.FC = ({ children }) => {

    const [listFavorites, setListFavorites] = useState<IListMovieState[]>([]);

    useEffect(() => {

        async function loadStorageData(): Promise<void> {

            const listFavorites = await AsyncStorage.getItem('listFavorites');

            if (listFavorites) {
                setListFavorites(JSON.parse(listFavorites))
            }
        }

        loadStorageData();

        console.log('atualizando favoritos')

    }, [])

    const addFavorite = useCallback(async (item: IListMovieState) => {


        const newListFavorites = [...listFavorites, { ...item, isFavorite: true }]

        setListFavorites(newListFavorites)

        await AsyncStorage.setItem('listFavorites', JSON.stringify(newListFavorites));


    }, [listFavorites])


    const removeFavorite = useCallback(async (imdbID) => {

        const removeFavorite = listFavorites.filter(list => list.imdbID !== imdbID)


        setListFavorites(removeFavorite)

        await AsyncStorage.setItem('listFavorites', JSON.stringify(removeFavorite));

    }, [listFavorites])

    return (
        <FavoriteContext.Provider value={{ listFavorites, addFavorite, removeFavorite }} >
            {children}
        </FavoriteContext.Provider>
    )

}

function useFavorite(): IFavoriteContextData {

    const context = useContext(FavoriteContext)

    return context
}


export { FavoriteProvider, useFavorite }