'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { modules, calculatePrice } from '../_utils/data';

type QuoteData = {
  userCount: number;
  selectedModules: number[];
  isYearly: boolean;
  totalPrice: number;
};

type FormData = {
  company: string;
  province: string;
  industry: string;
  demand: string;
  phone: string;
  email: string;
};

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    company: '',
    province: '',
    industry: '',
    demand: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(dataParam));
        setQuoteData(parsedData);
      } catch (error) {
        console.error('Error parsing quote data:', error);
      }
    }
  }, [searchParams]);

  if (!quoteData) return <div>Loading...</div>;

  const { userCount, selectedModules, isYearly, totalPrice } = quoteData;
  const selectedModuleNames = modules.filter(m => selectedModules.includes(m.id)).map(m => m.name);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Đăng ký thành công: ${JSON.stringify({ ...quoteData, ...formData })}`);
    // Thêm logic gửi API sau
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Thông tin liên hệ</h1>

      <div className="flex justify-between gap-4">
        <form onSubmit={handleSubmit} className="w-1/2 p-4 border rounded">
          <div className="mb-4">
            <label className="block mb-2">Tên công ty *</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Tỉnh/Thành phố *</label>
            <select
              value={formData.province}
              onChange={(e) => setFormData({ ...formData, province: e.target.value })}
              className="border p-2 w-full rounded"
              required
            >
              <option value="">Chọn tỉnh/thành phố</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="TP.HCM">TP.HCM</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Ngành nghề *</label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="border p-2 w-full rounded"
              required
            >
              <option value="">Chọn ngành nghề</option>
              <option value="Công nghệ">Công nghệ</option>
              <option value="Sản xuất">Sản xuất</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Chức danh *</label>
            <input
              type="text"
              value={formData.demand}
              onChange={(e) => setFormData({ ...formData, demand: e.target.value })}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Số điện thoại *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-blue-600">
            Gửi đăng ký
          </button>
          <button 
            type="button" 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" 
            onClick={() => window.history.back()}
          >
            Quay lại
          </button>
        </form>

        <div className="w-1/3 p-4 border rounded">
          <h2 className="text-xl font-semibold mb-4">Sản phẩm</h2>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2">Người dùng</td>
                <td className="py-2 text-center">{userCount}</td>
                <td className="py-2 text-right">{(125000 * userCount).toLocaleString()} đ</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Tổng đài VoIP 24h</td>
                <td className="py-2 text-center">1</td>
                <td className="py-2 text-right">297.000 đ</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Hóa đơn</td>
                <td className="py-2 text-center">1</td>
                <td className="py-2 text-right">99.000 đ</td>
              </tr>
              <tr className="border-b font-semibold">
                <td className="py-2" colSpan={2}>Tổng/tháng</td>
                <td className="py-2 text-right">{totalPrice.toLocaleString()} đ</td>
              </tr>
              <tr className="border-b">
                <td className="py-2" colSpan={2}>Dự tính chi phí triển khai</td>
                <td className="py-2 text-right">5.760.000 đ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
