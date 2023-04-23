import { useState, useEffect } from "react";

const QuizComponent = () => {
  const quizQstns = [
    {
      question: "What type of framework is Next.js?",
      answerOptions: [
        { answer: "Frontend" },
        { answer: "Backend" },
        { answer: "FullStack", isCorrect: true },
        { answer: "None of the above" },
      ],
    },
    {
      question: "When was Next.js released?",
      answerOptions: [
        { answer: "20 September 2019" },
        { answer: "14 January 2017" },
        { answer: "25 October 2016", isCorrect: true },
        { answer: "28 March 2018" },
      ],
    },
    {
      question: "Which CSS Framework are we using?",
      answerOptions: [
        { answer: "Bootstrap" },
        { answer: "TailwindCSS", isCorrect: true },
        { answer: "Chakra UI" },
        { answer: "Bulma CSS" },
      ],
    },
    {
      question:
        "Which class in Tailwind is used to set flex direction of column?",
      answerOptions: [
        { answer: "col" },
        { answer: "col-flex" },
        { answer: "flex-col", isCorrect: true },
        { answer: "None of the above" },
      ],
    },
  ];

  const data = {
    topic: "biology",
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    fetch("/api/quiz", {
      method: "POST",
      body: {
        "topic": "biology",
      },
    })
      .then((response) => {
        // console.log(response.json());
        setQuestions(response.json());
      })
      // .then((response) => {
        
      // })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

console.log(questions);
  // const stns = await fetch(
  //   "http://localhost:3000/api/quiz",
  //   {
  //     method: "POST",
  //     body: data
  //   }
  // );

  const handleSubmitButton = () => {
    if (selectedOptions[currentQuestion]) {
      setShowError(false);
      if (
        quizQstns[currentQuestion].answerOptions.some(
          (obj) => obj.answer === selectedOptions[currentQuestion].answerByUser
        )
        // quizQstns[currentQuestion].answerOptions.includes({
        //   answer: selectedOptions[currentQuestion],
        // })
      ) {
        let newScore = 0;
        for (let i = 0; i < quizQstns.length; i++) {
          quizQstns[i].answerOptions.map(
            (answer) =>
              answer.isCorrect &&
              answer.answer === selectedOptions[i]?.answerByUser &&
              (newScore += 1)
          );
        }
        setScore(newScore);
        setShowScore(true);
      }
    }
    setShowError(true);
  };

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    // console.log("selected options",selectedOptions[currentQuestion])
    // console.log("this", quizQstns[currentQuestion].answerOptions, {
    //   answer: selectedOptions[currentQuestion].answerByUser,
    // });
    // console.log(quizQstns[currentQuestion].answerOptions.some(obj => obj.answer === selectedOptions[currentQuestion].answerByUser))
    if (selectedOptions[currentQuestion]) {
      setShowError(false);
      if (
        quizQstns[currentQuestion].answerOptions.some(
          (obj) => obj.answer === selectedOptions[currentQuestion].answerByUser
        )
        // quizQstns[currentQuestion].answerOptions.includes({
        //   answer: selectedOptions[currentQuestion],
        // })
      ) {
        const nextQues = currentQuestion + 1;
        nextQues < quizQstns.length && setCurrentQuestion(nextQues);
        console.log("currentQuestion", currentQuestion);
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="my-20 mx-[50px] max-w-full">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      {showScore ? (
        <div className="flex flex-col justify-center min-h-screen place-items-center items-center">
          <h1 className="text-3xl font-semibold text-center text-black">
            You scored {score} out of {quizQstns.length}
          </h1>
          <a href="/learn/content">Back to content</a>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-start w-full">
            <h4 className="mt-10 text-base text-black/60">
              Question {currentQuestion + 1} of {quizQstns.length}
            </h4>
            <div className="my-4 text-xl text-black font-semibold">
              {quizQstns[currentQuestion].question}
            </div>
            {showError && (
              <p className="pl-4 pb-4 text-red-500 "> * Choose an answer!</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            {quizQstns[currentQuestion].answerOptions.map((answer, index) => (
              <div
                key={index}
                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-black/10 rounded-xl bg-white"
                onClick={(e) => handleAnswerOption(answer.answer)}
              >
                <input
                  type="radio"
                  name={answer.answer}
                  value={answer.answer}
                  checked={
                    answer.answer ===
                    selectedOptions[currentQuestion]?.answerByUser
                  }
                  onChange={(e) => handleAnswerOption(answer.answer)}
                  className="w-4 h-4 bg-black"
                />
                <p className="ml-6 text-black text-sm">{answer.answer}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full mt-12 text-white">
            <button
              onClick={handlePrevious}
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestion + 1 === quizQstns.length
                  ? handleSubmitButton
                  : handleNext
              }
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              {currentQuestion + 1 === quizQstns.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
