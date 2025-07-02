export async function POST(request: Request) {
  const data = await request.json();
  // Logic gửi email hoặc lưu vào database (ví dụ: giả lập)
  console.log('Dữ liệu gửi đi:', data);
  return new Response(JSON.stringify({ success: true, message: 'Đăng ký thành công' }), { status: 200 });
}