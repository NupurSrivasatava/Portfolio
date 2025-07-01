import React from 'react';
import { ExternalLink, Github, Car, MessageCircle, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Traffic Management System",
      period: "Jan 2024 - Apr 2024",
      description: "This project aims to alleviate congestion while addressing increasing transportation demands in urban areas.",
      features: [
        "Applied Deep Learning techniques to build an intelligent system for real-time traffic monitoring and control",
        "Implemented traffic sensors utilizing infrared technology to detect vehicle presence and track",
        "Proposed a system leveraging YOLO for accurate vehicle identification and tracking"
      ],
      technologies: ["Deep Learning", "YOLO", "Python", "Computer Vision", "IoT"],
      icon: <Car size={24} />,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "AI Powered Text-To-Speech Chatbot",
      period: "Ongoing Project",
      description: "Built an intelligent chatbot that accepts text input and provides real-time AI-generated voice responses.",
      features: [
        "Integrated Ollama LLM to generate responses based on user queries",
        "Integrated Google Text-to-Speech with PyAudio to enable smooth, low-latency voice output without generating audio files",
        "Engineered a robust backend in Python to manage AI response generation and voice synthesis workflows"
      ],
      technologies: ["Python", "Ollama LLM", "Google TTS", "PyAudio", "AI/ML"],
      icon: <MessageCircle size={24} />,
      gradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative solutions leveraging cutting-edge technology to solve real-world problems
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-1 shadow-2xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Project Icon & Title */}
                  <div className="lg:col-span-1">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} mb-4`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span className="text-sm">{project.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features & Achievements</h4>
                    <div className="space-y-4">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 bg-slate-700/30 rounded-lg p-4"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8">
                      <button className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-600/50 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                        <Github size={16} />
                        <span>View Code</span>
                      </button>
                      <button className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-4 py-2 rounded-lg transition-colors duration-200 border border-purple-500/30">
                        <ExternalLink size={16} />
                        <span>Learn More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/40 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects and innovative ideas.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={16} />
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;