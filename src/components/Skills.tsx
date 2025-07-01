import React from 'react';
import { Code, Database, Brain, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Java", "Python", "Swift"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Frameworks & Tools",
      icon: <Layers size={24} />,
      skills: ["SpringBoot", "React"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={24} />,
      skills: ["Deep Learning", "Machine Learning", "Neural Networks"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Data & Algorithms",
      icon: <Database size={24} />,
      skills: ["Data Structures", "Algorithms", "Problem Solving", "System Design"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build powerful applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-700/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-600/30 rounded-lg px-3 py-2 text-gray-300 text-sm hover:bg-slate-600/50 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Technical Proficiencies
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-700/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/20">
                <h4 className="text-lg font-semibold text-purple-400 mb-4">Backend Development</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Expert in building robust server-side applications using Java and SpringBoot with focus on scalability and performance.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-slate-700/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/20">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">AI Integration</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Experienced in implementing machine learning models and AI solutions for real-world applications and automation.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-slate-700/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/20">
                <h4 className="text-lg font-semibold text-green-400 mb-4">System Architecture</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Skilled in designing efficient algorithms and data structures for optimal system performance and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;