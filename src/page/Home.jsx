import React from "react";
import dog1 from "../assets/dog1.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/dog3.jpg";
export default function Home() {
  const pets = [
    {
      name: "Jhonny",
      type: "Dog",
      descreption:
        "It is pet animal jhnny is fuy he likes to be around the people",
      skills: ["fetch", "play dead", "roll over"],
      image: dog1,
    },
    {
      name: "Jhonny",
      type: "Dog",
      descreption:
        "It is pet animal jhnny is fuy he likes to be around the people",
      skills: ["fetch", "play dead", "roll over"],
      image: dog2,
    },
    {
      name: "Jhonny",
      type: "Dog",
      descreption:
        "It is pet animal jhnny is fuy he likes to be around the people",
      skills: ["fetch", "play dead", "roll over"],
      image: dog3,
    },
  ];
  return (
    <>
      <section className="app">
        <h1>Pet House</h1>
        <ul className="container">
          {pets.map((pet, index) => (
            <>
              <li key={index}>
                <h2>{pet.name}</h2>
                <img src={pet.image} alt="pet image" />
                <p>{pet.type}</p>
                <p>{pet.descreption}</p>
                <h2>Skills</h2>
                <ul className="skills">
                  {pet.skills.map((skill,index) => (
                    <li>{`${index+1}. ${skill}`}</li>
                  ))}
                </ul>
              </li>
            </>
          ))}
        </ul>
      </section>
    </>
  );
}
