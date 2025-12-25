import TerminalCommand from './TerminalCommand';

const skillCategories = [
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation', 'CDK'],
  },
  {
    category: 'DevOps & Automation',
    skills: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Jenkins', 'GitHub Actions'],
  },
  {
    category: 'Programming & Scripting',
    skills: ['Go', 'Python', 'Bash', 'TypeScript', 'Rust', 'JavaScript'],
  },
  {
    category: 'Platform Engineering',
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'PagerDuty', 'Ansible'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalCommand command="./skills.sh" />

        <h2 className="text-3xl font-bold mb-12 text-terminal-text">Technical Expertise</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="section-card"
            >
              <h3 className="text-xl font-semibold text-terminal-text mb-6 font-mono">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 px-3 py-2 bg-terminal-bg border border-terminal-border rounded-md"
                  >
                    <span className="text-terminal-muted text-xs">▹</span>
                    <span className="text-terminal-text text-sm font-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
