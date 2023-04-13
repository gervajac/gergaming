import React from 'react';
import { NavBar } from '../../components/NavBar';
import { SearchBar } from '../../components/SearchBar';
import { Carrousel } from '../../components/Carrousel';
import { Footer } from '../../components/Footer';
export interface WelcomeProps {}

const Welcome : React.FC<WelcomeProps> = () => {
	return (
		<>
		<NavBar/>
		<SearchBar/>
		<Carrousel/>
		<Footer/>
		</>
	);
};

export default Welcome;
