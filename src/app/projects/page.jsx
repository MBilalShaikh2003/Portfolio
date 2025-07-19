'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
export default function ProjectsPage() {
  return (
    <div className="bg-[#242424] text-white min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-wrap justify-center gap-6 px-8 py-12 flex-1">
        {/* Project Card Template */}
        {[
  {
    title: 'CSS Projects',
    image: '/assets/csslogo.jpg',
    path: '/projects/cssprojects',
  },
  {
    title: 'JavaScript Projects',
    image: '/assets/jslogo.svg',
    path: '/projects/jsprojects',
  },
  {
    title: 'React Projects',
    image: '/assets/reactlogo.png',
    path: '/projects/reactprojects',
  },
  {
    title: 'Next Js Projects',
    image: '/assets/nextjs.jpg',
    path: '/projects/nextjsprojects',
  },
].map((project, idx) => (
          <div
  key={idx}
  className="border border-[#8B16FB] rounded-lg p-3 w-56 h-[260px] bg-[#222] text-center shadow-md flex flex-col items-center justify-between"
>
  <img
    src={project.image}
    alt={project.title}
    className="w-20 h-20 object-contain"
  />
  <h3 className="text-sm font-medium mt-2 mb-4">{project.title}</h3>

  <Link href={project.path}>
    <button className="bg-[#8B16FB] text-white text-sm px-3 py-1.5 rounded hover:bg-[#7A25C9] transition">
      View Project
    </button>
  </Link>
</div>


        ))}
      </div>

      <Footer />
    </div>
  );
}


