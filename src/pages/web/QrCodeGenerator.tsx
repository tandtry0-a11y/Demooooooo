import { useState, useRef } from 'react';
import { QrCode, Download, Link } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import ToolLayout from '../../layouts/ToolLayout';

export default function QrCodeGenerator() {
  const [text, setText] = useState('https://toolsbyvijay.vercel.app');
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQrCode = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = 'qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <ToolLayout
      title="QR Code Generator"
      description="Generate customizable QR codes for URLs, text, and more."
      icon={QrCode}
      color="text-purple-600"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Content</label>
            <div className="relative">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter URL or text..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
              />
              <Link className="absolute left-3 top-3.5 text-slate-400" size={20} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Size: {size}px</label>
            <input
              type="range"
              min="128"
              max="512"
              step="32"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Foreground Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="h-10 w-10 rounded cursor-pointer border-0 p-0"
                />
                <span className="text-sm font-mono text-slate-500">{fgColor}</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Background Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="h-10 w-10 rounded cursor-pointer border-0 p-0"
                />
                <span className="text-sm font-mono text-slate-500">{bgColor}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <div ref={qrRef} className="bg-white p-4 rounded-xl shadow-sm">
            <QRCodeCanvas
              value={text}
              size={size}
              fgColor={fgColor}
              bgColor={bgColor}
              level="H"
              includeMargin={true}
            />
          </div>
          <button
            onClick={downloadQrCode}
            className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-lg shadow-purple-200 transition-all active:scale-[0.98] flex items-center gap-2"
          >
            <Download size={20} />
            Download PNG
          </button>
        </div>
      </div>
    </ToolLayout>
  );
}
