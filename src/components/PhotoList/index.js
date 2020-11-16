import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


  const [photos] = useState([
    {
      name: 'Work Day Scheduler',
      category: 'fullStack',
      description: 'Built using HTML, CSS, JS, Moment.JS, Bootstrap, and jQuery.',
    },
    {
      name: 'Note Taker App',
      category: 'fullStack',
      description: 'Built using NodeJS, Express, testing with jest & Insomnia.',
      site: 'https://frozen-inlet-63653.herokuapp.com/'
    },
    {
      name: 'Pizza Hunt',
      category: 'fullStack',
      description: 'Built using MVC technique and MongoDB.',
    },
    {
      name: 'Ask Father Time',
      category: 'fullStack',
      description: 'A social media app geared towards connection in the context of conversation and mental health.',
    },
    {
      name: 'Resume',
      category: 'resume',
      description: 'Cheers',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
        name: 'Carry The Fire',
        category: 'creative',
        description: 'Released 2012 on Warner Brothers Records',
      },
      {
        name: 'After It All',
        category: 'creative',
        description: 'Released 2015 on Warner Brothers Records',
      },
      {
        name: 'The Light',
        category: 'creative',
        description: 'Release 2020 (Independent) on Never Die Records',
      },
    
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category); 
  // this matches the categories with the user selection
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }
  

  return (
    <div>
      <div className="flex-row">
      {isModalOpen && (
  <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
)}
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/large/${category}/${i}.jpg`)}
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

export default PhotoList;