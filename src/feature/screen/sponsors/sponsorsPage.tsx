import { motion } from 'motion/react';
import {
    Star,
    Heart,
    ArrowLeft,
    Phone,
    MapPin,
    ExternalLink,
    Gift,
    GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TierBadge = ({ tier }: { tier: 'Diamond' | 'Gold' | 'Silver' | 'Companion' | 'Gift' }) => {
    const styles = {
        Diamond: 'bg-cyan-50 text-cyan-700 border-cyan-200',
        Gold: 'bg-yellow-50 text-yellow-700 border-yellow-200',
        Silver: 'bg-logo-teal/5 text-logo-teal/70 border-logo-teal/20',
        Companion: 'bg-logo-orange/10 text-logo-orange border-logo-orange/30',
        Gift: 'bg-pink-50 text-pink-700 border-pink-200'
    };

    const labels = {
        Diamond: 'NHÀ TÀI TRỢ KIM CƯƠNG',
        Gold: 'NHÀ TÀI TRỢ VÀNG',
        Silver: 'NHÀ TÀI TRỢ BẠC',
        Companion: 'NHÀ TÀI TRỢ ĐỒNG HÀNH',
        Gift: 'NHÀ TÀI TRỢ QUÀ TẶNG'
    };

    return (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-black tracking-widest mb-4 ${styles[tier]}`}>
            <Star size={14} fill="currentColor" />
            {labels[tier]}
        </div>
    );
};

const SponsorCard: React.FC<{ sponsor: any }> = ({ sponsor }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-logo-teal/5 hover:shadow-xl transition-all duration-500 mb-16"
    >
        <div className="grid lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto relative overflow-hidden bg-logo-teal/5">
                <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden"></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
                <TierBadge tier={sponsor.tier} />
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-logo-teal mb-6">{sponsor.name}</h3>
                <div className="space-y-4 text-logo-teal/70 leading-relaxed mb-8">
                    {sponsor.description.split('\n').map((p: string, i: number) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {sponsor.contact.phone && (
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-full bg-logo-teal/5 flex items-center justify-center text-logo-teal/70">
                                <Phone size={16} />
                            </div>
                            <span className="font-bold">{sponsor.contact.phone}</span>
                        </div>
                    )}
                    {sponsor.contact.address && (
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-full bg-logo-teal/5 flex items-center justify-center text-logo-teal/70">
                                <MapPin size={16} />
                            </div>
                            <span className="font-medium">{sponsor.contact.address}</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-3">
                    {sponsor.links.map((link: any, i: number) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-logo-teal text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-logo-orange transition-all"
                        >
                            {link.label} <ExternalLink size={14} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

export default function SponsorsPage() {
    const sponsors = [
        {
            tier: 'Diamond',
            name: 'THE BEST VIEW SAPA',
            image: 'https://picsum.photos/seed/bestview/1200/800',
            description: 'Giữa vùng đất sương mù, nơi hội tụ tinh hoa của đất trời Tây Bắc, The Best View Sapa mang đến cho du khách những trải nghiệm vô giá với tầm nhìn tuyệt đẹp hướng ra thung lũng Mường Hoa và dãy Hoàng Liên Sơn hùng vĩ.\nĐây là "ngôi nhà chung" của văn hóa vùng cao với Tổ hợp Trung tâm Văn hóa & Tổ chức sự kiện và Nhà hàng Chợ Sapa Xưa - nơi thực khách có thể thưởng thức trọn vẹn những món ăn mang hương vị núi rừng nguyên bản.',
            contact: {
                phone: '0969 061 521',
                address: 'Sapa, Lào Cai'
            },
            links: [
                { label: 'Fanpage Facebook', url: 'https://www.facebook.com/share/1C5UTd3JTm/' }
            ]
        },
        {
            tier: 'Silver',
            name: 'TƯỜNG VY BEAUTY',
            image: 'https://picsum.photos/seed/tuongvy/1200/800',
            description: 'Chủ thương hiệu Giàng Thị Sâu (Tường Vy) là một cô gái vùng cao mang theo ước mơ và khát vọng vươn lên. Tường Vy Beauty chuyên cung cấp các dịch vụ làm đẹp: Chăm sóc da, Nail - mi, Gội đầu thư giãn.\nĐặc biệt, Tường Vy Beauty dành ưu đãi giảm giá từ 5% - 30% không giới hạn thời gian cho các bạn dân tộc Mông như một món quà yêu thương gửi tới cộng đồng.',
            contact: {
                phone: '0347 356 296',
                address: '77/8/11/36 Lê Quang Đạo, Mỹ Đình'
            },
            links: [
                { label: 'Xem mẫu Nail & Mi', url: 'https://www.facebook.com/share/1EKEEtwmAh/' }
            ]
        },
        {
            tier: 'Companion',
            name: 'PHỞ SẠCH TỰ TRÁNG A TRÀ',
            image: 'https://picsum.photos/seed/atra/1200/800',
            description: 'Anh Ly Chẩn Trà - người con của đồng bào Mông tại Quản Bạ, Hà Giang - đã xây dựng thương hiệu Phở Sạch Tự Tráng A Trà từ năm 2018. Thương hiệu tự hào giữ nguyên bản chất truyền thống với sợi phở tươi tự tráng và nước dùng tinh tế kết hợp nguyên liệu đặc sản như Gà đen, Gà bản.\nA Trà mong muốn hợp tác nhượng quyền với các cá nhân, đặc biệt là cộng đồng người Mông đang muốn khởi nghiệp.',
            contact: {
                phone: '0969 061 521',
                address: '289 Phố Kim Mã, Ba Đình, Hà Nội'
            },
            links: [
                { label: 'Liên hệ hợp tác', url: '#' }
            ]
        },
        {
            tier: 'Companion',
            name: 'TUYẾT NHUNG LAND',
            image: 'https://picsum.photos/seed/tuyetnhung/1200/800',
            description: 'Chị Lý Tuyết Nhung - chuyên viên bất động sản tại Đà Nẵng, người con dân tộc Mông quê Lào Cai. Tuyết Nhung Land cam kết mang đến các sản phẩm và dịch vụ bất động sản chất lượng, đa dạng tại thành phố biển Đà Nẵng.\nSự đồng hành của chị không chỉ là nguồn hỗ trợ thiết thực mà còn là sự tiếp sức tinh thần quý báu, góp phần lan tỏa bản sắc văn hóa Mông đến gần hơn với cộng đồng.',
            contact: {
                phone: '0981 355 086',
                address: 'Đà Nẵng'
            },
            links: [
                { label: 'Trang cá nhân', url: 'https://www.facebook.com/share/1C5wD8Wsfw/' },
                { label: 'Nhóm BĐS Đà Nẵng', url: 'https://www.facebook.com/share/g/1DJAF7LAKg/' }
            ]
        },
        {
            tier: 'Companion',
            name: 'HMONG GROUP',
            image: 'https://picsum.photos/seed/hmonggroup/1200/800',
            description: 'Công ty Cung ứng Việc làm Hmong Group (Chủ doanh nghiệp Thào A Minh) hoạt động trong lĩnh vực kết nối việc làm, hỗ trợ người lao động, đặc biệt là bà con dân tộc Mông, tiếp cận cơ hội công việc ổn định và bền vững.',
            contact: {
                phone: '0347 356 296',
                address: 'Do Nha – Phương Liễu – Bắc Ninh'
            },
            links: [
                { label: 'Tìm việc làm', url: '#' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#fdfcf9] text-logo-teal font-sans selection:bg-logo-orange/20 pb-20">
            {/* Header */}
            <header className="bg-logo-teal text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://picsum.photos/seed/sponsors-bg/1920/1080?blur=10"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-logo-orange hover:text-logo-orange/80 transition-colors mb-8 font-bold">
                        <ArrowLeft size={20} /> Quay lại trang chủ
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Nhà Tài Trợ <br /> <span className="text-logo-orange italic">& Đối Tác</span>
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed italic">
                        "Sự đồng hành của quý vị là nguồn động lực to lớn để chúng tôi tiếp tục hành trình 10 năm giữ lửa văn hóa."
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                {/* Diamond Tier */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-logo-teal/10 flex-1"></div>
                        <h2 className="text-2xl font-serif font-bold text-logo-teal/30 tracking-[0.3em] uppercase">Hạng Kim Cương</h2>
                        <div className="h-px bg-logo-teal/10 flex-1"></div>
                    </div>
                    {sponsors.filter(s => s.tier === 'Diamond').map((s, i) => (
                        <SponsorCard key={i} sponsor={s} />
                    ))}
                </div>

                {/* Silver Tier */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-logo-teal/10 flex-1"></div>
                        <h2 className="text-2xl font-serif font-bold text-logo-teal/30 tracking-[0.3em] uppercase">Hạng Bạc</h2>
                        <div className="h-px bg-logo-teal/10 flex-1"></div>
                    </div>
                    {sponsors.filter(s => s.tier === 'Silver').map((s, i) => (
                        <SponsorCard key={i} sponsor={s} />
                    ))}
                </div>

                {/* Companion Tier */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-logo-teal/10 flex-1"></div>
                        <h2 className="text-2xl font-serif font-bold text-logo-teal/30 tracking-[0.3em] uppercase">Đồng Hành</h2>
                        <div className="h-px bg-logo-teal/10 flex-1"></div>
                    </div>
                    <div className="grid gap-8">
                        {sponsors.filter(s => s.tier === 'Companion').map((s, i) => (
                            <SponsorCard key={i} sponsor={s} />
                        ))}
                    </div>
                </div>

                {/* Gift Sponsors */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-logo-teal/10 flex-1"></div>
                        <h2 className="text-2xl font-serif font-bold text-logo-teal/30 tracking-[0.3em] uppercase">Tri Ân Quà Tặng</h2>
                        <div className="h-px bg-logo-teal/10 flex-1"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { name: 'Chị Vàng Thị Dế', desc: 'Ủng hộ những phần quà ý nghĩa dành tặng anh chị cựu BTC - những người đã đặt những viên gạch đầu tiên cho chương trình.' },
                            { name: 'Chị Sùng Thị Hạnh', desc: 'Với tấm lòng rộng mở, chị đã ủng hộ quà tặng tri ân dành cho anh chị cựu BTC Tết Mông Xuống Phố.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-logo-teal/5 shadow-sm flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                                    <Gift size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                                    <p className="text-logo-teal/50 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scholarship Call */}
                <div className="bg-logo-orange rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <img src="https://picsum.photos/seed/pattern/800/800" alt="pattern" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                            <GraduationCap size={32} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Quỹ Học Bổng "GIỮ LỬA"</h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Nhằm tiếp thêm sức mạnh cho các bạn sinh viên Mông có hoàn cảnh khó khăn nhưng luôn nỗ lực vươn lên trong học tập.
                            Chúng tôi kêu gọi sự chung tay từ quý nhà hảo tâm cho 06 suất học bổng (500.000 VNĐ/suất).
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/#finance" className="bg-white text-logo-orange px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all shadow-xl">
                                Đóng góp cho quỹ
                            </Link>
                            <a href="tel:0347356296" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                                Liên hệ tài trợ
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="w-20 h-20 bg-logo-orange/10 text-logo-orange rounded-full flex items-center justify-center mx-auto mb-8">
                        <Heart size={40} fill="currentColor" />
                    </div>
                    <h2 className="text-4xl font-serif font-bold mb-6">Trở Thành Nhà Tài Trợ</h2>
                    <p className="text-logo-teal/70 text-lg mb-10 leading-relaxed">
                        Mọi sự hỗ trợ, dù lớn hay nhỏ, đều góp phần tạo nên một mùa Tết Mông Xuống Phố trọn vẹn và ý nghĩa. Hãy cùng chúng tôi viết tiếp hành trình 10 năm rực rỡ.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="tel:0347356296" className="bg-logo-teal text-white px-10 py-5 rounded-full font-bold hover:bg-logo-teal/90 transition-all shadow-xl">
                            Gọi ngay: 0347.356.296
                        </a>
                        <Link to="/#finance" className="border-2 border-logo-teal/10 text-logo-teal px-10 py-5 rounded-full font-bold hover:bg-logo-teal/5 transition-all">
                            Thông tin chuyển khoản
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}