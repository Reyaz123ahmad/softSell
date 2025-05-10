import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: <FaUpload className="w-8 h-8 text-indigo-600" />,
    title: "Upload License Details",
    description: "Provide information about your unused software licenses through our secure portal."
  },
  {
    icon: <FaSearchDollar className="w-8 h-8 text-indigo-600" />,
    title: "Get Instant Valuation",
    description: "Our system analyzes the market and provides a fair valuation within minutes."
  },
  {
    icon: <FaMoneyBillWave className="w-8 h-8 text-indigo-600" />,
    title: "Receive Payment",
    description: "Once accepted, we handle the transfer and you get paid directly to your account."
  }
]

const HowItWorks = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
