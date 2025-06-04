'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
export default function ProjectsPage() {
  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen flex flex-col">
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
            className="border border-[#8B16FB] rounded-lg p-4 w-60 text-center shadow-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-32 h-32 object-contain mx-auto mb-4"
            />
            <Link href={project.path}>
            <button className="bg-[#8B16FB] text-white px-4 py-2 rounded hover:bg-[#7A25C9] transition">
              {project.title}
            </button>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}


