import React, { useEffect, useState } from 'react';
import LaundryService from './LaundryService';

const LaundryServices = () => {
    const [laundryServices, setLaundryServices] = useState([])

    useEffect(() => {
        fetch('https://mocki.io/v1/e2bd6212-a055-495c-bc27-64241c7f92ec')
        .then(res => res.json())
        .then(data => setLaundryServices(data))
      }, []);

    return (
        <div className="container mt-5">
            <h2 className="d-flex justify-content-center mb-4">LAUNDRY ITEMS</h2>
            <div className="row">
                {
                    laundryServices.map(laundry => <LaundryService laundry={laundry}/>)
                } 
            </div>
        </div>
    );
};

export default LaundryServices;