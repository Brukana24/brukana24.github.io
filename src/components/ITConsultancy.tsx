import { Lightbulb, TrendingUp, Target, Map, Users, CheckCircle } from 'lucide-react';

export default function ITConsultancy() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital evolution with proven strategies and roadmaps.',
    },
    {
      icon: Target,
      title: 'IT Strategic Planning',
      description: 'Align technology investments with business goals for maximum ROI and competitive advantage.',
    },
    {
      icon: Map,
      title: 'System Implementation',
      description: 'Expert guidance for successful technology adoption and change management.',
    },
    {
      icon: Users,
      title: 'Technology Advisory',
      description: 'Independent advice on technology selection, vendor management, and best practices.',
    },
  ];

  const industries = [
    'Healthcare',
    'Finance & Banking',
    'Manufacturing',
    'Retail & E-commerce',
    'Education',
    'Government',
    'Logistics',
    'Telecommunications',
  ];

  const methodology = [
    {
      title: 'Discovery & Analysis',
      description: 'Comprehensive assessment of your current state, challenges, and opportunities',
      outcomes: ['Current State Analysis', 'Gap Assessment', 'Stakeholder Interviews'],
    },
    {
      title: 'Strategy Development',
      description: 'Create actionable roadmap aligned with your business objectives',
      outcomes: ['Strategic Roadmap', 'Priority Matrix', 'Resource Planning'],
    },
    {
      title: 'Implementation Support',
      description: 'Hands-on guidance throughout execution with risk mitigation',
      outcomes: ['Project Oversight', 'Change Management', 'Quality Assurance'],
    },
    {
      title: 'Continuous Improvement',
      description: 'Monitor progress and optimize for sustained success',
      outcomes: ['Performance Metrics', 'Process Optimization', 'Knowledge Transfer'],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            IT Consultancy
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strategic guidance to navigate complex technology decisions and drive business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Consulting Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                  <div className="text-3xl font-bold text-orange-400 mb-3">{String(index + 1).padStart(2, '0')}</div>
                  <h4 className="text-lg font-bold text-white mb-3">{phase.title}</h4>
                  <p className="text-slate-300 text-sm mb-4">{phase.description}</p>
                  <div className="space-y-2">
                    {phase.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200 mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Industry Expertise</h3>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            We bring deep domain knowledge across multiple industries to provide relevant, actionable insights
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-slate-50 rounded-lg p-4 text-center font-semibold text-slate-700 hover:shadow-md transition-shadow">
                {industry}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
            <Target className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Transform Your Business with Expert Guidance</h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our consultancy services can help you achieve your strategic objectives
            </p>
            <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg">
              Book a Strategy Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
