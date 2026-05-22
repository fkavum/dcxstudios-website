import React, { useState } from 'react';

export default function ProjectCard({ title, description, techStack }) {
  // Basit bir etkileşim örneği için state tutuyoruz
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex gap-2 mb-4">
        {techStack.map(tech => (
          <span key={tech} className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      <button 
        onClick={() => setLikes(likes + 1)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Beğen ({likes})
      </button>
    </div>
  );
}