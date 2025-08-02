import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Simpl Healthcare',
  description: 'Simpl Healthcare Privacy Policy & Notice of California Privacy Rights. Learn how we protect your personal information and data.',
  keywords: 'privacy policy, data protection, HIPAA compliance, California privacy rights, personal information, healthcare data privacy',
}

export default function PrivacyPolicy() {
  return (
    <main>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-simpl-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Privacy Policy
            </h1>
            
            <div className="text-lg text-simpl-dark-grey mb-8 font-manrope">
              <strong>Last updated: July 22, 2024</strong>
            </div>

            <div className="prose prose-lg max-w-none text-simpl-dark-grey leading-relaxed font-manrope">
              <h2 className="text-3xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Simpl Privacy Policy & Notice of California Privacy Rights
              </h2>
              
              <p className="mb-6">
                This Privacy Policy & Notice of California and Other State Privacy Rights, together with our Terms of Service and any other document referenced (whether by means of a hyperlink or otherwise) in this Privacy Policy or our Terms of Service, governs your access to, and use of, the websites, mobile applications and other products and services (collectively, the "Services") that are provided by Simpl Healthcare, Inc., a Delaware corporation, and its affiliates and subsidiaries ("Simpl," "we" or "us").
              </p>

              <p className="mb-6">
                We are committed to maintaining the privacy of information that you provide to us when using the Services. We aim to simplify healthcare processes while committing to the protection of your data and personal information. This Privacy Policy describes how we treat information we receive or obtain about you when you visit our websites, use our Services, or otherwise interact with us. We are focused on optimizing patient care and providing healthcare professionals with comprehensive data for informed decisions and streamlining communication among patients, providers and payers through the use of our proprietary platform.
              </p>

              <p className="mb-6">
                If you are a patient using the Services, please also refer to the "Patient Facing Terms of Use" in our patient portal. If any provision in this Privacy Policy conflicts with any provision in the Patient Facing Terms of Use accepted by a patient, the provision in your Patient Facing Terms of Use will control to the extent of such conflict.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Information We Collect About You
              </h3>

              <p className="mb-4"><strong>General:</strong> When you use the Services, sign up to receive emails from us, and at other times, we may ask you to provide us with certain categories of personal information, including health information. Personal information is information that could reasonably be used to identify you personally, such as your name, date of birth, age, gender, occupation, industry, interests, e-mail address(es), physical address, telephone number(s), profession, facts about your computers and other devices through which you access the Services, health information, such as diagnoses, treatments, prescriptions, and other healthcare-related information relating to you and your providers, any information we receive from the applicable third parties when you register or otherwise interact with the Services by means of such third parties, and similar information (collectively, to the extent we collect it from time to time, and together with Survey Information and Usage Information, "Personal Information").</p>

              <p className="mb-4"><strong>Credit card information:</strong> If you use a credit card to sign up for the Services, the credit card information you provide for the Services is stored and used by our third-party credit card processors in order for them to process your payments.</p>

              <p className="mb-4"><strong>Usage Information:</strong> We automatically collect IP addresses, Web site usage information and other technical information regarding your interaction with the Services ("Usage Information"). This information helps us evaluate how our users access and navigate our Web sites on an aggregate basis, including the number and frequency of users to each Web page, the length of their visits, the web browser version they use, and any publications or other information that they download.</p>

              <p className="mb-4"><strong>Testimonials:</strong> We may display personal testimonials of satisfied users on our Web sites from time to time. With your consent, we may post your testimonial along with your name. If you wish to update or delete your testimonial, please contact us at support@simplhealthcare.com.</p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                How We Use the Information Collected
              </h3>

              <p className="mb-6">
                Our primary goal in collecting your Personal information is to provide you with an enhanced experience when using the Services. We may use information about you, including Personal Information in the following ways:
              </p>

              <ul className="mb-6 space-y-2 list-disc pl-6">
                <li>To enable us to process, validate and verify subscriptions</li>
                <li>To send you e-mail notifications about our new or existing products and services, special offers, or to otherwise contact you</li>
                <li>To enhance existing features or develop new features, products and services</li>
                <li>To provide advertisers and other third parties with aggregate information about our user base and usage patterns</li>
                <li>To allow us to personalize the content and advertising that you and others see based on personal characteristics or preferences</li>
                <li>To enable you to participate in drawings or other special offers</li>
              </ul>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                California Privacy Rights
              </h3>

              <p className="mb-4">
                To exercise any of the rights listed below, please email us at support@simplhealthcare.com.
              </p>

              <ul className="mb-6 space-y-3 list-disc pl-6">
                <li><strong>Right to Know:</strong> You have the right to request that we disclose to you the categories of personal information we have collected about you, as well as the sources of that personal information.</li>
                <li><strong>Right to Access:</strong> You have the right to request, up to two times per year, access to categories and specific personal information about you that we have collected and shared with our clients and brand partners.</li>
                <li><strong>Right to Delete:</strong> You have the right to request that we delete personal information we collect from you, subject to exceptions allowed by law.</li>
                <li><strong>Right to Correct:</strong> You have the right to request that we correct inaccurate personal information that we maintain about you, subject to exceptions allowed by law.</li>
                <li><strong>Right to Opt Out of Sale or Sharing:</strong> You have the right to "opt out" of the "sale" or "sharing" of your "personal information" to or with "third parties" (as each of those terms is defined by California law).</li>
                <li><strong>Right to Not Receive Discriminatory Treatment:</strong> You have the right to not be discriminated against on the basis of exercising the rights above.</li>
              </ul>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Other State Privacy Rights
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-simpl-grey p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Colorado Privacy Rights</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to Access</li>
                    <li>• Right to Delete</li>
                    <li>• Right to Correct</li>
                    <li>• Right to Opt Out of Targeted Advertising and Sale of Personal Data</li>
                  </ul>
                </div>

                <div className="bg-simpl-grey p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Connecticut Privacy Rights</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to Access</li>
                    <li>• Right to Delete</li>
                    <li>• Right to Correct</li>
                    <li>• Right to Opt Out of Targeted Advertising and Sale of Personal Data</li>
                  </ul>
                </div>

                <div className="bg-simpl-grey p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Utah Privacy Rights</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to Access</li>
                    <li>• Right to Delete</li>
                    <li>• Right to Correct</li>
                    <li>• Right to Opt Out of Targeted Advertising and Sale of Personal Data</li>
                  </ul>
                </div>

                <div className="bg-simpl-grey p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Virginia Privacy Rights</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to Access</li>
                    <li>• Right to Delete</li>
                    <li>• Right to Correct</li>
                    <li>• Right to Opt Out of Targeted Advertising and Sale of Personal Data</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Data Retention
              </h3>

              <p className="mb-6">
                We retain Personal Information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. For healthcare data, we follow applicable medical records retention requirements, which may require retention for up to seven years or longer depending on state law and the type of information.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                International Data Transfers
              </h3>

              <p className="mb-6">
                Your Personal Information is processed and stored in the United States. If you are accessing our Services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our central database is operated. By using our Services, you consent to the transfer of your information to the United States.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Security Measures
              </h3>

              <p className="mb-4">
                We implement comprehensive security measures to protect your Personal Information, including:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-bold text-simpl-black mb-3 font-manrope">Technical Safeguards</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 256-bit AES encryption at rest</li>
                    <li>• TLS 1.2+ encryption in transit</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Regular security updates and patches</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-bold text-simpl-black mb-3 font-manrope">Administrative Safeguards</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Role-based access controls</li>
                    <li>• Regular security training</li>
                    <li>• Incident response procedures</li>
                    <li>• Third-party security audits</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Children's Privacy
              </h3>

              <p className="mb-6">
                Our Services are not intended for children under the age of 13, and we do not knowingly collect Personal Information from children under 13. If we become aware that we have collected Personal Information from a child under 13, we will take steps to delete such information. If you are a parent or guardian and believe your child has provided us with Personal Information, please contact us at support@simplhealthcare.com.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Third-Party Links and Services
              </h3>

              <p className="mb-6">
                Our Services may contain links to third-party websites or integrate with third-party services. This Privacy Policy does not apply to such third-party websites or services. We encourage you to review the privacy policies of any third-party websites or services before providing them with your Personal Information.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Policy Modifications
              </h3>

              <p className="mb-6">
                We may change this Privacy Policy from time to time. We will post any changes here and revise the "Last Updated" date accordingly, so be sure to check back periodically. For changes to this Privacy Policy that may be materially less restrictive on our use or disclosure of Personal Information you have provided to us, we will attempt to obtain your consent before implementing the change.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Choice/Opt-Out
              </h3>

              <p className="mb-6">
                We provide our users the opportunity to opt-out of receiving communications from us and our business partners. To remove your information from our database, please send an e-mail request to support@simplhealthcare.com.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Correcting/Updating Your Information
              </h3>

              <p className="mb-6">
                You can change or modify information you previously provided to us by sending an email to support@simplhealthcare.com.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Comments and Questions
              </h3>

              <p className="mb-8">
                If you have any comments or questions about this Privacy Policy, our privacy practices, the Services, or your dealings with us, you can contact us at support@simplhealthcare.com.
              </p>

              <div className="bg-simpl-green/10 p-6 rounded-lg border border-simpl-green/20">
                <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Contact Information</h4>
                <p className="text-simpl-dark-grey">
                  <strong>Email:</strong> support@simplhealthcare.com<br/>
                  <strong>Address:</strong> Simpl Healthcare, Inc.<br/>
                  Delaware Corporation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 