import React from 'react';
import CourseMenu from '../../src/components/CourseMenu';
import NavBar from '../../src/components/NavBar';
import Footer from '../../src/components/Footer';

const Courses = () => {
  return (
    <div>
      <React.Fragment>
        <NavBar/> 
        <CourseMenu/>
        <Footer/>
      </React.Fragment>
    </div>
  );
};

export default Courses;
