import { forwardRef } from 'react';

interface PricingSummaryProps {
  userCount: number;
  selectedModules: number[];
  isYearly: boolean;
  setIsYearly: (yearly: boolean) => void;
  totalPrice: number;
  onRegister: () => void;
}

const PricingSummary = forwardRef<HTMLDivElement, PricingSummaryProps>(
  ({ userCount, selectedModules, isYearly, setIsYearly, totalPrice, onRegister }, ref) => {
    return (
      <div className="w-80" ref={ref}>
        <div className="self-start border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
          {/* Toggle Switch for Monthly/Yearly */}
          <div className="mb-4">
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  !isYearly
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Hàng tháng
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isYearly
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Hàng năm
                {isYearly && <span className="ml-1 text-xs text-green-600">(Giảm 10%)</span>}
              </button>
            </div>
          </div>

          {/* Pricing Details */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Số người dùng:</span>
              <span className="font-medium">{userCount}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Modules đã chọn:</span>
              <span className="font-medium">{selectedModules.length}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Tổng giá:</span>
              <span className="font-medium">{totalPrice.toLocaleString()} đ</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Giá/người dùng:</span>
              <span className="font-medium">{(totalPrice / userCount).toLocaleString()} đ</span>
            </div>
            
            {isYearly ? (
              <>
                <div className="flex justify-between text-green-600">
                  <span>Tiết kiệm hàng năm:</span>
                  <span className="font-medium">
                    {((totalPrice / 0.9 * 12 * 0.1)).toLocaleString()} đ
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng hàng năm:</span>
                  <span className="font-medium text-lg">{(totalPrice * 12).toLocaleString()} đ</span>
                </div>
              </>
            ) : (
              <div className="flex justify-between">
                <span className="text-gray-600">Tổng hàng tháng:</span>
                <span className="font-medium text-lg">{totalPrice.toLocaleString()} đ</span>
              </div>
            )}
            
            <hr className="my-3" />
            <div className="flex justify-between text-blue-600">
              <span>Chi phí triển khai:</span>
              <span className="font-medium">1.920.000 đ</span>
            </div>
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 mt-4 w-full rounded-lg font-medium transition-colors"
            onClick={onRegister}
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
    );
  }
);

PricingSummary.displayName = 'PricingSummary';

export default PricingSummary;
