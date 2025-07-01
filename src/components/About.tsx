import React from 'react';
import { Award, Code, Heart, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="text-yellow-400" size={24} />,
      title: "Scholarship Recipient",
      description: "Received scholarship during B.Tech/B.E program in recognition of academic excellence"
    },
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Full-Stack Knowledge",
      description: "Proficient in Java ecosystem, Python, and modern web technologies"
    },
    {
      icon: <Target className="text-green-400" size={24} />,
      title: "AI & ML Enthusiast",
      description: "Passionate about Deep Learning, Machine Learning, and innovative AI solutions"
    },
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: "Problem Solver",
      description: "Love tackling complex challenges and contributing to innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Passionate Backend Developer & Tech Innovator
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated Backend Java Developer with a strong foundation in software development 
              and a passion for innovative technology solutions. My journey in tech has been driven by 
              curiosity and a constant desire to learn and grow.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With expertise in Java, SpringBoot, and Python, I've worked on projects ranging from 
              intelligent traffic management systems to AI-powered chatbots. I believe in writing 
              clean, efficient code and creating solutions that make a real impact.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Currently expanding my knowledge in Machine Learning and Deep Learning, I'm excited 
              about the potential of AI to solve complex real-world problems.
            </p>

            {/* Languages */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
              <div className="flex gap-4">
                <span className="bg-slate-700/50 px-4 py-2 rounded-full text-gray-300">Hindi</span>
                <span className="bg-slate-700/50 px-4 py-2 rounded-full text-gray-300">English</span>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-slate-700/30 p-6 rounded-2xl backdrop-blur-sm border border-slate-600/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;