export const content = {
  hero: {
    title: "15 Years of Excellence in Education",
    subtitle: "Zenith Private Care: Building bright futures since 2012",
    cta: "Admission Open",
    stats: [
      { label: "GPA-5 Achievers", value: "135+" },
      { label: "Years Experience", value: "15+" },
      { label: "Success Rate", value: "100%" },
    ]
  },
  about: {
    title: "Why Choose Zenith?",
    features: [
      { title: "Multimedia Classrooms", description: "Modern learning with smart boards.", icon: "MonitorPlay" },
      { title: "Separate Shifts", description: "Distinct schedules for boys and girls.", icon: "Users" },
      { title: "CCTV Monitored", description: "Full campus security.", icon: "ShieldCheck" },
      { title: "Weekly Model Tests", description: "Regular assessment to track progress.", icon: "FileCheck" }
    ]
  },
  success: {
    title: "Our Hall of Fame",
    subtitle: "Consistently producing top results in SSC & HSC",
    years: [
      { year: "2025", count: 29, label: "GPA-5 (SSC)" },
      { year: "2024", count: 26, label: "GPA-5 (SSC)" },
      { year: "2023", count: 17, label: "GPA-5 (SSC)" },
      { year: "2022", count: 15, label: "GPA-5 (SSC)" },
      { year: "2025", count: 12, label: "GPA-5 (HSC)" },
      { year: "2024", count: 14, label: "GPA-5 (HSC)" },
      { year: "2023", count: 10, label: "GPA-5 (HSC)" },
      { year: "2022", count: 8,  label: "GPA-5 (HSC)" },
    ]
  },
  faculty: {
    // NEW: Principal Section
    principal: {
      id: "principal",
      name: "Mizanur Rahman Sir",
      role: "Principal & Founder",
      subject: "English",
      qualifications: "BA (Honors), MA (English), Dhaka University",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", // Demo Image
      message: "At Zenith, we believe in nurturing not just students, but future leaders. Our discipline and care set us apart."
    },
    // Added IDs and placeholder images for dynamic routing
    hsc: [
      { id: "shakil-sir", name: "Shakil Sir", subject: "English", qualifications: "BSc (Honors), MSc (CSE)", image: "https://ui-avatars.com/api/?name=Shakil+Sir&background=random" },
      { id: "yasin-sir", name: "Yasin Sir", subject: "English", qualifications: "BA (Honors), THM, Dhaka University", image: "https://ui-avatars.com/api/?name=Yasin+Sir&background=random" },
      { id: "tohid-sir", name: "Tohid Sir", subject: "ICT", qualifications: "BSc (Honors), MSc (CSE)", image: "https://ui-avatars.com/api/?name=Tohid+Sir&background=random" },
      { id: "shahin-sir", name: "Shahin Sir", subject: "ICT", qualifications: "BSc (Honors), MSc (CSE)", image: "https://ui-avatars.com/api/?name=Shahin+Sir&background=random" },
      { id: "bulbul-sir", name: "Bulbul Sir", subject: "Higher Math", qualifications: "BSc, MSc (Math), Asst. Prof. HR Memorial College", image: "https://ui-avatars.com/api/?name=Bulbul+Sir&background=random" },
      { id: "mahmud-sir", name: "Mahmud Sir", subject: "Chemistry", qualifications: "BSc, MSc (Chem), Lecturer Dr. Afzal Hossain College", image: "https://ui-avatars.com/api/?name=Mahmud+Sir&background=random" },
      { id: "abir-sir", name: "Abir Sir", subject: "Physics", qualifications: "BSc (Math), Govt. Titumir College", image: "https://ui-avatars.com/api/?name=Abir+Sir&background=random" },
      { id: "mobarak-sir", name: "Mobarak Sir", subject: "Biology", qualifications: "BSc, MSc (Zoology), Lecturer Giasuddin Islamic Model College", image: "https://ui-avatars.com/api/?name=Mobarak+Sir&background=random" },
      { id: "mithu-sir", name: "Mithu Sir", subject: "Accounting", qualifications: "BBA, MBA (Management), Dhaka College", image: "https://ui-avatars.com/api/?name=Mithu+Sir&background=random" },
      { id: "abid-sir", name: "Abid Sir", subject: "Finance", qualifications: "BBA, MBA (Accounting), Govt. Titumir College", image: "https://ui-avatars.com/api/?name=Abid+Sir&background=random" },
      { id: "main-sir", name: "Main Sir", subject: "Marketing", qualifications: "BBA, MBA (Accounting), Suhrawardy College", image: "https://ui-avatars.com/api/?name=Main+Sir&background=random" },
    ],
    ssc: [
      { id: "jewel-sir", name: "Jewel Sir", subject: "Bangla & Arts", qualifications: "BSS (Honors), MSS (Political Science)", image: "https://ui-avatars.com/api/?name=Jewel+Sir&background=random" },
      { id: "limon-sir", name: "Limon Sir", subject: "Bangla & Arts", qualifications: "BA (Honors), Economics", image: "https://ui-avatars.com/api/?name=Limon+Sir&background=random" },
      { id: "dipu-sir", name: "Dipu Sir", subject: "Bangla & B.GS", qualifications: "BBA (Honors), Accounting", image: "https://ui-avatars.com/api/?name=Dipu+Sir&background=random" },
      { id: "belal-sir", name: "Belal Sir", subject: "Math & Higher Math", qualifications: "BSc (Honors), MSc (EEE)", image: "https://ui-avatars.com/api/?name=Belal+Sir&background=random" },
      { id: "emdadul-sir", name: "Emdadul Sir", subject: "Math & Higher Math", qualifications: "BSc (Honors), MSc (Math)", image: "https://ui-avatars.com/api/?name=Emdadul+Sir&background=random" },
      { id: "shaon-sir", name: "Shaon Sir", subject: "Math & Higher Math", qualifications: "BSc (Honors), MSc (Math)", image: "https://ui-avatars.com/api/?name=Shaon+Sir&background=random" },
      { id: "rajib-sir", name: "Rajib Sir", subject: "Math & Higher Math", qualifications: "BSc (Honors), MSc (Chemistry)", image: "https://ui-avatars.com/api/?name=Rajib+Sir&background=random" },
      { id: "roni-sir", name: "Roni Sir", subject: "Physics", qualifications: "BSc (Honors), MSc (EEE)", image: "https://ui-avatars.com/api/?name=Roni+Sir&background=random" },
      { id: "nahid-sir", name: "Nahid Sir", subject: "Chemistry", qualifications: "BSc (Honors), Biochemistry & Molecular Biology", image: "https://ui-avatars.com/api/?name=Nahid+Sir&background=random" },
      { id: "nurullah-sir", name: "Nurullah Sir", subject: "Chemistry", qualifications: "BSc (Honors), Chemistry", image: "https://ui-avatars.com/api/?name=Nurullah+Sir&background=random" },
      { id: "milon-sir", name: "Milon Sir", subject: "Science & ICT", qualifications: "BA (Honors), MA (Economics)", image: "https://ui-avatars.com/api/?name=Milon+Sir&background=random" },
      { id: "rayhan-sir", name: "Rayhan Sir", subject: "Accounting & Finance", qualifications: "BBA (Honors), MBA (Accounting)", image: "https://ui-avatars.com/api/?name=Rayhan+Sir&background=random" },
    ]
  },
  contact: {
    address: "2 No Noor Mosque Road, Nandipara, Khilgaon, Dhaka",
    phone: ["01517125331", "01936311935"],
    email: "zpc2012.edu@gmail.com",
    facebook: "zenith.privatecare"
  }
};