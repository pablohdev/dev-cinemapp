import styled from 'styled-components/native';

export const Item = styled.View`

    width: 100%;
    margin: 10px 0;
    padding:10px;
    background-color: #FFF;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


`

export const ItemTitle = styled.Text`

    font-size: 18px;
    font-family: 'Lato-Bold';
    margin: 10px 0;

`

export const ItemInfoText = styled.Text`

    font-size: 12px;
    font-family: 'Lato-Regular';
    margin: 10px 0;

`
export const FotoItemContainer = styled.View`
    flex:1;
`


export const ItemInfoContainer = styled.View`
    flex:2;
    margin-left:20px;
`


export const FotoItem = styled.Image`
    width: 100%;
    height:120px;
    margin-right: 20px;
`

export const ContainerFavoriteItem = styled.TouchableOpacity`

    flex:1;

    display: flex;
    justify-content:flex-end;
    align-items:center;


`