/* ==========================================================================
   BRWT PREMIUM WEBSITE - JAVASCRIPT LOGIC
   Features: Multi-language Support (EN, UR, SD), Dark/Light Mode,
             Animated Counter Dashboard, Interactive Modals, Forms
   ========================================================================== */

// Translation Dictionary
const translations = {
  en: {
    nav_home: "Home",
    nav_story: "Our Story",
    nav_work: "Our Work",
    nav_impact: "Impact",
    nav_board: "Leadership",
    nav_contact: "Contact",
    nav_donate: "Donate",
    
    hero_badge: "Small Help Can Make Change",
    hero_heading: "New Hope for the Future",
    hero_sub: "Serving Rural Sindh with Compassion, Health, and Education",
    hero_desc: "A dedicated non-profit organization striving to elevate underserved communities in Sindh, Pakistan, by providing free computer education, public health awareness, clean drinking water, and immediate disaster relief.",
    hero_btn_donate: "Support Our Cause",
    hero_btn_volunteer: "Become a Volunteer",
    
    spotlight_tag: "Flagship Relief Campaign",
    spotlight_title: "Flood Relief Operation",
    spotlight_desc: "A continuous three-month emergency rescue, food, and medical camp set up during the severe flooding crisis in Sindh.",
    spotlight_stat_num: "6,000",
    spotlight_stat_label: "People Fed Daily",
    
    story_title: "Our Founding Legacy",
    story_subtitle: "Honoring the values of selflessness, empathy, and service to humanity.",
    story_content_title: "The Story of Bilqees & Razia",
    story_para1: "The Bilqees Razia Laghari Welfare Trust (BRWT) was born from a deep family commitment to honor the legacy of Bilqees and Razia. As maternal pillars of the Laghari family, their lives exemplified absolute compassion and care for the needy.",
    story_para2: "To ensure their legacy continues to light the path for future generations, the surviving family members established this Trust. We focus on bridging critical development and humanitarian gaps in Sindh—particularly in Larkana, Dadu, and nearby districts—by raising local capacities, providing modern web education, and ensuring basic public healthcare.",
    story_quote: "\"The purpose of life is not just to exist, but to serve others with compassion and build a healthier, empowered nation.\"",
    
    impact_title: "Real Verifiable Impact",
    impact_subtitle: "We believe in transparency. These figures represent self-reported, direct milestones achieved by BRWT on the ground.",
    stat_edu_label: "Students Trained",
    stat_edu_desc: "In Computer Education courses, building digital skills and self-reliance.",
    stat_eye_label: "Cataract Surgeries",
    stat_eye_desc: "Performed successfully across 16 mobile clinical eye camps.",
    stat_water_label: "Hand Pumps Installed",
    stat_water_desc: "Providing clean drinking water across remote water-stressed villages.",
    stat_marriages_label: "Combined Marriages",
    stat_marriages_desc: "Supported for orphaned and low-income couples in community ceremonies.",
    stat_covid_label: "Families Assisted",
    stat_covid_desc: "With emergency food rations and medical packages during the pandemic.",
    
    work_title: "Our Care Initiatives",
    work_subtitle: "Bridging the gaps in health, education, and social protection with dedicated expertise.",
    prog_edu_tag: "Education",
    prog_edu_title: "Web & IT Education",
    prog_edu_desc: "Empowering rural youth by establishing computer labs and providing fully free training in full-stack web development, turning them into independent earners.",
    prog_health_tag: "Healthcare",
    prog_health_title: "Public Health Awareness",
    prog_health_desc: "Active Hepatitis B/C and HIV/AIDS diagnostic screening campaigns to check and guide patients in rural Sindh under collaborations with APPNA and APGNA.",
    prog_water_tag: "Water & Sanitation",
    prog_water_title: "Clean Water Access",
    prog_water_desc: "Installing over 3,000 hand pumps and water wells to bring clean, disease-free drinking water right to the doorsteps of underprivileged communities.",
    prog_marriage_tag: "Social Support",
    prog_marriage_title: "Combined Marriages",
    prog_marriage_desc: "Organizing mass marriages for orphaned and low-income couples, providing them with essential household items and dowry-free financial support.",
    prog_relief_tag: "Emergency Response",
    prog_relief_title: "Disaster & Emergency Relief",
    prog_relief_desc: "Providing instant rescue, medical assistance, and hot meals to thousands of families displaced by devastating flash floods and global pandemics.",
    prog_learn_more: "Learn More \u2192",
    prog_donor_tag: "Supporters",
    prog_donor_title: "Khaireen & Donors",
    prog_donor_desc: "Honoring our well-wishers and donors whose generous support powers free healthcare, clean water, and IT training campaigns across Sindh.",
    prog_donor_stat: "100% Direct Impact",
    
    board_title: "Leadership & Governance",
    board_subtitle: "Guided by dedicated professionals who bring structure, compassion, and accountability to our work.",
    board1_name: "Haji Zaffar Ali Khan Laghari",
    board1_role: "Chairperson",
    board1_desc: "Guiding the trust's long-term vision, ensuring alignment with our core values of service and integrity.",
    board2_name: "Qambar Ali Khan Laghari",
    board2_role: "Vice Chairman",
    board2_desc: "Managing strategic partnerships and field operations across educational and clean water projects.",
    board3_name: "Dr. Naeem Ahmed Laghari",
    board3_role: "General Secretary",
    board3_desc: "Overseeing medical camp coordination, research, and collaborative healthcare programs.",
    board4_name: "Dr. Ahmed Sultan Laghari",
    board4_role: "Coordinator",
    board4_desc: "Directing local community engagement, logistics, and emergency disaster relief operations.",
    
    contact_title: "Get in Touch",
    contact_subtitle: "Have questions? Want to collaborate or visit one of our clinics? Reach out to us directly.",
    contact_info_title: "Contact Information",
    contact_office_label: "Registered Office",
    contact_office_val: "Bilqees Razia Trust Office, Larkana, Sindh, Pakistan",
    contact_email_label: "Email Address",
    contact_phone_label: "Phone / WhatsApp",
    contact_form_title: "Send Us a Message",
    form_label_name: "Full Name",
    form_label_email: "Email Address",
    form_label_subject: "Subject",
    form_label_message: "Message",
    form_btn_send: "Send Message",
    
    donate_modal_title: "Support Our Mission",
    donate_tab_once: "One-Time Donation",
    donate_tab_monthly: "Monthly Support",
    donate_label_amount: "Choose Donation Amount (USD)",
    donate_btn_submit: "Proceed to Secure Payment",
    
    volunteer_modal_title: "Apply as a Volunteer",
    volunteer_label_name: "Full Name",
    volunteer_label_email: "Email",
    volunteer_label_phone: "Phone Number",
    volunteer_label_prog: "Preferred Program",
    volunteer_btn_submit: "Submit Application"
  },
  ur: {
    nav_home: "ہوم",
    nav_story: "ہماری کہانی",
    nav_work: "ہمارا کام",
    nav_impact: "اثرات",
    nav_board: "قیادت",
    nav_contact: "رابطہ",
    nav_donate: "عطیہ کریں",
    
    hero_badge: "چھوٹی سی مدد بڑی تبدیلی لا سکتی ہے",
    hero_heading: "مستقبل کے لیے نئی امید",
    hero_sub: "صحت، تعلیم اور ہمدردی کے ساتھ سندھ کے دیہی علاقوں کی خدمت",
    hero_desc: "ایک مخلص غیر منافع بخش تنظیم جو کمپیوٹر کی مفت تعلیم، صحت عامہ کی آگاہی، صاف پینے کے پانی کی فراہمی، اور ہنگامی ریلیف کے ذریعے سندھ، پاکستان کے محروم علاقوں کی زندگیوں کو بہتر بنانے کے لیے کوشاں ہے۔",
    hero_btn_donate: "ہماری مدد کریں",
    hero_btn_volunteer: "رضاکار بنیں",
    
    spotlight_tag: "اہم امدادی مہم",
    spotlight_title: "سیلاب سے بچاؤ کی سرگرمیاں",
    spotlight_desc: "سندھ میں شدید سیلاب کے دوران شروع کی گئی مسلسل تین ماہ کی ہنگامی امداد، خوراک اور طبی کیمپ۔",
    spotlight_stat_num: "6,000",
    spotlight_stat_label: "افراد کو روزانہ کھانا کھلایا",
    
    story_title: "ہماری بنیاد کا ورثہ",
    story_subtitle: "بے لوث خدمت، ہمدردی اور انسانیت کے اصولوں کو خراجِ عقیدت۔",
    story_content_title: "بلقیس اور رضیہ کی کہانی",
    story_para1: "بلقیس رضیہ لغاری ویلفیئر ٹرسٹ (BRWT) کا قیام لغاری خاندان کے بزرگ خواتین بلقیس اور رضیہ کی یاد کو زندہ رکھنے کے لیے کیا گیا۔ خاندان کی ان ماؤں اور بہنوں کی زندگی ہمیشہ غریبوں اور ضرورت مندوں کی ہمدردی اور دیکھ بھال کا نمونہ رہی۔",
    story_para2: "ان کے جذبۂ ہمدردی کو اگلی نسلوں تک پہنچانے کے لیے خاندان نے اس ٹرسٹ کی بنیاد رکھی۔ ہمارا مقصد سندھ بالخصوص لاڑکانہ، دادو اور قریبی اضلاع میں بنیادی ترقیاتی اور فلاحی خلا کو پر کرنا ہے—خصوصاً جدید کمپیوٹر کی تعلیم، علاج اور صاف پانی کی فراہم کے ذریعے۔",
    story_quote: "\"زندگی کا اصل مقصد صرف جینا نہیں بلکہ دوسروں کی ہمدردی کے ساتھ خدمت کرنا اور ایک صحت مند اور خود مختار معاشرہ بنانا ہے۔\"",
    
    impact_title: "حقیقی اور تصدیق شدہ اثرات",
    impact_subtitle: "ہم شفافیت پر یقین رکھتے ہیں۔ یہ اعداد و شمار گراؤنڈ پر ٹرسٹ کی خدمات کی عکاسی کرتے ہیں۔",
    stat_edu_label: "طلباء تربیت یافتہ",
    stat_edu_desc: "آئی ٹی کورسز کے ذریعے ڈیجیٹل مہارتوں اور خود انحصاری کا فروغ۔",
    stat_eye_label: "کامیاب آپریشنز",
    stat_eye_desc: "16 فری آئی کیمپوں کے ذریعے آنکھوں کے کامیاب آپریشن اور علاج۔",
    stat_water_label: "لگائے گئے ہینڈ پمپ",
    stat_water_desc: "پانی کی قلت کے شکار دیہاتوں میں صاف پینے کے پانی کی فراہمی۔",
    stat_marriages_label: "اجتماعی شادیاں",
    stat_marriages_desc: "یتیم اور غریب جوڑوں کی شادیاں اور بنیادی گھریلو سامان کا انتظام۔",
    stat_covid_label: "خندانوں کی مدد",
    stat_covid_desc: "کرونا لاک ڈاؤن کے دوران ضرورت مند خاندانوں میں راشن کی تقسیم۔",
    
    work_title: "ہمارے فلاحی کام",
    work_subtitle: "صحت، تعلیم اور سماجی تحفظ کے شعبوں میں منظم اور مخلصانہ کوششیں۔",
    prog_edu_tag: "تعلیم",
    prog_edu_title: "آئی ٹی اور کمپیوٹر تعلیم",
    prog_edu_desc: "دیہی نوجوانوں کو خود کفیل بنانے کے لیے کمپیوٹر لیب کا قیام اور مکمل مفت ویب ڈیولپمنٹ کی جدید تربیت۔",
    prog_health_tag: "صحت",
    prog_health_title: "طبی کیمپ اور شعور",
    prog_health_desc: "ہیپاٹائٹس بی/سی اور ایچ آئی وی/ایڈز کے مفت تشخیصی کیمپ اور شعور بیدار کرنے کی مہمات۔",
    prog_water_tag: "صاف پانی",
    prog_water_title: "صاف پانی کی فراہمی",
    prog_water_desc: "پسماندہ دیہی علاقوں میں 3000 سے زائد ہینڈ پمپ اور کنویں لگا کر بیماریوں سے پاک پانی کی فراہمی۔",
    prog_marriage_tag: "سماجی بہبود",
    prog_marriage_title: "اجتماعی شادیوں کا انتظام",
    prog_marriage_desc: "یتیم اور ضرورت مند جوڑوں کی اجتماعی شادیوں کا انعقاد اور انہیں مالی اور مادی وسائل کی فراہمی۔",
    prog_relief_tag: "ہنگامی امداد",
    prog_relief_title: "سیلاب اور آفات میں ریلیف",
    prog_relief_desc: "سیلاب اور وبائی امراض سے متاثرہ خاندانوں کی ریسکیو، طبی امداد اور خوراک کی ہنگامی فراہمی۔",
    prog_learn_more: "تفصیلات جانیں \u2190",
    prog_donor_tag: "مددگار اور عطیہ دہندگان",
    prog_donor_title: "خیرین اور ڈونرز",
    prog_donor_desc: "ہمارے خیر خواہ اور ڈونرز جن کے تعاون سے تعلیم، صحت اور صاف پانی کی مہمیں کامیابی کے ساتھ جاری ہیں۔",
    prog_donor_stat: "100٪ براہ راست اثر",
    
    board_title: "ٹرسٹ کی قیادت اور انتظامیہ",
    board_subtitle: "مخلص اور پیشہ ور افراد پر مشتمل ٹیم جو ہمارے کام میں شفافیت اور ذمہ داری کو یقینی بناتی ہے۔",
    board1_name: "حاجی ظفر علی خان لغاری",
    board1_role: "چیئرپرسن",
    board1_desc: "ٹرسٹ کی طویل مدتی وژن اور خدمت خلق کے بنیادی اصولوں کی رہنمائی۔",
    board2_name: "قنبر علی خان لغاری",
    board2_role: "وائس چیئرمین",
    board2_desc: "تعلیمی اور صاف پانی کے منصوبوں کی نگرانی اور فیلڈ آپریشنز کا انتظام۔",
    board3_name: "ڈاکٹر نعیم احمد لغاری",
    board3_role: "جنرل سیکرٹری",
    board3_desc: "میڈیکل کیمپس کی کوآرڈینیشن اور تعاونی صحت عامہ کے پروگراموں کا انتظام۔",
    board4_name: "ڈاکٹر احمد سلطان لغاری",
    board4_role: "کوآرڈینیٹر",
    board4_desc: "مقامی برادری کے ساتھ ہم آہنگی، لاجسٹکس اور ہنگامی امدادی سرگرمیوں کا انتظام۔",
    
    contact_title: "رابطہ کیجیے",
    contact_subtitle: "کوئی سوال ہے؟ یا ہمارے کیمپوں کا دورہ کرنا چاہتے ہیں؟ بلا جھجھک ہم سے رابطہ کریں۔",
    contact_info_title: "رابطہ کی تفصیلات",
    contact_office_label: "رجسٹرڈ آفس",
    contact_office_val: "بلقیس رضیہ ٹرسٹ آفس، لاڑکانہ، سندھ، پاکستان",
    contact_email_label: "ای میل ایڈریس",
    contact_phone_label: "پیغام / واٹس ایپ",
    contact_form_title: "ہمیں پیغام بھیجیں",
    form_label_name: "مکمل نام",
    form_label_email: "ای میل ایڈریس",
    form_label_subject: "موضوع",
    form_label_message: "پیغام",
    form_btn_send: "پیغام بھیجیں",
    
    donate_modal_title: "ہمارے مقصد میں تعاون کریں",
    donate_tab_once: "ایک بار",
    donate_tab_monthly: "ماہانہ",
    donate_label_amount: "عطیہ کی رقم منتخب کریں (USD)",
    donate_btn_submit: "محفوظ ادائیگی کی طرف بڑھیں",
    
    volunteer_modal_title: "بطور رضاکار درخواست دیں",
    volunteer_label_name: "مکمل نام",
    volunteer_label_email: "ای میل",
    volunteer_label_phone: "فون نمبر",
    volunteer_label_prog: "پسندیدہ شعبہ",
    volunteer_btn_submit: "درخواست جمع کریں"
  },
  sd: {
    nav_home: "هوم",
    nav_story: "اسان جي ڪهاڻي",
    nav_work: "اسان جو ڪم",
    nav_impact: "اثرات",
    nav_board: "قيادت",
    nav_contact: "رابطو",
    nav_donate: "عطيو ڪريو",
    
    hero_badge: "ننڍڙي مدد وڏي تبديلي آڻي سگهي ٿي",
    hero_heading: "مستقبل لاءِ نئين اميد",
    hero_sub: "سنڌ جي ٻهراڙين جي خدمت، صحت، تعليم ۽ همدرديءَ سان",
    hero_desc: "هڪ مخلص غير منافع بخش تنظيم جيڪا ڪمپيوٽر جي مفت تعليم، صحت جي آگاهي، صاف پاڻي جي فراهمي، ۽ هنگامي رليف ذريعي سنڌ، پاڪستان جي غريب علائقن کي بهتر بڻائڻ لاءِ ڪوشان آهي.",
    hero_btn_donate: "اسان جي مدد ڪريو",
    hero_btn_volunteer: "رضاڪار بڻجو",
    
    spotlight_tag: "اهم امدادي مهم",
    spotlight_title: "برسات ۽ ٻوڏ رليف مهم",
    spotlight_desc: "سنڌ ۾ ٻوڏ جي سخت بحران دوران شروع ڪيل مسلسل ٽن مهينن جي هنگامي مدد، خوراڪ ۽ طبي ڪيمپ.",
    spotlight_stat_num: "6,000",
    spotlight_stat_label: "ماڻهن کي روزانو کاڌو کارايو",
    
    story_title: "اسان جي بنياد جو ورثو",
    story_subtitle: "همدردي، خدمت خلق ۽ بي لوث محبت کي ڀيٽا.",
    story_content_title: "بلقيس ۽ رضيه جي ڪهاڻي",
    story_para1: "بلقيس رضيه لغاري ويلفيئر ٽرسٽ (BRWT) جو بنياد لغاري خاندان جي بزرگ عورتن بلقيس ۽ رضيه جي ياد ۾ رکيو ويو. خاندان جي مائرن ۽ ڀينرن جي زندگي هميشه غريبن ۽ يتيمن جي همدردي ۽ سار سنڀال جو هڪ مثال هئي.",
    story_para2: "انهن جي همدرديءَ واري جذبي کي ايندڙ نسلن تائين پهچائڻ لاءِ خاندان جي سونهري ميمبرن هي ٽرسٽ قائم ڪيو. اسان جو مقصد سنڌ، خاص طور لاڙڪاڻي، دادو ۽ ڀرپاسي جي ضلعن ۾ تعليم، صحت ۽ صاف پاڻي جي فراهمي کي يقيني بڻائڻ آهي.",
    story_quote: "\"زندگي جو اصل مقصد رڳو جيئڻ ناهي پر ٻين جي همدرديءَ سان خدمت ڪرڻ ۽ هڪ صحتمند سماج اڏڻ آهي.\"",
    
    impact_title: "حقيقي ۽ تصديق ٿيل اثرات",
    impact_subtitle: "اسان شفافيت تي يقين رکون ٿا. اهي انگ اکر زميني سطح تي اسان جي حاصلات جا آهن.",
    stat_edu_label: "شاگرد تربيت يافته",
    stat_edu_desc: "ڪمپيوٽر تعليم ڪورسز ذريعي ڊيجيٽل مهارتن ۽ خود انحصاري جو فروغ.",
    stat_eye_label: "کامياب آپريشن",
    stat_eye_desc: "16 فري آئي ڪيمپن ذريعي اکين جا ڪامياب آپريشن ۽ علاج.",
    stat_water_label: "لڳايل هينڊ پمپ",
    stat_water_desc: "پاڻي جي کوٽ وارن ڳوٺن ۾ صاف پيئڻ جي پاڻي جي فراهمي.",
    stat_marriages_label: "اجتماعي شاديون",
    stat_marriages_desc: "يتيم ۽ غريب جوڙن جي شاديءَ جو انتظام ۽ گهريلو سامان جي فراهمي.",
    stat_covid_label: "خاندانن جي مدد",
    stat_covid_desc: "ڪرونا جي وبا دوران ضرورت مند خاندانن ۾ راشن جي ورهاست.",
    
    work_title: "اسان جا فلاحي ڪم",
    work_subtitle: "صحت، تعليم ۽ سماجي ڀلائي جي شعبن ۾ منظم ۽ مخلصانه ڪوششون.",
    prog_edu_tag: "تعليم",
    prog_edu_title: "آئي ٽي ۽ ڪمپيوٽر تعليم",
    prog_edu_desc: "ٻهراڙيءَ جي نوجوانن کي خود ڪفيل بڻائڻ لاءِ ڪمپيوٽر ليب جو قيام ۽ مڪمل مفت ويب ڊيولپمينٽ جي جديد تربيت.",
    prog_health_tag: "صحت",
    prog_health_title: "طبي ڪيمپون ۽ آگاهي",
    prog_health_desc: "هيپاٽائيٽس بي/سي ۽ ايڇ آءِ وي/ايڊز جي مفت تشخيصي ڪيمپن جو قيام ۽ آگاهي مهمون.",
    prog_water_tag: "صاف پاڻي",
    prog_water_title: "صاف پاڻي جي فراهمي",
    prog_water_desc: "پسمانده ٻهراڙين ۾ 3000 کان وڌيڪ هينڊ پمپ ۽ کوهه لڳائي بيمارين کان پاڪ پاڻي جي فراهمي.",
    prog_marriage_tag: "سماجي ڀلائي",
    prog_marriage_title: "اجتماعي شاديون",
    prog_marriage_desc: "يتيم ۽ غريب نياڻين جي اجتماعي شادين جو اهتمام ۽ گهريلو سامان جي فراهمي.",
    prog_relief_tag: "هنگامي امداد",
    prog_relief_title: "ٻوڏ ۽ آفتن ۾ رليف",
    prog_relief_desc: "ٻوڏ ۽ وبائي مرضن ۾ متاثر خاندانن جي ريسڪيو، طبي امداد ۽ خوراڪ جي هنگامي فراهمي.",
    prog_learn_more: "تفصيل ڄاڻو \u2190",
    prog_donor_tag: "مددگار ۽ عطيو ڏيندڙ",
    prog_donor_title: "خيرين ۽ ڊونرز",
    prog_donor_desc: "اسان جا خيرخواهه ۽ ڊونرز جن جي سهڪار سان تعليم، صحت ۽ صاف پاڻي جا پروگرام ڪاميابيءَ سان جاري آهن.",
    prog_donor_stat: "100٪ سڌو سنئون اثر",
    
    board_title: "ٽرسٽ جي قيادت ۽ انتظاميه",
    board_subtitle: "مخلص ۽ پروفيشنل ماڻهن تي مشتمل ٽيم جيڪا اسان جي ڪم ۾ شفافيت کي يقيني بڻائي ٿي.",
    board1_name: "حاجي ظفر علي خان لغاري",
    board1_role: "چيئرپرسن",
    board1_desc: "ٽرسٽ جي طويل مدتي ويزن ۽ انسانيت جي خدمت جي بنيادي اصولن جي رهنمائي.",
    board2_name: "قنبر علي خان لغاري",
    board2_role: "وائيس چيئرمين",
    board2_desc: "تعليمي ۽ صاف پاڻي جي منصوبن جي نگراني ۽ فيلڊ آپريشنز جو انتظام.",
    board3_name: "ڊاڪٽر نعيم احمد لغاري",
    board3_role: "جنرل سيڪريٽري",
    board3_desc: "ميڊيڪل ڪيمپن جي ڪوآرڊينيشن ۽ صحت عامه جي پروگرامن جو انتظام.",
    board4_name: "ڊاڪٽر احمد سلطان لغاري",
    board4_role: "ڪوآرڊينيٽر",
    board4_desc: "مقامي برادريءَ سان هم آهنگي، لاجسٽڪس ۽ هنگامي امدادي ڪمن جو انتظام.",
    
    contact_title: "رابطو ڪريو",
    contact_subtitle: "ڪو سوال آهي؟ يا اسان جي ڪيمپن جو دورو ڪرڻ چاهيو ٿا؟ بلاجھجهڪ اسان سان رابطو ڪريو.",
    contact_info_title: "رابطي جي تفصيل",
    contact_office_label: "رجسٽرڊ آفيس",
    contact_office_val: "بلقيس رضيه ٽرسٽ آفيس، لاڙڪاڻو، سنڌ، پاڪستان",
    contact_email_label: "اي ميل ائڊريس",
    contact_phone_label: "فون / واٽس اپ",
    contact_form_title: "اسان کي پيغام موڪليو",
    form_label_name: "پورو نالو",
    form_label_email: "اي ميل ائڊريس",
    form_label_subject: "موضوع",
    form_label_message: "پيغام",
    form_btn_send: "پيغام موڪليو",
    
    donate_modal_title: "اسان جي مقصد ۾ سهڪار ڪريو",
    donate_tab_once: "هڪ ڀيرو",
    donate_tab_monthly: "ماهوار",
    donate_label_amount: "رقم چونڊيو (USD)",
    donate_btn_submit: "محفوظ ادائيگي ڏانهن وڌو",
    
    volunteer_modal_title: "بطور رضاڪار درخواست ڏيو",
    volunteer_label_name: "پورو نالو",
    volunteer_label_email: "اي ميل",
    volunteer_label_phone: "فون نمبر",
    volunteer_label_prog: "پسنديده شعبو",
    volunteer_btn_submit: "درخواست جمع ڪريو"
  }
};

// Program details modal data
const programDetails = {
  edu: {
    en: {
      title: "Web & IT Education Programme",
      content: `The IT training wing of BRWT provides high-quality, completely free courses in Full-Stack Web Development (HTML, CSS, JavaScript, React, and Node.js). Under our program, over 7,000 students have been trained to date. 
      <br><br>
      The program aims to bridge the digital divide in rural Sindh by setting up fully equipped computer labs in Larkana and surrounding areas. Our dedicated instructors guide students through project-based learning, assisting them in building portfolios and successfully landing freelance jobs or placements in software houses across Pakistan.`
    },
    ur: {
      title: "آئی ٹی اور کمپیوٹر تعلیم پروگرام",
      content: `بی آر ڈبلیو ٹی کا تعلیمی شعبہ دیہی نوجوانوں کو ویب ڈیولپمنٹ (HTML, CSS, JavaScript, React اور Node.js) کی مکمل مفت اور اعلیٰ معیار کی تربیت فراہم کرتا ہے۔ اب تک 7,000 سے زائد طلباء کامیابی سے کورسز مکمل کر چکے ہیں۔ 
      <br><br>
      ہمارا مقصد لاڑکانہ اور گردونواح میں کمپیوٹر لیبز کا قیام عمل میں لا کر ڈیجٹل تفریق کو ختم کرنا اور نوجوانوں کو فری لانسنگ اور مقامی اداروں میں روزگار کے حصول میں مدد کرنا ہے تاکہ وہ معاشی طور پر خود کفیل بن سکیں۔`
    },
    sd: {
      title: "آئي ٽي ۽ ڪمپيوٽر تعليم پروگرام",
      content: `بي آر ڊبليو ٽي جو تعليمي شعبو ٻهراڙيءَ جي نوجوانن کي ويب ڊيولپمينٽ (HTML, CSS, JavaScript, React ۽ Node.js) جي مڪمل مفت ۽ اعليٰ معيار جي تربيت فراهم ڪري ٿو. هيل تائين 7,000 کان وڌيڪ شاگرد ڪاميابيءَ سان ڪورس مڪمل ڪري چڪا آهن. 
      <br><br>
      اسان جو مقصد لاڙڪاڻي ۽ ڀرپاسي ۾ ڪمپيوٽر ليبز قائم ڪري ڊيجيٽل فرق کي ختم ڪرڻ ۽ نوجوانن کي فري لانسنگ ۽ روزگار حاصل ڪرڻ ۾ مدد ڪرڻ آهي ته جيئن هو پنهنجي پيرن تي بيهي سگهن.`
    }
  },
  health: {
    en: {
      title: "General Medical Camps & Healthcare",
      content: `Our healthcare division focuses on addressing high-prevalence public health concerns in rural Sindh, specifically Viral Hepatitis (B & C) and HIV/AIDS. 
      <br><br>
      Partnering with APGNA under the APPNA Hepatitis Initiative, we run active screening and free medication camps in Larkana, Dadu, and Khairpur Nathan Shah, having treated over 25,000 patients to date.`
    },
    ur: {
      title: "عوامی صحت کی مہمات اور مفت علاج",
      content: `ہمارا طبی شعبہ دیہی سندھ میں ہیپاٹائٹس بی/سی اور ایچ آئی وی/ایڈز جیسے خطرناک امراض کی روک تھام پر توجہ مرکوز کرتا ہے۔ 
      <br><br>
      APGNA اور APPNA کے تعاون سے ہم لاڑکانہ، دادو اور خیرپور ناتھن شاہ میں مفت تشخیصی اور علاج کے کیمپ لگاتے ہیں جن میں 25,000 سے زائد مریضوں کا مفت علاج کیا گیا ہے۔`
    },
    sd: {
      title: "عوامي صحت جون مهمون ۽ مفت علاج",
      content: `اسان جو طبي شعبو ٻهراڙي واري سنڌ ۾ هيپاٽائيٽس بي/سي ۽ ايڇ آءِ وي/ايڊز جهڙن خطرناڪ مرضن جي روڪٿام تي ڌيان ڏئي ٿو. 
      <br><br>
      APGNA ۽ APPNA جي سهڪار سان اسان لاڙڪاڻي، دادو ۽ خيرپور ناٿن شاهه ۾ فري ڪيمپ لڳائيندا آهيون جنهن مان 25,000 کان وڌيڪ مريض فائدو حاصل ڪري چڪا آهن.`
    }
  },
  eye: {
    en: {
      title: "Free Surgical Eye Camps",
      content: `Our mobile eye clinical teams visit distant rural areas, screening patients for refractive errors and cataract blindness. Over 30 clinical eye camps have been organized, completing more than 2,800 free cataract surgeries with intraocular lens implants.`
    },
    ur: {
      title: "مفت سارجیکل آئی کیمپس",
      content: `ہمارے موبائل آئی کلینک دیہی علاقوں کا دورہ کرتے ہیں جہاں بینائی کی محرومی کا شکار بزرگوں کے مفت معائنے اور 2,800 سے زائد موتیے کے کامیاب آپریشنز کیے جا چکے ہیں۔`
    },
    sd: {
      title: "فري سرجيڪل آئي ڪيمپس",
      content: `اسان جون موبائل آئي ٽيمون پري جي ڳوٺن ۾ وڃي اکين جا مفت معائنا ۽ 2,800 کان وڌيڪ موتئي جا ڪامياب آپريشن ڪري چڪيون آهن.`
    }
  },
  vocational: {
    en: {
      title: "Vocational & Skill Training Centers",
      content: `BRWT establishes local vocational centers equipped with sewing machines, tailoring tools, and craft materials, empowering disadvantaged women and young men to earn independent livelihoods.`
    },
    ur: {
      title: "ووکیشنل و ٹیکنیکل مراکز",
      content: `بی آر ڈبلیو ٹی پسماندہ خواتین اور نوجوانوں کو سلائی، کڑھائی اور فنی مہارتوں کی مفت تربیت فراہم کرتا ہے تاکہ وہ اپنے پاؤں پر کھڑے ہو سکیں۔`
    },
    sd: {
      title: "ووڪيشنل ۽ ٽيڪنيڪل مرڪز",
      content: `بي آر ڊبليو ٽي عورتن ۽ نوجوانن کي سار سنڀال، سلائي ۽ بنيادي ٽيڪنيڪل تربيت ڏئي ٿو ته جيئن هو پنهنجو روزگار سائين سان ڪمائي سگهن.`
    }
  },
  scholarship: {
    en: {
      title: "Student Educational Scholarships",
      content: `Financial constraints should never stand in the way of education. BRWT awards direct educational scholarships covering school fees, textbooks, and university tuition for over 500 needy students.`
    },
    ur: {
      title: "مستحق طلباء کے لیے تعلیمی اسکالرشپس",
      content: `بی آر ڈبلیو ٹی 500 سے زائد نادار اور ہونہار طلباء کو تعلیمی اخراجات، فیسوں اور کتابوں کے لیے براہ راست مالی معاونت فراہم کرتا ہے۔`
    },
    sd: {
      title: "طلباء لاءِ تعليمي اسڪالرشپس",
      content: `بي آر ڊبليو ٽي 500 کان وڌيڪ مستحق شاگردن کي سندن فيسن ۽ ڪتابن لاءِ تعليمي اسڪالرشپ ڏئي ٿو.`
    }
  },
  marriage: {
    en: {
      title: "Collective Marriage Ceremonies",
      content: `To relieve poor parents of overwhelming financial debts, BRWT organizes collective marriage events providing basic household dowry packages and dignified wedding ceremonies for orphan and needy couples.`
    },
    ur: {
      title: "اجتماعی شادیوں کی تقاریب",
      content: `غریب اور نادار والدین کا بوجھ ہلکا کرنے کے لیے بی آر ڈبلیو ٹی 500 سے زائد جوڑوں کی اجتماعی شادیوں کا اہتمام اور بنیادی ضروریات زندگی کے گفٹ پیکجز فراہم کر چکا ہے۔`
    },
    sd: {
      title: "اجتماعي شادين جون تقريبون",
      content: `بي آر ڊبليو ٽي 500 کان وڌيڪ غريب جوڙن جي اجتماعي شادين ۽ ضروري گهريلو سامان جا گفٽ پيڪيجز فراهم ڪري چڪو آهي.`
    }
  },
  flood: {
    en: {
      title: "Emergency Relief Operations",
      content: `During severe flood catastrophes, BRWT rescue teams deploy boats, tents, food ration bags, and mobile health units directly to submerged villages across Sindh.`
    },
    ur: {
      title: "ہنگامی سیلاب و قدرتی آفات امداد",
      content: `سیلاب کی تباہ کاریوں کے دوران بی آر ڈبلیو ٹی کی امدادی ٹیمیں کشتیوں، راشن بیگز، خیموں اور طبی ٹیموں کے ساتھ متاثرہ علاقوں میں امدادی سرگرمیاں انجام دیتی ہیں۔`
    },
    sd: {
      title: "هنگامي ٻوڏ امدادي مهمون",
      content: `ٻوڏ جي تباھي دوران بي آر ڊبليو ٽي جون امدادي ٽيمون ڳوٺن ۾ راشن، خيما ۽ طبي امداد پهچائينديون آهن.`
    }
  },
  water: {
    en: {
      title: "Clean Water Infrastructure Access",
      content: `Waterborne illnesses are a major source of health crises in rural Sindh. To counter this, BRWT has installed over 3,000 heavy-duty hand pumps and clean water wells across water-stressed villages. 
      <br><br>
      Each hand pump is strategically placed in common community spaces, tested for safety, and maintained by local volunteers, ensuring free, clean, and reliable drinking water for thousands of families daily, dramatically lowering cases of cholera and typhoid.`
    },
    ur: {
      title: "صاف پانی اور انفراسٹرکچر منصوبے",
      content: `دیہی سندھ میں گندے پانی سے پھیلنے والی بیماریاں صحت کے بحران کی بڑی وجہ ہیں۔ اس مسئلے کے حل کے لیے، بی آر ڈبلیو ٹی نے اب تک مختلف پسماندہ دیہاتوں میں 3,000 سے زائد ہینڈ پمپ اور کنویں نصب کیے ہیں۔ 
      <br><br>
      ہر پمپ کو کمیونٹی کے مشترکہ مقامات پر لگایا جاتا ہے تاکہ ہر خاندان کو پینے کے صاف اور جراثیم سے پاک پانی تک آسان رسائی حاصل ہو سکے، جس سے ہیضہ اور ٹائیفائیڈ جیسی بیماریوں میں نمایاں کمی آئی ہے۔`
    },
    sd: {
      title: "صاف پاڻي ۽ انفراسٽرڪچر منصوبا",
      content: `ٻهراڙي واري سنڌ ۾ گندي پاڻي مان پکڙجندڙ بيماريون صحت جي بحران جو وڏو سبب آهن. ان مسئلي جي حل لاءِ، بي آر ڊبليو ٽي هيل تائين مختلف پسمانده ڳوٺن ۾ 3,000 کان وڌيڪ هينڊ پمپ ۽ کوهه لڳايا آهن. 
      <br><br>
      هر پمپ کي ڪميونٽي جي گڏيل جڳهن تي لڳايو وڃي ٿو ته جيئن هر خاندان کي پيئڻ جي صاف ۽ جراثيم کان پاڪ پاڻي تائين آسان پهچ ملي سگهي، جنهن جي ڪري ڪالرا ۽ ٽائيفائيڊ جهڙين بيمارين ۾ وڏي گهٽتائي آئي آهي.`
    }
  },
  donor: {
    en: {
      title: "Khaireen & Donors Support Initiative",
      content: `BRWT operates on a 100% direct-impact donation model. Every single rupee donated by our well-wishers goes directly to fund computer labs, diagnostic kits, medicine, and hand pump installations. We maintain complete transparency and provide digital receipts and verification reports to all our donors.`
    },
    ur: {
      title: "خیرین اور عطیہ دہندگان کا منصوبہ",
      content: `بی آر ڈبلیو ٹی 100٪ براہ راست اثر کے ماڈل پر کام کرتا ہے۔ خیرین کی طرف سے دیا گیا ہر روپیہ کمپیوٹر لیبز، ہیپاٹائٹس اسکریننگ کٹس، ادویات اور ہینڈ پمپس کی تنصیب پر براہ راست خرچ ہوتا ہے۔ ہم مکمل شفافیت کے ساتھ عطیہ دہندگان کو رپورٹس فراہم کرتے ہیں۔`
    },
    sd: {
      title: "خيرين ۽ عطيو ڏيندڙن جو پروگرام",
      content: `بي آر ڊبليو ٽي 100٪ سڌو سنئون اثر جي ماڈل تي ڪم ڪري ٿو. خيرين پاران ڏنل هر پيسو ڪمپيوٽر ليبز، ميڊيڪل ڪيمپن ۽ هينڊ پمپن جي لڳائڻ تي سڌو خرچ ٿيندو آهي. اسان پنهنجي ڊونرز کي رپورٽون پڻ موڪليندا آهيون.`
    }
  }
};

// Global App State
let currentLanguage = 'en';
let donationType = 'once';
let selectedAmount = 25;

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initLanguage();
  initScrollAnimations();
  initCounterAnimations();
  init3DTilt();
  initStarfield();
  initScrollHeader();
});

// ==========================================
// THEME LOGIC
// ==========================================
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  
  // Set default theme or fetch from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('themeIcon');
  if (theme === 'light') {
    // Sun Icon
    themeIcon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
  } else {
    // Moon Icon
    themeIcon.innerHTML = `
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    `;
  }
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking link
  const links = document.querySelectorAll('.nav-links a, .nav-links button');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ==========================================
// LANGUAGE TRANSLATION LOGIC
// ==========================================
function initLanguage() {
  const savedLang = localStorage.getItem('lang') || 'en';
  changeLanguage(savedLang);
}

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('lang', lang);
  
  // Update document metadata for layout direction
  document.documentElement.lang = lang;
  if (lang === 'ur' || lang === 'sd') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
  
  // Update current language label
  const langLabelMap = {
    en: 'English',
    ur: 'اردو',
    sd: 'سنڌي'
  };
  document.getElementById('currentLang').textContent = langLabelMap[lang];
  
  // Translate all marked elements on page
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Check if it's an input/textarea with placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });

  // Toggle active link styling based on window scroll section (if active)
  updateActiveNavLink();
}

// ==========================================
// ANIMATED COUNTERS
// ==========================================
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200; // lower number = faster count
  
  const countUp = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.ceil(target / speed);
    
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(() => countUp(counter), 15);
    } else {
      counter.innerText = target.toLocaleString() + "+";
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        counter.innerText = "0";
        countUp(counter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// ==========================================
// SCROLL & HEADER LINK HIGHLIGHTS
// ==========================================
function initScrollAnimations() {
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
  let currentSectionId = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSectionId}`) {
      item.classList.add('active');
    }
  });
}

// ==========================================
// MODAL WORKFLOWS
// ==========================================
function openDonateModal() {
  document.getElementById('donateModal').classList.add('active');
}

function closeDonateModal() {
  document.getElementById('donateModal').classList.remove('active');
}

function openVolunteerModal() {
  document.getElementById('volunteerModal').classList.add('active');
}

function closeVolunteerModal() {
  document.getElementById('volunteerModal').classList.remove('active');
}

function openProgramModal(progId) {
  const modal = document.getElementById('programModal');
  const titleEl = document.getElementById('progModalTitle');
  const bodyEl = document.getElementById('progModalBody');
  
  if (programDetails[progId] && programDetails[progId][currentLanguage]) {
    titleEl.textContent = programDetails[progId][currentLanguage].title;
    bodyEl.innerHTML = programDetails[progId][currentLanguage].content;
    modal.classList.add('active');
  }
}

function closeProgramModal() {
  document.getElementById('programModal').classList.remove('active');
}

// Handle Close Modals by Clicking Overlay
window.addEventListener('click', (e) => {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

// Donation helper functions
function setDonationType(type) {
  donationType = type;
  document.getElementById('tabOnce').classList.toggle('active', type === 'once');
  document.getElementById('tabMonthly').classList.toggle('active', type === 'monthly');
}

function setDonationAmount(amount, button) {
  selectedAmount = amount;
  document.getElementById('customAmount').value = '';
  
  const buttons = document.querySelectorAll('.donation-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

function clearActiveDonationButtons(customVal) {
  if (customVal !== '') {
    selectedAmount = parseFloat(customVal);
    const buttons = document.querySelectorAll('.donation-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
  }
}

function handleDonationSubmit() {
  const typeText = donationType === 'once' ? 'One-Time' : 'Monthly';
  alert(`Simulation: Redirecting to secure gateway for a ${typeText} donation of $${selectedAmount}. Thank you for your support!`);
  closeDonateModal();
}

// Form Handlers
function handleVolunteerSubmit(e) {
  e.preventDefault();
  alert("Simulation: Application submitted successfully! Our team will get back to you shortly.");
  closeVolunteerModal();
  e.target.reset();
}

function handleContactSubmit(e) {
  e.preventDefault();
  alert("Simulation: Thank you for your message! We will reply to your email as soon as possible.");
  e.target.reset();
}

// ==========================================
// 3D TILT EFFECT FOR CARDS
// ==========================================
function init3DTilt() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const dx = x - xc;
      const dy = y - yc;
      const tiltX = -(dy / yc) * 8;
      const tiltY = (dx / xc) * 8;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.boxShadow = `${-tiltY * 2}px ${tiltX * 2}px 25px rgba(128, 24, 36, 0.12)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.boxShadow = 'var(--card-shadow)';
    });
  });
}

// ==========================================
// TWINKLING STARFIELD & SNOWFALL PARTICLE PHYSICS
// ==========================================
function initStarfield() {
  const canvas = document.getElementById('starfieldCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;
  
  // Handle resize
  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });
  
  const particles = [];
  const maxParticles = 120;
  
  // Generate star particles
  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.4,
      speedY: Math.random() * 0.35 + 0.05, // Slow drift downwards
      speedX: (Math.random() - 0.5) * 0.15, // Soft wind drift
      opacity: Math.random(),
      fadeSpeed: Math.random() * 0.015 + 0.005,
      fading: Math.random() > 0.5
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < maxParticles; i++) {
      const p = particles[i];
      
      // Update opacity for twinkling
      if (p.fading) {
        p.opacity -= p.fadeSpeed;
        if (p.opacity <= 0.15) {
          p.fading = false;
        }
      } else {
        p.opacity += p.fadeSpeed;
        if (p.opacity >= 0.85) {
          p.fading = true;
        }
      }
      
      // Update position
      p.y += p.speedY;
      p.x += p.speedX;
      
      // Wrap around edges
      if (p.y > height) {
        p.y = 0;
        p.x = Math.random() * width;
      }
      if (p.x > width) {
        p.x = 0;
      } else if (p.x < 0) {
        p.x = width;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fill();
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

// ==========================================
// SCROLL SENSITIVE HEADER TRANSITION
// ==========================================
function initScrollHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  
  // Set initial scroll position check
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
