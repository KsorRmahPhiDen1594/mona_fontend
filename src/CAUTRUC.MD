D:.
│   middleware.ts                             # Middleware Next.js, xử lý logic trước request (xác thực, chuyển hướng, quyền truy cập)
│   
├───app
│   │   favicon.ico                          # Biểu tượng trang web hiển thị trên thanh tiêu đề/tab trình duyệt
│   │   globals.scss                         # CSS toàn cục áp dụng cho toàn ứng dụng
│   │   layout.tsx                           # Bố cục chính cho toàn ứng dụng (header, footer, v.v.)
│   │   not-found.tsx                        # Trang lỗi 404 khi truy cập route không tồn tại
│   │   page.tsx                             # Trang chính (home page) của ứng dụng
│   │   robot.txt                            # Cấu hình cho công cụ tìm kiếm, chỉ định phần được phép thu thập dữ liệu
│   │   
│   ├───(auth)
│   │   │   layout.tsx                       # Bố cục chung cho các trang xác thực (login, register, v.v.)
│   │   │   
│   │   ├───login
│   │   │       page.tsx                     # Trang giao diện đăng nhập
│   │   │       
│   │   ├───refer-mailbox
│   │   │       page.tsx                     # Trang giới thiệu hoặc xác minh email (mời bạn bè, xác nhận tài khoản)
│   │   │
│   │   ├───register
│   │   │       page.tsx                     # Trang giao diện đăng ký tài khoản
│   │   │
│   │   └───_utils
│   │           actions.ts                   # Server actions xử lý logic xác thực
│   │           login-form.tsx               # Component giao diện form đăng nhập
│   │           refer-mailbox.tsx            # Component cho tính năng giới thiệu qua email
│   │           register-form.tsx            # Component giao diện form đăng ký
│   │           token-verify.tsx             # Component xử lý xác minh token (JWT, email token)
│   │
│   ├───about-us
│   │   │   layout.tsx                       # Bố cục cho trang "About Us"
│   │   │   page.tsx                         # Nội dung chính của trang "About Us"
│   │   │
│   │   └───_utils
│   │           meet-our-ceo.tsx             # Component hiển thị thông tin về CEO
│   │           message-from-ceo.tsx         # Component hiển thị thông điệp từ CEO
│   │
│   ├───api
│   │   ├───sign-cloudinary-params
│   │   │       route.ts                     # API route ký tham số cho Cloudinary (quản lý hình ảnh/video)
│   │   │
│   │   └───stripe
│   │       ├───create
│   │       │       route.ts                 # API route tạo giao dịch thanh toán qua Stripe
│   │       │
│   │       ├───verify
│   │       │       route.ts                 # API route xác minh giao dịch thanh toán
│   │       │
│   │       └───webhook
│   │               route.ts                 # API route xử lý webhook từ Stripe (thông báo thanh toán)
│   │
│   ├───case-studies
│   │   │   layout.tsx                       # Bố cục chung cho các trang case study
│   │   │   page.tsx                         # Trang hiển thị danh sách case studies
│   │   │
│   │   ├───[slug]
│   │   │       page.tsx                     # Trang chi tiết cho case study theo slug động
│   │   │
│   │   ├───_previous
│   │   │       layout.tsx                   # Bố cục cho case study cũ
│   │   │       page.tsx                     # Trang hiển thị danh sách/nội dung case study cũ
│   │   │
│   │   └───_utils
│   │       │   about.tsx                    # Component giới thiệu về case study
│   │       │   approach.tsx                 # Component mô tả cách tiếp cận case study
│   │       │   challenges.tsx               # Component liệt kê thách thức trong case study
│   │       │   clients-reviews.tsx          # Component hiển thị đánh giá từ khách hàng
│   │       │   feature-card-icon-text.tsx   # Component hiển thị tính năng với biểu tượng và văn bản
│   │       │   hero.tsx                    # Component phần đầu (hero section) của case study
│   │       │   our-review.tsx               # Component hiển thị đánh giá từ công ty
│   │       │   results.tsx                  # Component hiển thị kết quả case study
│   │       │   sections-side-image.tsx      # Component hiển thị phần với hình ảnh bên cạnh
│   │       │
│   │       └───data
│   │               data.tsx                 # Dữ liệu chung cho case studies
│   │               data___googleads.tsx     # Dữ liệu case study về Google Ads
│   │               data___googleanalytics.tsx # Dữ liệu case study về Google Analytics
│   │               data___socialmedia.tsx   # Dữ liệu case study về social media
│   │               data___uiux.tsx          # Dữ liệu case study về UI/UX
│   │               data___webdev.tsx        # Dữ liệu case study về phát triển web
│   │               data___wordpress.tsx     # Dữ liệu case study về WordPress
│   │
│   ├───checkout
│   │       page.tsx                         # Trang xử lý thanh toán (giỏ hàng hoặc dịch vụ)
│   │
│   ├───contact-us
│   │       actions.ts                       # Server actions xử lý logic gửi form liên hệ
│   │       contact-form.tsx                 # Component giao diện form liên hệ
│   │       layout.tsx                       # Bố cục cho trang liên hệ
│   │       loading.tsx                      # Component hiển thị trạng thái loading
│   │       page.tsx                         # Trang chính cho phần liên hệ
│   │
│   ├───dashboard
│   │       layout.tsx                       # Bố cục cho trang dashboard
│   │       page.tsx                         # Trang chính của dashboard (cho người dùng đăng nhập)
│   │
│   ├───get-a-quote
│   │       layout.tsx                       # Bố cục cho trang báo giá
│   │       page.tsx                         # Trang yêu cầu báo giá
│   │
│   ├───gigs
│   │   │   page.tsx                         # Trang hiển thị danh sách dịch vụ (gigs)
│   │   │
│   │   ├───payment-verify
│   │   │       page.tsx                     # Trang xác minh thanh toán cho gigs
│   │   │
│   │   └───_utils
│   │           actions.ts                   # Server actions xử lý logic cho gigs
│   │           characteristics.tsx          # Component hiển thị đặc điểm của gigs
│   │           gig-card.tsx                 # Component hiển thị thông tin gig dưới dạng card
│   │           gigs.tsx                     # Component tổng hợp danh sách gigs
│   │           portfolio.tsx                # Component hiển thị danh mục dự án (portfolio)
│   │           skills.tsx                   # Component hiển thị kỹ năng liên quan đến gigs
│   │           stripe-payment-button.tsx    # Component nút thanh toán qua Stripe
│   │           types.ts                     # Định nghĩa kiểu dữ liệu (TypeScript) cho gigs
│   │
│   ├───joining
│   │   │   page.tsx                         # Trang chính cho quy trình tham gia (ứng tuyển/đăng ký)
│   │   │
│   │   ├───end
│   │   │       page.tsx                     # Trang hiển thị khi hoàn tất quy trình tham gia
│   │   │
│   │   └───_utils
│   │           actions.ts                   # Server actions xử lý logic tham gia
│   │           confetti.tsx                 # Component hiển thị hiệu ứng confetti (chúc mừng)
│   │           custom-input.tsx             # Component input tùy chỉnh
│   │           custom-radio.tsx             # Component radio button tùy chỉnh
│   │           custom-select.tsx            # Component select box tùy chỉnh
│   │           data.tsx                     # Dữ liệu cho trang joining
│   │           datalayer.tsx                # Component đẩy dữ liệu vào data layer (phân tích)
│   │           google-ads-form.tsx          # Form yêu cầu dịch vụ Google Ads
│   │           google-analytics-form.tsx    # Form yêu cầu dịch vụ Google Analytics
│   │           hero.section.tsx             # Component phần đầu (hero section) cho joining
│   │           shopify-development-form.tsx # Form yêu cầu dịch vụ phát triển Shopify
│   │           social-media-paid-ads.tsx    # Component liên quan đến quảng cáo trả phí social media
│   │           software-development-form.tsx # Form yêu cầu dịch vụ phát triển phần mềm
│   │           types.ts                     # Định nghĩa kiểu dữ liệu (TypeScript) cho joining
│   │           uiux-form.tsx                # Form yêu cầu dịch vụ UI/UX
│   │           web-development-form.tsx     # Form yêu cầu dịch vụ phát triển web
│   │           wordpress-development-form.tsx # Form yêu cầu dịch vụ phát triển WordPress
│   │
│   ├───meet-with-yeatiq
│   │   │   page.tsx                         # Trang chính cho tính năng "Meet with Yeatiq" (lịch hẹn, tư vấn)
│   │   │
│   │   └───_utils
│   │       ├───components
│   │       │       data-layer-pusher-link.tsx # Component đẩy dữ liệu liên kết vào data layer
│   │       │       data-layer-pusher.tsx     # Component đẩy dữ liệu vào data layer
│   │       │
│   │       └───sections
│   │               about.tsx                 # Component giới thiệu cho trang meet-with-yeatiq
│   │               bottom.tsx               # Component phần cuối trang
│   │               calendly.tsx              # Component tích hợp lịch hẹn Calendly
│   │               cta.tsx                  # Component kêu gọi hành động (CTA)
│   │               free-online-dialogue.tsx  # Component hiển thị hội thoại trực tuyến miễn phí
│   │               hero.tsx                  # Component phần đầu (hero section)
│   │               proof.tsx                 # Component hiển thị bằng chứng (kết quả, thành tựu)
│   │               review.tsx                # Component hiển thị đánh giá
│   │               visuals.tsx               # Component hiển thị hình ảnh minh họa
│   │
│   ├───privacy-policy
│   │       page.tsx                         # Trang chính sách bảo mật
│   │
│   ├───reviews
│   │   │   layout.tsx                       # Bố cục cho trang đánh giá
│   │   │   page.tsx                         # Trang hiển thị danh sách đánh giá
│   │   │
│   │   └───post
│   │       │   page.tsx                     # Trang tạo/sửa đánh giá
│   │       │
│   │       └───_utils
│   │               actions.ts               # Server actions xử lý logic đánh giá
│   │               cld-upload-widget.tsx    # Component tải lên file qua Cloudinary
│   │               delete-review.tsx        # Component xóa đánh giá
│   │               form.tsx                 # Component form nhập đánh giá
│   │               input.tsx                # Component input tùy chỉnh cho form đánh giá
│   │
│   ├───scale-with-ads
│   │   │   page.tsx                         # Trang chính cho dịch vụ quảng cáo (scale with ads)
│   │   │
│   │   ├───_assets
│   │   │       arrow-line.tsx              # Component biểu tượng mũi tên
│   │   │       calendar-time-icon.tsx      # Component biểu tượng lịch và thời gian
│   │   │       coin-icon.tsx               # Component biểu tượng tiền xu
│   │   │       transperancy-icon.tsx       # Component biểu tượng minh bạch
│   │   │
│   │   └───_components
│   │           achieve-section-two.tsx      # Component phần thành tựu thứ hai
│   │           achieve-section.tsx          # Component phần thành tựu
│   │           advertisement-cta.tsx        # Component kêu gọi hành động quảng cáo
│   │           brands-section.tsx           # Component hiển thị các thương hiệu
│   │           comparison-copy-section.tsx  # Component so sánh nội dung
│   │           comparison-table-section.tsx # Component bảng so sánh
│   │           cta-form.tsx                 # Component form kêu gọi hành động
│   │           expire-section.tsx           # Component hiển thị thông tin hết hạn
│   │           fail-fix-section.tsx         # Component mô tả cách khắc phục thất bại
│   │           faq-section.tsx              # Component câu hỏi thường gặp
│   │           footer-section.tsx           # Component phần chân trang
│   │           hero-section.tsx             # Component phần đầu (hero section)
│   │           refund-policy-terms.tsx      # Component chính sách hoàn tiền
│   │           risk-free-section.tsx        # Component mô tả dịch vụ không rủi ro
│   │           terms-and-condition-dialog.tsx # Component hộp thoại điều khoản
│   │           testimonial-aside.tsx        # Component hiển thị đánh giá bên lề
│   │           testimonials-section.tsx     # Component hiển thị các đánh giá
│   │           three-months-challenge-section.tsx # Component thử thách 3 tháng
│   │           why-safe-section.tsx         # Component giải thích tại sao dịch vụ an toàn
│   │
│   ├───services
│   │   │   layout.tsx                       # Bố cục cho trang dịch vụ
│   │   │   page.tsx                         # Trang hiển thị danh sách dịch vụ
│   │   │
│   │   ├───[slug]
│   │   │       layout.tsx                   # Bố cục cho trang dịch vụ chi tiết (theo slug)
│   │   │       page.tsx                     # Trang chi tiết cho một dịch vụ cụ thể
│   │   │
│   │   └───_utils
│   │       │   core-benefits.tsx            # Component hiển thị lợi ích cốt lõi
│   │       │   ending-funnel.tsx            # Component phần cuối phễu bán hàng
│   │       │   herosection.tsx              # Component phần đầu (hero section)
│   │       │   limited-offer-section.tsx    # Component hiển thị ưu đãi giới hạn
│   │       │   marquee-wrapper.tsx          # Component hiển thị nội dung chạy ngang (marquee)
│   │       │   testimonials.tsx             # Component hiển thị đánh giá
│   │       │   user-empathy-banner.tsx      # Component banner đồng cảm với người dùng
│   │       │   what-and-why-section.tsx     # Component giải thích dịch vụ và lý do chọn
│   │       │
│   │       └───data
│   │               data___customweb.tsx     # Dữ liệu cho dịch vụ phát triển web tùy chỉnh
│   │               data___googleads.tsx     # Dữ liệu cho dịch vụ Google Ads
│   │               data___googleanalytics.tsx # Dữ liệu cho dịch vụ Google Analytics
│   │               data___shopify.tsx       # Dữ liệu cho dịch vụ Shopify
│   │               data___socialmedia.tsx   # Dữ liệu cho dịch vụ social media
│   │               data___software.tsx      # Dữ liệu cho dịch vụ phát triển phần mềm
│   │               data___uiux.tsx          # Dữ liệu cho dịch vụ UI/UX
│   │               data___wordpress.tsx     # Dữ liệu cho dịch vụ WordPress
│   │               services.tsx             # Dữ liệu chung cho các dịch vụ
│   │
│   ├───terms-and-conditions
│   │   │   page.tsx                         # Trang điều khoản và điều kiện
│   │   │
│   │   └───_partials   
│   │       └───_components
│   │               terms-and-conditions.tsx # Component hiển thị nội dung điều khoản
│   │
│   ├───verify
│   │       layout.tsx                       # Bố cục cho trang xác minh
│   │       page.tsx                         # Trang xử lý xác minh (email, tài khoản, v.v.)
│   │
│   └───_utils  
│           calendly.tsx                     # Component tích hợp lịch hẹn Calendly
│           carousel.tsx                     # Component hiển thị carousel (trình chiếu)
│           faq.tsx                          # Component câu hỏi thường gặp
│           hero-cta.tsx                     # Component kêu gọi hành động ở phần đầu
│           herosection.tsx                  # Component phần đầu (hero section) chung
│           how-we-work.tsx                  # Component mô tả quy trình làm việc
│           masonry-layout.tsx               # Component bố cục dạng lưới (masonry)
│           neetocal.tsx                     # Component tích hợp lịch hẹn (có thể là tùy chỉnh)
│           our-services.tsx                 # Component hiển thị danh sách dịch vụ
│           process.tsx                      # Component mô tả quy trình
│           project-idea-banner.tsx          # Component banner ý tưởng dự án
│           testimonial.tsx                  # Component hiển thị đánh giá
│           video-player.tsx                 # Component phát video
│
├───components
│   ├───anims
│   │       fadein-onscroll.tsx              # Component hiệu ứng fade-in khi cuộn
│   │       fadein.anim.tsx                  # Component hiệu ứng fade-in
│   │       fadeupdown.anim.tsx              # Component hiệu ứng fade lên/xuống
│   │
│   ├───assets
│   │       aggrement-board.tsx              # Component biểu tượng bảng thỏa thuận
│   │       AGGREMENT_BOARD.png              # Hình ảnh bảng thỏa thuận
│   │       AGGREMENT_BOARD.svg              # File SVG bảng thỏa thuận
│   │       auth-background.tsx              # Component nền cho trang xác thực
│   │       blue-google.tsx                  # Component biểu tượng Google màu xanh
│   │       blue-logo-gradiant-light-bg.tsx  # Component logo màu xanh với nền sáng
│   │       brandlogo.tsx                    # Component logo thương hiệu
│   │       campaigns.tsx                    # Component biểu tượng chiến dịch
│   │       centralize.tsx                   # Component biểu tượng tập trung
│   │       check-green.tsx                  # Component biểu tượng dấu check màu xanh
│   │       code-cloud.tsx                   # Component biểu tượng code hoặc đám mây
│   │       competition.tsx                  # Component biểu tượng cạnh tranh
│   │       contents.tsx                     # Component biểu tượng nội dung
│   │       dollar.tsx                       # Component biểu tượng đồng đô-la
│   │       feather.tsx                      # Component biểu tượng lông vũ
│   │       FlyingRocket.png                 # Hình ảnh tên lửa bay
│   │       footer-brand-logo.tsx            # Component logo thương hiệu ở footer
│   │       geo-targetting.tsx               # Component biểu tượng nhắm mục tiêu địa lý
│   │       google-analytics.tsx             # Component biểu tượng Google Analytics
│   │       I.tsx                            # Component biểu tượng số I
│   │       II.tsx                           # Component biểu tượng số II
│   │       III.tsx                          # Component biểu tượng số III
│   │       long-term-partnership.tsx        # Component biểu tượng quan hệ đối tác lâu dài
│   │       lunar-circle.tsx                 # Component biểu tượng vòng trăng
│   │       pen-tool.tsx                     # Component biểu tượng công cụ vẽ
│   │       popular.tsx                      # Component biểu tượng phổ biến
│   │       premium.tsx                      # Component biểu tượng cao cấp
│   │       project-handover.tsx             # Component biểu tượng bàn giao dự án
│   │       quality.tsx                      # Component biểu tượng chất lượng
│   │       requirements.tsx                 # Component biểu tượng yêu cầu
│   │       research-and-conecptualization.tsx # Component biểu tượng nghiên cứu và khái niệm
│   │       roadmap-board.tsx                # Component biểu tượng lộ trình
│   │       roi.tsx                          # Component biểu tượng ROI (lợi tức đầu tư)
│   │       shopify.tsx                      # Component biểu tượng Shopify
│   │       sme.tsx                          # Component biểu tượng doanh nghiệp vừa và nhỏ
│   │       springle.tsx                     # Component biểu tượng springle (có thể là tên tùy chỉnh)
│   │       starter.tsx                      # Component biểu tượng khởi đầu
│   │       target-audience.tsx              # Component biểu tượng đối tượng mục tiêu
│   │       three-boxes.tsx                  # Component biểu tượng ba hộp
│   │       three-d-star.tsx                 # Component biểu tượng ngôi sao 3D
│   │       three-items-stack.tsx            # Component biểu tượng ba mục xếp chồng
│   │       three-roles-bar.tsx              # Component biểu tượng thanh ba vai trò
│   │       transactions-dashbaord.tsx       # Component biểu tượng bảng điều khiển giao dịch
│   │       under-development.tsx            # Component biểu tượng đang phát triển
│   │       video-play-button.tsx            # Component nút phát video
│   │       whatsapp.tsx                     # Component biểu tượng WhatsApp
│   │       wordpress.tsx                    # Component biểu tượng WordPress
│   │       x-red.tsx                        # Component biểu tượng X màu đỏ
│   │
│   ├───layout
│   │       footer.tsx                       # Component footer cho toàn ứng dụng
│   │       navbar.tsx                       # Component thanh điều hướng (navbar)
│   │       uiuxtab-layout.tsx               # Component bố cục tab cho UI/UX
│   │
│   ├───magicui
│   │       feature-with-bar.tsx             # Component hiển thị tính năng với thanh
│   │       feature-with-grid.tsx            # Component hiển thị tính năng dạng lưới
│   │       shimmer-button.tsx               # Component nút có hiệu ứng lấp lánh
│   │
│   ├───molecule
│   │       carousel.tsx                     # Component carousel (trình chiếu)
│   │       checkboxes.tsx                   # Component danh sách checkbox
│   │       cookie-policy.tsx                # Component hiển thị chính sách cookie
│   │       current-year.tsx                 # Component hiển thị năm hiện tại
│   │       email-modal.tsx                  # Component modal nhập email
│   │       errors-messages.tsx              # Component hiển thị thông báo lỗi
│   │       feature-card.tsx                 # Component card hiển thị tính năng
│   │       get-a-quote.tsx                  # Component yêu cầu báo giá
│   │       get-consultation.tsx             # Component yêu cầu tư vấn
│   │       go-to-top.tsx                    # Component nút quay về đầu trang
│   │       LanguageSwitcher.tsx             # Component chuyển đổi ngôn ngữ
│   │       link-button.tsx                  # Component nút liên kết
│   │       loader.tsx                       # Component hiển thị trạng thái loading
│   │       logout.tsx                       # Component xử lý đăng xuất
│   │       magnifier-image.tsx              # Component hiển thị hình ảnh phóng to
│   │       nav-actions.tsx                  # Component hành động trên thanh điều hướng
│   │       process-card.tsx                 # Component card hiển thị quy trình
│   │       product-cards.tsx                # Component card hiển thị sản phẩm
│   │       section-head.tsx                 # Component tiêu đề phần
│   │       services-cta.tsx                 # Component kêu gọi hành động cho dịch vụ
│   │       short-reviews.tsx                # Component hiển thị đánh giá ngắn
│   │       tagline.tsx                      # Component hiển thị khẩu hiệu (tagline)
│   │       testimonial-user-card.tsx        # Component card hiển thị đánh giá người dùng
│   │       under-construction.tsx           # Component hiển thị trạng thái đang xây dựng
│   │       under-development-ui.tsx         # Component giao diện đang phát triển
│   │       whatsapp.tsx                     # Component tích hợp WhatsApp
│   │       work-card.tsx                    # Component card hiển thị công việc/dự án
│   │
│   └───ui
│           accordion.tsx                    # Component accordion (mở rộng/thu gọn)
│           aurora-background.tsx            # Component nền hiệu ứng aurora
│           avatar.tsx                       # Component hiển thị avatar người dùng
│           button.tsx                       # Component nút tùy chỉnh
│           card.tsx                         # Component card chung
│           carousel.tsx                     # Component carousel (trình chiếu)
│           checkbox.tsx                     # Component checkbox tùy chỉnh
│           collapsible.tsx                  # Component phần tử có thể thu gọn
│           command.tsx                      # Component lệnh (command palette)
│           country-combobox.tsx             # Component chọn quốc gia
│           dialog.tsx                       # Component hộp thoại (dialog)
│           dropdown-menu.tsx                # Component menu thả xuống
│           form.tsx                         # Component form chung
│           infinite-moving-cards.tsx        # Component card di chuyển vô hạn
│           input-otp.tsx                    # Component nhập mã OTP
│           input.tsx                        # Component input tùy chỉnh
│           label.tsx                        # Component nhãn (label)
│           marquee.tsx                      # Component nội dung chạy ngang
│           navigation-menu.tsx              # Component menu điều hướng
│           popover.tsx                      # Component popover (hiển thị khi hover)
│           radio-group.tsx                  # Component nhóm radio button
│           scroll-area.tsx                  # Component vùng cuộn
│           select.tsx                       # Component select box tùy chỉnh
│           sheet.tsx                        # Component sheet (bảng trượt)
│           textarea.tsx                     # Component textarea tùy chỉnh
│           toast.tsx                        # Component thông báo (toast)
│           toaster.tsx                      # Component quản lý thông báo toast
│           use-toast.ts                     # Hook xử lý thông báo toast
│
└───lib
    │   getLocation.js                       # Script lấy thông tin vị trí người dùng
    │   languageMap.ts                       # File ánh xạ ngôn ngữ (danh sách ngôn ngữ hỗ trợ)
    │   regexes.ts                           # File chứa các biểu thức chính quy (regex)
    │   utils.ts                             # File chứa các hàm tiện ích chung
    │
    ├───data
    │       data.tsx                         # File chứa dữ liệu chung cho ứng dụng
    │
    ├───datalayer
    │       page-view.tsx                    # Component đẩy dữ liệu lượt xem trang vào data layer
    │       scale-with-ads.tsx               # Component đẩy dữ liệu liên quan đến quảng cáo
    │
    ├───scripts
    │       cal-dot-com-provider.tsx         # Component tích hợp lịch hẹn (cal.com)
    │       data-layer-provider.tsx          # Component cung cấp data layer cho phân tích
    │       index.ts                         # File tổng hợp các script
    │       tag-manager-provider.tsx         # Component tích hợp Google Tag Manager
    │
    └───stripe
            stripe.ts                        # File cấu hình hoặc hàm xử lý Stripe