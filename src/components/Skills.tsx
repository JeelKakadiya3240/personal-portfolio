import React from 'react'

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL']
    },
    {
      category: 'Web Technologies',
      items: ['React', 'Next.js', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Git', 'CI/CD', 'REST APIs', 'Microservices']
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      category: 'Tools & Frameworks',
      items: ['Spring Boot', 'Express.js', 'GraphQL', 'JUnit', 'Maven', 'Gradle']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technical Expertise
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            A comprehensive set of skills I've developed through my academic and professional journey
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 