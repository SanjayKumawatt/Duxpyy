import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, CheckCircle2 } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0514] font-sans text-gray-300 pt-24 pb-20 selection:bg-purple-500 selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
            <FileText className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Governing your use of Duxpy products, services, and website in India.</p>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12 leading-relaxed bg-[#11121c] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          
          {/* Agreement Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-3">Agreement Overview</h2>
            <p>
              These Terms of Service constitute a legally binding agreement between you and Duxpy Technologies Private Limited (together with its affiliates, "Duxpy", "we," "our" or "us") governing your use of our products, services, mobile application (the "App"), and website (the "Site" and collectively with the foregoing, the "Services").
            </p>
          </section>

          {/* Important Notice */}
          <section className="space-y-4 bg-[#161722] border border-purple-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-purple-300 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Important Notice
            </h3>
            <p className="text-sm text-gray-300">
              By clicking "I agree," registering for an account, downloading the app, or using our services, you indicate that you have read, understand, and agree to be bound by these Terms of Service. If you do not agree to these terms, you have no right to access or use the Services.
            </p>
            <p className="text-sm text-gray-300">
              These Terms of Service are effective as of the date you first click "I agree" (or similar button or checkbox) or use or access the Services, whichever is earlier. If you accept or agree to these Terms of Service on behalf of your employer or another legal entity, you represent and warrant that (i) you have full legal authority to bind your employer or such entity; (ii) you have read and understand these Terms of Service; and (iii) you agree on behalf of the party that you represent and any permitted users. Any personal data you submit to us or which we collect about you is governed by our Privacy Policy.
            </p>
            <p className="text-sm text-gray-300">
              You acknowledge that by using the Services, you have reviewed the Privacy Policy. The Privacy Policy is incorporated by reference into these Terms of Service and together form this "Agreement". PLEASE NOTE: THIS AGREEMENT GOVERNS HOW DISPUTES BETWEEN YOU AND DUXPY CAN BE RESOLVED IN ACCORDANCE WITH INDIAN LAWS AND JURISDICTION.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Our Services</h2>
            <p>
              We provide a platform that can record, transcribe, summarize, analyze, and take action on conversations, helping users easily share their conversations and automate their work.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. Account, Password, Security, and Mobile Phone Use</h2>
            <p>
              You must register with Duxpy and create an account to use the Services (an "Account") and as part of that process you will be requested to provide certain information, including without limitation your name, and email address. By using the Services, you agree to provide true, accurate, current and complete information as prompted by the registration process and to maintain and promptly update the Account information.
            </p>
            <p>
              You are the sole authorized user of your Account. You are responsible for maintaining the confidentiality of any log-in, password, and Account number. You are solely and fully responsible for all activities that occur under your password or Account. Duxpy has no control over the use of any user's Account and expressly disclaims any liability derived therefrom. Should you suspect unauthorized use, you agree to contact Duxpy immediately. The person signing up will be the contracting party ("Account Owner"). Your Account is not transferable.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">3. Billing and Payment</h2>
            <p>
              Payment and any other expenses must be paid through the third-party payment processing system (the "PSP") as indicated on the Services. You may be required to register with the PSP and agree to their terms of service. All prices and fees displayed on the Services are exclusive of applicable Government Taxes (such as GST in India). Unless otherwise indicated, prices are listed in Indian Rupees (INR) or U.S. Dollars as applicable to your billing profile.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">4. User Content</h2>
            <p>
              "User Content" is defined as any content, information, and materials that may be textual, audio, or visual that you provide, submit, upload, publish, or make otherwise available to the Services. You are solely responsible for following all laws that apply to User Content, including obtaining third-party permissions. Duxpy is not involved in the creation or development of User Content and disclaims all liability related thereto.
            </p>
            <p>
              You are responsible for compliance with all recording laws. By using the Services, you give Duxpy consent to store recordings for meetings or webinars that you join, if stored on Duxpy's systems. You will receive a notification when recording is enabled, and you may choose to leave the meeting if you do not consent.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">5. Representations and Warranties</h2>
            <p>
              You represent and warrant that (i) you are 18 years of age or older or of legal contract age in your jurisdiction, and (ii) you have the right, authority, and capacity to enter into this Agreement. You agree not to engage in prohibited activities such as unauthorized copying, scraping, transmitting spam, bypassing security features, or using the Services for unlawful purposes.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">6. Technology Services</h2>
            <p className="font-semibold text-gray-200">Artificial Intelligence Services</p>
            <p>
              For certain services, Duxpy may employ Artificial Intelligence (AI) or similar technologies. Duxpy takes reasonable means to preserve privacy and security, but is not liable for loss or harm resulting from user AI usage.
            </p>
            <p className="font-semibold text-gray-200 mt-2">Private Cloud Services</p>
            <p>
              Private Cloud users acknowledge that all Personal User Information, Content, and Confidential Information will be kept strictly confidential. Duxpy is not liable for outages resulting from inadequate management or monitoring by the user.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">7. Termination and Suspension</h2>
            <p>
              You may cancel and delete your Account at any time via the Services or by written notice to <a href="mailto:contact@duxpysystemhub.in" className="text-purple-400 hover:underline">contact@duxpysystemhub.in</a>. Duxpy reserves the right to suspend or terminate access to the Services at its sole discretion if terms are violated.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">8. Subscription</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">Billing and Renewal:</strong> Subscriptions automatically renew unless cancelled. You consent to recurring charges without prior approval for each cycle.</li>
              <li><strong className="text-white">Free Trial:</strong> We offer a 15-day free trial to new users. Accounts revert to the free tier unless upgraded.</li>
              <li><strong className="text-white">Cancellation & Refunds:</strong> All purchases are non-refundable. Cancellations take effect at the end of the current paid term.</li>
              <li><strong className="text-white">Fee Changes:</strong> We may modify subscription fees in accordance with applicable Indian laws.</li>
            </ul>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;