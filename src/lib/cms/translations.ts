export type Language = 'en' | 'kn';

export interface Translations {
  navigation: {
    about: string;
    programs: string;
    impact: string;
    events: string;
    donate: string;
    contactUs: string;
  };
  hero: {
    subtitle: string;
  };
  about: {
    title: string;
    mission: {
      title: string;
      content: string;
    };
    vision: {
      title: string;
      content: string;
    };
  };
  programs: {
    title: string;
    subtitle: string;
  };
  impact: {
    title: string;
    subtitle: string;
  };
  events: {
    title: string;
    subtitle: string;
    registerNow: string;
    viewAllEvents: string;
  };
  donate: {
    title: string;
    subtitle: string;
    supportChild: string;
    supportChildDescription: string;
    sponsorTherapy: string;
    sponsorTherapyDescription: string;
    donateDevices: string;
    donateDevicesDescription: string;
    donateNow: string;
  };
  footer: {
    description: string;
    contactInfo: string;
    quickLinks: string;
    about: string;
    programs: string;
    impact: string;
    events: string;
    donate: string;
    contact: string;
    copyright: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    sendMessage: string;
  };
  common: {
    phone: string;
    email: string;
    address: string;
    ngoName: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      about: "About",
      programs: "Programs",
      impact: "Impact",
      events: "Events",
      donate: "Donate",
      contactUs: "Contact Us"
    },
    hero: {
      subtitle: "Empowering specially abled children through comprehensive care, innovative therapies, and unwavering support for a brighter future."
    },
    about: {
      title: "About Our Mission & Vision",
      mission: {
        title: "Our Mission",
        content: "Empowering children with special needs to live independently and with dignity, supporting their integration into society."
      },
      vision: {
        title: "Our Vision",
        content: "A world where all specially abled children have equal opportunities and are valued members of society."
      }
    },
    programs: {
      title: "Programs & Services",
      subtitle: "Comprehensive programs designed to support every aspect of a child's development and family needs"
    },
    impact: {
      title: "Impact & Testimonials",
      subtitle: "Real transformations that inspire hope and demonstrate the impact of our programs"
    },
    events: {
      title: "Events & Workshops",
      subtitle: "Join our community events, workshops, and awareness programs",
      registerNow: "Register Now",
      viewAllEvents: "View All Events"
    },
    donate: {
      title: "Support Our Mission",
      subtitle: "Your donation can make a real difference in the lives of specially abled children. Every contribution helps us provide better care, therapy, and opportunities.",
      supportChild: "Support a Child",
      supportChildDescription: "Sponsor a child's complete care including therapy, education, and daily needs.",
      sponsorTherapy: "Sponsor Therapy",
      sponsorTherapyDescription: "Fund specialized therapy sessions for children with specific needs.",
      donateDevices: "Donate Devices",
      donateDevicesDescription: "Help provide assistive devices and equipment for children in need.",
      donateNow: "Donate Now"
    },
    footer: {
      description: "Empowering specially abled children through comprehensive care, innovative therapies, and unwavering support for a brighter future.",
      contactInfo: "Contact Info",
      quickLinks: "Quick Links",
      about: "About Us",
      programs: "Programs",
      impact: "Impact",
      events: "Events",
      donate: "Donate",
      contact: "Contact",
      copyright: "All rights reserved."
    },
    contact: {
      title: "Get In Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message"
    },
    common: {
      phone: "+91 98765 43210",
      email: "info@abhyudaya.org",
      address: "Bangalore, Karnataka",
      ngoName: "Abhyudaya Trust"
    }
  },
  kn: {
    navigation: {
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      programs: "ಕಾರ್ಯಕ್ರಮಗಳು",
      impact: "ಪರಿಣಾಮ",
      events: "ಕಾರ್ಯಕ್ರಮಗಳು",
      donate: "ದಾನ",
      contactUs: "ಸಂಪರ್ಕಿಸಿ"
    },
    hero: {
      subtitle: "ವಿಶೇಷ ಸಾಮರ್ಥ್ಯದ ಮಕ್ಕಳನ್ನು ಸಮಗ್ರ ಸಂರಕ್ಷಣೆ, ನವೀನ ಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಅಚಲ ಬೆಂಬಲದ ಮೂಲಕ ಸಬಲೀಕರಣ ಮಾಡಿ, ಹೆಚ್ಚು ಉಜ್ವಲ ಭವಿಷ್ಯಕ್ಕಾಗಿ."
    },
    about: {
      title: "ನಮ್ಮ ಧ್ಯೇಯ ಮತ್ತು ದೃಷ್ಟಿ",
      mission: {
        title: "ನಮ್ಮ ಧ್ಯೇಯ",
        content: "ವಿಶೇಷ ಅಗತ್ಯತೆಗಳಿರುವ ಮಕ್ಕಳನ್ನು ಸ್ವತಂತ್ರ ಮತ್ತು ಗೌರವಯುತ ಜೀವನಕ್ಕೆ ಸಬಲೀಕರಿಸುವುದು, ಅವರನ್ನು ಸಮಾಜದಲ್ಲಿ ಏಕೀಕರಿಸುವುದು."
      },
      vision: {
        title: "ನಮ್ಮ ದೃಷ್ಟಿ",
        content: "ಪ್ರತಿ ವಿಶೇಷ ಸಾಮರ್ಥ್ಯದ ಮಗುವಿಗೂ ಸಮಾನ ಅವಕಾಶಗಳು ಮತ್ತು ಸಮಾಜದಲ್ಲಿ ಮೌಲ್ಯಯುತ ಸ್ಥಾನ ದೊರಕುವ ಜಗತ್ತು."
      }
    },
    programs: {
      title: "ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸೇವೆಗಳು",
      subtitle: "ಮಗುವಿನ ಬೆಳವಣಿಗೆಯ ಪ್ರತಿಯೊಂದು ಅಂಶ ಮತ್ತು ಕುಟುಂಬದ ಅಗತ್ಯತೆಗಳನ್ನು ಬೆಂಬಲಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಮಗ್ರ ಕಾರ್ಯಕ್ರಮಗಳು"
    },
    impact: {
      title: "ಪರಿಣಾಮ ಮತ್ತು ಸಾಕ್ಷ್ಯಗಳು",
      subtitle: "ಆಶೆ ಮೂಡಿಸುವ ಮತ್ತು ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ಪರಿಣಾಮವನ್ನು ಪ್ರದರ್ಶಿಸುವ ನಿಜವಾದ ರೂಪಾಂತರಗಳು"
    },
    events: {
      title: "ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳು",
      subtitle: "ನಮ್ಮ ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳು, ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಸೇರಿ",
      registerNow: "ಈಗ ನೋಂದಾಯಿಸಿ",
      viewAllEvents: "ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಿ"
    },
    donate: {
      title: "ನಮ್ಮ ಧ್ಯೇಯವನ್ನು ಬೆಂಬಲಿಸಿ",
      subtitle: "ನಿಮ್ಮ ದಾನವು ವಿಶೇಷ ಸಾಮರ್ಥ್ಯದ ಮಕ್ಕಳ ಜೀವನದಲ್ಲಿ ನಿಜವಾದ ವ್ಯತ್ಯಾಸವನ್ನು ಮಾಡಬಹುದು. ಪ್ರತಿಯೊಂದು ಕೊಡುಗೆಯೂ ನಮಗೆ ಉತ್ತಮ ಸಂರಕ್ಷಣೆ, ಚಿಕಿತ್ಸೆ ಮತ್ತು ಅವಕಾಶಗಳನ್ನು ಒದಗಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      supportChild: "ಮಗುವನ್ನು ಬೆಂಬಲಿಸಿ",
      supportChildDescription: "ಚಿಕಿತ್ಸೆ, ಶಿಕ್ಷಣ ಮತ್ತು ದೈನಂದಿನ ಅಗತ್ಯತೆಗಳನ್ನು ಒಳಗೊಂಡ ಮಗುವಿನ ಸಂಪೂರ್ಣ ಸಂರಕ್ಷಣೆಯನ್ನು ಪ್ರಾಯೋಜಿಸಿ.",
      sponsorTherapy: "ಚಿಕಿತ್ಸೆಯನ್ನು ಪ್ರಾಯೋಜಿಸಿ",
      sponsorTherapyDescription: "ನಿರ್ದಿಷ್ಟ ಅಗತ್ಯತೆಗಳಿರುವ ಮಕ್ಕಳಿಗೆ ವಿಶೇಷ ಚಿಕಿತ್ಸೆ ಸೆಷನ್‌ಗಳಿಗೆ ಹಣಕಾಸು ಒದಗಿಸಿ.",
      donateDevices: "ಸಾಧನಗಳನ್ನು ದಾನ ಮಾಡಿ",
      donateDevicesDescription: "ಅಗತ್ಯವಿರುವ ಮಕ್ಕಳಿಗೆ ಸಹಾಯಕ ಸಾಧನಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಒದಗಿಸಲು ಸಹಾಯ ಮಾಡಿ.",
      donateNow: "ಈಗ ದಾನ ಮಾಡಿ"
    },
    footer: {
      description: "ವಿಶೇಷ ಸಾಮರ್ಥ್ಯದ ಮಕ್ಕಳನ್ನು ಸಮಗ್ರ ಸಂರಕ್ಷಣೆ, ನವೀನ ಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಅಚಲ ಬೆಂಬಲದ ಮೂಲಕ ಸಬಲೀಕರಣ ಮಾಡಿ, ಹೆಚ್ಚು ಉಜ್ವಲ ಭವಿಷ್ಯಕ್ಕಾಗಿ.",
      contactInfo: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
      quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      programs: "ಕಾರ್ಯಕ್ರಮಗಳು",
      impact: "ಪರಿಣಾಮ",
      events: "ಕಾರ್ಯಕ್ರಮಗಳು",
      donate: "ದಾನ",
      contact: "ಸಂಪರ್ಕ",
      copyright: "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲಾಗಿದೆ."
    },
    contact: {
      title: "ಸಂಪರ್ಕಿಸಿ",
      name: "ಹೆಸರು",
      email: "ಇಮೇಲ್",
      message: "ಸಂದೇಶ",
      sendMessage: "ಸಂದೇಶ ಕಳುಹಿಸಿ"
    },
    common: {
      phone: "+91 98765 43210",
      email: "info@abhyudaya.org",
      address: "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ",
      ngoName: "ಅಭ್ಯುದಯ ಟ್ರಸ್ಟ್"
    }
  }
};

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}; 