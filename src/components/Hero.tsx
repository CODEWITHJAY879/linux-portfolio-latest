import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-terminal-muted text-sm font-mono uppercase tracking-wider">
                Engineering product
              </p>

              <div className="flex items-start gap-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-terminal-text leading-tight">
                  Building Digital Infrastructure for the Future
                </h1>
                <Rocket size={32} className="text-terminal-text mt-2 flex-shrink-0" />
              </div>
            </div>

            <div className="space-y-4 bg-terminal-card border border-terminal-border rounded-lg p-6">
              <div className="flex items-center gap-2 text-terminal-text font-mono">
                <span className="text-terminal-muted">$</span>
                <span className="text-sm sm:text-base">whoami --roles | grep software-engineer.specialty</span>
              </div>

              <div className="space-y-2 pl-4 border-l-2 border-terminal-border ml-2">
                <p className="text-terminal-text font-mono text-sm sm:text-base">AWS Solutions Architect</p>
                <p className="text-terminal-text font-mono text-sm sm:text-base">Site Reliability Engineer</p>
                <p className="text-terminal-text font-mono text-sm sm:text-base">Platform Engineer</p>
                <p className="text-terminal-text font-mono text-sm sm:text-base">Go Developer</p>
                <p className="text-terminal-text font-mono text-sm sm:text-base">Kubernetes Expert & Contributor</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-terminal-border overflow-hidden bg-terminal-card">
              <img
                src="public\linkdln profile.png"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
