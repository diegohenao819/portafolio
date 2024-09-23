import evento from "../../assets/img/evento.png";
import petSoft from "../../assets/img/petSoft.png";
import Card from "./Card";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      img: "https://laverdadnoticias.com/__export/1692197661277/sites/laverdad/img/2023/08/16/google_hace_frente_a_gpt4_con_su_nueva_ia_llamada_gemini_y_asx_funciona_1.jpg_1217713606.jpg",
      title: "Gemini Clone",
      description:
        "Gemini Clone using Google's api. Ask your question and let the model give you an answer.",
      link: "https://gemini-pi-five.vercel.app/",
    },
    {
      img: petSoft,
      title: "PetSoft",
      description:
        "PetSoft is a software for pet stores that allows you to manage the pets you are taking care of.",
      link: "https://pet-soft-kappa.vercel.app/",
    },
    {
      img: evento,
      title: "Events App",
      description:
        "Website to be up to date with the events that are happening in your city.",
      link: "https://evento-project-mu.vercel.app/",
    },
    {
      img: "https://sandinmysuitcase.com/wp-content/uploads/2021/08/Maui-Packing-List-735x490.jpg",
      title: "Trekking Backpack",
      description:
        "Website to check the items you need to take on a trekking trip.",
      link: "https://trekking-nu.vercel.app/",
    },
    {
      img: "https://th.bing.com/th/id/OIP.9I9YPxcjyKF9ZgfupSz_egHaHa?rs=1&pid=ImgDetMain",
      title: "Click-Prof",
      description:
        "English language exam including a series of questions and a score based on the CEFR.",
      link: "https://master.d1ie4jvzhxyf59.amplifyapp.com/",
    },
    {
      img: "https://brightstardaycare.org/wp-content/gf-uploads/2021/08/preview-m/3144-ORIGINAL-0.jpg?t=1628080154",
      title: "Instituto Emmi Pikler",
      description: "Website for a daycare center in Pereira, Colombia.",
      link: "https://emmi-pikler.netlify.app/",
    },

    {
      img: "https://th.bing.com/th/id/OIP.od5neF1COpwS6Nizg-DuYwHaFF?rs=1&pid=ImgDetMain",
      title: "Tic Tac Toe Game",
      description:
        "Do you want to play a game? How about a game of Tic Tac Toe.",
      link: "https://diegohenao819.github.io/triqui/",
    },
  ];

  return (
    <div className="projects" id="project">
      <div className="titulo">
        <h1>My Projects</h1>
        <div className="divider"></div>
      </div>

      <div className="container">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
