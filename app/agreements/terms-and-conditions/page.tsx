import type { Metadata } from 'next'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Simpl Healthcare',
  description: 'Simpl Healthcare Terms and Conditions including Master Service Agreement. Review our terms of use and service agreements.',
  keywords: 'terms and conditions, master service agreement, MSA, terms of use, service agreement, healthcare technology agreement',
}

export default function TermsAndConditions() {
  return (
    <main>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-simpl-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Terms and Conditions
            </h1>
            
            <div className="text-lg text-simpl-dark-grey mb-8 font-manrope">
              <strong>Master Service Agreement</strong><br/>
              <strong>Last updated: July 22, 2024</strong>
            </div>

            <div className="prose prose-lg max-w-none text-simpl-dark-grey leading-relaxed font-manrope">
              <h2 className="text-3xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Master Service Agreement
              </h2>
              
              <p className="mb-6">
                This Master Service Agreement ("Agreement") is entered into between Simpl Healthcare, Inc., a Delaware corporation ("Simpl," "we," "us," or "our"), and the customer ("Customer," "you," or "your") accessing or using Simpl's healthcare technology platform and related services.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                1. Services
              </h3>

              <p className="mb-4">
                <strong>1.1 Platform Services:</strong> Simpl provides a cloud-based healthcare technology platform that includes electronic health record (EHR) functionality, practice management tools, interoperability services, telehealth capabilities, and related healthcare software solutions (collectively, the "Services").
              </p>

              <p className="mb-4">
                <strong>1.2 Service Level Agreement:</strong> Simpl will use commercially reasonable efforts to maintain 99.9% uptime for the Services, excluding scheduled maintenance windows.
              </p>

              <p className="mb-6">
                <strong>1.3 Updates and Modifications:</strong> Simpl may update, modify, or enhance the Services from time to time. Material changes will be communicated to Customer with reasonable advance notice.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                2. Customer Obligations
              </h3>

              <p className="mb-4">
                <strong>2.1 Compliance:</strong> Customer agrees to use the Services in compliance with all applicable laws, regulations, and industry standards, including but not limited to HIPAA, HITECH, and other healthcare privacy and security regulations.
              </p>

              <p className="mb-4">
                <strong>2.2 Data Accuracy:</strong> Customer is responsible for the accuracy, completeness, and legality of all data entered into or transmitted through the Services.
              </p>

              <p className="mb-6">
                <strong>2.3 User Management:</strong> Customer is responsible for managing user access, training, and ensuring proper use of the Services by all authorized users.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                3. Data Security and Privacy
              </h3>

              <p className="mb-4">
                <strong>3.1 Data Protection:</strong> Simpl implements industry-standard security measures to protect Customer data, including encryption in transit and at rest, access controls, and regular security audits.
              </p>

              <p className="mb-4">
                <strong>3.2 HIPAA Compliance:</strong> For customers subject to HIPAA, a separate Business Associate Agreement (BAA) will govern the handling of protected health information (PHI).
              </p>

              <p className="mb-6">
                <strong>3.3 Data Backup:</strong> Simpl maintains regular backups of Customer data and implements disaster recovery procedures to ensure data availability and integrity.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                4. Intellectual Property
              </h3>

              <p className="mb-4">
                <strong>4.1 Simpl IP:</strong> The Services, including all software, algorithms, and proprietary technology, remain the exclusive property of Simpl and its licensors.
              </p>

              <p className="mb-4">
                <strong>4.2 Customer Data:</strong> Customer retains all rights to its data entered into or generated through the Services. Simpl may use aggregated, de-identified data for analytics and service improvement purposes.
              </p>

              <p className="mb-6">
                <strong>4.3 Feedback:</strong> Any feedback, suggestions, or improvements provided by Customer may be used by Simpl without restriction or compensation.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                5. Payment Terms
              </h3>

              <p className="mb-4">
                <strong>5.1 Fees:</strong> Customer agrees to pay all fees as specified in the applicable Service Order or subscription agreement. Fees are non-refundable except as expressly stated.
              </p>

              <p className="mb-4">
                <strong>5.2 Payment Schedule:</strong> Fees are due and payable in advance according to the billing schedule specified in the Service Order.
              </p>

              <p className="mb-6">
                <strong>5.3 Late Payments:</strong> Late payments may result in service suspension and additional charges as specified in the Service Order.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                6. Term and Termination
              </h3>

              <p className="mb-4">
                <strong>6.1 Term:</strong> This Agreement commences on the date Customer first accesses the Services and continues until terminated in accordance with these terms.
              </p>

              <p className="mb-4">
                <strong>6.2 Termination for Cause:</strong> Either party may terminate this Agreement immediately upon written notice if the other party materially breaches the Agreement and fails to cure such breach within thirty (30) days.
              </p>

              <p className="mb-6">
                <strong>6.3 Data Retrieval:</strong> Upon termination, Customer may export its data in a standard format for ninety (90) days, after which Simpl may delete Customer data in accordance with its data retention policies.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                7. Limitation of Liability
              </h3>

              <p className="mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIMPL'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE AMOUNT PAID BY CUSTOMER TO SIMPL IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. IN NO EVENT SHALL SIMPL BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                8. Warranty Disclaimer
              </h3>

              <p className="mb-6">
                THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. SIMPL DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                9. Governing Law
              </h3>

              <p className="mb-6">
                This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                10. Indemnification
              </h3>

              <p className="mb-4">
                <strong>10.1 Customer Indemnification:</strong> Customer shall defend, indemnify, and hold harmless Simpl from and against any claims, damages, or expenses arising from Customer's use of the Services in violation of this Agreement or applicable law, or from Customer Data.
              </p>

              <p className="mb-6">
                <strong>10.2 Simpl Indemnification:</strong> Simpl shall defend, indemnify, and hold harmless Customer from and against any claims that the Services infringe a third party's intellectual property rights, provided Customer promptly notifies Simpl of such claim.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                11. Confidentiality
              </h3>

              <p className="mb-4">
                <strong>11.1 Definition:</strong> "Confidential Information" means any non-public, proprietary information disclosed by one party to the other, including but not limited to technical data, business plans, and customer information.
              </p>

              <p className="mb-4">
                <strong>11.2 Obligations:</strong> Each party agrees to maintain the confidentiality of the other party's Confidential Information and use it solely for the purposes of this Agreement.
              </p>

              <p className="mb-6">
                <strong>11.3 Exceptions:</strong> Obligations do not apply to information that is publicly available, independently developed, or rightfully received from a third party.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                12. Force Majeure
              </h3>

              <p className="mb-6">
                Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, or internet outages.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                13. Entire Agreement
              </h3>

              <p className="mb-6">
                This Agreement, together with any Service Orders and exhibits, constitutes the entire agreement between the parties and supersedes all prior agreements, understandings, and communications relating to the subject matter hereof.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                14. Amendment and Waiver
              </h3>

              <p className="mb-4">
                <strong>14.1 Amendments:</strong> This Agreement may only be amended by written agreement signed by both parties.
              </p>

              <p className="mb-6">
                <strong>14.2 Waiver:</strong> No waiver of any provision shall be deemed or shall constitute a waiver of any other provision or of the same provision on a future occasion.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                15. Severability
              </h3>

              <p className="mb-6">
                If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect, and the invalid provision shall be replaced with a valid provision that most closely approximates the intent of the original provision.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                16. Assignment
              </h3>

              <p className="mb-6">
                Customer may not assign this Agreement without Simpl's prior written consent. Simpl may assign this Agreement to any affiliate or in connection with a merger, acquisition, or sale of all or substantially all of its assets.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                17. Contact Information
              </h3>

              <p className="mb-8">
                For questions regarding these Terms and Conditions, please contact us at support@simplhealthcare.com.
              </p>

              <div className="bg-simpl-green/10 p-6 rounded-lg border border-simpl-green/20">
                <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Legal Contact</h4>
                <p className="text-simpl-dark-grey">
                  <strong>Email:</strong> support@simplhealthcare.com<br/>
                  <strong>General Inquiries:</strong> support@simplhealthcare.com<br/>
                  <strong>Company:</strong> Simpl Healthcare, Inc.<br/>
                  <strong>Jurisdiction:</strong> Delaware, United States
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