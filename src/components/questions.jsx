import React, { useState } from 'react';

function Questions() {
    const faqItems = [
        {
            question: "What is StartUpX?",
            answer: "StartUpX is an innovative platform that bridges global investors with emerging startups by utilizing blockchain technology to tokenize real-world assets. Our platform enables easy access to tokenized investments in startups, real estate, and other valuable assets, ensuring transparency and efficiency in every transaction."
        },
        {
            question: "How can I start investing with StartUpX?",
            answer: "To begin investing with StartUpX, simply visit https://startupxchain.com/presale and follow the instructions for participating in the pre-sale of XSTP tokens."
        },
        {
            question: "What is the XSTP Token?",
            answer: "The XSTP token is the central currency of the StartUpX ecosystem. It facilitates transactions, rewards holders, and connects investors with tokenized assets, fostering financial inclusion and innovation."
        },
        {
            question: "How will I receive XSTP tokens?",
            answer: "Once you purchase XSTP tokens, they will be transferred to your wallet in real-time. To view the tokens, simply add XSTP as a custom token in your wallet interface."
        },
        {
            question: "How can I contact the StartUpX team?",
            answer: "You can reach us via email at xstp@startupxchain.com or through our official social media channels: Twitter, Telegram, and Instagram."
        },
        {
            question: "Where can I sell my XSTP tokens?",
            answer: "As we are in the pre-sale phase, tokens cannot be traded yet. Once the XSTP token is officially launched, you will be able to freely trade it on supported exchanges. Stay updated via our community channels for launch announcements."
        },
        {
            question: "What are the rewards for holding XSTP tokens?",
            answer: "XSTP holders receive a 2% reward from transaction fees, distributed automatically to all holders, ensuring a passive income stream."
        },
        {
            question: "How does the staking program work?",
            answer: "The StartUpX staking program allows you to lock your XSTP tokens for fixed periods, earning annual percentage yields (APY) up to 20%. Participating in staking helps stabilize the ecosystem and provides higher rewards for long-term holders."
        },
        {
            question: "What are the risks involved in investing in XSTP?",
            answer: "Like any investment, XSTP is subject to market fluctuations. While we believe in the long-term potential of the platform, investors should conduct their own research and understand the risks before participating in any financial activities."
        },
        {
            question: "Can I participate in the prize draws?",
            answer: "Yes, all purchases above 10,000 XSTP tokens during the pre-sale automatically qualify for exclusive prize draws, including cash prizes and unique experiences. The bigger the purchase, the greater your chances to win!"
        },
        {
            question: "Why should I invest in StartUpX?",
            answer: "Startupx offers a unique opportunity to participate in the growing global tokenization market, with access to investments in high-potential sectors such as real estate, mobility, and fund management, as well as partnerships with leading projects like Token Land, BitDigitalCapital, and Bitcoin Web3. Additionally, it is developing innovative products such as the XPay wallet, a digital banking wallet, artificial intelligence platforms like AI NEO and MUNEHISA, and BITX BANK, which combines blockchain technology with traditional banking services, providing fast, secure, and transparent transactions within a global ecosystem."
        }
    ];

    // Estado para controlar qual item está aberto
    const [openIndex, setOpenIndex] = useState(null);

    // Função para alternar a abertura/fechamento de um item
    const toggleItem = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="py-12 px-4 bg-black">
            <h1 className="text-4xl font-bold text-center mb-6">
                <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
                    Frequently Asked Questions
                </span>
            </h1>
            
            <div className="max-w-3xl mx-auto mt-12">
                {faqItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="mb-4 border border-neutral-800 rounded-lg overflow-hidden"
                    >
                        <button
                            className="w-full flex justify-between items-center p-4 text-left bg-neutral-950 hover:bg-neutral-900 transition-colors duration-200"
                            onClick={() => toggleItem(index)}
                        >
                            <span className="text-white font-medium">{item.question}</span>
                            <svg 
                                className={`w-5 h-5 text-purple-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div 
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-4 bg-neutral-900 text-gray-300 border-t border-neutral-800">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;