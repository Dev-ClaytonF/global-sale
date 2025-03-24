import React from 'react';
import Header from '../components/header';

function Cookies() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            
            {/* Espaço para o header fixo */}
            <div className="h-1"></div>
            
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
                    <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
                        Cookies Policy
                    </span>
                </h1>
                
                <div className="space-y-4 md:space-y-8">
                    {/* What are Cookies? */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            What are Cookies?
                        </h2>
                        <p className="text-sm md:text-base text-gray-300">
                            Cookies are small text files that are stored on your device when you visit our website. They help us provide a better browsing experience, understand how you interact with our content, and offer more personalized services.
                        </p>
                    </section>
                    
                    {/* Why Do We Use Cookies? */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Why Do We Use Cookies?
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                            We use cookies to:
                        </p>
                        <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                            <li>Keep you logged in during your session</li>
                            <li>Remember your preferences and settings</li>
                            <li>Enhance platform security</li>
                            <li>Analyze how our website is used</li>
                            <li>Personalize your platform experience</li>
                        </ul>
                    </section>
                    
                    {/* Types of Cookies We Use */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Types of Cookies We Use
                        </h2>
                        <div className="overflow-x-auto -mx-4 md:mx-0">
                            <table className="min-w-full bg-transparent text-sm md:text-base">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#2a0845] to-[#6441A5] text-white">
                                        <th className="py-2 md:py-3 px-3 md:px-6 text-left text-xs md:text-sm font-semibold uppercase tracking-wider rounded-tl-lg">
                                            Type
                                        </th>
                                        <th className="py-2 md:py-3 px-3 md:px-6 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">
                                            Purpose
                                        </th>
                                        <th className="py-2 md:py-3 px-3 md:px-6 text-left text-xs md:text-sm font-semibold uppercase tracking-wider rounded-tr-lg">
                                            Duration
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800">
                                    <tr className="hover:bg-neutral-900/50">
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm font-medium text-gray-200">Essential</td>
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm text-gray-300">Required for basic website functionality</td>
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm text-gray-300">Session</td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50">
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm font-medium text-gray-200">Functional</td>
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm text-gray-300">Improve usability and remember preferences</td>
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm text-gray-300">1 year</td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50">
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm font-medium text-gray-200">Analytics</td>
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm text-gray-300">Help us understand how you use the site</td>
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm text-gray-300">2 years</td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50">
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm font-medium text-gray-200">Marketing</td>
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm text-gray-300">Used to personalize advertisements</td>
                                        <td className="py-2 md:py-3 px-3 md:px-6 text-xs md:text-sm text-gray-300">30 days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    
                    {/* Essential Cookies */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Essential Cookies
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                            These are fundamental cookies for:
                        </p>
                        <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                            <li>Account authentication and security</li>
                            <li>Trading platform functionality</li>
                            <li>Transaction processing</li>
                            <li>Fraud protection</li>
                        </ul>
                    </section>
                    
                    {/* Cookie Control */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Cookie Control
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                            You can control and/or delete cookies as you wish. You can:
                        </p>
                        <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                            <li>Accept or reject cookies through the consent banner</li>
                            <li>Configure your browser to block cookies</li>
                            <li>Delete existing cookies through browser settings</li>
                            <li>Opt out of tracking cookies</li>
                        </ul>
                    </section>
                    
                    {/* Impact of Disabling Cookies */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Impact of Disabling Cookies
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                            Disabling cookies may:
                        </p>
                        <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                            <li>Affect the functionality of certain areas of the site</li>
                            <li>Prevent the use of some of our services</li>
                            <li>Result in a less personalized experience</li>
                            <li>Require more frequent login to the platform</li>
                        </ul>
                    </section>
                    
                    {/* Policy Updates */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Policy Updates
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                            We may periodically update this policy to reflect:
                        </p>
                        <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                            <li>Changes in our practices</li>
                            <li>New features and functionalities</li>
                            <li>Regulatory changes</li>
                            <li>User feedback</li>
                        </ul>
                    </section>
                    
                    {/* Contact */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Contact
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                            For questions about our cookies policy, contact us at:
                        </p>
                        <div className="text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                            <p><span className="font-semibold">Email:</span> <a href="mailto:contact@startupxchain.com" className="text-purple-400 hover:text-purple-300 transition-colors">contact@startupxchain.com</a></p>
                            <p><span className="font-semibold">Location:</span> Florida - USA</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Cookies;
