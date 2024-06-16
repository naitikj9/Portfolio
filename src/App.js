import React from 'react';
import AboutMePage from './All Component/About/AboutMe.js';
import './App.css';
import Component from './All Component/Component/Component.js';
import Navbar from './All Component/Navbar/Navbar.js';
import Tile from './All Component/Tile/Tile.js';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from './All Component/Footer/Footer.js';

function App() {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 10 : 100));
  //   }, 1000);

  //   return () => clearInterval(interval); 
  // }, []);

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Component />
      <div className='color-setter'>
        
        <h1 className='skill'>Skills</h1>
        <div className='tiles-container'>
          <Tile
          header={"SpringBoot framework"}
          subHeader={"Used Spring Framework to made many projects like paymeetn gateway,Car rental and many more"}
          img={"https://www.yessinfotech.com/wp-content/uploads/2019/11/spring-boot-logo.png"}
          text={""}
          link={""}
          linkText={""}
          position={"left"}
          />
          <Tile
          header={"Web Devlopment"}
          subHeader={"Know HTML,CSS,JavScript"}
          img={"https://as1.ftcdn.net/v2/jpg/03/21/24/30/1000_F_321243084_GstfWflk1eTLlzUdRZ5mjoP5IG1iCc8J.jpg"}
          text={""}
          link={""}
          linkText={""}
          position={"center"}
          />
          <Tile
          header={"Java"}
          subHeader={"Also Did DSA in java"}
          img={"https://user-images.githubusercontent.com/102843159/211679770-ba6259bb-e87b-4932-b59c-f283d2628d7b.jpg"}
          text={""}
          link={""}
          linkText={""}
          position={"right"}
          />
        </div>
        <h1 className='Projects'>Projects</h1>
        <div className="tiles-container">
          <Tile
            header="Tic Tac Toe"
            subHeader="This is a basic tic tac toe game."
            img="https://imgs.search.brave.com/hKjctiz8yhnVbLId532fg7or8PX1tCCoTJQVqA-RYyI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xODcyLzE4NzIy/MTMucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
            text=""
            link= "https://github.com/naitikj9/TicTacToe"
            linkText="Discover"
            position="Left"
          />
          <Tile
            header="Movie Booking App"
            subHeader="This is a basic MOvie Booking site which is made by using HTML, CSS and JavaScript."
            img="https://media.istockphoto.com/id/1177049680/vector/movie-tickets-vector-cinema-ticket-design.jpg?s=612x612&w=0&k=20&c=6gZIUIPsNas6jCs-Vh3SeX7kTu6zGFUEVZDLdQHDvCc="
            text=""
            link="https://naitikj9.github.io/movie-booking-site/"
            linkText="Discover"
            position="center"
          />
          <Tile
            header="Payment Gateway"
            subHeader="Made using Spring framework in Java"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-QPdC7WcdtGUtv3dBykqng7N-1doST1wXw&s"
            text=""
            link="https://github.com/naitikj9/PaymentGateway"
            linkText="Discover"
            position="right"
          />
           <Tile
            header="Product Service application"
            subHeader="Made using Spring framework in Java "
            img="https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg"
            text=""
            link="https://github.com/naitikj9/cart-serivce"
            linkText="Discover"
            position="left"
          />
          <Tile
            header="Quiz App "
            subHeader="Made a Quiz app using HTML,CSS And Js"
            img="https://thumbs.dreamstime.com/b/quiz-green-word-text-white-background-clipping-path-43028883.jpg"
            text="Soon Adding more things in it"
            link="https://github.com/naitikj9/quizgame"
            linkText="Discover"
            position="center"
          />
          <Tile
            header="Web Scrapper"
            subHeader="Made a Web Scrapper to compare price from amazon flipkart using python"
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TDQkCc6KEEzF_brc04yPvrcTRw6DPfcZ9w&s"
            text=""
            link="https://github.com/naitikj9/web-scrapper"
            linkText="Discover"
            position="right"
          />
        </div>
        <AboutMePage />
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;