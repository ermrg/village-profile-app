const hoh_roles = [
  {
    label: "बाबु",
    value: "father",
  },
  {
    label: "आमा",
    value: "mother",
  },
  {
    label: "जेठो दाई",
    value: "eldest_son",
  },
];
const gender_choice = [
  {
    label: "पुरष",
    value: "male",
  },
  {
    label: "महिला",
    value: "female",
  },
  {
    label: "अन्य",
    value: "other",
  },
];

const relations = [
  {
    value: "1",
    label: "आफै",
  },
  {
    value: "2",
    label: "श्रीमती",
  },
  {
    value: "3",
    label: "श्रीमान",
  },
  {
    value: "4",
    label: "बुबा",
  },
  {
    value: "4",
    label: "बुबा",
  },
  {
    value: "5",
    label: "आमा",
  },
  {
    value: "6",
    label: "छोरा",
  },
  {
    value: "7",
    label: "छोरी",
  },
  {
    value: "8",
    label: "हजुर आमा",
  },
  {
    value: "9",
    label: "हजुर बुबा",
  },
  {
    value: "10",
    label: "दाजु",
  },
  {
    value: "11",
    label: "दिदी",
  },
  {
    value: "12",
    label: "भाई",
  },
  {
    value: "13",
    label: "बहिनी",
  },
  {
    value: "14",
    label: "नन्द",
  },
  {
    value: "15",
    label: "बुहारी",
  },
  {
    value: "16",
    label: "काका",
  },
  {
    value: "17",
    label: "काकी",
  },
  {
    value: "18",
    label: "भतिज",
  },
  {
    value: "19",
    label: "भाउजु",
  },
  {
    value: "20",
    label: "नातिनी",
  },
  {
    value: "21",
    label: "नाती",
  },
  {
    value: "22",
    label: "फुफु",
  },
  {
    value: "23",
    label: "भान्जा",
  },
];

const mother_tongues = [
  {
    value: "1",
    label: "नेपाली",
  },
  // {
  //   value: "2",
  //   label: "मैथिली",
  // },
  // {
  //   value: "3",
  //   label: "थारु",
  // },
  {
    value: "4",
    label: "तामाङ",
  },
  // {
  //   value: "5",
  //   label: "नेपालभाषा",
  // },
  // {
  //   value: "6",
  //   label: "बज्जीका",
  // },
  {
    value: "7",
    label: "मगर",
  },
  // {
  //   value: "8",
  //   label: "डोटली",
  // },
  // {
  //   value: "9",
  //   label: "उर्दु",
  // },
  // {
  //   value: "10",
  //   label: "अवधी",
  // },
  {
    value: "11",
    label: "लिम्बु",
  },
  {
    value: "12",
    label: "गुरुङ",
  },
  // {
  //   value: "13",
  //   label: "बैतडेली",
  // },
  {
    value: "14",
    label: "राई",
  },
  // {
  //   value: "15",
  //   label: "अछामी",
  // },
  // {
  //   value: "16",
  //   label: "बान्तवा",
  // },
  // {
  //   value: "17",
  //   label: "राजबंशी",
  // },
  // {
  //   value: "18",
  //   label: "शेर्पा",
  // },
  // {
  //   value: "19",
  //   label: "भोजपुरी",
  // },
  {
    value: "20",
    label: "थामी",
  },
  {
    value: "21",
    label: "माझी",
  },
  {
    value: "22",
    label: "अन्य",
  },
];

const education_levels = [
  {
    value: "1",
    label: "पुर्व प्राथमिक",
  },
  {
    value: "2",
    label: "आधारभुत तह",
  },
  {
    value: "3",
    label: "माध्यामिक तह",
  },
  {
    value: "4",
    label: "स्नातक",
  },
  {
    value: "5",
    label: "स्नातकोत्तर",
  },
  {
    value: "6",
    label: "एमफिल र बिद्यावारिधी",
  },
  {
    value: "7",
    label: "प्राविधिक एस.एल.सी (एस.ई.ई)",
  },
  {
    value: "8",
    label: "साधारण लेखपद (साक्षर)",
  },
  {
    value: "9",
    label: "लेखपद गर्न नसक्ने (निरक्षर)",
  },
];

const education_statuses = [
  {
    value: "1",
    label: "अध्ययनरत",
  },
  {
    value: "2",
    label: "पढाइ छाडेको",
  },
  {
    value: "3",
    label: "अध्ययन पुरा",
  },
  {
    value: "4",
    label: "निरक्षर",
  },
];

const marital_statuses = [
  {
    value: "1",
    label: "विवाहित",
  },
  {
    value: "2",
    label: "अविवाहित",
  },
  {
    value: "3",
    label: "एकल बिबाह",
  },
  {
    value: "4",
    label: "बहु बिबाह",
  },
  {
    value: "5",
    label: "पुन: बिबाह",
  },
  {
    value: "6",
    label: "बिदुर / बिधुवा",
  },
  {
    value: "7",
    label: "सम्बन्ध बिच्छेद",
  },
  {
    value: "8",
    label: "बिबाहित तर अलग बसेको",
  },
];

const vehicle_types = [
  { value: "1", label: "अटो  रिक्सा" },
  { value: "2", label: "मोटरसाइकल" },
  { value: "3", label: "कार" },
  { value: "4", label: "जिप/भ्यान" },
  { value: "5", label: "बस" },
  { value: "6", label: "ट्रक/ त्रपर" },
  { value: "7", label: "डोजर लोडर हेभी उपकरण" },
];

const disability_types = [
  { value: "1", label: "दृष्टिबिहिन" },
  { value: "2", label: "न्यून दृष्टिबिहिन" },
  { value: "3", label: "बहिरा" },
  { value: "4", label: "बोल्न नसक्ने" },
  { value: "5", label: "सुस्त मनस्थिति" },
  { value: "6", label: "सुस्त श्रवन" },
  { value: "7", label: "हातखुट्टा नचल्ने" },
];

const disability_card_types = [
  { value: "1", label: "रातो" },
  { value: "2", label: "निलो" },
  { value: "3", label: "सेतो" },
  { value: "4", label: "पाएको छैन" },
];

const disease_names = [
  { value: "प्रेसर", label: "प्रेसर" },
  { value: "सुगर", label: "सुगर" },
  { value: "क्षयरोग", label: "क्षयरोग" },
  { value: "क्यान्सर", label: "क्यान्सर" },
  { value: "एच.आई.भि/ एड्स", label: "एच.आई.भि/ एड्स" },
  { value: "ग्याष्ट्रिक", label: "ग्याष्ट्रिक" },
  { value: "हेपाटाईटिस बी", label: "हेपाटाईटिस बी" },
  { value: "अन्य", label: "अन्य" },
];

const death_reasons = [
  { value: "1", label: "कालगति" },
  { value: "2", label: "दुर्घटना" },
  { value: "3", label: "आत्महत्या" },
  { value: "4", label: "हत्या" },
  { value: "5", label: "दिर्घरोगी" },
  { value: "6", label: "थाहा नभएको" },
  { value: "7", label: "हराएको" },
  { value: "8", label: "बेपत्ता पारिएको" },
];

const countries = [
  { value: "1", label: "AUSTRALIA" },
  { value: "2", label: "BAHARAIN" },
  { value: "3", label: "BANGLADESH" },
  { value: "4", label: "CHINA" },
  { value: "5", label: "SOUTH KOREA" },
  { value: "6", label: "DENMARK" },
  { value: "7", label: "DUBAI" },
  { value: "8", label: "GERMANY" },
  { value: "9", label: "INDIA" },
  { value: "10", label: "VIETNAM" },
  { value: "11", label: "SINGAPORE" },
  { value: "12", label: "BELGIUM" },
  { value: "13", label: "FRANCE" },
  { value: "14", label: "IRE-LAND" },
  { value: "15", label: "NEW-ZEALAND" },
  { value: "16", label: "CANADA" },
  { value: "17", label: "IRAQ" },
  { value: "18", label: "ISRAEL" },
  { value: "19", label: "JAPAN" },
  { value: "20", label: "KUWAIT" },
  { value: "21", label: "LIBIA" },
  { value: "22", label: "MALDIVES" },
  { value: "23", label: "MALAYSIA" },
  { value: "24", label: "PHILIPPINES" },
  { value: "25", label: "POLAND" },
];

const foreign_reasons = [
  { value: "1", label: "रोजगारी" },
  { value: "2", label: "ब्यापार" },
  { value: "3", label: "अध्ययन" },
  { value: "4", label: "आप्रबास" },
  { value: "5", label: "अन्य" },
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
  { value: "1", label: "मुलको धारा" },
  { value: "6", label: "लिफ्टको धारा" },
  { value: "2", label: "कुवा" },
  { value: "3", label: "मूल" },
  { value: "4", label: "खोला" },
  { value: "7", label: "अन्य" },
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
  { value: "1", label: "पक्की" },
  { value: "2", label: "कच्ची" },
  { value: "3", label: "नभएको" },
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
  developmentOption
};
