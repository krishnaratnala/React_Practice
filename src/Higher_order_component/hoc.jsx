
import React, { useEffect, useState } from 'react';

const withDataFetching = (url) => (WrappedComponent) => {
    return (props) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true); // Set to true initially
        const [error, setError] = useState(null);

        useEffect(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }, [url]);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error loading data</p>;
        
        return <WrappedComponent {...props} data={data} />;
    };
};

// Component to be wrapped
const ProductList = ({ data }) => {
    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}>{item.name}</li> // Assumes `data` items have a `name` property
            ))}
        </ul>
    );
};

// Using the HOC
const ProductListWithData = withDataFetching(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
)(ProductList);

export default ProductListWithData;
