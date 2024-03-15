import { motion } from "framer-motion";
import { fadeIn } from "../variants"
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { startSaveFormData } from "../store/messages/thunks";

const formData = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}

export const Contact = () => {

  const dispatch = useDispatch();
  const { name, email, phoneNumber, message, onInputChange, formState, onResetForm} = useForm( formData );

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startSaveFormData(formState) )
    onResetForm();
  }

  return (
    <section id="contact" className="py-16 lg:section my-28 sm:my-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text` */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.3}}
            className="flex-1">
            <div>
              <h4 className="text-xl uppercase font-medium mb-2 tracking-wide custom-color">Get in touch</h4>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Let's work <br />together</h2>
            </div>
          </motion.div>

          {/* Form` */}
          <motion.form
            variants={fadeIn('', 0.3)}
            initial="hidden"
            whileInView="show"
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 sm:pb-24 p-6"
            onSubmit={ onSubmit }
          >
              <input
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray transition-all focus:border-gray-300 focus:ring-transparent focus:border-opacity-50 text-lg"
                  type="text"
                  placeholder="Your name"
                  required
                  autoComplete="off"
                  name="name"
                  value={name}
                  onChange={onInputChange}/>
              <input
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray transition-all focus:border-gray-300 focus:ring-transparent focus:border-opacity-50 text-lg"
                  type="email"
                  placeholder="Your email"
                  required
                  autoComplete="off"
                  name="email"
                  value={email}
                  onChange={onInputChange}/>
              <input
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray transition-all focus:border-gray-300 focus:ring-transparent focus:border-opacity-50 text-lg"
                  type="tel"
                  placeholder="Your phone number"
                  required
                  autoComplete="off"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={onInputChange}/>
              <textarea
                  className="bg-transparent border-b py-12 outline-none w-full placeholder:text-gray transition-all resize-none mb-12 focus:border-gray-300 focus:ring-transparent focus:border-opacity-50 text-lg"
                  placeholder="Your message"
                  name="message"
                  value={message}
                  onChange={onInputChange}>
                  </textarea>
              <button className="btn btn-sm" type="submit">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}


