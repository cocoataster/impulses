import { motion } from 'framer-motion'

export function FeatureCard({ icon, title, description, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm"
        >
            <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-2xl">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    )
}
