const { Document, Packer, Paragraph, TextRun, AlignmentType, Footer, Header, PageNumber, HeadingLevel } = require("docx");
const fs = require("fs");
const path = require("path");

const doc = new Document({
    sections: [
        {
            properties: {
                page: {
                    margin: {
                        top: 1440, // 1 inch
                        right: 1440,
                        bottom: 1440,
                        left: 1440,
                    },
                },
            },
            headers: {
                default: new Header({
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [
                                new TextRun({
                                    text: "Bilqees Razia Laghari Welfare Trust | Research Report",
                                    color: "718096", // Slate Gray
                                    size: 18, // 9pt
                                    font: "Calibri",
                                }),
                            ],
                        }),
                    ],
                }),
            },
            footers: {
                default: new Footer({
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Page ",
                                    color: "718096",
                                    size: 18,
                                    font: "Calibri",
                                }),
                                new TextRun({
                                    children: [PageNumber.CURRENT],
                                    color: "718096",
                                    size: 18,
                                    font: "Calibri",
                                }),
                                new TextRun({
                                    text: " of ",
                                    color: "718096",
                                    size: 18,
                                    font: "Calibri",
                                }),
                                new TextRun({
                                    children: [PageNumber.TOTAL_PAGES],
                                    color: "718096",
                                    size: 18,
                                    font: "Calibri",
                                }),
                            ],
                        }),
                    ],
                }),
            },
            children: [
                // Title and Subtitle
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 240, after: 120 },
                    children: [
                        new TextRun({
                            text: "Bilqees Razia Laghari Welfare Trust",
                            bold: true,
                            size: 48, // 24pt
                            color: "1A365D", // Deep Navy
                            font: "Calibri",
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 60, after: 480 },
                    children: [
                        new TextRun({
                            text: "Comprehensive Data & Research Report",
                            italic: true,
                            size: 28, // 14pt
                            color: "4A5568", // Slate Gray
                            font: "Calibri",
                        }),
                    ],
                }),

                // Executive Summary
                makeHeading1("1. Executive Summary"),
                makeParagraph("The Bilqees Razia Laghari Welfare Trust (also known as Bilqees Razia Welfare Trust) is a prominent, grass-roots non-profit organization operating in the Sindh province of Pakistan, primarily centered in the town of Khairpur Nathan Shah (K.N. Shah), Dadu District. Established with the core mission of raising the socio-economic status of marginalized rural communities, the Trust focuses on three pillars of development: accessible healthcare, digital skills/IT education, and entrepreneurship opportunities."),
                makeParagraph("Through strategic local operations and collaborations with international professional bodies, such as the Association of Pakistani-Descent Gastroenterologists of North America (APGNA), the Trust has introduced critical healthcare initiatives and modern tech education to local youth. This empowers the rural population and enables self-reliance (khud-mukhtari) in a region historically challenged by underdevelopment and natural disasters."),

                // Organizational Profile & Identity
                makeHeading1("2. Organizational Profile & Identity"),
                makeBullet("Bilqees Razia Laghari Welfare Trust (often abbreviated as Bilqees Razia Trust).", "Official Name: "),
                makeBullet("Health, Education, and Entrepreneurship.", "Primary Focus: "),
                makeBullet("Dr. Sultan Laghari (Chairperson). Under his leadership, the trust has expanded its focus from traditional charity to digital education and specialized healthcare programs.", "Chairperson: "),
                makeBullet("Dr. Aijaz Patoli. Dr. Patoli is a highly regarded public health expert, chief medical officer at the Sir C.J. Institute of Psychiatry (Hyderabad, Sindh), and researcher at the University of Sindh. He represents the trust in major seminars, national health forums, and coordinates medical collaborations.", "Key Representative & Public Health Advocate: "),
                makeBullet("Government Boys High School, Gozo Village, Taluka Khairpur Nathan Shah, District Dadu, Sindh, Pakistan. This branch serves as the central hub for local community training, computer courses, and seminars.", "Primary Operational Branch: "),

                // Healthcare Initiatives
                makeHeading1("3. Healthcare & Hepatitis C Eradication"),
                makeParagraph("The Trust has prioritised healthcare in Sindh, a province facing high rates of viral hepatitis. One of its most notable contributions is its focus on awareness, screening, and treatment campaigns."),
                makeHeading2("Collaboration with APGNA"),
                makeParagraph("The trust works in close partnership with the Association of Pakistani-Descent Gastroenterologists of North America (APGNA) under the umbrella of the APPNA Hepatitis C Initiative. Due to the high prevalence of viral hepatitis in the Sindh province, APGNA identified the Bilqees Razia Laghari Welfare Trust as a key local implementation partner to screen, diagnose, and treat Hepatitis C patients."),
                makeHeading2("Hepatitis C Eradication Seminars"),
                makeParagraph("In September 2017, the Trust co-organized a major seminar at the University of Sindh, Jamshoro, alongside the Sindh Hepatitis Control Programme, Sindh Skills Development Programme, Save Human Foundation, and Petarian Association. During the event, Dr. Aijaz Patoli and other speakers highlighted Hepatitis C as a 'silent killer' in Pakistan due to the asymptomatic nature of the disease and a severe lack of public awareness. Dr. Patoli advocated for a long-term, coordinated fight involving global and regional collaborations rather than isolated medical camps to completely eradicate viral hepatitis from the region. The seminar was widely covered by national media, including Dawn News."),

                // IT & Digital Skills Education
                makeHeading1("4. IT & Digital Skills Education"),
                makeParagraph("Recognizing that digital literacy and technical skills are the future of economic independence, the Trust has invested heavily in digital education programs for rural youth who lack access to modern educational resources."),
                makeHeading2("Full Stack Web Development Program"),
                makeParagraph("The Trust established a free computer training center in Gozo village. This center provides comprehensive training in modern software engineering and Full Stack Web Development. The curriculum covers:"),
                makeBullet("HTML5 and CSS3 (Web structure and responsive styling)", "• "),
                makeBullet("JavaScript (Programming principles and logic)", "• "),
                makeBullet("React.js (Frontend user interfaces and single page applications)", "• "),
                makeBullet("Node.js & Express (Backend APIs and server-side development)", "• "),
                makeBullet("Database Management Systems (SQL and NoSQL)", "• "),
                makeHeading2("Empowering Local Youth via Freelancing"),
                makeParagraph("The primary objective of the IT initiative is 'khud-mukhtari' (self-reliance/entrepreneurship). By equipping rural youth with in-demand technical skills, the trust prepares them to work on global freelancing platforms (such as Upwork, Fiverr, and Freelancer.com). This program provides a critical pathway out of poverty, allowing local youth to earn a livelihood without having to migrate to major urban centers."),

                // Geographical Context & Disaster Resilience
                makeHeading1("5. Geographical Context & Disaster Resilience"),
                makeParagraph("The Trust's operations are deeply embedded in the geographical realities of the Dadu District, which has been at the center of several climate-related challenges in Pakistan."),
                makeHeading2("Khairpur Nathan Shah and Gozo Village"),
                makeParagraph("Located in the Dadu District of Sindh, Khairpur Nathan Shah (K.N. Shah) and its surrounding villages, including Gozo, are highly vulnerable to natural disasters due to their geographical layout and proximity to river systems."),
                makeHeading2("The 2022 Floods and the Suprio Bund Breach"),
                makeParagraph("In late August 2022, Pakistan experienced historic, catastrophic monsoon floods. A critical protective embankment, the Suprio Bund, suffered severe breaches near Gozo village. The breaches led to immediate and massive inundation of Gozo and the wider K.N. Shah taluka, submerging entire settlements and forcing the mass evacuation of hundreds of thousands of residents. The disaster severely disrupted local infrastructure, homes, and schools, including the Government Boys High School in Gozo where the trust operates."),
                makeHeading2("Post-Flood Rehabilitation and Support"),
                makeParagraph("Following the 2022 floods, the Trust redirected its efforts to support local relief, healthcare camps, and rebuilding of the community, emphasizing the need for disaster-resilient educational and medical facilities."),

                // Digital Footprint & Media Coverage
                makeHeading1("6. Digital Footprint & Media Coverage"),
                makeParagraph("The Bilqees Razia Laghari Welfare Trust maintains a transparent and visible presence online to connect with donors and show progress:"),
                makeBullet("The Trust maintains an active YouTube channel under the handle @bilqeesraziawelfaretrust8207. The channel hosts videos showcasing educational classes, computer labs, messages from Chairperson Dr. Sultan Laghari, and updates on community welfare activities.", "YouTube Presence: "),
                makeBullet("The Trust's initiatives have been reported in leading newspapers such as Dawn News, specifically highlighting their public health campaigns and academic seminars.", "Media Citations: "),
                makeBullet("The trust is listed in reputable national and international directories (such as ngos1.com), validating its registry and operations as a verified non-profit organization in Pakistan.", "NGO Directory Listings: "),

                // Strategic Recommendations
                makeHeading1("7. Strategic Recommendations"),
                makeParagraph("To expand the reach and maximize the long-term impact of the Bilqees Razia Laghari Welfare Trust, the following actions are recommended:"),
                makeBullet("Transition the Gozo IT center to solar power to counter the frequent electricity load-shedding in rural Sindh, ensuring uninterrupted training.", "Solar Power Integration: "),
                makeBullet("Partner with international donors to set up mobile clinics that can reach more remote villages in the Dadu district for Hepatitis screening and treatment.", "Mobile Health Units: "),
                makeBullet("Establish a dedicated freelancing incubator/mentorship program where senior graduates guide new students through their first freelance contracts.", "Freelancing Mentorship: "),
                makeBullet("Create emergency response guidelines and stock-pile relief items at the trust branch to act as a community refuge during future climate events.", "Disaster Preparedness: ")
            ],
        },
    ],
});

// Helper functions for formatting
function makeHeading1(text) {
    return new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 360, after: 120 },
        keepWithNext: true,
        children: [
            new TextRun({
                text: text,
                bold: true,
                size: 32, // 16pt
                color: "2B6CB0", // Lighter Blue
                font: "Calibri",
            }),
        ],
    });
}

function makeHeading2(text) {
    return new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        keepWithNext: true,
        children: [
            new TextRun({
                text: text,
                bold: true,
                size: 26, // 13pt
                color: "2D3748", // Dark gray
                font: "Calibri",
            }),
        ],
    });
}

function makeParagraph(text, boldPrefix = "") {
    const children = [];
    if (boldPrefix) {
        children.push(new TextRun({
            text: boldPrefix,
            bold: true,
            size: 22, // 11pt
            font: "Calibri",
        }));
    }
    children.push(new TextRun({
        text: text,
        size: 22, // 11pt
        font: "Calibri",
    }));
    return new Paragraph({
        spacing: { after: 120, line: 276 }, // 1.15 line spacing
        alignment: AlignmentType.JUSTIFY,
        children: children,
    });
}

function makeBullet(text, boldPrefix = "") {
    const children = [];
    if (boldPrefix) {
        children.push(new TextRun({
            text: boldPrefix,
            bold: true,
            size: 22,
            font: "Calibri",
        }));
    }
    children.push(new TextRun({
        text: text,
        size: 22,
        font: "Calibri",
    }));
    return new Paragraph({
        bullet: {
            level: 0,
        },
        spacing: { after: 60, line: 276 },
        children: children,
    });
}

// Generate the docx file
const outputPath = path.join(__dirname, "Bilqees_Razia_Laghari_Welfare_Trust_Report.docx");

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(outputPath, buffer);
    console.log("SUCCESS: Document generated at " + outputPath);
}).catch((err) => {
    console.error("ERROR: Failed to generate document: ", err);
    process.exit(1);
});
