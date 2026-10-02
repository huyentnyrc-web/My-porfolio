import React, { useState } from 'react';
import { Mail, Phone, Award, Briefcase, GraduationCap, Copy, Check, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation components
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-soft-green shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-bank-green hover:text-bank-green-dark transition-colors">
              Triệu Ngọc Huyền
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-gray-600 hover:text-bank-green transition-colors font-medium">Trang chủ</a></li>
              <li><a href="#academics" className="text-gray-600 hover:text-bank-green transition-colors font-medium">Thành tích</a></li>
              <li><a href="#experience" className="text-gray-600 hover:text-bank-green transition-colors font-medium">Kinh nghiệm</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-bank-green transition-colors font-medium">Liên hệ</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left z-10">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Sinh viên năm 4 ngành <br />
                <span className="text-emerald-700">Tài chính - Ngân hàng</span> <br />
                tại Đại học Ngoại thương (FTU)
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Hiện đang tích luỹ kiến thức và kinh nghiệm để bước vào ngành Tín dụng ngân hàng. 
                Luôn cầu tiến, chủ động và sẵn sàng đón nhận những thử thách mới trong môi trường chuyên nghiệp.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#academics" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-bank-green hover:bg-bank-green-dark hover:from-bank-green hover:to-bank-green-dark bg-gradient-to-r transition-all shadow-md hover:shadow-xl"
                >
                  Xem thành tích
                  <ChevronRight className="ml-2 w-5 h-5" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-bank-green text-base font-medium rounded-xl text-bank-green bg-transparent hover:bg-soft-green transition-all"
                >
                  Liên hệ ngay
                </motion.a>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3} className="flex-shrink-0 relative">
            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-0 bg-bank-green rounded-full blur-2xl z-0"
              ></motion.div>
              <img 
                src="/avatar.jpg" 
                alt="Avatar" 
                className="relative z-10 w-[260px] h-[260px] md:w-[340px] md:h-[340px] object-cover object-[center_15%] rounded-full border-4 border-white shadow-xl bg-white"
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Academics = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-8 h-8 text-bank-green" />,
      title: "GPA: 3.3 / 4.0",
      desc: "Đại học Ngoại thương (FTU)",
    },
    {
      icon: <Award className="w-8 h-8 text-bank-green" />,
      title: "IELTS 7.0",
      desc: "Overall Band Score",
    },
    {
      icon: <Award className="w-8 h-8 text-bank-green" />,
      title: "MOS 900 Points",
      desc: "Chứng chỉ Tin học Văn phòng",
    },
    {
      icon: <Award className="w-8 h-8 text-bank-green" />,
      title: "Giải Nhì HSG Tỉnh",
      desc: "Môn Vật lý (Lớp 12)",
    },
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thành tích Học tập & Chứng chỉ</h2>
          <div className="w-20 h-1 bg-bank-green mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(21, 128, 61, 0.25)" }}
                className="bg-white h-full border border-soft-green rounded-2xl p-6 shadow-sm transition-all duration-300 flex flex-col items-center text-center group cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-soft-green rounded-full flex items-center justify-center mb-4 group-hover:bg-bank-green group-hover:text-white transition-colors"
                >
                  {React.cloneElement(item.icon as React.ReactElement, { 
                    className: "w-8 h-8 text-bank-green group-hover:text-white transition-colors" 
                  })}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      period: "07/2026 - Hiện tại",
      role: "Thực tập sinh",
      company: "Agribank",
      icon: <Briefcase className="w-5 h-5 text-white" />
    },
    {
      period: "2024 - 2025",
      role: "Trưởng Ban Nhân sự",
      company: "CLB Sinh viên nghiên cứu khoa học YRC",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      period: "2023 - 2024",
      role: "Thành viên",
      company: "CLB Sinh viên nghiên cứu khoa học YRC",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kinh nghiệm & Hoạt động</h2>
          <div className="w-20 h-1 bg-bank-green mx-auto rounded-full"></div>
        </FadeIn>
        
        <div className="relative border-l-2 border-soft-green ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-8 md:ml-12 relative">
              <FadeIn delay={index * 0.15}>
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-10 h-10 bg-bank-green rounded-full flex items-center justify-center shadow-md border-4 border-light-green z-10">
                  {exp.icon}
                </div>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(21, 128, 61, 0.2)" }}
                  className="bg-white p-6 rounded-2xl border border-soft-green shadow-sm transition-all duration-300"
                >
                  <span className="inline-block px-3 py-1 bg-soft-green text-bank-green-dark text-sm font-semibold rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </motion.div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kết nối với tôi</h2>
          <div className="w-20 h-1 bg-bank-green mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600">Luôn sẵn sàng đón nhận cơ hội mới và trao đổi về công việc.</p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="bg-white border border-soft-green p-8 rounded-2xl shadow-md max-w-2xl mx-auto">
          <div className="flex flex-col gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row items-center justify-between p-4 bg-light-green rounded-xl border border-soft-green group transition-all"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-bank-green group-hover:bg-bank-green group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href="mailto:huyen04022005@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-bank-green transition-colors">
                    huyen04022005@gmail.com
                  </a>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard('huyen04022005@gmail.com', 'email')}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-soft-green rounded-lg text-sm font-medium text-gray-700 hover:bg-soft-green transition-colors focus:outline-none focus:ring-2 focus:ring-bank-green"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-bank-green" /> : <Copy className="w-4 h-4" />}
                {copiedEmail ? 'Đã chép' : 'Sao chép'}
              </motion.button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row items-center justify-between p-4 bg-light-green rounded-xl border border-soft-green group transition-all"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-bank-green group-hover:bg-bank-green group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 font-medium">Số điện thoại</p>
                  <a href="tel:0368784228" className="text-lg font-semibold text-gray-900 hover:text-bank-green transition-colors">
                    036.878.4228
                  </a>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard('0368784228', 'phone')}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-soft-green rounded-lg text-sm font-medium text-gray-700 hover:bg-soft-green transition-colors focus:outline-none focus:ring-2 focus:ring-bank-green"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-bank-green" /> : <Copy className="w-4 h-4" />}
                {copiedPhone ? 'Đã chép' : 'Sao chép'}
              </motion.button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center text-gray-500">
    <p>© {new Date().getFullYear()} Triệu Ngọc Huyền. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Academics />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
