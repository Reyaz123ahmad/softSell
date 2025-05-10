import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Inc.",
    quote: "SoftSell helped us recover over $50,000 in unused Microsoft licenses. The process was seamless and their team was extremely professional."
  },
  {
    name: "Michael Chen",
    role: "CFO",
    company: "StartUp Ventures",
    quote: "As a startup, every dollar counts. SoftSell provided us with much-needed cash flow by purchasing our surplus Adobe licenses at a fair price."
  }
]

const Testimonials = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
          >
            <div className="mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}, {testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
