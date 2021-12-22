type OptionType = {
    value: string;
    label: string;
  };
const hoh_roles = [
  {
    key: "बाबु",
    value: "father",
  },
  {
    key: "आमा",
    value: "mother",
  },
  {
    key: "जेठो दाई",
    value: "eldest_son",
  },
];
const gender_choice = [
  {
    key: "पुरष",
    value: "male",
  },
  {
    key: "महिला",
    value: "female",
  },
  {
    key: "अन्य",
    value: "other",
  },
];

const relations  = [
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
    value: '6',
    label: "छोरा",
  },
  {
    value: '7',
    label: "छोरी",
  },
  {
    value: '8',
    label: "हजुर आमा",
  },
  {
    value: '9',
    label: "हजुर बुबा",
  },
  {
    value: '10',
    label: "दाजु",
  },
  {
    value: '11',
    label: "दिदी",
  },
  {
    value: '12',
    label: "भाई",
  },
  {
    value: '13',
    label: "बहिनी",
  },
  {
    value: '14',
    label: "नन्द",
  },
  {
    value: '15',
    label: "बुहारी",
  },
  {
    value: '16',
    label: "काका",
  },
  {
    value: '17',
    label: "काकी",
  },
  {
    value: '18',
    label: "भतिज",
  },
  {
    value: '19',
    label: "भाउजु",
  },
  {
    value: '20',
    label: "नातिनी",
  },
  {
    value: '21',
    label: "नाती",
  },
  {
    value: '22',
    label: "फुफु",
  },
  {
    value: '23',
    label: "भान्जा",
  },
];

export { hoh_roles, gender_choice, relations };
