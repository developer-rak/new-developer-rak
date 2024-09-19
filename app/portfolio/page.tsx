import Link from 'next/link'
import React from 'react'

const projects = [
  {
    title: 'Youtube Clone',
    mockup: '/mockups/youtubeClone.png',
    live: 'https://rak-youtubeclone.netlify.app/',
    code: 'https://github.com/developer-rak/youtube_clone_app'
  },
  {
    title: 'Gericht Restaurant',
    mockup: '/mockups/gerichtRestaurant.png',
    live: 'https://rak-gerichtrestaurant.netlify.app/',
    code: 'https://github.com/developer-rak/gerich_restaurant'
  },
  {
    title: 'GPT3',
    mockup: '/mockups/gpt.png',
    live: 'https://rak-gpt3.netlify.app/',
    code: 'https://github.com/developer-rak/gpt3'
  },
  {
    title: 'PinkStore eCommerce Web',
    mockup: '/mockups/pinkStore.png',
    live: 'https://pinkstore-developer-rak.netlify.app/',
    code: 'https://github.com/developer-rak/PinkStore-eCommerceWebsite'
  },
]

const Portfolio = () => {
  return (
    <div className="text-center">
      <p>Open Source Contributions:</p>
      <Link className="link link-primary" href="https://github.com/developer-rak?page=1&tab=repositories">developer-rak.github</Link>
      <div className="flex flex-wrap items-start mb-10">
      {projects.map((project, index) => (
        <div key={index} className="md:w-1/2 flex flex-col items-center justify-center">
          <img src={project.mockup} />
          <h1 className="text-3xl mb-2">{project.title}</h1>
          <div className="flex gap-2">
            <Link href={project.live} target='_blank' className="btn btn-secondary">Live</Link>
            <Link href={project.code} target='_blank' className="btn btn-primary">Source</Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Portfolio