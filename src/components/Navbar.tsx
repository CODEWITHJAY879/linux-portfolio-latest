import { Home, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Home size={18} className="text-terminal-text" />
              <span className="font-mono text-terminal-text font-semibold">Jayesh Nikam</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="nav-link">About</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#opensource" className="nav-link">Open Source</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-terminal-card rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="https://github.com/CODEWITHJAY879"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-terminal-card rounded-md transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/jayeshnikam1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-terminal-card rounded-md transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:jayeshni2020@gmail.com"
              className="p-2 hover:bg-terminal-card rounded-md transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}export const certifications = [
  {
    name: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    icon: '/image.png',
    verifyUrl: 'https://www.credly.com/badges/YOUR_AWS_BADGE_ID',
  },
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    icon: '/cka_from_cncfsite__281_29.png',
    verifyUrl: 'https://www.credly.com/badges/YOUR_AWS_BADGE_ID',
  },
  {
    name: 'Red Hat Certified Engineer (RHCE)',
    issuer: 'Red Hat',
    icon: '/image (1).png',
    verifyUrl: 'https://www.credly.com/badges/YOUR_AWS_BADGE_ID',
  },
  {
    name: 'Red Hat Certified Specialist in Containers and Kubernetes',
    issuer: 'Red Hat',
    icon: '/image (2).png',
    verifyUrl: 'https://www.credly.com/badges/YOUR_AWS_BADGE_ID',
  },
  {
    name: 'Master Top 10 AWS Services Practically to Get High-Paying IT Jobs',
    issuer: 'CloudDevOpsHub Community',
    icon: '/Gemini_Generated_Image_umgavaumgavaumga.png',
    verifyUrl: 'https://www.credly.com/badges/YOUR_AWS_BADGE_ID',
  },
  {
    name: 'Ansible and Terraform weekend workshop',
    issuer: 'CloudDevOpsHub Community',
    icon: '/Gemini_Generated_Image_umgavaumgavaumga.png',
    verifyUrl: 'https://www.credly.com/badges/YOUR_AWS_BADGE_ID',
  }
];

