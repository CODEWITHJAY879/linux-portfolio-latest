import TerminalCommand from './TerminalCommand';
import { Star, GitFork, ExternalLink } from 'lucide-react';

const repos = [
  {
    name: 'k8s-deployment-manager',
    description: 'CLI tool for managing Kubernetes deployments with GitOps workflows',
    stars: 2400,
    forks: 180,
    language: 'Go',
  },
  {
    name: 'terraform-aws-modules',
    description: 'Collection of reusable Terraform modules for AWS infrastructure',
    stars: 1800,
    forks: 340,
    language: 'HCL',
  },
  {
    name: 'ansible-automation-toolkit',
    description: 'Ansible playbooks and roles for infrastructure automation',
    stars: 950,
    forks: 120,
    language: 'Python',
  },
  {
    name: 'prometheus-exporter',
    description: 'Custom Prometheus exporter for cloud resource metrics',
    stars: 720,
    forks: 85,
    language: 'Go',
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalCommand command="gh repo list --source --limit 10" />

        <h2 className="text-3xl font-bold mb-12 text-terminal-text">Open Source Contributions</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <div
              key={index}
              className="section-card group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-terminal-text font-mono group-hover:text-white transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink size={18} className="text-terminal-muted group-hover:text-terminal-text transition-colors flex-shrink-0" />
              </div>

              <p className="text-terminal-muted text-sm mb-4 leading-relaxed">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 text-terminal-muted text-xs">
                <span className="flex items-center gap-1 font-mono">
                  <Star size={14} />
                  {repo.stars.toLocaleString()}
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <GitFork size={14} />
                  {repo.forks.toLocaleString()}
                </span>
                <span className="px-2 py-1 bg-terminal-bg border border-terminal-border rounded-md font-mono">
                  {repo.language}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-terminal-muted font-mono text-sm mb-4">
            Active contributor to CNCF projects including Kubernetes, Prometheus, and Helm
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terminal inline-flex items-center gap-2"
          >
            View All Repositories
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
