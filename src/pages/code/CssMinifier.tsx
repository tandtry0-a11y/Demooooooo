import { Code } from 'lucide-react';
import ToolLayout from '../../layouts/ToolLayout';

export default function CssMinifier() {
  return (
    <ToolLayout title="CSS Minifier" description="Coming soon..." icon={Code} color="text-orange-600">
      <div className="text-center py-12 text-slate-500">This tool is under development.</div>
    </ToolLayout>
  );
}
