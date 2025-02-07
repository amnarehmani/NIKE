import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Lists = () => {
  return (
    <>
      <div className="mt-20 mb-20 flex items-center justify-center">
        <div className="w-full max-w-7xl px-4">
        
          <div className="block sm:hidden">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-[600]">Icons</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-center">
                    <li>All Shoes</li>
                    <li>Air Max 95</li>
                    <li>Air Max 90</li>
                    <li>Air Max 88</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

        
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-[600]">Shoes</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-center">
                    <li>All Shoes</li>
                    <li>Custom Shoes</li>
                    <li>Jordans Shoes</li>
                    <li>Running Shoes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-[600]">Clothing</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-center">
                    <li>All Clothing</li>
                    <li>Modest Wear</li>
                    <li>Hoodies and Pullovers</li>
                    <li>Shirts and Tops</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

    
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-[600]">Kids</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-center">
                    <li>Infant and Toddler Shoes</li>
                    <li>Kids Shoes</li>
                    <li>Kids Jordan Shoes</li>
                    <li>Kids Basketball Shoes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    
              <div>
                <h3 className="font-semibold text-lg mb-4 text-center">Icons</h3>
                <ul className="space-y-2 text-center">
                  <li>All Shoes</li>
                  <li>Air Max 95</li>
                  <li>Air Max 90</li>
                  <li>Air Max 88</li>
                </ul>
              </div>

        
              <div>
                <h3 className="font-semibold text-lg mb-4 text-center">Shoes</h3>
                <ul className="space-y-2 text-center">
                  <li>All Shoes</li>
                  <li>Custom Shoes</li>
                  <li>Jordans Shoes</li>
                  <li>Running Shoes</li>
                </ul>
              </div>

              
              <div>
                <h3 className="font-semibold text-lg mb-4 text-center">
                  Clothing
                </h3>
                <ul className="space-y-2 text-center">
                  <li>All Clothing</li>
                  <li>Modest Wear</li>
                  <li>Hoodies and Pullovers</li>
                  <li>Shirts and Tops</li>
                </ul>
              </div>

        
              <div>
                <h3 className="font-semibold text-lg mb-4 text-center">Kids</h3>
                <ul className="space-y-2 text-center">
                  <li>Infant and Toddler Shoes</li>
                  <li>Kids Shoes</li>
                  <li>Kids Jordan Shoes</li>
                  <li>Kids Basketball Shoes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
