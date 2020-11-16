import React from 'react';
import { FlatList, View } from 'react-native'
import {
    Container,
    ImageContainer,
    ImageView,
    TextImage,
    ContainerListMovies,
} from './styles';


import Header from '../../components/Header'
import favoriteImage from '../../assets/images/favorite.png'
import ListItemMovies from '../../components/ListItemMovies'

import { useFavorite } from '../../hooks/favorites'

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



const ListFavorites: React.FC = () => {

    const { listFavorites, addFavorite, removeFavorite } = useFavorite();

    function handleAddFavorite(imdbID: string) {
        return
    }

    function handleRemoveFavorite(imdbID: string) {
        return
    }

    const renderItem = ({ item }: IResponseData) => {
        return <ListItemMovies handleAddFavorite={handleAddFavorite} handleRemoveFavorite={handleRemoveFavorite} item={item} addFavorite={addFavorite} removeFavorite={removeFavorite} />
    }

    return (
        <Container>
            <Header title="Favoritos" subtitle="Para não esquecer os que você mais gostou" />
            {listFavorites ? (
                <ContainerListMovies>
                    <FlatList
                        data={listFavorites}
                        renderItem={renderItem}
                        ListFooterComponent={<View />}
                        ListFooterComponentStyle={{
                            height: 80,
                        }}
                        keyExtractor={(item) => item.imdbID}
                    />
                </ContainerListMovies>
            ) : (
                    <ImageContainer>
                        <ImageView style={{ resizeMode: 'contain' }} source={favoriteImage} />
                        <TextImage>Nenhum favorito ainda =(</TextImage>
                    </ImageContainer>
                )}
        </Container>
    );
};

export default ListFavorites;
