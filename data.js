/* =========================
   RESEARCH META
========================= */
const RESEARCH = {
  goal: "Get an overview of which topics are currently current in the field of phishing.",
  questions: [
    "What topics occur?",
    "How are these topics defined?",
    "What is the frequency of the topics?"
  ],
  query: '("phishing" OR "spear-phishing") AND ("Definition")',
  databases: ["Google Scholar", "IEEE Xplore", "ACM Digital Library"],
  inclusion: [
    "Peer-reviewed article (2020–2024)",
    "Contains at least one definition of phishing"
  ],
  exclusion: ["Non-English publications"],
  searchResults: [
    {
      source: "Google Scholar",
      query: '("phishing" OR "spear-phishing") AND ("Definition")',
      results: "About 19,500 results (0.04 sec)"
    }
  ]
};


/* =========================
   RESULT COUNTS
========================= */
const RESULT_COUNTS = {
  perDatabase: [
    { db: "ACM Digital Library", hits: 865, screened: 30, kept: 11, duplicated: 2 },
    { db: "IEEE Xplore",        hits: 400, screened: 300, kept: 46, duplicated: 3 }, // +1 screened, +1 kept
    { db: "Google Scholar",     hits: 18900, screened: 500, kept: 16 }
  ],
  deduplication: {
    uniqueAfterDedup: 42, // 41 → 42
    selectedFinal:   42  // 41 → 42
  }
};





/* =========================
   TOPICS
========================= */







/* =========================
   PAPERS
========================= */
const PAPERS = [
  {
    database: "Google Scholar",
    title: "A literature review on classification of phishing attacks",
    authors: "S. Chanti; T. Chithralekha",
    year: 2022,
    venue:
      "International Journal of Advanced Technology and Engineering Exploration, Vol. 9(89)",
    link: "http://dx.doi.org/10.19101/IJATEE.2021.875031",
    definitions: {
      phishing: {
        quote:
          "Phishing is a fraudulent activity through which the phisher/attacker tries to lure internet users into stealing their personal information/credentials to gain financially.",
        where: "Introduction"
      },
      spearPhishing: {
        quote:
          "In Spear phishing, a suspicious email is received from a known person for malicious purpose.",
        where: "Section 5.1.1.1"
      },
      pharming: {
        quote:
          "Pharming is a refined form of phishing i.e., \"phishing without lure\".",
        where: "Introduction"
      },
      vishing: {
        quote:
          "Vishing is the other name of phone phishing.",
        where: "Section 5.1.1.1"
      },
      ransomware: {
        quote:
          "Ransomware is a type of malware that blocks users from accessing their details from a PC.",
        where: "Section 5.2.1"
      }
    }
  },

  {
    database: "IEEE Xplore",
    title: "Phishing or Not Phishing? A Survey on the Detection of Phishing Websites",
    authors: "Rasha Zieni; Luisa Massari; Maria Carla Calzarossa",
    year: 2023,
    venue: "IEEE Access, Volume 11",
    link: "https://doi.org/10.1109/ACCESS.2023.3247135",
    definitions: {
      phishing: {
        quote:
          "Phishing is a dangerous security threat that exploits sophisticated psychological and social engineering techniques.",
        where: "Section I – Introduction"
      }
    }
  },

  {
    database: "Google Scholar (ACM)",
    title:
      "Human Factors in Phishing Attacks: A Systematic Literature Review",
    authors:
      "Giuseppe Desolda; Lauren S. Ferro; Andrea Marrella; Tiziana Catarci; Maria Francesca Costabile",
    year: 2021,
    venue: "ACM Computing Surveys, Vol. 54, No. 8",
    link: "https://doi.org/10.1145/3469886",
    definitions: {
      phishing: {
        quote:
          "Phishing is the fraudulent attempt to obtain sensitive information by disguising oneself as a trustworthy entity.",
        where: "Section 2.3"
      },
      spearPhishing: {
        quote:
          "Spear phishing targets specific individuals.",
        where: "Section 2.3"
      },
      vishing: {
        quote:
          "Vishing involves fraudulent phone calls.",
        where: "Section 2.3"
      },
      smishing: {
        quote:
          "Smishing consists of SMS-based phishing.",
        where: "Section 2.3"
      },
      pharming: {
        quote:
          "Pharming redirects users to fraudulent websites.",
        where: "Section 2.3"
      }
    }
  },

  {
    database: "Google Scholar (Elsevier)",
    title:
      "Which factors predict susceptibility to phishing? An empirical study",
    authors:
      "Liliana Ribeiro; Inês Sousa Guedes; Carla Sofia Cardoso",
    year: 2024,
    venue: "Computers & Security, Volume 136",
    link: "https://doi.org/10.1016/j.cose.2023.103558",
    definitions: {
      phishing: {
        quote:
          "Phishing is a scalable act of deception whereby impersonation is used to obtain information from a target.",
        where: "Literature review"
      },
      spearPhishing: {
        quote:
          "Spear phishing targets specific individuals or organizations.",
        where: "Section 2"
      },
      vishing: {
        quote:
          "Vishing is phone-based phishing.",
        where: "Section 2"
      },
      smishing: {
        quote:
          "Smishing uses SMS or MMS messages.",
        where: "Section 2"
      }
    }
  },

  {
    database: "IEEE Xplore",
    title: "A New Approach for Spear Phishing Detection",
    authors:
      "Yohanes Priyo Atmojo; I Made Darma Susila; Muhammad Riza Hilmi; Erma Sulistyo Rini; Lilis Yuningsih; Dandy Pramana Hostiadi",
    year: 2021,
    venue:
      "3rd East Indonesia Conference on Computer and Information Technology (EIConCIT)",
    link: "https://doi.org/10.1109/EIConCIT50028.2021.9431890",
    definitions: {
      spearPhishing: {
        quote:
          "Spear phishing is a phishing mail activity that performs information data theft with personal information being attacked.",
        where: "Section I – Introduction"
      }
    }
  },

  {
    database: "Google Scholar (USENIX)",
    title: "Towards Adversarial Phishing Detection",
    authors:
      "T. K. Panum; K. Hageman; R. R. Hansen; J. M. Pedersen",
    year: 2020,
    venue:
      "13th USENIX Workshop on Cyber Security Experimentation and Test (CSET)",
    link: "https://www.usenix.org/conference/cset20/presentation/panum",
    definitions: {
      phishing: {
        quote:
          "Phishing is a scalable act of deception whereby impersonation is used to obtain information from a target.",
        where:
          "Axioms – Lastdrager et al.’s Definition of Phishing Attacks"
      },
      adaptivePhishing: {
        quote:
          "Adaptive phishing attacks are attacks that remain undetected for a certain detection solution, yet maintain the functional properties of phishing attacks.",
        where:
          "Section: Adversarial Robustness – Adaptive attacks"
      }
    }
  },

  {
    database: "Google Scholar (Elsevier)",
    title:
      "An improved ELM-based and data preprocessing integrated approach for phishing detection considering comprehensive features",
    authors:
      "Liqun Yang; Jiawei Zhang; Xiaozhe Wang; Zhi Li; Zhoujun Li; Yueying He",
    year: 2021,
    venue:
      "Expert Systems With Applications, Volume 165, Article 113863",
    link: "https://doi.org/10.1016/j.eswa.2020.113863",
    definitions: {
      phishing: {
        quote:
          "Phishing is a common cyber-attack method with attempts to illegally obtain sensitive data by publishing fraud websites pretending to be legitimate.",
        where: "Section 1 – Introduction"
      }
    }
  },

  {
    database: "Google Scholar (Springer)",
    title:
      "An intelligent cyber security phishing detection system using deep learning techniques",
    authors:
      "Ala Mughaid; Shadi AlZu’bi; Adnan Hnaif; Salah Taamneh; Asma Alnajjar; Esraa Abu Elsoud",
    year: 2022,
    venue:
      "Cluster Computing, Volume 25, Pages 3819–3828 (Springer Nature)",
    link: "https://doi.org/10.1007/s10586-022-03604-4",
    dates: {
      received: "17-December-2021",
      revised: "20-April-2022",
      accepted: "22-April-2022",
      publishedOnline: "14-May-2022"
    },
    definitions: {
      phishing: {
        quote:
          "Phishing is a type of social engineering attack often used to steal user data which is used to access important accounts and can result in identity theft and financial loss.",
        where: "Section 1 – Introduction"
      },
      emailPhishing: {
        quote:
          "Phishers carry out their attacks by using E-mail ''phishing'' which is the most common channel for phishing and reverse social engineering attacks.",
        where: "Section 1 – Introduction"
      },
      smishing: {
        quote:
          "Instant messaging ''smseshing'' are gaining popularity among social engineers as tools for phishing and reverse social engineering attacks.",
        where: "Section 1 – Introduction"
      },
      vishing: {
        quote:
          "Telephone, Voice over IP ''vishing'' are common attack channels for social engineers to make their victim deliver sensitive information.",
        where: "Section 1 – Introduction"
      }
    }
  },

  {
    database: "IEEE Xplore",
    title:
      "A Systematic Literature Review on Phishing Email Detection Using Natural Language Processing Techniques",
    authors: "—",
    year: 2022,
    venue: "IEEE Access",
    link: "https://doi.org/10.1109/ACCESS.2022.3183083",
    definitions: {
      phishing: {
        quote:
          "Phishing is a kind of social engineering threat that exploits the ignorance of uninformed internet users to obtain sensitive information from them in a deceiving manner.",
        where: "Section I – Introduction"
      },
      spearPhishing: {
        quote:
          "Phishing attacks are particularly a problem when attackers are targeting specific individuals or organizations – which is often called “spear-phishing”.",
        where: "Section I – Introduction"
      }
    }
  }, 
  {
  database: "ScienceDirect (Elsevier)",
  title:
    "LogoSENSE: A companion HOG based logo detection scheme for phishing web page and E-mail brand recognition",
  authors:
    "Ahmet Selman Bozkir; Murat Aydos",
  year: 2020,
  venue:
    "Computers & Security, Volume 95, Article 101855",
  link: "https://doi.org/10.1016/j.cose.2020.101855",
  definitions: {
    phishing: {
      quote:
        "By definition, phishing is a security threat that attempts to deceive innocent users into capturing their confidential information (e.g., username, password, credit card details and social security number) by combining social engineering and web site spoofing techniques.",
      where: "Section 1 – Introduction"
    },
    spearPhishing: {
      quote:
        "APWG has also pointed out a new emerging threat, so-called spear-phishing – a variant of phishing – which targets specific users or companies to obtain their private contents (e.g. business secrets, personal repositories) instead of financial profit.",
      where: "Section 1 – Introduction"
    }
  }
  
}, 
{
  database: "IEEE Xplore",
  title:
    "PhiKitA: Phishing Kit Attacks Dataset for Phishing Websites Identification",
  authors:
    "Felipe Castaño; Eduardo Fidalgo Fernández; Rocío Alaiz-Rodríguez; Enrique Alegre",
  year: 2023,
  venue: "IEEE Access, Volume 11",
  link: "https://doi.org/10.1109/ACCESS.2023.3268027",
  dates: {
    received: "22-March-2023",
    accepted: "9-April-2023",
    published: "18-April-2023",
    currentVersion: "28-April-2023"
  },
  definitions: {
    phishing: {
      quote:
        "Phishing is a cybercrime that uses social engineering and aims to deceive people and steal their financial account credentials or other sensitive data.",
      where: "Section I – Introduction"
    }
  }
}, 
{
  database: "International Journal of Information Security Science",
  title: "A Description Logic Ontology for Email Phishing",
  authors:
    "Franklin Tchakounté; Djeguedem Molengar; Justin Moskolaï Ngossaha",
  year: 2020,
  venue:
    "International Journal of Information Security Science, Vol. 9, No. 1, pp. 44–63",
  definitions: {
    phishing: {
      quote:
        "Phishing consists to identify malicious activities built by attackers to lure users, whom provide sensitive information such as bank account number, password, and so on.",
      where: "Section 1 – Introduction"
    },
    emailPhishing: {
      quote:
        "Phishing includes e-mail phishing which counterfeits an e-mail and URL phishing which designs fake URL to redirect users to the attacker.",
      where: "Section 1 – Introduction"
    },
    spearPhishing: {
      quote:
        "This document deals with spear phishing characterized by the fact that phishers designed a fake e-mail targeting a specific group of individuals.",
      where: "Section 3.7 – Phishing"
    }
  }
}, 
{
  database: "Google Scholar (Elsevier)",
  title: "A predictive model for phishing detection",
  authors: "A.A. Orunsolu; A.S. Sodiya; A.T. Akinwale",
  year: 2022,
  venue:
    "Journal of King Saud University – Computer and Information Sciences, Volume 34",
  link: "https://doi.org/10.1016/j.jksuci.2019.12.005",
  dates: {
    received: "8-April-2019",
    revised: "12-November-2019",
    accepted: "13-December-2019",
    publishedOnline: "24-December-2019",
    journalIssueYear: 2022
  },
  definitions: {
    phishing: {
      quote:
        "Phishing is an online fraudulent act that uses social engineering and technical subterfuge to deceive Internet users and acquire their sensitive data or critical online information.",
      where: "Section 1 – Introduction"
    },
    spearPhishing: {
      quote:
        "Phishing attacks are particularly a problem when attackers are targeting specific individuals or organizations – which is often called ‘spear-phishing’.",
      where: "Section 1 – Introduction"
    },
    ransomware: {
      quote:
        "Phishers have developed ‘ransomware’ which executes a malicious code that adversely affects computing resources and demands a ransom payment to restore the resources to the original state.",
      where: "Section 1 – Introduction"
    }
  }
}, 

  {
  database: "IEEE Xplore",
  title:
    "Different Types of Phishing Attacks and Detection Techniques: A Review",
  authors: "Kiran D. Tandale; Sunil N. Pawar",
  year: 2020,
  venue:
    "2020 International Conference on Smart Innovations in Design, Environment, Management, Planning and Computing (ICSIDEMPC)",
  link: "https://doi.org/10.1109/ICSIDEMPC49020.2020.9299624",

  definitions: {
    phishing: {
      quote:
        "Phishing attacks is the combination of social engineering and the technology for gaining the restricted access of information of end user.",
      where: "Section I – Introduction"
    },
    phishing_alt1: {
      quote:
        "Phishing is specially designed for stealing important personal data like debit, credit card information, credentials or any other personal information.",
      where: "Section I – Introduction"
    },
    phishing_alt2: {
      quote:
        "Phishing is social engineering type of attack where criminals spreads SMS and emails among the peoples and get their information or install malware on PC.",
      where: "Section IV – Phishing Attack and It’s Impacts"
    }
  },

  otherMentionedTypes: {
    note:
      "The following phishing types are explicitly listed by the authors but not individually defined.",
    where: "Section II – Anatomy of Phishing Attacks",
    types: [
      "Search engine phishing",
      "Man-in-the-middle phishing",
      "Content injection",
      "DNS-based phishing",
      "Data theft",
      "Host file poisoning",
      "Deceptive phishing",
      "Malware-based phishing",
      "Key logger & screen capturing",
      "Session hacking",
      "Web Trojans"
    ]
  }
}, 
{
  database: "IEEE Xplore",
  title:
    "An intelligent cyber security phishing detection system using deep learning techniques",
  authors:
    "Ala Mughaid; Shadi AlZu’bi; Adnan Hnaif; Salah Taamneh; Asma Alnajjar; Esraa Abu Elsoud",
  year: 2022,
  venue:
    "Cluster Computing, Volume 25, Pages 3819–3828 (Springer Nature)",
  link: "https://doi.org/10.1007/s10586-022-03604-4",
  dates: {
    received: "17-December-2021",
    revised: "20-April-2022",
    accepted: "22-April-2022",
    publishedOnline: "14-May-2022"
  },
  definitions: {
    phishing: {
      quote:
        "Phishing is a type of social engineering attack often used to steal user data which is used to access important accounts and can result in identity theft and financial loss.",
      where: "Section 1 – Introduction",
      context:
        "Defined as a general social engineering attack aimed at stealing sensitive user data and credentials."
    },
    emailPhishing: {
      quote:
        "Phishers carry out their attacks by using E-mail ''phishing'' which is the most common channel for phishing and reverse social engineering attacks.",
      where: "Section 1 – Introduction",
      context:
        "Defined in the context of communication channels, identifying email as the most commonly used medium for phishing."
    },
    smishing: {
      quote:
        "Instant messaging ''smseshing'' are gaining popularity among social engineers as tools for phishing and reverse social engineering attacks.",
      where: "Section 1 – Introduction",
      context:
        "Defined as phishing conducted via SMS or instant messaging services, emphasizing mobile-based attack vectors."
    },
    vishing: {
      quote:
        "Telephone, Voice over IP ''vishing'' are common attack channels for social engineers to make their victim deliver sensitive information.",
      where: "Section 1 – Introduction",
      context:
        "Defined as voice-based phishing attacks using telephone or VoIP communication channels."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Who Stole My NFT? Investigating Web3 NFT Phishing Scams on Ethereum",
  authors: "Jingjing Yang; Jieli Liu; Dan Lin; Jiajing Wu; Baoying Huang; Quanzhong Li; Zibin Zheng",
  year: 2024,
  venue: "IEEE Transactions on Information Forensics and Security (TIFS), Vol. 19",
  link: "https://doi.org/10.1109/TIFS.2024.3463541",
  dates: {
    received: "16 April 2024",
    revised: "5 August 2024",
    accepted: "13 September 2024",
    published: "18 September 2024",
    currentVersion: "9 October 2024"
  },
  definitions: {
    nftDeceptiveSignature: {
      quote: "Pattern 1: Deceptive Signature. This type of scams induces victims to sign a seemingly normal transaction while selling the NFTs of victims at a low price, resulting in the loss of users’ assets.",
      where: "Section IV-B, 'Phishing Pattern Categorization' → '1) Detailed Definition' (Pattern 1)",
      context: "NFT phishing pattern where the victim is tricked into signing something that leads to a low-price sale of their NFTs."
    },
    nftFraudulentAuthorization: {
      quote: "Pattern 2: Fraudulent Authorization. The second phishing pattern is to deceive users to grant scammers permission to transfer their NFTs.",
      where: "Section IV-B, 'Phishing Pattern Categorization' → '1) Detailed Definition' (Pattern 2)",
      context: "NFT phishing pattern where the victim is tricked into approving/authorizing the scammer to move NFTs."
    },
    nftStealingIdentityCredentials: {
      quote: "Pattern 3: Stealing Identity Credentials. Both the private key and the mnemonic password are identity credentials, and stealing either of them allows scammers to access victims’ accounts and steal their NFTs.",
      where: "Section IV-B, 'Phishing Pattern Categorization' → '1) Detailed Definition' (Pattern 3)",
      context: "NFT phishing pattern where the attacker steals wallet credentials (e.g., private key or mnemonic) to take over the account."
    },
    nftInducedTransfer: {
      quote: "Pattern 4: Induced Transfer. The characteristic of this phishing pattern is that victims are induced to transfer one or more NFTs to scammers.",
      where: "Section IV-B, 'Phishing Pattern Categorization' → '1) Detailed Definition' (Pattern 4)",
      context: "NFT phishing pattern where the victim is pressured/manipulated into manually sending NFTs to the scammer."
    }
  }
},
{
  database: "Google Scholar (MDPI / Engineering Proceedings)",
  title: "AI-Driven Vishing Attacks: A Practical Approach",
  authors: "Fabricio Toapanta; Belén Rivadeneira; Christian Tipantuña; Danny Guamán",
  year: 2024,
  venue: "Engineering Proceedings, Volume 77",
  link: "https://doi.org/10.3390/engproc2024077015",
  dates: {
    published: "18 November 2024"
  },
  definitions: {
    phishing: {
      quote: "Phishing attacks attempt to obtain personal information such as usernames, passwords and credit card details by pretending to be a trustworthy entity in an electronic communication.",
      where: "Section 1 – Introduction",
      context: "General definition of phishing in the context of electronic communication."
    },
    vishing: {
      quote: "Voice phishing is a form of phone criminal attack carried out using social engineering with the use of telephone system to look at private personal and financial information; for the use of financial work it is also referred as “vishing”.",
      where: "Section 4 – Vishing",
      context: "Defined as phishing conducted via voice or phone calls using social engineering."
    }
  }
},
{
  database: "Google Scholar (MDPI / Applied Sciences)",
  title: "An Effective Blockchain-Based Defense Model for Organizations against Vishing Attacks",
  authors: "Ahlam Fakieh; Aymen Akremi",
  year: 2022,
  venue: "Applied Sciences, Volume 12, Article 13020",
  link: "https://doi.org/10.3390/app122413020",
  dates: {
    received: "9 November 2022",
    accepted: "16 December 2022",
    published: "19 December 2022"
  },
  definitions: {
    phishing: {
      quote: "Phishing is a category of SE assault that is mainly used to gain sensitive information from users, such as login credentials and credit card information.",
      where: "Section 3.2.4 – Phishing",
      context: "Defined as a social engineering attack aimed at obtaining sensitive user information."
    },
    vishing: {
      quote: "Vishing is a special type of phishing attack using phone calls against organizations.",
      where: "Section 1 – Introduction",
      context: "Defined as a phone-based phishing attack targeting organizations."
    },
    smishing: {
      quote: "Smishing is a mashup of the words SMS and phishing. Smishing is a type of cyberattack in which the attacker deceives the victim into disclosing sensitive information or handing over money.",
      where: "Section 3.1.1 – Smishing",
      context: "Defined as phishing conducted through SMS messages."
    }
  }
},
{
  database: "ACM Digital Library",
  title: "Emerging Threat: The Use of AI Voice Cloning Software and Services to Deceive Victims Through Phone Conversations and its Potential Effects on the Filipino Population",
  authors: "Eric B. Blancaflor; Raphael M. Abaleta; Luke Martin D.L. Achacoso; Alden Christian C. Amper; Pfrancis Isaiah R. Ampiloquio",
  year: 2024,
  venue: "Proceedings of the 5th Asia Service Sciences and Software Engineering Conference (ASSE 2024)",
  link: "https://doi.org/10.1145/3702138.3702145",
  dates: {
    published: "September 2024"
  },
  definitions: {
    vishing: {
      quote: "Voice Phishing, which is often abbreviated as “Vishing”, is a type of social engineering attack that includes identity theft where a scammer will use phone calls to try and deceive certain individuals into providing their sensitive information such as their passwords, credit card numbers, social security numbers, or other personal information.",
      where: "Section 2.1 – What is Voice Phishing/Vishing?",
      context: "Defined as phishing conducted through phone calls using social engineering and impersonation."
    },
    phishing: {
      quote: "Phishing, or the act of obtaining personal information online, is becoming dangerous in today’s environment.",
      where: "Section 2.5 – Cybersecurity in the Philippines and Its Current Laws on AI Vishing",
      context: "General definition of phishing as obtaining personal information online."
    }
  }
},
{
  database: "Google Scholar (IJICR / Infonomics Society)",
  title: "Detecting Smishing and Vishing Attacks using Machine Learning",
  authors: "Aaliyah E. Chichwadia; Noluntu Mpekoa",
  year: 2024,
  venue: "International Journal of Intelligent Computing Research (IJICR), Volume 15, Issue 1",
  link: "https://doi.org/10.20533/ijicr.2042.4655.2024.01511234",
  definitions: {
    smishing: {
      quote: "Smishing, also known as SMS phishing, is a type of attack that targets smartphone users through text messages.",
      where: "Abstract",
      context: "Defined as phishing conducted via SMS text messages targeting smartphone users."
    },
    phishing: {
      quote: "Likewise, [6]’s study describes phishing as a type of cyber-attack aiming to steal user’s confidential information using bait.",
      where: "Section 2 – Literature Review",
      context: "General definition of phishing as a cyber-attack used to steal confidential information."
    }
  }
}, 
{
  database: "Google Scholar (NFSU – Journal of Cyber Security and Digital Forensics)",
  title: "Understanding and Mitigating Phishing Attacks in the Digital Era",
  authors: "Kanika Im-erb",
  year: 2024,
  venue: "NFSU – Journal of Cyber Security and Digital Forensics, Volume 1, Issue 1",
  link: "https://www.researchgate.net/profile/Kanika-Im-Erb/publication/388681942_Understanding_and_Mitigating_Phishing_Attacks_in_the_Digital_Era/links/67a2610d4c479b26c9d0073e/Understanding-and-Mitigating-Phishing-Attacks-in-the-Digital-Era.pdf",
  definitions: {
    phishing: {
      quote: "Phishing is a type of electronically delivered social engineering attack in which a perpetrator, often posing as a legitimate entity such as fraudulent emails, text messages, phone calls or websites attempts to obtain sensitive information.",
      where: "Section II.A – Phishing",
      context: "Defined as a social engineering attack delivered through electronic communication channels to obtain sensitive information."
    },
    smishing: {
      quote: "SMS phishing, or \"smishing,\" scammers will send SMS text messages with links or attachments claiming to be sent from a credible organization or company attempt to steal the victims private or financial information.",
      where: "Section II.A – Phishing, point 2 (Smishing Phishing)",
      context: "Defined as phishing conducted via SMS text messages."
    },
    emailPhishing: {
      quote: "The most conventional styles of phishing are contained in this classification, with phishing email, which dates to the 1990s, as its oldest type.",
      where: "Section II.A – Phishing, point 3 (Email Phishing)",
      context: "Defined as phishing attacks conducted via email messages impersonating legitimate organizations."
    },
    vishing: {
      quote: "Vishing short for voice phishing, refers to fraudulent phone calls or voice messages in which the attacker pretends to be someone the victim knows or any other trusted source the victim deals with to trick victim to providing sensitive information, like login credentials, credit card numbers, or bank details.",
      where: "Section II.A – Phishing, point 6 (Vishing)",
      context: "Defined as phishing conducted through voice calls or voice messages using impersonation."
    },
    whaling: {
      quote: "Whaling is the type of phishing the attacker aims at a wealthy and powerful status of the victim or user.",
      where: "Section II.A – Phishing, point 7 (Whaling)",
      context: "Defined as phishing attacks targeting high-profile or powerful individuals."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Assessing the Human Ability to Recognize Synthetic Speech in Ordinary Conversation",
  authors: "Daniel Prudký; Anton Firc; Kamil Malinka",
  year: 2023,
  venue: "2023 International Conference of the Biometrics Special Interest Group (BIOSIG)",
  link: "https://doi.org/10.1109/BIOSIG58226.2023.10346006",
  definitions: {
    vishing: {
      quote: "A recently widespread method is vishing, derived from the two words defining it: voice and phishing. It is a version of phishing in which identity theft is carried out using voice devices such as the telephone, voice assistant, etc.",
      where: "Section I – Introduction",
      context: "Defined as a voice-based phishing attack using voice communication devices for identity theft."
    }
  }
},
{
  database: "IEEE Xplore",
  title: "Assessing the Human Ability to Recognize Synthetic Speech in Ordinary Conversation",
  authors: "Daniel Prudký; Anton Firc; Kamil Malinka",
  year: 2023,
  venue: "2023 International Conference of the Biometrics Special Interest Group (BIOSIG)",
  link: "https://doi.org/10.1109/BIOSIG58226.2023.10346006",
  definitions: {
    vishing: {
      quote: "A recently widespread method is vishing, derived from the two words defining it: voice and phishing. It is a version of phishing in which identity theft is carried out using voice devices such as the telephone, voice assistant, etc.",
      where: "Section I – Introduction",
      context: "Defined as a voice-based phishing attack where identity theft is performed via voice communication devices."
    }
  }
}, 
{
  database: "Journal of Computer and Forensic Sciences",
  title: "A System Architecture for Preventing Social Engineering Attacks via E-mail",
  authors: "Milan Brkić; Aleksa Maksimović; Aleksandar Miljković",
  year: 2023,
  venue: "Journal of Computer and Forensic Sciences, Vol. 2, Issue 1, pp. 43–52",
  link: "https://aseestant.ceon.rs/index.php/jcfs/article/view/44741/23228",
  dates: {
    received: "May 30, 2023",
    accepted: "June 30, 2023",
    published: "July 13, 2023"
  },
  definitions: {
    phishing: {
      quote: "Phishing is a social engineering attack that tricks individuals into divulging sensitive information or downloading malware through fraudulent emails, websites, or messages.",
      where: "Section 1 – Introduction",
      context: "Defined as a social engineering attack using fraudulent digital communication to steal information or deliver malware."
    },
    whaling: {
      quote: "Whaling is a form of social engineering attack that targets senior executives and high-profile individuals in organizations.",
      where: "Section 2.1 – Phishing and Social Engineering",
      context: "Defined as a phishing attack targeting senior or high-profile individuals."
    },
    vishing: {
      quote: "Vishing is a type of social engineering attack that uses Voice over IP (VoIP) technology to trick victims into divulging sensitive information or taking an unauthorized action.",
      where: "Section 2.1 – Phishing and Social Engineering",
      context: "Defined as a voice-based phishing attack using phone or VoIP communication."
    },
    smishing: {
      quote: "SMS phishing, also known as smishing, is a type of phishing attack that uses text messages to trick the victim into divulging sensitive information or taking an unauthorized action.",
      where: "Section 2.1 – Phishing and Social Engineering",
      context: "Defined as phishing conducted via SMS text messages."
    },
    pharming: {
      quote: "One of the possible techniques used by attackers is the farming technique, in which the attacker executes malicious programs on the computer so that all URL traffic is redirected to the attacker’s malicious website.",
      where: "Section 2.1 – Phishing and Social Engineering",
      context: "Defined as redirecting users to malicious websites by manipulating URL traffic."
    },
    spearPhishing: {
      quote: "Unlike an ordinary phishing attack, spear phishing attacks are not based on probability but are carefully constructed to be as believable as possible to the victim.",
      where: "Section 2.1 – Phishing and Social Engineering",
      context: "Defined as targeted phishing attacks tailored to specific victims."
    }
  }
}, 
{
  database: "arXiv / Google Scholar",
  title: "Detecting Phishing Sites – An Overview",
  authors: "P. Kalaharsha; B. M. Mehtre",
  year: 2021,
  venue: "arXiv preprint arXiv:2103.12739v2 [cs.CR]",
  link: "https://arxiv.org/abs/2103.12739",
  definitions: {
    emailPhishing: {
      quote: "In this type of phishing an attacker sends an email regarding any problem, update or any sensitive matter that must be changed immediately once the user clicks the email and all the input the details entered by the end-users will be redirected to the attacker.",
      where: "Section 1.1.1 – Email Phishing",
      context: "Defined as phishing conducted via deceptive emails to collect user information."
    },
    spearPhishing: {
      quote: "In this attackers aims for specific individuals or enterprises, as opposed to random application users.",
      where: "Section 1.1.2 – Spear Phishing",
      context: "Defined as targeted phishing attacks aimed at specific individuals or organizations."
    },
    whaling: {
      quote: "It is a form of spear phishing where, in this phishing attackers target high-profile employees, such as the CEO or CFO, in order to steal sensitive information from a company.",
      where: "Section 1.1.3 – Whaling",
      context: "Defined as phishing attacks targeting high-profile executives."
    },
    smishing: {
      quote: "It is also known as SMS phishing. It is a type of social engineering attack carried out in order to steal user data including personal information, financial information, and credentials.",
      where: "Section 1.1.4 – Smishing",
      context: "Defined as phishing conducted through SMS text messages."
    },
    vishing: {
      quote: "It is also known as Voice Phishing. It is a type of phone fraud that uses voice messages to obtain personal information or money from victims.",
      where: "Section 1.1.5 – Vishing",
      context: "Defined as phishing attacks conducted via voice or phone calls."
    },
    pharming: {
      quote: "Pharming is sometimes known as “phishing without a lure”.",
      where: "Section 1.1.6 – Pharming",
      context: "Defined as redirecting users to malicious websites without direct interaction."
    },
    contentInjectionPhishing: {
      quote: "In this, the content of the legitimate website is replaced with some random content with different input fields similar to legitimate site so that end–users trust easily and give their data easily.",
      where: "Section 1.1.7 – Content-injection Phishing",
      context: "Defined as phishing by injecting malicious content into legitimate websites."
    },
    searchEnginePhishing: {
      quote: "It occurs when phishers create websites with attractive sounding offers and have them indexed legitimately with search engines.",
      where: "Section 1.1.8 – Search Engine Phishing",
      context: "Defined as phishing attacks that exploit search engine indexing to lure users."
    }
  }
}, 
{
  database: "Google Scholar (Shodh Sari – An International Multidisciplinary Journal)",
  title: "Challenges and Emerging Trends in Cyber Security",
  authors: "Rajani Bora",
  year: 2023,
  venue: "Shodh Sari – An International Multidisciplinary Journal, Vol. 02, Issue 03, pp. 26–41",
  link: "https://d1wqtxts1xzle7.cloudfront.net/106923587/2.-Challenges-and-Emerging-Trends-in-Cyber-Security-libre.pdf?1698248285=&response-content-disposition=inline%3B+filename%3DChallenges_and_Emerging_Trends_in_Cyber.pdf&Expires=1765856882&Signature=TEwWPuXalvTgy3LajtYmBHE6OqV6bNoGfKYvzFcQszL4816oOn4X9t0lZU-PniLVzbv8Y076AO-QPf4n7RvKY~GYJPQcfDeVtD27KU5ox0v-s0VJYyvaB1mHefRAQYUaK2sN4z9QG0jXcYZDkmA45nIRIwD0nvP8AZosrCs556JqZN~OXoirGOkUE5fVSrxeB1M2UvC21-ykVcSL5-gtmXBFYcW~erEJUS9vBRm4~NLawBwMU-r5A4ZrC2aNxl88vSlCjyWDSq7BSNh3qP1O9VJRsMVLYP7tAGPejyzCLhmgZslLgfolj0BCjGLbpQb8SvPdI8s2Jp1ISTuHdQJx~g__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
  dates: {
    received: "March 30, 2023",
    accepted: "May 16, 2023",
    published: "July 01, 2023"
  },
  definitions: {
    phishing: {
      quote: "Phishing refers to the receipt of unsolicited emails by customers of financial institutions, requesting them to enter their username, password or other personal information to access their account for some reason.",
      where: "Section 3. Phishing",
      context: "Defined as an email-based fraud targeting customers of financial institutions to collect credentials/personal info."
    },
    vishing: {
      quote: "Vishing (voice or VoIP phishing) is an electronic fraud tactic in which individuals are tricked into revealing critical financial or personal information to unauthorized entities.",
      where: "Section 4. Vishing",
      context: "Defined as voice/VoIP phishing that tricks people into revealing critical personal/financial information."
    }
  }
}, 
{
  database: "Google Scholar (USENIX SOUPS)",
  title: "Exploring the Impact of Ethnicity on Susceptibility to Voice Phishing",
  authors: "Aritra Ray; Sohini Saha; Krishnendu Chakrabarty; Leslie Collins; Kyle Lafata; Pardis Emami-Naeini",
  year: 2023,
  venue: "USENIX Symposium on Usable Privacy and Security (SOUPS 2023)",
  link: "https://www.usenix.org/system/files/soups2023-poster85_ray_abstract_final.pdf",
  definitions: {
    spearPhishing: {
      quote: "Spear phishing is a common, targeted phishing where the attacker uses targets’ relevant information to increase the effectiveness of their attacks.",
      where: "Abstract",
      context: "Defined as a targeted form of phishing that leverages victim-specific information."
    },
    vishing: {
      quote: "We explore the impact of people’s native language accents on their susceptibility to voice phishing, where the attacker asks for users’ financial information.",
      where: "Abstract",
      context: "Defined as voice-based phishing in which attackers request users’ financial information."
    }
  }
},{
  database: "IEEE Xplore",
  title: "Phish-identifier: Machine Learning based Classification of Phishing Attacks",
  authors: "Sidra Aslam; Ali Bou Nassif",
  year: 2023,
  venue: "2023 Advances in Science and Engineering Technology International Conferences (ASET)",
  link: "https://doi.org/10.1109/ASET56582.2023.10180869",
  definitions: {
    phishing: {
      quote: "Phishing attack is one of the most common online attacks that aims to steal important data.",
      where: "Abstract",
      context: "General definition of phishing used as the base concept for classifying different phishing attack types in a machine-learning setting."
    }
  },
  mentionedButNotDefined: {
    smishing: {
      context: "Mentioned as one of the common phishing attack types in a list of phishing categories, but not explicitly defined."
    },
    vishing: {
      context: "Mentioned as a phishing attack type related to voice or phone-based attacks, but no formal definition is provided."
    },
    spearPhishing: {
      context: "Listed as a common phishing type, assumed as targeted phishing, but not explicitly defined in the paper."
    },
    whaling: {
      context: "Mentioned as a phishing attack targeting specific victims, without an explicit definition."
    },
    anglerPhishing: {
      context: "Listed among phishing attack types in the classification discussion, but no definition is given."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Detecting Targeted Phishing Websites for Brand Protection and Cyber Defence Using Computer Vision",
  authors: "Carlos Pires; José Borges",
  year: 2023,
  venue: "2023 IEEE International Workshop on Technologies for Defense and Security (TechDefense)",
  link: "https://doi.org/10.1109/TechDefense59795.2023.10380893",
  definitions: {
    phishing: {
      quote: "Phishing is a type of computer attack that communicates socially engineered messages to humans via electronic communication channels in order to persuade them to perform certain actions for the attacker's benefit.",
      where: "Introduction, citing [8]",
      context: "General definition of phishing adopted as the conceptual basis of the paper."
    },
    spearPhishing: {
      quote: "Spearphishing, a more refined and sophisticated variant of the conventional phishing attack targeted at a single individual or group.",
      where: "Introduction, citing [6], [7]",
      context: "Defined as a targeted phishing attack aimed at a specific individual or group."
    },
    whaling: {
      quote: "Whaling, a spearphishing attack aimed at those working in high positions.",
      where: "Introduction, citing [6], [7]",
      context: "Defined as spear phishing targeting individuals in high-level positions."
    },
    emailPhishing: {
      quote: "ENISA defines phishing delivered via email as a phishing email attack.",
      where: "Introduction, citing ENISA Threat Landscape [6]",
      context: "Defined as phishing attacks delivered through email."
    },
    smishing: {
      quote: "ENISA defines phishing delivered via SMS as a smishing attack.",
      where: "Introduction, citing ENISA Threat Landscape [6]",
      context: "Defined as phishing attacks delivered via SMS messages."
    },
    vishing: {
      quote: "ENISA defines phishing delivered via a phone call as a vishing attack.",
      where: "Introduction, citing ENISA Threat Landscape [6]",
      context: "Defined as phishing attacks delivered through phone calls."
    }
  }
},  
{
  database: "IEEE Xplore (IEEE Access)",
  title: "Deep Learning for Phishing Detection: Taxonomy, Current Challenges and Future Directions",
  authors: "Nguet Quang Do; Ali Selamat; Ondrej Krejcar; Enrique Herrera-Viedma; Hamido Fujita",
  year: 2022,
  venue: "IEEE Access, Vol. 10",
  link: "https://doi.org/10.1109/ACCESS.2022.3151903",
  dates: {
    received: "November 8, 2021",
    accepted: "January 21, 2022",
    published: "February 17, 2022"
  },
  definitions: {
    phishing: {
      quote: "Phishing is a type of digital theft that disguises itself as legitimate or genuine sources to steal uses’ private and confidential information.",
      where: "Section II.A.1 – Phishing",
      context: "General definition of phishing used as the foundational concept in the paper."
    },
    websitePhishing: {
      quote: "Website phishing is the most common phishing attacks in cyberspace where attackers build the websites to make them look identical to the genuine ones.",
      where: "Section III.A.1 – Phishing through Website",
      context: "Defined as phishing attacks carried out via fake websites that imitate legitimate ones."
    },
    emailPhishing: {
      quote: "Cyber criminals usually send emails to online users claiming that they are from trusted companies to perform email phishing.",
      where: "Section III.A.1 – Phishing through Email",
      context: "Defined as phishing attacks conducted via deceptive emails impersonating trusted companies."
    },
    spearPhishing: {
      quote: "Spear phishing targets at specific individuals, groups or organizations rather than random users with the final intention of obtaining confidential and sensitive information.",
      where: "Section III.A.1 – Phishing through Email (Spear phishing)",
      context: "Defined as targeted phishing attacks aimed at specific individuals or organizations."
    },
    whaling: {
      quote: "Whaling is similar to spear phishing except that its targets are high-profile executives such as corporate CEOs, government officials or political leaders.",
      where: "Section III.A.1 – Phishing through Email (Whaling)",
      context: "Defined as phishing attacks targeting high-profile executives or leaders."
    },
    smishing: {
      quote: "SMS phishing, also known as Smishing, is one of the popular attacks carried out on mobile phones.",
      where: "Section III.A.1 – Phishing through SMS",
      context: "Defined as phishing attacks conducted via SMS text messages."
    },
    vishing: {
      quote: "VoIP phishing, or Vishing, is a type of phishing attack conducted over telephone systems or VoIP systems using voice technology.",
      where: "Section III.A.1 – Phishing through VoIP",
      context: "Defined as phishing attacks conducted through voice or phone calls."
    }
  }
}, 
{
  database: "Google Scholar (IJCIS)",
  title: "CYBER-SECURITY TACTICS IN MITIGATING CYBER-CRIMES: A REVIEW AND PROPOSAL",
  authors: "Adeniyi Phillips, Ibraheem Ojelade, Esther Taiwo, Callistus Obunadike, Kunle Oloyede",
  year: 2023,
  venue: "International Journal on Cryptography and Information Security (IJCIS), Vol. 13, No.2/3, September 2023",
  link: "https://d1wqtxts1xzle7.cloudfront.net/106174532/13323ijcis01-libre.pdf?1696342726=&response-content-disposition=inline%3B+filename%3DCYBER_SECURITY_TACTICS_IN_MITIGATING_CYB.pdf&Expires=1765863051&Signature=V-NOBT0xJ7fguqIFbADPTFsOYiUpXCN-Y241vj6EJxihKBUGcKHbIeXYtRcvGpOEOWSVN8Ly-PEYKCW-bM7vHggMdfNRjkdwpQPHXnemfEeTqsGXAyR8PRHanmrr2naS6Qu6oDNaRJCUbCGFR8KCjekCY4zcND5Ig9PCGFc5T1vkSbB6HvdEneL6tT832fb5OrzS1NlG5HPrsJXxTFpIRkuQh4WTcRPja1gpQ8f6oJN-zXP3kpk-o7V8cmVXSLCkugMWQ3Z7yq4DUp3721hjouEXcaN80PrcUeBjiG49DwECuamp2~3Erx98iaBPTrkQS6XRRo7Yh1KjSSNKCNMC8w__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing is a form of social engineering, characterized by attempts to fraudulently acquire sensitive information, such as passwords and credit card details, by masquerading as a trustworthy person or business in an apparently official electronic communication, such as an e-mail or an instant message and Domain Name Server (DNS) manipulation[23],[25].",
      where: "Section 2.5.1 – Cybercrimes Against Persons, item 4 (Phishing)",
      context: "Defined as social engineering to acquire sensitive information by impersonation via official-looking electronic communications (e.g., email/IM), also mentioning DNS manipulation."
    },
    vishing: {
      quote: "Vishing is also like phishing; it is the criminal practice of using social engineering and Voice over IP (VoIP) to gain access to private, personal, and financial information from the public for the purpose of financial reward.",
      where: "Section 2.5.1 – Cybercrimes Against Persons, item 5 (Vishing)",
      context: "Defined as voice-based phishing using social engineering and VoIP to obtain personal/financial information for financial gain."
    }
  }
}, 
{
  database: "Google Scholar (izdas.org)",
  title: "THE INCLINATION OF THE INTERNET USERS TO BE DECEIVED BY SOCIAL ENGINEERING ATTACKS IN DIFFERENT SECTORS",
  authors: "Farid Huseynov; Büşra Özdenizci Köse",
  year: 2021,
  venue: "Unknown journal/venue (izdas.org) — not explicitly stated in provided text",
  link: "https://www.researchgate.net/profile/Farid-Huseynov/publication/356458910_THE_INCLINATION_OF_THE_INTERNET_USERS_TO_BE_DECEIVED_BY_SOCIAL_ENGINEERING_ATTACKS_IN_DIFFERENT_SECTORS/links/619ca3e23068c54fa5132aab/THE-INCLINATION-OF-THE-INTERNET-USERS-TO-BE-DECEIVED-BY-SOCIAL-ENGINEERING-ATTACKS-IN-DIFFERENT-SECTORS.pdf",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing is defined as the practice of sending fraudulent messages that appear to source from a reputable and reliable parties, and it is generally performed through e-mail as communication media.",
      where: "ABSTRACT",
      context: "Defined as sending fraudulent messages that appear to come from reputable parties, generally via email."
    },
    domainSpoofing: {
      quote: "Domain spoofing: In order to deceive users, attackers create a fake, malicious website; interact with users and collect valuable information through this website.",
      where: "INTRODUCTION → list of five main popular phishing attacks",
      context: "Defined as creating a fake malicious website to deceive users and collect valuable information."
    },
    emailPhishing: {
      quote: "Email phishing: Cybercriminals send e-mail messages that claims to be from legitimate entity and try to persuade the targets under attack into providing confidential information.",
      where: "INTRODUCTION → list of five main popular phishing attacks",
      context: "Defined as deceptive emails impersonating legitimate entities to persuade targets to provide confidential information."
    },
    searchEnginePhishing: {
      quote: "Search engine phishing: While the online search engine platform is legitimate, users can search and visit an illegitimate website created by cybercriminals aiming to steal sensitive information.",
      where: "INTRODUCTION → list of five main popular phishing attacks",
      context: "Defined as users reaching illegitimate cybercriminal websites via legitimate search engines to steal sensitive information."
    },
    smishing: {
      quote: "SMS phishing: Attackers aim to gain trust of victims by sending misleading text messages to their mobile devices.",
      where: "INTRODUCTION → list of five main popular phishing attacks",
      context: "Defined as phishing via misleading SMS/text messages to gain victim trust."
    },
    socialMediaPhishing: {
      quote: "Social media phishing: With the help of social media platforms such as Facebook, Twitter, Pinterest or Instagram, malicious hackers try to persuade social media users into visiting malicious pages or posts, fake pages and so on.",
      where: "INTRODUCTION → list of five main popular phishing attacks",
      context: "Defined as persuading social media users to visit malicious or fake pages/posts via social platforms."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Social Engineering Attacks Prevention: A Systematic Literature Review",
  authors: "Wenni Syafitri; Zarina Shukur; Umi Asma’ Mokhtar; Rossilawati Sulaiman; Muhammad Azwan Ibrahim",
  year: 2022,
  venue: "IEEE Access",
  link: "https://doi.org/10.1109/ACCESS.2022.3162594",
  dates: {
    received: "January 7, 2022",
    accepted: "March 17, 2022",
    published: "March 28, 2022"
  },
  definitions: {
    phishing: {
      quote: "Hackers send messages that have been modified so that users believe that the messages received are legitimate, and users are required to follow the instructions or suggestions in the message.",
      where: "Section IV.A.1) PHISHING",
      context: "General phishing defined as deceptive messages made to appear legitimate to induce users to follow instructions."
    },
    vishing: {
      quote: "Vishing is a part of phishing that focuses on communication lines using telephone media.",
      where: "Section IV.A.1) PHISHING",
      context: "Defined as phishing conducted via telephone communication."
    },
    smishing: {
      quote: "phishing attacks focus on sending messages using SMS technology, namely Smishing.",
      where: "Section IV.A.1) PHISHING",
      context: "Defined as phishing attacks conducted via SMS messages."
    },
    spearPhishing: {
      quote: "Spearphishing is a phishing attack that can be an attack that hackers target.",
      where: "Section IV.A.1) PHISHING",
      context: "Defined as targeted phishing attacks aimed at specific victims."
    },
    whaling: {
      quote: "Whaling attack, namely a phishing attack that targets the leader or the most influential person in the organization.",
      where: "Section IV.A.1) PHISHING",
      context: "Defined as phishing attacks targeting organizational leaders or highly influential individuals."
    },
    pharming: {
      quote: "Another type of phishing attack is Pharming, where hackers divert user transaction traffic on a website to a fake website to take information or money.",
      where: "Section IV.A.1) PHISHING",
      context: "Defined as redirecting users from legitimate websites to fake websites to steal information or money."
    },
    socialMediaPhishing: {
      quote: "One of the new phishing techniques is Angler phishing, in which hackers clone profiles on a company’s customer service account on social media to attack the company’s customers.",
      where: "Section IV.A.1) PHISHING",
      context: "Defined as phishing via social media by impersonating customer service profiles (Angler phishing)."
    }
  }
}, 
{
  database: "Google Scholar",
  title: "Fintech forensics: Criminal investigation and digital evidence in financial technologies",
  authors: "Bruce Nikkel",
  year: 2020,
  venue: "Forensic Science International: Digital Investigation",
  link: "https://doi.org/10.1016/j.fsidi.2020.200908",
  dates: {
    received: "10 January 2020",
    revised: "28 January 2020",
    accepted: "28 January 2020",
    online: "18 March 2020"
  },
  definitions: {
    phishing: {
      quote: "Classic phishing involves sending emails to large numbers of people with links to a webpage impersonating a bank. The webpage then requests login credentials or credit card details.",
      where: "Section 3.1. Phishing methods for committing financial fraud",
      context: "General email-based phishing via bank-impersonating webpages to steal credentials or card details."
    },
    smishing: {
      quote: "Smishing, or SMS phishing, involves sending victims a text message impersonating a finanical institution.",
      where: "Section 3.1. Phishing methods for committing financial fraud",
      context: "Defined as phishing conducted via SMS messages impersonating financial institutions."
    },
    vishing: {
      quote: "Vishing, or Voice phishing, involves criminals contacting victims by phone and impersonating bank staff.",
      where: "Section 3.1. Phishing methods for committing financial fraud",
      context: "Defined as voice-based phishing via phone calls impersonating bank staff."
    },
    socialMediaPhishing: {
      quote: "Twishing, or Twitter phishing, and other social media phishing involves criminals using social media platforms for targeting victims.",
      where: "Section 3.1. Phishing methods for committing financial fraud",
      context: "Defined as phishing conducted via social media platforms (e.g., Twitter) to target victims."
    }
  }
}, 
{
  database: "Google Scholar",
  title: "Combating Cybercrime: A Study on Problems, Preventions and Cyber Laws of India",
  authors: "Megha Ojha; Rakhi Raturi",
  year: 2024,
  venue: "European Economic Letters",
  link: "https://d1wqtxts1xzle7.cloudfront.net/121654595/1063-libre.pdf?1741108008=&response-content-disposition=inline%3B+filename%3DCombating_Cybercrime_A_Study_on_Problems.pdf&Expires=1765866004&Signature=KNgqcTh0A96nCrIKli0LdIh1AMjFs4vPICTss2HCFfuStJVy8D7~vXMsiK18ZAgWlkdktMJL1xxNzW1triw1toz-lqXe0wCP58Bk-VlpYjHU2cBaPsgx-lhu6NSkD3B0GJ-rc45W6kh~eQRXm9B7vJuZCq7XXuhIOX0ef62IXucgJQQDUAux1-R748VB9FV7pEyROizu52L9pT6WCslPVxoeAt7PR97qtzV1leI1GWlZbm0ZZJfUZZ9Mpwx2Rdc69minKUP4DbP8pRnbZJGPcl3-q6310fRr~vEfegpasVmLtTjTZ5QjQxE9fDX1P9T8EBekA4ZSjv8tcIprjKAgBQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
  dates: {
    published: "2024"
  },
  definitions: {
    vishing: {
      quote: "In Vishing, hackers and spammers usually contact potentially susceptible individuals while pretending as authorized representatives of legitimate businesses. In the telephonic conversation, they seek to gather private user information.",
      where: "Section 2.1 Definition of Cybercrime and its types → list of technical cybercrime attacks",
      context: "Defined as a voice-based phishing attack conducted via telephone calls, impersonating legitimate businesses to collect private user information."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "A Brief Study on Cyber Crime, Laws and Ethics",
  authors: "Saraswati Kumari; Ashwani Sharma; Vishwas Khattar; Ayush Panwar; Siddhart Singh Baghel; Vardaan Khattar",
  year: 2022,
  venue: "2022 International Conference on Fourth Industrial Revolution Based Technology and Practices (ICFIRTP)",
  link: "https://doi.org/10.1109/ICFIRTP56122.2022.10059445",
  dates: {
    published: "2022"
  },
  definitions: {
    phishing: {
      quote: "It is a type of attack in which an attacker asks you for some sensitive information like OTP, card details, bank details, and passwords via email, phone call, or a message pretending to be a legitimate person of your bank, any organization, or any business.",
      where: "Section III.A Types of Cyber Crime → a) Phishing Attacks",
      context: "Defined as impersonation-based attacks via email, calls, or messages to extract sensitive information."
    },
    vishing: {
      quote: "It is phishing using VoIP (voice over internet protocol) with the help of social engineering, the attacker extracts private data from the victim pretending to be a verified person of any bank or claiming to be a friend of your friend.",
      where: "Section III.A Types of Cyber Crime → f) Vishing",
      context: "Defined as voice-based phishing using VoIP and social engineering to extract private data."
    }
  }
}, 
{
  database: "Google Scholar",
  title: "A crime script analysis of transnational identity fraud: migrant offenders’ use of technology in South Korea",
  authors: "Claire Seungeun Lee",
  year: 2020,
  venue: "Crime, Law and Social Change (Springer Nature)",
  link: "https://doi.org/10.1007/s10611-020-09885-3",
  dates: {
    publishedOnline: "28 February 2020"
  },
  definitions: {
    vishing: {
      quote: "Voice phishing crimes are planned and executed by Chinese criminals.",
      where: "Abstract",
      context: "Voice phishing is discussed as a crime category studied in the paper."
    },
    phishing: {
      quote: "This paper addresses these questions by examining one case study of a voice phishing crime1 along its definition as a type of identity fraud that involves the deceptive use of telephones and other technologies to transmit an artificial or real human voice for the purpose of collecting money.",
      where: "Introduction",
      context: "Voice phishing (“vishing”) is defined as identity fraud using deceptive calls/voice transmission to collect money."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Exploring Common Areas and Types of Cybercrime in Today's Digital Landscape",
  authors: "Komal Kalra; Raj Gaurang Tiwari",
  year: 2023,
  venue: "2023 3rd Asian Conference on Innovation in Technology (ASIANCON)",
  link: "https://doi.org/10.1109/ASIANCON58793.2023.10270422",
  dates: {
    conferenceDates: "Aug 25-27, 2023"
  },
  definitions: {
    vishing: {
      quote: "Vishing is a sort of phone-based phishing in which fraudsters attempt to get access to sensitive information over the phone. Similar to phishing, vishing employs speech technology to trick victims into giving over sensitive information over the phone. The perpetrator of Vishing will often make up an official-sounding caller ID, such as that of the IRS or the victim's financial institution. Voicemail, traditional phones, and mobile phones are all tools used by hackers in this context[16].",
      where: "Section II.G. Vishing",
      context: "Defined as phone-based phishing using voice/speech technology and caller-ID impersonation to obtain sensitive information."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Phishing Websites Detection using Machine Learning with URL Analysis",
  authors: "Areti Nagendra Soma Charan; Yu-Hung Chen; Jiann-Liang Chen",
  year: 2022,
  venue: "2022 IEEE World Conference on Applied Intelligence and Computing (AIC)",
  link: "https://doi.org/10.1109/AIC55036.2022.9848895",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing is cybercrime and a deceptive technique based on social engineering. In phishing, attackers send a deceptive message to trap online users by revealing sensitive information on phishing websites.",
      where: "Section I. INTRODUCTION",
      context: "General definition of phishing as a deceptive, social-engineering based cybercrime."
    },
    emailPhishing: {
      quote: "One of the most common phishing strategies is email/spam. An email is sent to billions of individuals requesting that they fill out sensitive information.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as phishing conducted through mass email messages."
    },
    spearPhishing: {
      quote: "In spear phishing, attackers target a specific organization or individual to snitch personal information from the target.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as targeted phishing attacks against specific victims."
    },
    sessionHijacking: {
      quote: "In session hijacking, criminals snitch user’s details through the web session control mechanism. Criminals use sniffer, and it collects the transmitted data between the communication devices illegally.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as stealing user details by hijacking web sessions using sniffing tools."
    },
    contentInjectionPhishing: {
      quote: "The phisher changes some content parts on the dedicated website page in content injection. It was done to deceive the user into stealing confidential information.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as modifying website content to deceive users into disclosing information."
    },
    webBasedDelivery: {
      quote: "In Web-based delivery, hackers are located between phishing and reliable websites. Phisher stalks details during the transactions between the user and the legit website.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as intercepting transactions between users and legitimate websites to steal information."
    },
    searchEnginePhishing: {
      quote: "Some phishing baits use search engines to route consumers to product websites. It provides low-cost services or products.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as phishing via search engines redirecting users to fraudulent sites."
    },
    linkManipulation: {
      quote: "A phisher sends a malicious website link to the users in link manipulation. When the user opens that link, it takes to a phishing website instead of the website mentioned.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as phishing using deceptive or manipulated hyperlinks."
    },
    vishing: {
      quote: "Phone phishing is another name for voice phishing. The phisher contacts victims with a false caller ID to steal critical information.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as voice-based phishing using phone calls and false caller IDs."
    },
    smishing: {
      quote: "A Text SMS is sent to the user’s mobile with the phishing link.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as phishing conducted through SMS text messages."
    },
    ransomware: {
      quote: "In Ransomware, malware gets installed by using social engineering. The malware prevents access to the implanted device or files until a ransom is paid.",
      where: "TABLE I. VARIOUS PHISHING TECHNIQUES",
      context: "Defined as malware installation via social engineering to extort ransom."
    }
  }
},
{
  database: "IEEE Xplore",
  title: "The Threat of Social Engineering and The Safety of Companies",
  authors: "Barbora Kotkova; Martin Hromada",
  year: 2021,
  venue: "2021 25th International Conference on Circuits, Systems, Communications and Computers (CSCC)",
  link: "https://doi.org/10.1109/CSCC53858.2021.00030",
  dates: {
    published: "2021"
  },
  definitions: {
    phishing: {
      quote: "Phishing - a well-known technique for sending bulk email to as many users as possible. This may be a fraudulent email created from a well-known company website. The e-mail usually contains a hypertext link and asks the user to visit the website to update personal data.",
      where: "Section V. SOCIAL ENGINEERING TECHNIQUES",
      context: "Defined as bulk fraudulent email impersonation to lure users to fake websites and steal personal data."
    },
    vishing: {
      quote: "Vishing - is a similar tactic to phishing, except that it is used by the phone to persuade the user to release private information.",
      where: "Section V. SOCIAL ENGINEERING TECHNIQUES",
      context: "Defined as voice-based phishing conducted via phone calls."
    },
    smishing: {
      quote: "Smishing - it is similar to vishing and phishing. In this technique, an attacker uses SMS instead of a call or e-mail.",
      where: "Section V. SOCIAL ENGINEERING TECHNIQUES",
      context: "Defined as phishing conducted via SMS text messages."
    },
    pharming: {
      quote: "Pharming - the goal here is to obtain personal or private data, for example to bank accounts, using fake domains. This method attacks the DNS server and rewrites the IP address.",
      where: "Section V. SOCIAL ENGINEERING TECHNIQUES",
      context: "Defined as redirecting victims to fraudulent websites via DNS manipulation."
    },
    pretexting: {
      quote: "Pretexting - it is a technique where an attacker impersonates someone else so that later, after building trust, he can use someone else's identity to obtain sensitive information.",
      where: "Section V. SOCIAL ENGINEERING TECHNIQUES",
      context: "Defined as impersonation-based social engineering to extract sensitive information."
    },
    baiting: {
      quote: "Baiting - this attack uses physical media such as floppy disks, CDs, or USB drives. An attacker leaves them infected with malicious code in clear and used places.",
      where: "Section V. SOCIAL ENGINEERING TECHNIQUES",
      context: "Defined as using deceptive physical or digital bait to induce victims to compromise systems."
    },
    waterHoling: {
      quote: "Water Holing - this is a strategy where the attacker uses environments that victims regularly visit, such as websites.",
      where: "Section V. SOCIAL ENGINEERING TECHNIQUES",
      context: "Defined as compromising trusted websites frequented by victims to infect or deceive them."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "A framework for exploring incentive methods towards reducing phishing susceptibility in Healthcare: Based on a review and In-the-wild-field study approach",
  authors: "Prosper Kandabongee Yeng; Bian Yang; Muhammad Ali Fauzi; Peter Nimbe",
  year: 2023,
  venue: "2023 Intelligent Methods, Systems, and Applications (IMSA)",
  link: "https://doi.org/10.1109/IMSA58542.2023.10217499",
  dates: {
    published: "2023"
  },
  definitions: {
    phishing: {
      quote: "One common definition includes any technique that employs fraudulent tactics, such as email, voice, or SMS, to illicitly obtain sensitive data, including financial and health records, by impersonating legitimate businesses or reputable individuals.",
      where: "Section I. INTRODUCTION",
      context: "General definition of phishing as fraudulent impersonation-based techniques used to obtain sensitive data via email, voice, or SMS."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "A Survey on the Principles of Persuasion as a Social Engineering Strategy in Phishing",
  authors: "Kalam Khadka; Abu Barkat Ullah; Wanli Ma; Elisa Martinez Marroquin; Yibeltal Alem",
  year: 2023,
  venue: "2023 IEEE 22nd International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)",
  link: "https://doi.org/10.1109/TrustCom60117.2023.00222",
  dates: {
    conferenceYear: "2023"
  },
  definitions: {
    phishing: {
      quote: "Phishing is a form of cybercrime that involves impersonating a trustworthy entity to trick users into disclosing sensitive information or performing malicious actions.",
      where: "Section I. INTRODUCTION",
      context: "Defined as impersonation-based cybercrime used to obtain sensitive information or induce malicious actions via social engineering."
    },
    phishing_alt: {
      quote: "One common definition includes any technique that employs fraudulent tactics, such as email, voice, or SMS, to illicitly obtain sensitive data, including financial and health records, by impersonating legitimate businesses or reputable individuals.",
      where: "Section I. INTRODUCTION",
      context: "Alternative general definition of phishing emphasizing fraudulent tactics, impersonation, and multiple communication channels."
    },
    spearPhishing: {
      quote: "One of the most sophisticated and effective types of phishing is spear phishing, which targets specific individuals or organizations with personalized and relevant messages.",
      where: "Section I. INTRODUCTION",
      context: "Defined as a targeted form of phishing using personalized and relevant messages aimed at specific individuals or organizations."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Protecting Against Caller ID Spoofing Attacks Using In-band Signaling",
  authors: "Aurel-Dragos Hofnăr; Tamás Bakos; Gheorghe Sebestyen-Pal",
  year: 2023,
  venue: "2023 IEEE 19th International Conference on Intelligent Computer Communication and Processing (ICCP)",
  link: "https://doi.org/10.1109/ICCP60212.2023.10398672",
  dates: {
    published: "2023"
  },
  definitions: {
    vishing: {
      quote: "The term vishing is a combination of voice + phishing and denotes a class of attacks where attackers are using voice channels in order to get sensitive information from the victim, similar to phishing attacks.",
      where: "Section I. INTRODUCTION",
      context: "Defined as a phishing attack conducted via voice/telephone channels to obtain sensitive information from victims."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Social Engineering Attacks Models",
  authors: "Sergii Lysenko; Oleksandr Bokhonko; Oleg Savenko; Piotr Gaj",
  year: 2024,
  venue: "14th IEEE International Conference on Dependable Systems, Services and Technologies (DESSERT)",
  link: "https://doi.org/10.1109/DESSERT65323.2024.11122124",
  dates: {
    conference: "11–13 October 2024"
  },
  definitions: {
    vishing: {
      quote: "To develop the scheme of the vishing attack model functioning we are to take into account the key components: pretext development; caller id spoofing; psychological manipulation; information gathering; exploit execution; follow-up actions.",
      where: "Section V. Social Engineering Attacks Models → Vishing attack model",
      context: "Vishing is characterized as a voice-based social engineering attack using pretexts, caller-ID spoofing, and psychological manipulation to extract sensitive information."
    },
    phishing: {
      quote: "To develop the scheme of the phishing attack model functioning we are to take into account the key components: target identification; pretext development; message crafting; delivery mechanism; execution of the attack; follow-up actions.",
      where: "Section V. Social Engineering Attacks Models → Phishing attack",
      context: "Phishing is characterized as a social engineering attack that uses crafted messages delivered via channels such as email or SMS to induce actions and extract information."
    }
  }
},
{
  database: "IEEE Xplore",
  title: "IoT Phishing Detection Using Hybrid NLP and Machine Learning Models Enhanced with Contextual Embedding",
  authors: "Fehmi Jaafar; Darine Ameyed; Lavin Titare; Md Nematullah",
  year: 2023,
  venue: "2023 IEEE 23rd International Conference on Software Quality, Reliability, and Security Companion (QRS-C)",
  link: "https://doi.org/10.1109/QRS-C60940.2023.00088",
  dates: {
    conferenceYear: "2023"
  },
  definitions: {

    phishing: {
      quote: "Phishing: The attacker masks itself as a reputed organization and then sends emails or creates malicious websites to lure the victim to enter his personal information or confidential information.",
      where: "Section 2. Background → Phishing life cycle",
      context: "General phishing defined as impersonation of reputable organizations using emails or malicious websites to obtain personal or confidential information."
    },

    clonePhishing: {
      quote: "In clone phishing, attackers create copies of legitimate emails and modify them slightly to include malicious links or attachments.",
      where: "Section 2.0.1 Clone phishing",
      context: "Defined as duplicating legitimate emails and subtly modifying them with malicious content."
    },

    manInTheMiddle: {
      quote: "In MITM attacks, hackers intercept communication between the victim and a legitimate website or service.",
      where: "Section 2.0.2 Man in the middle",
      context: "Defined as intercepting and manipulating communication between victims and legitimate services."
    },

    emailPhishing: {
      quote: "Attackers send out fake emails purporting to be from banks, social networking sites, or governmental organizations.",
      where: "Section 2.0.3 Email spoofing",
      context: "Defined as phishing via spoofed emails impersonating trusted organizations."
    },

    searchEnginePhishing: {
      quote: "Attackers manipulate search engine results to display malicious websites as top results for certain queries.",
      where: "Section 2.0.4 Search Engine Phishing",
      context: "Defined as manipulating search results to lure users to phishing websites."
    },

    smishing: {
      quote: "Text messages are used in smishing attacks to trick receivers into clicking on harmful websites or giving out personal information.",
      where: "Section 2.0.5 SMS phishing, or smishing",
      context: "Defined as phishing conducted via SMS messages."
    },

    spearPhishing: {
      quote: "In spear phishing attacks, cyber-criminals target specific individuals or organizations, tailoring the phishing messages to make them more convincing and personalized.",
      where: "Section 2.0.6 Spear phishing",
      context: "Defined as targeted phishing using personalized messages."
    },

    vishing: {
      quote: "Vishing involves phishing attempts through phone calls.",
      where: "Section 2.0.7 Vishing (Voice Phishing)",
      context: "Defined as phishing conducted through voice or phone calls."
    },

    whaling: {
      quote: "Whaling targets high-profile individuals, such as executives or celebrities, seeking to steal valuable information or conduct corporate espionage.",
      where: "Section 2.0.8 Whaling",
      context: "Defined as phishing attacks targeting high-profile individuals."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Advanced Phishing Website Detection Techniques in Internet of Things using Machine Learning",
  authors: "Gaddam Lakshmi; Perumalla Swetha",
  year: 2024,
  venue: "2024 4th International Conference on Mobile Networks and Wireless Communications (ICMNWC)",
  link: "https://doi.org/10.1109/ICMNWC63764.2024.10872066",
  dates: {
    conferenceYear: "2024"
  },
  definitions: {
    phishing: {
      quote: "Phishing is a fraudulent endeavor that targets personal and confidential information. It typically occurs through email, phone calls, SMS, etc.",
      where: "Section I.A.3 Definition",
      context: "General definition of phishing as a fraudulent, social-engineering endeavor using multiple communication channels to obtain confidential information."
    },
    spearPhishing: {
      quote: "Utilizing individualized as well as extremely specific assaults, spear phishing concentrates on certain people or organizations.",
      where: "Section I.A.5 Typical Phishing Attack Types (a)",
      context: "Defined as a targeted phishing attack focusing on specific individuals or organizations using personalized approaches."
    },
    whaling: {
      quote: "Cybercriminals utilize a tactic known as \"whaling\" to pose as top executives or other key personnel of a company and take direct aim at them.",
      where: "Section I.A.5 Typical Phishing Attack Types (b)",
      context: "Defined as phishing attacks impersonating executives or key personnel to directly target them."
    },
    emailPhishing: {
      quote: "One of the most financially destructive cyber crimes is email account compromise (EAC). It takes advantage of the fact that a great deal of us does business, both personally and professionally, through email.",
      where: "Section I.A.5 Typical Phishing Attack Types (c)",
      context: "Defined as phishing attacks conducted via compromised or impersonated email accounts to exploit trust in email communication."
    },
    smishing: {
      quote: "A text message or short message service (SMS) attack is known as a smishing attack.",
      where: "Section I.A.5 Typical Phishing Attack Types (d)",
      context: "Defined as phishing attacks conducted through SMS text messages, often containing links or return phone numbers."
    },
    vishing: {
      quote: "Sometimes known as \"Vishing,\" this tactic is tricking individuals over the phone into disclosing personal information.",
      where: "Section I.A.5 Typical Phishing Attack Types (e)",
      context: "Defined as voice-based phishing attacks conducted via phone calls to extract personal information."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Unveiling the Anatomy of Phishing Attacks: Strategies, Targets, and Cybersecurity Solutions",
  authors: "Akshay Kumar; Jaspreet Singh",
  year: 2023,
  venue: "2023 International Conference on Evolutionary Algorithms and Soft Computing Techniques (EASCT)",
  link: "https://doi.org/10.1109/EASCT59475.2023.10393225",
  dates: {},
  definitions: {
    phishing: {
      quote: "The use of fake emails or websites to acquire sensitive information such as passwords, credit card numbers or personal identification numbers is referred to as phishing.",
      where: "Section V. Research Gaps",
      context: "Phishing is explicitly defined as a social-engineering attack that uses fake emails or fake websites to deceive users into revealing sensitive personal or financial information."
    },
    spearPhishing: {
      quote: "The exploration of emerging trends in phishing attacks, such as spear phishing, clone phishing, and voice-based phishing, has underscored the dynamic nature of these threats.",
      where: "Section IX. Conclusion and Future Work",
      context: "Spear phishing is discussed as an emerging and evolving phishing trend, indicating more targeted and sophisticated phishing campaigns, but it is not formally defined in the paper."
    },
    clonePhishing: {
      quote: "The exploration of emerging trends in phishing attacks, such as spear phishing, clone phishing, and voice-based phishing, has underscored the dynamic nature of these threats.",
      where: "Section IX. Conclusion and Future Work",
      context: "Clone phishing is mentioned in the context of emerging phishing trends, highlighting the evolution of phishing techniques, but without an explicit definition of the method."
    },
    vishing: {
      quote: "The exploration of emerging trends in phishing attacks, such as spear phishing, clone phishing, and voice-based phishing, has underscored the dynamic nature of these threats.",
      where: "Section IX. Conclusion and Future Work",
      context: "Voice-based phishing (vishing) is discussed as an emerging trend in phishing attacks, emphasizing attackers’ use of voice channels, but it is not explicitly defined."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "A Feature Engineering Approach for Detecting Phishing Emails",
  authors: "Andrei Dumitras; Cristinel Mihai Mocan; Ciprian Opris",
  year: 2024,
  venue: "2024 IEEE 20th International Conference on Intelligent Computer Communication and Processing (ICCP)",
  link: "https://doi.org/10.1109/ICCP63557.2024.10793001",
  dates: {},
  definitions: {
    phishing: {
      quote: "PhishTank presents phishing as ”a fraudulent attempt, usually made through email, to steal your personal information” [6].",
      where: "Section I. INTRODUCTION",
      context: "General phishing is defined via an external definition emphasizing fraudulent attempts (usually via email) to steal personal information."
    },
    websitePhishing: {
      quote: "Whittaker et al. [7] propose a more general definition of phishing while referring to webpages: ”any web page that, without permission, alleges to act on behalf of a third party with the intention of confusing viewers into performing an action with which the viewer would only trust a true agent of the third party”.",
      where: "Section I. INTRODUCTION",
      context: "Phishing is defined in the context of webpages: a web page impersonates a third party to confuse viewers into performing an action they would only trust a true agent to request."
    },
    emailPhishing: {
      quote: "Therefore, a phishing email [8] is a serious security threat targeting the end user and tricking him/her into compromising his/her own security.",
      where: "Section I. INTRODUCTION",
      context: "Phishing email is described as a threat that tricks end users into compromising their own security."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Design of Blockchain Models for the Identifications of Harmful Attack Activities in Industrial Internet of Things (IIOT)",
  authors: "Sarthak A. Chaudhari; Nilesh B. Ahire; Varunraje J. Jagtap; Prathamesh S. Shinde; P. William",
  year: 2023,
  venue: "2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)",
  link: "https://doi.org/10.1109/ICCAKM58659.2023.10449607",
  dates: {},
  definitions: {
    spearPhishing: {
      quote: "Emails are often used by cybercriminals as part of a spear phishing attack, in which they attempt to trick victims into divulging personal information or enabling malware to be installed on their computers by using social engineering techniques.",
      where: "Section IV. RESEARCH METHODOLOGY (text below FIGURE 3: IDENTIFYING A SPEAR PHISHING ATTACK)",
      context: "Spear phishing is described in the context of email-based social engineering used to trick victims into divulging personal information or enabling malware installation."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "An Examination of Prevalent Online Scams: Phishing Attacks, Banking Frauds, and E-Commerce Deceptions",
  authors: "Latika Pinjarkar; Pawan Rajendra Hete; Poorva Agrawal; Mahantesh Mattada; Gagandeep Kaur; Santosh Nejakar",
  year: 2024,
  venue: "2024 Second International Conference on Advances in Information Technology (ICAIT)",
  link: "https://doi.org/10.1109/ICAIT61638.2024.10690377",
  dates: {},
  definitions: {

    phishing: {
      quote: "Let us first unravel the world of phishing, an evil practice that employs social engineering techniques through emails, text messages, calls, or website spoofings. These deceptive tactics convincingly pose as trustworthy entities, aiming to extract sensitive information such as login credentials, bank details, and personal information from unsuspecting victims.",
      where: "Section I. INTRODUCTION",
      context: "Phishing is defined as a social-engineering practice using deceptive communications impersonating trustworthy entities to extract sensitive information."
    },

    emailPhishing: {
      quote: "Cybercriminals send emails that seem real, often pretending to be from banks or government agencies. The attackers often create genuine emails and urgently ask you to click on a link or download an attachment.",
      where: "Section III.A.1 Email Phishing",
      context: "Defined as phishing attacks conducted via deceptive emails impersonating trusted organizations to induce clicks or downloads."
    },

    websitePhishing: {
      quote: "Phishers make fake websites look like real ones, aiming to trick you into entering your login details or personal information.",
      where: "Section III.A.2 Website Spoofing",
      context: "Defined as phishing attacks using fake websites that imitate legitimate ones to steal credentials or personal data."
    },

    spearPhishing: {
      quote: "Unlike regular phishing, this is super targeted. Attackers research to make their phishing attempts very personalized.",
      where: "Section III.A.3 Spear Phishing",
      context: "Defined as targeted phishing attacks that use personalized information after researching specific victims."
    },

    smishing: {
      quote: "Phishers send text messages, pretending to be someone you trust, asking for sensitive info, or telling you to click a link.",
      where: "Section III.A.4 Smishing (SMS Phishing)",
      context: "Defined as phishing attacks delivered through SMS messages that request sensitive information or malicious actions."
    },

    vishing: {
      quote: "Cybercriminals employ phone calls, posing as trustworthy entities such as banks, to deceive and coax you into divulging sensitive information.",
      where: "Section III.A.5 Vishing (Voice Phishing)",
      context: "Defined as voice-based phishing attacks conducted via phone calls impersonating trusted entities."
    },

    credentialHarvesting: {
      quote: "Phishers make fake login pages or forms to trick you into typing your credentials, which they then steal.",
      where: "Section III.A.6 Credential Harvesting",
      context: "Defined as phishing attacks that capture usernames and passwords through fake login pages or forms."
    },

    socialMediaPhishing: {
      quote: "Phishers make fake profiles or pages on social media, pretending to be friends or trustworthy sources.",
      where: "Section III.A.7 Social Media Phishing",
      context: "Defined as phishing attacks carried out via fake social-media accounts impersonating trusted contacts."
    },

    businessEmailCompromise: {
      quote: "Attackers take over business emails, often targeting employees in charge of money matters, tricking them into making unauthorized payments.",
      where: "Section III.A.8 Business Email Compromise (BEC)",
      context: "Defined as phishing attacks involving compromised business email accounts to induce fraudulent financial transactions."
    },

    clonePhishing: {
      quote: "Attackers create copies of actual messages, often sent after a genuine one, fooling you into thinking it is a legitimate follow-up.",
      where: "Section III.A.9 Clone Phishing",
      context: "Defined as phishing attacks that replicate legitimate messages and modify them to include malicious content."
    },

    anglerPhishing: {
      quote: "Phishers use pop-up messages to trick you into giving away sensitive info, often pretending to be system alerts.",
      where: "Section III.A.10 Angler Phishing",
      context: "Defined as phishing attacks using pop-up alerts or fake system warnings to solicit sensitive information."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "A Case Study in Anticipating Insider Vulnerabilities Using Psychological Profiling",
  authors: "Sergiu Eftimie; Ciprian Răcuciu; Vlad Cotenescu; Dragoș Glăvan; Radu Moinescu",
  year: 2021,
  venue: "2021 IEEE International Black Sea Conference on Communications and Networking (BlackSeaCom)",
  link: "https://doi.org/10.1109/BlackSeaCom52164.2021.9527896",
  dates: {},
  definitions: {
    spearPhishing: {
      quote: "Spear-phishing represents a targeted attack achieved by obtaining personal details on the victim. The attackers then disguise themselves as honest entities to further acquire additional information, usually by email or other forms of online messaging.",
      where: "Section III. MATERIALS AND METHODS (paragraph after awareness course mention)",
      context: "Defined as a targeted attack using victim personal details; attackers impersonate honest entities to obtain additional information via email or other online messaging."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "VeriActor: Dynamic Generation of Challenge-Response Questions for Enhanced Email Sender Verification",
  authors: "Basel Abdeen; Ehab Al-Shaer; Waseem Shadid",
  year: 2023,
  venue: "2023 IEEE Conference on Communications and Network Security (CNS)",
  link: "https://doi.org/10.1109/CNS59707.2023.10289040",
  dates: {},
  definitions: {
    spearPhishing: {
      quote: "Spear-phishing attacks, where attackers impersonate trusted entities to deceive victims into divulging sensitive information or performing malicious actions, pose significant challenges in detection and prevention.",
      where: "Section I. INTRODUCTION",
      context: "Spear phishing is explicitly defined as impersonation of trusted entities with the goal of deceiving victims into revealing sensitive information or performing malicious actions."
    }
  }
},
{
  database: "IEEE Xplore",
  title: "Detection of Phishing Websites from URLs by using Classification Techniques on WEKA",
  authors: "Buket Geyik; Kübra Erensoy; Emre Kocyigit",
  year: 2021,
  venue: "2021 6th International Conference on Inventive Computation Technologies (ICICT)",
  link: "https://doi.org/10.1109/ICICT50816.2021.9358642",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing is an online attack by fraudsters and it is sent to user accounts to collect sensitive, personal, and financial information.",
      where: "Section I. INTRODUCTION",
      context: "Phishing is defined as an online fraud attack targeting users to collect sensitive personal and financial information."
    },
    spearPhishing: {
      quote: "Spear phishing, hackers don’t target random people or organizations here. So phisher does specific research to launch an attack and organize personal attacks to trap the target.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as a targeted phishing attack based on prior research about a specific victim."
    },
    sessionHijacking: {
      quote: "Phisher uses this method to steal information from users through its web session control mechanism. The identity hunter accesses the web server illegally with the help of listeners.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as stealing user information by hijacking active web sessions."
    },
    emailPhishing: {
      quote: "E-mail, one of the most common techniques, asks to access user information by e-mail sent to millions of people.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as phishing conducted via mass emails requesting user information."
    },
    contentInjectionPhishing: {
      quote: "Content Injection, is connected to a different web page to access the personal information of audiophiles varying portions of their content in a trusted website.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as modifying content on trusted websites to redirect users and steal personal information."
    },
    webBasedDelivery: {
      quote: "Phisher observes our actions on the website, transmitting our information to the phishing site without the user’s knowledge.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as silently transmitting user information from legitimate websites to phishing sites."
    },
    searchEnginePhishing: {
      quote: "It is a technique that users carry out by stealing the credit card information of the products they research on search engines.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as phishing attacks exploiting search engines to steal credit card information."
    },
    linkManipulation: {
      quote: "It is a method of connecting to a malicious website when you click on the link sent by the phishing.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as redirecting users to malicious websites via deceptive links."
    },
    smishing: {
      quote: "It is the method made by SMS sent to our phones. They can access our personal information via the link in the message section.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as phishing attacks conducted through SMS messages."
    },
    ransomware: {
      quote: "Here it is denied access to a file and device to get a ransom from the user. When the user click on a link or is tricked by a malicious ad, the malware gets installed on their computer.",
      where: "TABLE I – Phishing Techniques Definition",
      context: "Defined as malware installed via deceptive links or ads to deny access until ransom is paid."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "A Review of Spam Detection in Social Media",
  authors: "Ilke Yurtseven; Selami Bagriyanik; Serkan Ayvaz",
  year: 2021,
  venue: "6th International Conference on Computer Science and Engineering (UBMK 2021)",
  link: "https://ieeexplore.ieee.org/document/9558993",
  definitions: {
    phishing: {
      quote: "Phishing is defined as fraudulent activities that consist of communicating and deceiving a target to gain sensitive information or spread malicious files.",
      where: "Section III.A — Fraud and Phishing",
      context: "General definition of phishing as deceptive communication to obtain sensitive information or distribute malicious content."
    },
    spearPhishing: {
      quote: "SNAP-R is an example to simulate a special type of phishing spear phishing which targets specific victims.",
      where: "Section III.A — Fraud and Phishing",
      context: "Spear phishing is defined as a targeted form of phishing aimed at specific victims, discussed in the context of automated campaign generation on Twitter."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Intelligent Methods for Accurately Detecting Phishing Websites",
  authors: "Almaha Abuzuraiq; Mouhammd Alkasassbeh; Mohammad Almseidin",
  year: 2020,
  venue: "2020 11th International Conference on Information and Communication Systems (ICICS)",
  link: "https://doi.org/10.1109/ICICS49469.2020.239509",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing is defined as a form of social engineering attacks in which an attacker attempt to steal the user’s data like username, password, social security number or credit card number.",
      where: "Section II. BACKGROUND",
      context: "Phishing is defined as a social-engineering attack where attackers impersonate legitimate entities to steal sensitive user data."
    },
    emailPhishing: {
      quote: "Email phishing: is one of the easiest phishing types that used to obtain the user’s data.",
      where: "Section II. BACKGROUND (list of common forms of phishing attacks)",
      context: "Defined as phishing attacks conducted via deceptive emails to obtain user data."
    },
    spearPhishing: {
      quote: "Spear phishing: is a targeted phishing form, unlike random phishing emails, it is directed at a specific person or company.",
      where: "Section II. BACKGROUND (list of common forms of phishing attacks)",
      context: "Defined as a targeted phishing attack aimed at specific individuals or organizations using personalized social-engineering techniques."
    },
    whaling: {
      quote: "Whaling: is a form of spear phishing that is more specific, where the attacker addressed it to the senior executives within an organization.",
      where: "Section II. BACKGROUND (list of common forms of phishing attacks)",
      context: "Defined as a specialized spear-phishing attack targeting senior executives or high-level decision-makers."
    }
  }
}, 

{
  database: "IEEE Xplore",
  title: "Sixteen Years of Phishing User Studies: What Have We Learned?",
  authors: "Shahryar Baki; Rakesh M. Verma",
  year: 2023,
  venue: "IEEE Transactions on Dependable and Secure Computing",
  link: "https://doi.org/10.1109/TDSC.2022.3151103",
  dates: {
    received: "23 April 2020",
    accepted: "13 January 2022",
    published: "14 February 2022",
    currentVersion: "14 March 2023"
  },
  definitions: {
    phishing: {
      quote: "Emails and messages carefully designed to steal the recipients sensitive information or to install malware are called phishing attacks.",
      where: "Section 1. INTRODUCTION",
      context: "Phishing is defined as deceptive emails or messages designed to steal sensitive information or install malware by impersonating trusted entities."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Advanced Persistent Threat Detection: A Survey",
  authors: "Adam Khalid; Mohd Aizaini Maarof; Anazida Zainal; Fuad A. Ghaleb",
  year: 2021,
  venue: "2021 3rd International Cyber Resilience Conference (CRC)",
  link: "https://doi.org/10.1109/CRC50527.2021.9392626",
  dates: {},
  definitions: {
    spearPhishing: {
      quote: "Spear phishing email: a fraudulent email send to selected staff in the organization. The staff are selected on the basis of the information collected in the reconnaissance stage. This email will contain malicious links and malicious attachments",
      where: "TABLE II – APT Direct Delivery Methods",
      context: "Defined as a targeted phishing email sent to selected staff based on reconnaissance, containing malicious links or attachments."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Malware Analysis for Proactive Defence on Cyber Threat Vulnerabilities",
  authors: "Gowtham Pushkar Bhatraju; Udhayakumar Shanmugam; B. Indira; Uma Nandhini D",
  year: 2023,
  venue: "2023 Innovations in Power and Advanced Computing Technologies (i-PACT)",
  link: "https://doi.org/10.1109/I-PACT58649.2023.10434439",
  dates: {},
  definitions: {
    spearPhishing: {
      quote: "A specific type of phishing attack known as spear phishing employs malicious emails to specifically target persons or businesses. Spear phishing seeks to acquire sensitive information, including login passwords, or infect the target's device with malware.",
      where: "Section IV.E – Ransomware (infection strategies list)",
      context: "Spear phishing is defined in the context of a malware infection vector, describing targeted malicious emails aimed at stealing credentials or infecting devices."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "A Cost-Effective OCR Implementation to Prevent Phishing on Mobile Platforms",
  authors: "Yunjia Wang; Yang Liu; Tiejun Wu; Ishbel Duncan",
  year: 2020,
  venue: "",
  link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9138873",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing is currently defined as a criminal mechanism employing both social engineering and technical subterfuge to gather any useful information such as user personal data or financial account credentials.",
      where: "Abstract",
      context: "Phishing is defined as a criminal mechanism combining social engineering + technical subterfuge to gather useful information (e.g., personal data, financial credentials)."
    },
    spearPhishing: {
      quote: "Spear phishing, a more targeted attack towards a specific individual, organisation or business [4], is the number one infection vector employed by 71 percent of organized groups according to the Internet Security Threat Report from Symantec in 2018, as shown in Figure 3 [5].",
      where: "Section I. INTRODUCTION",
      context: "Spear phishing is described as a more targeted attack aimed at a specific individual/organisation/business, discussed in the context of being a major infection vector."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Machine Learning Algorithms Evaluation for Phishing URLs Classification",
  authors: "Habiba Bouijij; Amine Berqia",
  year: 2021,
  venue: "2021 4th International Symposium on Advanced Electrical and Communication Technologies (ISAECT)",
  link: "https://doi.org/10.1109/ISAECT53699.2021.9668489",
  dates: {},
  definitions: {
    phishing: {
      quote: "“Phishing is a crime employing both social engineering and technical subterfuge to steal consumers’ personal identity data and financial account credentials”.",
      where: "Section II.A – Phishing",
      context: "General definition of phishing as a crime combining social engineering and technical subterfuge to steal personal identity and financial credentials."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "A Comprehensive Study Cyber Attacks and Countermeasures",
  authors: "Sanish Nirwan; Balwinder Kaur Dhaliwal",
  year: 2023,
  venue: "Proceedings of the International Conference on Inventive Computation Technologies (ICICT 2023)",
  link: "https://doi.org/10.1109/ICICT57646.2023.10134237",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing is a form of social engineering attack that is frequently used to steal users’ information, such as login credentials and credit card details. It happens when an attacker deceives a victim to open an email, instant message, or text message by disguising themselves as a reliable source.",
      where: "Section III.B.1 – Phishing",
      context: "Defined as a social-engineering attack where attackers impersonate a reliable source to deceive victims into revealing sensitive information."
    },
    emailPhishing: {
      quote: "Email phishing, which is one of the most well-known types of phishing attacks, attempts to acquire critical information using an email that is from a reputable company.",
      where: "Section III.B.1 – Phishing",
      context: "Defined as a non-targeted phishing attack conducted via emails impersonating reputable companies to obtain critical information."
    },
    spearPhishing: {
      quote: "Spear phishing is a type of targeted phishing attack that uses an email that not only appears to be from a reliable source but also frequently originates from someone in the victim’s organisation, a close relative, or a superior in many situations.",
      where: "Section III.B.1 – Phishing",
      context: "Defined as a targeted phishing attack using highly personalized emails impersonating trusted individuals related to the victim."
    },
    smishing: {
      quote: "On the other hand, smishing combines short message service (SMS or text messaging service), phishing, and other tactics (sending someone an email to acquire personal data that can be exploited for identity theft).",
      where: "Section III.B.1 – Phishing",
      context: "Defined as phishing attacks conducted via SMS/text messages combined with phishing tactics to obtain personal data."
    }
  }
},  
{
  database: "IEEE Xplore",
  title: "Managing Cybersecurity Risks in Emerging Technologies: Challenges and Solutions",
  authors: "Rugved Gadge; Nilesh Shelke; Atharva Masharkar; Amit Pimpalkar; Amritansh Singh",
  year: 2024,
  venue: "2024 International Conference on Artificial Intelligence and Quantum Computation-Based Sensor Application (ICAIQSA)",
  link: "https://doi.org/10.1109/ICAIQSA64000.2024.10882358",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing attack methods include a variety of techniques by which phony emails and websites are spread in an attempt to obtain user credentials.",
      where: "Section III – Traditional Cybersecurity Threats in FinTech → A. Phishing Attacks",
      context: "Defined as social-engineering attacks using fake emails and websites to obtain user credentials, discussed in the context of FinTech threats."
    },
    spearPhishing: {
      quote: "Spear phishing is a form of phishing targeting particular individuals or organizations. Customized material is sometimes employed to increase the likeliness and the believability of the attack.",
      where: "Section III – Traditional Cybersecurity Threats in FinTech → B. Spear Phishing",
      context: "Defined as a targeted phishing attack using customized and personalized content to increase credibility and success."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Detection System of Whaling Attack using Deep Learning Techniques",
  authors: "J. Vanitha; C. Mallika; A. Hema; K. Parkavi; K.K. Shandhosh Shree; S. Senthilkumar",
  year: 2024,
  venue: "2024 2nd International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS)",
  link: "https://doi.org/10.1109/ICSSAS64001.2024.10760478",
  dates: {},
  definitions: {
    whaling: {
      quote: "\"Whaling\" is a kind of targeted phishing that aims specifically at senior executives by masquerading as legitimate email. A kind of social engineering-based digital fraud known as \"whaling\" involves tricking victims into doing a secondary action, such as starting a wire transfer of money.",
      where: "Abstract",
      context: "Whaling is explicitly defined as a targeted phishing attack aimed at senior executives, involving impersonation via email to induce actions such as wire transfers."
    },
    spearPhishing: {
      quote: "The aim of a whaling attack, a kind of spear phishing, is to trick high-level executives into divulging critical information or wiring money to an imposter account by having the attackers pretend as reputable, well-known groups.",
      where: "Section I. INTRODUCTION",
      context: "Spear phishing is defined implicitly via whaling as a broader targeted phishing category, where attackers impersonate reputable entities to deceive specific high-level targets."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Top Reported Data Security Risks in the Age of COVID-19",
  authors: "Suzanna Schmeelk; Kutub Thakur; Md Liakat Ali; Denise M. Dragos; Abdullah Al-hayajneh; Bryan Rendra Pramana",
  year: 2021,
  venue: "2021 IEEE 12th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON)",
  link: "https://doi.org/10.1109/UEMCON53757.2021.9666573",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing attacks are the practice of sending fraudulent communications that appear to come from a reputable source.",
      where: "Section II.A – Phishing Threats",
      context: "General definition of phishing as fraudulent communications impersonating reputable sources to deceive victims."
    },
    spearPhishing: {
      quote: "Spear phishing targets specific individuals instead of a wide group of people. The attackers customize their communications and appear more authentic.",
      where: "Section II.A.1 – Spear Phishing",
      context: "Defined as a targeted phishing attack using customized and authentic-appearing communications aimed at specific individuals."
    },
    vishing: {
      quote: "Phishing via phone calls and voice messaging systems is called vishing.",
      where: "Section II.A.3 – Vishing",
      context: "Defined as phishing conducted through phone calls or voice messaging systems."
    },
    businessEmailCompromise: {
      quote: "Business email compromise (BEC) is one of the scam schemes that mostly attacking companies who conduct wire transfers and have global suppliers.",
      where: "Section II.A.2 – Business Email Compromise (BEC)",
      context: "Defined as a phishing-based scam targeting organizations conducting wire transfers, aiming to steal company money through social engineering."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Biometrics based access framework for secure cloud computing",
  authors: "Ashok R Patel",
  year: 2020,
  venue: "2020 International Conference on Computational Science and Computational Intelligence (CSCI)",
  link: "https://doi.org/10.1109/CSCI51800.2020.00246",
  dates: {},
  definitions: {
    phishing: {
      quote: "A phishing attack-it is an attack in which the attacker transfers the user to another website to steal the information of the client. A phishing attack is a fraud attack done to steal very delicate information.",
      where: "Section III. ATTACKS ON CLOUD COMPUTING AND MITIGATION → Authentication attacks",
      context: "Defined as redirecting a user to another (fake) website to steal client information; described as a fraud attack to steal sensitive information."
    },
    spearPhishing: {
      quote: "In spear phishing the attacker targets a specific company, they often try to gain personal information so that they can easily succeed.",
      where: "Section III. ATTACKS ON CLOUD COMPUTING AND MITIGATION → Authentication attacks → A phishing attack … there are many types of phishing",
      context: "Defined as phishing targeting a specific company, aiming to obtain personal information to increase success."
    },
    whaling: {
      quote: "whaling is an attack in which an attacker targets big companies.",
      where: "Section III. ATTACKS ON CLOUD COMPUTING AND MITIGATION → Authentication attacks → A phishing attack … there are many types of phishing",
      context: "Defined as phishing targeting big companies."
    },
    clonePhishing: {
      quote: "clone phishing is a type of phishing attack whereby an attacker tries to create an identical or cloned email. The content of the mail contains malicious content that is sent from the spoofed email.",
      where: "Section III. ATTACKS ON CLOUD COMPUTING AND MITIGATION → Authentication attacks → A phishing attack … there are many types of phishing",
      context: "Defined as creating a cloned/identical email containing malicious content and sent from a spoofed email address."
    },
    linkManipulation: {
      quote: "Link manipulation: In this method, the link is manipulated in such a way that it looks original link by changing a spelling or any other way possible. The user will click on the manipulated URL and they will be transferred to the fake site and they misuse the data.",
      where: "Section III. ATTACKS ON CLOUD COMPUTING AND MITIGATION → Authentication attacks → Link manipulation",
      context: "Defined as altering a link to look legitimate (e.g., spelling changes) to lure users to a fake site and misuse their data."
    },
    vishing: {
      quote: "there are many types of phishing-spear phishing, whaling, clone phishing, link manipulation, voice phishing.",
      where: "Section III. ATTACKS ON CLOUD COMPUTING AND MITIGATION → Authentication attacks → A phishing attack … there are many types of phishing",
      context: "Voice phishing is explicitly listed as a phishing type (no further definition beyond naming)."
    }
  }
}, 
{
  database: "IEEE Xplore (IEEE Access)",
  title: "Uncovering the Cloak: A Systematic Review of Techniques Used to Conceal Phishing Websites",
  authors: "Wenhao Li; Selvakumar Manickam; Shams Ul Arfeen Laghari; Yung-Wey Chong",
  year: 2023,
  venue: "IEEE Access",
  link: "https://doi.org/10.1109/ACCESS.2023.3293063",
  dates: {
    received: "11 June 2023",
    accepted: "2 July 2023",
    published: "7 July 2023"
  },
  definitions: {
    phishing: {
      quote: "Phishing represents a cybersecurity attack strategy commonly employed by cybercriminals to unlawfully acquire sensitive user information, including passwords, account details, credit card data, and other personally identifiable information.",
      where: "Abstract",
      context: "Defined as a cybersecurity attack strategy aimed at unlawfully acquiring sensitive user information via deceptive means."
    },
    spearPhishing: {
      quote: "More specifically, phishing can be classified into two types: general phishing and spear-phishing. The former involves a relatively large-scale attack, while the latter aims at a certain group of people or an organization with highly customized information.",
      where: "Introduction",
      context: "Spear phishing is defined as a targeted form of phishing aimed at a specific group or organization using highly customized information."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Feature Selection Approach for Phishing Detection",
  authors: "Ahmet Selim Küçükkara; Oğuzhan Menemencioğlu",
  year: 2022,
  venue: "2022 3rd International Informatics and Software Engineering Conference (IISEC)",
  link: "https://doi.org/10.1109/IISEC56263.2022.9998296",
  dates: {},
  definitions: {
    phishing: {
      quote: "Phishing is a scalable act of deception in which impersonation is used to obtain information from a target",
      where: "Introduction (citing Lastdrager [3])",
      context: "Phishing is explicitly defined as a scalable deceptive act relying on impersonation to obtain information from victims; used as the foundational definition for the study."
    }
  }
}, 
{
  "paper": {
    "title": "AI Meta-Learners and Extra-Trees Algorithm for the Detection of Phishing Websites",
    "year": 2020,
    "venue": "IEEE Access",
    "peerReviewed": true,
    "language": "English",
    "includedInReview": false,
    "exclusionReason": "No explicit definitions of phishing subtypes; only general phishing definition and delivery channels mentioned",
    "definedPhishingTypes": []
  }
}, 
{
  database: "IEEE Xplore",
  title: "Phishing Attacks Detection using Machine Learning Approach",
  authors: "Mohammad Nazmul Alam; Ishita Saha; Dhiman Sarma; Rubaiath-E-Ulfath; Farzana Firoz Lima; Sohrab Hossain",
  year: 2020,
  venue: "Proceedings of the Third International Conference on Smart Systems and Inventive Technology (ICSSIT 2020)",
  link: "IEEE Xplore",
  definitions: {
    algorithmBasedPhishing: {
      quote: "The first phishing attack was caught by America Online (AOL), which was created using an algorithm. The cheater built an algorithm to match the credit card number of America Online accounts [3].",
      where: "Section II.A.1 Algorithm-Based Phishing",
      context: "Defined as phishing attacks generated through algorithms to match or guess sensitive information such as credit card numbers."
    },
    deceptivePhishing: {
      quote: "Fishers send emails to the users to verify the account. They use links and buttons and request to click them. Behind the links, there has a website where the hackers snatch and store the personal information of the users.",
      where: "Section II.A.2 Deceptive Phishing",
      context: "Defined as deceptive emails with links that redirect victims to malicious websites to steal personal information."
    },
    urlPhishing: {
      quote: "Universal Resource Locator (URL) phishing is another kind of phishing attack done by using a hidden link. The link holds the hackers' website.",
      where: "Section II.A.3 URL Phishing",
      context: "Defined as phishing attacks that use malicious or hidden URLs redirecting users to attacker-controlled websites."
    },
    contentInjectionPhishing: {
      quote: "Hackers target the user and present a fake website as legitimate. The reason is to mislead the user or wrongly present the organization. It is also known as content spoofing.",
      where: "Section II.A.5 Content-Injection Phishing",
      context: "Defined as injecting or presenting fake content or websites that impersonate legitimate organizations."
    },
    clonePhishing: {
      quote: "Clone phishing is another kind of phishing attack where email is hacked by an opponent party from the sender or receiver email. The malicious attacker creates alike original email and sends it to the first or second party with attachment or link.",
      where: "Section II.A.6 Clone Phishing",
      context: "Defined as duplicating legitimate emails and resending modified versions with malicious attachments or links."
    },
    whaling: {
      quote: "This type of phishing is targeted at the higher executives of the organization. The content of the email is about important issues, and it is sent to the executives.",
      where: "Section II.A.7 Whaling",
      context: "Defined as phishing attacks targeting high-level executives using seemingly important or urgent messages."
    },
    spearPhishing: {
      quote: "Spear phishing is one kind of email scam used to target specific persons and organizations. The attacker sends emails to get a reply from the targeted person.",
      where: "Section II.A.8 Spear phishing",
      context: "Defined as targeted phishing emails crafted for specific individuals or organizations."
    }
  }
}, 
{
  database: "IEEE Xplore",
  title: "Phishing Website Detection Based on Machine Learning: A Survey",
  authors: "Charu Singh; Smt. Meenu",
  year: 2020,
  venue: "2020 6th International Conference on Advanced Computing & Communication Systems (ICACCS)",
  link: "https://ieeexplore.ieee.org/document/9044905",
  dates: {
    published: "2020"
  },
  definitions: {
    phishing: {
      quote: "Phishing attacks are cybercrime in today’s world which are done by social engineering and malware based. In phishing, phishers use email or message, as a weapon to target individual or organization by send URL link to target people and to deceive them.",
      where: "Abstract",
      context: "As mentioned in Abstract"
    },
    websitePhishing: {
      quote: "It often directs users to enter personal information or sensitive information, i.e., password, credits card details at a forged website which look like legitimate site.",
      where: "Introduction",
      context: "As mentioned in Introduction"
    }
  }
},
{
  database: "IEEE Xplore",
  title: "Phishing website detection using novel machine learning fusion approach",
  authors: "A. Lakshmanarao; P. Surya Prabhakara Rao; M. M. Bala Krishna",
  year: 2021,
  venue: "Proceedings of the International Conference on Artificial Intelligence and Smart Systems (ICAIS-2021)",
  link: "https://ieeexplore.ieee.org/document/9395810",
  dates: {
    published: "2021"
  },
  definitions: {
    phishing: {
      quote: "The Phishing is a sort of social designing assault regularly used to take client information, including login accreditations and credit card numbers.",
      where: "Abstract",
      context: "Defined as a social engineering attack used to steal client information."
    },
    websitePhishing: {
      quote: "In a phishing attack, the users are forced to link to illegal websites and revealed their critical information like bank-related information, credit card details, passwords, etc.",
      where: "Introduction",
      context: "Phishing conducted via fake websites to steal sensitive information."
    }}},
    {
  database: "ACM Digital Library",
  title: "Exposing the Phish: The Effect of Persuasion Techniques in Phishing E-Mails",
  authors: "Michael Koddebusch",
  year: 2022,
  venue: "DG.O '22: Proceedings of the 23rd Annual International Conference on Digital Government Research (June 2022)",
  link: "https://dl.acm.org/doi/10.1145/3543434.3543476",
  dates: {
    published: "15 June 2022"
  },
  definitions: {
    phishing: {
      quote: "Phishing is a scalable act of deception whereby impersonation is used to obtain information from a target.",
      where: "Section 2.4 Phishing, Spear Phishing, Persuasion Techniques and Phishing Experiments",
      context: "General phishing definition (not counted toward topic frequency per your rules)."
    },
    spearPhishing: {
      quote: "A particular form of phishing is spear phishing, which adds the specialization with which a potential victim is being addressed.",
      where: "Section 2.4 Phishing, Spear Phishing, Persuasion Techniques and Phishing Experiments",
      context: "Explicitly describes spear phishing as a particular form of phishing with increased specialization/targeting."
    }
  }
}, 
{
  database: "ACM Digital Library",
  title: "Eyes on the Phish(er): Towards Understanding Users’ Email Processing Pattern and Mental Models in Phishing Detection",
  authors: "Sijie Zhuo; Robert L Biddle; Jared Daniel Recomendable; Giovanni Russello; Danielle Lottridge",
  year: 2024,
  venue: "EuroUSEC '24: Proceedings of the 2024 European Symposium on Usable Security (September 2024)",
  link: "https://dl.acm.org/doi/10.1145/3688459.3688465",
  dates: {
    published: "30 September 2024"
  },
  definitions: {
    spearPhishing: {
      quote: "Moreover, attackers can leverage AI to create sophisticated spear-phishing emails with minimal effort by providing more information about the victims to these models [ 11].",
      where: "Section 2.3 Phishing Email Designs"
    },
    tailoredPhishing: {
      quote: "Tailored phishing, a term introduced by Burda et al. [ 5], describes phishing attacks that fall between generic phishing and spear-phishing. Similar to generic phishing, tailored phishing is a single-stage attack (hit-or-miss attack) but involves gathering additional information about the victims and their organisation to craft the phishing email, targeting a smaller population. Unlike spear-phishing, which involves iterative information gathering and attack engineering, tailored phishing requires less effort due to its single-stage nature.",
      where: "Section 2.3 Phishing Email Designs"
    }
  }
}, 
{
  database: "ACM Digital Library",
  title: "How Experts Detect Phishing Scam Emails",
  authors: "Rick Wash",
  year: 2020,
  venue: "Proceedings of the ACM on Human-Computer Interaction (PACM HCI), Vol. 4, Issue CSCW2, Article 160",
  link: "https://dl.acm.org/doi/10.1145/3415231",
  definitions: {
    emailPhishing: {
      quote: "A phishing email is an email that pretends to be something that it is not, in order to get its recipient to take an action that they otherwise wouldn’t do.",
      where: "Section 1 INTRODUCTION"
    },
    spearPhishing: {
      quote: "Phishing attacks are particularly a problem when attackers are targeting specific individuals or organizations – which is often called “spear-phishing”.",
      where: "Section 2 PHISHING"
    }
  },
  includedInReview: true
}, 
{
  database: "ACM Digital Library",
  title: "SpacePhish: The Evasion-space of Adversarial Attacks against Phishing Website Detectors using Machine Learning",
  authors: "Giovanni Apruzzese; Mauro Conti; Ying Yuan",
  year: 2022,
  venue: "Proceedings of the 38th Annual Computer Security Applications Conference (ACSAC '22)",
  link: "https://doi.org/10.1145/3564625.3567980",
  dates: {
    published: "2022-12-05"
  },
  includedInReview: false,
  exclusionReason: "No explicit definition of any phishing type; paper focuses on ML-based phishing website detection and adversarial attacks",
  definitions: {}
}, 
{
  database: "ACM Digital Library",
  title: "Phishing URL Detection: A Network-based Approach Robust to Evasion",
  authors: "Taeri Kim; Noseong Park; Jiwon Hong; Sang-Wook Kim",
  year: 2022,
  venue: "Proceedings of the 2022 ACM SIGSAC Conference on Computer and Communications Security (CCS '22)",
  link: "https://doi.org/10.1145/3548606.3560615",
  dates: {
    published: "2022-11-07"
  },
  includedInReview: false,
  exclusionReason: "No explicit definition of a phishing type; paper defines evasion technique but not phishing categories",
  definitions: {}
}, 
{
  database: "ACM Digital Library",
  title: "Utilizing Large Language Models with Human Feedback Integration for Generating Dedicated Warning for Phishing Emails",
  authors: "Quan Hong Nguyen; Tingmin Wu; Van Anh Nguyen; Xingliang Yuan; Jason Xue; Carsten Rudolph",
  year: 2024,
  venue: "SecTL '24: Proceedings of the 2nd ACM Workshop on Secure and Trustworthy Deep Learning Systems",
  link: "https://doi.org/10.1145/3665451.3665531",
  dates: {
    published: "2024-07-02"
  },
  includedInReview: false,
  exclusionReason: "No explicit definition of any phishing type; paper defines phishing indicators and warning mechanisms only",
  definitions: {}
}, 
{
  database: "ACM Digital Library",
  title: "Does trainer gender make a difference when delivering phishing training? A new experimental design to capture bias",
  authors: "André Palheiros da Silva; Winnie Bahati Mbaka; Johann Mayer; Jan-Willem Bullee; Katja Tuma",
  year: 2024,
  venue: "EASE '24: Proceedings of the 28th International Conference on Evaluation and Assessment in Software Engineering",
  link: "https://doi.org/10.1145/3661167.3661232",
  dates: {
    published: "2024-06-18"
  },
  includedInReview: false,
  exclusionReason: "Only a general definition of phishing is provided; phishing subtypes (e.g., mass phishing, spear phishing) are referenced but not explicitly defined",
  definitions: {}
}, 
{
  database: "ACM Digital Library",
  title: "Catching Transparent Phish: Analyzing and Detecting MITM Phishing Toolkits",
  authors: "Brian Kondracki; Babak Amin Azad; Oleksii Starov; Nick Nikiforakis",
  year: 2021,
  venue: "Proceedings of the 2021 ACM SIGSAC Conference on Computer and Communications Security (CCS ’21)",
  link: "https://doi.org/10.1145/3460120.3484765",
  dates: {
    published: "2021-11-12"
  },
  definitions: {
    mitmPhishing: {
      quote: "For the scope of this paper, we define a MITM phishing toolkit as a reverse proxy server that mirrors a target web page to a victim while harvesting credentials, 2FA codes, and web page content in transit.",
      where: "Section 3.1 – MITM Phishing Toolkit Identification and Collection",
      context: "Defines MITM phishing as a phishing subtype based on a man-in-the-middle reverse proxy architecture enabling real-time credential and session hijacking."
    }
  },
  includedInReview: true
}, 
{
  database: "ACM Digital Library",
  title: "Towards Improving Phishing Detection System Using Human in the Loop Deep Learning Model",
  authors: "Sultan Asiri; Yang Xiao; Saleh Alzahrani",
  year: 2024,
  venue: "ACMSE '24: Proceedings of the 2024 ACM Southeast Conference (April 2024)",
  link: "https://dl.acm.org/doi/10.1145/3603287.3651193",
  dates: {
    published: "18 April 2024"
  },
  definitions: {
    phishing: {
      quote: "Phishing attacks are cyber attacks that deceive victims into revealing sensitive information or downloading malware.",
      where: "Abstract"
    },
    waterHoling: {
      quote: "Waterhole attacks strategically target websites frequented by a specific group, such as organization employees, aiming to compromise users within that community [27].",
      where: "Section 1 INTRODUCTION"
    }
  },
  includedInReview: true
},
{
  database: "ACM Digital Library",
  title: "Finding Phish in a Haystack: A Pipeline for Phishing Classification on Certificate Transparency Logs",
  authors: "Arthur Drichel; Vincent Drury; Justus von Brandt; Ulrike Meyer",
  year: 2021,
  venue: "ARES '21: Proceedings of the 16th International Conference on Availability, Reliability and Security (August 2021)",
  link: "https://dl.acm.org/doi/10.1145/3465481.3470111",
  dates: {
    published: "17 August 2021"
  },
  includedInReview: false,
  exclusionReason: "No explicit definition of any phishing type (and no explicit general definition provided); paper focuses on a CT-log based detection/evaluation pipeline and classifier comparisons",
  definitions: {}
}, 
{
  database: "ACM Digital Library",
  title: "AntiPhishNN: Hybrid neural networks using URL and domain information for phishing website detection",
  authors: "Shi-Han Chen; Kai-Chuan Kong; Yi-Xiang Lu; Dong-Jie Liu",
  year: 2023,
  venue: "ICEA '23: Proceedings of the 2023 International Conference on Intelligent Computing and Its Emerging Applications (December 2023)",
  link: "https://dl.acm.org/doi/10.1145/3659154.3659170",
  dates: {
    published: "14 December 2023"
  },
  includedInReview: false,
  exclusionReason: "No explicit definition of any phishing type; paper focuses on phishing website detection using deep learning models only",
  definitions: {}
}, 
{
  database: "ACM Digital Library",
  title: "Secure Featurization and Applications to Secure Phishing Detection",
  authors: "Akash Shah; Nishanth Chandran; Mesfin A Dema; Divya Gupta; Arun Gururajan; Huan Yu",
  year: 2021,
  venue: "CCSW '21: Proceedings of the 2021 on Cloud Computing Security Workshop (November 2021)",
  link: "https://dl.acm.org/doi/10.1145/3474123.3486759",
  dates: {
    published: "15 November 2021"
  },
  includedInReview: false,
  exclusionReason: "No explicit definition of any phishing subtype (e.g., spear phishing, smishing, vishing, whaling). Only general phishing description and privacy-preserving ML detection framework.",
  definitions: {}
}



];

/* =========================
   TOPIC FREQUENCY COUNTS
========================= */
// =========================
// UPDATED TOPIC_FREQUENCY
// =========================
// IMPORTANT:
// – ONLY topics that are EXPLICITLY DEFINED are counted
// – spearPhishing, clonePhishing, vishing are DISCUSSED ONLY in this paper
// – therefore NO frequency increment for them

// =========================
// COMPLETE UPDATED TOPIC_FREQUENCY
// (Applied strictly on TOP of your provided baseline)
// =========================
// Change justified by the LAST INCLUDED paper:
// ✔ Explicit definition of Spear Phishing
// ✖ No other phishing types explicitly defined
// → ONLY spearPhishing is incremented by +1

const TOPIC_FREQUENCY = {
  phishing:                { label: "Phishing (general)", count: 56 }, // +1
  spearPhishing:           { label: "Spear Phishing",     count: 39 },
  pharming:                { label: "Pharming",           count: 6  },
  vishing:                 { label: "Vishing",            count: 34 },
  smishing:                { label: "Smishing",           count: 21 },
  ransomware:              { label: "Ransomware",         count: 4  },
  adaptivePhishing:        { label: "Adaptive Phishing",  count: 1  },
  emailPhishing:           { label: "Email Phishing",     count: 17 },
  whaling:                 { label: "Whaling",            count: 12 },
  contentInjectionPhishing:{ label: "Content-Injection Phishing", count: 4 },
  searchEnginePhishing:    { label: "Search-Engine Phishing",     count: 5 },
  websitePhishing:         { label: "Website Phishing",   count: 5 },
  domainSpoofing:          { label: "Domain Spoofing",     count: 1 },
  socialMediaPhishing:     { label: "Social Media Phishing", count: 4 },
  sessionHijacking:        { label: "Session Hijacking",  count: 2 },
  webBasedDelivery:        { label: "Web-Based Delivery Phishing", count: 2 },
  linkManipulation:        { label: "Link Manipulation",  count: 3 },
  pretexting:              { label: "Pretexting",         count: 1 },
  baiting:                 { label: "Baiting",            count: 1 },
  waterHoling:             { label: "Water-Holing",       count: 2 },
  clonePhishing:           { label: "Clone Phishing",     count: 5 },
  tailoredPhishing:        { label: "Tailored Phishing",  count: 1 }, // unchanged
  mitmPhishing:            { label: "MITM Phishing",      count: 1 }  // 🆕 added (explicit definition)
};
const TOPICS = [
  { key: "phishing", label: "Phishing" },
  { key: "spearPhishing", label: "Spear Phishing" },
  { key: "pharming", label: "Pharming" },
  { key: "vishing", label: "Vishing" },
  { key: "smishing", label: "Smishing" },
  { key: "ransomware", label: "Ransomware" },
  { key: "adaptivePhishing", label: "Adaptive Phishing" },
  { key: "emailPhishing", label: "Email Phishing" },
  { key: "whaling", label: "Whaling" },
  { key: "contentInjectionPhishing", label: "Content-Injection Phishing" },
  { key: "searchEnginePhishing", label: "Search-Engine Phishing" },
  { key: "websitePhishing", label: "Website Phishing" },
  { key: "domainSpoofing", label: "Domain Spoofing" },
  { key: "socialMediaPhishing", label: "Social Media Phishing" },
  { key: "sessionHijacking", label: "Session Hijacking" },
  { key: "webBasedDelivery", label: "Web-Based Delivery Phishing" },
  { key: "linkManipulation", label: "Link Manipulation" },
  { key: "pretexting", label: "Pretexting" },
  { key: "baiting", label: "Baiting" },
  { key: "waterHoling", label: "Water-Holing" },
  { key: "clonePhishing", label: "Clone Phishing" },
  { key: "tailoredPhishing", label: "Tailored Phishing" },
  { key: "mitmPhishing", label: "MITM Phishing" } // 🆕 added
];
