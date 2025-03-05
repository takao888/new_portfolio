import React from 'react';
import { Contact as ContactType } from '../types/portfolio';
import { Mail, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

interface ContactProps {
  contact: ContactType;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Mail className="h-5 w-5" />
              <span>{contact.email}</span>
            </a>
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            )}
            {contact.zenn && (
              <a
                href={contact.zenn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <span className="font-bold text-blue-500">Zenn</span>
              </a>
            )}
            {contact.twitter && (
              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            )}
            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};