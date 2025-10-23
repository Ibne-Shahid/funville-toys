import React from 'react'

const Terms = () => {
    return (
        <div>
            <title>Terms & Conditions | FunVille Toys</title>
            <div className='bg-gradient-to-r from-sky-700 to-sky-400'>
                <h1 className='text-3xl md:text-5xl font-bold text-white px-14 py-5'>Terms & Conditions</h1>
            </div>
            <div className='w-11/12 mx-auto py-8 md:py-10'>
                <div>
                    <p className='text-sm font-semibold'>Last Updated: 23/10/2025</p>
                    <h3 className='font-semibold mb-2'>Welcome to FunVille Toys!</h3>
                    <p>By using our website (<a className='link link-hover underline'>www.funvilletoys.com</a>) and purchasing our products, you agree to the following terms and conditions. Please read them carefully before using our services.</p>
                </div>
                <hr className='text-gray-400' />

                <div className='mt-5 space-y-5'>
                    <div>
                        <h3 className='text-xl font-semibold'>1. General Information</h3>
                        <p>These Terms & Conditions govern your use of our website and the purchase of any products offered by FunVille Toys. By accessing or using our site, you agree to comply with these terms and all applicable laws.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>2. Use of Website</h3>
                        <ul className='list-disc'>
                            <li>You must be at least 18 years old to make a purchase or use our services.</li>
                            <li>You agree not to misuse our website or engage in any activity that may harm the site, other users, or our business.</li>
                            <li>We reserve the right to restrict or terminate access to our site if misuse is detected.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>3. Product Information</h3>
                        <p>We strive to display accurate product descriptions, prices, and images. However, slight variations in color, design, or size may occur due to screen settings or manufacturing differences.</p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>4. Orders and Payments</h3>
                        <ul className='list-disc'>
                            <li>All orders are subject to product availability and confirmation of payment.</li>
                            <li>We accept multiple secure payment methods for your convenience.</li>
                            <li>Prices may change without prior notice, but once your order is confirmed, it will not affect your placed purchase.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>5. Shipping and Delivery</h3>
                        <p>We aim to deliver your orders as quickly as possible. Delivery times may vary depending on location, product availability, and courier delays.</p>
                        <p>FunVille Toys is not responsible for any delays caused by third-party shipping providers.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>6. Returns and Refunds</h3>
                        <p>If you receive a defective or incorrect item, please contact us within 7 days of delivery.</p>
                        <p>Products must be unused, in original packaging, and eligible for return.</p>
                        <p>For detailed information, please visit our Return Policy page</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>7. Intellectual Property</h3>
                        <p>All content on this site — including images, logos, text, and graphics — is owned by FunVille Toys and protected by copyright laws. Unauthorized use of any content is strictly prohibited.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>8. Privacy Policy</h3>
                        <p>Your privacy is important to us. Please refer to our Privacy Policy page to understand how we collect, use, and protect your personal information.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>9. Limitation of Liability</h3>
                        <p>FunVille Toys shall not be held liable for any direct or indirect damages, losses, or injuries resulting from the use or inability to use our products or website.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>10. Changes to Terms</h3>
                        <p>We may update these Terms & Conditions at any time. Continued use of our website after updates means you accept the revised terms.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>11. Contact Us</h3>
                        <p>If you have any questions or concerns about these Terms & Conditions, please contact us at:</p>
                        <p className='underline'><a className='link link-hover'>support@funvilletoys.com</a></p>
                        <p className='underline'><a className='link link-hover'>www.funvilletoys.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms