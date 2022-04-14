import React, { useState } from 'react';
import homeimg1 from "./images/homeimg1.jpg"
import Howitwork from './Howitwork';
const Home = () => {
    const [data, setData] = useState("");
    const onSubmits = (e) => {
        e.preventDefault();
        setData(e.target.value)
        if (data === "") {
            alert("Please enter your email")
        } else { alert("Payment link have ben sent your email") }
    }

    return <>
    <header>
        <section  className='container main-hero-container '>
            
                <div className='row '>
                    <div className='col-12  d-flex flex-coloumn'>
                        <div className='row'>

                            <div className='col-12 col-lg-6  pt-5 pt-lg-0 order-2 order-lg-1 ' >
                                <h1 className='home'>Hello,</h1>
                                <h2> Welcome to MoneyPe,</h2>
                                <h2 > <strong>India's</strong> largest online banking platform</h2>
                                <hr />
                                <h3 className='h3home'> Get extra benifits by becoming our premium Partner</h3>
                                <form onSubmit={onSubmits}>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email ' />
                                        <div id="emailHelp" className="form-text"  >We'll never share your email with anyone else.</div>
                                    </div>

                                    <button type="submit" className="btn btn-dark ">Submit</button>
                                </form>
                               </div>
                           
                            <div className='col-lg-6 order-1 order-lg-2 header-img pt-5 main-herosection-images'>
                                <img src={homeimg1} className='img-fluid animated' alt='thumbnail' />
                               
                            </div>
                            
                        </div>
                    </div>

                    <div className='body'><Howitwork/></div>
                </div>
        
        </section >
       
        </header>
        
        
        
    </>;
};

export default Home;
