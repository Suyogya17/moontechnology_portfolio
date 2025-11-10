import { useState, useEffect } from 'react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import type { ProjectType } from '../shared/types.ts';

export default function Portfolio() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-purple-600 mx-auto" />
            <p className="text-gray-600 mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  // Sample projects if none exist in database
  const sampleProjects = projects.length === 0 ? [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      technologies: "React, Node.js, PostgreSQL, Stripe",
      image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      project_url: "#",
      github_url: "#",
      is_featured: true,
      display_order: 1,
      created_at: "2024-01-01",
      updated_at: "2024-01-01"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform enabling patient records, appointment scheduling, and telemedicine capabilities.",
      technologies: "Next.js, TypeScript, MongoDB, WebRTC",
      image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      project_url: "#",
      github_url: "#",
      is_featured: true,
      display_order: 2,
      created_at: "2024-01-01",
      updated_at: "2024-01-01"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with advanced charting, portfolio tracking, and risk assessment tools.",
      technologies: "Vue.js, Python, Redis, Chart.js",
      image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      project_url: "#",
      github_url: "#",
      is_featured: false,
      display_order: 3,
      created_at: "2024-01-01",
      updated_at: "2024-01-01"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Interactive online learning platform with video streaming, progress tracking, and collaborative features.",
      technologies: "React Native, Firebase, Node.js",
      image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      project_url: "#",
      github_url: "#",
      is_featured: false,
      display_order: 4,
      created_at: "2024-01-01",
      updated_at: "2024-01-01"
    }
  ] : projects;

  const featuredProjects = sampleProjects.filter(p => p.is_featured);
  const otherProjects = sampleProjects.filter(p => !p.is_featured);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing some of our recent projects and the innovative solutions we've delivered for our clients
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.project_url && (
                        <a href={project.project_url} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <ExternalLink className="w-5 h-5 text-gray-800" />
                        </a>
                      )}
                      {project.github_url && (
                        <a href={project.github_url} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Github className="w-5 h-5 text-gray-800" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop'}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.project_url && (
                        <a href={project.project_url} className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <ExternalLink className="w-4 h-4 text-gray-800" />
                        </a>
                      )}
                      {project.github_url && (
                        <a href={project.github_url} className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Github className="w-4 h-4 text-gray-800" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.split(', ').slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.split(', ').length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{project.technologies.split(', ').length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">Let's discuss how we can bring your ideas to life</p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
