import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "This tool helped me summarize hours of lectures into organized notes!",
    author: "Sarah Johnson",
    role: "Biology Major",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    content: "I've improved my grades significantly since using this note-taking assistant.",
    author: "Michael Chen",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  },
];

export default function Testimonials() {
  return (
    <div className="bg-brand-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Loved by Students
          </h2>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col gap-6 rounded-2xl bg-brand-white p-8 shadow-lg ring-1 ring-brand-gray/10">
                <div className="flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <h3 className="font-semibold leading-7 text-brand-dark">{testimonial.author}</h3>
                    <p className="text-sm leading-6 text-brand-gray">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FDB07C] fill-[#FDB07C]" />
                  ))}
                </div>
                <p className="text-brand-gray">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}