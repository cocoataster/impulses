import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, ArrowLeft, Scale, ShieldCheck, HelpCircle } from 'lucide-react'

export function TermsOfService() {
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
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 mb-8">
                            <FileText size={32} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Terms of Service</h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed">
                            By using Impulses, you agree to these simple terms. We've kept them short and human-readable, just like the app.
                        </p>

                        <div className="space-y-12">
                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">
                                        <Scale size={20} className="text-blue-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">1. License & Usage</h2>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    Impulses is a productivity tool designed to help you manage spending habits. We grant you a personal, non-exclusive license to use the app on your Apple devices. You agree not to attempt to decompile or reverse engineer the software.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">
                                        <ShieldCheck size={20} className="text-green-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">2. Your Responsibility</h2>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    The app is provided "as is". While we strive for perfection, we are not responsible for any financial decisions or losses incurred while using the app. The "Cooling-off" periods and reflections are suggestions, and the final decision to purchase remains yours.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">
                                        <HelpCircle size={20} className="text-purple-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">3. No Warranty</h2>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    We provide the app without any warrant of any kind. Since all data is stored locally, we cannot recover any lost data if you delete the app or lose your device without a system backup (e.g., iCloud backup).
                                </p>
                            </section>

                            <section className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                                <h2 className="text-xl font-bold mb-4">Updates to Terms</h2>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                    We may update these terms occasionally to reflect changes in the app or legal requirements. Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
                                </p>
                                <a href="mailto:hello@impulses.app" className="text-blue-500 hover:underline font-medium">
                                    hello@impulses.app
                                </a>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
