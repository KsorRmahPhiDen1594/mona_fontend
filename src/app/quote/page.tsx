'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { calculatePrice } from './_utils/data';
import QuoteHeader from './_components/quote-header';
import UserCountSelector from './_components/user-count-selector';
import ModulesSelection from './_components/modules-selection';
import AdditionalServicesTable from './_components/additional-services-table';
import PricingSummary from './_components/pricing-summary';
import FAQSection from './_components/faq-section';
import QuoteFooter from '@/app/quote/_components/qupte-footer';

export default function QuotePage() {
  const [userCount, setUserCount] = useState(10);
  const [selectedModules, setSelectedModules] = useState<number[]>([]);
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();
  const tableRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const totalPrice = calculatePrice(userCount, selectedModules, isYearly);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current && pricingRef.current) {
        const tableRect = tableRef.current.getBoundingClientRect();
        const pricingRect = pricingRef.current.getBoundingClientRect();

        if (tableRect.top <= pricingRect.bottom + 20 && tableRect.top >= 0) {
          pricingRef.current.style.position = 'sticky';
          pricingRef.current.style.top = '20px';
        } else {
          pricingRef.current.style.position = 'relative';
          pricingRef.current.style.top = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegister = () => {
    const quoteData = { userCount, selectedModules, isYearly, totalPrice };
    router.push(`/quote/confirm?data=${encodeURIComponent(JSON.stringify(quoteData))}`);
  };

  return (
    <>
      <QuoteHeader />
      
      <div className="container mx-auto p-4">
        <UserCountSelector
          userCount={userCount}
          setUserCount={setUserCount}
        />
        
        <div className="relative">
          <div className="flex gap-6">
            <ModulesSelection
              selectedModules={selectedModules}
              setSelectedModules={setSelectedModules}
            />
            <PricingSummary
              ref={pricingRef}
              userCount={userCount}
              selectedModules={selectedModules}
              isYearly={isYearly}
              setIsYearly={setIsYearly}
              totalPrice={totalPrice}
              onRegister={handleRegister}
            />
          </div>
          
          <AdditionalServicesTable ref={tableRef} />
        </div>

        {/* FAQ Section */}
        <div className="mt-16 py-8 border-t border-gray-200">
          <FAQSection />
        </div>
      </div>

      {/* Footer - Đặt ngoài container để full width */}
      <QuoteFooter />
    </>
  );
}
