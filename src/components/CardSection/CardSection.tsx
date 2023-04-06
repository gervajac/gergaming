import React from 'react';
import Card from '../Card/Card';
import { SideBar } from '../SideBar';
export interface CardSectionProps {}

const CardSection : React.FC<CardSectionProps> = () => {
	return (
		<>
		<div className="flex justify-normal w-full">
		<SideBar/>
		<Card/>
		</div>
		</>
	);
};

export default CardSection;
