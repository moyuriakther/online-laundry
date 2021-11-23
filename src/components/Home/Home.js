import React from 'react';
import laundryImage from '../../media/lundry.jpeg';
// import services from '../../fakeData/service.JSON';
import Service from './Service';

const Home = () => {
    const serviceStyle = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const services = [
        {
          "category": "Laundry Service",
          "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32e30c20-24b9-446e-a9ea-d169018957e6/de9m13g-2b92de50-9452-4642-8ff6-21669d96c774.jpg/v1/fill/w_960,h_540,q_75,strp/laundry_service_in_discovery_gardens_by_purezonelaundry_de9m13g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQwIiwicGF0aCI6IlwvZlwvMzJlMzBjMjAtMjRiOS00NDZlLWE5ZWEtZDE2OTAxODk1N2U2XC9kZTltMTNnLTJiOTJkZTUwLTk0NTItNDY0Mi04ZmY2LTIxNjY5ZDk2Yzc3NC5qcGciLCJ3aWR0aCI6Ijw9OTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.j3nw6Uhf5M25usTM3XslZfV62Bl6904OQet3Jl7uHaw"
        },
        {
          "category": "Dry Cleaning Service",
          "img": "https://junkmailimages.blob.core.windows.net/large/2940537fa59f4e1ea2591efa1113727d.jpg"
        },
        {
          "category": "Iron Service",
          "img": "https://st2.depositphotos.com/5624298/12418/i/600/depositphotos_124186854-stock-photo-electric-iron-and-shirts.jpg"
        }
      ]
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <img style={{height:"300px", width:"500px", borderRadius: "5px"}} src ={laundryImage}/>
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                        <h5>Search Your Location</h5>
                        <input type="text" placeholder="City"/>
                        <input type="text" placeholder="Area"/>  <br />
                        <button style={{ padding:"5px 150px"}} className="btn-main mt-2">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {
                        services.map(service => <Service service={service}/>)
                    }
                </div>
            </div>
            <div>
                
            </div>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;