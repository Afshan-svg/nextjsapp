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
          <div className=" p-10 md:p-2 md:px-10">
            <div className="text-3xl md:text-2xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-2xl md:text-4xl text-gradient bg-gray-100 bg-clip-text text-yellow">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-lg md:text-xl text-left md:text-right">
    How does influencer marketing fit into your overall strategy, and how do you choose the right influencers for a campaign?
    </AccordionTrigger>
    <AccordionContent>
    Influencer marketing is a vital part of our strategy. We meticulously select influencers based on alignment with your brand values and target audience. This ensures authenticity and maximizes the impact of influencer partnerships.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger className="text-lg md:text-xl text-left md:text-right">
    How can CGI Marketing benefit my business?
    </AccordionTrigger>
    <AccordionContent>
    CGI Marketing has transformative power. As a CGI Marketing Agency, Insights Media pushes boundaries with this innovative approach. Our methods blend cutting-edge technology with creative storytelling, delivering a visually captivating experience that engages audiences and elevates brand presence.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger className="text-lg md:text-xl text-left md:text-right">
      How does Insights Media stay ahead in the ever-evolving world of digital marketing trends?
    </AccordionTrigger>
    <AccordionContent>
    Staying at the forefront of digital trends is our commitment. As the Top Digital Marketing Agency in India, Insights Media&apos;s team is continually evolving, adopting new technologies and strategies to ensure your brand reaps the benefits of the latest innovations in the digital marketing landscape.
</AccordionContent>

  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger className="text-lg md:text-xl text-left md:text-right">
    How do you incorporate creativity into your social media campaigns?
    </AccordionTrigger>
    <AccordionContent>
    Creativity is at the heart of our social media campaigns. Whether its visually stunning content or innovative engagement tactics, our team at Insights Media ensures your brand stands out in the crowded social media landscape, sparking interest and conversations.
    </AccordionContent>
  </AccordionItem>
</Accordion>

  
  
          </div>
        </div> );
}
 
export default FAQS;