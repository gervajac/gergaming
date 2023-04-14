import React, { useEffect } from 'react';
import { Context } from '../context/Context';
import { useContext } from 'react';
import { useParams } from "react-router-dom";
export interface ItemDetailProps {}

const ItemDetail : React.FC<ItemDetailProps> = () => {
const {getItemDetails, state} = useContext(Context)
let {id} = useParams();

useEffect(() => {
	getItemDetails(id);
}, []);
console.log(state, "ESTADO")

	return (
		<>
		asdasd
		</>
	);
};

export default ItemDetail;
