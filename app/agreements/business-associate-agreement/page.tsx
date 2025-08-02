import type { Metadata } from 'next'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Business Associate Agreement - Simpl Healthcare',
  description: 'HIPAA Business Associate Agreement (BAA) for Simpl Healthcare. Review our commitment to protecting protected health information (PHI).',
  keywords: 'business associate agreement, BAA, HIPAA compliance, protected health information, PHI, healthcare data security, HIPAA BAA',
}

export default function BusinessAssociateAgreement() {
  return (
    <main>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-simpl-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Business Associate Agreement
            </h1>
            
            <div className="text-lg text-simpl-dark-grey mb-8 font-manrope">
              <strong>HIPAA Business Associate Agreement</strong><br/>
              <strong>Last updated: July 22, 2024</strong>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
              <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">HIPAA Compliance Notice</h4>
              <p className="text-simpl-dark-grey">
                This Business Associate Agreement (BAA) governs the handling of Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and its implementing regulations.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-simpl-dark-grey leading-relaxed font-manrope">
              <h2 className="text-3xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                Business Associate Agreement
              </h2>
              
              <p className="mb-6">
                This Business Associate Agreement ("BAA") is entered into between Simpl Healthcare, Inc., a Delaware corporation ("Business Associate," "Simpl," "we," "us," or "our"), and the healthcare provider or covered entity ("Covered Entity," "you," or "your") to ensure compliance with the Health Insurance Portability and Accountability Act of 1996 ("HIPAA"), as amended.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                1. Definitions
              </h3>

              <p className="mb-4">
                <strong>1.1 Protected Health Information (PHI):</strong> Information that is created or received by Business Associate from or on behalf of Covered Entity and relates to the past, present, or future physical or mental health or condition of an individual, the provision of health care to an individual, or payment for health care provided to an individual.
              </p>

              <p className="mb-4">
                <strong>1.2 Electronic Protected Health Information (ePHI):</strong> PHI that is transmitted by electronic media or maintained in electronic media.
              </p>

              <p className="mb-6">
                <strong>1.3 Security Incident:</strong> The attempted or successful unauthorized access, use, disclosure, modification, or destruction of information or interference with system operations in an information system.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                2. Permitted Uses and Disclosures
              </h3>

              <p className="mb-4">
                <strong>2.1 General Use:</strong> Business Associate may use or disclose PHI only as permitted or required by this BAA or as required by law.
              </p>

              <p className="mb-4">
                <strong>2.2 Specific Permitted Uses:</strong> Business Associate may use PHI to:
              </p>
              <ul className="mb-4 space-y-2 list-disc pl-6">
                <li>Perform services as specified in the underlying service agreement</li>
                <li>Provide data aggregation services relating to health care operations of Covered Entity</li>
                <li>Report violations of law to appropriate Federal and State authorities</li>
                <li>Perform management and administrative activities of Business Associate</li>
              </ul>

              <p className="mb-6">
                <strong>2.3 Minimum Necessary:</strong> Business Associate will limit uses and disclosures of PHI to the minimum necessary to accomplish the intended purpose.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                3. Obligations of Business Associate
              </h3>

              <p className="mb-4">
                <strong>3.1 Non-Use and Non-Disclosure:</strong> Business Associate agrees not to use or disclose PHI other than as permitted or required by this BAA or as required by law.
              </p>

              <p className="mb-4">
                <strong>3.2 Safeguards:</strong> Business Associate will implement appropriate safeguards to prevent use or disclosure of PHI other than as provided for by this BAA, including:
              </p>
              <ul className="mb-4 space-y-2 list-disc pl-6">
                <li>Administrative safeguards (policies, procedures, training)</li>
                <li>Physical safeguards (facility access controls, workstation security)</li>
                <li>Technical safeguards (encryption, access controls, audit logs)</li>
              </ul>

              <p className="mb-4">
                <strong>3.3 Employee Training:</strong> Business Associate will ensure that all employees, contractors, and agents who have access to PHI receive appropriate HIPAA training.
              </p>

              <p className="mb-6">
                <strong>3.4 Subcontractor Agreements:</strong> Business Associate will obtain satisfactory assurances from any subcontractors that handle PHI that they will appropriately safeguard the information.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                4. Security Requirements
              </h3>

              <div className="bg-simpl-grey p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Technical Safeguards</h4>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>Encryption:</strong> All PHI encrypted in transit (TLS 1.2+) and at rest (AES-256)</li>
                  <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
                  <li><strong>Audit Logs:</strong> Comprehensive logging of all PHI access and modifications</li>
                  <li><strong>Automatic Logoff:</strong> Session timeouts to prevent unauthorized access</li>
                </ul>
              </div>

              <div className="bg-simpl-grey p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Physical Safeguards</h4>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>Data Centers:</strong> SOC 2 Type II certified facilities with 24/7 monitoring</li>
                  <li><strong>Access Controls:</strong> Biometric access controls and visitor management</li>
                  <li><strong>Media Disposal:</strong> Secure destruction of storage media containing PHI</li>
                  <li><strong>Workstation Security:</strong> Endpoint protection and device management</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                5. Breach Notification
              </h3>

              <p className="mb-4">
                <strong>5.1 Discovery:</strong> Business Associate will notify Covered Entity of any discovery of a breach of unsecured PHI without unreasonable delay, but in no case later than sixty (60) calendar days after discovery.
              </p>

              <p className="mb-4">
                <strong>5.2 Investigation:</strong> Business Associate will conduct a prompt investigation of any suspected breach and provide Covered Entity with:
              </p>
              <ul className="mb-4 space-y-2 list-disc pl-6">
                <li>Description of what happened and date of breach</li>
                <li>Description of types of PHI involved</li>
                <li>Number of individuals affected</li>
                <li>Steps taken to mitigate harm</li>
                <li>Contact information for further inquiries</li>
              </ul>

              <p className="mb-6">
                <strong>5.3 Mitigation:</strong> Business Associate will take appropriate steps to mitigate any harmful effects of the breach and prevent future occurrences.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                6. Individual Rights
              </h3>

              <p className="mb-4">
                <strong>6.1 Access Requests:</strong> Upon request by Covered Entity, Business Associate will provide access to PHI in a designated record set to enable Covered Entity to respond to individual requests for access.
              </p>

              <p className="mb-4">
                <strong>6.2 Amendment Requests:</strong> Business Associate will make any amendments to PHI as directed by Covered Entity to enable compliance with individual amendment requests.
              </p>

              <p className="mb-6">
                <strong>6.3 Accounting of Disclosures:</strong> Business Associate will provide an accounting of disclosures of PHI as necessary for Covered Entity to respond to individual requests.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                7. Return or Destruction of PHI
              </h3>

              <p className="mb-6">
                Upon termination of this BAA, Business Associate will either return or destroy all PHI received from Covered Entity that Business Associate still maintains in any form. If return or destruction is not feasible, Business Associate will extend the protections of this BAA to such PHI and limit further uses and disclosures to those purposes that make return or destruction infeasible.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                8. Compliance Certifications
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-simpl-black mb-3 font-manrope">SOC 2 Type II</h4>
                  <p className="text-sm text-simpl-dark-grey">Annual third-party security audits covering security, availability, and confidentiality.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-simpl-black mb-3 font-manrope">HIPAA Compliance</h4>
                  <p className="text-sm text-simpl-dark-grey">Full compliance with HIPAA Security Rule and Privacy Rule requirements.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-simpl-black mb-3 font-manrope">HITECH Act</h4>
                  <p className="text-sm text-simpl-dark-grey">Compliance with enhanced privacy and security provisions under HITECH.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-simpl-black mb-3 font-manrope">State Regulations</h4>
                  <p className="text-sm text-simpl-dark-grey">Compliance with applicable state privacy and security regulations.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                9. Term and Termination
              </h3>

              <p className="mb-4">
                <strong>9.1 Term:</strong> This BAA becomes effective on the date of signing and terminates when all PHI is returned or destroyed.
              </p>

              <p className="mb-6">
                <strong>9.2 Survival:</strong> The obligations of Business Associate under this BAA shall survive termination of the underlying service agreement.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                10. Data Location and Processing
              </h3>

              <p className="mb-4">
                <strong>10.1 Data Centers:</strong> PHI is stored and processed in HIPAA-compliant data centers located within the United States, with primary facilities in Virginia and California.
              </p>

              <p className="mb-4">
                <strong>10.2 Cross-Border Transfer:</strong> Business Associate will not transfer PHI outside of the United States without prior written consent from Covered Entity.
              </p>

              <p className="mb-6">
                <strong>10.3 Data Residency:</strong> All PHI backups and disaster recovery systems are maintained within the United States in SOC 2 certified facilities.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                11. Subcontractors and Third Parties
              </h3>

              <p className="mb-4">
                <strong>11.1 Approved Subcontractors:</strong> Business Associate maintains a current list of all subcontractors who may have access to PHI, available upon request.
              </p>

              <p className="mb-4">
                <strong>11.2 Subcontractor Agreements:</strong> All subcontractors with PHI access have executed HIPAA-compliant business associate agreements with equivalent protections.
              </p>

              <p className="mb-6">
                <strong>11.3 Notification:</strong> Business Associate will notify Covered Entity of any new subcontractors that will have access to PHI at least thirty (30) days in advance.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                12. Audit Rights and Compliance Monitoring
              </h3>

              <p className="mb-4">
                <strong>12.1 Audit Rights:</strong> Upon reasonable notice, Covered Entity may audit Business Associate's compliance with this BAA during normal business hours.
              </p>

              <p className="mb-4">
                <strong>12.2 Documentation:</strong> Business Associate will maintain documentation demonstrating compliance with HIPAA requirements and make such documentation available during audits.
              </p>

              <p className="mb-6">
                <strong>12.3 Third-Party Audits:</strong> Business Associate undergoes annual SOC 2 Type II audits and HIPAA assessments by qualified third-party auditors.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                13. Business Continuity and Disaster Recovery
              </h3>

              <p className="mb-4">
                <strong>13.1 Backup Systems:</strong> PHI is backed up daily with encrypted backups stored in geographically separate locations within the United States.
              </p>

              <p className="mb-4">
                <strong>13.2 Recovery Time:</strong> Business Associate maintains a Recovery Time Objective (RTO) of 4 hours and Recovery Point Objective (RPO) of 1 hour for PHI systems.
              </p>

              <p className="mb-6">
                <strong>13.3 Business Continuity Plan:</strong> Business Associate maintains and regularly tests a comprehensive business continuity plan to ensure continuous availability of PHI.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                14. Training and Workforce Security
              </h3>

              <p className="mb-4">
                <strong>14.1 HIPAA Training:</strong> All workforce members with PHI access receive initial and annual HIPAA training and acknowledge understanding of privacy and security requirements.
              </p>

              <p className="mb-4">
                <strong>14.2 Background Checks:</strong> Business Associate conducts appropriate background checks on workforce members with PHI access.
              </p>

              <p className="mb-6">
                <strong>14.3 Access Termination:</strong> Access to PHI is immediately terminated upon workforce member separation or role change not requiring PHI access.
              </p>

              <h3 className="text-2xl font-bold text-simpl-black mb-4 mt-8 font-manrope">
                15. Contact Information
              </h3>

              <p className="mb-8">
                For questions regarding this Business Associate Agreement or to report a security incident, please contact our HIPAA Security Officer at support@simplhealthcare.com.
              </p>

              <div className="bg-simpl-green/10 p-6 rounded-lg border border-simpl-green/20">
                <h4 className="text-xl font-bold text-simpl-black mb-3 font-manrope">HIPAA Contact Information</h4>
                <p className="text-simpl-dark-grey">
                  <strong>HIPAA Security Officer:</strong> support@simplhealthcare.com<br/>
                  <strong>Breach Reporting:</strong> support@simplhealthcare.com<br/>
                  <strong>General Privacy Questions:</strong> support@simplhealthcare.com<br/>
                  <strong>24/7 Security Hotline:</strong> Available upon request<br/>
                  <strong>Company:</strong> Simpl Healthcare, Inc.<br/>
                  <strong>Address:</strong> [Corporate Address upon execution]
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