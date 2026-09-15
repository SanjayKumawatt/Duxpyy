import React from 'react';
import { Scale, Mail, MapPin } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-20 font-sans text-gray-900 bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center border-b border-gray-100">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Scale className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-6">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Please read these Terms of Service carefully before using the services provided by DUXPY TECHNOLOGIES PRIVATE LIMITED.
        </p>
      </section>

      {/* --- TERMS CONTENT --- */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-blue prose-lg max-w-none text-gray-600">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Acceptance of Terms</h2>
          <p className="mb-6 leading-relaxed">
            By accessing or using the website <a href="https://duxpysystemhub.in" className="text-blue-600 hover:underline">duxpysystemhub.in</a> and the software modules (Flow, Agent, Inbound, Outbound, Form) provided by DUXPY TECHNOLOGIES PRIVATE LIMITED ("DUXPY Tech", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our platform or services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Description of Services</h2>
          <p className="mb-6 leading-relaxed">
            DUXPY Tech provides a suite of developing business process automation and intelligent document processing tools. As an early-stage platform, our services are continuously evolving. We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. User Responsibilities</h2>
          <p className="mb-4 leading-relaxed">
            As a user of our platform, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide accurate and complete information during beta access registration or account creation.</li>
            <li>Maintain the security and confidentiality of your account credentials.</li>
            <li>Use the services strictly for lawful business purposes and in compliance with all applicable Indian and international laws.</li>
            <li>Not upload any malicious code, viruses, or illegal documents onto our platform.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Data and Privacy</h2>
          <p className="mb-6 leading-relaxed">
            You retain all ownership rights to the documents and data you upload to our platform. However, by uploading data, you grant us a temporary, restricted license to process it solely for the purpose of providing the service to you. Our data handling practices are governed by our Privacy Policy and are in compliance with the Digital Personal Data Protection Act, 2023.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Intellectual Property Rights</h2>
          <p className="mb-6 leading-relaxed">
            All intellectual property rights in the DUXPY Tech platform, including but not limited to the UI/UX, software code, AI models, and branding, are owned entirely by DUXPY TECHNOLOGIES PRIVATE LIMITED. You may not copy, reverse-engineer, or create derivative works from our platform without our explicit written consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Limitation of Liability</h2>
          <p className="mb-6 leading-relaxed">
            To the maximum extent permitted by Indian law, DUXPY Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use or inability to use the services. Our platform is provided on an "AS IS" and "AS AVAILABLE" basis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Governing Law and Jurisdiction</h2>
          <p className="mb-6 leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Kanpur Nagar, Uttar Pradesh, India.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Modifications to Terms</h2>
          <p className="mb-6 leading-relaxed">
            We reserve the right to revise these Terms of Service at any time. Any changes will be posted on this page and will become effective immediately upon posting. Your continued use of the platform after such changes constitutes your acceptance of the new Terms.
          </p>

        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About Our Terms?</h2>
          <p className="text-gray-600 mb-8">
            If you have any questions or require clarification regarding these Terms of Service, please reach out to our legal team.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-white px-6 py-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:contact@duxpysystemhub.in" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                contact@duxpysystemhub.in
              </a>
            </div>
            
            <div className="bg-white px-6 py-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center gap-3 text-left">
              <MapPin className="w-6 h-6 text-blue-600 shrink-0" />
              <span className="text-gray-800 text-sm font-medium">
                Sf1/448, Safipur 1, Harjinder Nagar,<br/> Kanpur Nagar, UP, India 208007
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Terms;