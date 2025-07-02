import { modules } from '../_utils/data';

interface ModulesSelectionProps {
  selectedModules: number[];
  setSelectedModules: (modules: number[]) => void;
}

export default function ModulesSelection({ selectedModules, setSelectedModules }: ModulesSelectionProps) {
  const categories = Array.from(new Set(modules.map((m) => m.category)));

  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-6">Chọn ứng dụng của bạn</h1>

      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-3">{category}</h2>
          {/* chỉnh sửa chiều ngang chiều dọc của những chức năng thanh toán ở đây */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {modules
              .filter((m) => m.category === category)
              .map((module) => (
                <div
                  key={module.id}
                  className={`
                    flex items-center p-3 rounded-lg border hover:border-blue-300 transition-colors
                    ${selectedModules.includes(module.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
                    ${category === 'Dịch vụ' ? 'w-full' : ''}
                  `}
                >
                  <input
                    type="checkbox"
                    checked={selectedModules.includes(module.id)}
                    onChange={(e) =>
                      setSelectedModules(
                        e.target.checked
                          ? [...selectedModules, module.id]
                          : selectedModules.filter((id) => id !== module.id)
                      )
                    }
                    className="mr-3 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <div className="flex items-center flex-1">
                    {module.icon && (
                      <img 
                        src={module.icon} 
                        alt={`${module.name} Icon`} 
                        className="mr-2 h-8 w-8" 
                      />
                    )}
                    <div className="flex flex-col">
                      <span className="font-medium">{module.name}</span>
                      <span className="text-sm text-gray-600">{module.price.toLocaleString()} đ/tháng</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
