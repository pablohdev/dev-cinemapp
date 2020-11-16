import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ContainerInput = styled.View`

    width:100%;
    display:flex;
    border-radius: 5px;
    border: 1px solid #CDCDCD;
    justify-content:space-between;
    flex-direction: row;
    align-items:center;
    padding: 5px 10px;
    margin: 10px 0;
    background-color: #FFF;
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #2F3951;
  font-size: 16px;
  font-family: 'Lato-Regular';
`
export const Icon = styled(Ionicons)`
  margin-left: 10px;
`