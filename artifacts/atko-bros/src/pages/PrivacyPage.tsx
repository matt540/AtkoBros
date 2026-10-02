import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-lg max-w-none space-y-10 text-foreground/80 leading-relaxed">

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">1. Overview</h2>
              <p>
                Atko Bros Landscaping ("we," "us," or "our") operates this website solely as an informational resource about our landscaping services. This website does not conduct e-commerce, collect payment information, or process financial transactions of any kind.
              </p>
              <p className="mt-3">
                This Privacy Policy describes how we collect, use, and protect the limited personal information you may voluntarily provide when contacting us through this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">2. Information We Collect</h2>
              <p>We only collect information you choose to provide when submitting a contact or consultation request, which may include:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Property address or service location</li>
                <li>Message content describing your landscaping needs</li>
              </ul>
              <p className="mt-3">We do not collect payment details, credit card numbers, or any financial information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">3. How We Use Your Information</h2>
              <p>Information you submit is used solely to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiry or consultation request</li>
                <li>Provide information about our services</li>
                <li>Schedule estimates or site visits</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">4. Cookies & Analytics</h2>
              <p>
                This website may use basic analytics tools (such as Google Analytics) to understand general visitor traffic patterns — for example, which pages are viewed most often. These tools may use cookies. No personally identifiable information is collected through cookies without your knowledge.
              </p>
              <p className="mt-3">You may disable cookies through your browser settings at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">5. Third-Party Links</h2>
              <p>
                Our website contains links to our social media profiles (Instagram, Facebook). Once you leave our site, this Privacy Policy no longer applies, and those platforms have their own privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">6. Data Security</h2>
              <p>
                We take reasonable precautions to protect any information you submit. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">7. Children's Privacy</h2>
              <p>
                This website is not directed at children under 13 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of this website after changes are posted constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="mt-3 space-y-1">
                <li><strong>Email:</strong> atkobroslandscaping@gmail.com</li>
                <li><strong>Phone:</strong> (203) 253-1089</li>
                <li><strong>Address:</strong> Greenwich, CT 06830</li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
