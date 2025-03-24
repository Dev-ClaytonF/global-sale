import React from 'react';

function FundAllocation() {
    // Dados de alocação de fundos ordenados do maior para o menor
    const allocationData = [
        { category: "Initial Liquidity on Exchanges", percentage: 50, color: "from-blue-500 to-purple-600" },
        { category: "Marketing and Partnerships", percentage: 13.55, color: "from-red-500 to-orange-500" },
        { category: "Co-founders", percentage: 12, color: "from-purple-600 to-pink-500" },
        { category: "Development Reserve", percentage: 8, color: "from-pink-500 to-red-500" },
        { category: "Team and Advisors", percentage: 8, color: "from-yellow-500 to-green-500" },
        { category: "Strategic Reserve in BTC and USDT", percentage: 7, color: "from-green-500 to-blue-500" },
        { category: "Payment Exchange Listing", percentage: 1, color: "from-green-500 to-blue-500" },
        { category: "Community Rewards", percentage: 0.45, color: "from-green-500 to-blue-500" },
       
       
    ];

    return (
        <div id="fund-allocation" className="py-12 px-4 bg-black">
            <h1 className="text-4xl font-bold text-center mb-6">
                <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
                    Fund Allocation
                </span>
            </h1>
            
            <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                The raised funds will be used strategically to strengthen the Startupx ecosystem and support its sustainable growth, ensuring 50% liquidity on exchanges at its launch.
            </p>
            
            <div className="max-w-4xl mx-auto">
                {/* Tabela visualmente atraente e responsiva */}
                <div className="mb-6 overflow-hidden rounded-2xl border border-purple-700 shadow-lg shadow-purple-900/20">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-black">
                            <thead>
                                <tr className="bg-gradient-to-r from-[#2a0845] to-[#6441A5]">
                                    <th className="py-4 px-3 md:px-6 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="py-4 px-3 md:px-6 text-right text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
                                        Allocation
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-purple-900/30">
                                {allocationData.map((item, index) => (
                                    <tr key={index} className="hover:bg-purple-900/10 transition-colors">
                                        <td className="py-3 md:py-4 px-3 md:px-6 text-xs md:text-sm text-gray-200 flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0`}></div>
                                            <span>
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="py-3 md:py-4 px-3 md:px-6 text-xs md:text-sm font-bold text-right text-gray-200">
                                            {item.percentage}%
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Gráfico de barras verticais com indicadores integrados */}
                <div className="max-w-md mx-auto mt-2">
                    <div className="flex items-end h-64 gap-2 md:gap-4 mb-2 justify-center">
                        {allocationData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center group relative">
                                <div 
                                    className={`w-10 md:w-16 bg-gradient-to-t ${item.color} rounded-t-lg shadow-lg shadow-purple-900/20 relative`} 
                                    style={{ height: `${item.percentage * 2}px` }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white text-[10px] md:text-xs p-1 rounded whitespace-nowrap">
                                            {item.category}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center">
                                    <div className="text-[10px] md:text-xs font-bold text-gray-200">{item.percentage}%</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FundAllocation;
