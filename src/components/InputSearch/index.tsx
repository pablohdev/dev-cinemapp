import React from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';

import { ContainerInput, TextInput, Icon } from './styles';

interface ITextInput extends TextInputProps {
    search(): void
}

const InputSearch: React.FC<ITextInput> = ({ search, ...rest }: ITextInput) => {
    return (
        <ContainerInput>
            <TextInput {...rest} />
            <TouchableOpacity onPress={() => search()}>
                <Icon name='search' color="#e50914" size={24} />
            </TouchableOpacity>
        </ContainerInput>
    );
}

export default InputSearch;