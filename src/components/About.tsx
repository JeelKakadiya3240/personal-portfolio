import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">About</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A bit about me
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            I am a Master's student in Computer Science at Arizona State University, with a strong foundation in software development and a passion for creating innovative solutions.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Education</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Master of Science in Computer Science<br />
                  Arizona State University<br />
                  Expected Graduation: 2025
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Experience</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Software Development Intern<br />
                  Previous roles in web development and software engineering<br />
                  Strong focus on full-stack development and cloud technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 