import { useState } from 'react';
import { Link, Copy, Check, ArrowRightLeft } from 'lucide-react';
import ToolLayout from '../../layouts/ToolLayout';

export default function UrlEncoderDecoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(encodeURIComponent(input));
    } catch (err) {
      setOutput('Error encoding URL');
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch (err) {
      setOutput('Error decoding URL');
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
      title="URL Encoder/Decoder"
      description="Encode or decode URLs to ensure they are safe for transmission over the internet."
      icon={Link}
      color="text-purple-600"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">Input URL</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your URL here..."
            className="w-full h-48 p-4 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none font-mono text-sm"
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">Output</label>
          <div className="relative">
            <textarea
              readOnly
              value={output}
              placeholder="Result will appear here..."
              className="w-full h-48 p-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none resize-none font-mono text-sm"
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
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={encode}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-lg shadow-purple-200 transition-all active:scale-[0.98] flex items-center gap-2"
        >
          Encode <ArrowRightLeft size={18} />
        </button>
        <button
          onClick={decode}
          className="px-8 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold shadow-sm transition-all active:scale-[0.98] flex items-center gap-2"
        >
          Decode <ArrowRightLeft size={18} />
        </button>
        <button
          onClick={() => { setInput(''); setOutput(''); }}
          className="px-8 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold transition-all active:scale-[0.98] ml-auto"
        >
          Clear
        </button>
      </div>
    </ToolLayout>
  );
}
