import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-lg max-w-none space-y-10 text-foreground/80 leading-relaxed">

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Atko Bros Landscaping website (atkobroslandscaping.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">2. Informational Purpose Only</h2>
              <p>
                This website is provided strictly for informational purposes. It describes the landscaping, lawn care, firewood delivery, and related services offered by Atko Bros Landscaping. This website does not constitute an offer or contract for services, nor does it process any transactions or payments.
              </p>
              <p className="mt-3">
                All service agreements, pricing, and scheduling are confirmed directly between Atko Bros Landscaping and the customer outside of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">3. No E-Commerce or Payment Processing</h2>
              <p>
                This website does not sell products or services online. No payments, orders, or financial transactions of any kind are processed through this site. Any pricing displayed is for general reference only and may vary based on individual project scope and location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">4. Accuracy of Information</h2>
              <p>
                We strive to keep the information on this website accurate and up to date. However, Atko Bros Landscaping makes no warranties or representations regarding the completeness, accuracy, or timeliness of any content on this site. Services, pricing, and availability are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">5. Intellectual Property</h2>
              <p>
                All content on this website — including text, photographs, logos, and graphics — is the property of Atko Bros Landscaping or its content suppliers and is protected by applicable copyright and intellectual property laws. Unauthorized use or reproduction is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">6. Contact Form & Inquiries</h2>
              <p>
                Submitting a contact or consultation request through this website does not create a binding service agreement. All requests will be reviewed, and a representative will follow up to discuss your project. Response times may vary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">7. Third-Party Links</h2>
              <p>
                This website may contain links to external websites such as our social media pages. Atko Bros Landscaping is not responsible for the content or practices of any third-party sites and does not endorse them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">8. Limitation of Liability</h2>
              <p>
                Atko Bros Landscaping shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information contained herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">9. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the State of Connecticut, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">10. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Changes will be effective upon posting to this page with an updated date. Continued use of the site constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">11. Contact Us</h2>
              <p>For questions regarding these Terms of Service, please reach out:</p>
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
