import { HoverEffect } from "@/components/ui/card-hover-effects";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "CGI Marketing",
        description:
          "Premier CGI marketing services in Goa, delivering exceptional results and innovative solutions to clients.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "Content Graphics",
        description:
          "Excels in offering top-tier content management solutions, meticulously curating and optimizing content for maximum impact and engagement.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Video Editing",
        description:
          "Specializes in video editing services, crafting compelling and polished visuals tailored to captivate audiences and enhance brand storytelling.",
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Digital Marketing",
        description:
          "Ranks as the premier choice for digital marketing services, delivering unparalleled expertise, innovation, and results to clients",    
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "Web Development",
        description:
          "Excels in web development, crafting bespoke digital solutions tailored to client needs, ensuring user-friendly interfaces and optimal performance.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Brand Management",
        description:
          "Leads in brand management services, offering comprehensive strategies and solutions to elevate brand perception and drive sustainable growth.",
     
      },
];