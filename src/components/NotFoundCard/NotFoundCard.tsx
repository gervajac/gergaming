import React from 'react';

export type NotFoundCardProps = {
}

const NotFoundCard: React.FC<NotFoundCardProps> = () => {
	return (
		<div className="flex flex-row pl-1 min-w-[880px] m-2 max-h-[200px] max-w-[500px] rounded  bg-white shadow-md shadow-gray-500">
			<img
			  className="hidden md:flex pt-1 rounded-t-lg max-h-[150px] w-[250px]"
			  src="https://static.vecteezy.com/system/resources/previews/005/006/031/non_2x/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg"
			  alt="product image"
			/>
		  <div className="flex-col p-6 pb-5">

			  <span className="text-xl italic tracking-tight text-gray-900 dark:text-white">
				No se ha encontrado ningún producto
			  </span>
			<div className="flex items-center mt-2.5 mb-5">
			<span className="text text-xl font-sans font-bold text-gray-900 dark:text-white">
				$ -
			  </span>
			</div>
			<div className="flex items-center mt-2.5 mb-5">

			</div>
		  </div>
		</div>
	  );;
};

export default NotFoundCard;
