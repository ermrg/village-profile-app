const hoh_roles = [
  { name: "बाबु", id: "father" },
  { name: "आमा", id: "mother" },
  { name: "जेठो दाई", id: "eldest_son" },
];
const gender_choice = [
  { name: "पुरष", id: "male" },
  { name: "महिला", id: "female" },
  { name: "अन्य", id: "other" },
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
  { id: "1", name: "नेपाली" },
  // {
  //   id: "2",
  //   name: "मैथिली",
  // },
  // {
  //   id: "3",
  //   name: "थारु",
  // },
  { id: "4", name: "तामाङ" },
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
  { id: "20", name: "थामी" },
  { id: "21", name: "माझी" },
  { id: "22", name: "अन्य" },
];

const education_levels = [
  { id: "1", name: "पुर्व प्राथमिक" },
  { id: "2", name: "आधारभुत तह" },
  { id: "3", name: "माध्यामिक तह" },
  { id: "4", name: "स्नातक" },
  { id: "5", name: "स्नातकोत्तर" },
  { id: "6", name: "एमफिल र बिद्यावारिधी" },
  { id: "7", name: "प्राविधिक एस.एल.सी (एस.ई.ई)" },
  { id: "8", name: "साधारण लेखपद (साक्षर)" },
  { id: "9", name: "लेखपद गर्न नसक्ने (निरक्षर)" },
];

const education_statuses = [
  { id: "1", name: "अध्ययनरत" },
  { id: "2", name: "पढाइ छाडेको" },
  { id: "3", name: "अध्ययन पुरा" },
  { id: "4", name: "निरक्षर" },
];

const marital_statuses = [
  { id: "1", name: "विवाहित" },
  { id: "2", name: "अविवाहित" },
  { id: "3", name: "एकल बिबाह" },
  { id: "4", name: "बहु बिबाह" },
  { id: "5", name: "पुन: बिबाह" },
  { id: "6", name: "बिदुर / बिधुवा" },
  { id: "7", name: "सम्बन्ध बिच्छेद" },
  { id: "8", name: "बिबाहित तर अलग बसेको" },
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
  { id: "1", name: "दृष्टिबिहिन" },
  { id: "2", name: "न्यून दृष्टिबिहिन" },
  { id: "3", name: "बहिरा" },
  { id: "4", name: "बोल्न नसक्ने" },
  { id: "5", name: "सुस्त मनस्थिति" },
  { id: "6", name: "सुस्त श्रवन" },
  { id: "7", name: "हातखुट्टा नचल्ने" },
];

const disability_card_types = [
  { id: "1", name: "रातो" },
  { id: "2", name: "निलो" },
  { id: "3", name: "सेतो" },
  { id: "4", name: "पाएको छैन" },
];

const disease_names = [
  { id: "प्रेसर", name: "प्रेसर" },
  { id: "सुगर", name: "सुगर" },
  { id: "क्षयरोग", name: "क्षयरोग" },
  { id: "क्यान्सर", name: "क्यान्सर" },
  { id: "एच.आई.भि/ एड्स", name: "एच.आई.भि/ एड्स" },
  { id: "ग्याष्ट्रिक", name: "ग्याष्ट्रिक" },
  { id: "हेपाटाईटिस बी", name: "हेपाटाईटिस बी" },
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

const countries = [
  { id: "1", name: "AUSTRALIA" },
  { id: "2", name: "BAHARAIN" },
  { id: "3", name: "BANGLADESH" },
  { id: "4", name: "CHINA" },
  { id: "5", name: "SOUTH KOREA" },
  { id: "6", name: "DENMARK" },
  { id: "7", name: "DUBAI" },
  { id: "8", name: "GERMANY" },
  { id: "9", name: "INDIA" },
  { id: "10", name: "VIETNAM" },
  { id: "11", name: "SINGAPORE" },
  { id: "12", name: "BELGIUM" },
  { id: "13", name: "FRANCE" },
  { id: "14", name: "IRE-LAND" },
  { id: "15", name: "NEW-ZEALAND" },
  { id: "16", name: "CANADA" },
  { id: "17", name: "IRAQ" },
  { id: "18", name: "ISRAEL" },
  { id: "19", name: "JAPAN" },
  { id: "20", name: "KUWAIT" },
  { id: "21", name: "LIBIA" },
  { id: "22", name: "MALDIVES" },
  { id: "23", name: "MALAYSIA" },
  { id: "24", name: "PHILIPPINES" },
  { id: "25", name: "POLAND" },
];

const foreign_reasons = [
  { id: "1", name: "रोजगारी" },
  { id: "2", name: "ब्यापार" },
  { id: "3", name: "अध्ययन" },
  { id: "4", name: "आप्रबास" },
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
  { id: "3", name: "गोबर ग्याँस" },
  { id: "4", name: "दाउरा" },
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
export {
  hoh_roles,
  gender_choice,
  relations,
  mother_tongues,
  education_levels,
  education_statuses,
  marital_statuses,
  vehicle_types,
  disability_types,
  disability_card_types,
  disease_names,
  death_reasons,
  countries,
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
};
