import { motion } from 'motion/react';
import {
    History,
    Music,
    ArrowLeft,
    Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-logo-teal mb-6">{title}</h2>
        {subtitle && <p className="text-stone-600 max-w-3xl mx-auto italic text-lg leading-relaxed">{subtitle}</p>}
        <div className="w-32 h-1.5 bg-logo-orange mx-auto mt-8 rounded-full"></div>
    </div>
);

export default function CulturePage() {
    return (
        <div className="min-h-screen bg-[#fdfcf9] text-stone-800 font-sans selection:bg-logo-orange/10 pb-20">
            {/* Header */}
            <header className="bg-logo-teal text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://picsum.photos/seed/hmong-header/1920/1080?blur=5"
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
                        className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight"
                    >
                        Bản Sắc <br /> <span className="text-logo-orange italic">Văn Hóa Mông</span>
                    </motion.h1>
                    <p className="text-xl text-stone-300 max-w-2xl leading-relaxed italic">
                        "Mười năm không chỉ là hành trình gìn giữ một sự kiện văn hóa, mà còn là hành trình của tình yêu và khát vọng lan tỏa những giá trị đặc sắc."
                    </p>
                </div>
            </header>

            {/* History Section */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-logo-orange/10 text-logo-orange text-sm font-bold mb-6">
                            <History size={16} />
                            <span>HÀNH TRÌNH NGÀN NĂM</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold mb-8 text-logo-teal">Lịch Sử Phát Triển Của Dân Tộc Mông</h2>
                        <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                            <p>
                                Dân tộc Mông (hay còn gọi là Hmong) là một trong những dân tộc có lịch sử di cư và đấu tranh sinh tồn kiên cường nhất. Khởi nguồn từ vùng lưu vực sông Hoàng Hà và sông Dương Tử (Trung Quốc), người Mông đã trải qua những cuộc di cư vĩ đại xuống phương Nam từ hàng ngàn năm trước.
                            </p>
                            <p>
                                Tại Việt Nam, người Mông bắt đầu di cư vào vùng núi phía Bắc từ khoảng cuối thế kỷ 18, đầu thế kỷ 19. Họ chọn những vùng núi cao hiểm trở (thường từ 800m đến 1500m so với mực nước biển) để sinh sống, nơi mà họ có thể tự do canh tác và giữ gìn bản sắc riêng biệt của mình.
                            </p>
                            <p>
                                Với tinh thần "Sống trên đá, chết nằm trong đá", người Mông đã biến những vùng núi đá khô cằn thành những nương ngô xanh tốt, những ruộng bậc thang kỳ vĩ - những kiệt tác của sức lao động và sự sáng tạo.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://picsum.photos/seed/hmong-hist-1/600/800" alt="History 1" className="rounded-3xl shadow-xl mt-12" referrerPolicy="no-referrer" />
                        <img src="https://picsum.photos/seed/hmong-hist-2/600/800" alt="History 2" className="rounded-3xl shadow-xl" referrerPolicy="no-referrer" />
                    </div>
                </div>
            </section>

            {/* Costume Section */}
            <section className="py-24 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle
                        title="Trang Phục & Nghệ Thuật Thêu Thừa"
                        subtitle="Mỗi đường kim mũi chỉ trên tà áo người phụ nữ Mông là một câu chuyện về gia đình, quê hương và vũ trụ quan sâu sắc."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: 'Mông Hoa',
                                desc: 'Nổi bật với những họa tiết thêu sặc sỡ, váy xếp nếp rộng và kỹ thuật vẽ sáp ong tinh xảo.',
                                img: 'https://picsum.photos/seed/m-hoa/600/800'
                            },
                            {
                                name: 'Mông Trắng',
                                desc: 'Trang phục chủ đạo là màu trắng tinh khôi, tượng trưng cho sự thuần khiết và lòng hiếu khách.',
                                img: 'https://picsum.photos/seed/m-trang/600/800'
                            },
                            {
                                name: 'Mông Đen',
                                desc: 'Sử dụng kỹ thuật nhuộm chàm sâu, tạo nên vẻ đẹp huyền bí, bền bỉ và mạnh mẽ.',
                                img: 'https://picsum.photos/seed/m-den/600/800'
                            },
                            {
                                name: 'Mông Xanh',
                                desc: 'Đặc trưng bởi những mảng màu xanh chàm phối hợp hài hòa với các họa tiết hình học.',
                                img: 'https://picsum.photos/seed/m-xanh/600/800'
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <div className="p-8">
                                    <h4 className="text-2xl font-serif font-bold mb-3">{item.name}</h4>
                                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Musical Instruments */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img src="https://picsum.photos/seed/ken/400/400" alt="Khèn" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                                <img src="https://picsum.photos/seed/dan-moi/400/300" alt="Đàn môi" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                            </div>
                            <div className="pt-12">
                                <img src="https://picsum.photos/seed/sao/400/600" alt="Sáo" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
                            <Music size={16} />
                            <span>ÂM NHẠC NÚI RỪNG</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold mb-8 text-logo-teal">Nhạc Cụ & Đạo Cụ Truyền Thống</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-logo-orange/10 text-logo-orange rounded-full flex items-center justify-center shrink-0 font-bold">01</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Khèn Mông</h4>
                                    <p className="text-stone-600">Linh hồn của người Mông. Tiếng khèn không chỉ là âm nhạc mà còn là lời tâm tình, là phương tiện giao tiếp với thế giới tâm linh.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-logo-orange/10 text-logo-orange rounded-full flex items-center justify-center shrink-0 font-bold">02</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Đàn Môi & Sáo</h4>
                                    <p className="text-stone-600">Những nhạc cụ nhỏ bé nhưng chứa đựng tình cảm nồng cháy của đôi lứa trong những đêm hội trăng rằm.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-logo-orange/10 text-logo-orange rounded-full flex items-center justify-center shrink-0 font-bold">03</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Đạo cụ biểu diễn</h4>
                                    <p className="text-stone-600">Những chiếc ô sặc sỡ, những chiếc gùi mây... không chỉ là vật dụng hàng ngày mà còn là đạo cụ tạo nên vẻ đẹp duyên dáng trong các điệu múa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-24 bg-logo-teal text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle
                        title="Thư Viện Phim Tư Liệu"
                        subtitle="Cùng nhìn lại những thước phim quý giá về hành trình 10 năm và vẻ đẹp hùng vĩ của vùng cao."
                    />

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Hành trình 10 năm Tết Mông', id: 'dQw4w9WgXcQ' }, // Placeholder IDs
                            { title: 'Vẻ đẹp văn hóa dân tộc Mông', id: 'dQw4w9WgXcQ' }
                        ].map((video, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="aspect-video bg-white/5 rounded-3xl overflow-hidden relative mb-6 border border-white/10">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-logo-orange rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                            {/* <Youtube size={40} fill="white" /> */}
                                            Youtube
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-center group-hover:text-logo-orange transition-colors">{video.title}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="https://www.youtube.com/@TetMongXuongPho"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-logo-teal px-10 py-5 rounded-full font-bold hover:bg-logo-orange hover:text-white transition-all shadow-2xl"
                        >
                            {/* <Youtube /> */}
                            Xem thêm trên YouTube
                        </a>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="w-20 h-20 bg-logo-orange/10 text-logo-orange rounded-full flex items-center justify-center mx-auto mb-8">
                        <Sparkles size={40} />
                    </div>
                    <h2 className="text-4xl font-serif font-bold mb-6 text-logo-teal">Hãy Cùng Chúng Tôi Giữ Lửa</h2>
                    <p className="text-stone-600 text-lg mb-10 leading-relaxed">
                        Văn hóa là linh hồn của dân tộc. Sự đồng hành của bạn là nguồn động lực to lớn để chúng tôi tiếp tục hành trình lan tỏa những giá trị tốt đẹp này.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/" className="bg-logo-teal text-white px-10 py-5 rounded-full font-bold hover:bg-logo-orange transition-all shadow-xl">
                            Về trang chủ
                        </Link>
                        <Link to="/#finance" className="border-2 border-stone-200 text-stone-800 px-10 py-5 rounded-full font-bold hover:bg-stone-50 transition-all">
                            Quyên góp ngay
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}