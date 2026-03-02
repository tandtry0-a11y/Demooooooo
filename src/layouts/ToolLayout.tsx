import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ToolLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
  color?: string;
}

export default function ToolLayout({ title, description, icon: Icon, children, color = 'text-indigo-600' }: ToolLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-4 mb-2"
        >
          <div className={`p-3 rounded-xl bg-white border border-slate-200 shadow-sm ${color}`}>
            <Icon size={28} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            {title}
          </h1>
        </motion.div>
        <p className="text-lg text-slate-500 max-w-2xl ml-16">
          {description}
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
      >
        <div className="p-6 md:p-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
