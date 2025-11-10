import { Monitor, Smartphone, Palette, MessageSquare, Globe, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js.",
      features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization", "Mobile Backend Services"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user engagement and drive business results through thoughtful design.",
      features: ["User Experience Research", "Interface Design", "Prototyping", "Design Systems"]
    },
    {
      icon: MessageSquare,
      title: "Software Consulting",
      description: "Strategic technology consulting to help businesses make informed decisions about their digital transformation.",
      features: ["Technology Strategy", "Architecture Planning", "Code Reviews", "Performance Optimization"]
    },
    {
      icon: Globe,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions that grow with your business needs.",
      features: ["Cloud Migration", "DevOps Setup", "Serverless Architecture", "Performance Monitoring"]
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your applications running smoothly and securely.",
      features: ["Bug Fixes & Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/80 hover:border-purple-500/50 transition-all duration-300">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Our Development Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Discovery</h4>
              <p className="text-gray-300 text-sm">Understanding your requirements and goals</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Design</h4>
              <p className="text-gray-300 text-sm">Creating wireframes and visual designs</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Development</h4>
              <p className="text-gray-300 text-sm">Building with modern technologies and best practices</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                4
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Delivery</h4>
              <p className="text-gray-300 text-sm">Deploying and providing ongoing support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
