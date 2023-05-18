import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingAnimation from './UI/LoadingAnimation';

const QuizComponent = () => {
  const router = useRouter();
  let title = "Intro to AI";
  if (router.query.title) {
    title = router.query.title.split("-").join(" ");
  } 
  console.log('title',title);

  const quizQstns = [
    {
      question: "What is the scientific name for the common housefly?",
      options: {
        a: "Musca domestica",
        b: "Apis mellifera",
        c: "Drosophila melanogaster",
        d: "Bombyx mori",
      },
      answer: "a",
    },
    {
      question: "What is the scientific name for the human species?",
      options: {
        a: "Homo sapiens",
        b: "Pan troglodytes",
        c: "Canis lupus",
        d: "Felis catus",
      },
      answer: "a",
    },
    {
      question: "What is the scientific name for the common dog?",
      options: {
        a: "Canis lupus",
        b: "Homo sapiens",
        c: "Felis catus",
        d: "Pan troglodytes",
      },
      answer: "a",
    },
    {
      question: "What is the scientific name for the common cat?",
      options: {
        a: "Canis lupus",
        b: "Homo sapiens",
        c: "Felis catus",
        d: "Pan troglodytes",
      },
      answer: "c",
    },
    {
      question: "What is the scientific name for the common honey bee?",
      options: {
        a: "Musca domestica",
        b: "Apis mellifera",
        c: "Drosophila melanogaster",
        d: "Bombyx mori",
      },
      answer: "b",
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
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch("http://localhost:3000/api/quiz", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: title,
      }),
    });
    const json = await result.json();
    console.log(json);
    setQuestions(json);
    console.log(questions);
  };

  const handleSubmitButton = () => {
    if (selectedOptions[currentQuestion]) {
      setShowError(false);
      if (
        Object.values(questions[currentQuestion].options).includes(
          selectedOptions[currentQuestion].answerByUser
        )
      ) {
        let newScore = 0;
        console.log("end opt", selectedOptions);
        console.log(
          "array to map",
          Object.values(questions[currentQuestion].options)[0]
        );
        console.log("ans", selectedOptions[0].answerByUser);
        for (let i = 0; i < questions.length; i++) {
          if (
            questions[i].options[questions[i].answer] ===
            selectedOptions[i].answerByUser
          ) {
            newScore += 1;
          }
          console.log("selctedd", selectedOptions[i].answerByUser);
          console.log("totalll", newScore);
        }
        console.log("total", newScore);
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
    // console.log(selectedOptions);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    if (selectedOptions[currentQuestion]) {
      setShowError(false);
      if (
        Object.values(questions[currentQuestion].options).includes(
          selectedOptions[currentQuestion].answerByUser
        )
      ) {
        // console.log("select",selectedOptions)
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
        // console.log("currentQuestion", currentQuestion);
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="my-20 mx-[100px] max-w-full">
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
            You scored {score} out of {questions.length}
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/learn"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Back to content <span aria-hidden="true">←</span>
              </Link>
            </div>
        </div>
      ) : (
        questions ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-start w-full">
            <h4 className="mt-10 text-base text-black/60">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <div className="my-4 text-xl text-black font-semibold">
              {questions[currentQuestion].question}
            </div>
            {showError && (
              <p className="pl-4 pb-4 text-red-500 "> * Choose an answer!</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            {Object.values(questions[currentQuestion].options).map(
              (answer, index) => (
                <div
                  key={index}
                  className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-black/10 rounded-xl bg-white"
                  onClick={(e) => handleAnswerOption(answer)}
                >
                  <input
                    type="radio"
                    name={answer}
                    value={answer}
                    checked={
                      answer === selectedOptions[currentQuestion]?.answerByUser
                    }
                    onChange={(e) => handleAnswerOption(answer)}
                    className="w-4 h-4 bg-black"
                  />
                  <p className="ml-6 text-black text-sm">{answer}</p>
                </div>
              )
            )}
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
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
                  : handleNext
              }
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>): (<LoadingAnimation/>)
      )}
    </div>
  );
};

export default QuizComponent;
