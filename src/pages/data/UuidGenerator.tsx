import { useState } from 'react';
import { Shuffle, Copy, Check, RefreshCw } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import ToolLayout from '../../layouts/ToolLayout';

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [copied, setCopied] = useState(false);

  const generateUuids = () => {
    const newUuids = Array.from({ length: count }, () => uuidv4());
    setUuids(newUuids);
    setCopied(false);
  };

  const handleCopy = () => {
    if (uuids.length === 0) return;
    navigator.clipboard.writeText(uuids.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate random UUIDs (v4) for your applications."
      icon={Shuffle}
      color="text-pink-600"
    >
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-slate-700">Quantity:</label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
            className="w-20 p-2 rounded-lg border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-center font-mono"
          />
          <button
            onClick={generateUuids}
            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-bold shadow-lg shadow-pink-200 transition-all active:scale-[0.98] flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Generate
          </button>
        </div>

        <div className="relative">
          <textarea
            readOnly
            value={uuids.join('\n')}
            placeholder="Generated UUIDs will appear here..."
            className="w-full h-96 p-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none resize-none font-mono text-sm leading-relaxed"
          />
          {uuids.length > 0 && (
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
