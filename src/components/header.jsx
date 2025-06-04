'use client'
import { useRouter } from "next/navigation";
const Header = () => {
  const router=useRouter()
  const handleHome=()=>{
    router.push('/')
  }
  const handleProjects=()=>{
    router.push('/projects')
  }
    const handleAbout=()=>{
    router.push('/about')
  }
  
  return (
    <div className="bg-[#1C1C1C] text-[#C9C9C9] flex justify-between items-center px-16 py-10">
      <div className="text-lg font-semibold hover:text-[#7A25C9]">Bilal Sheikh</div>
      <div className="flex space-x-6">
        <div onClick={handleHome} className="cursor-pointer hover:text-[#7A25C9] ">Home</div>
        <div onClick={handleProjects} className="cursor-pointer hover:text-[#7A25C9]">Projects</div>
        <div onClick={handleAbout} className="cursor-pointer hover:text-[#7A25C9]">About Me</div>
      </div>
    </div>
  );
};

export default Header;
