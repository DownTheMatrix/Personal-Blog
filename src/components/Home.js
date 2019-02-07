import React from "react";
import portrait from "../img/portrait.jpg";

const Home = (props) => {
    return (
        <section id="home" className="home-container container">
            <div className="home-text">
                <div className="inner-grid">
                    <h2>Welcome to my blog!</h2>
                    <div className="external-wrapper">
                        <div className="img-container">
                            <img src={portrait} alt="Author Portrait"/>
                        </div>
                    </div>   
                    <p>After procrastinating for (too) long, I finally decided to start my own blog. The enthusiasm, in this case, is doubled as I not only will provide the content for the blog, but I'm also responsible for the creation of this small website! If you want to know, I made it with CSS Flexbox, CSS Grid (which it's awesome) and some React Router magic.</p>
                    <p>My name is Bruno, I was born in Rome, Italy, and for most of my life, my interests and passions revolved mainly around cinema, literature, languages and sailing. Yeah, I also have some direct experience onboard. <i class="fas fa-ship"></i>
                    In 2011 I got my degree in Asian Languages (Japanese and Mandarin Chinese), and right after I traveled to China to further develop my skills and to test myself in such a huge and unknown environment.</p>
                    <p>The experiment went well, and there I studied in two different universities (Bejing and Kunming), explored the country, enjoyed breath-taking landscapes, tasted great food and met with some of the finest people in the world. I also worked as a teacher (teaching Italian and Latin to local students... now, that was tough!), as a translator and interpreter, and finally as a sales supervisor in a major import company.</p>
                    <p>I started my journey as a Web Developer in late 2017 by taking advantage of the incredible opportunity that was given to me by the Google/Udacity Front-End Development Nanodegree Scholarship, and I never stopped learning new and amazing things since then. I love making nice websites and web apps using my favorite technologies (namely: HTML, CSS, JavaScript, React.js and Vue.js), and to make sure that as many people as possible can access them and enjoy their content. In the "Posts" section I plan to write regularly about my findings about Web Development and related technologies, so stay tuned!</p>
                </div>
            </div>
        </section>
    );
}

export default Home;