import TerminalCommand from './TerminalCommand';
import { ExternalLink, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Terminal command */}
        <TerminalCommand command="cat resume.pdf" />

        {/* Heading */}
        <h2 className="text-3xl font-bold text-terminal-text">
          My Resume
        </h2>

        {/* ✅ Terminal-style description text */}
        <p className="mt-3 inline-block bg-terminal-border px-3 py-1 font-mono text-sm text-terminal-text rounded">
          Download my detailed resume to learn more about my experience and skills
        </p>

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="relative">

            {/* ✅ Resume Preview (Google Drive) */}
            <div className="aspect-[8.5/11] bg-white rounded-lg shadow-2xl shadow-black/50 overflow-hidden mb-6">
              <iframe
                src="https://drive.google.com/file/d/1Usfqb8ixjRuxpzppRZWNHXQeZ8OA1bLQ/preview"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            {/* ✅ View & Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drive.google.com/file/d/1Usfqb8ixjRuxpzppRZWNHXQeZ8OA1bLQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal flex items-center gap-2"
              >
                <ExternalLink size={16} />
                View Resume
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1Usfqb8ixjRuxpzppRZWNHXQeZ8OA1bLQ"
                className="btn-terminal flex items-center gap-2"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
