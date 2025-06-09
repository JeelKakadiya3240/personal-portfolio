'use client'

import React from 'react'

const projects = [
  {
    title: 'CodeSync',
    subtitle: 'Real-Time Collaborative Code Editor',
    description:
      'A cloud-based code editor enabling multiple developers to collaborate in real time. Features syntax highlighting, live cursor tracking, integrated chat, and GitHub authentication. Used by remote teams for pair programming and technical interviews.',
    tech: ['React', 'Next.js', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'MedTrack',
    subtitle: 'Healthcare Appointment & Records Platform',
    description:
      'A secure web application for patients and doctors to manage appointments, prescriptions, and medical records. Includes calendar sync, automated reminders, and role-based access. HIPAA-compliant and deployed for a regional clinic network.',
    tech: ['TypeScript', 'Express.js', 'PostgreSQL', 'AWS S3', 'JWT Auth', 'Chakra UI'],
  },
  {
    title: 'InsightBoard',
    subtitle: 'SaaS Business Analytics Dashboard',
    description:
      'A multi-tenant analytics dashboard for SaaS startups. Provides real-time metrics, cohort analysis, churn prediction, and custom reporting. Integrates with Stripe, Segment, and Google Analytics.',
    tech: ['Next.js', 'Prisma', 'MySQL', 'Chart.js', 'Docker', 'Redis'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Projects
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent software engineering projects
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-8 flex flex-col group"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 