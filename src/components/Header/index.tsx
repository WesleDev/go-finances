import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo1.png';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <a href="/">
        <img src={Logo} alt="GoFinances" />
      </a>
      <nav>
        <a href="/">Sair</a>
      </nav>
    </header>
  </Container>
);

export default Header;
