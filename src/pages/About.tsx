const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get to know more about my background and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate full-stack developer with a strong foundation in
              modern web technologies. My journey in software development has
              been driven by a constant desire to learn and create meaningful
              applications that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in building responsive, user-friendly web
              applications using React, TypeScript, and Node.js. My approach
              combines technical expertise with a keen eye for design and user
              experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Frontend
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>React & TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Redux</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Backend
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tools
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Soft Skills
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
