import { forwardRef } from 'react';

const AdditionalServicesTable = forwardRef<HTMLDivElement>((props, ref) => {
  const services = [
    { id: 1, name: 'Tư vấn trực tiếp', unit: 'Giờ', price: '680.000', note: 'Tư vấn tại văn phòng khách hàng' },
    { id: 2, name: 'Tư vấn online', unit: 'Giờ', price: '500.000', note: 'Qua Skype, Teamviewer, Zalo, Viber' },
    { id: 3, name: 'Đào tạo & hướng dẫn trực tiếp', unit: 'Giờ', price: '450.000', note: 'Gồm đào tạo & hướng dẫn, < 10 người/buổi' },
    { id: 4, name: 'Đào tạo & hướng dẫn online', unit: 'Giờ', price: '300.000', note: 'Gồm đào tạo & hướng dẫn qua Skype, Teamviewer, Zalo, Viber' },
    { id: 5, name: 'Tùy chỉnh hệ thống', unit: 'Giờ', price: '360.000', note: '' },
    { id: 6, name: 'Triển khai trực tiếp', unit: 'Giờ', price: '480.000', note: 'Gồm đào tạo & hướng dẫn, thiết lập hệ thống, kiểm tra dữ liệu' },
    { id: 7, name: 'Triển khai online', unit: 'Giờ', price: '360.000', note: 'Gồm đào tạo & hướng dẫn, thiết lập hệ thống, kiểm tra dữ liệu qua Skype, Teamviewer, Zalo, Viber' },
  ];

  return (
    <div ref={ref} className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Bảng giá dịch vụ bổ sung</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">STT</th>
              <th className="border border-gray-300 p-3 text-left">Dịch vụ</th>
              <th className="border border-gray-300 p-3 text-left">ĐVT</th>
              <th className="border border-gray-300 p-3 text-left">Đơn giá (VNĐ)</th>
              <th className="border border-gray-300 p-3 text-left">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{service.id}</td>
                <td className="border border-gray-300 p-3">{service.name}</td>
                <td className="border border-gray-300 p-3">{service.unit}</td>
                <td className="border border-gray-300 p-3 font-medium">{service.price}</td>
                <td className="border border-gray-300 p-3">{service.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className='mt-8 text-center'>
        *** Miễn phí chi phí ăn ở, di chuyển với các doanh nghiệp trong phạm vi 20km tính từ văn phòng IZISolution
        <br/>*** Giảm giá 10% khi đăng ký 2 năm
        <br/>*** Giảm giá 20% khi đăng ký 3 năm
       </p>
    </div>
  );
});

AdditionalServicesTable.displayName = 'AdditionalServicesTable';

export default AdditionalServicesTable;
