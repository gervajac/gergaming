import React from 'react';
import { NavBar } from '../../components/NavBar';
import { CardSection } from '../../components/CardSection';
import { Provider } from '../../components/context/Provider';
import { Footer } from '../../components/Footer';
import { SearchBar } from '../../components/SearchBar';
export interface HomeProps {}

const Home : React.FC<HomeProps> = () => {
	return (
		<>
		<SearchBar/>
		<CardSection/>
		</>

	)
};

export default Home;
