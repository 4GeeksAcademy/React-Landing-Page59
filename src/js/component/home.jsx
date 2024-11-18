import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";




//create your first component

const Home = () => {
	return (
    <div>
		<Navbar/>
		<Jumbotron/>


     <div className="d-flex justify-content-center py-5 gap-4 ">
	 <Card/>
	 <Card/>
	 <Card/>
	 <Card/>
	 </div>

	 <Footer/>



    </div>

	);
};

export default Home 
