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
};
