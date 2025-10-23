import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div>
            <title>Privacy Policy | FunVille Toys</title>
            <div className='bg-gradient-to-r from-orange-700 to-orange-400'>
                <h1 className='text-3xl md:text-5xl font-bold text-white px-14 py-5'>Privacy Policy</h1>
            </div>
            <div className='w-11/12 mx-auto py-8 md:py-10'>
                <div>
                    <p className='text-sm font-semibold'>Last Updated: 23/10/2025</p>
                    <h3 className='font-semibold mb-2'>Welcome to FunVille Toys!</h3>
                    <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or purchase our products.</p>
                </div>
                <hr className='text-gray-400' />

                <div className='mt-5 space-y-5'>
                    <div>
                        <h3 className='text-xl font-semibold'>1. Information We Collect</h3>
                        <p>We collect information to provide you with the best shopping experience possible. The types of information we may collect include:</p>
                        <ul className='list-disc'>
                            <li><span className='font-bold'>Personal Information:</span> name, email address, phone number, and shipping address.</li>
                            <li><span className='font-bold'>Payment Information:</span> processed securely through trusted third-party gateways (we never store your full payment details).</li>
                            <li><span className='font-bold'>Usage Data:</span> such as IP address, browser type, device information, and pages visited to help us improve our website experience.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>2. How We Use Your Information</h3>
                        <p>We use the information we collect to:</p>
                        <ul className='list-disc'>
                            <li>Process and deliver your orders</li>
                            <li>Communicate with you about your purchases or support requests</li>
                            <li>Send promotional offers, discounts, or newsletters (if you choose to subscribe)</li>
                            <li>Improve our products, services, and website performance</li>
                            <li>Ensure safe and secure transactions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>3. How We Protect Your Data</h3>
                        <p>We take your security seriously.</p>
                        <p>All data is protected using modern encryption and secure server technology.</p>
                        <p>We also limit access to your personal information to only authorized personnel.</p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>4. Cookies</h3>
                        <p>Our website uses cookies to enhance your browsing experience.</p>
                        <p>Cookies help us:</p>
                        <ul className='list-disc'>
                            <li>Remember your preferences</li>
                            <li>Analyze traffic and user behavior</li>
                            <li>Provide personalized recommendations</li>
                        </ul>
                        <p>You can choose to disable cookies through your browser settings, but some features may not function properly.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>5. Sharing Your Information</h3>
                        <p>We do not sell, trade, or rent your personal information to others.</p>
                        <p>We may share limited data only with:</p>
                        <ul className='list-disc'>
                            <li>Trusted delivery partners (for shipping your orders)</li>
                            <li>Payment processors (to complete secure transactions)</li>
                            <li>Legal authorities, if required by law</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>6. Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul className='list-disc'>
                            <li>Access or update your personal information</li>
                            <li>Request deletion of your account or data</li>
                            <li>Unsubscribe from marketing emails anytime</li>
                        </ul>
                        <p>Just contact us at <a className='link link-hover underline'>support@funvilletoys.com</a> - we’ll help you right away.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>7. Third-Party Links</h3>
                        <p>Our website may contain links to third-party websites (e.g., social media pages).</p>
                        <p>We are not responsible for the privacy practices of those sites.</p>
                        <p>We encourage you to review their privacy policies before sharing any information.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>8. Changes to This Policy</h3>
                        <p>We may update this Privacy Policy from time to time.</p>
                        <p>All updates will be posted on this page with the “Last Updated” date at the top.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>9. Contact Us</h3>
                        <p>If you have any questions or concerns about these Terms & Conditions, please contact us at:</p>
                        <p className='underline'><a className='link link-hover'>support@funvilletoys.com</a></p>
                        <p className='underline'><a className='link link-hover'>www.funvilletoys.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy