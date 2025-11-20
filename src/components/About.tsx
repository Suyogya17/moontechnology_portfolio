import { Target, Users, Lightbulb, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Moon Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and innovators dedicated to transforming ideas into exceptional digital experiences.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2025, Moon Technology emerged from a simple belief: every business deserves technology that not only works flawlessly but also drives growth and innovation. Our founders, experienced software engineers with a passion for cutting-edge technology, set out to create a company that bridges the gap between complex technical solutions and real business needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we work with startups and established companies worldwide, helping them navigate the digital landscape with custom software solutions, modern web applications, and intuitive mobile apps. Our commitment to quality, innovation, and client success has made us a trusted partner in the technology space.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Collaborative Excellence</h4>
                <p className="text-gray-600 mt-2">Working together to create amazing digital experiences</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We embrace cutting-edge technologies and creative problem-solving to deliver solutions that exceed expectations and set new standards.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
            <p className="text-gray-600">
              Quality is at the heart of everything we do. We maintain the highest standards in code quality, design, and client service.
            </p>
          </div>
        </div>

        {/* Team Preview */}
        {/* Founder Section */}
<div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white shadow-xl">

  {/* Glow Effect */}
  <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20"></div>

  <h3 className="text-4xl font-extrabold mb-10 relative z-10 tracking-wide text-center">
    <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"> Meet Our Founder</span>
 
</h3>


  <div className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10">
    <div className="text-center flex flex-col items-center">

      {/* Image with Glow + Border Animation */}
      <div className="w-40 h-40 rounded-full mb-6 p-[3px] bg-gradient-to-br from-white/60 to-white/20 shadow-xl transition transform hover:scale-105">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src="/Sijan_DP.jpg"
            alt="Sijan Shrestha"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <h4 className="text-2xl font-semibold tracking-wide">Sijan Shrestha</h4>
      <p className="text-base opacity-80 mb-4">Managing Director & Co-Founder</p>

      {/* Shortened & Polished Bio */}
      <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-95 text-center hyphens-auto">
  Sijan is a visionary leader whose passion for technology, creativity, and strategic excellence continually drives Moon Technology forward.
</p>

    </div>
  </div>
</div>

      </div>
    </section>
  );
}
