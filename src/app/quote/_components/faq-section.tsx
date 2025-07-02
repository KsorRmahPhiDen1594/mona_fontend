import React, { useState } from 'react';

const faqData = [
  {
    question: "Sự khác nhau giữa hai hình thức triển khai Cloud ERP & On-Premise ERP?",
    answer: "On-Premise ERP: triển khai trên server cục bộ doanh nghiệp, thường phù hợp với doanh nghiệp có hơn 50 nhân viên, cần bộ phận IT vận hành. Cloud ERP: triển khai trên nền tảng đám mây của ERPViet, dễ mở rộng, không cần server cục bộ, chi phí bảo trì thấp hơn."
  },
  {
    question: "Phần mềm có thực sự được bảo mật không?",
    answer: "Có, ERPViet đảm bảo bảo mật thông qua các biện pháp mã hóa và chính sách quản lý dữ liệu chặt chẽ."
  },
  {
    question: "Tôi có thể mua đứt phần mềm không?",
    answer: "Không, ERPViet hiện không hỗ trợ mua đứt phần mềm, chỉ cung cấp theo mô hình thuê bao."
  },
  {
    question: "Thời gian triển khai phần mềm ERPViet trong bao lâu?",
    answer: "Thời gian triển khai phụ thuộc vào quy mô doanh nghiệp, phạm vi ứng dụng và mức độ đầu tư nguồn lực, từ 1 tháng đến vài năm."
  },
  {
    question: "Với gói Cloud ERP, ngoài chi phí hàng tháng, tôi còn phải trả thêm chi phí gì không?",
    answer: "Ngoài chi phí hàng tháng, ban đầu có chi phí đào tạo, hỗ trợ khởi tạo hệ thống, tùy chỉnh (nếu có), và có thể cần thuê/mua server riêng."
  },
  {
    question: "Nếu muốn tùy chỉnh phần mềm thì tôi phải trả những khoản phí nào?",
    answer: "Ngoài chi phí tùy chỉnh (tính theo man-day), bạn cần thuê hoặc mua server."
  },
  {
    question: "Tôi cần chuẩn bị những gì trước khi triển khai ERP?",
    answer: "Bạn cần chuẩn bị đội ngũ nhân sự, cơ sở hạ tầng, và kế hoạch triển khai chi tiết."
  },
  {
    question: "Đào tạo & triển khai với các khách hàng ở xa sẽ được thông qua dưới hình thức nào?",
    answer: "Thông qua hình thức trực tuyến hoặc hỗ trợ từ xa."
  },
  {
    question: "Phân quyền trong phần mềm được tiến hành như thế nào?",
    answer: "Phân quyền được thực hiện qua giao diện quản trị, tùy chỉnh theo vai trò người dùng."
  },
  {
    question: "Tôi có thể mua thêm user trong quá trình sử dụng không?",
    answer: "Có, bạn có thể mua thêm user bất kỳ lúc nào."
  },
  {
    question: "Nếu tôi cài đặt thêm ứng dụng thì có phải trả thêm phí không?",
    answer: "Có, tùy thuộc vào ứng dụng, có thể phát sinh chi phí bổ sung."
  },
  {
    question: "Hỗ trợ trong quá trình sử dụng đối với các gói Cloud ERP như thế nào?",
    answer: "Hỗ trợ qua hotline, email, và đội ngũ kỹ thuật 24/7."
  },
  {
    question: "Chi phí bảo trì đối với gói On-Premise ERP là bao nhiêu?",
    answer: "Miễn phí 1 năm đầu, sau đó 15% chi phí phần mềm mỗi năm."
  },
  {
    question: "Kỳ thanh toán các gói phần mềm ERP như thế nào?",
    answer: "Cloud ERP: thanh toán 12 tháng/lần; On-Premise: 100% sau ký hợp đồng, tạm ứng đào tạo."
  },
  {
    question: "Có chính sách chiết khấu nào đối với các gói phần mềm không?",
    answer: "Có, tùy thuộc vào hợp đồng và số lượng user."
  },
  {
    question: "Tôi có thể chuyển từ gói Cloud ERP đang sử dụng về server riêng của chính mình không?",
    answer: "Có, nhưng cần đầu tư thêm cơ sở hạ tầng và hỗ trợ kỹ thuật."
  },
  {
    question: "ERPViet có thay đổi chi phí các gói trong tương lai hay không?",
    answer: "Có thể thay đổi, phụ thuộc vào chính sách công ty."
  },
  {
    question: "Dữ liệu sẽ được lưu trữ ở đâu khi sử dụng các gói Cloud ERP?",
    answer: "Dữ liệu được lưu trữ trên server đám mây của ERPViet, bảo mật cao."
  },
  {
    question: "Có sự khác biệt về tính năng của các gói không?",
    answer: "Có, các gói khác nhau về số lượng module và tùy chỉnh."
  },
  {
    question: "Tôi có thể sử dụng tên miền riêng cho trang web của mình không?",
    answer: "Có, tùy chỉnh được hỗ trợ với các gói phù hợp."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Câu hỏi thường gặp
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                <span className="text-blue-600 font-bold text-lg flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed pt-4">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;