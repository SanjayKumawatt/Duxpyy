import React from 'react';
import { ShieldCheck, Lock, FileText, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-gray-300 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
            <ShieldCheck className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
        </div>

        {/* Policy Content */}
        <div className="space-y-10 leading-relaxed">
          <section>
            <p>
              This policy describes what information we collect when you use Duxpy site, services, products, and content (“Services”). It also provides information about how we store, transfer, use, and delete that information. This policy applies to Duxpy online meeting recording & transcription tool, including the website and web applications (collectively “the Websites”). 
            </p>
            <p className="mt-4">
              Where we act as a Data Fiduciary regarding your personal data, we ensure processing is done in alignment with applicable Indian data protection laws and general data protection principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
            <p>We at Duxpy are committed to safeguarding the privacy of our users. We only collect and process information necessary to deliver our services. Duxpy does not access your recordings or transcripts unless you explicitly share access with our support team for technical assistance.</p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-bold text-white flex items-center gap-2"><UserIcon className="w-4 h-4 text-blue-400"/> User account information</h4>
                <p className="text-sm mt-1">When registering via external authentication services (e.g., Google), we fetch and store your email address, name, and profile image URL.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-white flex items-center gap-2"><Database className="w-4 h-4 text-blue-400"/> Usage & Technical Log Data</h4>
                <p className="text-sm mt-1">We collect metadata, IP addresses, browser information, and navigation paths to maintain and improve our services, prevent abuse, and provide technical support.</p>
              </div>

              <div>
                <h4 className="font-bold text-white flex items-center gap-2"><FileText className="w-4 h-4 text-blue-400"/> Video Recordings & Transcripts</h4>
                <p className="text-sm mt-1">As you use Duxpy to record meetings, you are responsible for collecting consent from all participants in accordance with local regulations. Transcripts and recordings are stored securely and are not accessed by Duxpy without your specific request.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data Use</h2>
            <p>Duxpy uses collected data to:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
              <li>Provide, maintain, and improve our Services.</li>
              <li>Notify you about service changes or policy updates.</li>
              <li>Provide customer support.</li>
              <li>Detect, prevent, and address technical issues or abuse.</li>
              <li>Fulfill our contractual and legal obligations (including billing).</li>
              <li>Communicate regarding account management and service notifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purposes outlined. Transaction information is retained in accordance with financial and tax regulations. Account information is retained until you delete your account. Sensitive personal information, including meeting recordings, is by default deleted after 6 months of inactivity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Transfer & Security</h2>
            <p>We use appropriate technical and organizational security measures to prevent data loss, misuse, or unauthorized access. All connections are encrypted using SSL/TLS. We utilize secure cloud infrastructure providers certified with ISO 27001 and SOC 2 compliance. Access to your personal data is restricted to authorized personnel who require it for business purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Access and export your personal data.</li>
              <li>Rectify inaccurate personal data.</li>
              <li>Object to or restrict our processing of your data.</li>
              <li>Request erasure ("Right to be forgotten") of your data.</li>
            </ul>
            <p className="mt-4">To exercise these rights or for any privacy-related queries, please contact our Privacy Team at <a href="mailto:contact@duxpysystemhub.in" className="text-purple-400 hover:underline">contact@duxpysystemhub.in</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Children’s Privacy</h2>
            <p>Our Services are not directed to children under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us immediately so we can remove it.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

// Helper Icon for layout
const UserIcon = ({ className }) => <span className={className}>👤</span>;

export default Privacy;