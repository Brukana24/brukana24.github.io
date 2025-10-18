import { Database, Code, Server, Lightbulb, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: 'erp',
      icon: Database,
      title: 'ERP Solutions',
      description: 'Comprehensive ERP implementation with Odoo and ERPNext to streamline your business operations.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'software',
      icon: Code,
      title: 'Software Development',
      description: 'Custom web and mobile applications tailored to your unique business requirements.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 'infrastructure',
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Cloud solutions, networking, and datacenter implementation for robust IT foundation.',
      color: 'from-slate-500 to-slate-600',
    },
    {
      id: 'consultancy',
      icon: Lightbulb,
      title: 'IT Consultancy',
      description: 'Strategic guidance for digital transformation and IT excellence in your organization.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 cursor-pointer"
                onClick={() => onNavigate(service.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
