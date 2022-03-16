import { Button } from "react-bootstrap"
import { useState } from "react"
import "./top.css"
import { Github, PlayCircle } from "react-bootstrap-icons"



export function Top(){
    const [about, setAbout]= useState(false);
    const [portfolio, setPortfolio]= useState(false);
    const [main, setMain] = useState(false);



      function loadAbout(){
        setMain(false);
        setPortfolio(false)
        setAbout(true);
      }

      function loadPortfolio(){
          setMain(false);
          setAbout(false)
          setPortfolio(true);
      }

      function loadHome(){
          setPortfolio(false);
          setAbout(false);
          setMain(true);
      }
      if(main){
          return <div className="Header">
          <h1>NARCIS SPRECIC</h1>
          <div className="container">
              <div className="button">
              <Button variant="outline-secondary" size="lg" onClick={() =>loadAbout()}>ABOUT</Button>
              </div>
              <div className="button">
              <Button variant="outline-secondary" size="lg"  onClick={()=> loadPortfolio()}>PORTFOLIO</Button>
              </div>
              <div className="button">
              <Button variant="outline-secondary" size="lg" href="https://github.com/narcis-SE">GITHUB</Button>
              </div>
              <div className="button">
              <Button variant="outline-secondary" size="lg" href="https://www.linkedin.com/in/narcis-sprecic/">LINKEDIN</Button>
              </div>
              <div className="button">
              <Button variant="outline-secondary" size="lg" href="Narcis_Sprecic_Resume.pdf">RESUME</Button>
              </div>
          

          </div>
      </div>
      }
    if(about){
        return <div className="About">
            <h1> ABOUT</h1>
        <div className="box">
            <img src="img/headshot.jpg" alt="Self" width={240} height={300} className="self"/>
            
            <div className="about">
                
                <p style={{"padding": "10px"}}> 
                    <p>Hello World! </p>My name is Narcis Sprecic. Welcome to my portfolio. <p> </p>
                    <p>I am a full-stack JavaScript developer with experience building front-end and back-end applications. Outside the languages of tech, I am multilingual in speaking English, Bosnian, Croatian, and Serbian. As a programmer, my long-term goal is to create applications that illuminate important information and unite people. My inspiration in pursuing technology originates from my curiosity about technological advancements that are necessary for our evolving world. I believe that every individual has a purpose. I desire to design products that will positively contribute to our society.</p>

                </p>
            </div>
        </div>

        <div className="container">
                <div className="button" >
                    <Button variant="outline-secondary" size="lg" onClick={() => loadHome()}>HOME</Button>
                </div>
                <div className="button">
                    <Button variant="outline-secondary" size="lg" onClick={() => loadPortfolio()}>PORTFOLIO</Button>
                </div>
                <div className="button">
                    <Button variant="outline-secondary" size="lg" href="https://github.com/narcis-SE">GITHUB</Button>
                </div>
                <div className="button">
                    <Button variant="outline-secondary" size="lg" href="https://www.linkedin.com/in/narcis-sprecic/">LINKEDIN</Button>
                </div>
                <div className="button">
                    <Button variant="outline-secondary" size="lg" href="Narcis_Sprecic_Resume.pdf">RESUME</Button>
                </div>
    

        </div>


        
    </div>
    }

    if(portfolio){
        return<div className="page">
                <h1>PORTFOLIO</h1>
                <div className="Porfolio">         
                <div className="project1">
                    <div className="projectstorage">
                        <h2>NBA GALAXY</h2>
                        <img src="img/nbagalaxy.png" className="img"></img>
                        <p>Fullstack application using multiple API's and MongoDB database to provide live NBA coverage and entertainment.</p>
                        <p> <a href="https://nba-finalproject.web.app/"><PlayCircle width={40} height={40}/></a> <a href="https://github.com/narcis-SE/final-project"><Github width={40} height={40}/></a> </p>
                    </div>
                </div>
                <div className="project1">
                    <div className="projectstorage">
                        <h2>Budget Buddy</h2>
                        <img src="img/budgetbuddy.png" className="img"></img>
                        <p>Interactive JavaScript Web Application that sets up and tracks user budgets based on category input and dollar value.</p>
                        <p> <a href="https://narcis-se.github.io/budget-buddy/"><PlayCircle width={40} height={40}/></a> <a href="https://github.com/narcis-SE/budget-buddy"><Github width={40} height={40}/></a> </p>
                    </div>
                </div>

                <div className="project1">
                    <div className="projectstorage">
                        <h2>RoverGram</h2>
                        <img src="img/rovergram.png" className="img"></img>
                        <p>Nasa API side project showcasing Rover images in a social media like format. Grants users the ability to like and look through live photos.</p>
                        <p> <a href="https://narcis-se.github.io/NasaAPIChallenge/"><PlayCircle width={40} height={40}/></a> <a href="https://github.com/narcis-SE/NasaAPIChallenge"><Github width={40} height={40}/></a> </p>
                    </div>
                </div>

                <div className="project1">
                    <div className="projectstorage">
                        <h2>NutriYou</h2>
                        <img src="img/recipeapi.png" className="img"></img>
                        <p> Web Application using Edamam API to search, filter and display recipes by choice. Also allows users to favorite and track recipes.</p>
                        <p> <a href="https://narcis-se.github.io/recipe-api/" ><PlayCircle width={40} height={40}/></a> <a href="https://narcis-se.github.io/NasaAPIChallenge/"><Github width={40} height={40}/></a> </p>
                    </div>
                </div>

        </div>

        <div className="container">
                <div className="button">
                <Button variant="outline-secondary" size="lg" onClick={() =>loadHome()}>HOME</Button>
                </div>
                <div className="button">
                <Button variant="outline-secondary" size="lg" onClick={() =>loadAbout()}>ABOUT</Button>
                </div>
                <div className="button">
                <Button variant="outline-secondary" size="lg" href="https://github.com/narcis-SE">GITHUB</Button>
                </div>
                <div className="button">
                <Button variant="outline-secondary" size="lg" href="https://www.linkedin.com/in/narcis-sprecic/">LINKEDIN</Button>
                </div>
                <div className="button">
                <Button variant="outline-secondary" size="lg" href="Narcis_Sprecic_Resume.pdf">RESUME</Button>
                </div>
            

            </div>
        </div> 
            
            
            

        

        


            {/* <div className='project2'>
                <Card className="text-center">
                 <Card.Img variant="top" src="img/budgetbuddy.png" className='img'/>
                  <Card.Body>
                    <Card.Title>Budget Buddy</Card.Title>
                     <Card.Text className='text'>
                     Interactive JavaScript Web Application that sets up and tracks user budgets based on category input and dollar value. 
                     </Card.Text>
                     <Card.Link href="https://narcis-se.github.io/budget-buddy/">Link to Web Page</Card.Link>
                 </Card.Body>
            <Card.Footer className="text-muted"> <a href="https://github.com/narcis-SE/recipe-api">Link to code</a> </Card.Footer>
                </Card>
            </div>


            <div className='project3'>
                <Card className="text-center">
                 <Card.Img variant="top" src="img/rovergram.png" className='img'/>
                  <Card.Body>
                    <Card.Title>RoverGram</Card.Title>
                     <Card.Text className='text'>
                     Nasa API side project showcasing Rover images in a social media like format.
                     </Card.Text>
                     <Card.Link href="https://narcis-se.github.io/NasaAPIChallenge/">Link to Web Page</Card.Link>
                 </Card.Body>
            <Card.Footer className="text-muted"> <a href="https://narcis-se.github.io/NasaAPIChallenge/">Link to code</a></Card.Footer>
                </Card>
            </div>


            <div className='project4'>
                <Card className="text-center">
                 <Card.Img variant="top" src="img/recipeapi.png" className='img'/>
                  <Card.Body>
                    <Card.Title>NutriYou</Card.Title>
                     <Card.Text className='text'>
                     Web Application using Edamam API to search, filter and display recipes by choice. Also allows users to favorite and track recipes.
                     </Card.Text>
                     <Card.Link href="https://narcis-se.github.io/recipe-api/">Link to Web Page</Card.Link>
                 </Card.Body>
            <Card.Footer className="text-muted"> <a href="https://github.com/narcis-SE/recipe-api">Link to code</a></Card.Footer>
                </Card>
            </div> */}
        
        
        

    }

    return(
        <div className="Header">
            <h1>NARCIS SPRECIC</h1>
            <div className="container">
                <div className="button">
                <Button variant="outline-secondary" size="lg" onClick={() =>loadAbout()}>ABOUT</Button>
                </div>
                <div className="button">
                <Button variant="outline-secondary" size="lg"  onClick={()=> loadPortfolio()}>PORTFOLIO</Button>
                </div>
                <div className="button">
                <Button variant="outline-secondary" size="lg" href="https://github.com/narcis-SE">GITHUB</Button>
                </div>
                <div className="button">
                <Button variant="outline-secondary" size="lg" href="https://www.linkedin.com/in/narcis-sprecic/">LINKEDIN</Button>
                </div>
                <div className="button">
                <Button variant="outline-secondary" size="lg" href="Narcis_Sprecic_Resume.pdf">RESUME</Button>
                </div>
            

            </div>
        </div>
    )
}
