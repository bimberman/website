import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";

const About = () => {
  const backgroundContent = {
    paragraphs: [
      "I'm a full-stack developer with a strong foundation in modern web technologies. My journey in software development has been driven by a constant desire to learn and create meaningful applications that solve real-world problems.",
      "With experience in both frontend and backend development, I enjoy the challenge of building scalable and maintainable applications that provide great user experiences.",
    ],
  };

  const experienceContent = {
    paragraphs: [
      "Throughout my career, I've worked on various projects ranging from small business websites to complex web applications. I've collaborated with teams to deliver high-quality solutions while maintaining clean code and following best practices.",
      "I'm always eager to take on new challenges and learn new technologies to stay at the forefront of web development.",
    ],
  };

  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-12 pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Full Stack Developer passionate about building modern web
            applications
          </p>
        </header>

        <article className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Background
            </h2>
            {backgroundContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-gray-600 dark:text-gray-300 ${
                  index === 0 ? "mb-4" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <skill.icon className={`text-2xl ${skill.color}`} />
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            {experienceContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-gray-600 dark:text-gray-300 ${
                  index === 0 ? "mb-4" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </section>
        </article>
      </div>
    </main>
  );
};

export default About;
