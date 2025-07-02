interface UserCountSelectorProps {
  userCount: number;
  setUserCount: (count: number) => void;
}

export default function UserCountSelector({ userCount, setUserCount }: UserCountSelectorProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">Chọn số lượng người dùng</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={userCount}
          onChange={(e) => setUserCount(Number(e.target.value))}
          min="1"
          className="border border-gray-300 rounded px-3 py-2 w-24"
        />
        <span className="text-sm text-gray-600">- {(125000 * userCount).toLocaleString()} đ/tháng</span>
      </div>
    </div>
  );
}
