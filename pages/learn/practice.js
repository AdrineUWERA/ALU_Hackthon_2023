import React from "react";
import QuizComponent from "../../src/components/Quiz";
import Nav from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

const QuizPage = () => {
  return (
    <div>
      <React.Fragment>
        <Nav />
        <QuizComponent />
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default QuizPage;
