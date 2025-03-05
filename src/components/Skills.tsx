import React from 'react';
import { Skill } from '../types/portfolio';
import { Code, Server, PenTool as Tool } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'フロントエンド':
        return <Code className="h-6 w-6" />;
      case 'バックエンド':
        return <Server className="h-6 w-6" />;
      default:
        return <Tool className="h-6 w-6" />;
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                {getIcon(skillCategory.category)}
                <h3 className="text-xl font-semibold text-gray-800">
                  {skillCategory.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};