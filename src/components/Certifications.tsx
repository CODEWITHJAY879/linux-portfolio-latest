import { ExternalLink, Award } from 'lucide-react';
import { certifications } from "./Navbar";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-terminal-text">
          Professional Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="section-card">
              <div className="flex items-start gap-4">
                
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center text-3xl">
                  {typeof cert.icon === 'string' && cert.icon.startsWith('/') ? (
                    <img
                      src={cert.icon}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span>{cert.icon}</span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-terminal-text mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-terminal-muted text-sm mb-4 font-mono">
                    {cert.issuer}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-terminal-text text-sm hover:text-white transition-colors"
                  >
                    <Award size={14} />
                    <span className="font-mono">Verify on Credly</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
