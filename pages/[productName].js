import React from "react";
import Data from "../data.json";

function Product({ productData }) {
	return (
		<>
			<div className="main-container">
				<p className="product__page__title">
					<span>{productData.title}</span>
				</p>
				<div>
					<figure className="image is-4x3">
						<img src={productData.src} alt="" />
					</figure>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps({ params: { productName } }) {
	const productData = Data.filter((item) => item.title === productName)[0];
	return {
		props: {
			productData: productData,
		},
	};
}

export function getStaticPaths() {
	const paths = Data.map((item) => ({
		params: { productName: item.title },
	}));
	return {
		paths: paths,
		fallback: false,
	};
}

export default Product;
