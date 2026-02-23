'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const ERPDashboard = ({ isDarkMode }) => {
    const [sales, setSales] = useState(12450);
    const [isSyncing, setIsSyncing] = useState(false);
    const [activeTab, setActiveTab] = useState('inventory');

    // Simulate real-time sales growth
    useEffect(() => {
        const interval = setInterval(() => {
            setSales(prev => prev + Math.floor(Math.random() * 50));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSync = () => {
        setIsSyncing(true);
        setTimeout(() => setIsSyncing(false), 2000);
    };

    const inventory = [
        { item: 'Wireless Earbuds', stock: 85, color: 'bg-green-500' },
        { item: 'Smart Watch', stock: 32, color: 'bg-yellow-500' },
        { item: 'Bluetooth Speaker', stock: 12, color: 'bg-red-500' },
    ];

    const shipments = [
        { id: '#TRK001', status: 'In Transit', client: 'Techylads' },
        { id: '#TRK002', status: 'Processing', client: 'Nepa Works' },
    ];

    return (
        <section id="erp-demo" className="w-full px-[12%] py-20 bg-gray-50/50 dark:bg-darkHover/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h4 className="text-lg font-Ovo mb-2 text-blue-600">Expertise Highlight</h4>
                <h2 className="text-4xl md:text-5xl font-Ovo mb-6">Interactive ERP Demo</h2>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-white/70 font-Ovo">
                    A conceptual demonstration of how I bridge high-level ERP business logic (like Odoo)
                    with custom Next.js analytics dashboards.
                </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 bg-white dark:bg-darkHover p-8 rounded-[3rem] shadow-xl border border-gray-100 dark:border-white/5">

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-2 border-r border-gray-100 dark:border-white/5 pr-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Command Center</h3>
                    {['inventory', 'logistics', 'analytics'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm capitalize transition-all ${activeTab === tab
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}

                    <div className="pt-10">
                        <motion.button
                            onClick={handleSync}
                            disabled={isSyncing}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-xs transition-all ${isSyncing ? 'bg-green-500 text-white' : 'bg-gray-900 text-white dark:bg-white dark:text-black'
                                }`}
                        >
                            {isSyncing ? (
                                <><span className="animate-spin duration-300">↻</span> Syncing to Odoo...</>
                            ) : (
                                <><Image src={assets.git} alt="" className="w-4 invert dark:invert-0" /> Push to Production</>
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Main Dashboard Area */}
                <div className="lg:col-span-3 space-y-8">
                    {/* Top Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50/50 dark:bg-blue-500/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-500/20">
                            <h4 className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase mb-1">Total Sales</h4>
                            <p className="text-2xl font-mono font-bold text-gray-900 dark:text-white">${sales.toLocaleString()}</p>
                        </div>
                        <div className="bg-purple-50/50 dark:bg-purple-500/10 p-5 rounded-2xl border border-purple-100 dark:border-purple-500/20">
                            <h4 className="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase mb-1">Active Users</h4>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <p className="text-2xl font-mono font-bold text-gray-900 dark:text-white">421</p>
                            </div>
                        </div>
                        <div className="bg-orange-50/50 dark:bg-orange-500/10 p-5 rounded-2xl border border-orange-100 dark:border-orange-500/20">
                            <h4 className="text-xs text-orange-600 dark:text-orange-400 font-bold uppercase mb-1">Sync Status</h4>
                            <p className="text-sm font-bold text-orange-700 dark:text-orange-400">99.2% Accurate</p>
                        </div>
                    </div>

                    {/* Dynamic Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="min-h-[200px]"
                        >
                            {activeTab === 'inventory' && (
                                <div className="space-y-6">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <div className="w-1 h-4 bg-green-500 rounded-full" /> Stock Levels
                                    </h4>
                                    {inventory.map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-xs font-medium">
                                                <span>{item.item}</span>
                                                <span className={item.stock < 15 ? 'text-red-500 font-bold' : ''}>{item.stock} in stock</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.stock}%` }}
                                                    className={`h-full ${item.color}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'logistics' && (
                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <div className="w-1 h-4 bg-blue-500 rounded-full" /> Pending Deliveries
                                    </h4>
                                    {shipments.map((ship, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="text-blue-500 bg-blue-100 dark:bg-blue-500/20 p-2 rounded-lg">📦</div>
                                                <div>
                                                    <p className="text-sm font-bold">{ship.id}</p>
                                                    <p className="text-[10px] text-gray-500">{ship.client}</p>
                                                </div>
                                            </div>
                                            <span className="text-[10px] px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 rounded-full font-bold">
                                                {ship.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'analytics' && (
                                <div className="flex flex-col items-center justify-center p-10 text-center space-y-4">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center text-3xl">📊</div>
                                    <div>
                                        <p className="font-bold">Real-time Data Sync</p>
                                        <p className="text-xs text-gray-500 max-w-[200px] mx-auto">This demonstrates Odoo XML-RPC data fetching translated into optimized JS visualizations.</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default ERPDashboard
