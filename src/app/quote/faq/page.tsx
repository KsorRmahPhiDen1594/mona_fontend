import FAQSection from '../_components/faq-section';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <a href="/quote" className="hover:text-blue-600">Báo giá</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Câu hỏi thường gặp</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <FAQSection />
      </div>
    </div>
  );
}
