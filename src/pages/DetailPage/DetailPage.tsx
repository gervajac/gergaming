import React from 'react';
import { ItemDetail } from '../../components/ItemDetail';
import { Provider } from '../../components/context/Provider';
export interface DetailPageProps {}

const DetailPage : React.FC<DetailPageProps> = () => {
	return (
		<Provider>
		<ItemDetail/>
		</Provider>
	);
};

export default DetailPage;
