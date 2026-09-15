import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-20 font-sans text-gray-900 bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center border-b border-gray-100">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          At DUXPY TECHNOLOGIES PRIVATE LIMITED, your privacy and data security are our top priorities. This policy explains how we collect, use, and protect your information.
        </p>
      </section>

      {/* --- POLICY CONTENT --- */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-blue prose-lg max-w-none text-gray-600">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Introduction</h2>
          <p className="mb-6 leading-relaxed">
            Welcome to DUXPY TECHNOLOGIES PRIVATE LIMITED ("we", "our", or "us"). We operate the website <a href="https://duxpysystemhub.in" className="text-blue-600 hover:underline">duxpysystemhub.in</a> and provide business process automation and document management solutions. We respect your privacy and are committed to protecting your personal data in compliance with applicable Indian laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Information We Collect</h2>
          <p className="mb-4 leading-relaxed">
            We may collect the following types of information when you interact with our platform:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company details when you request beta access, schedule a demo, or contact us.</li>
            <li><strong>Technical Data:</strong> IP addresses, browser types, operating systems, and usage details collected automatically through cookies and similar tracking technologies.</li>
            <li><strong>Service Data:</strong> Data and documents you upload for processing through our modules (Flow, Inbound, Outbound, Agent, Form). We process this data strictly to provide our services to you.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. How We Use Your Information</h2>
          <p className="mb-4 leading-relaxed">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To provide, maintain, and improve our services and AI modules.</li>
            <li>To process your requests for beta access and demos.</li>
            <li>To communicate with you regarding updates, security alerts, and support messages.</li>
            <li>To comply with legal obligations and enforce our terms of service.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Data Storage and Security</h2>
          <p className="mb-6 leading-relaxed">
            We implement robust, industry-standard security measures to protect your data against unauthorized access, alteration, or destruction. We offer isolated cloud environments and on-premise deployment options to ensure data localization requirements under Indian law are strictly met. Your data is stored on secure servers, and we limit access strictly to authorized personnel.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Sharing of Your Information</h2>
          <p className="mb-6 leading-relaxed">
            We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
            <br/><br/>
            - With trusted service providers who assist us in operating our platform (under strict confidentiality agreements).
            <br/>
            - If required by law, court order, or government request from recognized Indian authorities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Your Rights</h2>
          <p className="mb-6 leading-relaxed">
            Under the DPDP Act, you have the right to access, correct, or request the erasure of your personal data. You also have the right to withdraw consent for data processing at any time. To exercise these rights, please contact our Grievance Officer using the details provided below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Changes to This Policy</h2>
          <p className="mb-6 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any modifications will be effective immediately upon posting on this page. We encourage you to review this policy periodically.
          </p>

        </div>
      </section>

      {/* --- CONTACT / GRIEVANCE SECTION --- */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us & Grievance Redressal</h2>
          <p className="text-gray-600 mb-8">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us.
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

export default Privacy;