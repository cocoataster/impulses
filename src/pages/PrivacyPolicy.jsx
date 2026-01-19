import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, ArrowLeft, Lock, Database, EyeOff } from 'lucide-react'

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
            <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-100 dark:border-zinc-800/50">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
                    <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 mb-8">
                            <Shield size={32} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Privacy Policy</h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed">
                            At Impulses, we believe your data belongs to you. Our approach to privacy is simple: we don't want your data, so we don't collect it.
                        </p>

                        <div className="space-y-12">
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">
                                        <Database size={20} className="text-blue-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Local Storage Only</h2>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    All information you enter into the Impulses app—including items you track, your reflections, and your progress—is stored locally on your device. We do not use external servers to process or store your personal data.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">
                                        <EyeOff size={20} className="text-orange-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">No Data Collection</h2>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    We do not collect any personal information, usage statistics, or analytics. There are no tracking scripts, no advertisements, and no third-party data handlers integrated into the app.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">
                                        <Lock size={20} className="text-green-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Security</h2>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    Because your data never leaves your device, it is protected by the built-in security features of your operating system (iOS/macOS). We recommend using a passcode or biometric authentication to keep your device secure.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                                <h2 className="text-xl font-bold mb-4">Questions?</h2>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                    If you have any questions about our privacy practices, please feel free to reach out.
                                </p>
                                <a href="mailto:privacy@impulses.app" className="text-blue-500 hover:underline font-medium">
                                    privacy@impulses.app
                                </a>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
