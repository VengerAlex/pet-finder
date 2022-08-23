import "./About.scss"
import Dog from "../../assets/img/dogg.jpg"

const About = () => {
    return (
        <div  className="container">
            <div className="about">
                <h3>About us</h3>

                <p>
                    Since the beginning of war, a lot of pets were left alone, without basic provision and medical help. I believe, it's our duty to be responsible for our friends, that's why we created a site, which should help a thousands of pets to find a home.
                    So far, more than 2 000 animals have found homes. We vaccinates and sterilizes them as well as helps low-income families take care of the adopted pets absolutely for free.
                </p>
                <div className="about-img">
                    <img src={Dog} alt="dog image"/>
                </div>
            </div>
        </div>
    );
};

export default About;