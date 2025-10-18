import { Target, Eye, Heart, Award, Users, TrendingUp, Shield, Zap } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We build trust through transparency and ethical business practices.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex challenges.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as partners with our clients to achieve shared success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver quality in every project, never settling for mediocrity.',
    },
  ];

  const milestones = [
    { year: '2008', event: 'Founded with a vision to transform IT services' },
    { year: '2012', event: 'Expanded to ERP implementation services' },
    { year: '2015', event: 'Reached 100+ satisfied clients milestone' },
    { year: '2018', event: 'Launched cloud infrastructure division' },
    { year: '2020', event: 'Achieved ISO 27001 certification' },
    { year: '2023', event: 'Celebrating 15 years of excellence' },
  ];

  const team = [
    {
      role: 'Leadership Team',
      description: 'Experienced executives with 20+ years in technology and business transformation',
    },
    {
      role: 'Technical Experts',
      description: 'Certified professionals in cloud, security, development, and infrastructure',
    },
    {
      role: 'Consultants',
      description: 'Strategic advisors with deep industry knowledge and proven methodologies',
    },
  ];

  const certifications = [
    'ISO 27001',
    'AWS Partner',
    'Microsoft Gold Partner',
    'Odoo Official Partner',
    'PMI Certified',
    'ITIL Certified',
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Lucius Prime IT Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empowering businesses through innovative technology solutions since 2008
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              To empower organizations with innovative technology solutions that drive efficiency,
              growth, and competitive advantage. We are committed to delivering excellence through
              deep expertise, strategic thinking, and unwavering dedication to our clients' success.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              To be the most trusted technology partner for businesses seeking digital transformation.
              We envision a future where technology seamlessly enhances every aspect of business operations,
              and we're here to make that vision a reality for our clients.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Heart className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-slate-900">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                <p className="text-slate-200">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.role}</h4>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Certifications & Partnerships</h3>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications and partnerships
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-slate-700 text-sm">{cert}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Join Us on Our Journey
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Partner with us to transform your business and achieve your strategic goals
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
