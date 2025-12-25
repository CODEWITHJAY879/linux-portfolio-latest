import TerminalCommand from './TerminalCommand';

const projects = [
  {
    title: 'Cloud Infrastructure Automation',
    year: '2024',
    description: 'Automated deployment pipeline for multi-cloud infrastructure using Terraform and Ansible. Reduced deployment time by 70%.',
    tags: ['Terraform', 'Ansible', 'AWS', 'Azure'],
  },
  {
    title: 'Kubernetes Platform Engineering',
    year: '2024',
    description: 'Built a self-service platform for deploying microservices on Kubernetes with GitOps workflows.',
    tags: ['Kubernetes', 'ArgoCD', 'Helm', 'Go'],
  },
  {
    title: 'Observability Stack Implementation',
    year: '2023',
    description: 'Implemented comprehensive monitoring and logging solution for distributed systems.',
    tags: ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry'],
  },
  {
    title: 'Site Reliability Engineering',
    year: '2023',
    description: 'Established SRE practices including SLIs, SLOs, error budgets, and incident response procedures.',
    tags: ['SRE', 'Python', 'Go', 'Terraform'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalCommand command="./projects.sh" />

        <h2 className="text-3xl font-bold mb-12 text-terminal-text">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="section-card"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-terminal-text">{project.title}</h3>
                <span className="text-terminal-muted text-sm font-mono">{project.year}</span>
              </div>

              <p className="text-terminal-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-terminal-bg border border-terminal-border rounded-md text-xs font-mono text-terminal-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
