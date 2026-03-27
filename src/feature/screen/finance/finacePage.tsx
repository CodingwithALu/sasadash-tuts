import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
    TrendingUp,
    TrendingDown,
    DollarSign,
    Calendar,
    PieChart as PieChartIcon,
    ArrowLeft,
    ShieldCheck,
    Download,
    CreditCard,
    History,
    CheckCircle2,
    Clock,
    ChevronRight,
    Plus,
    LogIn,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';
// import { useFirebase } from '../components/FirebaseProvider';
// import { loginWithGoogle, logout, db, handleFirestoreError, OperationType } from '../firebase';
// import { collection, onSnapshot, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';

// --- Types ---
interface Transaction {
    id: string;
    type: 'income' | 'expense';
    category: string;
    amount: number;
    date: string;
    description: string;
    status: 'confirmed' | 'pending';
    method: 'bank' | 'zalopay' | 'cash';
    createdBy?: string;
}

// --- Mock Data (Fallback) ---
const MOCK_TRANSACTIONS: Transaction[] = [
    { id: '1', type: 'income', category: 'Sponsorship', amount: 50000000, date: '2026-01-10', description: 'The Best View Sapa - Diamond Sponsor', status: 'confirmed', method: 'bank' },
    { id: '2', type: 'income', category: 'Donation', amount: 5000000, date: '2026-01-15', description: 'Nguyễn Văn A - Cá nhân', status: 'confirmed', method: 'zalopay' },
    { id: '3', type: 'expense', category: 'Venue', amount: 15000000, date: '2026-01-20', description: 'Thuê địa điểm Tây Hồ', status: 'confirmed', method: 'bank' },
    { id: '4', type: 'expense', category: 'Scholarship', amount: 3000000, date: '2026-01-25', description: '06 suất học bổng Giữ Lửa', status: 'confirmed', method: 'bank' },
];

const YEARLY_STATS = [
    { year: '2023', income: 120000000, expense: 95000000 },
    { year: '2024', income: 150000000, expense: 110000000 },
    { year: '2025', income: 180000000, expense: 145000000 },
    { year: '2026', income: 67000000, expense: 23000000 }, // Current year
];

const CATEGORY_DATA = [
    { name: 'Sponsorship', value: 60000000, color: '#ea580c' },
    { name: 'Donation', value: 7000000, color: '#f97316' },
    { name: 'Scholarship', value: 3000000, color: '#fb923c' },
    { name: 'Event Costs', value: 20000000, color: '#fdba74' },
];

export default function FinancePage() {
    //   const { user, profile, isAdmin, loading: authLoading } = useFirebase();
    const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
    const [selectedYear, setSelectedYear] = useState('2026');
    const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
    const [isAdding, setIsAdding] = useState(false);
    const [newTx, setNewTx] = useState({
        type: 'income' as 'income' | 'expense',
        category: 'Donation',
        amount: 0,
        description: '',
        method: 'bank' as 'bank' | 'zalopay' | 'cash'
    });

    // Real-time listener for transactions
    //   useEffect(() => {
    //     if (!db) return;

    //     const q = query(collection(db, 'transactions'), orderBy('date', 'desc'));
    //     const unsubscribe = onSnapshot(q, (snapshot) => {
    //       const txs = snapshot.docs.map(doc => ({
    //         id: doc.id,
    //         ...doc.data()
    //       })) as Transaction[];
    //       if (txs.length > 0) setTransactions(txs);
    //     }, (error) => {
    //       console.warn("Firestore listener failed, using mock data.", error);
    //     });

    //     return () => unsubscribe();
    //   }, []);

    const filteredTransactions = useMemo(() => {
        return transactions.filter(t => {
            if (filterType === 'all') return true;
            return t.type === filterType;
        });
    }, [filterType, transactions]);

    const totalIncome = useMemo(() => transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0), [transactions]);
    const totalExpense = useMemo(() => transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0), [transactions]);
    const balance = totalIncome - totalExpense;

    const handleAddTransaction = async (e: React.FormEvent) => {
        // e.preventDefault();
        // if (!isAdmin || !db || !user) return;

        // try {
        //   await addDoc(collection(db, 'transactions'), {
        //     ...newTx,
        //     date: new Date().toISOString().split('T')[0],
        //     status: 'confirmed',
        //     createdBy: user.uid,
        //     createdAt: serverTimestamp()
        //   });
        //   setIsAdding(false);
        //   setNewTx({ type: 'income', category: 'Donation', amount: 0, description: '', method: 'bank' });
        // } catch (error) {
        //   handleFirestoreError(error, OperationType.CREATE, 'transactions');
        // }
    };

    return (
        <div className="min-h-screen bg-[#fdfcf9] text-stone-800 font-sans selection:bg-orange-100 pb-20">
            {/* Header */}
            <header className="bg-stone-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://picsum.photos/seed/finance-bg/1920/1080?blur=10"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-bold">
                            <ArrowLeft size={20} /> Quay lại trang chủ
                        </Link>

                        <div className="flex items-center gap-4">
                            {/* {authLoading ? (
                <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              ) : user ? (
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold">{user.displayName}</p>
                    <p className="text-[10px] text-orange-400 uppercase tracking-widest font-black">{profile?.role}</p>
                  </div>
                  <button 
                    onClick={() => {}}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-stone-300 hover:text-white"
                    title="Đăng xuất"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : ( */}
                            <button
                                onClick={() => { }}
                                className="flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20"
                            >
                                <LogIn size={18} /> Đăng nhập
                            </button>
                            {/* )} */}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-serif font-bold mb-6"
                            >
                                Minh Bạch <br /> <span className="text-orange-500 italic">Tài Chính</span>
                            </motion.h1>
                            <p className="text-xl text-stone-300 max-w-2xl leading-relaxed italic">
                                "Mọi đóng góp đều được ghi nhận và sử dụng đúng mục đích vì sự phát triển của cộng đồng."
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20">
                            <div className="flex items-center gap-3 mb-2">
                                <ShieldCheck className="text-green-400" size={20} />
                                <span className="text-sm font-bold tracking-widest uppercase">Quỹ An Toàn</span>
                            </div>
                            <h4 className="text-3xl font-bold">{balance.toLocaleString('vi-VN')} ₫</h4>
                            <p className="text-stone-400 text-xs mt-1">Cập nhật lúc: {new Date().toLocaleTimeString('vi-VN')}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                            <TrendingUp size={24} />
                        </div>
                        <p className="text-stone-500 text-sm font-bold uppercase tracking-widest mb-1">Tổng Thu</p>
                        <h3 className="text-3xl font-bold text-stone-900">{totalIncome.toLocaleString('vi-VN')} ₫</h3>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                            <TrendingDown size={24} />
                        </div>
                        <p className="text-stone-500 text-sm font-bold uppercase tracking-widest mb-1">Tổng Chi</p>
                        <h3 className="text-3xl font-bold text-stone-900">{totalExpense.toLocaleString('vi-VN')} ₫</h3>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-orange-600 p-8 rounded-[2.5rem] shadow-xl text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                            <DollarSign size={24} />
                        </div>
                        <p className="text-orange-100 text-sm font-bold uppercase tracking-widest mb-1">Số Dư Quỹ</p>
                        <h3 className="text-3xl font-bold">{balance.toLocaleString('vi-VN')} ₫</h3>
                    </motion.div>
                </div>

                {/* Charts */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="text-xl font-bold flex items-center gap-2">
                                <Calendar className="text-orange-600" size={20} />
                                Thống kê theo năm
                            </h4>
                            <select
                                className="bg-stone-50 border-none text-sm font-bold px-4 py-2 rounded-xl outline-none"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                <option value="2026">2026</option>
                                <option value="2025">2025</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={YEARLY_STATS}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        cursor={{ fill: '#f5f5f4' }}
                                    />
                                    <Legend iconType="circle" />
                                    <Bar dataKey="income" name="Thu nhập" fill="#ea580c" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="expense" name="Chi tiêu" fill="#a8a29e" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm">
                        <h4 className="text-xl font-bold flex items-center gap-2 mb-8">
                            <PieChartIcon className="text-orange-600" size={20} />
                            Cơ cấu thu chi
                        </h4>
                        <div className="h-[300px] w-full flex items-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={CATEGORY_DATA}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {CATEGORY_DATA.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend layout="vertical" align="right" verticalAlign="middle" iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Transaction List */}
                <div className="bg-white rounded-[2.5rem] border border-stone-100 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-stone-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h4 className="text-2xl font-bold text-stone-900">Chi tiết giao dịch</h4>
                            <p className="text-stone-500 text-sm">Danh sách các khoản thu chi được cập nhật thời gian thực.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="flex bg-stone-50 p-1 rounded-xl">
                                {(['all', 'income', 'expense'] as const).map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFilterType(type)}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filterType === type ? 'bg-white text-orange-600 shadow-sm' : 'text-stone-400 hover:text-stone-600'
                                            }`}
                                    >
                                        {type === 'all' ? 'Tất cả' : type === 'income' ? 'Thu' : 'Chi'}
                                    </button>
                                ))}
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-stone-50 text-stone-600 rounded-xl text-xs font-bold hover:bg-stone-100 transition-all">
                                <Download size={14} /> Xuất báo cáo
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-black border-b border-stone-50">
                                    <th className="px-8 py-6">Ngày</th>
                                    <th className="px-8 py-6">Mô tả</th>
                                    <th className="px-8 py-6">Danh mục</th>
                                    <th className="px-8 py-6">Phương thức</th>
                                    <th className="px-8 py-6">Số tiền</th>
                                    <th className="px-8 py-6">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-50">
                                {filteredTransactions.map((t) => (
                                    <tr key={t.id} className="group hover:bg-stone-50 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.type === 'income' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                                                    }`}>
                                                    {t.type === 'income' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                                                </div>
                                                <span className="text-sm font-medium text-stone-500">{t.date}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <p className="text-sm font-bold text-stone-800">{t.description}</p>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">{t.category}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 text-stone-500">
                                                {t.method === 'zalopay' ? <CreditCard size={14} className="text-blue-500" /> : <History size={14} />}
                                                <span className="text-xs font-medium capitalize">{t.method}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`font-mono font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {t.type === 'income' ? '+' : '-'}{t.amount.toLocaleString('vi-VN')} ₫
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${t.status === 'confirmed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                                                }`}>
                                                {t.status === 'confirmed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                                {t.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xử lý'}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Admin Section */}
            <section className="py-24 bg-stone-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-orange-400 text-sm font-bold mb-6">
                                <ShieldCheck size={16} />
                                <span>QUYỀN QUẢN TRỊ VIÊN</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Quản Lý Quỹ <br /> <span className="text-orange-500 italic">An Toàn & Bảo Mật</span></h2>
                            <p className="text-lg text-stone-400 mb-10 leading-relaxed">
                                Hệ thống tài chính của chúng tôi được thiết kế với cơ chế phân quyền nghiêm ngặt. Chỉ những thành viên được cấp quyền quản trị mới có thể thực hiện các giao dịch chi tiêu, đảm bảo tính minh bạch tuyệt đối.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-2xl text-orange-500">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Xác thực 2 lớp</h4>
                                        <p className="text-stone-500">Mọi giao dịch chi tiêu đều yêu cầu sự phê duyệt từ ít nhất 2 thành viên Ban Tài Chính.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-2xl text-orange-500">
                                        <CreditCard size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Liên kết ZaloPay & Ngân hàng</h4>
                                        <p className="text-stone-500">Tích hợp cổng thanh toán điện tử giúp việc quyên góp trở nên nhanh chóng và tự động ghi nhận.</p>
                                    </div>
                                </div>
                            </div>

                            {/* {!user ? (
                <button 
                  onClick={() => {}}
                  className="bg-orange-600 text-white px-10 py-5 rounded-full font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20 flex items-center gap-2"
                >
                  <LogIn size={20} /> Đăng nhập để quản trị
                </button>
              ) : !isAdmin ? (
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center">
                  <ShieldCheck size={48} className="mx-auto text-stone-500 mb-4" />
                  <p className="text-stone-400">Tài khoản của bạn không có quyền quản trị tài chính.</p>
                </div>
              ) : ( */}
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
                                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Plus className="text-orange-500" />
                                    Tạo giao dịch mới
                                </h4>
                                <form onSubmit={handleAddTransaction} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <select
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white"
                                            value={newTx.type}
                                            onChange={(e) => setNewTx({ ...newTx, type: e.target.value as 'income' | 'expense' })}
                                        >
                                            <option value="income">Thu nhập</option>
                                            <option value="expense">Chi tiêu</option>
                                        </select>
                                        <select
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white"
                                            value={newTx.method}
                                            onChange={(e) => setNewTx({ ...newTx, method: e.target.value as 'bank' | 'zalopay' | 'cash' })}
                                        >
                                            <option value="bank">Ngân hàng</option>
                                            <option value="zalopay">ZaloPay</option>
                                            <option value="cash">Tiền mặt</option>
                                        </select>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Mô tả giao dịch"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                                        value={newTx.description}
                                        onChange={(e) => setNewTx({ ...newTx, description: e.target.value })}
                                        required
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Danh mục"
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                                            value={newTx.category}
                                            onChange={(e) => setNewTx({ ...newTx, category: e.target.value })}
                                            required
                                        />
                                        <input
                                            type="number"
                                            placeholder="Số tiền"
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                                            value={newTx.amount || ''}
                                            onChange={(e) => setNewTx({ ...newTx, amount: Number(e.target.value) })}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-white text-stone-900 py-4 rounded-xl font-bold hover:bg-stone-100 transition-all"
                                    >
                                        Xác nhận giao dịch
                                    </button>
                                </form>
                            </div>
                            {/* )} */}
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-orange-600 to-orange-900 rounded-[3rem] p-12 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-orange-200 text-xs font-bold uppercase tracking-widest">Trạng thái quỹ</p>
                                        <p className="text-2xl font-bold">AN TOÀN</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-orange-200 text-sm mb-2">Số dư khả dụng</p>
                                    <h3 className="text-5xl font-bold mb-8">{balance.toLocaleString('vi-VN')} ₫</h3>
                                    <div className="flex gap-2">
                                        <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-white w-3/4"></div>
                                        </div>
                                        <div className="h-1 flex-1 bg-white/20 rounded-full"></div>
                                        <div className="h-1 flex-1 bg-white/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold mb-6">Chung Tay Xây Dựng Cộng Đồng</h2>
                    <p className="text-stone-600 text-lg mb-10 leading-relaxed">
                        Sự minh bạch là cam kết hàng đầu của chúng tôi. Hãy cùng đóng góp để Tết Mông Xuống Phố ngày càng vươn xa.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl">
                            Xem báo cáo chi tiết
                        </button>
                        <a
                            href="https://zalopay.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl flex items-center gap-2"
                        >
                            Quyên góp qua ZaloPay <ChevronRight size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}