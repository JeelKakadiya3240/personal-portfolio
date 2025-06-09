'use client'

import React from 'react'
import Image from 'next/image'

const experiences = [
  {
    title: 'Software Developer',
    company: 'Arizona State University',
    location: 'Tempe, AZ, USA',
    period: 'May 2025 - Present',
    logo: '/ASU-logo.png',
    achievements: [
      'Contributed to multiple university software initiatives by writing backend code, automating workflows, and supporting AWS-based infrastructure',
      'Built a Python-based backend system to automate weekly report generation for 500+ staff, reducing manual work by 80% using AWS Lambda and S3',
      'Integrated GraphQL and REST APIs to fetch project data and developed error-handling logic, cutting system failures by 75%',
      'Worked closely with developers, stakeholders, and project leads to define technical requirements and track over 30+ tasks using JIRA in agile sprint cycles'
    ]
  },
  {
    title: 'Teaching Assistant',
    company: 'Arizona State University',
    location: 'Tempe, AZ, USA',
    period: 'March 2025 - May 2025',
    logo: '/ASU-logo.png',
    achievements: [
      'Delivered lectures and facilitated lab sessions for 80+ students in wellness and human physiology, using Canvas, Google Slides, and interactive tools to boost engagement and learning outcomes',
      'Managed grading and academic workflows with Canvas, JIRA, and Trello, and created automated gradebooks and study materials using Excel, Google Apps Script, and Canva, saving 5–7 hours of manual effort weekly'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'VBI Infotech',
    location: 'Surat, GJ, India',
    period: 'January 2024 - June 2024',
    logo: '/logo.gif',
    achievements: [
      'Built Python scripts and internal tools to generate real-time business metrics, improving system access for stakeholders and increasing platform engagement by 35%',
      'Developed machine learning powered backend features using Scikit-learn to enhance ad targeting logic, contributing to a 30% increase in user conversion rates',
      'Engineered SQL-based data pipelines and designed a star-schema data warehouse to support location analytics, improving data access speed by 30% and helping the company identify high-opportunity areas, resulting in a 40% increase in successful store launches'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Professional Experience
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in software development and technology
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-1">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-8 flex flex-col md:flex-row items-start md:items-center gap-6 group"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 dark:bg-gray-700 border border-indigo-100 dark:border-indigo-700 shadow-md overflow-hidden">
                {exp.logo && (
                  <Image
                    src={exp.logo}
                    alt={exp.company + ' logo'}
                    width={idx === 2 ? 76 : 56}
                    height={idx === 2 ? 76 : 56}
                    className="object-contain"
                  />
                )}
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full shadow">
                    <span className="font-medium">{exp.location}</span>
                    <span className="block text-indigo-600 dark:text-indigo-400">{exp.period}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-3">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start text-gray-700 dark:text-gray-200">
                      <span className="flex-shrink-0 mt-1 mr-2 text-indigo-500 dark:text-indigo-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 