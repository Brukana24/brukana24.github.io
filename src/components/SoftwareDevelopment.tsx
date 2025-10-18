import { Code, Globe, Smartphone, Layers, Rocket, CheckCircle } from 'lucide-react';

export default function SoftwareDevelopment() {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Scalable, responsive web applications built with modern frameworks and best practices.',
      technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    {
      icon: Layers,
      title: 'Custom Software',
      description: 'Tailored enterprise solutions designed to solve your specific business challenges.',
      technologies: ['Microservices', 'API Development', 'Cloud Native', 'DevOps', 'CI/CD'],
    },
  ];

  const developmentProcess = [
    {
      title: 'Requirements Analysis',
      description: 'Deep dive into your business needs and technical requirements',
    },
    {
      title: 'Design & Architecture',
      description: 'Create intuitive UI/UX designs and robust system architecture',
    },
    {
      title: 'Agile Development',
      description: 'Iterative development with regular feedback and demonstrations',
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing to ensure reliability and performance',
    },
    {
      title: 'Deployment',
      description: 'Smooth rollout with minimal disruption to your operations',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing updates, monitoring, and technical support',
    },
  ];

  const portfolio = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online marketplace with payment integration and inventory management',
      impact: '300% increase in online sales',
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system with telemedicine capabilities and electronic health records',
      impact: '50% reduction in admin time',
    },
    {
      title: 'Logistics Management',
      description: 'Real-time tracking and route optimization system for delivery fleet',
      impact: '40% improvement in delivery efficiency',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mb-6">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Software Development
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Custom software solutions that drive innovation and competitive advantage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-cyan-700 text-sm font-medium rounded-full border border-cyan-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{step.title}</h4>
                </div>
                <p className="text-slate-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
                <Rocket className="w-12 h-12 text-cyan-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h4>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>{project.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Have a Project in Mind?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expert development team
          </p>
          <button className="px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors shadow-lg">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
