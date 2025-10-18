import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px]"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Transforming Business Through Technology</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 animate-fade-in-up">
          Innovative IT Solutions
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            For Modern Business
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          We empower organizations with cutting-edge ERP solutions, custom software development,
          robust IT infrastructure, and strategic consultancy services.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => onNavigate('contact')}
            className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-lg border border-slate-200"
          >
            Learn More
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in-up animation-delay-600">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-slate-600 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-700">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-slate-600 text-sm">Happy Clients</div>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-800">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-slate-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-900">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-slate-600 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
