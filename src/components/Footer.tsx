import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-pink-600">Artistly<span className="text-gray-900 text-lg">.com</span></h2>
          <p className="text-sm">
            Artistly is your one-stop platform for discovering, connecting, and
            booking the best performers for your next event.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold  mb-2">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/careers" className="">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold  mb-2">Artists</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/artists" className="">
                Explore Artists
              </Link>
            </li>
            <li>
              <Link href="/onboard" className="">
                Onboard as Artist
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:">
                Manager Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold  mb-2">Get in Touch</h3>
          <p className="text-sm">Email: support@artistly.com</p>
          <p className="text-sm mb-4">Phone: +91 12345 67890</p>

          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="hover:" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" className="hover:" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-sm text-center">
        &copy; {new Date().getFullYear()} Artistly. All rights reserved.
      </div>
    </footer>
  );
}
