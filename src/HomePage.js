import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import { style } from 'framer-motion/client';

export default function HomePage() {
    useEffect(() => {
        document.title = 'H Express | JK Transport';
    }, []);

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // replace your closeOnScroll effect with this
    useEffect(() => {
        if (!menuOpen) return;
        const startY = window.scrollY;
        const onScroll = () => {
            if (Math.abs(window.scrollY - startY) > 8) setMenuOpen(false);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [menuOpen]);


    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            title: "Safe & Secure Move",
            desc: "Your goods are handled with utmost care and securely packed for safe delivery.",
            image: "/assets/images/safe.jpg",
        },
        {
            title: "On Time Delivery",
            desc: "We value time. Our team ensures that all deliveries reach on or before schedule.",
            image: "/assets/images/on-time.jpg",
        },
        {
            title: "Cost Effective",
            desc: "Affordable logistics solutions tailored to your needs without hidden charges.",
            image: "/assets/images/cost.jpg",
        },
        {
            title: "Intercity Logistics",
            desc: "Professional transport service with full/part truck load and pickup facilities.",
            image: "/assets/images/distance.jpg",
        },
    ];

    const stagger = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
    };
    const float = {
        hidden: { y: 0 },
        show: {
            y: [0, -6, 0],
            transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
        },
    };

    const featuresGrid = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        },
    };

    const featureCard = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    };

    return (
        <main className="bg-white text-gray-800 font-sans scroll-smooth overflow-x-clip">

            {/* Header */}
            <header
                className={`transition-all duration-300 px-6 md:px-10 h-20 sticky top-0 z-50 flex items-center ${isScrolled
                    ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-amber-100/60"
                    : "bg-white"
                    }`}
            >
                {/* Left: Logo + Brand */}
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Logo badge */}
                    <div className="grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-full bg-amber-500 ring-1 ring-amber-300/60 shadow-sm">
                        <img
                            src="/assets/images/logo01.png"
                            alt="JK Logo"
                            className="h-7 w-7 md:h-8 md:w-8 invert"
                        />
                    </div>

                    {/* Brand text */}
                    <div className="leading-tight">
                        <div className="text-base md:text-lg font-semibold text-slate-900">
                            JK Transport <span className="text-slate-400">|</span> H Express
                        </div>
                        <div className="hidden sm:block text-xs md:text-sm font-medium tracking-wide text-amber-600">
                            Jaipur ⇄ Beawar Daily Booking
                        </div>
                    </div>
                </div>

                {/* Right: Nav */}
                <nav className="ml-auto hidden md:flex items-center gap-6 text-[15px] font-semibold text-slate-700">
                    <a href="#overview" className="hover:text-amber-600 transition-colors">Overview</a>
                    <a href="#daily-booking" className="hover:text-amber-600 transition-colors">Daily Booking</a>
                    <a href="#features" className="hover:text-amber-600 transition-colors">Features</a>
                    <a href="#contact" className="hover:text-amber-600 transition-colors">Contact Us</a>
                </nav>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden ml-auto text-3xl text-slate-800 focus:outline-none"
                    aria-label="Toggle navigation menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? '✕' : '≡'}
                </button>
            </header>


            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden fixed inset-x-0 top-20 z-[60] bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-md">
                    <div className="px-6 py-6 space-y-4">
                        <a href="#overview" className="block text-lg text-yellow-700 font-semibold" onClick={() => setMenuOpen(false)}>Overview</a>
                        <a href="#daily-booking" className="block text-lg text-yellow-700 font-semibold" onClick={() => setMenuOpen(false)}>Daily Booking</a>
                        <a href="#features" className="block text-lg text-yellow-700 font-semibold" onClick={() => setMenuOpen(false)}>Features</a>
                        <a href="#contact" className="block text-lg text-yellow-700 font-semibold" onClick={() => setMenuOpen(false)}>Contact Us</a>
                    </div>
                </div>
            )}

            {/* Hero Banner */}
            <section className="relative overflow-hidden">
                <img
                    src="/assets/images/banner(1).jpg"
                    alt="On-road transport"
                    className="w-full h-[90vh] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-end justify-center text-right px-6 md:px-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white max-w-xl drop-shadow-2xl"
                    >
                        <p className="text-4xl sm:text-5xl md:text-5xl font-extrabold font-sans leading-tight text-orange-400 mb-2">
                            JK Transport | H Express
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-2">
                            Jaipur ⇄ Beawar Daily Booking Service
                        </p>
                        <p className="text-xl md:text-2xl font-semibold font-sans">
                            Packers & Movers All-India Booking from Beawar
                        </p>
                    </motion.div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        href="#contact"
                        className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-md"
                    >
                        Call / WhatsApp Now
                    </motion.a>
                </div>
            </section>

            {/* Overview */}
            <section id="overview" className="py-16 px-6 bg-[#fdfdfc]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-6"
                    >
                        <h2
                            className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    'linear-gradient(218deg, rgba(223, 163, 63, 1) 0%, rgba(231, 189, 87, 1) 53%, rgba(223, 163, 63, 1) 100%)',
                            }}
                        >
                            Overview
                        </h2>
                        <p className="mt-3 text-lg text-gray-700">
                            We provide reliable daily transport between <b>Jaipur</b> and <b>Beawar</b>, along with
                            <b> Packers & Movers</b> services, <b>full/part truck loads</b>, <b>pickup</b>, and
                            <b> IB-approved bills</b>. Bookings are available <b>across India from Beawar</b>.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-gray-700 space-y-6"
                        >
                            <h3 className="text-2xl font-semibold font-sans text-gray-900">
                                End-to-End, On-Time, Professional
                            </h3>
                            <p className="leading-relaxed text-lg">
                                From household moves to office relocations and commercial cargo, our trained team
                                ensures careful handling, clear communication, and punctual delivery.
                            </p>
                            <ul className="list-disc pl-5 text-lg space-y-2">
                                <li>Daily cargo movement Jaipur ⇄ Beawar</li>
                                <li>Doorstep pickup & flexible scheduling</li>
                                <li>Transparent pricing, no hidden charges</li>
                                <li>Live coordination & support</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src="/assets/images/overview-img.png"
                                alt="Overview logistics image"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Daily Booking (UPGRADED) */}
            <section id="daily-booking" className="relative overflow-hidden py-20 px-6">

                {/* soft blobs */}
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
                        style={{ background: 'linear-gradient(120deg,#F59E0B,#EAB308)' }} />
                    <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
                        style={{ background: 'linear-gradient(120deg,#6366F1,#22D3EE)' }} />
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Heading + badges */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-10"
                    >
                        <motion.h2 variants={fadeUp}
                            className="text-3xl md:text-5xl font-serif font-semibold">
                            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                                Jaipur ⇄ Beawar Daily Booking
                            </span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-600">
                            Guaranteed daily dispatch between Jaipur and Beawar.
                            Same-day slot confirmation on call/WhatsApp.
                        </motion.p>

                        <motion.div variants={fadeUp}
                            className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            {[
                                'Same-day Confirmation',
                                'FTL & PTL Available',
                                'Doorstep Pickup',
                                'IB-Approved Bills'
                            ].map((b, i) => (
                                <motion.span
                                    key={i}
                                    variants={float}
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-white shadow-sm border bg-yellow-500"
                                >
                                    {b}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Cards */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                h: 'Full Truck Load (FTL)',
                                p: 'Direct truck for your consignment—faster, safer, no clubbing.',
                                Icon: () => (
                                    <svg viewBox="0 0 24 24" className="w-7 h-7"><path fill="currentColor"
                                        d="M3 7h10v7h-1.5a2.5 2.5 0 0 0-5 0H5V9H3V7zm10 7h5.586L21 11.586V7h-3v3h-5v4zM8.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z" /></svg>
                                ),
                            },
                            {
                                h: 'Part Truck Load (PTL)',
                                p: 'Economical for smaller shipments with careful segregation.',
                                Icon: () => (
                                    <svg viewBox="0 0 24 24" className="w-7 h-7"><path fill="currentColor"
                                        d="M4 6h8v6H4V6zm0 8h8v4H4v-4zm10-8h6v4h-6V6zm0 6h6v6h-6v-6z" /></svg>
                                )
                            },
                            {
                                h: 'Pickup & Door Delivery',
                                p: 'Doorstep pickup available. Ask for IB-approved invoice if required.',
                                Icon: () => (
                                    <svg viewBox="0 0 24 24" className="w-7 h-7"><path fill="currentColor"
                                        d="M12 3l7 6v12H5V9l7-6zm0 2.2L7 9v9h10V9l-5-3.8z" /></svg>
                                )
                            },
                        ].map(({ h, p, Icon }, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -6, rotate: 0.2, transition: { type: 'spring', stiffness: 220 } }}
                                className="group relative rounded-2xl border bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl min-h-[200px]"
                            >
                                {/* shine */}
                                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ background: 'linear-gradient(135deg,rgba(255,255,255,.2),rgba(255,255,255,0))' }} />
                                <div className="flex items-start gap-3 p-2">
                                    <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                                        <Icon />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{h}</h3>
                                        <p className="mt-2 text-gray-600">{p}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mt-10"
                    >
                        <motion.a
                            href="https://wa.me/919928463800"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-white shadow-[0_12px_24px_rgba(245,158,11,0.25)] mt-6"
                            style={{ background: 'linear-gradient(135deg,#F59E0B,#EAB308)' }}
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor"
                                d="M20.52 3.48A11.92 11.92 0 0012.07 0 11.94 11.94 0 000 12a12 12 0 001.6 6L0 24l6.25-1.63A12 12 0 0012 24a12 12 0 008.5-3.5A12 12 0 0024 12a11.92 11.92 0 00-3.48-8.52zM12 22a10 10 0 01-5.1-1.39l-.37-.22l-3.63.95l.97-3.54l-.24-.38A10 10 0 1122 12A10 10 0 0112 22zm5.37-6.75c-.3-.15-1.77-.87-2.05-.97s-.48-.15-.68.15s-.78.97-.96 1.17s-.35.22-.65.07a8.14 8.14 0 01-2.4-1.48a9 9 0 01-1.65-2.06c-.17-.3 0-.47.12-.62s.3-.35.45-.52s.2-.3.3-.5s.05-.37 0-.52s-.68-1.64-.92-2.25s-.5-.5-.68-.5h-.57a1.1 1.1 0 00-.8.37a3.36 3.36 0 00-1.05 2.5a5.83 5.83 0 001.2 3.1a13.33 13.33 0 005.08 4.66a17.35 17.35 0 003.26 1.2a3.76 3.76 0 001.73.11a2.83 2.83 0 001.85-1.25a2.31 2.31 0 00.15-1.25c-.07-.1-.27-.17-.57-.32z" /></svg>
                            Book Today on WhatsApp: +91-99284-63800
                        </motion.a>
                    </motion.div>
                </div>
            </section>


            {/* Features */}
            <section id="features" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold mb-2"
                    >
                        <span
                            className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    'linear-gradient(218deg, rgba(223, 163, 63, 1) 0%, rgba(231, 189, 87, 1) 53%, rgba(223, 163, 63, 1) 100%)',
                            }}
                        >
                            Our Features
                        </span>
                    </motion.h2>

                    <motion.div
                        variants={featuresGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-10 items-stretch"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={featureCard}
                                whileHover={{ y: -4, scale: 1.02, rotate: 0.1 }}
                                transition={{ type: "tween", ease: [0.22, 0.61, 0.36, 1], duration: 0.18 }}
                                className="rounded-xl overflow-hidden bg-white shadow-md hover:ring-1 hover:ring-amber-200 transform-gpu will-change-transform h-full min-h-[240px]"
                            >
                                <div className="relative w-full h-52 md:h-60 overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover clip-diagonal"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-md font-bold text-gray-800 mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Offices + Beawar Address + Contact (Combined) */}
            {/* Offices + Beawar Address + Contact (Combined, Equal Height, Amber theme) */}
            <section id="contact" className="relative overflow-hidden py-20 px-6">
                {/* soft amber blobs for consistency */}
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-15"
                        style={{ background: 'linear-gradient(120deg,#F59E0B,#EAB308)' }} />
                    <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-15"
                        style={{ background: 'linear-gradient(120deg,#F59E0B,#EAB308)' }} />
                </div>

                <div className="max-w-6xl mx-auto space-y-10">
                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                                Offices & Contact
                            </span>
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Find our Jaipur booking offices, Beawar address, and ways to contact us—everything in one place.
                        </p>
                    </div>

                    {/* Equal-height grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                        {/* Jaipur Offices */}
                        <div className="flex flex-col h-full rounded-2xl bg-white/90 backdrop-blur-sm border shadow-sm p-6">
                            <h3 id="offices" className="text-xl font-semibold mb-4">Jaipur Booking Offices</h3>

                            <div className="space-y-4">
                                <div className="rounded-xl border p-4">
                                    <p className="font-semibold">VKI Road No. 9</p>
                                    <p className="text-gray-700">Near ARC Group, Jaipur</p>
                                    <a href="tel:9829017617" className="text-amber-600 hover:underline">Mo. 9829017617</a>
                                </div>
                                <div className="rounded-xl border p-4">
                                    <p className="font-semibold">Sansar Chandra Road</p>
                                    <p className="text-gray-700">Jaipur</p>
                                    <a href="tel:9001300222" className="text-amber-600 hover:underline">Mo. 9001300222</a>
                                </div>
                                <div className="rounded-xl border p-4">
                                    <p className="font-semibold">Transport Nagar D2</p>
                                    <p className="text-gray-700">Jaipur</p>
                                    <a href="tel:7737181859" className="text-amber-600 hover:underline">Mo. 7737181859</a>
                                </div>
                            </div>

                            <div className="mt-6 text-gray-700">
                                <p className="font-semibold">Office Timings</p>
                                <p>Monday — <b>11:00 AM – 2:00 PM</b></p>
                                <p>Tuesday to Sunday — <b>9:00 AM – 5:00 PM</b></p>
                            </div>

                            {/* push footer line down if needed */}
                            <div className="mt-auto" />
                        </div>

                        {/* Beawar Address + Map */}
                        <div className="flex flex-col h-full rounded-2xl bg-white/90 backdrop-blur-sm border shadow-sm p-6">
                            <h3 id="location" className="text-xl font-semibold mb-4">Beawar Office Address</h3>
                            <p className="text-gray-800">
                                📍 <b>G-137 RICCO</b>, near <b>Gajanand Dharam Kanta</b><br />
                                Ajmer Road, Dist. <b>Beawar (Raj.) 305901</b>
                            </p>

                            {/* map grows to fill remaining height so all three columns match */}
                            <div className="mt-4 rounded-xl overflow-hidden shadow md:min-h-[16rem] flex-1">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3559.4533163098834!2d74.320000!3d26.100000!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be517bf86c05b%3A0x123456789abcdef!2sG-137%20RICCO%2C%20Beawar%2C%20Rajasthan%20305901!5e0!3m2!1sen!2sin!4v1702042444189!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Beawar Office Map with Marker"
                                />
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col h-full rounded-2xl bg-white/90 backdrop-blur-sm border shadow-sm p-6">
                            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

                            <div className="space-y-5 text-gray-800">
                                <div>
                                    <p className="text-gray-700 font-semibold">Primary Numbers</p>
                                    <a href="tel:919928463800" className="text-amber-600 hover:underline block">+91-99284-63800</a>
                                    <a href="tel:919001553663" className="text-amber-600 hover:underline block">+91-90015-53663</a>
                                </div>

                                <div>
                                    <p className="text-gray-700 font-semibold">Email</p>
                                    <a href="mailto:info@jktransport.in" className="text-amber-600 hover:underline">
                                        info@jktransport.in
                                    </a>
                                </div>

                                <div>
                                    <p className="text-gray-700 font-semibold">Services</p>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                        <li>Packers & Movers</li>
                                        <li>Full Truck Load / Part Load</li>
                                        <li>Pickup · IB-approved bills</li>
                                        <li>All-India booking from Beawar</li>
                                    </ul>
                                </div>

                                <div className="mt-6 text-gray-700">
                                    <p className="font-semibold">Office Timings</p>
                                    <p>Monday — <b>11:00 AM – 2:00 PM</b></p>
                                    <p>Tuesday to Sunday — <b>9:00 AM – 5:00 PM</b></p>
                                </div>
                            </div>

                            <div className="mt-auto" />
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-[#e7bd57] text-white py-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} H Express | JK Transport. All rights reserved.</p>
            </footer>
        </main>
    );
}
