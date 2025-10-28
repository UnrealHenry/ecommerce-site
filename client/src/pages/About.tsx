import React from 'react';

// Apple-style About page with consistent glassmorphic design
const About: React.FC = () => {
  // Mock company data
  const companyData = {
    name: "E-Store",
    founded: "2024",
    mission: "To provide high-quality products with exceptional customer service and innovative shopping experiences.",
    vision: "To become the leading e-commerce platform that connects customers with the best products worldwide.",
    values: [
      {
        title: "Quality",
        description: "We never compromise on the quality of our products and services.",
        icon: "⭐"
      },
      {
        title: "Innovation",
        description: "Constantly evolving and improving our platform and user experience.",
        icon: "🚀"
      },
      {
        title: "Customer First",
        description: "Our customers are at the heart of everything we do.",
        icon: "❤️"
      },
      {
        title: "Sustainability",
        description: "Committed to environmentally responsible business practices.",
        icon: "🌱"
      }
    ],
    stats: [
      { number: "10K+", label: "Happy Customers" },
      { number: "500+", label: "Products" },
      { number: "24/7", label: "Support" },
      { number: "99%", label: "Satisfaction Rate" }
    ],
    team: [
      {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        bio: "Passionate about creating exceptional shopping experiences."
      },
      {
        name: "Michael Chen",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bio: "Leading our technology innovation and platform development."
      },
      {
        name: "Emily Rodriguez",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bio: "Creating beautiful and intuitive user experiences."
      }
    ]
  };

  return (
    <div className="min-h-screen pt-14 bg-white">
      {/* Apple-style Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 tracking-tight">
            About E-Store
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {companyData.mission}
          </p>
        </div>
      </section>

      {/* Apple-style Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {companyData.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple-style Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {companyData.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple-style Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 text-center mb-16">
            Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {companyData.team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple-style CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
            Ready to explore?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Discover our amazing collection of products and experience the difference.
          </p>
          <a 
            href="/products" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-medium transition-colors duration-200 inline-block"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About; 