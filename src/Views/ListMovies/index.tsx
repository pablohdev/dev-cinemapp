import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native'
import { useFavorite } from '../../hooks/favorites'
import {
    Container,
    ImageContainer,
    ImageView,
    TextImage,
    TextResult,
    LoadingView,
    LoadingText,
    ContainerListMovies
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header'
import InputSerch from '../../components/InputSearch'
import ListItemMovies from '../../components/ListItemMovies'

import welcomeImage from '../../assets/images/welcome.png';

interface IResponseSearch {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
    isFavorite?: boolean;
}

interface IResponseData {
    item: IResponseSearch;
}


const ListMovies: React.FC = () => {

    const [search, setSearch] = useState('');
    const [loadSearch, setLoadSearch] = useState(false);

    const [totalResult, setTotalResult] = useState(0);
    const [listMovies, setListMovies] = useState<IResponseSearch[]>([])


    const { listFavorites, addFavorite, removeFavorite } = useFavorite();

    useEffect(() => {
        updateFavorites();
    }, [listFavorites])


    async function getListFilm() {

        if (!search) {
            return;
        }

        setLoadSearch(true)

        const response = await api.get(`?apikey=925eba28&s=${search}`);

        let newResults: IResponseSearch[] = [];

        if (response.data.Search) {
            newResults = response.data.Search.map((item: IResponseSearch) => {
                return {
                    ...item,
                    isFavorite: listFavorites.find(favorite => favorite.imdbID == item.imdbID) || false
                }
            })
        }


        setListMovies(newResults)
        setTotalResult(response.data.totalResults)
        setLoadSearch(false)

    }

    function updateFavorites() {

        const newResults = listMovies.map((item: IResponseSearch) => {
            return {
                ...item,
                isFavorite: listFavorites.find(favorite => favorite.imdbID == item.imdbID) || false
            }
        })

        setListMovies(newResults)
    }

    function handleAddFavorite(imdbID: string) {

        const newResults = listMovies.map((item: IResponseSearch) => {

            if (item.imdbID === imdbID) {
                return { ...item, isFavorite: true }
            } else {
                return item
            }
        })

        setListMovies(newResults)

    }

    function handleRemoveFavorite(imdbID: string) {

        const newResults = listMovies.map((item: IResponseSearch) => {

            if (item.imdbID === imdbID) {
                return { ...item, isFavorite: false }
            } else {
                return item
            }
        })

        setListMovies(newResults)

    }

    const renderItem = ({ item }: IResponseData) => {
        return <ListItemMovies item={item} handleRemoveFavorite={handleRemoveFavorite} handleAddFavorite={handleAddFavorite} addFavorite={addFavorite} removeFavorite={removeFavorite} />
    }

    return (
        <Container>
            <Header title="Procurar Filmes" subtitle="Bem vindo ao mundo espetacular do cinema" />
            <InputSerch
                search={getListFilm}
                placeholder="Faça sua busca aqui"
                defaultValue={search}
                onChangeText={text => setSearch(text)}
                autoCapitalize='none'
            />
            {loadSearch ? (
                <LoadingView>
                    <ActivityIndicator color="#e50914" size={32} />
                    <LoadingText>Buscando aguarde...</LoadingText>
                </LoadingView>
            ) : (

                    totalResult == 0 ? (
                        <>
                            <ImageContainer>
                                <ImageView style={{ resizeMode: 'contain' }} source={welcomeImage} />
                                <TextImage>Procure seu titulo favorito =D</TextImage>
                            </ImageContainer>
                        </>
                    ) : (
                            <ContainerListMovies>
                                <TextResult>Total Encontrado {totalResult}</TextResult>
                                <FlatList
                                    data={listMovies}
                                    renderItem={renderItem}
                                    ListFooterComponent={<View />}
                                    ListFooterComponentStyle={{
                                        height: 80,
                                    }}
                                    keyExtractor={(item) => item.imdbID}
                                />
                            </ContainerListMovies>
                        )
                )}
        </Container >
    );
};


export default ListMovies;
