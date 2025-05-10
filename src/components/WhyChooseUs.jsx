import { FiShield, FiDollarSign, FiClock, FiHeadphones } from 'react-icons/fi'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: <FiShield className="w-6 h-6 text-indigo-600" />,
    title: "Secure Transactions",
    description: "Bank-level security for all your transactions and data."
  },
  {
    icon: <FiDollarSign className="w-6 h-6 text-indigo-600" />,
    title: "Best Prices",
    description: "We guarantee the best market prices for your licenses."
  },
  {
    icon: <FiClock className="w-6 h-6 text-indigo-600" />,
    title: "Fast Processing",
    description: "Get paid within 48 hours after accepting our offer."
  },
  {
    icon: <FiHeadphones className="w-6 h-6 text-indigo-600" />,
    title: "Dedicated Support",
    description: "Our experts are available 24/7 to assist you."
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-12">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
