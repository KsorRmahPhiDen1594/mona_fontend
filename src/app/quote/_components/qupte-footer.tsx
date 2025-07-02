export default function QuoteFooter() {
  return (
    <div className="w-full bg-gradient-to-b from-[#64225a] to-[#a2238f] text-white p-8 text-center">
      <p className="text-xl font-bold mb-4">ERPViet - Đồng hành cùng doanh nghiệp</p>
      <p className="mb-6">Hơn 60 ứng dụng cốt lõi và 20.000 ứng dụng tùy chỉnh, được 8 triệu người dùng trên 200 quốc gia tin tưởng sử dụng.</p>
      
      <button 
        onClick={() => window.location.href = '/contact-us'}
        className="bg-white text-[#64225a] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Truy cập để trải nghiệm
      </button>
    </div>
  );
}
