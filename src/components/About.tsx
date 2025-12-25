import TerminalCommand from './TerminalCommand';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    title: 'Infrastructure Optimization',
    content: 'Specialized in optimizing cloud infrastructure costs and performance. Implemented automated scaling solutions that reduced operational costs by 40% while improving system reliability.',
  },
  {
    title: 'AI Infrastructure',
    content: 'Built and maintained ML/AI infrastructure platforms supporting data science teams. Expertise in GPU orchestration, model deployment pipelines, and MLOps best practices.',
  },
  {
    title: 'Platform Innovation',
    content: 'Designed and implemented internal developer platforms that accelerate software delivery. Focus on self-service capabilities, automation, and developer experience.',
  },
  {
    title: 'Open Source Impact',
    content: 'Active contributor to CNCF projects including Kubernetes, Prometheus, and Helm. Maintainer of several popular DevOps tools with thousands of GitHub stars.',
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalCommand command="cat profile.latest.2025" />

        <h2 className="text-3xl font-bold mb-8 text-terminal-text">Profile</h2>

        <div className="max-w-4xl mb-12">
          <p className="text-terminal-muted leading-relaxed text-base">
            Being a DevOps aspirant, learning and effectuating proficiency, is something I have fixated myself with. Zealous participation in extra-curricular activities motivates me to reinforce my soft skills of Active Communication, Public Speaking & Team Leadership.

          </p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {sections.map((section, index) => (
            <div
              key={index}
              className="section-card cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-terminal-text font-mono">
                  {section.title}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-terminal-muted" />
                ) : (
                  <ChevronDown size={20} className="text-terminal-muted" />
                )}
              </div>

              {openIndex === index && (
                <p className="mt-4 text-terminal-muted leading-relaxed text-sm">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
