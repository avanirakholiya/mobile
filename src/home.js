import React,{useEffect} from 'react'
import Footer from './footer'
import Header from './header'
import './home.css';
import "bootstrap/dist/css/bootstrap.css";





function Home() {
    const init = () =>{
        if(localStorage.getItem("islogin")==="false"){
            console.log("Hi");
            window.location.href="/";
            return false;
        }
    }
    useEffect(() => {
        init();
    });
    return (
        <>
            <Header />
            <div className='carousel'>
            <iframe width="1460" height="500" src="https://www.youtube.com/embed/K1wqIRdl1d0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>



            <div className='content'>
                <div className='heading'>
                    <h1>Welcome To, Mobile club</h1>
                </div>
                <div className='details'>
                    <div className='container'>
                        <p>Because they take time to set up and aren’t necessarily well-highlighted in the Alexa mobile app where they’re under the “more” menu, it’s possible some Alexa device owners have never used them.
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.</p>

                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                            roots in a piece of classical Latin literature from 45 BC, making it over 2000
                            years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                            Virginia, looked up one of the more obscure Latin words, consectetur, from a
                            Lorem Ipsum passage, and going through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                            of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;
