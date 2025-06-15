import { AccountDetails } from "../types/account";

export async function getAccountDetails(): Promise<AccountDetails> {
  try {
    const response = await fetch("/data/accountDetails.json");
    const data: AccountDetails = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading account details:", error);
    return {};
  }
}

export const accountDetails = {
  blackboxai: {
    id: "blackboxai",
    title: "Blackbox AI PRIVATE",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Blackbox AI membantu developer menulis kode lebih cepat dengan AI coding assistant yang terintegrasi dengan berbagai IDE dan GitHub Copilot alternatif.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "Unlimited",
    features: [
      "Autocompletion Cerdas",
      "Support 20+ Bahasa Pemrograman",
      "Integrasi dengan VSCode",
      "Export Code ke GitHub",
      "Include Chagpt 4.0, Claude Sonnet 3.5, Gemini pro, Deepseek AI",
      "Unlimited Token",
    ],
    variants: [{ name: "3 Bulan", price: "Rp 15.000", discount: "Save 20%" }],
  },
  chatgptai: {
    id: "chatgptai",
    title: "ChatGPT Plus",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Akses prioritas ke GPT-4, respons lebih cepat, dan fitur eksklusif untuk produktivitas & kreativitas maksimal.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "Unlimited",
    features: [
      "Akses GPT-5.0 (New Version)",
      "BISA LOGIN DI WEB / APK",
      "Akses Saat Peak Hours",
      "DALL-E Image Generation",
      "Voice Conversation",
      "Custom Instructions",
    ],
    variants: [
      { name: "1 Bulan (Sharing)", price: "Rp 30.000", discount: "Save 20%" },
      {
        name: "1 Bulan (Private Inv 5 Email)",
        price: "Rp 120.000",
        discount: "Save 50%",
      },
    ],
  },
  getcontact: {
    id: "getcontact",
    title: "Getcontact Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Lihat nama kontak Anda di ponsel orang lain dan lindungi identitas serta privasi Anda dengan fitur blokir spam canggih.",
    rating: 5.0,
    warranty: "14 hari",
    devices: "1",
    features: [
      "Lihat Tag Nama Kontak Anda",
      "Blokir & Laporkan Spam",
      "Lacak Aktivitas Panggilan",
      "Tanpa Iklan",
      "Prioritas Support",
      "Analisis Tag Populer",
      "Login OTP Jajian ke Seller",
      "Proses Menggunakan Nomor WhatsApp",
      "BISA PERPANJANG DENGAN NOMOR YANG SAMA",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 15.000" },
      { name: "6 Bulan", price: "Rp 40.000", discount: "Save 20%" },
    ],
  },
  canva: {
    id: "canva",
    title: "Canva Pro",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Canva Pro memberikan akses ke ribuan template premium, elemen desain eksklusif, dan fitur kolaborasi untuk tim kreatif.",
    rating: 4.99,
    warranty: "Full Garansi",
    devices: "Unlimited",
    features: [
      "100 jt Template Premium",
      "Hapus Background Otomatis",
      "Penyimpanan Cloud 1TB",
      "Unlock All Feature pro",
      "Bisa Add Font & Brand Kit",
      "Canva Owner Bisa Invite 500 email",
    ],
    variants: [
      { name: "1 Bulan (Member)", price: "Rp 1.000" },
      {
        name: "1 Bulan (Pro Desainer)",
        price: "Rp 3.000",
        discount: "Save 10%",
      },
      { name: "1 Bulan (Owner)", price: "Rp 150.000", discount: "Save 75%" },
    ],
  },
  capcut: {
    id: "capcut",
    title: "CapCut Pro Private",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "CapCut Pro adalah video editor all-in-one untuk TikTok, Reels, dan YouTube dengan akses efek premium, AI tools, dan export tanpa watermark.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "Unlimited",
    features: [
      "Unlock all Pro Efek Premium & Transisi",
      "Audio Sync Otomatis",
      "Tanpa Watermark",
      "Template AI Viral",
      "Cutting Presisi",
      "Font & Stiker Eksklusif",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 10.000" },
      { name: "3 Bulan", price: "Rp 35.000" },
    ],
  },
  meitu: {
    id: "meitu",
    title: "Meitu VIP",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Aplikasi edit foto kecantikan dengan AI, filter aesthetic, makeup digital, dan efek canggih untuk hasil maksimal.",
    rating: 4.99,
    warranty: "Full Garansi",
    devices: "1",
    features: [
      "Retouch AI Otomatis",
      "Efek Makeup & Kontur",
      "Filter Aesthetic & HD",
      "Edit Wajah Manual",
      "Hapus Jerawat & Glow",
      "Tanpa Watermark",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 25.000" },
    ],
  },
  remini: {
    id: "remini",
    title: "Remini Pro",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Tingkatkan kualitas foto buram, tua, atau rusak menjadi tajam HD dengan AI enhancement canggih dari Remini.",
    rating: 5.0,
    warranty: "14 hari",
    devices: "1",
    features: [
      "Enhance Foto Buram",
      "AI Colorizer Otomatis",
      "Retouch Selfie",
      "Foto Jadul Jadi HD",
      "AI Anime Style",
      "Tanpa Watermark",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 10.000" },
    ],
  },
  alightmotion: {
    id: "alightmotion",
    title: "Alight Motion Pro",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Alight Motion Pro memungkinkan kamu membuat animasi dan video dengan motion graphics profesional dan efek premium.",
    rating: 4.96,
    warranty: "Full Garansi",
    devices: "Unlimited",
    features: [
      "Keyframe Animation",
      "Efek & Preset Premium",
      "Tanpa Watermark",
      "Vector Graphics & Masking",
      "Support Layer Audio/Video",
      "Font Custom & Blend Mode",
    ],
    variants: [{ name: "1 tahun", price: "Rp 20.000" }],
  },
  bstation: {
    id: "bstation",
    title: "Bstation Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Bstation adalah layanan streaming anime dan drama Asia dengan subtitle lengkap dan kualitas HD.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "6",
    features: [
      "Tonton Anime Legal HD",
      "Tanpa Iklan",
      "Subtitle Lengkap",
      "Update Episode Cepat",
      "Offline Mode",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 15.000" },
      { name: "3 Bulan", price: "Rp 25.000", discount: "Save 40%" },
      { name: "6 Bulan", price: "Rp 35.000", discount: "Save 60%" },
    ],
  },
  disney: {
    id: "disney",
    title: "Disney+ Hotstar",
    image: "/assets/disney.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Nikmati tayangan dari Marvel, Pixar, Star Wars, dan film lokal populer di Disney+ Hotstar.",
    rating: 4.9,
    warranty: "Full Garansi",
    devices: "1",
    features: [
      "Marvel & Disney Original",
      "Streaming Film & Series",
      "Tanpa Iklan",
      "Kualitas Full HD",
      "Multi Device Support",
      "Login OTP Jajian ke Seller",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 40.000" },
      { name: "3 Bulan", price: "Rp 60.000", discount: "Save 40%" },
      { name: "4 Bulan", price: "Rp 70.000", discount: "Save 49%" },
    ],
  },
  dramabox: {
    id: "dramabox",
    title: "DramaBox Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Aplikasi nonton drama Korea dan Asia lengkap dengan subtitle dan kualitas tinggi.",
    rating: 4.99,
    warranty: "Full Garansi",
    devices: "1",
    features: [
      "K-Drama Terbaru",
      "Subtitle Indo Lengkap",
      "Drama China & Jepang",
      "Tanpa Iklan",
      "Full HD Streaming",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 15.000" },
      { name: "3 Bulan", price: "Rp 25.000", discount: "Save 10%" },
      { name: "6 Bulan", price: "Rp 40.000", discount: "Save 15%" },
      { name: "1 tahun", price: "Rp 65.000", discount: "Save 25%" },
    ],
  },
  iqiyi: {
    id: "iqiyi",
    title: "iQIYI VIP",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Streaming drama Asia, variety show, dan anime dengan subtitle dan kualitas terbaik.",
    rating: 4.99,
    warranty: "Full Garansi",
    devices: "1",
    features: [
      "Tontonan Eksklusif iQIYI",
      "Drama Korea & China HD",
      "Tanpa Iklan",
      "Akses Awal Episode Baru",
      "Download Offline",
    ],
    variants: [
      { name: "Sharing Plan Standard 1 Bulan", price: "Rp 7.000" },
      { name: "Sharing Plan Standard 3 Bulan", price: "Rp 10.000", discount: "Save 47%" },
      { name: "Sharing Plan Standard 1 Tahun", price: "Rp 20.000", discount: "Save 75%" },
      { name: "Sharing Plan Premium 1 Bulan", price: "Rp 10.000" },
      { name: "Sharing Plan Premium 3 Bulan", price: "Rp 15.000", discount: "Save 43%" },
      { name: "Sharing Plan Premium 1 Tahun", price: "Rp 40.000", discount: "Save 68%" },
      { name: "Private Plan Standard 1 Bulan", price: "Rp 25.000" },
      { name: "Private Plan Premium 1 Bulan", price: "Rp 40.000" }
    ],
  },
  netflix: {
    id: "netflix",
    title: "Netflix Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Netflix adalah platform streaming global dengan film, series, dan dokumenter eksklusif dari seluruh dunia.",
    rating: 4.9,
    warranty: "Full Garansi",
    devices: "Sesuai Paket",
    features: [
      "Akun Pribadi / Profile",
      "Full Akses Netflix Original",
      "Film & Series Global",
      "Subtitle Indo & Multi Language",
      "4K Ultra HD (untuk Private)",
      "Semi Private (Netflix sharing yang bisa 2 Device)",
      "Private Account (dapat 5 profile dan login 5-10 Device)",
    ],
    variants: [
      { name: "Profile 1 Bulan (1P1U SHARING)", price: "Rp 30.000" },
      { name: "Private 1 Bulan (SEMI PRIVATE)", price: "Rp 45.000" },
      { name: "Private 1 Bulan (PRIVATE ACCOUNT)", price: "Rp 150.000" },
    ],
  },
  viu: {
    id: "viu",
    title: "VIU Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "VIU adalah layanan streaming drama Korea, variety show, dan film Asia terpopuler dengan subtitle lengkap.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "2",
    features: [
      "K-Drama & Variety Show HD",
      "Subtitle Indonesia Lengkap",
      "Tonton Tanpa Iklan",
      "Update Episode Cepat",
      "Download Offline",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 10.000" },
    ],
  },
  vidio: {
    id: "vidio",
    title: "Vidio Premier",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Tonton tayangan eksklusif Liga 1, Champions League, film lokal & internasional lewat Vidio Premier.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "Unlimited",
    features: [
      "Live Streaming Sepak Bola",
      "Film & Serial Lokal",
      "Liga 1 & Champions League",
      "Tanpa Iklan",
      "Multi-Device Support",
    ],
    variants: [
      { name: "1 Bulan (PLATINUM)", price: "Rp 30.000" },
      { name: "1 tahun (TV ONLY)", price: "Rp 10.000" },

    ],
  },
  wetv: {
    id: "wetv",
    title: "WeTV VIP",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "WeTV menyajikan drama China, Korea, anime, dan variety show Asia dengan kualitas HD dan subtitle lengkap.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "2",
    features: [
      "Drama Asia Populer",
      "Subtitle Indo & English",
      "Akses Episode Lebih Awal",
      "Bebas Iklan",
      "Offline Mode",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 25.000" },
      { name: "3 Bulan", price: "Rp 70.000" },
    ],
  },
  expressvpn: {
    id: "expressvpn",
    title: "ExpressVPN Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "VPN tercepat dan paling aman untuk membuka blokir konten global, menjaga privasi, dan bebas streaming di seluruh dunia.",
    rating: 4.9,
    warranty: "Full Garansi",
    devices: "1",
    features: [
      "Kecepatan Tinggi & Stabil",
      "Lokasi Server Global (90+ Negara)",
      "Privasi Tanpa Log",
      "Bypass Netflix, Disney+, Hulu",
      "Koneksi 5 Perangkat Sekaligus",
    ],
    variants: [{ name: "1 Bulan", price: "Rp 15.000" }],
  },
  hmavpn: {
    id: "hmavpn",
    title: "HMA VPN Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "VPN dengan fitur koneksi cepat, interface mudah digunakan, dan server luas untuk akses global.",
    rating: 4.99,
    warranty: "Full Garansi",
    devices: "5",
    features: [
      "Server di 190+ Lokasi",
      "Bypass Website Terblokir",
      "Privasi & Enkripsi Aman",
      "Auto IP Shuffle",
      "No Log Policy",
      "Akun dari Admin",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 15.000" },
    ],
  },
  surfsharkvpn: {
    id: "surfsharkvpn",
    title: "Surfshark VPN",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "VPN terbaik dengan koneksi tanpa batas perangkat, cocok untuk keluarga atau tim kecil.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "Unlimited",
    features: [
      "Koneksi Unlimited Devices",
      "Bypass Region & Sensor",
      "Kill Switch & Camouflage Mode",
      "Streaming Global Tanpa Lag",
      "No Logs & Enkripsi Kuat",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 35.000" },
      { name: "3 Bulan", price: "Rp 95.000" },
    ],
  },
  gdrive: {
    id: "gdrive",
    title: "Google Drive Unlimited",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Penyimpanan cloud Google dengan kapasitas besar, cocok untuk backup data, file kerja, maupun tim kolaborasi.",
    rating: 5.0,
    warranty: "Lifetime",
    devices: "Multi Perangkat",
    features: [
      "Unlimited Storage (Team Drive)",
      "Aman & Terintegrasi Gmail",
      "Sinkronisasi Multi Perangkat",
      "Bisa Share Link ke Publik",
      "GARANSI LOGIN SELAMA 1 TAHUN",
      "AKUN SUDAH TERDAFTAR DI GOOGLE",
      "100GB REQUEST EMAIL SENDIRI, 300GB DAN 1024GB AKUN DARI ADMIN",
    ],
    variants: [
      { name: "1 TAHUN 100GB", price: "Rp 50.000" },
      { name: "1 TAHUN 300GB", price: "Rp 70.000", discount: "Save 54%" },
      { name: "1 TAHUN 1024GB", price: "Rp 90.000", discount: "Save 83%" }
    ],
  },
  vcc: {
    id: "vcc",
    title: "Virtual Credit Card (VCC)",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Kartu virtual internasional untuk verifikasi akun PayPal, transaksi digital, trial platform luar negeri, dan pembelian digital.",
    rating: 4.99,
    warranty: "Sekali Pakai / Bulanan",
    devices: "Digunakan via Email",
    features: [
      "Kartu Visa / MasterCard Virtual",
      "Cocok untuk PayPal, Netflix, dll",
      "Limit Custom sesuai kebutuhan",
      "Bisa Digunakan untuk Trial (ChatGPT, Canva, dll)",
      "Proses Cepat & Aman",
    ],
    variants: [
      { name: "Limit $1 (Trial)", price: "Rp 15.000" },
      { name: "Limit $5", price: "Rp 45.000" },
      { name: "Limit $10", price: "Rp 80.000" },
    ],
  },
  spotify: {
    id: "spotify",
    title: "Spotify Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Layanan streaming musik bebas iklan dengan kualitas suara tinggi dan akses playlist tanpa batas.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "1 Akun (Personal / Family)",
    features: [
      "Bebas Iklan",
      "Download Lagu Offline",
      "Kualitas Audio Lebih Tinggi",
      "Tanpa Batas Skip Lagu",
      "Bisa Join Family Plan",
    ],
    variants: [
      { name: "1 Bulan ", price: "Rp 20.000" },
      { name: "2 Bulan ", price: "Rp 30.000" },
      { name: "3 Bulan ", price: "Rp 45.000" },
    ],
  },
  wattpad: {
    id: "wattpad",
    title: "Wattpad Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Nikmati cerita dan novel tanpa iklan, akses chapter eksklusif, dan baca offline dengan Wattpad Premium.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "1 Akun",
    features: [
      "Tanpa Iklan",
      "Baca Offline",
      "Akses Cerita Eksklusif Premium",
      "Mode Gelap",
      "Dukungan Penulis",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 8.000" },
    ],
  },
  scribd: {
    id: "scribd",
    title: "Scribd Premium",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Baca dan unduh e-book, audiobook, jurnal, dan dokumen premium dari berbagai bidang pengetahuan.",
    rating: 5.0,
    warranty: "Full Garansi",
    devices: "Multi Perangkat",
    features: [
      "Akses e-Book dan Audiobook Premium",
      "Unduh File PDF / DOC",
      "Tanpa Iklan",
      "Akses Jurnal Internasional",
      "Support PDF Unlock & Save",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 10.000" },
    ],
  },
  zoom: {
    id: "zoom",
    title: "Zoom Pro Account",
    image: "/gambar/gambarleading.png",
    bgImage: "/gambar/gambarleading.png",
    description:
      "Akun Zoom Pro dengan fitur meeting hingga 30 jam, cocok untuk bisnis, webinar, atau kelas online.",
    rating: 4.9,
    warranty: "Full Garansi",
    devices: "1 Akun",
    features: [
      "Meeting Hingga 30 Jam",
      "Rekam Otomatis (Cloud & Lokal)",
      "Tanpa Batas Waktu Meeting",
      "Akses Admin Dashboard",
      "Bisa Join Webinar Premium",
      "100 PESERTA",
    ],
    variants: [
      { name: "1 Bulan", price: "Rp 5.500" },
    ],
  },
"picsart": {
  "id": "picsart",
  "title": "Picsart Premium",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "Editor foto dan video all-in-one dengan fitur AI, efek premium, dan alat desain lengkap tanpa watermark.",
  "rating": 5.0,
  "warranty": "Full Garansi",
  "devices": "1 Akun / Login",
  "features": [
    "Tanpa Watermark",
    "Akses Efek Premium & AI Tools",
    "Fitur Background Remover Otomatis",
    "Template Siap Pakai (Foto & Video)",
    "Tanpa Iklan, Cocok untuk Desain Cepat"
  ],
  "variants": [
    { "name": "1 Bulan", "price": "Rp 10.000" },
  ]
},
"moviebox": {
  "id": "moviebox",
  "title": "MovieBox Pro VIP",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "Aplikasi streaming film dan serial TV dengan kualitas tinggi, bebas iklan, dan update film terbaru secara cepat.",
  "rating": 4.9,
  "warranty": "Full Garansi",
  "devices": "1 Akun / Device",
  "features": [
    "Tanpa Iklan",
    "Tersedia Kualitas 1080p / 4K",
    "Support Subtitle Bahasa Indonesia",
    "Update Film Terbaru Cepat",
    "Support Chromecast & Smart TV"
  ],
  "variants": [
    { "name": "1 Bulan", "price": "Rp 25.000" },
  ]
},
"primevideo": {
  "id": "primevideo",
  "title": "Amazon Prime Video",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "Platform streaming dari Amazon dengan koleksi film eksklusif, serial populer, dan konten original Prime.",
  "rating": 5.0,
  "warranty": "Full Garansi",
  "devices": "1 Akun (Support Smart TV / HP)",
  "features": [
    "Tonton Film & Serial Original Prime",
    "Kualitas HD & 4K",
    "Support Subtitle Indonesia",
    "Tanpa Iklan",
    "Bisa Share Akun ke 2-3 Device"
  ],
  "variants": [
    { "name": "1 Bulan", "price": "Rp 15.000" },
  ]
},
"rctiplus": {
  "id": "rctiplus",
  "title": "RCTI+ Premium",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "Layanan streaming resmi MNC Group yang menghadirkan siaran TV lokal, film, series Indonesia, dan konten eksklusif.",
  "rating": 4.9,
  "warranty": "Full Garansi",
  "devices": "1 Akun / Multi Device",
  "features": [
    "Akses Live TV Lokal (RCTI, GTV, MNCTV, iNews)",
    "Film & Serial Lokal Eksklusif",
    "Tanpa Iklan di Konten Premium",
    "Nonton Ulang Acara Favorit",
    "Support di HP & Smart TV"
  ],
  "variants": [
    { "name": "1 Bulan", "price": "Rp 30.000" },
  ]
},
"shortmax": {
  "id": "shortmax",
  "title": "Shortmax Premium",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "Layanan streaming dengan fokus film pendek, konten lokal Afrika, serta berbagai serial eksklusif dari Showmax/Shortmax.",
  "rating": 4.9,
  "warranty": "Full Garansi",
  "devices": "1 Akun / 1 Device",
  "features": [
    "Streaming Film & Serial Afrika",
    "Film Pendek Eksklusif",
    "Support Subtitle Inggris / Lokal",
    "Kualitas SD hingga HD",
    "Cocok untuk Pecinta Film Independen"
  ],
  "variants": [
    { "name": "1 Bulan", "price": "Rp 20.000" },
    { "name": "1 Tahun", "price": "Rp 50.000" }
  ]
},
"surfshark": {
  "id": "surfshark",
  "title": "Surfshark VPN Premium",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "VPN cepat dan aman dengan fitur anti-pelacak, akses konten global tanpa batas, serta koneksi unlimited device.",
  "rating": 5.0,
  "warranty": "Full Garansi",
  "devices": "Unlimited Device",
  "features": [
    "Akses Website & Streaming Global",
    "Kecepatan Tinggi & Stabil",
    "Fitur CleanWeb (Blokir Iklan & Malware)",
    "No Logs Policy (Privasi Terjaga)",
    "Support PC, HP, dan Smart TV"
  ],
  "variants": [
    { "name": "2 Bulan", "price": "Rp 25.000" },
  ]
},
"vision": {
  "id": "vision",
  "title": "VISION+ Premium",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "Platform streaming milik MNC Vision yang menyajikan siaran TV lokal dan internasional, serial Indonesia, serta channel eksklusif.",
  "rating": 4.9,
  "warranty": "Full Garansi",
  "devices": "1 Akun / 2 Device",
  "features": [
    "Live TV Lokal & Internasional",
    "Serial & Film Indonesia Eksklusif",
    "Support Smart TV & HP",
    "Tersedia Konten Anak & Olahraga",
    "Tanpa Iklan di Konten Premium",
    "VISION KHUSUS TIMNAS, CUMA BISA UNTUK TIMNAS, YANG LAIN TETAP KE LOCK"
  ],
  "variants": [
    { "name": "1 Bulan (VISION KHUSUS TIMNAS)", "price": "Rp 10.000" },
    { "name": "1 Bulan (VISION+)", "price": "Rp 30.000" },
    { "name": "1 BULAN (RCTI+ & VISION)", "price": "Rp 40.000" }
  ]
},
"wink": {
  "id": "wink",
  "title": "Wink Premium",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "Aplikasi editing foto wajah dengan efek beautify, makeup virtual, dan filter real-time. Cocok untuk selfie dan konten kreator.",
  "rating": 5.0,
  "warranty": "30 hari",
  "devices": "1 Akun / 1 Device",
  "features": [
    "Efek Beautify Otomatis",
    "Filter Wajah & Makeup AR",
    "Pencahayaan & Tone Kulit Presisi",
    "Export Kualitas HD",
    "Support Android & iOS"
  ],
  "variants": [
    { "name": "1 Bulan", "price": "Rp 7.000" },
    { "name": "3 Bulan", "price": "Rp 15.000" },
    { "name": "6 Bulan", "price": "Rp 20.000" }
  ]
},
"youku": {
  "id": "youku",
  "title": "YOUKU Premium",
  "image": "/gambar/gambarleading.png",
  "bgImage": "/gambar/gambarleading.png",
  "description": "Platform streaming populer asal Tiongkok yang menyajikan drama Mandarin, variety show, dan film eksklusif dari Asia Timur.",
  "rating": 5.0,
  "warranty": "30 hari",
  "devices": "1 Akun / 2 Device",
  "features": [
    "Drama Mandarin & Asia Eksklusif",
    "Kualitas HD dan Bebas Iklan",
    "Support Subtitle Multi-Bahasa",
    "Update Episode Harian",
    "Bisa Ditonton di HP & Smart TV"
  ],
  "variants": [
    { "name": "1 Bulan", "price": "Rp 15.000" },
    { "name": "6 Bulan", "price": "Rp 30.000" }
  ]
}





  // Add more account details as needed
};
