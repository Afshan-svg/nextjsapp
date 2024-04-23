import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-4xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-2xl md:text-4xl text-gradient bg-gradient-to-r from-yellow to-black bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>How can CGI Marketing benefit my business?</AccordionTrigger>
      <AccordionContent>
      CGI Marketing has transformative power. As a CGI Marketing Agency, Insights Media pushes boundaries with this innovative approach. Our methods blend cutting-edge technology with creative storytelling, delivering a visually captivating experience that engages audiences and elevates brand presence.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How do you incorporate creativity into your social media campaigns?</AccordionTrigger>
      <AccordionContent>
Hmmmmmmmmmm
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
    Why Insights Media ?
      </AccordionTrigger>
      <AccordionContent>
     hmmmmmmmmm
        
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
    Support ?
        </AccordionTrigger>
      <AccordionContent>
        We offer Monday-Friday support for all our clients.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;