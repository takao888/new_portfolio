import React from 'react';
import { Experience as ExperienceType } from '../types/portfolio';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-full">
                  <Briefcase className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-gray-600 mb-2 font-medium">{exp.role}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};