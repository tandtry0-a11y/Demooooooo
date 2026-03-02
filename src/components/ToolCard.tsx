import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color?: string;
  key?: string | number;
}

export default function ToolCard({ title, description, icon: Icon, to, color = 'text-indigo-600' }: ToolCardProps) {
  return (
    <Link 
      to={to} 
      className="group block p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-slate-50 group-hover:bg-indigo-50 transition-colors ${color}`}>
          <Icon size={24} />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500 line-clamp-2">
        {description}
      </p>
    </Link>
  );
}
