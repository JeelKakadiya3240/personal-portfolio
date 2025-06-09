'use client'

import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Contact
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
            Feel free to connect with me on LinkedIn or send me an email!
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 mt-10">
          <a
            href="https://www.linkedin.com/in/jeelkakadiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg shadow hover:bg-indigo-700 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            Connect on LinkedIn
          </a>
          <a
            href="mailto:jkakadi1@asu.edu"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-100 dark:bg-gray-800 text-indigo-700 dark:text-indigo-200 font-semibold text-lg shadow hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            jkakadi1@asu.edu
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact 