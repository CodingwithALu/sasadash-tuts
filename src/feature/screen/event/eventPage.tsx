import { motion } from 'motion/react';
import {
    Calendar,
    MapPin,
    Users,
    Music,
    Mic2,
    Trophy,
    ArrowLeft,
    Info,
    ExternalLink,
    Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-logo-teal mb-4">{title}</h2>
        {subtitle && <p className="text-logo-teal/70 max-w-2xl mx-auto italic">{subtitle}</p>}
        <div className="w-24 h-1 bg-logo-orange mx-auto mt-6 rounded-full"></div>
    </div>
);

const ScheduleItem = ({ time, title, desc, icon: Icon }: { time: string, title: string, desc: string, icon: any }) => (
    <div className="flex gap-6 relative pb-12 last:pb-0">
        <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-logo-teal/10 last:hidden"></div>
        <div className="w-12 h-12 rounded-full bg-logo-orange/10 text-logo-orange flex items-center justify-center shrink-0 z-10 border-4 border-white">
            <Icon size={20} />
        </div>
        <div className="pt-1">
            <span className="text-logo-orange font-bold text-sm tracking-widest">{time}</span>
            <h4 className="text-xl font-bold text-logo-teal mt-1 mb-2">{title}</h4>
            <p className="text-logo-teal/70 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default function EventPage() {
    return (
        <div className="min-h-screen bg-[#fdfcf9] text-logo-teal font-sans selection:bg-logo-orange/20 pb-20">
            {/* Hero Section */}
            <header className="bg-logo-teal text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://picsum.photos/seed/event-hero/1920/1080"
                        alt="Event Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-logo-orange hover:text-logo-orange/80 transition-colors mb-8 font-bold">
                        <ArrowLeft size={20} /> Quay lại trang chủ
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-logo-orange text-white text-sm font-bold mb-6">
                            <Info size={16} />
                            <span>SỰ KIỆN ĐẶC BIỆT KỶ NIỆM 10 NĂM</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight max-w-4xl">
                            “Tết Mông Xuống Phố 2026” – <br />
                            <span className="text-logo-orange italic">Dấu ấn 10 năm giữ lửa văn hóa giữa lòng Thủ đô</span>
                        </h1>
                        <div className="flex flex-wrap gap-6 text-white/70">
                            <div className="flex items-center gap-2">
                                <Calendar size={20} className="text-logo-orange" />
                                <span className="font-medium">31/01/2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={20} className="text-logo-orange" />
                                <span className="font-medium">Không gian Văn hóa Sáng tạo Tây Hồ, Hà Nội</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Introduction */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 text-lg text-logo-teal/70 leading-relaxed">
                        <h2 className="text-3xl font-serif font-bold text-logo-teal mb-4">Hành trình 10 năm giữ lửa – Gắn kết văn hóa cộng đồng</h2>
                        <p>
                            Chương trình sẽ diễn ra vào ngày 31/01 tại Không gian Văn hóa Sáng tạo Tây Hồ, đánh dấu hành trình 10 năm hình thành và phát triển của một sự kiện văn hóa cộng đồng giàu bản sắc, gắn bó sâu sắc với đời sống tinh thần của người Mông đang sinh sống, học tập và làm việc tại Thủ đô.
                        </p>
                        <p>
                            “Tết Mông xuống phố 2026” không chỉ là dịp để cộng đồng người Mông đón Tết xa quê, mà còn là không gian văn hóa mở, nơi các giá trị truyền thống được gìn giữ, tôn vinh và lan tỏa đến đông đảo công chúng.
                        </p>
                        <div className="bg-logo-orange/5 p-8 rounded-3xl border-l-4 border-logo-orange italic">
                            "Tết từ lâu đã là thời khắc thiêng liêng, mở đầu cho một năm mới. Với người Mông, Tết còn mang ý nghĩa khởi đầu mùa vụ, sum vầy và gắn kết cộng đồng."
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://picsum.photos/seed/event-intro/800/800"
                                alt="Event Intro"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border-8 border-white overflow-hidden shadow-2xl hidden md:block">
                            <img
                                src="https://picsum.photos/seed/event-circle/400/400"
                                alt="Event Detail"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-24 bg-logo-teal/5">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle
                        title="Khung Chương Trình"
                        subtitle="Chuỗi hoạt động văn hóa – nghệ thuật đặc sắc diễn ra xuyên suốt từ sáng đến tối."
                    />

                    <div className="max-w-3xl mx-auto">
                        <ScheduleItem
                            time="08:00 - 11:30"
                            title="Khai mạc & Liên hoan văn nghệ"
                            desc="Liên hoan văn nghệ giữa các tỉnh, đội nhóm, với các tiết mục hát, múa, biểu diễn nhạc cụ, kịch dân gian mang đậm sắc màu văn hóa Mông."
                            icon={Music}
                        />
                        <ScheduleItem
                            time="13:30 - 15:30"
                            title="Talkshow Giao lưu Văn hóa"
                            desc="Chia sẻ về hành trình gìn giữ bản sắc dân tộc trong đời sống đô thị hiện đại với các nghệ nhân và trí thức người Mông."
                            icon={Mic2}
                        />
                        <ScheduleItem
                            time="15:30 - 18:00"
                            title="Cuộc thi Tub – Ntxhais Vam Meej 2026"
                            desc="Sân chơi tôn vinh vẻ đẹp trí tuệ, tài năng, trang phục truyền thống và bản lĩnh của sinh viên người Mông."
                            icon={Trophy}
                        />
                        <ScheduleItem
                            time="18:00 - 19:30"
                            title="Không gian Giao lưu Cộng đồng"
                            desc="Nơi các thế hệ người Mông gặp gỡ, kết nối, thắt chặt tình đoàn kết qua các trò chơi dân gian và ẩm thực."
                            icon={Users}
                        />
                        <ScheduleItem
                            time="19:30 - 22:00"
                            title="Show Ca nhạc & Kỷ niệm 10 năm"
                            desc="Chương trình nghệ thuật đặc biệt với không khí rộn ràng, ấm áp và giàu cảm xúc, quy tụ nhiều nghệ sĩ nổi tiếng."
                            icon={Sparkles}
                        />
                    </div>
                </div>
            </section>

            {/* Highlights Gallery */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle
                        title="Hình Ảnh Nổi Bật"
                        subtitle="Ghi lại những khoảnh khắc rực rỡ và đầy cảm xúc của ngày hội."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="aspect-square rounded-2xl overflow-hidden shadow-lg group relative"
                            >
                                <img
                                    src={`https://picsum.photos/seed/highlight-${i}/600/600`}
                                    alt={`Highlight ${i}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Camera className="text-white" size={32} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location & Map */}
            <section className="py-24 bg-logo-teal text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-8">Địa Điểm Tổ Chức</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-logo-orange rounded-2xl">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Không gian Văn hóa Sáng tạo Tây Hồ</h4>
                                        <p className="text-white/60">Ngõ 612 Lạc Long Quân, Nhật Tân, Tây Hồ, Hà Nội</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-2xl">
                                        <Info size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Chỉ dẫn</h4>
                                        <p className="text-white/60">Nằm sát Hồ Tây thơ mộng, đây là không gian mở lý tưởng cho các hoạt động văn hóa cộng đồng quy mô lớn.</p>
                                    </div>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Không+gian+Văn+hóa+Sáng+tạo+Tây+Hồ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-logo-teal px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all"
                                >
                                    <ExternalLink size={20} /> Mở Google Maps
                                </a>
                            </div>
                        </div>
                        <div className="aspect-video rounded-[2rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                            {/* Mock Map Image */}
                            <img
                                src="https://picsum.photos/seed/map-tayho/800/600"
                                alt="Map Location"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold mb-6">Tham Gia Cùng Chúng Tôi</h2>
                    <p className="text-logo-teal/70 text-lg mb-10 leading-relaxed">
                        Đừng bỏ lỡ cơ hội trải nghiệm không gian Tết truyền thống của người Mông ngay giữa lòng Hà Nội. Hãy cùng nhau tạo nên một hành trình 10 năm rực rỡ!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/" className="bg-logo-teal text-white px-10 py-5 rounded-full font-bold hover:bg-logo-teal/90 transition-all shadow-xl">
                            Về trang chủ
                        </Link>
                        <a
                            href="https://www.facebook.com/xyootshiabnramnroog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-logo-orange text-white px-10 py-5 rounded-full font-bold hover:bg-logo-orange/90 transition-all shadow-xl"
                        >
                            Đăng ký tham gia
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

const Sparkles = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
    </svg>
);