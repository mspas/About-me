import React from "react";
import "../styles/app.sass";
import "../styles/skills.sass";
import SkillBox from "./Skill-box";
import cnet from "../assets/cnet2.png";
import angular from "../assets/angular3.png";
import html from "../assets/html.png";
import sql from "../assets/sql.png";
import react from "../assets/react.png";
import java from "../assets/java.png";

const cardsData = [
  {
    name: "Angular",
    img: angular,
    text:
      "Louis XIV, the Sun King, the symbol of absolute power in Europe. During his long reign France was the leading European power. " +
      "Despite his powerful image he sufferd a number of diseases. Louis outlived most of his legitimate sons. Napoleon " +
      "described him 'the only King of France worthy of the name'.",
    comment:
      "Angular was the first framework that I met. In this framweork I was doing my biggest project, but it is still not finished yet.",
    progress: 60,
    develop: true,
  },
  {
    name: "C# + .NET",
    img: cnet,
    text:
      "Henry VII Tudor and Elizabeth of York marriage ends War of the Roses - last episode of 100-Years War. Tudors eventually came victorious " +
      "among the other noble families competeting for the English crown. Marriage between the members of two opposite factions bring finally " +
      "a peace and prosperity for England.",
    progress: 50,
    develop: true,
  },
  {
    name: "React",
    img: react,
    text:
      "Young Peter Romanov was a first heir to the Russian crown who traveled around Europe. During his journey he focused on learning foregin " +
      "cultures and policies. All for great modernization of his country after taking the rule. In the future, " +
      "deservedly, will be called 'the Great'.",
    comment:
      "After Angular 'big project' I moved to React, which I was learning while making some smaller projects. It's my most recent intrest.",
    progress: 60,
    develop: true,
  },
  {
    name: "html5",
    img: html,
    text:
      "Ok, I didn't want to put HTML or CSS or JS in skills section at all... Alright, let's be honest, I just wanted to mention Żółkiewski here for any reason." +
      "Especially when HTML icon goes so well with his jaguar skin.",
    progress: 50,
    develop: true,
  },
  {
    name: "SQL",
    img: sql,
    text:
      "Edward the Confessor reign was remembered as a peaceful time, but in reality even though the king was a honest man, he wasn't a independent " +
      "ruler, when three english earls held true power. Edward did not have any child and with his death the succession war fired. Eventually England " +
      "was conquered by the Normans under rule of William the Bastard.",
    progress: 30,
    develop: false,
  },
  {
    name: "Java",
    img: java,
    text:
      "Henry V Lancaster ruled at the late phase of 100-Years War. His reign was remember due to his victorious campaigns in France, which effected " +
      "with marriage with french princess assuring french throne for Henry's son. Unfortunetely Henry V died when his only son was an infant. Rule of baby " +
      "king came with the chaos in english-french relation and breaks previous agreement. Lately, Henry VI will be called mad and dethroned. " +
      "Finally House of Tudors took over the english crown.",
    comment:
      "First typically OOP language that I was learning. I left Java for C# and get into .NET framework. Recently, due to my university courses, I got some basic knowledge abot Spring. Return to Java is still possible.",
    progress: 40,
    develop: false,
  },
];

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillCards: cardsData,
    };
  }
  render() {
    let cards = this.state.skillCards.map((data, index) => {
      return (
        <li className="scene" key={index}>
          <SkillBox
            data={data}
            img={data.img}
            name={data.name}
            text={data.text}
            progress={data.progress}
            develop={data.develop}
          />
        </li>
      );
    });
    return (
      <div className="skills-section">
        <ul className="stage">{cards}</ul>
      </div>
    );
  }
}
export default Skills;
