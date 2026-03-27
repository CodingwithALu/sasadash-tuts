import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Apple, ArrowRight, Award, Calendar, ChevronDown, ChevronRight, CreditCard, DollarSign, History, Info, Mail, MapPin, Phone, Play, Shirt, TrendingUp, Users, X, Languages } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

// --- Types ---
interface Donation {
    id: string;
    name: string;
    amount: number;
    date: string;
    type: 'individual' | 'organization';
}

interface TeamMember {
    name: string;
    role: string;
    phone: string;
    email: string;
    bio: string;
    image: string;
}

// --- Mock Data ---
const DONATIONS: Donation[] = [
    { id: '1', name: 'Nguyễn Văn A', amount: 5000000, date: '2026-01-15', type: 'individual' },
    { id: '2', name: 'Công ty TNHH Văn Hóa Việt', amount: 20000000, date: '2026-01-20', type: 'organization' },
    { id: '3', name: 'Trần Thị B', amount: 1000000, date: '2026-02-05', type: 'individual' },
    { id: '4', name: 'Quỹ Phát triển Dân tộc', amount: 50000000, date: '2026-02-10', type: 'organization' },
    { id: '5', name: 'Vàng A Tủa', amount: 2000000, date: '2026-02-15', type: 'individual' },
];

const TEAM: TeamMember[] = [
    {
        name: 'Vàng Thị Súa',
        role: 'Trưởng Ban Tổ Chức',
        phone: '0347356296',
        email: 'tetmongxuongpho@gmail.com',
        bio: 'Người giữ lửa cho Tết Mông Xuống Phố suốt 10 năm qua. Tâm huyết với việc bảo tồn văn hóa dân tộc Mông.',
        image: 'https://picsum.photos/seed/sua/400/400'
    },
    {
        name: 'Giàng A Phò',
        role: 'Phó Ban - Phụ trách Tài chính',
        phone: '0987654321',
        email: 'giangapho@gmail.com',
        bio: 'Chuyên gia quản lý ngân sách và điều phối các nguồn lực tài trợ cho sự kiện.',
        image: 'https://picsum.photos/seed/pho/400/400'
    },
    {
        name: 'Lầu Thị Mai',
        role: 'Trưởng Ban Truyền Thông',
        phone: '0123456789',
        email: 'lauthimai@gmail.com',
        bio: 'Kết nối cộng đồng và lan tỏa hình ảnh Tết Mông đến với bạn bè quốc tế.',
        image: 'https://picsum.photos/seed/mai/400/400'
    }
];

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="mb-16 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-logo-teal mb-6">{title}</h2>
            {subtitle && <p className="text-stone-600 max-w-2xl mx-auto italic text-lg leading-relaxed">{subtitle}</p>}
            <div className="w-24 h-1.5 bg-logo-orange mx-auto mt-8 rounded-full shadow-sm shadow-logo-orange/20"></div>
        </motion.div>
    </div>
);

export default function HomePage() {
    const [donations, setDonations] = useState<Donation[]>(DONATIONS);
    const [showDonationForm, setShowDonationForm] = useState(false);
    const [newDonation, setNewDonation] = useState<{ name: string, amount: string, type: 'individual' | 'organization' }>({ name: '', amount: '', type: 'individual' });

    const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);

    const handleAddDonation = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newDonation.name || !newDonation.amount) return;

        const donation: Donation = {
            id: Math.random().toString(36).substr(2, 9),
            name: newDonation.name,
            amount: Number(newDonation.amount),
            date: new Date().toISOString().split('T')[0],
            type: newDonation.type
        };

        setDonations([donation, ...donations]);
        setNewDonation({ name: '', amount: '', type: 'individual' });
        setShowDonationForm(false);
    };

    return (
        <>
            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 blur-[120px] rounded-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-logo-orange/10 text-logo-orange border-logo-orange/20 hover:bg-logo-orange/20 transition-colors gap-2">
                                <Award size={14} className="text-logo-orange" />
                                <span className="font-black tracking-widest uppercase text-[10px]">10 NĂM GIỮ LỬA VĂN HÓA MÔNG</span>
                            </Badge>

                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-logo-teal leading-[0.9] mb-8 tracking-tighter">
                                Tết Mông <br />
                                <span className="text-logo-orange italic">Xuống Phố</span>
                            </h1>

                            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-xl font-medium">
                                Mười năm không chỉ là hành trình gìn giữ một sự kiện văn hóa, mà còn là hành trình của tình yêu, của sự gắn bó và khát vọng lan tỏa những giá trị đặc sắc của văn hóa người Mông.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-logo-teal hover:bg-logo-orange transition-all shadow-2xl shadow-logo-teal/20 group">
                                    <a href="#event">
                                        Xem lịch trình <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg font-bold border-stone-200 text-stone-800 hover:bg-stone-50 transition-all">
                                    <Link to="/culture">Tìm hiểu văn hóa</Link>
                                </Button>
                            </div>

                            <div className="mt-16 flex items-center gap-8">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <Avatar key={i} className="border-4 border-white w-12 h-12">
                                            <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                                            <AvatarFallback>U{i}</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-stone-900">10,000+ Người tham gia</p>
                                    <p className="text-xs text-stone-500 font-medium tracking-wide uppercase">Dự kiến trong năm 2026</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white bg-stone-100">
                                <img
                                    src="https://picsum.photos/seed/hmong-costume-main/800/1000"
                                    alt="Hmong Costume Main"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-xs"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar className="w-12 h-12 border-2 border-logo-orange/20">
                                        <AvatarImage src="https://picsum.photos/seed/sua/100/100" />
                                        <AvatarFallback>VS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-logo-teal font-black text-sm uppercase tracking-widest">Vàng Thị Súa</p>
                                        <p className="text-logo-orange text-[10px] font-bold uppercase tracking-widest">Trưởng Ban Tổ Chức</p>
                                    </div>
                                </div>
                                <p className="text-stone-600 text-sm italic leading-relaxed font-medium">
                                    "Ngọn lửa ấy được thắp lên từ tâm huyết, được nuôi dưỡng bằng niềm tin của cả cộng đồng."
                                </p>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute top-1/2 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Culture Section Preview */}
            <section id="culture" className="py-24 bg-stone-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle
                        title="Bản Sắc Văn Hóa Dân Tộc Mông"
                        subtitle="Khám phá lịch sử hào hùng, trang phục rực rỡ và âm nhạc núi rừng say đắm lòng người."
                    />

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="flex flex-col p-0 overflow-hidden rounded-[2rem] border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
                                <div className="h-56 overflow-hidden relative">
                                    <img src="https://picsum.photos/seed/hmong-history/600/400" alt="History" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <CardHeader className="text-center pt-8">
                                    <div className="w-14 h-14 bg-logo-orange/10 text-logo-orange rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                                        <History size={28} />
                                    </div>
                                    <CardTitle className="text-2xl font-serif font-bold">Lịch sử phát triển</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pb-8">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        Hành trình di cư và đấu tranh sinh tồn kiên cường của dân tộc Mông qua hàng ngàn năm lịch sử hào hùng.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="flex flex-col p-0 overflow-hidden rounded-[2rem] border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
                                <div className="h-56 overflow-hidden relative">
                                    <img src="https://picsum.photos/seed/hmong-dress/600/400" alt="Dress" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <CardHeader className="text-center pt-8">
                                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                                        <Shirt size={28} />
                                    </div>
                                    <CardTitle className="text-2xl font-serif font-bold">Trang phục & Nhạc cụ</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pb-8">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        Nghệ thuật thêu thùa tinh xảo và tiếng khèn Mông gọi bạn tình vang vọng núi rừng Tây Bắc.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="flex flex-col p-0 overflow-hidden rounded-[2rem] border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
                                <div className="h-56 overflow-hidden relative">
                                    <img src="https://picsum.photos/seed/hmong-lang/600/400" alt="Language" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <CardHeader className="text-center pt-8">
                                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                                        <Languages size={28} />
                                    </div>
                                    <CardTitle className="text-2xl font-serif font-bold">Tiếng nói & Bản sắc</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pb-8">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        Ngôn ngữ giàu nhạc điệu và những phong tục tập quán độc đáo được gìn giữ vẹn nguyên qua bao thế hệ.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    <div className="text-center">
                        <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-6 font-bold border-stone-200 hover:bg-stone-100 transition-all group">
                            <Link to="/culture">
                                Khám phá chi tiết văn hóa <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Event Details */}
            <section id="event" className="py-24">
                <div className="max-w-7xl auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="bg-logo-teal rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative border-none shadow-2xl">
                            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                                <img src="https://picsum.photos/seed/pattern/800/800" alt="pattern" className="w-full h-full object-cover" />
                            </div>

                            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Badge variant="secondary" className="bg-logo-orange/20 text-logo-orange border-logo-orange/30 mb-6 px-4 py-1 text-sm rounded-full">
                                            Sự kiện thường niên
                                        </Badge>
                                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                                            “Tết Mông Xuống Phố 2026” <br />
                                            <span className="text-logo-orange italic font-light">Dấu ấn 10 năm giữ lửa</span>
                                        </h2>

                                        <div className="space-y-8">
                                            <div className="flex items-start gap-6 group">
                                                <div className="mt-1 p-3 bg-white/5 rounded-2xl group-hover:bg-logo-orange/20 transition-colors duration-300 border border-white/10">
                                                    <Calendar className="text-logo-orange w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-1">Thời gian</p>
                                                    <p className="text-2xl font-medium">31/01/2026</p>
                                                    <p className="text-stone-500">07:00 - 22:00 (Cả ngày)</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-6 group">
                                                <div className="mt-1 p-3 bg-white/5 rounded-2xl group-hover:bg-logo-orange/20 transition-colors duration-300 border border-white/10">
                                                    <MapPin className="text-logo-orange w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-1">Địa điểm</p>
                                                    <p className="text-2xl font-medium">Tây Hồ, Hà Nội</p>
                                                    <p className="text-stone-500">Không gian Văn hóa Sáng tạo Tây Hồ</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-12 flex flex-wrap gap-6">
                                            <Button asChild size="lg" className="bg-white text-logo-teal hover:bg-stone-100 rounded-full px-8 py-7 text-lg font-bold shadow-xl shadow-white/5 group">
                                                <Link to="/event">
                                                    Chi tiết chương trình <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-7 text-lg font-bold group">
                                                <a href="https://www.facebook.com/xyootshiabnramnroog" target="_blank" rel="noopener noreferrer">
                                                    {/* <Facebook className="mr-2 w-5 h-5" /> */}
                                                    Fanpage Sự kiện
                                                </a>
                                            </Button>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="relative">
                                    <motion.div
                                        className="grid grid-cols-2 gap-6"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                            <img src="https://picsum.photos/seed/event1/600/800" alt="Event" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 mt-12">
                                            <img src="https://picsum.photos/seed/event2/600/800" alt="Event" className="w-full h-full object-cover" />
                                        </div>
                                    </motion.div>

                                    {/* Floating badge */}
                                    <motion.div
                                        className="absolute -bottom-6 -left-6 bg-logo-orange text-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <p className="text-4xl font-bold">10+</p>
                                        <p className="text-xs uppercase tracking-widest font-bold opacity-80">Năm hành trình</p>
                                    </motion.div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Financial Management & Donation */}
            <section id="finance" className="py-24 bg-stone-50/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <Badge variant="outline" className="mb-4 border-logo-orange/20 text-logo-orange bg-logo-orange/10 px-4 py-1 rounded-full">
                                Minh bạch & Công khai
                            </Badge>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                                Quản lý <span className="text-logo-orange italic font-light">Tài Chính</span> <br />
                                & Gây quỹ cộng đồng
                            </h2>
                            <p className="text-stone-500 text-lg leading-relaxed">
                                Chúng tôi cam kết công khai mọi khoản thu chi. Quỹ được quản lý bởi Ban Tài Chính với cơ chế giám sát chặt chẽ từ cộng đồng.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Button asChild variant="ghost" className="group text-logo-teal font-bold hover:text-logo-orange hover:bg-logo-orange/10 rounded-full px-6 py-6 transition-all">
                                <Link to="/finance">
                                    Xem báo cáo chi tiết <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Left Column: Stats & Bank Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-logo-orange text-white border-none rounded-[2.5rem] p-8 shadow-2xl shadow-logo-orange/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                                                <TrendingUp size={28} />
                                            </div>
                                            <Badge className="bg-white/20 text-white border-none px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                                Real-time
                                            </Badge>
                                        </div>
                                        <p className="text-orange-100 text-sm font-medium uppercase tracking-wider mb-2">Tổng quỹ quyên góp</p>
                                        <h4 className="text-4xl font-bold tracking-tight mb-8">{totalDonations.toLocaleString('vi-VN')} <span className="text-xl font-normal opacity-80">VNĐ</span></h4>
                                        <Button
                                            onClick={() => setShowDonationForm(true)}
                                            className="w-full bg-white text-logo-orange hover:bg-logo-orange/10 rounded-2xl py-7 text-lg font-bold shadow-lg transition-all active:scale-95"
                                        >
                                            Quyên góp ngay
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Card className="border-stone-100 rounded-[2.5rem] p-8 shadow-sm bg-white">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-stone-50 text-stone-600 rounded-2xl border border-stone-100">
                                            <DollarSign size={24} />
                                        </div>
                                        <h4 className="text-xl font-bold font-serif">Thông tin chuyển khoản</h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-stone-50/50 p-5 rounded-2xl border border-stone-100 group hover:border-orange-200 transition-colors">
                                            <p className="text-[10px] text-stone-400 uppercase font-bold mb-1 tracking-widest">Ngân hàng</p>
                                            <p className="font-bold text-stone-800">MB BANK (Ngân hàng Quân Đội)</p>
                                        </div>
                                        <div className="bg-stone-50/50 p-5 rounded-2xl border border-stone-100 group hover:border-orange-200 transition-colors">
                                            <p className="text-[10px] text-stone-400 uppercase font-bold mb-1 tracking-widest">Số tài khoản</p>
                                            <p className="font-bold text-stone-800 text-xl tracking-widest">0347356296</p>
                                        </div>
                                        <div className="bg-stone-50/50 p-5 rounded-2xl border border-stone-100 group hover:border-orange-200 transition-colors">
                                            <p className="text-[10px] text-stone-400 uppercase font-bold mb-1 tracking-widest">Chủ tài khoản</p>
                                            <p className="font-bold text-stone-800">VANG THI SUA</p>
                                        </div>
                                        <div className="pt-6 text-center">
                                            <div className="bg-white p-3 inline-block rounded-3xl border-2 border-stone-50 mb-4 shadow-sm group hover:shadow-md transition-shadow">
                                                <img
                                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=STK:0347356296|BANK:MBBANK|NAME:VANG%20THI%20SUA`}
                                                    alt="QR Code Chuyển khoản"
                                                    className="w-36 h-36"
                                                />
                                            </div>
                                            <p className="text-[11px] text-stone-400 italic font-medium">Quét mã để chuyển khoản nhanh</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Right Column: Donation List or Form */}
                        <div className="lg:col-span-2">
                            <AnimatePresence mode="wait">
                                {showDonationForm ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Card className="border-orange-200 rounded-[2.5rem] p-8 md:p-12 shadow-2xl bg-white relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-50"></div>

                                            <div className="flex justify-between items-center mb-10 relative z-10">
                                                <div>
                                                    <h4 className="text-3xl font-serif font-bold mb-2">Xác nhận quyên góp</h4>
                                                    <p className="text-stone-500 text-sm">Cảm ơn tấm lòng hảo tâm của bạn dành cho cộng đồng.</p>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => setShowDonationForm(false)}
                                                    className="rounded-full hover:bg-stone-100"
                                                >
                                                    <X size={24} />
                                                </Button>
                                            </div>

                                            <form onSubmit={handleAddDonation} className="space-y-8 relative z-10">
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <Label htmlFor="donor-name" className="text-sm font-bold text-stone-700 ml-1">Tên cá nhân / Tổ chức</Label>
                                                        <Input
                                                            id="donor-name"
                                                            type="text"
                                                            required
                                                            value={newDonation.name}
                                                            onChange={(e) => setNewDonation({ ...newDonation, name: e.target.value })}
                                                            className="h-14 rounded-2xl border-stone-200 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg px-6"
                                                            placeholder="Nhập tên của bạn"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label htmlFor="donor-amount" className="text-sm font-bold text-stone-700 ml-1">Số tiền quyên góp (VNĐ)</Label>
                                                        <Input
                                                            id="donor-amount"
                                                            type="number"
                                                            required
                                                            value={newDonation.amount}
                                                            onChange={(e) => setNewDonation({ ...newDonation, amount: e.target.value })}
                                                            className="h-14 rounded-2xl border-stone-200 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg px-6"
                                                            placeholder="Ví dụ: 500000"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <Label className="text-sm font-bold text-stone-700 ml-1">Loại hình quyên góp</Label>
                                                    <div className="flex gap-4">
                                                        <Button
                                                            type="button"
                                                            variant={newDonation.type === 'individual' ? 'default' : 'outline'}
                                                            onClick={() => setNewDonation({ ...newDonation, type: 'individual' })}
                                                            className={`flex-1 h-14 rounded-2xl font-bold text-base transition-all ${newDonation.type === 'individual' ? 'bg-orange-600 hover:bg-orange-700' : 'border-stone-100 text-stone-400 hover:bg-stone-50'
                                                                }`}
                                                        >
                                                            Cá nhân
                                                        </Button>
                                                        <Button
                                                            type="button"
                                                            variant={newDonation.type === 'organization' ? 'default' : 'outline'}
                                                            onClick={() => setNewDonation({ ...newDonation, type: 'organization' })}
                                                            className={`flex-1 h-14 rounded-2xl font-bold text-base transition-all ${newDonation.type === 'organization' ? 'bg-orange-600 hover:bg-orange-700' : 'border-stone-100 text-stone-400 hover:bg-stone-50'
                                                                }`}
                                                        >
                                                            Tổ chức
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="bg-orange-50/80 p-6 rounded-2xl text-sm text-orange-800 border border-orange-100 backdrop-blur-sm">
                                                    <div className="flex gap-3">
                                                        <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="font-bold mb-1">Lưu ý quan trọng:</p>
                                                            <p className="leading-relaxed opacity-90">Vui lòng thực hiện chuyển khoản trước khi nhấn "Xác nhận". Thông tin của bạn sẽ được hiển thị công khai trên danh sách tri ân sau khi hệ thống ghi nhận và đối soát thành công.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-6 pt-4">
                                                    <Button
                                                        type="submit"
                                                        className="h-16 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-100 active:scale-[0.98]"
                                                    >
                                                        Xác nhận chuyển khoản
                                                    </Button>
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        className="h-16 border-blue-100 text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3 group"
                                                    >
                                                        <a href="https://zalopay.vn" target="_blank" rel="noopener noreferrer">
                                                            <CreditCard size={22} className="group-hover:scale-110 transition-transform" /> Thanh toán ZaloPay
                                                        </a>
                                                    </Button>
                                                </div>
                                            </form>
                                        </Card>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="list"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Card className="border-stone-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm bg-white h-full">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                                                <div>
                                                    <h4 className="text-3xl font-serif font-bold mb-2">Danh sách tri ân</h4>
                                                    <p className="text-stone-500 text-sm">Những tấm lòng vàng đồng hành cùng chương trình.</p>
                                                </div>
                                                <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-100">
                                                    <Users size={18} className="text-orange-600" />
                                                    <span className="text-sm font-bold text-stone-700">{donations.length} Nhà hảo tâm</span>
                                                </div>
                                            </div>

                                            <ScrollArea className="h-[450px] pr-4">
                                                <div className="space-y-4">
                                                    {donations.map((donation, index) => (
                                                        <motion.div
                                                            key={donation.id}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.05 }}
                                                            className="group"
                                                        >
                                                            <div className="flex items-center justify-between p-5 rounded-2xl bg-stone-50/50 border border-stone-100 group-hover:bg-white group-hover:border-orange-200 group-hover:shadow-md transition-all duration-300">
                                                                <div className="flex items-center gap-4">
                                                                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${donation.name}`} />
                                                                        <AvatarFallback>{donation.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                                                    </Avatar>
                                                                    <div>
                                                                        <p className="font-bold text-stone-800 group-hover:text-orange-600 transition-colors">{donation.name}</p>
                                                                        <div className="flex items-center gap-2 mt-1">
                                                                            <Badge variant="outline" className="text-[10px] uppercase px-2 py-0 border-stone-200 text-stone-500">
                                                                                {donation.type === 'organization' ? 'Tổ chức' : 'Cá nhân'}
                                                                            </Badge>
                                                                            <span className="text-[10px] text-stone-400">{donation.date}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-right">
                                                                    <p className="text-lg font-bold text-stone-900">+{donation.amount.toLocaleString('vi-VN')} <span className="text-xs font-normal text-stone-400">VNĐ</span></p>
                                                                    <Badge className="bg-green-50 text-green-600 border-green-100 text-[10px] mt-1">Đã xác nhận</Badge>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </ScrollArea>

                                            <div className="mt-10 pt-8 border-t border-stone-100 flex justify-center">
                                                <Button variant="link" className="text-stone-400 hover:text-orange-600 font-bold group">
                                                    Tải thêm danh sách <ChevronDown className="ml-1 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                                </Button>
                                            </div>
                                        </Card>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsors Section */}
            <section id="sponsors" className="py-24 bg-stone-50/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600 bg-orange-50 px-4 py-1 rounded-full">
                                Đồng hành & Phát triển
                            </Badge>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                                Nhà Tài Trợ <br />
                                <span className="text-orange-500 italic font-light">& Đối Tác Chiến Lược</span>
                            </h2>
                            <p className="text-stone-500 max-w-xl text-lg">
                                Chúng tôi vô cùng trân trọng sự đồng hành của quý đơn vị trong hành trình 10 năm gìn giữ và lan tỏa bản sắc văn hóa Mông.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Button asChild variant="ghost" className="group text-stone-900 font-bold hover:text-orange-600 hover:bg-orange-50 rounded-full px-6 py-6 transition-all">
                                <Link to="/sponsors">
                                    Xem tất cả nhà tài trợ <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'The Best View Sapa', tier: 'Diamond', img: 'https://picsum.photos/seed/bestview/400/200' },
                            { name: 'Tường Vy Beauty', tier: 'Silver', img: 'https://picsum.photos/seed/tuongvy/400/200' },
                            { name: 'Phở Sạch A Trà', tier: 'Companion', img: 'https://picsum.photos/seed/atra/400/200' },
                            { name: 'Tuyết Nhung Land', tier: 'Companion', img: 'https://picsum.photos/seed/tuyetnhung/400/200' }
                        ].map((sponsor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <Card className="bg-white p-8 rounded-[2rem] border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center h-full group">
                                    <div className="h-24 w-full flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                                        <img src={sponsor.img} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                                    </div>
                                    <Badge variant="outline" className={`text-[10px] font-black tracking-widest uppercase mb-2 px-3 py-0.5 rounded-full ${sponsor.tier === 'Diamond' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                        sponsor.tier === 'Silver' ? 'bg-stone-50 text-stone-600 border-stone-100' :
                                            'bg-orange-50 text-orange-600 border-orange-100'
                                        }`}>
                                        {sponsor.tier}
                                    </Badge>
                                    <p className="font-bold text-stone-900 text-sm group-hover:text-orange-600 transition-colors">{sponsor.name}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile App Section */}
            <section className="py-24 bg-orange-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-700/30 skew-x-12 translate-x-1/4 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            className="order-2 lg:order-1"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative mx-auto w-[300px] h-[620px] bg-stone-950 rounded-[3.5rem] border-[12px] border-stone-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-stone-900 rounded-b-3xl z-30"></div>
                                <div className="absolute inset-0 bg-stone-900 z-0"></div>
                                <motion.img
                                    src="https://picsum.photos/seed/mobile-app/600/1200"
                                    alt="Mobile App Interface"
                                    className="w-full h-full object-cover opacity-90 relative z-10 group-hover:scale-105 transition-transform duration-1000"
                                    initial={{ scale: 1.1 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 via-transparent to-transparent z-20"></div>
                                <div className="absolute bottom-12 left-8 right-8 z-30">
                                    <motion.div
                                        className="w-14 h-14 bg-white rounded-2xl mb-6 flex items-center justify-center text-orange-600 font-bold text-2xl shadow-xl"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        M
                                    </motion.div>
                                    <motion.h5
                                        className="text-2xl font-bold mb-3"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        Tết Mông App
                                    </motion.h5>
                                    <motion.p
                                        className="text-sm text-white/90 leading-relaxed"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        Quản lý sự kiện và văn hóa ngay trên điện thoại của bạn.
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
                                Sắp ra mắt trên iOS & Android
                            </Badge>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                                Trải nghiệm trên <br />
                                <span className="text-orange-200 italic font-light">Ứng dụng Di động</span>
                            </h2>
                            <p className="text-xl text-orange-50 mb-10 leading-relaxed opacity-90">
                                Kết hợp sức mạnh của Flutter, ứng dụng di động Tết Mông mang đến trải nghiệm mượt mà, tối ưu cho cả Ban Tổ Chức và Khách tham quan.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { icon: <TrendingUp size={18} />, text: 'Quản lý thu chi thời gian thực' },
                                    { icon: <Calendar size={18} />, text: 'Thông báo lịch trình tức thì' },
                                    { icon: <MapPin size={18} />, text: 'Bản đồ văn hóa tương tác' },
                                    { icon: <Users size={18} />, text: 'Check-in tình nguyện viên' }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center gap-4 group"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/10">
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-sm tracking-wide">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-6">
                                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-10 py-8 text-lg font-bold shadow-2xl shadow-black/20 group">
                                    <Apple className="mr-2 w-6 h-6" /> App Store
                                </Button>
                                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-8 text-lg font-bold group">
                                    <Play className="mr-2 w-6 h-6" /> Google Play
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge variant="outline" className="mb-4 border-orange-200 text-orange-600 bg-orange-50 px-4 py-1 rounded-full">
                                Đội ngũ nòng cốt
                            </Badge>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Những Người <span className="text-orange-500 italic font-light">Giữ Lửa</span></h2>
                            <p className="text-stone-500 max-w-2xl mx-auto text-lg">
                                Gặp gỡ những con người tâm huyết, luôn nỗ lực không ngừng để bảo tồn và lan tỏa vẻ đẹp văn hóa dân tộc Mông.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {TEAM.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group text-center"
                            >
                                <div className="relative mb-8 inline-block">
                                    <div className="absolute inset-0 bg-orange-500 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                                    <Avatar className="h-40 w-40 md:h-64 md:w-64 rounded-[3rem] border-4 border-white shadow-2xl relative z-10 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
                                        <AvatarImage src={member.image} className="object-cover" />
                                        <AvatarFallback className="bg-stone-100 text-stone-400 text-4xl">{member.name[0]}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h4 className="text-2xl font-bold text-stone-900 mb-1">{member.name}</h4>
                                <p className="text-orange-600 text-sm font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>

                                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-100">
                                        {/* <Facebook size={20} /> */}
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-100">
                                        <Mail size={20} />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-100">
                                        <Phone size={20} />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-950 text-white pt-24 pb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-2">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-orange-900/20">M</div>
                                <span className="text-3xl font-serif font-bold tracking-tight">Tết Mông <span className="text-orange-500 italic font-light">Xuống Phố</span></span>
                            </div>
                            <p className="text-stone-400 max-w-md leading-relaxed mb-10 text-lg">
                                Chương trình văn hóa thường niên nhằm gìn giữ, lan tỏa và tôn vinh những giá trị truyền thống tốt đẹp của dân tộc Mông trong lòng thủ đô Hà Nội.
                            </p>
                            <div className="flex gap-5">
                                {[
                                    // { icon: <Facebook size={22} />, href: "https://www.facebook.com/xyootshiabnramnroog" },
                                    { icon: <Mail size={22} />, href: "mailto:tetmongxuongpho@gmail.com" },
                                    { icon: <Phone size={22} />, href: "tel:0347356296" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:shadow-xl hover:shadow-orange-900/20 transition-all duration-300 group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="font-bold mb-8 text-xl font-serif">Khám phá</h5>
                            <ul className="space-y-5 text-stone-400">
                                <li><a href="#home" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Trang chủ</a></li>
                                <li><Link to="/culture" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Văn hóa Mông</Link></li>
                                <li><Link to="/event" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Sự kiện</Link></li>
                                <li><Link to="/finance" className="hover:text-orange-500 transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Minh bạch tài chính</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold mb-8 text-xl font-serif">Liên hệ trực tiếp</h5>
                            <ul className="space-y-6 text-stone-400">
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                                        <Phone size={18} className="text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase font-bold tracking-widest mb-1">Hotline</p>
                                        <p className="text-white font-medium">0347356296 (Ms. Súa)</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                                        <Mail size={18} className="text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase font-bold tracking-widest mb-1">Email</p>
                                        <p className="text-white font-medium">tetmongxuongpho@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                                        <MapPin size={18} className="text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase font-bold tracking-widest mb-1">Địa chỉ</p>
                                        <p className="text-white font-medium">Hà Nội, Việt Nam</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-sm">
                        <p>© 2026 Tết Mông Xuống Phố. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
                            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}