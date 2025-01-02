import React from 'react';
import { Upload, Cpu, Download } from 'lucide-react';

const steps = [
  {
    name: 'Upload',
    description: 'Upload lecture recordings, text, or images',
    icon: Upload,
  },
  {
    name: 'Process',
    description: 'Our assistant processes and summarizes the content',
    icon: Cpu,
  },
  {
    name: 'Download',
    description: 'Download or share the refined notes with others',
    icon: Download,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-brand-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-gray">
            Three simple steps to better notes
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.name} className="flex flex-col items-center text-center">
                <div className="rounded-lg bg-gradient-to-r from-[#3A1C72] via-[#D56D76] to-[#FDB07C] p-3 text-brand-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <dt className="mt-4 font-semibold text-brand-dark">
                  {index + 1}. {step.name}
                </dt>
                <dd className="mt-2 leading-7 text-brand-gray">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}