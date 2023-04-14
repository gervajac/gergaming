import React from 'react';
import { NavBar } from '../../components/NavBar';
import { SearchBar } from '../../components/SearchBar';
import { Carrousel } from '../../components/Carrousel';
import { Footer } from '../../components/Footer';
import img from "../../assets/GERTECHbann.jpg"
export interface WelcomeProps {}

const Welcome : React.FC<WelcomeProps> = () => {
	return (
		<>
		<SearchBar/>
		<img className='flex justify-center max-h-[400px] w-screen' src={img}></img>
		</>
	);
};

export default Welcome;
