import { useRef } from "react";
import { Star, Quote, Award } from "lucide-react";

const testimonials = [
  {
    name: "Scott M.",
    text: "The Atko team has my grass green in the summer, keeps me plowed in the winter and has the best firewood!"
  },
  {
    name: "Ulrike P.",
    text: "Great place for firewood. Easy to place an order by text, extremely fast response and delivery. Good price and they stack everything in your rack."
  },
  {
    name: "Richard K.",
    text: "I am a builder, so I feel qualified to say that the Atko Bros firewood delivery business is the best I have ever encountered. The kiln dried firewood exceeded my expectations."
  },
  {
    name: "Katie M.",
    text: "We use Atko Bros for landscaping and have been incredibly pleased with them. Brett is incredibly communicative and knowledgeable and the team has been very reliable."
  },
  {
    name: "Donal C.",
    text: "We had our yard completely remodeled this summer with bluestone, Belgian block, new driveway, and new sod. It was a great experience and the work was first class."
  },
  {
    name: "Sandra B.",
    text: "The Atko Bros are wonderful to work with. So detail oriented and offer immaculate service. I cannot recommend them enough!"
  },
  {
    name: "Stacey S.",
    text: "I couldn't be happier with the level of service I receive from the team at Atko. Because of their knowledge and amazing service, we decided to hire them to take over all our landscaping."
  },
  {
    name: "Yannick P.",
    text: "Best service ever, been a client for over 6 years now!"
  },
  {
    name: "Alan P.",
    text: "The attention to detail is great! The staff and management are always looking to out do themselves."
  },
];

function TestimonialCard({ test }: { test: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl p-8 relative border border-black/8 shadow-sm w-[340px] shrink-0 mx-4">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-black/5" />
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-foreground/70 leading-relaxed font-light italic mb-6 relative z-10">
        "{test.text}"
      </p>
      <div className="border-t border-black/8 pt-5">
        <h4 className="font-serif text-foreground text-lg">{test.name}</h4>
      </div>
    </div>
  );
}

export function Testimonials() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="pt-24 pb-12 bg-secondary border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">What Clients Say</span>
            <div className="h-[1px] w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Client <span className="italic green-gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted-foreground whitespace-nowrap mx-auto mb-6">
            Don't just take our word for it. Hear from the homeowners who trust us with their properties.
          </p>
          <div className="inline-flex items-center gap-3 bg-white border border-black/8 rounded-full px-6 py-3 shadow-sm">
            <Award className="w-5 h-5 text-primary shrink-0" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground text-sm">80 Five-Star Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Scrolling marquee — full bleed */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {duplicated.map((test, i) => (
            <TestimonialCard key={i} test={test} />
          ))}
        </div>
      </div>
    </section>
  );
}
