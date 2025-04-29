import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="w-full bg-black-200 mt-auto">
      <div className="max-w-7xl w-full mx-auto flex justify-between text-white p-5">
        <div className="flex gap-6 text-white">
          <Link href="mailto:mateusmlopestr@gmail.com">
            <Mail size={20} />
          </Link>
          <Link href="tel:+5521980219426">
            <Phone size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/mateusmlopes" target="_blank">
            <Linkedin size={20} />
          </Link>
          <Link href="https://github.com/mateusmedeir" target="_blank">
            <Github size={20} />
          </Link>
        </div>
        <p className="text-sm">© {year} Mateus Lopes</p>
      </div>
    </footer>
  )
}

export default Footer
