import { Server, Cloud, Network, HardDrive, Shield, Zap } from 'lucide-react';

export default function ITInfrastructure() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with confidence. We design and implement secure, scalable cloud infrastructure.',
      features: ['AWS, Azure, GCP', 'Cloud Migration', 'Hybrid Cloud', 'Cost Optimization'],
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Build robust, high-performance networks that connect your organization seamlessly.',
      features: ['Network Design', 'SD-WAN', 'Security Architecture', 'Performance Optimization'],
    },
    {
      icon: HardDrive,
      title: 'Datacenter',
      description: 'Complete datacenter solutions from planning to implementation and management.',
      features: ['Infrastructure Design', 'Virtualization', 'Disaster Recovery', 'Capacity Planning'],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized infrastructure for maximum speed and reliability',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Multi-layered security protecting your critical assets',
    },
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'Flexible infrastructure that grows with your needs',
    },
  ];

  const approach = [
    {
      phase: 'Assessment',
      description: 'Evaluate current infrastructure and identify improvement opportunities',
    },
    {
      phase: 'Design',
      description: 'Create comprehensive architecture aligned with business objectives',
    },
    {
      phase: 'Implementation',
      description: 'Deploy infrastructure with minimal disruption to operations',
    },
    {
      phase: 'Optimization',
      description: 'Continuous monitoring and improvement for peak performance',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl mb-6">
            <Server className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            IT Infrastructure
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Build a solid foundation for your digital operations with enterprise-grade infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 text-white">
                <Icon className="w-12 h-12 mb-4 text-cyan-400" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.phase}</h4>
                <p className="text-slate-600">{item.description}</p>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Modernize Your Infrastructure?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our experts will help you build a secure, scalable infrastructure for the future
          </p>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
