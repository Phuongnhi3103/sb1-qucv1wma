import React from 'react';
import { FileText, Image, Share2, LayoutList } from 'lucide-react';

const features = [
  {
    name: 'Content Summarization',
    description: 'Quickly summarize long lectures or textbooks into concise notes.',
    icon: FileText,
  },
  {
    name: 'Image-to-Text Conversion',
    description: 'Convert handwritten notes or images into editable text with OCR technology.',
    icon: Image,
  },
  {
    name: 'Structured Output',
    description: 'Automatically generate diagrams, tables, and lesson outlines for better comprehension.',
    icon: LayoutList,
  },
  {
    name: 'Collaboration',
    description: 'Share notes with classmates for group study and peer learning.',
    icon: Share2,
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Everything you need to excel
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-gray">
            Powerful features designed to transform your study experience
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start">
                <div className="rounded-lg bg-gradient-to-r from-[#3A1C72] via-[#D56D76] to-[#FDB07C] p-3 text-brand-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <dt className="mt-4 font-semibold text-brand-dark">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-brand-gray">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}