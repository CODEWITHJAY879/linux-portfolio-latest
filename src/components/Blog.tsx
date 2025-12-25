import TerminalCommand from './TerminalCommand';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Building a Multi-Cloud Kubernetes Platform',
    date: '2024-11-15',
    excerpt: 'A deep dive into designing and implementing a production-grade Kubernetes platform across AWS, Azure, and GCP.',
    readTime: '8 min read',
  },
  {
    title: 'Infrastructure as Code Best Practices',
    date: '2024-10-22',
    excerpt: 'Lessons learned from managing Terraform at scale, including module design, state management, and CI/CD integration.',
    readTime: '6 min read',
  },
  {
    title: 'Observability in Distributed Systems',
    date: '2024-09-18',
    excerpt: 'Implementing comprehensive monitoring, logging, and tracing for microservices using open-source tools.',
    readTime: '10 min read',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalCommand command="ls -la ~/blog/*.md" />

        <h2 className="text-3xl font-bold mb-12 text-terminal-text">Latest Blog Posts</h2>

        <div className="space-y-6 max-w-4xl">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="section-card group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-terminal-text group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                <ArrowRight size={20} className="text-terminal-muted group-hover:text-terminal-text transition-all group-hover:translate-x-1 flex-shrink-0 ml-4" />
              </div>

              <div className="flex items-center gap-4 text-terminal-muted text-sm mb-3">
                <span className="flex items-center gap-1 font-mono">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="font-mono">{post.readTime}</span>
              </div>

              <p className="text-terminal-muted text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
