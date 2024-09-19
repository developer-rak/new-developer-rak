import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const ProfilePicture = () => {
  return (
    <img src="/self.png" alt="Profile picture of developer-rak" className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-[350px] md:w-2/5 p-3" />
  )
}

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>🧀 based in Pakistan</li>
      <li>🎓 Graduated in BS-IT</li>
      <li><a href="mailto:developerrak.99@gmail.com">📧 let's get in touch!</a></li>
      <li>📝 download my <a className="link link-primary" href="/public/RashidAliWK.pdf" download="RashidAliWK">resume</a></li>
    </ul>
  )
}

const WavingHand = () => {
  return (
    <span className="animate-wave inline-block">🤚🏻</span>
  )
}

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/developer-rak"
  },
  {
    icon: <FaLinkedin />,
    href: "www.linkedin.com/in/developer-rak"
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/developer_rak"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">Rashid Ali</span><WavingHand />
          </h1>
          <h2 className="text-3xl">I'm a frontend developer.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <ul className="flex justify-center text-3xl gap-10 mt-4">
          {socials.map((social, index) => (
            <li key={index} className="hover:scale-125 hover:text-white transition-all ease-in-out"><Link href={social.href} target="_blank">{social.icon}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
