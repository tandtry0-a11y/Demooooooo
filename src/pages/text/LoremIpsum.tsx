import { useState, useEffect } from 'react';
import { FileText, Copy, Check, RefreshCw } from 'lucide-react';
import ToolLayout from '../../layouts/ToolLayout';

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(3);
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const generateLorem = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    let result = [];
    for (let i = 0; i < paragraphs; i++) {
      result.push(lorem);
    }
    setText(result.join('\n\n'));
    setCopied(false);
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate on load
  useEffect(() => {
    generateLorem();
  }, []);

  return (
    <ToolLayout
      title="Lorem Ipsum Generator"
      description="Generate placeholder text for your designs."
      icon={FileText}
      color="text-blue-600"
    >
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-slate-700">Paragraphs:</label>
          <input
            type="number"
            min="1"
            max="20"
            value={paragraphs}
            onChange={(e) => setParagraphs(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
            className="w-20 p-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center font-mono"
          />
          <button
            onClick={generateLorem}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Generate
          </button>
        </div>

        <div className="relative">
          <textarea
            readOnly
            value={text}
            className="w-full h-96 p-6 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none resize-none font-serif text-lg leading-relaxed text-slate-700"
          />
          {text && (
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors shadow-sm"
              title="Copy to clipboard"
            >
              {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
            </button>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
