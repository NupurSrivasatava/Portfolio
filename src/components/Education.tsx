import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Sharda University",
      location: "Greater Noida",
      period: "2022 - 2026",
      description: "Currently pursuing B.Tech with focus on software development and emerging technologies.",
      highlight: "Scholarship Recipient"
    },
    {
      degree: "Class XII",
      institution: "CISCE(ICSE/ISC)",
      location: "",
      period: "2021 - 2022",
      description: "Completed higher secondary education with excellent academic performance.",
      score: "89%"
    },
    {
      degree: "Class X",
      institution: "CISCE(ICSE/ISC)",
      location: "",
      period: "2019 - 2020",
      description: "Completed secondary education with strong foundation in science and mathematics.",
      score: "92%"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in technology and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-purple-400 to-transparent"></div>
              )}

              <div className="flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap size={20} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800/40 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/20 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.degree}
                      </h3>
                      <p className="text-purple-400 font-semibold mb-1">
                        {item.institution}
                      </p>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin size={16} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {item.highlight && (
                      <span className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium border border-yellow-500/30">
                        {item.highlight}
                      </span>
                    )}
                    {item.score && (
                      <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                        Score: {item.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;