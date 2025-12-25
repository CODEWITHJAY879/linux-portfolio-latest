import TerminalCommand from './TerminalCommand';
import { ExternalLink, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalCommand command="cat resume.pdf" />

        <h2 className="text-3xl font-bold mb-12 text-terminal-text">My Resume</h2>

        <div className="max-w-4xl mx-auto">
          <div className="perspective">
            <div className="relative">
              <div className="aspect-[8.5/11] bg-white rounded-lg shadow-2xl shadow-black/50 p-8 mb-6">
                <div className="space-y-6 text-black font-mono text-sm">
                  <div className="border-b-2 border-black pb-4">
                    <h3 className="text-2xl font-bold">JOHN DEVELOPER</h3>
                    <p className="text-xs">Platform Engineer & SRE Specialist</p>
                    <p className="text-xs mt-2">john@example.com | linkedin.com/in/johndeveloper | github.com/johndeveloper</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm mb-2">PROFESSIONAL SUMMARY</h4>
                    <p className="text-xs leading-relaxed">
                      Platform engineer with 8+ years building cloud-native infrastructure. Expert in Kubernetes, Terraform, and Go.
                      Passionate about automation, observability, and empowering development teams.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm mb-2">CORE COMPETENCIES</h4>
                    <p className="text-xs">AWS | Azure | GCP | Kubernetes | Terraform | Docker | Go | Python | CI/CD | GitOps | SRE</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm mb-2">EXPERIENCE</h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="font-semibold">Senior Platform Engineer - Tech Company (2022-Present)</p>
                        <p>Built self-service Kubernetes platform supporting 50+ microservices across multi-cloud</p>
                      </div>
                      <div>
                        <p className="font-semibold">Infrastructure Engineer - Cloud Solutions (2020-2022)</p>
                        <p>Designed and implemented infrastructure automation reducing deployment time by 70%</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm mb-2">CERTIFICATIONS</h4>
                    <p className="text-xs">AWS Solutions Architect Professional | CKA | HashiCorp Terraform Associate</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="btn-terminal flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  View in Drive
                </a>
                <button className="btn-terminal flex items-center justify-center gap-2">
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
