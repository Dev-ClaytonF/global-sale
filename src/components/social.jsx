import { useState } from 'react';
import { supabase } from '../services/supabase'; // Corrigido para usar o serviço existente
import binanceLogo from '../assets/binance.png';
import coinmarketcapLogo from '../assets/coinmarktcap.png';

function Social() {
    // Estado para rastrear quais botões foram clicados
    const [clickedButtons, setClickedButtons] = useState({
        twitter1: false,
        twitter2: false,
        twitter3: false,
        telegram: false,
        youtube: false,
        binance: false,
        coinmarketcap: false
    });
    
    // Estado para os campos do formulário
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        walletAddress: ''
    });
    
    // Estado para mensagens de sucesso/erro
    const [submitStatus, setSubmitStatus] = useState({
        status: '',
        message: ''
    });
    
    // Verifica se todos os botões foram clicados
    const allButtonsClicked = Object.values(clickedButtons).every(status => status === true);
    
    // Função para lidar com o clique dos botões
    const handleButtonClick = (buttonName) => {
        setClickedButtons(prev => ({
            ...prev,
            [buttonName]: true
        }));
    };
    
    // Função para atualizar o estado do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    // Função para enviar os dados para o Supabase
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Verificar se todos os campos estão preenchidos
        if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.walletAddress) {
            setSubmitStatus({
                status: 'error',
                message: 'Please fill in all fields'
            });
            return;
        }
        
        try {
            setSubmitStatus({
                status: 'loading',
                message: 'Submitting your participation...'
            });
            
            // Inserir dados na tabela do Supabase
            const { data, error } = await supabase
                .from('giveaway_participants')
                .insert([
                    {
                        full_name: formData.fullName,
                        phone_number: formData.phoneNumber,
                        email: formData.email,
                        wallet_address: formData.walletAddress,
                        twitter_follow: clickedButtons.twitter1,
                        twitter_repost: clickedButtons.twitter2,
                        twitter_post: clickedButtons.twitter3,
                        telegram_join: clickedButtons.telegram,
                        youtube_subscribe: clickedButtons.youtube,
                        binance_follow: clickedButtons.binance,
                        coinmarketcap_follow: clickedButtons.coinmarketcap,
                        all_tasks_completed: allButtonsClicked
                    }
                ]);
                
            if (error) throw error;
            
            // Sucesso!
            setSubmitStatus({
                status: 'success',
                message: 'Your participation has been registered successfully!'
            });
            
            // Resetar o formulário
            setFormData({
                fullName: '',
                phoneNumber: '',
                email: '',
                walletAddress: ''
            });
            
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                status: 'error',
                message: 'An error occurred. Please try again later.'
            });
        }
    };
    
    return (
        <div className="flex justify-center items-center w-full py-8 flex-col">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white">1$ Million Giveaway</h2>
                <p className="text-sm text-white mt-3 max-w-md italic">Note: A minimum participation of $150 in the XSTP pre-sale and completion of the tasks below are required to be eligible.</p>
            </div>
            
            {/* Important notice */}
            <div className="mb-6 text-sm text-white bg-neutral-950 p-4 rounded-md max-w-3xl mx-auto border-2 border-white">
                <p className="font-semibold mb-1">Important:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>All actions will be registered and verified.</li>
                    <li>After the draw, we will verify if the winner has completed all tasks.</li>
                    <li>If any task is missing, the participant will be disqualified and a new investor will be drawn.</li>
                </ul>
            </div>
            
            {/* Container principal - card único com divisão vertical no desktop */}
            <div className="border-2 border-purple-900 bg-white rounded-lg shadow-md w-full max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row">
                    {/* Formulário de cadastro */}
                    <div className="p-6 w-full md:w-1/2 md:border-r md:border-gray-300">
                        <h2 className="text-xl font-semibold mb-4 text-center">Register Your Participation</h2>
                        
                        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-600 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                            
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-600 mb-1">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>
                            
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-600 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-600 mb-1">Wallet Used for Purchase</label>
                                <input 
                                    type="text" 
                                    name="walletAddress"
                                    value={formData.walletAddress}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                                    placeholder="0x..."
                                    required
                                />
                            </div>
                            
                            <button 
                                type="submit"
                                className={`bg-gradient-to-r ${allButtonsClicked ? 'from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600' : 'from-gray-400 to-gray-500'} text-white py-3 rounded-md mt-2 transition-all duration-300 font-semibold`}
                                disabled={!allButtonsClicked}
                            >
                                {submitStatus.status === 'loading' 
                                    ? 'Submitting...' 
                                    : (allButtonsClicked ? 'Register Participation' : 'Complete All Tasks First')}
                            </button>
                            
                            {!allButtonsClicked && (
                                <p className="text-sm text-red-500 text-center mt-2">
                                    You must complete all social tasks before registering
                                </p>
                            )}
                            
                            {submitStatus.status === 'success' && (
                                <p className="text-sm text-green-600 text-center mt-2 bg-green-100 p-2 rounded">
                                    {submitStatus.message}
                                </p>
                            )}
                            
                            {submitStatus.status === 'error' && (
                                <p className="text-sm text-red-600 text-center mt-2 bg-red-100 p-2 rounded">
                                    {submitStatus.message}
                                </p>
                            )}
                        </form>
                    </div>
                    
                    {/* Card de botões sociais */}
                    <div className="p-6 w-full md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4 text-center">Social Tasks</h1>
                        
                        <div className="flex flex-col gap-3">
                            {/* Botões X (Twitter) - Tarefas */}
                            <button 
                                className={`${clickedButtons.twitter1 ? 'bg-gray-600' : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600'} text-white py-3 px-4 rounded-md w-full flex items-center justify-between transition-all duration-300`}
                                onClick={() => handleButtonClick('twitter1')}
                                disabled={clickedButtons.twitter1}
                            >
                                <span>{clickedButtons.twitter1 ? '✓ Followed @example on X' : 'Follow @example on X'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </button>
                            
                            <button 
                                className={`${clickedButtons.twitter2 ? 'bg-gray-600' : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600'} text-white py-3 px-4 rounded-md w-full flex items-center justify-between transition-all duration-300`}
                                onClick={() => handleButtonClick('twitter2')}
                                disabled={clickedButtons.twitter2}
                            >
                                <span>{clickedButtons.twitter2 ? '✓ Reposted @example on X' : 'Repost @example on X'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </button>
                            
                            <button 
                                className={`${clickedButtons.twitter3 ? 'bg-gray-600' : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600'} text-white py-3 px-4 rounded-md w-full flex items-center justify-between transition-all duration-300`}
                                onClick={() => handleButtonClick('twitter3')}
                                disabled={clickedButtons.twitter3}
                            >
                                <span>{clickedButtons.twitter3 ? '✓ Posted with #xstp #startupx' : 'Post on X #xstp #startupx'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </button>
                            
                            {/* Botão Telegram */}
                            <button 
                                className={`${clickedButtons.telegram ? 'bg-gray-600' : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500'} text-white py-3 px-4 rounded-md w-full flex items-center justify-between transition-all duration-300`}
                                onClick={() => handleButtonClick('telegram')}
                                disabled={clickedButtons.telegram}
                            >
                                <span>{clickedButtons.telegram ? '✓ Joined Telegram' : 'Join Telegram'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                </svg>
                            </button>
                            
                            {/* Botão YouTube */}
                            <button 
                                className={`${clickedButtons.youtube ? 'bg-gray-600' : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500'} text-white py-3 px-4 rounded-md w-full flex items-center justify-between transition-all duration-300`}
                                onClick={() => {
                                    handleButtonClick('youtube');
                                    window.open('https://www.youtube.com/@startupxchain', '_blank', 'noopener,noreferrer');
                                }}
                                disabled={clickedButtons.youtube}
                            >
                                <span>{clickedButtons.youtube ? '✓ Subscribed to YouTube' : 'Subscribe YouTube'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </button>
                            
                            {/* Botão Binance */}
                            <button 
                                className={`${clickedButtons.binance ? 'bg-gray-600' : 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400'} text-white py-3 px-4 rounded-md w-full flex items-center justify-between transition-all duration-300`}
                                onClick={() => {
                                    handleButtonClick('binance');
                                    window.open('https://app.binance.com/uni-qr/cpro/startupx?l=pt-BR&r=1088034711&uc=web_square_share_link&us=copylink', '_blank', 'noopener,noreferrer');
                                }}
                                disabled={clickedButtons.binance}
                            >
                                <span>{clickedButtons.binance ? '✓ Followed on Binance Square' : 'Follow on Binance Square'}</span>
                                <img 
                                    src={binanceLogo} 
                                    alt="Binance" 
                                    className="w-6 h-6"
                                />
                            </button>
                            
                            {/* Botão CoinMarketCap */}
                            <button 
                                className={`${clickedButtons.coinmarketcap ? 'bg-gray-600' : 'bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-900'} text-white py-3 px-4 rounded-md w-full flex items-center justify-between transition-all duration-300`}
                                onClick={() => {
                                    handleButtonClick('coinmarketcap');
                                    window.open('https://coinmarketcap.com/community/profile/startupx/', '_blank', 'noopener,noreferrer');
                                }}
                                disabled={clickedButtons.coinmarketcap}
                            >
                                <span>{clickedButtons.coinmarketcap ? '✓ Followed on CoinMarketCap' : 'Follow on CoinMarketCap'}</span>
                                <img 
                                    src={coinmarketcapLogo} 
                                    alt="CoinMarketCap" 
                                    className="w-6 h-6"
                                />
                            </button>
                        </div>
                        
                        <div className="mt-4 text-center">
                            <p className="text-sm font-medium">
                                {`Completed Tasks: ${Object.values(clickedButtons).filter(status => status === true).length} of 7`}
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div 
                                    className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${(Object.values(clickedButtons).filter(status => status === true).length / 7) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Social;
