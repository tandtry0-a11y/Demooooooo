import { Shield } from 'lucide-react';
import ToolLayout from '../../layouts/ToolLayout';

export default function HashGenerator() {
  return (
    <ToolLayout title="Hash Generator" description="Coming soon..." icon={Shield} color="text-green-600">
      <div className="text-center py-12 text-slate-500">This tool is under development.</div>
    </ToolLayout>
  );
}
