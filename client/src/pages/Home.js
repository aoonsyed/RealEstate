import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Carousel from '../pages/Carousel.js'
import Container from './Container'
import Trending from './Trending'
import Inventory from './Inventory'
import axios from 'axios'
// import Property from './Property'



const Home = () => {
    const [errorMessages, setErrorMessages] = useState([]);
    const [name, setName] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/users");
                const data = response.data; // Define 'data' here
                console.log(data)
                setName(data.name);
            } catch (error) {
             
            }
        }
    
        fetchData();
    }, []);
    

    return (
        <>
            <Header />
            <Carousel />
            <Container />
            <Trending />
            {/* <Property/> */}
            <Inventory />
            <Footer />
        </>
    )
}

export default Home