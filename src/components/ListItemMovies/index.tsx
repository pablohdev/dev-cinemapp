import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    Item,
    ItemTitle,
    FotoItemContainer,
    FotoItem,
    ItemInfoContainer,
    ItemInfoText,
    ContainerFavoriteItem
} from './styles';



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
    addFavorite(item: IResponseSearch): void
    removeFavorite(imdbID: string): void
    handleAddFavorite(imdbID: string): void
    handleRemoveFavorite(imdbID: string): void
}




const ListItemMovies: React.FC<IResponseData> = ({ item, addFavorite, removeFavorite, handleAddFavorite, handleRemoveFavorite }: IResponseData) => {

    function handeFavorite() {

        if (item.isFavorite) {
            removeFavorite(item.imdbID);
            handleRemoveFavorite(item.imdbID);
        } else {
            addFavorite(item);
            handleAddFavorite(item.imdbID)
        }
    }

    return (
        <Item key={item.imdbID}>
            <FotoItemContainer>
                <FotoItem source={{ uri: item.Poster }} />
            </FotoItemContainer>
            <ItemInfoContainer>
                <ItemTitle>{item.Title}</ItemTitle>
                <ItemInfoText>{item.Type} - {item.Year}</ItemInfoText>
            </ItemInfoContainer>
            <ContainerFavoriteItem onPress={() => handeFavorite()}>
                <Ionicons
                    name={item.isFavorite ? 'star' : 'star-outline'}
                    color={item.isFavorite ? 'yellow' : 'grey'}
                    size={24}
                />
            </ContainerFavoriteItem>
        </Item>
    );
}

export default ListItemMovies;