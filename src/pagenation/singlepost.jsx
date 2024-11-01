import React, { useState, useEffect } from "react";
import CryptoList from "./CryptoList";
import axios from "axios";
import "./SinglePost.css";
import Loader from "./loader";
//import Pagenation from "./pagenatin";   // <Pagenation totalposts={coinsData.length} postPerPage={postPerPage} setCurrentpage={setCurrentPage} />

function SinglePost() {
    const [coinsData, setCoinsData] = useState([]);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage] = useState(8);

    useEffect(() => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`)
            .then((res) => {
                setCoinsData((prev) => [...prev, ...res.data]);
                setLoader(false);  // Set loader to false after successful response
            })
            .catch((err) => {
                console.error("Error fetching data: ", err);
                setLoader(false);  // Set loader to false in case of error
            });
    }, [page]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setLoader(true)
            setPage((prev) => prev + 1);  // Increment page on reaching bottom
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // const lastPostIndex = currentPage * postPerPage;
    // const firstPostIndex = lastPostIndex - postPerPage;
    // const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="app">
            <h1>Crypto Gallery</h1>
            <CryptoList coinsData={coinsData} />
            {loader && <Loader />} {/* Show loader conditionally */}
        </div>
    );
}

export default SinglePost;
