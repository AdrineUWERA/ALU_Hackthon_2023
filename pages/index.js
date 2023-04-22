// import Head from 'next/head'
// import Image from 'next/image' 
import React from 'react';
import NavBar from '../src/components/Navbar';
import CourseMenu from '../src/components/CourseMenu';

export default function Home() {
  return (
    <React.Fragment>
      <NavBar/>
      <CourseMenu/>
    </React.Fragment>   
  )
}
