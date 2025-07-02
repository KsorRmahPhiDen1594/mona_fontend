export const modules = [
  { id: 1, name: 'Thảo luận', price: 0, category: 'Công cụ', icon: '/images/quote/thaoluan.png' },
  { id: 2, name: 'Ghi chú', price: 0, category: 'Công cụ', icon: '/images/quote/ghichu.png' },
  { id: 3, name: 'Danh bạ', price: 0, category: 'Công cụ', icon: '/images/quote/danhba.png' },
  { id: 4, name: 'Lịch', price: 0, category: 'Công cụ', icon: '/images/quote/lich.png' },
  { id: 5, name: 'Dashboards', price: 0, category: 'Công cụ', icon: '/images/quote/dashboards.png' },
  
  // Bán hàng
  { id: 6, name: 'CRM', price: 198000, category: 'Bán hàng', icon: '/images/quote/crm.webp' },
  { id: 7, name: 'Bán hàng', price: 99000, category: 'Bán hàng', icon: '/images/quote/banhang.png' },
  { id: 8, name: 'Quản lý dịch vụ', price: 198000, category: 'Bán hàng', icon: '/images/quote/quanlydichvu.png' },
  
  // Quản lý kho & sản xuất
  { id: 9, name: 'Quản lý kho', price: 297000, category: 'Quản lý kho & sản xuất', icon: '/images/quote/quanlykho.png' },
  { id: 10, name: 'Sản xuất', price: 396000, category: 'Quản lý kho & sản xuất', icon: '/images/quote/sanxuat.png' },
  { id: 11, name: 'Mua hàng', price: 99000, category: 'Quản lý kho & sản xuất', icon: '/images/quote/muahang.png' },
  { id: 12, name: 'Báo trí', price: 198000, category: 'Quản lý kho & sản xuất', icon: '/images/quote/baotri.png' },
  { id: 13, name: 'Chất lượng', price: 198000, category: 'Quản lý kho & sản xuất', icon: '/images/quote/chatluong.png' },
  
  // Kế toán
  { id: 14, name: 'Kế toán VAS', price: 396000, category: 'Kế toán', icon: '/images/quote/ketoan.png' },
  { id: 15, name: 'Hóa đơn', price: 99000, category: 'Kế toán', icon: '/images/quote/hoadon.png' },
  { id: 16, name: 'Chi phí', price: 99000, category: 'Kế toán', icon: '/images/quote/chiphi.png' },
  { id: 17, name: 'Tài liệu', price: 198000, category: 'Kế toán', icon: '/images/quote/tailieu.png' },
  { id: 18, name: 'Chữ ký', price: 198000, category: 'Kế toán', icon: '/images/quote/chuky.png' },
  
  // Nhân sự
  { id: 19, name: 'Nhân viên', price: 99000, category: 'Nhân sự', icon: '/images/quote/nhanvien.png' },
  { id: 20, name: 'Tuyển dụng', price: 99000, category: 'Nhân sự', icon: '/images/quote/tuyendung.png' },
  { id: 21, name: 'Ngày nghỉ', price: 99000, category: 'Nhân sự', icon: '/images/quote/ngaynghi.png' },
  { id: 22, name: 'Đánh giá', price: 99000, category: 'Nhân sự', icon: '/images/quote/danhgia.png' },
  { id: 23, name: 'Thời gian biểu', price: 99000, category: 'Nhân sự', icon: '/images/quote/thoigianbieu.png' },

  // Dịch vụ
  { id: 24, name: 'Nhân viên', price: 198000, category: 'Dịch vụ', icon: '/images/quote/duan.png' },
  { id: 25, name: 'Tuyển dụng', price: 198000, category: 'Dịch vụ', icon: '/images/quote/hotro.png' },

  // Tích hợp
  { id: 26, name: 'viettel S-Invoice', price: 297000, category: 'Tích hợp', icon: '/images/quote/viettel.png' },
  { id: 27, name: 'Tổng đài VoIP', price: 297000, category: 'Tích hợp', icon: '/images/quote/tongdai.jpg' },
  { id: 28, name: 'Grap Mart', price: 198000, category: 'Tích hợp', icon: '/images/quote/grap.jpg' },
  { id: 29, name: 'Nhất Tín', price: 198000, category: 'Tích hợp', icon: '/images/quote/nhattin.png' },
  { id: 30, name: 'Giao hàng tiếp kiệm', price: 198000, category: 'Tích hợp', icon: '/images/quote/giaohangtiepkiem.png' },
  { id: 31, name: 'Giao hàng nhanh', price: 198000, category: 'Tích hợp', icon: '/images/quote/giaohangnhanh.png' },
  { id: 32, name: 'Viettel Post', price: 198000, category: 'Tích hợp', icon: '/images/quote/viettelpost.png' },
  { id: 33, name: 'AhaMove', price: 198000, category: 'Tích hợp', icon: '/images/quote/ahamove.png' },
];

export function calculatePrice(
  userCount: number,
  selectedModules: number[],
  isYearly: boolean
) {
  // Giá cơ bản cho người dùng (125.000 đ/tháng/người)
  const baseUserPrice = 125000 * userCount;
  
  // Giá của các modules được chọn
  const modulesPrice = modules
    .filter((module) => selectedModules.includes(module.id))
    .reduce((sum, module) => sum + module.price, 0);
  
  // Tổng giá = giá cơ bản + giá modules
  let totalPrice = baseUserPrice + modulesPrice;
  
  // Điều chỉnh giá Quản lý kho & sản xuất theo số lượng người dùng (nếu có)
  if (selectedModules.some((id: number) => [9, 10, 11, 12, 13].includes(id))) {
    const warehousePrice = Math.max(1920000 / 10 * userCount, 297000 * userCount);
    // Thay thế giá modules kho bằng giá điều chỉnh
    const warehouseModulesPrice = modules
      .filter((module) => selectedModules.includes(module.id) && [9, 10, 11, 12, 13].includes(module.id))
      .reduce((sum, module) => sum + module.price, 0);
      
    totalPrice = baseUserPrice + (modulesPrice - warehouseModulesPrice) + warehousePrice;
  }
  
  // Giảm giá 10% nếu chọn hàng năm
  const discount = isYearly ? 0.9 : 1;
  
  return Math.round(totalPrice * discount);
}
