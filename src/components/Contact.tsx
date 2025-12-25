import TerminalCommand from './TerminalCommand';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TerminalCommand command="./contact.sh" />

        <h2 className="text-3xl font-bold mb-12 text-terminal-text">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          <a
            href="mailto:john@example.com"
            className="section-card flex flex-col items-center text-center gap-4 hover:border-terminal-text transition-colors"
          >
            <Mail size={32} className="text-terminal-text" />
            <div>
              <p className="font-mono text-terminal-text font-semibold mb-1">Email</p>
              <p className="text-terminal-muted text-sm">john@example.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="section-card flex flex-col items-center text-center gap-4 hover:border-terminal-text transition-colors"
          >
            <Linkedin size={32} className="text-terminal-text" />
            <div>
              <p className="font-mono text-terminal-text font-semibold mb-1">LinkedIn</p>
              <p className="text-terminal-muted text-sm">linkedin.com/in/johndeveloper</p>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="section-card flex flex-col items-center text-center gap-4 hover:border-terminal-text transition-colors"
          >
            <Github size={32} className="text-terminal-text" />
            <div>
              <p className="font-mono text-terminal-text font-semibold mb-1">GitHub</p>
              <p className="text-terminal-muted text-sm">github.com/johndeveloper</p>
            </div>
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-terminal-muted font-mono text-sm">
            $ echo "Thanks for visiting" && exit 0
          </p>
        </div>
      </div>
    </section>
  );
}
