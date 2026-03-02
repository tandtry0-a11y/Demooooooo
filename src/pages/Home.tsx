import { 
  Type, Shield, Code, Globe, Database, 
  Hash, Lock, FileJson, Link as LinkIcon, QrCode, 
  Binary, Shuffle, CaseSensitive, FileText
} from 'lucide-react';
import { motion } from 'motion/react';
import ToolCard from '../components/ToolCard';

const tools = [
  {
    category: 'Text Tools',
    items: [
      { title: 'Case Converter', description: 'Convert text to uppercase, lowercase, title case, and more.', icon: CaseSensitive, to: '/text/case-converter', color: 'text-blue-600' },
      { title: 'Character Count', description: 'Count characters, words, sentences, and paragraphs in your text.', icon: Hash, to: '/text/character-count', color: 'text-blue-600' },
      { title: 'Lorem Ipsum Generator', description: 'Generate placeholder text for your designs.', icon: FileText, to: '/text/lorem-ipsum', color: 'text-blue-600' },
    ]
  },
  {
    category: 'Security Tools',
    items: [
      { title: 'Password Generator', description: 'Generate strong, secure passwords with custom settings.', icon: Lock, to: '/security/password-generator', color: 'text-green-600' },
      { title: 'Hash Generator', description: 'Generate MD5, SHA-1, SHA-256 hashes from text.', icon: Shield, to: '/security/hash-generator', color: 'text-green-600' },
    ]
  },
  {
    category: 'Code Tools',
    items: [
      { title: 'JSON Formatter', description: 'Format and validate JSON data.', icon: FileJson, to: '/code/json-formatter', color: 'text-orange-600' },
      { title: 'CSS Minifier', description: 'Minify CSS code to reduce file size.', icon: Code, to: '/code/css-minifier', color: 'text-orange-600' },
    ]
  },
  {
    category: 'Web Utilities',
    items: [
      { title: 'URL Encoder/Decoder', description: 'Encode or decode URLs.', icon: LinkIcon, to: '/web/url-encoder', color: 'text-purple-600' },
      { title: 'QR Code Generator', description: 'Generate QR codes for URLs, text, and more.', icon: QrCode, to: '/web/qr-generator', color: 'text-purple-600' },
    ]
  },
  {
    category: 'Data Tools',
    items: [
      { title: 'Base64 Converter', description: 'Encode and decode Base64 data.', icon: Binary, to: '/data/base64', color: 'text-pink-600' },
      { title: 'UUID Generator', description: 'Generate random UUIDs (v4).', icon: Shuffle, to: '/data/uuid-generator', color: 'text-pink-600' },
    ]
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
        >
          Developer Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Productivity</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500"
        >
          A collection of free, open-source utilities to help you code faster and smarter.
        </motion.p>
      </div>

      {tools.map((category, idx) => (
        <section key={category.category}>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-800">{category.category}</h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((tool) => (
              <ToolCard 
                key={tool.title} 
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                to={tool.to}
                color={tool.color}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
