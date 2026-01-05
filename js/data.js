/**
 * Mock Data for DTU Timetable Scheduler
 * Structure refined for easy manual entry (Skeleton)
 */

const BRANCHES = [
    'Bio-Technology (BT)',
    'Chemical Engineering (CHE)',
    'Civil Engineering (CE)',
    'Computer Science and Engineering (CSE)',
    'Computer Science and Engineering (Data Science) (CSDA)',
    'Electronics and Communication Engineering (ECE)',
    'Electronics Engineering (VLSI) (EVDT)',
    'Electrical Engineering (EE)',
    'Environmental Engineering (ENE)',
    'Engineering Physics (EP)',
    'Information Technology (IT)',
    'Information Technology (Cyber Security) (ITCY)',
    'Mathematics and Computing (MCE)',
    'Mechanical Engineering (ME)',
    'Mechanical Engineering (Auto) (MAM)',
    'Production and Industrial Engineering (PIE)',
    'Software Engineering (SE)'
];

const SECTIONS = {
    'BT': [1],
    'CHE': [1],
    'CE': [1, 2],
    'CSE': [1, 2, 3, 4, 5, 6],
    'CSDA': [1],
    'ECE': [1, 2, 3],
    'EE': [1, 2, 3, 4, 5],
    'EVDT': [1],
    'ENE': [1],
    'EP': [1, 2],
    'IT': [1, 2],
    'ITCY': [1],
    'MCE': [1, 2, 3],
    'ME': [1, 2, 3, 4],
    'MAM': [1],
    'PIE': [1],
    'SE': [1, 2, 3],
    'default': [1, 2]
};

const UNIVERSITY_INFO = {
    identity: {
        name: "Delhi Technological University (DTU)",
        formerly: "Delhi College of Engineering (DCE)",
        established: 1941,
        status: "Delhi State University",
        campus: {
            main: "164 acres (Rohini Campus)",
            east: "Vivek Vihar (USME)",
            narela: "Planned Research Park"
        },
        motto: "Knowledge is the ultimate truth",
        address: "Shahbad Daulatpur, Main Bawana Road, Delhi, 110042",
        contact: {
            general: "011-27871018",
            hostel: "Check specific hostel office for warden details",
            security: "Available 24/7 (Main Gate & Back Gate)",
            admission: "011-27871022",
            medical: "DTU Health Centre (Open 24/7 for emergencies)",
            library: "011-27871018 Ext 1111",
            xerox: "Available at MicMac, Nescii, and Science Block (Late night at MicMac)"
        },
        metro: {
            closest: "Samaypur Badli (Yellow Line) - 2.5km",
            alternative: "Rithala (Red Line) - 4.5km",
            tip: "E-Rickshaws from Samaypur Badli cost ₹10 (sharing) or ₹40 (full). Walk out from Gate 2 for better rates."
        }
    },
    admission_2024: {
        exam: "JEE Main via JAC Delhi",
        cutoffs_round_5: [
            { branch: "CSE", delhi: 13567, outside: 6406 },
            { branch: "IT", delhi: 17916, outside: 8500 },
            { branch: "SE", delhi: 21614, outside: 10200 },
            { branch: "MCE", delhi: 24053, outside: 11000 },
            { branch: "ECE", delhi: 28173, outside: 15400 },
            { branch: "EE", delhi: 37098, outside: 18900 },
            { branch: "ME", delhi: 56014, outside: 22800 },
            { branch: "CE", delhi: 71914, outside: 28180 },
            { branch: "BT", delhi: 76007, outside: 26859 }
        ],
        tip: "Internal upgradation rounds can sometimes jump ranks by 5-10k in lower branches."
    },
    placements_2024_2025: {
        stats_2024: [
            { branch: "COE", avg: "17.21 LPA", max: "85.30 LPA", international: "1.8 Cr" },
            { branch: "SE", avg: "21.54 LPA", max: "64.00 LPA" },
            { branch: "IT", avg: "16.23 LPA", max: "51.00 LPA" },
            { branch: "ECE", avg: "16.61 LPA", max: "85.30 LPA" },
            { branch: "MCE", avg: "18.90 LPA", max: "85.30 LPA" },
            { branch: "BT", avg: "10.25 LPA", max: "35.00 LPA" }
        ],
        trends_2025: "Heavy focus on AI/ML Engineer roles and Quant profiles in FinTech. Non-tech roles in HFTs offering 60LPA+."
    },
    hostels: {
        boys: [
            { id: "ABH", name: "Aryabhatta", capacity: 171, mess: "In-hostel", note: "First-year paradise." },
            { id: "BCH", name: "Bhaskaracharya", capacity: 177, mess: "External" },
            { id: "APJ", name: "APJ Abdul Kalam", capacity: 312, note: "Premium AC rooms.", fees: "₹72,000/yr" },
            { id: "CVR", name: "C.V. Raman", capacity: 150 },
            { id: "HJB", name: "Homi J. Bhabha", capacity: 163 }
        ],
        girls: [
            { id: "VLB", name: "Virangana Lakshmibai", capacity: 669, note: "Newest AC hostel.", fees: "₹72,000/yr" },
            { id: "KCH", name: "Kalpana Chawla", capacity: 39 },
            { id: "SNH", name: "Sister Nivedita", capacity: 85 }
        ],
        hacks: "Apply early for AC hostels as they fill up within hours of the portal opening. Back gate entry is strictly monitored after 11 PM."
    },
    departments_and_labs: [
        { 
            dept: "Computer Science (CSE/IT/SE)", 
            labs: ["Operating Systems", "Database Management", "Computer Vision", "Cyber Security Center", "High-Performance Computing"]
        },
        { 
            dept: "Electronics (ECE/EVDT)", 
            labs: ["VLSI Design", "Microwave Engg", "Communication Systems", "Microprocessor Lab", "VDSemiX Center"]
        },
        { 
            dept: "Mechanical & Production (ME/PIE/MAM)", 
            labs: ["Auto/IC Engine", "Robotics & FMS", "CNC Lab", "Heat Transfer", "Sand Testing", "CAD/CAM Center"]
        },
        { 
            dept: "Civil Engineering (CE)", 
            labs: ["Earthquake Technology", "Transportation Engg", "GIS & Remote Sensing", "Soil Mechanics", "Structures Lab"]
        },
        { 
            dept: "Biotechnology (BT)", 
            labs: ["Molecular Biology", "Bioprocess Engg", "Stem Cell Research", "Nano-Bioelectronics", "Genome Informatics"]
        },
        { 
            dept: "Applied Physics (EP)", 
            labs: ["Thin Film & Material Science", "Fiber Optics", "Advanced Optics", "2DTU Lab", "Computational Physics"]
        }
    ],
    faculty_hall_of_fame: [
        { name: "Dr. Indu Mehrotra", dept: "Chemistry", review: "The 'Grandmother of DTU'. Strict but life-changing advice. Don't be late." },
        { name: "Dr. Ruchika Malik", dept: "CSE/Maths", review: "Best for Linear Algebra. Her notes are gold for GATE/CAT." },
        { name: "Dr. Rajeev Kumar", dept: "CSE", review: "Legendary methodology. If you survive his class, you can survive Google interviews." },
        { name: "Dr. S. Indu", dept: "ECE", review: "Head of Computer Vision center. The go-to mentor for AI research papers." },
        { name: "Mr. Manoj Kumar", dept: "Humanities", review: "Public Speaking god. His assignments forces you to break out of your shell." }
    ],
    research_centers: [
        { name: "2DTU", focus: "Photonics & Fiber Optics", note: "Highly cited research papers globally." },
        { name: "Center for Excellence in AI", focus: "ML/Deep Learning", note: "Equipped with NVIDIA DGX systems." },
        { name: "Nanotechnology Lab", focus: "Material Science", note: "Advanced scanning electron microscopes." },
        { name: "USME Innovation Hub", focus: "FinTech & Management", note: "Located at East Campus." }
    ],
    societies: {
        technical: [
            { name: "IEEE DTU", focus: "Electronics/CS", note: "Organizes Troika (annual tech fest)." },
            { name: "ASME DTU", focus: "Mechanical", note: "Top-tier robotics projects." },
            { name: "SR-DTU", focus: "Robotics", note: "Builds world-class humanoid and service robots." },
            { name: "IOSD DTU", focus: "Open Source", note: "Great for developers." },
            { name: "UAS DTU", focus: "Drones", note: "Global champions in Unmanned Systems." },
            { name: "Team Defianz Racing", focus: "Formula Student", note: "Builds F1-style race cars." },
            { name: "Inferno DTU", focus: "Mars Rover", note: "International winners in Rover Challenge." },
            { name: "DTU Solar Car", focus: "Clean Energy", note: "Built India's first solar passenger car." }
        ],
        cultural: [
            { name: "Pratibimb", note: "Dramatics society (Street and Stage)." },
            { name: "Vibe / DanceSoc", note: "Multiple forms: western, classical, hip-hop." },
            { name: "Madhurima", note: "The Music society (Vocals & Instrumental)." },
            { name: "Kalakriti", note: "Fine arts, graffiti, and creative design." },
            { name: "Panache", note: "Fashion and lifestyle." }
        ],
        literary_finance: [
            { name: "Yuvaan", note: "The official literary fest team." },
            { name: "Sahitya", note: "Debating and book club." },
            { name: "E-Cell DTU", note: "Startup incubation and entrepreneurship." },
            { name: "Assets", note: "Stock market, finance, and trading fans." },
            { name: "IFSA DTU", note: "Finance and consulting wing." },
            { name: "Quiz Club", note: "Known as Delhi 42." }
        ]
    },
    sports_and_fitness: {
        facilities: [
            { name: "Gym", note: "Separate sections for Boys and Girls. High-end equipment." },
            { name: "Sports Stadium", note: "Olympic-sized track and football field." },
            { name: "Indoor Courts", note: "Badminton, Table Tennis, and Squash." },
            { name: "Outdoor Courts", note: "Basketball, Tennis, and Volleyball (Lit for night play)." }
        ],
        events: [
            { name: "Aahvaan", type: "Annual Sports Fest", note: "One of the biggest sports events in Delhi." }
        ]
    },
    senior_hacks: [
        { spot: "MicMac Canteen", tip: "Get the 'Night Maggi' if you're studying late (open till 2 AM)." },
        { spot: "Raj Soin Hall", tip: "Best Chole Chawal for ₹50. Central hub for socializing." },
        { spot: "OAT (Open Air Theatre)", tip: "Best place to chill during winter afternoons. Great acoustics for practice." },
        { spot: "Science Block Rooftop", tip: "Hidden spot with the best view of the entire 164-acre campus." },
        { spot: "Back Gate Rickshaws", tip: "Walking to the main road saves you ₹10 compared to taking a rickshaw from inside." },
        { spot: "Health Centre", tip: "Open 24/7. Keep your ID card handy for free basic medicines." },
        { spot: "Central Library", tip: "Use the 'SPS' (Special Study Areas) for absolute silence. Best for end-sem prep." },
        { spot: "Admin Block", tip: "Visit before 11 AM for faster processing of forms. window 4 is the most active." },
        { spot: "Nescii SAC", tip: "Great for collaborative work and societal meets. Free Wi-Fi is strongest here." }
    ],
    food_and_social: {
        spots: [
            { name: "MicMac", recommendation: "The 'Cheese Maggi' and 'Cold Coffee' are legendary." },
            { name: "Raj Soin", recommendation: "Economic thalis and great North Indian food." },
            { name: "Nescii Canteen", recommendation: "Best for snacks and quick burgers." },
            { name: "Amul / Mother Dairy", recommendation: "Perfect for quick ice-cream/milk shakes in summers." }
        ]
    },
    mess_timings: {
        breakfast: "7:30 AM - 9:00 AM",
        lunch: "12:30 PM - 2:15 PM",
        snacks: "4:45 PM - 6:00 PM",
        dinner: "7:30 PM - 9:15 PM"
    },
    electives_guide: {
        high_scoring_gec_vac: [
            { name: "Public Speaking", avg_gp: 9.76, dept: "Humanities", tip: "Super chill. Just give your speeches and don't miss labs. Guaranteed 10 CG if you're even slightly confident." },
            { name: "Communicative Hindi", avg_gp: 9.5, dept: "Humanities", tip: "Best for those who know basic Hindi. Very little theory, mostly interactive." },
            { name: "Extension Outreach Activities", avg_gp: 9.26, tip: "Great for social impact and easy GP. Usually involves a field visit/poster." },
            { name: "Emotional Intelligence", avg_gp: 9.07, tip: "Theory based but very logical. Easy to score if you read the PPTs once." },
            { name: "Logical Reasoning", avg_gp: 8.78, tip: "Practical and useful for CAT/Placements. Moderate effort needed." },
            { name: "Innovation and Entrepreneurship", avg_gp: 8.92, tip: "Fun projects, great faculty usually." },
            { name: "Art of Happy Living", avg_gp: 9.81, tip: "The ultimate legend elective. Pick it if you see it. It's essentially meditation and basic life stuff." },
            { name: "Digital Marketing", avg_gp: 9.15, tip: "Group projects are key. Learn SEO/SEM basics beforehand." },
            { name: "French / German", avg_gp: 8.50, tip: "Only take if you are serious about languages. Daily attendance often mandatory." }
        ],
        department_electives_dec: {
            "CSE": [
                 { name: "Cloud Computing", difficulty: "Moderate", utility: "High for backend roles." },
                 { name: "Computer Vision", difficulty: "High", utility: "Essential for AI research." }
            ],
            "ECE": [
                 { name: "Robotics", difficulty: "Moderate", utility: "Fun practicals." },
                 { name: "Antenna Design", difficulty: "Hard", utility: "Core ECE jobs only." }
            ]
        },
        tough_ones: [
            { name: "Deep Learning", avg_gp: 6.84, tip: "Pick ONLY if you are a math god or CSE/IT/SE student with projects. Grading is absolute." },
            { name: "Distributed Systems", avg_gp: 7.12, tip: "High workload. Only for those serious about backend engineering." },
            { name: "Advanced Control Systems", avg_gp: 6.5, tip: "Avoid unless you love Laplace transforms." }
        ],
        new_courses: [
            "VAC-Vivek Marg (Character Building)",
            "AEC-Cyber Security (Essential for all)",
            "GEC-Financial Literacy (Great for non-tech)",
            "GEC-Personal Finance & Tax Planning"
        ],
        hacks: "AEC/VAC registration happens on a first-come, first-served basis on the portal. Be ready at 10:00 AM sharp on the date mentioned in the buzz section."
    },
    resource_map: {
        fresources: "https://fresources.tech/",
        branches: {
            CSE: "fresources.tech/dtu/cse",
            IT: "fresources.tech/dtu/it",
            ECE: "fresources.tech/dtu/ece",
            EE: "fresources.tech/dtu/ee",
            MCE: "fresources.tech/dtu/mce",
            ME: "fresources.tech/dtu/me",
            CE: "fresources.tech/dtu/ce",
            EP: "fresources.tech/dtu/ep",
            BT: "fresources.tech/dtu/bt"
        },
        sem_wise_hacks: {
            "Sem 1": "Foundational year. Focus on AM101 (Maths) & AP101 (Physics). Check folder 'First Year Common'.",
            "Sem 2": "Branch specific introduction. EE/ECE students check 'Circuit Theory' folder carefully.",
            "Sem 3": "Core subjects start. DSA for CSE, Analog for ECE. Use 'Standard Books' folder.",
            "Sem 4": "Heaviest labs. Copy lab manuals from 'Lab Files' folder on fresources.",
            "Sem 5": "Internship season. Check 'Coding Rounds' folder for company-specific archives."
        },
        organization: "Organized by Semester -> Branch -> Subject",
        pro_tip: "Search for 'PYQs' in the branch folder. For Maths-II (AM102), the 'Faculty PPTs' on fresources are 90% syllabus. Don't buy expensive books."
    },
    latest_buzz: {
        registration: "Even Semester (2025-26) Registration live from Dec 24 to Jan 5, 2026. Late fees apply after that.",
        admissions: "Ph.D. Winter Jan 2026 session interviews starting Jan 12.",
        scholarships: "Verification of NSP and MCM portal applications in progress at window 4, Admin block.",
        news: "DTU Team Defianz has qualified for Formula Student UK 2026!",
        official_portal: "https://result.dtu.ac.in/ (Check results for Odd Sem 2024-25 here)"
    },
    official_stats: {
        nirf_ranking: "Ranked #29 in Engineering (NIRF 2024).",
        highest_package: "₹1.8 Crore (International) by Palantir London.",
        total_students: "15,000+ across B.Tech, M.Tech, MBA, and PhD.",
        campus_area: "164 Acres (Rohini) + East Campus (Vivek Vihar).",
        library_books: "200,000+ volumes in Central Library."
    }
};


const TIME_SLOTS = [
    '8-9', '9-10', '10-11', '11-12', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'
];

/**
 * TIMETABLE SKELETON
 * Branch: Mathematics & Computing (MC)
 * Semester: 2
 * Sections: 1, 2, 3
 */
const TIMETABLE_SKELETON = {
    'MC': {
        '2': { // 2nd Semester
            '1': { // Section 1 (from Image 1)
                'Monday': {
                    '10-11': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (LAB)', venue: 'G1 ML Lab/G2 IS Lab/G3 DSCA Lab', professor: 'Anita Thakur' },
                    '11-12': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (LAB)', venue: 'G1 ML Lab/G2 IS Lab/G3 DSCA Lab', professor: 'Anita Thakur' },
                    '12-1': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P1-I(CL1)/P2-II(CL2)/P3-I(CL3)', professor: 'Naokant Deo' },
                    '1-2': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P1-I(CL1)/P2-II(CL2)/P3-I(CL3)', professor: 'Naokant Deo' },
                    '3-4': { code: 'MC102', subject: 'DISCRETE MATHEMATICS (L)', venue: 'PB-FF4', professor: 'Meenakshi Diwan' },
                    '4-5': { code: 'MC104', subject: 'COMPLEX ANALYSIS (L)', venue: 'PB-FF2', professor: 'Shubham Kumar Dhiman' },
                    '5-6': { code: 'MC104', subject: 'COMPLEX ANALYSIS (L)', venue: 'PB-FF2', professor: 'Shubham Kumar Dhiman' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '9-10': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (L)', venue: 'PB-GF3', professor: 'Anita Thakur' },
                    '12-1': { code: 'MC104', subject: 'COMPLEX ANALYSIS (L+T)', venue: 'SPS7', professor: 'Shubham Kumar Dhiman' }
                },
                'Wednesday': {
                    '12-1': { code: 'MC102', subject: 'DISCRETE MATHEMATICS (L)', venue: 'PB-FF3', professor: 'Meenakshi Diwan' },
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-FF2', professor: 'Naokant Deo' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '12-1': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P1-II(CL1)/P2-I(CL2)/P3-II(CL3)', professor: 'Naokant Deo' },
                    '1-2': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P1-II(CL1)/P2-I(CL2)/P3-II(CL3)', professor: 'Naokant Deo' },
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-FF2', professor: 'Naokant Deo' }
                },
                'Friday': {
                    '12-1': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'PB-FF2', professor: 'Naokant Deo / Dipesh' },
                    '3-4': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (L)', venue: 'PB-GF6', professor: 'Anita Thakur' },
                    '4-5': { code: 'MC102', subject: 'DISCRETE MATHEMATICS (L+T)', venue: 'PB-GF6', professor: 'Meenakshi Diwan' }
                }
            },
            '2': { // Section 2 (from Image 3)
                'Monday': {
                    '8-9': { code: 'MC104', subject: 'COMPLEX ANALYSIS (L)', venue: 'PB-FF2', professor: 'Aditya Kaushik' },
                    '11-12': { code: 'MC102', subject: 'DISCRETE MATHEMATICS (L)', venue: 'PB-FF3', professor: 'Meena Rawat' },
                    '2-3': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P4-I(CL1)/P5-I(CL2)/P6-I(CL3)', professor: 'Ramesh Srivastava' },
                    '3-4': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P4-I(CL1)/P5-I(CL2)/P6-I(CL3)', professor: 'Ramesh Srivastava' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '11-12': { code: 'MC104', subject: 'COMPLEX ANALYSIS (L+T)', venue: 'PB-FF3', professor: 'Aditya Kaushik' },
                    '2-3': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-FF3', professor: 'Payal' },
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'PB-FF3', professor: 'Payal / Drishti Vashisth' }
                },
                'Wednesday': {
                    '10-11': { code: 'MC102', subject: 'DISCRETE MATHEMATICS (L+T)', venue: 'PB-FF3', professor: 'Meena Rawat' },
                    '3-4': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (L)', venue: 'PB-FF1', professor: 'Anuradha Singhal' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P4-II(CL1)/P5-II(CL2)/P6-II(CL3)', professor: 'Ramesh Srivastava' },
                    '11-12': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P4-II(CL1)/P5-II(CL2)/P6-II(CL3)', professor: 'Ramesh Srivastava' },
                    '2-3': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (LAB)', venue: 'G1 ML Lab/G2 IS Lab/G3 DSCA Lab', professor: 'Anuradha Singhal' },
                    '3-4': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (LAB)', venue: 'G1 ML Lab/G2 IS Lab/G3 DSCA Lab', professor: 'Anuradha Singhal' }
                },
                'Friday': {
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-FF3', professor: 'Payal' },
                    '4-5': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (L)', venue: 'PB-FF3', professor: 'Anuradha Singhal' }
                }
            },
            '3': { // Section 3 (from Image 2)
                'Monday': {
                    '3-4': { code: 'MC104', subject: 'COMPLEX ANALYSIS (L)', venue: 'SPS7', professor: 'Dr. Pooja Yadav' },
                    '5-6': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'SPS7', professor: 'Rohit Kumar / Kriss Gunjan' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '9-10': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P7-II(CL1)/P8-II(CL2)/P9-II(CL3)', professor: 'Sangita Kansal' },
                    '11-12': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P7-II(CL1)/P8-II(CL2)/P9-II(CL3)', professor: 'Sangita Kansal' },
                    '12-1': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (L)', venue: 'PB-FF4', professor: 'Madhu' },
                    '2-3': { code: 'MC104', subject: 'COMPLEX ANALYSIS (L+T)', venue: 'PB-FF4', professor: 'Dr. Pooja Yadav' }
                },
                'Wednesday': {
                    '10-11': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P7-I(CL1)/P8-I(CL2)/P9-I(CL3)', professor: 'Sangita Kansal' },
                    '11-12': { code: 'SEC-1 (MC106)', subject: 'MATLAB PROGRAMMING (LAB)', venue: 'P7-I(CL1)/P8-I(CL2)/P9-I(CL3)', professor: 'Sangita Kansal' },
                    '1-2': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (L)', venue: 'PB-FF3', professor: 'Madhu' },
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-FF3', professor: 'Rohit Kumar' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'MC102', subject: 'DISCRETE MATHEMATICS (L)', venue: 'SPS 8', professor: 'Dr. Anuma Garg' },
                    '12-1': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (LAB)', venue: 'G1 ML Lab/G2 IS Lab/G3 DSCA Lab', professor: 'Madhu' },
                    '1-2': { code: 'CO102', subject: 'PROGRAMMING FUNDAMENTALS (LAB)', venue: 'G1 ML Lab/G2 IS Lab/G3 DSCA Lab', professor: 'Madhu' },
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-FF1', professor: 'Rohit Kumar' }
                },
                'Friday': {
                    '9-10': { code: 'MC102', subject: 'DISCRETE MATHEMATICS (L+T)', venue: 'PB-FF3', professor: 'Dr. Anuma Garg' }
                }
            }
        }
    },
    'CSE': {
        '2': { // 2nd Semester
            '1': { // Section 1 (from Screenshot 2026-01-05 203804.png)
                'Monday': {
                    '9-10': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PB-GF4', professor: 'Manoj Kumar' },
                    '11-12': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF4', professor: 'Jamkhongam Touthang' },
                    '12-1': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'PB-GF4', professor: 'Jamkhongam Touthang / Neetu Malik' },
                    '2-3': { code: 'SEC-1 (CS106)', subject: 'BASICS OF ML (L)', venue: 'SPS-6', professor: 'Anshika Arora' },
                    '3-4': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'SPS6', professor: 'Bhupesh Singh Bhatia' },
                    '4-5': { code: 'CS104', subject: 'DATA STRUCTURES (Lab)', venue: '', professor: 'Manoj Kumar' },
                    '5-6': { code: 'CS104', subject: 'DATA STRUCTURES (Lab)', venue: '', professor: 'Manoj Kumar' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PB-GF4', professor: 'Rinku Sharma' },
                    '2-3': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L+T)', venue: 'PB-GF4', professor: 'Bhupesh Singh Bhatia' }
                },
                'Wednesday': {
                    '11-12': { code: 'SEC-1 (CS106)', subject: 'BASICS OF ML (Lab)', venue: 'PB GF 4', professor: 'Anshika Arora' },
                    '12-1': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PB-GF4', professor: 'Manoj Kumar' },
                    '2-3': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Rinku Sharma / Priyanka' },
                    '3-4': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Rinku Sharma / Priyanka' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PB-GF4', professor: 'Bhupesh Singh Bhatia' }
                },
                'Friday': {
                    '8-9': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF4', professor: 'Jamkhongam Touthang' },
                    '9-10': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PB-GF4', professor: 'Rinku Sharma' }
                }
            },
            '2': { // Section 2 (from Screenshot 2026-01-05 203828.png)
                'Monday': {
                    '12-1': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'SPS5', professor: 'Anukriti Kaushal' },
                    '2-3': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF4', professor: 'Payal' },
                    '4-5': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PB-GF4', professor: 'Kamal Kishor' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '12-1': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PB-GF4', professor: 'Bhupesh Singh Bhatia' },
                    '1-2': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PB-GF4', professor: 'Kamal Kishor' },
                    '3-4': { code: 'SEC-1 (CS106)', subject: 'BASICS OF ML (L)', venue: 'PB-GF2', professor: 'Anshika Arora' }
                },
                'Wednesday': {
                    '11-12': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'SPS-5', professor: 'Bhupesh Singh Bhatia' },
                    '12-1': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'SPS5', professor: 'Anukriti Kaushal' },
                    '2-3': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF4', professor: 'Payal' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '12-1': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'SPS 6', professor: 'Payal / Drishti Vashisth' },
                    '1-2': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PB-GF4', professor: 'Anukriti Kaushal' },
                    '2-3': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PB-GF4', professor: 'Bhupesh Singh Bhatia' }
                },
                'Friday': {
                    '10-11': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Kamal Kishor' },
                    '11-12': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Kamal Kishor' }
                }
            },
            '3': { // Section 3 (from Screenshot 2026-01-05 203840.png)
                'Monday': {
                    '8-9': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PBGF-5', professor: 'Reema Sachdeva' },
                    '9-10': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PBGF-5', professor: 'R. K. Sinha' },
                    '12-1': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PBGF-5', professor: 'Reema Sachdeva' },
                    '1-2': { code: 'SEC-1 (CS106)', subject: 'BASICS OF ML', venue: 'PBGF-5', professor: 'Anshika Arora' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '12-1': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PBGF-5', professor: 'R. K. Sinha' },
                    '1-2': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF5', professor: 'Sangita Kansal' }
                },
                'Wednesday': {
                    '11-12': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PBGF-5', professor: 'Anurag Goel' },
                    '3-4': { code: 'CS102', subject: 'DISCRETE STRUCTURE (T)', venue: 'PBGF-5', professor: 'Reema Sachdeva' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '11-12': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PBGF-5', professor: 'Anurag Goel' },
                    '2-3': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PBGF-5', professor: 'Sangita Kansal' }
                },
                'Friday': {
                    '11-12': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PB-FF4', professor: 'Reema Sachdeva' },
                    '12-1': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'R. K. Sinha' },
                    '1-2': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'R. K. Sinha' },
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'PB-GF5', professor: 'Sangita Kansal / Anju' }
                }
            },
            '4': { // Section 4 (from Screenshot 2026-01-05 203854.png)
                'Monday': {
                    '8-9': { code: 'CS104', subject: 'DATA STRUCTURES (Lab)', venue: '', professor: 'Col R Sreejeth' },
                    '9-10': { code: 'CS104', subject: 'DATA STRUCTURES (Lab)', venue: '', professor: 'Col R Sreejeth' },
                    '1-2': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PB-GF6', professor: 'Col R Sreejeth' },
                    '2-3': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF5', professor: 'Neha Verma' },
                    '4-5': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PB-GF5', professor: 'Renuka Bokolia' },
                    '5-6': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PB-GF5', professor: 'Renuka Bokolia' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '9-10': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PB-GF5', professor: 'Snigdha Agrawal' },
                    '11-12': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PB-GF5', professor: 'Renuka Bokolia' },
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'PB-GF5', professor: 'Neha Verma / Aarti' },
                    '4-5': { code: 'CS106', subject: 'BASICS OF ML(Lab)', venue: '', professor: 'Anshika Arora' },
                    '5-6': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Renuka Bokolia' }
                },
                'Wednesday': {
                    '2-3': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF2', professor: 'Neha Verma' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '9-10': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'SEC-1 (CS106)', subject: 'BASICS OF ML', venue: 'PB-FF4', professor: 'Anshika Arora' },
                    '12-1': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PB-GF5', professor: 'Col R Sreejeth' },
                    '1-2': { code: 'CS102', subject: 'DISCRETE STRUCTURE (T)', venue: 'PB-GF5', professor: 'Col R Sreejeth' },
                    '2-3': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'SPS 7', professor: 'Snigdha Agrawal' },
                    '3-4': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'SPS 7', professor: 'Snigdha Agrawal' }
                },
                'Friday': {
                    '1-2': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PB-GF4', professor: 'Col R Sreejeth' },
                    '4-5': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Renuka Bokolia' },
                    '5-6': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Renuka Bokolia' }
                }
            },
            '5': { // Section 5 (from Screenshot 2026-01-05 203910.png)
                'Monday': {
                    '11-12': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PBGF-6', professor: 'Pooja Gupta' },
                    '12-1': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PBGF-6', professor: 'Anjali Bansal' },
                    '3-4': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'PB-GF5', professor: 'B. K. Tyagi / Sunil Kumar' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '12-1': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PBGF-6', professor: 'B. K. Tyagi' },
                    '2-3': { code: 'SEC-1 (CS106)', subject: 'BASICS OF ML', venue: 'PBGF-6', professor: 'Anshika Arora' }
                },
                'Wednesday': {
                    '8-9': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PBGF-6', professor: 'B. K. Tyagi' },
                    '10-11': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PBGF-6', professor: 'Pooja Gupta' },
                    '12-1': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PBGF-6', professor: 'Vinod Singh' },
                    '3-4': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PBGF-6', professor: 'Anjali Bansal' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '11-12': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L+T)', venue: 'PBGF-6', professor: 'Anjali Bansal' }
                },
                'Friday': {
                    '12-1': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'PBGF-6', professor: 'Vinod Singh' },
                    '2-3': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Vinod Singh / Umang Meena' },
                    '3-4': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Vinod Singh / Umang Meena' }
                }
            },
            '6': { // Section 6 (from Screenshot 2026-01-05 203923.png)
                'Monday': {
                    '8-9': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L+T)', venue: 'PB-GF6', professor: 'Col R Sreejeth' },
                    '2-3': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'AB-4 515', professor: 'Yogendra K Meena' }
                },
                'Tuesday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'SPS6', professor: 'Col R Sreejeth' },
                    '12-1': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Yogendra K Meena' },
                    '1-2': { code: 'AP102', subject: 'PHYSICS (Lab)', venue: '', professor: 'Yogendra K Meena' },
                    '2-3': { code: 'AM102', subject: 'MATHEMATICS-II (T)', venue: 'PB-GF5', professor: 'Nitika / Asish Saini' }
                },
                'Wednesday': {
                    '10-11': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF4', professor: 'Nitika' },
                    '12-1': { code: 'AP102', subject: 'PHYSICS (L)', venue: 'SPS-7', professor: 'Yogendra K Meena' },
                    '1-2': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PB-GF6', professor: 'Kavinder Singh' }
                },
                'Thursday': {
                    '8-9': { code: 'AEC/VAC', subject: 'AEC/VAC', venue: '', professor: '' },
                    '10-11': { code: 'CS104', subject: 'DATA STRUCTURES (L)', venue: 'PB-GF6', professor: 'Kavinder Singh' },
                    '1-2': { code: 'AM102', subject: 'MATHEMATICS-II (L)', venue: 'PB-GF6', professor: 'Nitika' }
                },
                'Friday': {
                    '10-11': { code: 'CS102', subject: 'DISCRETE STRUCTURE (L)', venue: 'PB-GF6', professor: 'Col R Sreejeth' },
                    '12-1': { code: 'SEC-1 (CS106)', subject: 'BASICS OF ML', venue: 'PB-FF6', professor: 'Anshika Arora' }
                }
            }
        }
    }
};

// Seed Data
const MOCK_DB = {
    users: [
        { id: 'admin', role: 'admin', name: 'Admin', email: 'admin@dtu.ac.in', password: 'admin' },
        { id: 'demo123', role: 'student', name: 'Demo Student', email: 'student@dtu.ac.in', password: 'pass', branch: 'CSE', section: '1', semester: '2' },
        { id: '2K25/CSE/01', role: 'student', name: 'John Doe', email: 'john@dtu.ac.in', password: 'pass', branch: 'CSE', section: '1', semester: '2' },
        { id: 'W001', role: 'warden_hostel', name: 'Demo Warden', email: 'warden@dtu.ac.in', password: 'pass', hostel: 'Aryabhatta' },
        { id: 'P001', role: 'professor', name: 'Dr. Vineet Kumar', email: 'prof@dtu.ac.in', password: 'pass', dept: 'CSE' }
    ],
    // "classes" array will be generated dynamically from TIMETABLE_SKELETON for backward compatibility/ease of use in app logic
    classes: [], 
    notices: [
        { id: 1, type: 'hostel', title: 'Water Supply Maintenance', content: 'No water from 2-4 PM today.', date: '2025-12-29' }
    ]
};

// LocalStorage Helper
const DB = {
    init: () => {
        // Always reconstruct classes from Skeleton to ensure updates are reflected
        MOCK_DB.classes = DB.generateFlatClasses();
        
        let storedData = JSON.parse(localStorage.getItem('dtu_data_v2'));
        
        if (!storedData) {
             localStorage.setItem('dtu_data_v2', JSON.stringify(MOCK_DB));
        } else {
            // SYNC FIX: Ensure demo users exist even if LS has old data
            ['demo123', 'P001', 'W001'].forEach(uid => { // Sync Student, Prof & Warden
                const user = MOCK_DB.users.find(u => u.id === uid);
                if(user) {
                    // Remove old version if exists (to update email/pass)
                    const existingIdx = storedData.users.findIndex(u => u.id === uid);
                    if(existingIdx !== -1) storedData.users.splice(existingIdx, 1);
                    
                    storedData.users.push(user);
                }
            });
            localStorage.setItem('dtu_data_v2', JSON.stringify(storedData));
            
            // Also force update classes from Skeleton in case we changed them
            // BUT preserve status (cancellations)
            if (storedData.classes && storedData.classes.length > 0) {
                 MOCK_DB.classes = MOCK_DB.classes.map(freshClass => {
                     const existing = storedData.classes.find(c => c.id === freshClass.id);
                     if (existing && existing.status) {
                         freshClass.status = existing.status;
                     }
                     return freshClass;
                 });
            }
            storedData.classes = MOCK_DB.classes;
             localStorage.setItem('dtu_data_v2', JSON.stringify(storedData));
        }
    },
    
    // Helper to flatten the skeleton into the array format used by dashboards
    generateFlatClasses: () => {
        const flatList = [];
        let idCounter = 1;

        for (const [branch, sems] of Object.entries(TIMETABLE_SKELETON)) {
            for (const [sem, sections] of Object.entries(sems)) {
                for (const [section, days] of Object.entries(sections)) {
                    for (const [day, slots] of Object.entries(days)) {
                        for (const [time, classInfo] of Object.entries(slots)) {
                            if(classInfo) {
                                flatList.push({
                                    id: idCounter++,
                                    branch,
                                    semester: sem,
                                    section,
                                    day,
                                    time: time, // e.g. "9-10"
                                    rawTime: parseInt(time.split('-')[0]), // for sorting
                                    ...classInfo,
                                    status: 'upcoming'
                                });
                            }
                        }
                    }
                }
            }
        }
        return flatList;
    },

    get: () => {
        // We merged skeleton into DB, so we prioritize the stored data but if we want to ensure Skeleton updates apply, we might re-merge. 
        // For simplicity: read from LS.
        return JSON.parse(localStorage.getItem('dtu_data_v2')) || MOCK_DB;
    },
    
    update: (data) => localStorage.setItem('dtu_data_v2', JSON.stringify(data)),
    
    findUser: (email, password) => {
        const db = DB.get();
        return db.users.find(u => u.email === email && u.password === password);
    },
    
    registerUser: (user) => {
        const db = DB.get();
        if (db.users.find(u => u.email === user.email)) return { error: 'Email already exists' };
        db.users.push(user);
        DB.update(db);
        return { success: true };
    },

    updateUser: (email, updates) => {
        const db = DB.get();
        const userIdx = db.users.findIndex(u => u.email === email);
        if (userIdx > -1) {
            // If "updates" is a string, assume it's a password (backward compatibility)
            if (typeof updates === 'string') {
                 db.users[userIdx].password = updates;
            } else {
                 // Object merge for profile updates
                 db.users[userIdx] = { ...db.users[userIdx], ...updates };
            }
            DB.update(db);
            return { success: true, user: db.users[userIdx] };
        }
        return { success: false, message: 'User not found' };
    }
};

DB.init();
