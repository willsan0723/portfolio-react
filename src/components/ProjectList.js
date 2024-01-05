import React, { useState } from "react";
import Modal from "./Modal";

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects] = useState([
    {
      name: "Budget Master",
      category: "projects",
      description:
        "This is a budget tracking calendar that my group created for our first group project in my bootcamp.",
      url: "https://sirubu.github.io/budget-master/",
      github: "https://github.com/SirUbu/budget-master",
    },
    {
      name: "Over Deliver",
      category: "projects",
      description:
        "This is site that allows users to create reviews for delivery services my group created for our second group project in my bootcamp.",
      url: "https://shrouded-fortress-41826.herokuapp.com/",
      github: "https://github.com/jlightheart24/over-deliver",
    },
    {
      name: "Weather Dashboard",
      category: "projects",
      description:
        "This project allows users to see today's weather and a 5 day forecast for any given city.",
      url: "https://willsan0723.github.io/weather-dashboard/",
      github: "https://github.com/willsan0723/weather-dashboard",
    },
    {
      name: "Work Day Scheduler",
      category: "projects",
      description:
        "This project is a simple schedule application to organize your day schedules. You can save and reload your changes.",
      url: "https://willsan0723.github.io/work-day-scheduler/",
      github: "https://github.com/willsan0723/work-day-scheduler",
    },
    {
      name: "Author Hub",
      category: "projects",
      description:
        "AuthorHub is a site for authors to share ideas and get feedback, as well as a place for editors to offer their skills and readers to read up and coming authors’ work.",
      url: "https://vast-gorge-54301.herokuapp.com/",
      github: "https://github.com/ChazzKreutzkamp/author-hub",
    },
  ]);
  const [currentProject, setcurrentProject] = useState();
  const currentProjects = projects.filter(
    (photo) => photo.category === category
  );
  const toggleModal = (image, i) => {
    setcurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../assets/img/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
