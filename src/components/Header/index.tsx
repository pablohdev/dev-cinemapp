import React from 'react';

import { HeaderContainer, TitleHeader, SubtitleHeader } from './styles';

interface IHeader {
    title: string;
    subtitle: string
}

const Header: React.FC<IHeader> = ({ title, subtitle }: IHeader) => {
    return (
        <HeaderContainer>
            <TitleHeader>{title}</TitleHeader>
            <SubtitleHeader>{subtitle}</SubtitleHeader>
        </HeaderContainer>
    );
};

export default Header;
