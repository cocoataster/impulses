import React from 'react';
import { motion } from 'framer-motion';
import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-black.png';

export function PhoneFrame({ children }) {
    return (
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden ring-1 ring-white/10">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[32px] w-[120px] bg-black rounded-b-[18px] z-20 flex items-center justify-center overflow-hidden">
                {/* Camera dot */}
                <div className="w-[8px] h-[8px] rounded-full bg-[#1c1c1c] ml-[60px]"></div>
            </div>

            {/* Screen Content */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-black relative">

                {/* Status Bar Mockup */}
                <div className="absolute top-2 w-full px-6 flex justify-between text-[10px] font-medium text-black dark:text-white z-10 opacity-80">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <span>Signal</span>
                        <span>Wifi</span>
                        <span>100%</span>
                    </div>
                </div>

                {/* Content Container */}
                <div className="h-full w-full overflow-y-auto no-scrollbar pt-12 pb-4">
                    {children}
                </div>
            </div>

            {/* Side Buttons (Visual Only) */}
            <div className="absolute top-[80px] -left-[17px] w-[3px] h-[26px] bg-gray-700 rounded-l-lg"></div>
            <div className="absolute top-[120px] -left-[17px] w-[3px] h-[45px] bg-gray-700 rounded-l-lg"></div>
            <div className="absolute top-[175px] -left-[17px] w-[3px] h-[45px] bg-gray-700 rounded-l-lg"></div>
            <div className="absolute top-[120px] -right-[17px] w-[3px] h-[65px] bg-gray-700 rounded-r-lg"></div>
        </div>
    );
}

export function AppScreenshotPlaceholder() {
    return (
        <div className="flex flex-col h-full px-4">
            <div className="flex justify-between items-end mb-6">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Impulses</h1>
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-100 dark:border-zinc-800 flex items-center justify-center">
                    <img src={logoBlack} alt="Logo" className="w-full h-full object-cover dark:hidden" />
                    <img src={logoWhite} alt="Logo" className="w-full h-full object-cover hidden dark:block" />
                </div>
            </div>

            {/* List Placeholders */}
            <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800"
                    >
                        <div className="flex justify-between mb-2">
                            <div className="h-4 w-24 bg-gray-300 dark:bg-zinc-700 rounded"></div>
                            <div className="h-4 w-8 bg-gray-300 dark:bg-zinc-700 rounded"></div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-1.5 mt-3">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${80 - (i * 15)}%` }}></div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* FAB */}
            <div className="absolute bottom-6 right-6 w-14 h-14 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-lg text-white dark:text-black text-2xl font-light">
                +
            </div>
        </div>
    )
}
