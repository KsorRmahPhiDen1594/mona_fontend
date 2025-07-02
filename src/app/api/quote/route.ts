export async function POST(request: Request) {
  const data = await request.json();
  // Logic xử lý yêu cầu báo giá (ví dụ: lưu tạm thời)
  return new Response(JSON.stringify({ message: 'Yêu cầu báo giá đã được nhận', data }), { status: 200 });
}