import React from 'react';
import { NavBar } from '../../components/NavBar';
import { CardSection } from '../../components/CardSection';
export interface HomeProps {}

const Home : React.FC<HomeProps> = () => {
	return (
		<>
		<NavBar/>
		<CardSection/>
		</>
	)
};

export default Home;
