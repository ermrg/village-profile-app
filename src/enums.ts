const hoh_roles = [
  { name: "बाबु", id: "father" },
  { name: "आमा", id: "mother" },
  { name: "जेठो दाई", id: "eldest_son" },
];
const gender_choice = [
  { name: "पुरूष", id: "1" },
  { name: "महिला", id: "2" },
  { name: "अन्य", id: "3" },
];

const relations = [
  { id: "1", name: "आफै" },
  { id: "2", name: "श्रीमती" },
  { id: "3", name: "श्रीमान" },
  { id: "4", name: "बुबा" },
  { id: "4", name: "बुबा" },
  { id: "5", name: "आमा" },
  { id: "6", name: "छोरा" },
  { id: "7", name: "छोरी" },
  { id: "8", name: "हजुर आमा" },
  { id: "9", name: "हजुर बुबा" },
  { id: "10", name: "दाजु" },
  { id: "11", name: "दिदी" },
  { id: "12", name: "भाई" },
  { id: "13", name: "बहिनी" },
  { id: "14", name: "नन्द" },
  { id: "15", name: "बुहारी" },
  { id: "16", name: "काका" },
  { id: "17", name: "काकी" },
  { id: "18", name: "भतिज" },
  { id: "19", name: "भाउजु" },
  { id: "20", name: "नातिनी" },
  { id: "21", name: "नाती" },
  { id: "22", name: "फुफु" },
  { id: "23", name: "भान्जा" },
];

const mother_tongues = [
  // { id: "1", name: "नेपाली" },
  // {
  //   id: "2",
  //   name: "मैथिली",
  // },
  // {
  //   id: "3",
  //   name: "थारु",
  // },
  {
    id: "3",
    name: "नेपाली",
  },
  { id: "4", name: "तामाङ" },
  { id: "22", name: "नेवारी" },

  // {
  //   id: "5",
  //   name: "नेपालभाषा",
  // },
  // {
  //   id: "6",
  //   name: "बज्जीका",
  // },
  { id: "7", name: "मगर" },
  // {
  //   id: "8",
  //   name: "डोटली",
  // },
  // {
  //   id: "9",
  //   name: "उर्दु",
  // },
  // {
  //   id: "10",
  //   name: "अवधी",
  // },
  { id: "21", name: "माझी" },
  { id: "20", name: "थामी" },

  { id: "11", name: "लिम्बु" },
  { id: "12", name: "गुरुङ" },
  // {
  //   id: "13",
  //   name: "बैतडेली",
  // },
  { id: "14", name: "राई" },
  // {
  //   id: "15",
  //   name: "अछामी",
  // },
  // {
  //   id: "16",
  //   name: "बान्तवा",
  // },
  // {
  //   id: "17",
  //   name: "राजबंशी",
  // },
  // {
  //   id: "18",
  //   name: "शेर्पा",
  // },
  // {
  //   id: "19",
  //   name: "भोजपुरी",
  // },
  { id: "23", name: "अन्य" },
];

const education_levels = [
  { id: "1", name: "निरक्षर" },
  { id: "2", name: "साक्षर(८ कक्षा वा तल्लो योग्यता)" },
  { id: "3", name: "८ कक्षा उतिर्ण" },
  { id: "4", name: "10 कक्षा उतिर्ण (टेस्ट)" },
  { id: "5", name: "एस .एल .सी / एसईई" },
  { id: "6", name: "१२ कक्षा उतिर्ण" },
  { id: "7", name: "स्तातक" },
  { id: "8", name: "स्तातकोतर" },
  { id: "9", name: "विद्यावारिधी" },
  { id: "10", name: "अन्य" },
];

const education_faculties = [
  { id: "मानविकी तथा सामाजिक शास्त्र", name: "मानविकी तथा सामाजिक शास्त्र" },
  { id: "शिक्षा", name: "शिक्षा" },
  { id: "व्यवस्थापन", name: "व्यवस्थापन" },
  { id: "कानुन", name: "कानुन" },
  { id: "विज्ञान तथा प्रविधि", name: "विज्ञान तथा प्रविधि" },
  { id: "स्वास्थ /चिकित्साशास्त्र", name: "स्वास्थ /चिकित्साशास्त्र" },
  { id: "इन्जिनियरिङ", name: "इन्जिनियरिङ" },
  { id: "वन", name: "वन" },
  { id: "कम्प्युटर/सुचना प्रविधि", name: "कम्प्युटर/सुचना प्रविधि" },
  {
    id: "पशु विज्ञान/पशुचिकित्सा/मत्स्यपालन",
    name: "पशु विज्ञान/पशुचिकित्सा/मत्स्यपालन",
  },
  { id: "वातावरण", name: "वातावरण" },
];

const education_leave_reasons = [
  { id: "पढने खर्च नभएर", name: "पढने खर्च नभएर" },
  { id: "बिवाह भएर", name: "बिवाह भएर" },
  { id: "पढने इच्छा नभएर", name: "पढने इच्छा नभएर" },
  { id: "शैक्षिक संस्था टाढा भएर", name: "शैक्षिक संस्था टाढा भएर" },
  { id: "बसाई सरेकोले", name: "बसाई सरेकोले" },
  { id: "अन्य", name: "अन्य" },
];

const education_statuses = [
  { id: "1", name: "अध्ययनरत" },
  { id: "2", name: "पढाइ छाडेको" },
  { id: "3", name: "अध्ययन पुरा" },
  { id: "4", name: "निरक्षर" },
];

const marital_statuses = [
  { id: "1", name: "अविवाहित" },
  { id: "2", name: "विवाहित" },
  { id: "3", name: "एकल बिबाह" },
  { id: "4", name: "एकल महिला/पुरुष" },
  { id: "5", name: "पारपाचुके/सम्बन्ध विच्छेद" },
  { id: "6", name: "छुट्टिएको" },
  { id: "7", name: "अन्य" },
];

const vehicle_types = [
  { id: "1", name: "अटो  रिक्सा" },
  { id: "2", name: "मोटरसाइकल" },
  { id: "3", name: "कार" },
  { id: "4", name: "जिप/भ्यान" },
  { id: "5", name: "बस" },
  { id: "6", name: "ट्रक/ त्रपर" },
  { id: "7", name: "डोजर लोडर हेभी उपकरण" },
];

const disability_types = [
  { id: "1", name: "शारिरिक अपाङ्गता" },
  { id: "2", name: "न्यून दृष्टियुक्त" },
  { id: "3", name: "पूर्ण दृष्टिविहिन" },
  { id: "4", name: "बहिरापन" },
  { id: "5", name: "सुस्तश्रवण" },
  { id: "6", name: "श्रवन दृष्ट्रिविहिन" },
  { id: "7", name: "स्वर र बोलाई" },
  { id: "8", name: "मानसिक वा मनोसामाजिक" },
  { id: "9", name: "बौद्धिक अपाङ्गता" },
  { id: "10", name: "अनुवंशीय अपाङ्गता" },
  { id: "11", name: "अटिजम्" },
  { id: "12", name: "बहुअपाङ्गता" },
  { id: "13", name: "अन्य" },
];

const disability_card_types = [
  { id: "1", name: "रातो" },
  { id: "2", name: "निलो" },
  { id: "3", name: "सेतो" },
  { id: "4", name: "पाएको छैन" },
];

const disease_names = [
  { id: "मुटु रोग", name: "मुटु रोग" },
  { id: "दम/श्वासप्रश्वास सम्बन्धी", name: "दम/श्वासप्रश्वास सम्बन्धी" },
  { id: "अर्बुद (क्यानसर)", name: "अर्बुद (क्यानसर)" },
  { id: "मधुमेह ( डायबिटिज)", name: "मधुमेह ( डायबिटिज)" },
  { id: "मृगौला / कलेजोको रोग", name: "मृगौला / कलेजोको रोग" },
  { id: "स्त्रीरोग", name: "स्त्रीरोग" },
  { id: "अल्सर/ आन्द्राको रोग", name: "अल्सर/ आन्द्राको रोग" },
  { id: "उच्च रक्तचाप", name: "उच्च रक्तचाप" },
  { id: "निम्न रक्तचाप", name: "निम्न रक्तचाप" },
  { id: "बाथ", name: "बाथ" },
  { id: "इपिलेप्सी", name: "इपिलेप्सी" },
  { id: "पार्किन्सन्स्‌", name: "पार्किन्सन्स्‌" },
  { id: "अल्जाईमर्स", name: "अल्जाईमर्स" },
  { id: "अन्य", name: "अन्य" },
];

const death_reasons = [
  { id: "1", name: "कालगति" },
  { id: "2", name: "दुर्घटना" },
  { id: "3", name: "आत्महत्या" },
  { id: "4", name: "हत्या" },
  { id: "5", name: "दिर्घरोगी" },
  { id: "6", name: "थाहा नभएको" },
  { id: "7", name: "हराएको" },
  { id: "8", name: "बेपत्ता पारिएको" },
];


const foreign_reasons = [
  // { id: "1", name: "रोजगारी" },
  // { id: "2", name: "ब्यापार" },
  // { id: "3", name: "अध्ययन" },
  // { id: "4", name: "आप्रबास" },
  { id: "1", name: "तलब/ज्याला/निकरी" },
  { id: "2", name: "व्यापार/व्यवसाय" },
  { id: "3", name: "अध्ययन/तालिम" },
  { id: "4", name: "कामको खोजी" },
  { id: "4", name: "आश्रित" },
  { id: "5", name: "अन्य" },
];

const festivals = [
  { id: "1", name: "एकादशी ब्रत" },
  { id: "2", name: "ल्होसार" },
  { id: "3", name: "तिहार" },
  { id: "4", name: "इद" },
  { id: "5", name: "क्रिसमस" },
  { id: "6", name: "रमजान" },
  { id: "7", name: "दशैँ" },
  { id: "8", name: "चैते दशैँ" },
  { id: "9", name: "राम नवमी" },
  { id: "10", name: "कृष्ण जन्माष्टमी" },
  { id: "11", name: "जनै पुर्णिमा" },
  { id: "12", name: "पाहांचर्हे" },
  { id: "13", name: "सिथिनख:" },
  { id: "14", name: "गाइजात्रा" },
  { id: "15", name: "गुरु पुर्णिमा" },
  { id: "16", name: "नयाँ वर्ष" },
  { id: "17", name: "न्हुँ दं नेपाल सम्बत" },
  { id: "18", name: "इन्द्रजात्रा" },
  { id: "19", name: "माघे संक्रान्ती" },
  { id: "20", name: "छठ" },
];

const water_sources = [
  { id: "1", name: "मुलको धारा" },
  { id: "6", name: "लिफ्टको धारा" },
  { id: "2", name: "कुवा" },
  { id: "3", name: "मूल" },
  { id: "4", name: "खोला" },
  { id: "7", name: "अन्य" },
];

const cooking_fuels = [
  { id: "1", name: "बिद्युत" },
  { id: "2", name: "एलपी ग्याँस" },
  { id: "4", name: "दाउरा" },
  { id: "3", name: "गोबर ग्याँस" },
  { id: "5", name: "अन्य" },
];

const light_fuels = [
  { id: "1", name: "रास्टिय बिदयुत" },
  { id: "2", name: "स्थानीय बिदयुत" },
  { id: "3", name: "सोलार" },
  { id: "4", name: "मट्टितेल" },
  { id: "5", name: "दाउरा" },
  { id: "6", name: "अन्य" },
];

const toilet_types = [
  { id: "1", name: "पक्की" },
  { id: "2", name: "कच्ची" },
  { id: "3", name: "नभएको" },
];

const animal_types = [
  { id: "1", name: "गाइ/गोरु, बाच्छा/बाच्छी" },
  { id: "2", name: "राँगा/भैंसी, पाडा/पाडी" },
  { id: "3", name: "याक / चौरी" },
  { id: "4", name: "बाख्रा/भेंडा, खसी/बोका" },
  { id: "5", name: "सुँगुर / बंगुर" },
  { id: "6", name: "कुखुरा / हाँस / परेवा" },
  { id: "7", name: "अष्ट्रीच" },
  { id: "8", name: "कुकुर/ बिरालो /खरायो" },
];

const land_types = [
  { id: "1", name: "खेत-आयम" },
  { id: "2", name: "खेत-दोयम" },
  { id: "3", name: "बारी" },
  { id: "4", name: "घडेरी" },
  { id: "5", name: "पाखा-बारी" },
  { id: "6", name: "खेत सिम" },
];

const socialNetworks = [
  { name: "फेसबुक", id: "facebook" },
  { name: "युट्युव", id: "youtube" },
  { name: "टिकटक", id: "ticktock" },
  { name: "भाईबर", id: "viber" },
  { name: "ट्विटर", id: "twitter" },
  { name: "ह्वाट्स एप", id: "whatsapp" },
  { name: "ईमो", id: "emo" },
  { name: "गुगल", id: "emo" },
];

const developmentOption = [
  { name: "सडक", id: "सडक" },
  { name: "कृषि/पशुपन्छी", id: "कृषि/पशुपन्छी" },
  { name: "शिक्षा", id: "शिक्षा" },
  { name: "स्वाथ्य", id: "स्वाथ्य" },
  { name: "पर्यटन", id: "पर्यटन" },
  { name: "खानेपानी", id: "खानेपानी" },
  { name: "सिंचाई", id: "सिंचाई" },
];
const residence_types = [
  { name: "जन्मसिद्ध", id: "1" },
  { name: "बसाईसराई", id: "2" },
];

const income_sources = [
  { id: "1", name: "कृषि" },
  { id: "2", name: "व्यापार" },
  { id: "3", name: "उद्योग" },
  { id: "4", name: "जागीर" },
  { id: "5", name: "बैदेशिक रोजगार( विप्रेषण )" },
  { id: "6", name: "भाडा ( बहाल)" },
  { id: "7", name: "उद्यम" },
  { id: "8", name: "अन्य" },
];

const expense_sources = [
  { id: "1", name: "खाना/लाउन" },
  { id: "2", name: "शिक्षा " },
  { id: "3", name: "स्वास्थ्य" },
  { id: "4", name: "कर तथा सेवा शुल्क  भुक्तानी " },
  { id: "5", name: "मनोरञ्जन कार्य" },
  { id: "6", name: "सामाजिक कार्य" },
  { id: "7", name: "ऋण भुक्तानी " },
  { id: "8", name: "दान" },
  { id: "9", name: "अन्य" },
];

const facilities = [
  { id: "1", name: "रेडियो" },
  { id: "2", name: "टेलिभिजन" },
  { id: "3", name: "साधारण मोबाईल फोन" },
  { id: "4", name: "स्मार्ट फोन" },
  { id: "5", name: "ट्याबलेट" },
  { id: "6", name: "कम्प्युटर" },
  { id: "7", name: "ल्यापटप" },
  { id: "8", name: "इन्टरनेट" },
  { id: "9", name: "मोटरसाइकल / स्कुटर" },
  { id: "10", name: "मोटर कार" },
  { id: "11", name: "रेफ्रिजरेटरर" },
  { id: "12", name: "बासिङ मेसिन" },
  { id: "13", name: "एयर कण्डिसनर" },
  { id: "14", name: "अन्य सवारी/ढुवानीको साधन(ट्रक,बस,मनीबस आदि)" },
  { id: "15", name: "ट्याक्टर" },
  { id: "16", name: "वाटर फिल्टर" },
  { id: "17", name: "बिद्युतीय पंखा" },
];

const yes_nos = [
  { name: "छ", id: "1" },
  { name: "छैन", id: "0" },
];

export {
  education_leave_reasons,
  facilities,
  income_sources,
  expense_sources,
  hoh_roles,
  gender_choice,
  relations,
  mother_tongues,
  education_levels,
  education_faculties,
  education_statuses,
  marital_statuses,
  vehicle_types,
  disability_types,
  disability_card_types,
  disease_names,
  death_reasons,
  foreign_reasons,
  festivals,
  water_sources,
  cooking_fuels,
  light_fuels,
  toilet_types,
  animal_types,
  land_types,
  socialNetworks,
  developmentOption,
  residence_types,
  yes_nos,
};
