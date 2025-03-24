import React from 'react';
import Header from '../components/header';


function PrivacyPolicy() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            
            {/* Espaço para o header fixo */}
            <div className="h-1"></div>
            
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
                    <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
                        Privacy Policy
                    </span>
                </h1>
                
                <div className="text-right italic text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                    Last Updated: Feb/2025
                </div>
                
                <div className="space-y-4 md:space-y-8">
                    {/* Introduction */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Introduction
                        </h2>
                        <div className="space-y-3 text-sm md:text-base text-gray-300">
                            <p>
                                Your privacy is important to us. It is Startupx's policy to respect your privacy regarding any information we may collect from you on the Startupx website and other sites we own and operate.
                            </p>
                            <p>
                                We only request personal information when we truly need it to provide you with a service. We do so through fair and lawful means, with your knowledge and consent. We also inform you why we are collecting it and how it will be used.
                            </p>
                            <p>
                                We only retain collected information for as long as necessary to provide the requested service. When we store data, we protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
                            </p>
                            <p>
                                We do not share personally identifiable information publicly or with third parties, except when required by law.
                            </p>
                        </div>
                    </section>
                    
                    {/* External Sites */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            External Sites
                        </h2>
                        <p className="text-sm md:text-base text-gray-300">
                            Our website may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.
                        </p>
                    </section>
                    
                    {/* Your Rights */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Your Rights
                        </h2>
                        <div className="space-y-3 text-sm md:text-base text-gray-300">
                            <p>
                                You are free to refuse our request for personal information, with the understanding that we may not be able to provide some of the services you desire.
                            </p>
                            <p>
                                Your continued use of our website will be regarded as acceptance of our practices regarding privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                            </p>
                        </div>
                    </section>
                    
                    {/* Website Security and Trust */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Startupx Website Security and Trust
                        </h2>
                        <p className="text-sm md:text-base text-gray-300">
                            The website is reliable and secure for user navigation, as confirmed by Verification. The page checks website information to identify potential security issues. Navigation verified by Google's security tool shows that the site is safe.
                        </p>
                    </section>
                    
                    {/* Cookie Policy */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Startupx Cookie Policy
                        </h2>
                        <div className="space-y-4 text-sm md:text-base text-gray-300">
                            <div>
                                <h3 className="font-semibold text-white mb-2">What are cookies?</h3>
                                <p>
                                    As is common practice with nearly all professional websites, this site uses cookies, which are small files downloaded to your computer, to improve your experience. This page describes what information they collect, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, though this may downgrade or "break" certain elements of the site's functionality.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white mb-2">How do we use cookies?</h3>
                                <p>
                                    We use cookies for various reasons, detailed below. Unfortunately, in most cases, there are no industry-standard options for disabling cookies without fully disabling the functionality and features they add to this site. It is recommended that you leave all cookies enabled if you are unsure whether you need them or not, in case they are used to provide a service you use.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white mb-2">Disabling cookies</h3>
                                <p>
                                    You can prevent cookies from being set by adjusting your browser settings (see your browser's Help section for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites you visit. Disabling cookies will usually result in disabling certain features and functionalities of this site. Therefore, it is recommended that you do not disable cookies.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Cookies We Set */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Cookies We Set
                        </h2>
                        <div className="space-y-3 text-sm md:text-base text-gray-300">
                            <div>
                                <h3 className="font-semibold text-white mb-1">Account-related cookies</h3>
                                <p className="mb-2">
                                    If you create an account with us, we will use cookies to manage the signup process and general administration. These cookies will usually be deleted when you log out, though in some cases, they may remain afterward to remember your site preferences when you log out.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white mb-1">Login-related cookies</h3>
                                <p className="mb-2">
                                    We use cookies when you are logged in so we can remember this action. This prevents you from needing to log in every time you visit a new page. These cookies are typically removed or cleared when you log out to ensure you can only access restricted features and areas when logged in.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white mb-1">Email newsletter-related cookies</h3>
                                <p className="mb-2">
                                    This site offers newsletter or email subscription services, and cookies may be used to remember if you are already registered and whether to show certain notifications valid only for subscribed/unsubscribed users.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white mb-1">Order processing-related cookies</h3>
                                <p className="mb-2">
                                    This site offers e-commerce or payment facilities, and some cookies are essential to ensure your order is remembered between pages so we can process it properly.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white mb-1">Survey-related cookies</h3>
                                <p className="mb-2">
                                    From time to time, we offer surveys and questionnaires to provide interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already participated in a survey or to provide accurate results after you change pages.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white mb-1">Form-related cookies</h3>
                                <p className="mb-2">
                                    When you submit data through a form, such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white mb-1">Site preference cookies</h3>
                                <p>
                                    To provide a great experience on this site, we offer functionality to set your preferences for how this site runs when you use it. To remember your preferences, we need to set cookies so this information can be recalled whenever you interact with a page affected by your preferences.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Third-party Cookies */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Third-party Cookies
                        </h2>
                        <div className="space-y-3 text-sm md:text-base text-gray-300">
                            <p>
                                In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you may encounter through this site.
                            </p>
                            
                            <ul className="list-disc pl-5 md:pl-6 space-y-2">
                                <li>
                                    This site uses Google Analytics, one of the most widespread and trusted analytics solutions on the web, to help us understand how you use the site and how we can improve your experience. These cookies may track things like how long you spend on the site and the pages you visit so we can continue producing engaging content.
                                </li>
                                <li>
                                    For more information on Google Analytics cookies, see the official Google Analytics page.
                                </li>
                                <li>
                                    Third-party analytics are used to track and measure usage of this site so we can continue producing engaging content. These cookies may track things like how long you spend on the site or the pages you visit, which helps us understand how we can improve the site for you.
                                </li>
                                <li>
                                    From time to time, we test new features and make subtle changes to the way the site is presented. While we are still testing new features, these cookies may be used to ensure you receive a consistent experience on the site while we figure out which optimizations our users appreciate most.
                                </li>
                                <li>
                                    As we sell products, it's important for us to understand statistics about how many visitors to our site actually make a purchase, and so this is the kind of data these cookies will track. This matters to you because it means we can make accurate business predictions that allow us to analyze our advertising and product costs to ensure the best possible price.
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                    {/* User Commitment */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            User Commitment
                        </h2>
                        <div className="space-y-3 text-sm md:text-base text-gray-300">
                            <p>
                                The user commits to making appropriate use of the content and information that Startupx offers on the site, including, but not limited to:
                            </p>
                            
                            <ul className="list-alpha pl-5 md:pl-6 space-y-2">
                                <li>
                                    <span className="font-semibold">A)</span> Not engaging in activities that are illegal or contrary to good faith and public order;
                                </li>
                                <li>
                                    <span className="font-semibold">B)</span> Not disseminating propaganda or content of a racist, xenophobic nature, or related to betting houses, gambling, any type of illegal pornography, terrorism advocacy, or against human rights;
                                </li>
                                <li>
                                    <span className="font-semibold">C)</span> Not causing damage to the physical (hardware) and logical (software) systems of Startupx, its suppliers, or third parties, nor introducing or spreading computer viruses or any other hardware or software systems capable of causing the aforementioned damage.
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                    {/* Blocking Cookies */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Blocking Cookies
                        </h2>
                        <div className="space-y-3 text-sm md:text-base text-gray-300">
                            <p>
                                The user can block and/or disable cookies from any website, including ours, at any time. To perform this procedure, access your browser settings. Refer to the help guides of the main browsers:
                            </p>
                            
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                                <li>
                                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Google Chrome</a>
                                </li>
                                <li>
                                    <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Firefox</a>
                                </li>
                                <li>
                                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Microsoft Edge</a>
                                </li>
                                <li>
                                    <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Opera</a>
                                </li>
                                <li>
                                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Safari</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                    {/* More Information */}
                    <section className="bg-neutral-950 rounded-xl p-4 md:p-6 border border-neutral-800">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            More Information
                        </h2>
                        <div className="space-y-3 text-sm md:text-base text-gray-300">
                            <p>
                                We hope this has clarified things, and as mentioned earlier, if there's something you're unsure whether you need or not, it's usually safer to leave cookies enabled in case they interact with one of the features you use on our site.
                            </p>
                            <p>
                                This policy is effective as of Feb/2025.
                            </p>
                            <p>
                                If you have any questions about our Privacy Policy, please contact us at: <a href="mailto:contact@startupxchain.com" className="text-purple-400 hover:text-purple-300 transition-colors">contact@startupxchain.com</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
        
        </div>
    );
}

export default PrivacyPolicy;