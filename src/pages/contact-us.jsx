import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import binanceLogo from '../assets/binance.png';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Em uma aplicação real, aqui enviaríamos os dados para um backend
        setSubmitted(true);
        // Limpar formulário
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        
        // Reset the form after 3 seconds for demo purposes
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };
    
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
                    <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                        Contact Us
                    </span>
                </h1>
                
                <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-neutral-800 mb-12">
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                        <p className="text-gray-300 mb-6">
                            Fill out the form below and our team will get back to you within 24 hours. We're committed to providing exceptional support to all our users.
                        </p>
                        
                        {submitted ? (
                            <div className="bg-green-900 border border-green-700 text-green-100 px-4 py-3 rounded relative mb-6" role="alert">
                                <strong className="font-bold">Thank you for your message! </strong>
                                <span className="block sm:inline">We'll respond to your inquiry as soon as possible.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-neutral-900 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-white"
                                            placeholder="John Willians Kennedy"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-neutral-900 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-neutral-900 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-white"
                                    >
                                        <option value="" disabled>Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="billing">Billing Questions</option>
                                        <option value="partnership">Partnership Opportunities</option>
                                        <option value="feedback">Product Feedback</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-neutral-900 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none text-white"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                
                                <div>
                                    <button 
                                        type="submit" 
                                        className="inline-flex justify-center items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition-colors duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                
                <div className="bg-black p-6 rounded-xl border border-neutral-800 shadow-md mb-8">
                    <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">Email Us Directly</h2>
                    <p className="text-white mb-4">
                        If you prefer to email us directly, you can reach us at:
                    </p>
                    <div className="space-y-2">
                    
                        <p className="text-white">
                            <span className="font-semibold">Technical Support:</span>{' '}
                            <a href="mailto:support@startupxchain.com" className="text-white hover:text-purple-300 transition-colors">support@startupxchain.com</a>
                        </p>
                     
                    </div>
                </div>
                
                <div className="bg-black p-6 rounded-xl border border-neutral-800 shadow-md mb-8">
                    <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">Connect With Us on Telegram</h2>
                    <p className="text-white mb-4">
                        For faster support, connect with us on Telegram. Our support team is ready to assist you with any questions or issues you may have.
                    </p>
                    <a href="https://t.me/startupxchain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-purple-800 hover:bg-purple-600 text-white rounded-md transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.515 7.125c-.112.52-.519.817-1.046.817-.35 0-.712-.162-1.099-.454l-2.67-1.967-1.28 1.234a.722.722 0 01-.516.214.707.707 0 01-.707-.707v-2.962l-2.85-2.105c-.38-.28-.506-.793-.217-1.211a.947.947 0 01.68-.382.92.92 0 01.574.12l8.19 4.167c.255.13.396.406.456.703a.84.84 0 01 0 .408z" />
                        </svg>
                        Join Our Telegram Channel
                    </a>
                </div>
                
                <div className="bg-black p-6 rounded-xl border border-neutral-800 shadow-md mb-8">
                    <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">Follow Us on Binance Square</h2>
                    <p className="text-white mb-4">
                        Stay updated with our latest news and announcements by following us on Binance Square. Join our community for exclusive updates and events.
                    </p>
                    <a href="https://app.binance.com/uni-qr/cpro/startupx?l=pt-BR&r=1088034711&uc=web_square_share_link&us=copylink" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md transition-colors">
                        <img 
                            src={binanceLogo} 
                            alt="Binance" 
                            className="w-5 h-5 mr-2"
                        />
                        Follow on Binance Square
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default ContactUs;
