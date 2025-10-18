import { Award, Users, Zap, Shield, TrendingUp, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Over 15 years of experience delivering excellence across diverse industries.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals dedicated to your success with proven track records.',
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile methodologies ensure fast, efficient project completion.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures protecting your critical business data.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Future-proof technology that grows with your business needs.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support ensuring minimal downtime.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Lucius Prime?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that matter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10 hover:border-blue-400/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
