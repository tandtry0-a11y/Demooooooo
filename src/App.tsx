/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

// Text Tools
import CaseConverter from './pages/text/CaseConverter';
import CharacterCount from './pages/text/CharacterCount';
import LoremIpsum from './pages/text/LoremIpsum';

// Security Tools
import PasswordGenerator from './pages/security/PasswordGenerator';
import HashGenerator from './pages/security/HashGenerator';

// Code Tools
import JsonFormatter from './pages/code/JsonFormatter';
import CssMinifier from './pages/code/CssMinifier';

// Web Tools
import UrlEncoderDecoder from './pages/web/UrlEncoderDecoder';
import QrCodeGenerator from './pages/web/QrCodeGenerator';

// Data Tools
import Base64Converter from './pages/data/Base64Converter';
import UuidGenerator from './pages/data/UuidGenerator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          {/* Text Tools */}
          <Route path="text/case-converter" element={<CaseConverter />} />
          <Route path="text/character-count" element={<CharacterCount />} />
          <Route path="text/lorem-ipsum" element={<LoremIpsum />} />

          {/* Security Tools */}
          <Route path="security/password-generator" element={<PasswordGenerator />} />
          <Route path="security/hash-generator" element={<HashGenerator />} />

          {/* Code Tools */}
          <Route path="code/json-formatter" element={<JsonFormatter />} />
          <Route path="code/css-minifier" element={<CssMinifier />} />

          {/* Web Tools */}
          <Route path="web/url-encoder" element={<UrlEncoderDecoder />} />
          <Route path="web/qr-generator" element={<QrCodeGenerator />} />

          {/* Data Tools */}
          <Route path="data/base64" element={<Base64Converter />} />
          <Route path="data/uuid-generator" element={<UuidGenerator />} />

          {/* Fallback */}
          <Route path="*" element={<div className="p-12 text-center text-slate-500">Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
