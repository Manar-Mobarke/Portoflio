'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'

export function AboutSection() {
  return (
    <>
      <section id="about-me" className="relative py-24">
        <SectionHeading title="about-me" width="w-[300px]" />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* LEFT: Text Content */}
          <div className="flex flex-col gap-6 text-secondary">
            <p className="text-foreground">Hello, i'm Manar!</p>
            
            <p>
              I'm a Full-Stack Developer based in Qena, Egypt. I can develop responsive websites and robust backend systems from scratch and raise them into modern user-friendly web experiences.
            </p>

            <p>
              With end-to-end experience across React.js/Next.js front-ends and Node.js back-ends, I enjoy turning complex problems into elegant solutions. I am currently completing an intensive MEA|RN + Generative AI program at ITI, and I'm a B.Eng. graduate with a Distinction-grade embedded systems capstone.
            </p>

            <div>
              <button className="inline-flex items-center justify-center px-6 py-2 border border-primary text-foreground hover:bg-primary/10 transition-colors mt-4">
                Read more -&gt;
              </button>
            </div>
          </div>

          {/* RIGHT: Image Placeholder */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Dots */}
             <div className="absolute top-12 left-12 flex gap-4 flex-wrap w-24 z-10">
               {[...Array(25)].map((_, i) => (
                 <div key={`dot3-${i}`} className="w-1 h-1 rounded-full bg-secondary"></div>
               ))}
             </div>
             
             <div className="absolute bottom-1/4 right-0 flex gap-4 flex-wrap w-24 z-10">
               {[...Array(25)].map((_, i) => (
                 <div key={`dot4-${i}`} className="w-1 h-1 rounded-full bg-secondary"></div>
               ))}
             </div>

             {/* Placeholder for the person image */}
             <div className="w-72 h-96 border-b border-primary relative flex flex-col justify-end items-center bg-surface pb-4 z-0">
               <div className="text-secondary text-sm">[About Image Placeholder]</div>
             </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section id="fun-facts" className="relative py-12">
        <SectionHeading title="my-fun-facts" width="w-[150px]" />
        <div className="flex flex-wrap gap-4 mt-8 max-w-3xl">
          <div className="border border-secondary p-2 text-secondary text-sm h-fit">I like winter more than summer</div>
          <div className="border border-secondary p-2 text-secondary text-sm h-fit">I often code with my friends</div>
          <div className="border border-secondary p-2 text-secondary text-sm h-fit">I like pizza and pasta</div>
          <div className="border border-secondary p-2 text-secondary text-sm h-fit">I'm a hardware geek</div>
          <div className="border border-secondary p-2 text-secondary text-sm h-fit">My favorite movie is The Green Mile</div>
          <div className="border border-secondary p-2 text-secondary text-sm h-fit">I have built IoT devices</div>
        </div>
      </section>
    </>
  )
}
