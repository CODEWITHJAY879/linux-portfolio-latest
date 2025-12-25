interface TerminalCommandProps {
  command: string;
}

export default function TerminalCommand({ command }: TerminalCommandProps) {
  return (
    <div className="terminal-command text-lg mb-6">
      <span className="text-terminal-muted select-none">$</span>
      <span className="text-terminal-text">{command}</span>
    </div>
  );
}
