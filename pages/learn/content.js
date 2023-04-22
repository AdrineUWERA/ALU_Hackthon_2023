import React from 'react'

const Content = () => {
  return (
    <div className='container mx-auto py-20 flex flex-col items-center min-h-screen relative px-12'>
        <div
          className="absolute inset-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div>
        <h1 className='text-4xl font-bold'>Definition of Artificial Intelligence (AI)</h1>
        <p className='pt-4 text-gray-600 text-lg'>Artificial Intelligence (AI) has many applications across different industries and sectors. Here are some examples:

Healthcare: AI is being used to improve healthcare outcomes by analyzing medical data and providing personalized treatment recommendations. AI-powered chatbots are also being used to improve patient engagement and provide 24/7 support.

Finance: AI is being used in the finance industry to detect fraud, manage risk, and automate processes such as loan approvals. AI-powered chatbots are also being used to provide personalized financial advice to customers.

Transportation: AI is being used to improve transportation safety by analyzing data from sensors and cameras to identify potential risks and prevent accidents. AI is also being used to optimize transportation routes, reduce congestion, and improve logistics.

Retail: AI is being used in the retail industry to improve customer experience by providing personalized recommendations and product suggestions. AI-powered chatbots are also being used to provide customer support and answer product questions.

Manufacturing: AI is being used in the manufacturing industry to automate processes, optimize production, and improve quality control. AI-powered predictive maintenance systems are also being used to reduce downtime and prevent equipment failure.

Education: AI is being used in education to provide personalized learning experiences and improve student outcomes. AI-powered chatbots are also being used to provide students with on-demand support and answer questions.

Entertainment: AI is being used in the entertainment industry to personalize content recommendations, improve user engagement, and create more realistic virtual environments.

These are just a few examples of the many applications of AI. As AI continues to evolve and become more sophisticated, it has the potential to transform many different industries and sectors in the future.</p>
        </div>

    </div>
  )
}

export default Content