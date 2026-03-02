import { useState } from 'react';
import { FileJson, Copy, Check, AlertCircle } from 'lucide-react';
import ToolLayout from '../../layouts/ToolLayout';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const minifyJson = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format, validate, and minify your JSON data."
      icon={FileJson}
      color="text-orange-600"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
        <div className="flex flex-col h-full">
          <label className="text-sm font-medium text-slate-700 mb-2">Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
            className="flex-1 w-full p-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none font-mono text-sm"
          />
        </div>

        <div className="flex flex-col h-full relative">
          <label className="text-sm font-medium text-slate-700 mb-2">Output</label>
          <div className="flex-1 relative">
            <textarea
              readOnly
              value={output}
              placeholder="Formatted JSON will appear here..."
              className={`w-full h-full p-4 rounded-xl border ${error ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none resize-none font-mono text-sm`}
            />
            {output && (
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors shadow-sm"
                title="Copy to clipboard"
              >
                {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
              </button>
            )}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-red-100 flex items-center gap-3 max-w-xs">
                  <AlertCircle className="text-red-500 shrink-0" />
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={formatJson}
          className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold shadow-lg shadow-orange-200 transition-all active:scale-[0.98]"
        >
          Format JSON
        </button>
        <button
          onClick={minifyJson}
          className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all active:scale-[0.98]"
        >
          Minify JSON
        </button>
        <button
          onClick={() => { setInput(''); setOutput(''); setError(null); }}
          className="px-6 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold transition-all active:scale-[0.98] ml-auto"
        >
          Clear
        </button>
      </div>
    </ToolLayout>
  );
}
