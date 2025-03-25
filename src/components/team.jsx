import React from 'react';

function Team() {
    // Dados fictícios dos membros da equipe
    const teamMembers = [
        {
            name: "Mauricio Magalhães",
            role: "Co-Founder  & CEO",
            image: "./img/team/member1.png", // Caminho modificado para ser relativo
            bio: "Responsible and dynamic, the CEO of StartupX, with a strong business background, leads the creation of disruptive solutions, transforming the financial market through asset tokenization while promoting global financial solutions.",
            social: {
                twitter: "https://x.com/Mo_XSTP",
                linkedin: "https://www.linkedin.com/in/mauricio-magalh%C3%A3es-2b4aa022"
            }
        },
        {
            name: "Karine Kitz",
            role: "Co-Founder & COO - Chief Operating Officer Global",
            image: "./img/team/member2.png", // Caminho modificado para ser relativo
            bio: "Is an experienced commercial professional focused on results and business development. As Co-founder and CCO, she leads Startupx's commercial team, driving growth in the tokenization market through strategic partnerships.",
            social: {
                twitter: "https://x.com/ka_xstp",
                linkedin: "https://www.linkedin.com/in/karine-kitz-69572b46?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
        },
        {
            name: "Reinaldo Macedo",
            role: "COO Europe - Chief Operating Officer",
            image: "./img/team/member3.png", // Caminho modificado para ser relativo
            bio: "He is a key player in the StartUpX team, serving as the Project Manager for StartUpX in Europe, leading with strategic excellence and a global vision, driving connections between investors and startups through the innovation of tokenization.",
            social: {
                twitter: "https://x.com/RamboRM0",
                linkedin: "https://www.linkedin.com/in/reinaldo-macedo-2ab946259/"
            }
        },
        {
            name: "Fernanda Flauzino",
            role: "CMO - Chief Marketing Officer LATAM",
            image: "./img/team/member4.png", // Caminho modificado para ser relativo
            bio: "A marketing expert focused on Brand Strategy, Content Marketing, UX/UI Strategy, and Growth Marketing, working to accelerate adoption and democratize access to the benefits of Startupx blockchain and technology.",
            social: {
                twitter: "https://x.com/FernandaFlzn",
                linkedin: "https://www.linkedin.com/in/fernanda-flauzino-57a5b1357"
            }
        },
        {
            name: "Clayton Rafael",
            role: "Lead Developer",
            image: "./img/team/member5.png", // Caminho modificado para ser relativo
            bio: "Experienced Fullstack developer in Web3 interfaces and blockchain integrations. Contributed to multiple open-source projects in the crypto community.",
            social: {
                twitter: "https://x.com/Farzik_",
                linkedin: "https://www.linkedin.com/in/claytonrafaeldev"
            }
        }
    ];

    return (
        <div className="py-12 px-4 bg-black">
            <h1 className="text-4xl font-bold text-center mb-6">
                <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
                    Our Team
                </span>
            </h1>
            
            <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-sm md:text-base">
                Meet the passionate professionals who are building the future of decentralized economy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-neutral-950 p-4 rounded-xl shadow-xl border border-neutral-800/50 transform transition-all duration-300 hover:scale-105">
                        {/* Conteúdo do card */}
                        {/* Foto em formato redondo */}
                        <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border border-neutral-700/30 shadow-md">
                            {/* Condicional para mostrar a imagem se existir, ou o placeholder caso contrário */}
                            {member.image ? (
                                <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-800/20 flex items-center justify-center">
                                    <img 
                                        src={member.image} 
                                        alt={`Foto de ${member.name}`} 
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-purple-900/60 to-pink-800/60 flex items-center justify-center text-white text-opacity-30 text-2xl">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            )}
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-1 text-left">
                            {member.name}
                        </h3>
                        
                        <p className="text-xs text-gray-300 mb-2 border-b border-neutral-700/30 pb-2 text-left">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-medium">
                                {member.role}
                            </span>
                        </p>
                        
                        <p className="text-xs text-gray-400 mb-3 text-left">
                            {member.bio}
                        </p>
                        
                        <div className="flex space-x-3">
                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}   

export default Team;