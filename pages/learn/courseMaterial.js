import Link from 'next/link'
import React from 'react'

const courseMaterial = () => {
  return (
    <div className='container mx-auto py-20 flex flex-col items-center min-h-screen relative'>
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
        <div className=''>
        <h1 className='text-4xl font-bold'>Artificial Intelligence (AI)</h1>
        <div className='pt-4'>
            <h2 className='text-2xl font-bold'>Introduction to AI</h2>
            <div className='pl-4 py-4 flex flex-col space-y-4'>
                <Link href={"/learn/content"} className='font-bold underline underline-offset-4'>Definition of AI</Link>
                <Link href={"#"} className='font-bold underline underline-offset-4'>Brief history of AI</Link>
                <Link href={"#"} className='font-bold underline underline-offset-4'>Applications of AI</Link>
            </div>
        </div>

        <div className='pt-4'>
            <h2 className='text-2xl font-bold'>Machine Learning</h2>
            <div className='pl-4 py-4 flex flex-col space-y-4'>
                <Link href={"#"} className='font-bold underline underline-offset-4'>Introduction to machine learning</Link>
                <Link href={"#"} className='font-bold underline underline-offset-4'>Supervised learning</Link>
                <Link href={"#"} className='font-bold underline underline-offset-4'>Unsupervised learning</Link>
            </div>
        </div>

        </div>
        

    </div>
  )
}

export default courseMaterial