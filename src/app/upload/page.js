'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [files, setFiles] = useState([]);
  const [jobDescription, setJobDescription] = useState('We are looking for a product-minded frontend engineer with strong React experience, excellent communication skills, and a UX-focused mindset.');

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  };

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Upload</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Bring in resumes and define the ideal role</h1>
        <p className="mt-3 max-w-2xl text-slate-400">Use this workspace to upload candidate documents and evaluate them against a job brief in a single experience.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Resume intake</h2>
          <div className="mt-4 rounded-[1.5rem] border border-dashed border-cyan-400/30 bg-cyan-400/10 p-8 text-center">
            <p className="text-lg font-medium text-white">Drag and drop resumes here</p>
            <p className="mt-2 text-sm text-slate-400">PDF, DOCX, or TXT files are supported</p>
            <label className="mt-5 inline-flex cursor-pointer rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Choose files
              <input type="file" multiple className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <div className="mt-4 space-y-2">
            {files.length > 0 ? (
              files.map((file) => (
                <div key={file.name} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                  {file.name}
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">No files selected yet.</p>
            )}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Job description</h2>
          <textarea
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
            className="mt-4 min-h-44 w-full rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300 outline-none ring-0"
          />

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-cyan-300">Suggested evaluation criteria</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>• React and Next.js experience</li>
              <li>• Strong UI/UX intuition</li>
              <li>• Clear communication and collaboration</li>
            </ul>
          </div>

          <button className="mt-5 rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Generate ranking
          </button>
        </div>
      </div>
    </section>
  );
}
