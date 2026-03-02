import { useState, useEffect } from 'react';
import { Hash, Copy, Check } from 'lucide-react';
import ToolLayout from '../../layouts/ToolLayout';

export default function CharacterCount() {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    chars: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    lines: 0,
  });

  useEffect(() => {
    const chars = text.length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(Boolean).length;
    const lines = text.trim() === '' ? 0 : text.split(/\n/).length;

    setStats({ chars, words, sentences, paragraphs, lines });
  }, [text]);

  return (
    <ToolLayout
      title="Character Count"
      description="Analyze your text with detailed statistics: characters, words, sentences, and more."
      icon={Hash}
      color="text-blue-600"
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
          <div className="text-3xl font-bold text-slate-800">{stats.chars}</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Characters</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
          <div className="text-3xl font-bold text-slate-800">{stats.words}</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Words</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
          <div className="text-3xl font-bold text-slate-800">{stats.sentences}</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Sentences</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
          <div className="text-3xl font-bold text-slate-800">{stats.paragraphs}</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Paragraphs</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
          <div className="text-3xl font-bold text-slate-800">{stats.lines}</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Lines</div>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full h-64 p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none font-mono text-sm"
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
          className="absolute top-4 right-4 p-2 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors"
          title="Copy to clipboard"
        >
          <Copy size={18} />
        </button>
      </div>

      <div className="mt-4 flex justify-end">
        <button 
          onClick={() => setText('')} 
          className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium transition-colors"
        >
          Clear Text
        </button>
      </div>
    </ToolLayout>
  );
}
