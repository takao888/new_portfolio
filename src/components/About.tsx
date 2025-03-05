import React from 'react';
import { AboutProps } from '../types/portfolio';

export const About: React.FC<AboutProps> = ({ expertise, skills, background }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">専門性</h3>
            <p className="text-gray-600 mb-6">{expertise}</p>
            <h3 className="text-xl font-semibold mb-4">経歴</h3>
            <p className="text-gray-600">{background}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">主要スキル</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};