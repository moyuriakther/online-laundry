import React, { useEffect, useState } from 'react';
import Blog from './Blog';


const Blogs = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://mocki.io/v1/a5cfc209-134e-4f7c-ae57-4e81d1215920')
      .then(res => res.json())
      .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div>
            {
                data.map(data =><Blog data={data} key={data.name}/>)
            }
        </div>
    );
};

export default Blogs;