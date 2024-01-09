import "./Hero.css";
import avatar from "../../assets/img/avatar.png";

const Hero = () => {
  return (
    <div className="hero" id="home" >
      <div className="hero_left">
        <h1>
          I am <span>Diego</span> Henao
        </h1>
        <h2>Software Engineer</h2>
        <p>
        I am Diego Henao, a Bachelor in Bilingualism with over 10 years of experience in English language teaching with a C1 CEFR level. 
          <br />
          <br />Three years ago, driven by a passion for web development and continuous learning, I discovered another of my passions as a Software Engineer specializing in React.js, Express.js, MongoDB, and Node.js. Currently, I am furthering my education by pursuing a degree in Software Engineering.
        </p>

        <div className="buttons">
          <a
            href="https://drive.google.com/file/d/1oKtes9RAEsuqtAaFo5k16bjfhf2j49QN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button1">Download CV</button>
          </a>

          <a href="#contact">
            <button>Contact me</button>
          </a>
        </div>
      </div>

      <div className="hero_right">
        <img src={avatar} alt="Diego Henao Avatar" />
      </div>
    </div>
  );
};

export default Hero;
