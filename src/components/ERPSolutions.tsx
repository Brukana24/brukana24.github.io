import { Database, CheckCircle, TrendingUp, Users, Package, DollarSign } from 'lucide-react';

export default function ERPSolutions() {
  const benefits = [
    'Streamlined business processes',
    'Real-time data visibility',
    'Improved collaboration',
    'Cost reduction',
    'Enhanced productivity',
    'Better decision making',
  ];

  const implementations = [
    {
      icon: Users,
      title: 'Odoo ERP',
      description: 'Comprehensive open-source ERP with modular applications for all business needs.',
      features: ['Sales & CRM', 'Inventory Management', 'Accounting', 'HR & Payroll', 'Manufacturing', 'E-commerce'],
    },
    {
      icon: Package,
      title: 'ERPNext',
      description: 'Powerful, flexible ERP solution perfect for small to medium enterprises.',
      features: ['Financial Management', 'Supply Chain', 'Project Management', 'Asset Management', 'Quality Management', 'Customer Portal'],
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'Understand your business requirements and workflows' },
    { step: '02', title: 'Planning', description: 'Design customized ERP architecture and timeline' },
    { step: '03', title: 'Implementation', description: 'Configure, customize, and deploy the system' },
    { step: '04', title: 'Training', description: 'Comprehensive user training and documentation' },
    { step: '05', title: 'Support', description: 'Ongoing maintenance and continuous improvement' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ERP Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive ERP implementation services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {implementations.map((impl, index) => {
            const Icon = impl.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{impl.title}</h3>
                </div>
                <p className="text-slate-600 mb-6">{impl.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {impl.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Implementation Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-4xl font-bold text-blue-600 mb-3">{process.step}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
                  <p className="text-sm text-slate-600">{process.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you implement an ERP solution that drives efficiency and growth
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
