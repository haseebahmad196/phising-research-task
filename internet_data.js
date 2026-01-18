/* =========================================================
   Internet Sources Data (Page 2)
   IMPORTANT:
   - Quotes are verbatim from the webpages
   - DO NOT include "where"
   - DO NOT include "accessed"
========================================================= */

window.TOPIC_KEYS = [
  "phishing",
  "spearPhishing",
  "pharming",
  "vishing",
  "smishing",
  "ransomware",
  "adaptivePhishing",
  "emailPhishing",
  "whaling",
  "contentInjectionPhishing",
  "searchEnginePhishing",
  "websitePhishing",
  "domainSpoofing",
  "socialMediaPhishing",
  "sessionHijacking",
  "webBasedDelivery",
  "linkManipulation",
  "pretexting",
  "baiting",
  "waterHoling",
  "clonePhishing",
];

// Pretty labels
window.topicLabel = function topicLabel(key) {
  const map = {
    phishing: "Phishing",
    spearPhishing: "Spear Phishing",
    pharming: "Pharming",
    vishing: "Vishing",
    smishing: "Smishing",
    ransomware: "Ransomware",
    adaptivePhishing: "Adaptive Phishing",
    emailPhishing: "Email Phishing",
    whaling: "Whaling",
    contentInjectionPhishing: "Content Injection Phishing",
    searchEnginePhishing: "Search Engine Phishing",
    websitePhishing: "Website Phishing",
    domainSpoofing: "Domain Spoofing",
    socialMediaPhishing: "Social Media Phishing",
    sessionHijacking: "Session Hijacking",
    webBasedDelivery: "Web-based Delivery",
    linkManipulation: "Link Manipulation",
    pretexting: "Pretexting",
    baiting: "Baiting",
    waterHoling: "Water Holing",
    clonePhishing: "Clone Phishing",
  };
  return map[key] || key;
};

/* Used only for Top/Bottom 10 buttons */
window.TOPIC_FREQUENCY = {
  phishing: 1,
  spearPhishing: 5,
  pharming: 0,
  vishing: 0,
  smishing: 0,
  ransomware: 0,
  adaptivePhishing: 0,
  emailPhishing: 0,
  whaling: 2,
  contentInjectionPhishing: 0,
  searchEnginePhishing: 0,
  websitePhishing: 0,
  domainSpoofing: 0,
  socialMediaPhishing: 0,
  sessionHijacking: 0,
  webBasedDelivery: 0,
  linkManipulation: 0,
  pretexting: 0,
  baiting: 0,
  waterHoling: 0,
  clonePhishing: 1,
};

/* =========================================================
   INTERNET SOURCES
========================================================= */

window.INTERNET_SOURCES = [
  /* =========================
     SRC-001 — BRANDMAUER IT
  ========================= */
  {
    id: "SRC-001",
    title: "Difference: Phishing and Spear Phishing",
    publisher: "BRANDMAUER IT",
    year: 2025,
    url: "https://www.brandmauer.de/blog/unterschied-zwischen-phishing-und-spear-phishing",
    language: "EN",
    kept: true,
    definitions: [
      {
        topicKey: "phishing",
        quote:
          "Phishing describes a type of social engineering attack , i.e., attacks in which cybercriminals exploit natural human characteristics to influence the behavior of people with malicious intent."
      },
      {
        topicKey: "spearPhishing",
        quote:
          "This very approach—a targeted attack on a specific victim —is what spear phishing is."
      },
      {
        topicKey: "spearPhishing",
        quote:
          "Unlike traditional phishing , where mass emails are sent out, spear phishing emails target a specific victim ."
      }
    ],
    notes: ""
  },

  /* =========================
     SRC-002 — ZSCALER (ZPEDIA)
  ========================= */
  {
    id: "SRC-002",
    title: "What Is Spear Phishing?",
    publisher: "Zscaler (Zpedia)",
    year: null,
    url: "https://www.zscaler.com/de/resources/security-terms-glossary/what-is-spear-phishing",
    language: "EN",
    kept: true,
    definitions: [
      {
        topicKey: "spearPhishing",
        quote:
          "Spear phishing is a type of cyberattack that uses \"social engineering\" techniques through email or other messaging to deceive a specific individual into divulging sensitive information, downloading ransomware or other malware, and more."
      },
      {
        topicKey: "whaling",
        quote:
          "Whaling attacks: Threat actors target members of an organization likely to have privileged access—generally senior-level executives or equivalents."
      },
      {
        topicKey: "clonePhishing",
        quote:
          "Clone phishing: Phishers send malicious emails that seem to be from senders the victim trusts, such as financial institutions or business services."
      }
    ],
    notes: ""
  },

  /* =========================
     SRC-003 — RAPID7
  ========================= */
  {
    id: "SRC-003",
    title: "Spear Phishing Attacks",
    publisher: "Rapid7",
    year: null,
    url: "https://www.rapid7.com/fundamentals/spear-phishing-attacks/",
    language: "EN",
    kept: true,
    definitions: [
      {
        topicKey: "spearPhishing",
        quote:
          "Spear phishing is a targeted form of phishing attack where cybercriminals craft personalized messages to trick specific individuals or teams into taking harmful actions."
      },
      {
        topicKey: "spearPhishing",
        quote:
          "Spear phishing is a common type of cyber attack in which attackers take a narrow focus and craft detailed, targeted email messages to a specific recipient or group."
      },
      {
        topicKey: "whaling",
        quote:
          "Whaling is a specialized form of spear phishing that targets high-value individuals such as C-level executives or senior leadership."
      }
    ],
    notes: ""
  }, 
  {

  id: "SRC-004",
  title: "What is a Spear Phishing attack?",
  publisher: "Hornetsecurity",
  year: null,
  url: "https://www.hornetsecurity.com/en/knowledge-base/spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a form of social engineering, often involving the impersonation of an individual to trick the recipient into performing a desired action, usually financial in nature."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Unlike traditional phishing emails, spear phishing emails actually target people who would normally treat fake emails with a healthy degree of scepticism."
    },
    {
      topicKey: "phishing",
      quote:
        "Spear phishing and phishing attacks both use impersonation to commit fraud."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-005",
  title: "Spear Phishing Definition & Prevention",
  publisher: "INKY Technology",
  year: null,
  url: "https://www.inky.com/en/blog/spear-phishing-definition-prevention/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "A concise spear phishing definition is characterized as the act of sending emails from a known or trusted sender in order to trick specific individuals to reveal confidential information or perform an act like purchasing gift cards."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing takes a more focused approach and is more insidious."
    },
    {
      topicKey: "whaling",
      quote:
        "The biggest targets are called whales."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-006",
  title: "Spear Phishing",
  publisher: "Barracuda Networks",
  year: null,
  url: "https://www.barracuda.com/glossary/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a personalized phishing attack that targets a specific organization or individual."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "These attacks are carefully designed to elicit a specific response from a specific target."
    },
    {
      topicKey: "phishing",
      quote:
        "Phishing emails are generic, targeting a broad audience with low effort, while spear phishing personalizes the attack for specific individuals with moderate effort."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling attacks target high-profile executives with highly customized emails and significant attacker effort."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-007",
  title: "Phishing",
  publisher: "Wikipedia",
  year: 2026,
  url: "https://en.wikipedia.org/wiki/Phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a form of social engineering and a scam where attackers deceive people into revealing sensitive information[1] or installing malware such as viruses, worms, adware, or ransomware."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "This type of social engineering attack can involve sending fraudulent emails or messages that appear to be from a trusted source, such as a bank or government agency."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a targeted phishing attack that uses personalized messaging, especially e-mails,[17] to trick a specific individual or organization into believing they are legitimate."
    },
    {
      topicKey: "vishing",
      quote:
        "Voice over IP (VoIP) is used in vishing or voice phishing attacks,[26] where attackers make automated phone calls to large numbers of people, often using text-to-speech synthesizers, claiming fraudulent activity on their accounts."
    },
    {
      topicKey: "smishing",
      quote:
        "SMS phishing[28] or smishing[29][30] is a type of phishing attack that uses text messages from a cell phone or smartphone to deliver a bait message.[31]"
    },
    {
      topicKey: "linkManipulation",
      quote:
        "Phishing attacks often involve creating fake links that appear to be from a legitimate organization.[40]"
    }
  ],
  notes: ""
}, 
{
  id: "SRC-008",
  title: "What is Spear-Phishing? Definition with Examples",
  publisher: "CrowdStrike",
  year: 2023,
  url: "https://www.crowdstrike.com/en-us/cybersecurity-101/social-engineering/spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear-phishing is a type of phishing attack that targets specific individuals or organizations typically through malicious emails. The goal of spear phishing is to steal sensitive information such as login credentials or infect the targets’ device with malware."
    },
    {
      topicKey: "vishing",
      quote:
        "Phishing attacks via phone calls are often called vishing for voice-phishing."
    },
    {
      topicKey: "smishing",
      quote:
        "Attacks via text messages are known as smishing for SMS-phishing."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-009",
  title: "What is Spear Phishing? Definition and Examples",
  publisher: "Advantex Network Solutions Limited",
  year: 2026,
  url: "https://www.advantex.co.uk/what-is-spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a form of cyberattack in which malicious actors strive to get sensitive information or accept malicious links or attachments."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "A workable spear phishing definition must therefore include the fact that attackers carefully research their targets."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Once they know what might prompt a specific person to click on a malicious link or open an attachment, they use this information to spread malware infections or steal credentials."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-011",
  title: "What is phishing?",
  publisher: "Yubico",
  year: null,
  url: "https://www.yubico.com/resources/phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is the art of tricking people into revealing personal information."
    },
    {
      topicKey: "phishing",
      quote:
        "Phishing is the fraudulent practice of inducing people to reveal sensitive personal information such as credit card numbers and passwords."
    },
    {
      topicKey: "linkManipulation",
      quote:
        "Most phishing attacks use technical deception to spoof or manipulate links in some way."
    },
    {
      topicKey: "pharming",
      quote:
        "In Pharming, the phishing scammer infects your computer with malware to redirect you to a fake version of a legitimate website you attempt to visit."
    },
    {
      topicKey: "filterEvasionPhlashing",
      quote:
        "This is called filter evasion or phlashing."
    },
    {
      topicKey: "websiteForgery",
      quote:
        "Certain phishing attacks alter the address bar of the target website using JavaScript commands."
    },
    {
      topicKey: "covertRedirect",
      quote:
        "Phishing attacks that use covert redirect use legitimate-seeming links to redirect a victim to an attacker’s phishing website."
    },
    {
      topicKey: "searchEnginePhishing",
      quote:
        "Search engine phishing involves using search engines to direct victims to product store sites."
    },
    {
      topicKey: "sessionHijacking",
      quote:
        "Phishing attackers can hijack sessions by exploiting the control mechanism of the web session to steal user information."
    },
    {
      topicKey: "socialEngineering",
      quote:
        "Phishing attacks are a type of social engineering."
    },
    {
      topicKey: "contentInjection",
      quote:
        "Content injection is a phishing technique that allows attackers to change portions of reliable website content."
    },
    {
      topicKey: "tabnabbing",
      quote:
        "Tabnabbing takes advantage of a user’s open tabs, silently redirecting the victim to the affected site by loading a phishing page in one open tab."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Personal phishing attempts directed at particular companies or individuals is called spear phishing."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling phishing, trap fishing, or simply whaling is a type of spear phishing attack that takes aim at high-profile targets such as senior executives."
    },
    {
      topicKey: "catphishing",
      quote:
        "Catphishing (with a “ph”) attackers pose online in order to gain access to a person’s resources or information, or to otherwise force them to do something."
    },
    {
      topicKey: "catfishing",
      quote:
        "Catfishing (with an “f”) is a related but specifically romantic or sexual concept, in which the phishing attacker creates a social network presence to lure the victim into a social relationship for access to resources or to gain control."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Clone phishing attacks make use of cloned emails, emails that were previously legitimate and delivered with links or attachments, but then stolen and replaced with a malicious version that seems to come from the original sender."
    },
    {
      topicKey: "vishing",
      quote:
        "Similarly, vishing or voice phishing skips the written message and reaches out with this kind of VoIP system and fake caller-ID data to spoof a trusted organization and elicit sensitive data."
    },
    {
      topicKey: "smishing",
      quote:
        "SMS phishing or smishing delivers malicious links, cell phone numbers, or other bait via SMS."
    }
  ],
}, 
{
  id: "SRC-012",
  title: "Understanding Spear Phishing: Definition, Risks, and Prevention",
  publisher: "LastPass",
  year: 2024,
  url: "https://blog.lastpass.com/posts/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "In a spear phishing campaign, attackers mimic trusted contacts to gain the trust of specific members of an organization."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "The attackers send carefully crafted emails to deceive their victims into acting against the organization’s best interests."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "The purpose of spear phishing is to obtain network access or steal sensitive data by targeting specific individuals or groups."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Instead of large-scale attacks, spear phishing relies on the human desire to be helpful, especially if requests for help supposedly come from an authority figure or someone higher up the chain of command."
    },
    {
      topicKey: "phishing",
      quote:
        "While spear phishing is a subset of phishing, their approaches are different."
    },
    {
      topicKey: "phishing",
      quote:
        "Think of phishing as casting a wide net."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-014",
  title: "Phishing",
  publisher: "Darktrace",
  year: 2025,
  url: "https://www.darktrace.com/cyber-ai-glossary/phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is the process of sending fraudulent emails, while posing as legitimate sender, to convince people to reveal sensitive information such as passwords, social security numbers, bank account information, and more."
    },
    {
      topicKey: "phishing",
      quote:
        "Phishing attacks are deceptive attempts to trick individuals into providing sensitive information by masquerading as legitimate entities."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing attacks are a type of cyber attack that targets a specific individual or organization rather than a broad audience."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing, short for \"SMS phishing\", is a form of cyber attack that uses text messages to trick people into revealing sensitive information or installing malware on their devices."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing (voice phishing) uses voice communication to get people to reveal their sensitive information."
    },
    {
      topicKey: "waterHoling",
      quote:
        "A watering hole attack is a type of cyber attack in which the attacker targets a specific group of individuals by infecting websites that they are known to visit."
    },
    {
      topicKey: "socialEngineering",
      quote:
        "Social engineering is a technique used by cyber-criminals to manipulate the humans behind machines rather than exploiting code-based vulnerabilities."
    }
  ],
  notes: ""
},
{
  id: "SRC-015",
  title: "What Is Spear Phishing? And Why It’s So Effective",
  publisher: "Abnormal AI",
  year: 2026,
  url: "https://abnormal.ai/glossary/spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing remains the world’s most common cyberattack, and the problem keeps growing."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a highly targeted cyberattack in which criminals research a victim and send convincing phishing emails."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a targeted email attack aimed at a specific individual or organization."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Attackers use personal or organizational details to craft convincing messages that trick recipients into revealing sensitive information, transferring funds, or downloading and installing malware."
    },
    {
      topicKey: "whaling",
      quote:
        "Whale phishing, also known as whaling, is spear phishing aimed at senior leaders such as C-suite executives."
    }
  ],
  notes: ""
},
{
  id: "SRC-016",
  title: "Phishing",
  publisher: "Verizon",
  year: 2026,
  url: "https://www.verizon.com/about/account-security/phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is first and foremost a cybercrime. In a phishing scam, a target is contacted by email, telephone or text message by someone posing as a close personal contact or on behalf of a legitimate institution."
    },
    {
      topicKey: "phishing",
      quote:
        "The objective is to get people to reveal sensitive data such as their account numbers, home address, banking/credit card details and usernames/passwords."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Email Phishing aka \"deceptive phishing\" refers to a fraudster who creates and sends deceptive emails with the goal of obtaining sensitive financial and personal information."
    },
    {
      topicKey: "trapPhishing",
      quote:
        "Trap Phishing is largely based on the mistakes of a company's IT (Information Technology) teams."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear Phishing targets a specific group or type of individual such as a company’s system administrator."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler Phishing is a new kind of phishing which uses social media to lure users to fake URLs, cloned websites, other posts/tweets and IMs that can be used to persuade people to divulge sensitive information or download malware."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is an even more targeted type of phishing that goes after “whales,” a term coined by the financial industry, which refers to CEOs, CFOs or other high level executives."
    },
    {
      topicKey: "vishing",
      quote:
        "Voice Phishing, aka \"Vishing\" has the same purpose as other types of phishing attacks, but this attack is accomplished through a voice call."
    },
    {
      topicKey: "smishing",
      quote:
        "Text Phishing, aka \"Smishing\" is an attack that uses text messaging or short message service (SMS) to execute the attack."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming involves hijacking the user’s browsers settings to show suspicious pop ups asking the user to click a link that then downloads malicious code executed on the victim's device to redirect to an attacker-controlled website."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-017",
  title: "Spear fishing: what is it and how to avoid it?",
  publisher: "Rzilient",
  year: 2025,
  url: "https://www.rzilient.club/en/article/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing, or targeted phishing, refers to an advanced form of phishing in which the perpetrator(s) attack a specific person or group within an organization."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Unlike traditional phishing, which involves sending mass emails in the hope that a victim will take the bait, spear phishing is personalized and carefully prepared."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "The attacker collects information about his target in advance (via LinkedIn, social networks, the company's website, or even previous data leaks) to make his message credible."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Its objective: recover sensitive data, access a system, or obtain a fraudulent transfer."
    },
    {
      topicKey: "pretexting",
      quote:
        "We also talk about Pretexting: a credible false story that encourages the target to cooperate."
    },
    {
      topicKey: "phishing",
      quote:
        "Classic phishing is based on mass strategy. Attackers send the same generic message to thousands or even millions of email addresses, hoping that a small percentage of victims fall into the trap."
    },
    {
      topicKey: "whaling",
      quote:
        "The Whaling is in a sense a sub-category of spear phishing. But here, the target is even more specific: these are the senior company executives (CEO, CFO, COO, etc.)."
    }
  ],
  notes: ""
},
{
  id: "SRC-018",
  title: "What is spear phishing?",
  publisher: "NordLayer",
  year: 2026,
  url: "https://nordlayer.com/learn/threats/spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a type of phishing attack where attackers impersonate trusted contacts or organizations."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Unlike standard phishing, spear phishing is highly targeted. Criminals craft personalized messages and use social engineering techniques to build credibility."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing attempts to deceive victims into clicking malicious links or downloading malware-infected attachments."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing works by tricking victims into taking risky actions, most commonly by assuming the persona of a contact the victim knows and trusts."
    },
    {
      topicKey: "phishing",
      quote:
        "Simple phishing attacks send general emails or other content to many targets and are not generally personalized for each recipient."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a specialist form of spear phishing that targets high-ranking officers and executives."
    },
    {
      topicKey: "socialEngineering",
      quote:
        "Criminals use social engineering techniques to create personalized content, build trust, and encourage hazardous actions."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-019",
  title: "What is Phishing Attack?",
  publisher: "CyberArk",
  year: 2026,
  url: "https://www.cyberark.com/glossary/what-is-phishing-attack/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "A phishing attack is a social engineering tactic commonly used to steal confidential data or deliver ransomware or some other form of malware."
    },
    {
      topicKey: "phishing",
      quote:
        "The attacker typically poses as a trusted source and sends an intended victim an email, a mobile text message, instant message, or social media post with a legitimate-looking but malicious link."
    },
   
    {
      topicKey: "spearPhishing",
      quote:
        "With a spear phishing attack, the attacker narrowly targets specific individuals within an organization."
    },
    {
      topicKey: "whaling",
      quote:
        "With a whaling attack, the attacker goes after high-worth or high-profile individuals like corporate executives or government leaders."
    },
    
  ],
  notes: ""
},
{
"id": "SRC-021",
"title": "Spear phishing: A definition plus differences between phishing and spear phishing",
"publisher": "Norton",
"year": 2026,
"url": "https://uk.norton.com/blog/malware/what-spear-phishing?srsltid=AfmBOoq0G2h2mksvgR3T87i1KooansszXuXpKuXT8mRbTTsV2Qr35IIG",
"language": "EN",
"kept": true,
"definitions": [
{
"topicKey": "spearPhishing",
"quote": "Spear phishing is an ultra-targeted phishing method whereby cybercriminals, or spear phishers, pose as a trusted source to convince victims to divulge confidential data, personal information, or other sensitive details."
},
{
"topicKey": "phishing",
"quote": "Spear phishing is different from phishing in that it is a cyberattack toward a specific individual or organization, whereas phishing is a more generic, automated cyberattack that is attempted in one sweep of a large group."
},
{
"topicKey": "whaling",
"quote": "Not to be confused with whaling, which is a phishing attempt targeting a C-suite executive, CEO fraud scams can be considered a type of spear phishing in that cybercriminals pose as a C-suite executive to get an employee to fulfill an urgent request or divulge important data."
}
],
"notes": ""
} ,
{
id: "SRC-022",
title: "What is phishing?",
publisher: "Microsoft",
year: 2026,
url: "https://www.microsoft.com/en-us/security/business/security-101/what-is-phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"Phishing attacks aim to steal or damage sensitive data by deceiving people into revealing personal information like passwords and credit card numbers."
},

{
topicKey: "emailPhishing",
quote:
"The most common form of phishing, this type of attack uses tactics like phony hyperlinks to lure email recipients into sharing their personal information."
},
{
topicKey: "malwarePhishing",
quote:
"Another prevalent phishing approach, this type of attack involves planting malware disguised as a trustworthy attachment such as a resume or bank statement in an email."
},
{
topicKey: "spearPhishing",
quote:
"Where most phishing attacks cast a wide net, spear phishing targets specific individuals by exploiting information gathered through research into their jobs and social lives."
},
{
topicKey: "whaling",
quote:
"When bad actors target a big fish like a business executive or celebrity, it is called whaling."
},
{
topicKey: "smishing",
quote:
"A combination of the words SMS and phishing, smishing involves sending text messages disguised as trustworthy communications from businesses like Amazon or FedEx."
},
{
topicKey: "vishing",
quote:
"In vishing campaigns, attackers in fraudulent call centers attempt to trick people into providing sensitive information over the phone."
}
],
notes: ""
}, 
{
id: "SRC-023",
title: "What is spear phishing? Definition and risks",
publisher: "Kaspersky",
year: 2026,
url: "https://www.kaspersky.com/resource-center/definitions/spear-phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"In the simplest terms, these are highly personalized cyberattacks that target specific individuals or companies."
},
{
topicKey: "phishing",
quote:
"While phishing is a general term for cyberattacks carried out by email, SMS, or phone calls, some may wonder what targeted phishing attacks are called."
},
{
topicKey: "whaling",
quote:
"Whaling specifically targets high-profile individuals such as C-suite executives, board members, celebrities, and politicians."
},
{
topicKey: "businessEmailCompromise",
quote:
"The final type of phishing attack, BECs, impersonate company employees to perpetrate financial fraud on organizations."
}
],
notes: ""
},
{
id: "SRC-024",
title: "Understanding Spear Phishing: Definition and Overview",
publisher: "Eunetic",
year: 2026,
url: "https://www.eunetic.com/en/kb/cyber-threats-and-attack-vectors/spear-phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"Spear phishing is a targeted form of phishing attack where the attacker customizes their approach to specifically deceive a particular individual or organization."
},
{
topicKey: "phishing",
quote:
"Unlike broad phishing attempts that are sent to large groups, spear phishing involves carefully crafted messages designed to appear as legitimate communications, often mimicking the style and tone of emails from trusted sources."
},
{
topicKey: "emailSpoofing",
quote:
"Email Spoofing is creating email headers that appear to be from a legitimate source."
},
{
topicKey: "websiteCloning",
quote:
"Website Cloning is creating a fake website that looks identical to a real one to capture sensitive information."
},
{
topicKey: "socialEngineering",
quote:
"Social Engineering is manipulating the target into performing actions or divulging confidential information."
}
],
notes: ""
},
{
id: "SRC-025",
title: "Spear Phishing",
publisher: "Fourthline",
year: 2025,
url: "https://www.fourthline.com/glossary/spear-phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"Spear phishing is a cyberattack in which criminals target specific people with personalised, fake emails or messages."
},
{
topicKey: "whaling",
quote:
"Whaling is a subset of spear phishing that specifically targets high-level executives."
},
{
topicKey: "businessEmailCompromise",
quote:
"Business Email Compromise is a type of spear phishing where attackers impersonate executives to request fraudulent wire transfers or sensitive information."
}
],
notes: ""
}, 
{
id: "SRC-026",
title: "Phishing",
publisher: "Silobreaker",
year: 2026,
url: "https://www.silobreaker.com/glossary/phishing-2/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"Phishing is a type of cyberattack in which attackers use deceptive emails, messages or websites to trick people into disclosing sensitive information, such as passwords, credit card numbers or personal details."
},
{
topicKey: "spearPhishing",
quote:
"Spear phishing is a targeted type of phishing attack in which attackers tailor their fraudulent messages for a particular person or organization."
},
{
topicKey: "emailPhishing",
quote:
"Email phishing involves attackers sending emails that appear to be from a trusted source, such as a bank or government agency, and requesting sensitive information."
},
{
topicKey: "smishing",
quote:
"Smishing involves phishers sending fraudulent text messages, often mimicking alerts from banks or other known organizations, asking for sensitive information or containing malicious links."
},
{
topicKey: "vishing",
quote:
"Vishing involves attackers using voice calls to mimic real people or organizations and trick people into giving away sensitive information."
},
{
topicKey: "clonePhishing",
quote:
"Clone phishing occurs when attackers create copies of real emails, making small changes to include malicious links or files, and send them to the same people the authentic emails were going to."
},
{
topicKey: "businessEmailCompromise",
quote:
"Business email compromise involves attackers compromising or mimicking high-ranking company leaders to trick employees into transferring funds or sharing sensitive information."
}
],
notes: ""
},
{
id: "SRC-028",
title: "Spear Phishing",
publisher: "imper.ai",
year: 2025,
url: "https://imper.ai/glossary/spear-phishing/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"Spear phishing refers to a highly targeted form of deceptive communication designed to extract sensitive information, personal credentials, or access privileges from specific individuals or organizations."
}
],
notes: ""
}, 
{
id: "SRC-029",
title: "What Is Phishing?",
publisher: "Fortinet",
year: 2026,
url: "https://www.fortinet.com/resources/cyberglossary/phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"Phishing is a type of cybersecurity threat that targets users directly through email, text, or direct messages."
},
{
topicKey: "spearPhishing",
quote:
"Where general email attacks use spam-like tactics to blast thousands at a time, spear phishing attacks target specific individuals within an organization."
},
{
topicKey: "whaling",
quote:
"Whaling is a variant of spear phishing that targets CEOs and other executives."
},
{
topicKey: "businessEmailCompromise",
quote:
"Business Email Compromise (BEC) attacks are designed to impersonate senior executives and trick employees, customers, or vendors into wiring payments for goods or services to alternate bank accounts."
},
{
topicKey: "clonePhishing",
quote:
"In this type of attack, the scammer creates an almost-identical replica of an authentic email, such as an alert one might receive from one's bank, in order to trick a victim into sharing valuable information."
},
{
topicKey: "vishing",
quote:
"Also known as voice phishing, in vishing, the scammer fraudulently displays the real telephone number of a well-known, trusted organization on the victim’s caller ID in order to entice the recipient to answer the call."
},
{
topicKey: "anglerPhishing",
quote:
"In this type of phishing, the attackers reach out by direct messaging on social media channels rather than making phone calls."
}
],
notes: ""
}, 
{
id: "SRC-030",
title: "What is a Spear Phishing Attack & How to Prevent One?",
publisher: "Wallarm",
year: 2025,
url: "https://www.wallarm.com/what/what-is-a-spear-phishing-attack-how-to-prevent-one",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote: "In a cyber security context, spear-phishing is all about using social engineering methods to lure an individual or a group of people and force them to share sensitive data."
},
{
topicKey: "whaling",
quote: "Whaling is a more accurate or narrow variant of spear phishing."
}
],
notes: ""
}, 
{
id: "SRC-031",
title: "What is spear phishing and how does it work?",
publisher: "IONOS",
year: 2026,
url: "https://www.ionos.com/digitalguide/e-mail/e-mail-security/spear-phishing/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote: "Spear phishing is a highly targeted type of phishing in which attackers craft personalized emails or messages aimed at specific individuals or organizations."
}
],
notes: ""
},
 {
id: "SRC-032",
title: "Spear phishing",
publisher: "Persona",
year: 2026,
url: "https://withpersona.com/identity-glossary/spear-phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote: "Spear phishing is an email-spoofing attack that targets a specific organization or individual by posing as someone they know and trust to gain access to confidential information."
}
],
notes: ""
}, 
{
id: "SRC-033",
title: "Phishing",
publisher: "cmlabs",
year: 2023,
url: "https://cmlabs.co/en-de/seo-terms/phishing-is",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"Phishing is a form of cyberattack that aims to steal personal and sensitive information from users, such as passwords, credit card numbers, and financial data."
},
{
topicKey: "scamPhishing",
quote:
"Phishing scams are cyberattacks that aim to trick users into providing their personal information."
},
{
topicKey: "blindPhishing",
quote:
"Blind phishing is one of the most frequent phishing attacks."
},
{
topicKey: "spearPhishing",
quote:
"Compared to the others, this type of phishing is more sophisticated and targets specific targets."
},
{
topicKey: "clonePhishing",
quote:
"This cyberattack is carried out by making a fake copy of an existing email or website."
}
],
notes: ""
}, 
{
id: "SRC-034",
title: "What is Spear Phishing?",
publisher: "ThreatDown",
year: 2026,
url: "https://www.threatdown.com/glossary/what-is-spear-phishing/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"Spear phishing is a social engineering attack in which cybercriminals tailor deceptive emails, messages, or calls to a specific individual, organization, or industry."
}
],
notes: ""
}, 
{
id: "SRC-035",
title: "What is Spear Phishing? Definition, Examples, Prevention Strategies",
publisher: "Heimdal Security",
year: 2024,
url: "https://heimdalsecurity.com/blog/what-is-spear-phishing/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"Spear phishing can be defined as an email spoofing attack that targets very specific and very ‘employed’ individuals."
}
],
notes: ""
}, 
{
id: "SRC-037",
title: "Spear Phishing Attacks: Definition + Types",
publisher: "Q4 GEMS",
year: 2024,
url: "https://www.q4gems.com/spear-phishing-attacks/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"Spear phishing attacks are a subset of phishing tactics that involve highly personalized and targeted attempts to deceive individuals or organizations into revealing sensitive information, such as login credentials, financial data, or intellectual property."
},
{
topicKey: "emailSpoofing",
quote:
"Attackers spoof email addresses to make messages appear as though they are coming from a known and trusted source."
},
{
topicKey: "whaling",
quote:
"Whaling attacks target high-profile individuals within an organization, such as executives or senior managers."
},
{
topicKey: "businessEmailCompromise",
quote:
"BEC attacks involve compromising legitimate email accounts within an organization to impersonate employees and request fraudulent transactions or access to confidential data."
},
{
topicKey: "credentialHarvesting",
quote:
"Spear phishers may create fake login pages or forms that mimic legitimate websites, tricking victims into entering their credentials."
},
{
topicKey: "malwareDelivery",
quote:
"Spear phishing emails may contain malicious attachments or links leading to infected websites."
},
{
topicKey: "vishing",
quote:
"This tactic, known as vishing, involves impersonating trusted entities or authorities over the phone to extract sensitive information or manipulate victims into taking specific actions."
},
{
topicKey: "socialEngineering",
quote:
"These attacks aim to manipulate victims into revealing sensitive information or performing actions that benefit the attacker, relying on psychological manipulation and deception."
}
],
notes: ""
}, 
{
id: "SRC-038",
title: "Spear Phishing vs Phishing (No-Nonsense Guide)",
publisher: "Hoxhunt",
year: 2024,
url: "https://hoxhunt.com/blog/spear-phishing-vs-phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"Phishing is a type of cyber attack in which attackers attempt to deceive individuals into providing sensitive information (usually things like usernames, passwords, credit card numbers etc)."
},
{
topicKey: "spearPhishing",
quote:
"Spear phishing is a type of targeted phishing attack, aimed at a specific individual or organization."
},
{
topicKey: "emailPhishing",
quote:
"Email phishing is the most prevalent form of phishing attack."
},
{
topicKey: "smishing",
quote:
"In smishing attacks, cybercriminals send fraudulent messages via SMS or text messages."
},
{
topicKey: "vishing",
quote:
"Vishing attacks occur over the phone, where attackers impersonate legitimate organizations or authorities."
},
{
topicKey: "clonePhishing",
quote:
"Clone phishing involves duplicating a legitimate email previously sent to the victim."
},
{
topicKey: "pharming",
quote:
"Pharming redirects users from legitimate websites to fraudulent ones without their knowledge."
},
{
topicKey: "wateringHole",
quote:
"In watering hole attacks, attackers compromise websites that are frequently visited by their target audience."
},
{
topicKey: "whaling",
quote:
"Spear phishing attempts that target high-profile individuals within an organization are called 'whaling' attacks."
}
],
notes: ""
}, 
{
id: "SRC-039",
title: "Spear phishing",
publisher: "NordVPN",
year: 2026,
url: "https://nordvpn.com/cybersecurity/glossary/spear-phishing/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"Spear phishing is a form of phishing attack directed at specific companies or individuals. Cybercriminals disguise themselves as legitimate entities to extract sensitive data from their victims in the form of a phishing email or a malicious link."
}
],
notes: ""
}, 
{
id: "SRC-040",
title: "What is a Spear Phishing Attack?",
publisher: "Equilibrium Security",
year: 2026,
url: "https://equilibrium-security.co.uk/our-services/phishing-simulation-service/what-is-a-spear-phishing-attack/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"A phishing attack is a form of cyber-attack where malicious actors use deceptive emails, messages, or websites to trick individuals into sharing sensitive information such as their login credentials, financial information, or other personal data."
},
{
topicKey: "spearPhishing",
quote:
"Spear phishing is a highly targeted form of phishing attack that focuses on specific individuals or organisations."
}
],
notes: ""
}, 
{
id: "SRC-041",
title: "Phishing",
publisher: "Rubix Studios",
year: 2026,
url: "https://rubixstudios.com.au/glossary/phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"Phishing is a type of cyberattack where attackers impersonate legitimate organizations or individuals to trick users into revealing sensitive information such as passwords, credit card details, or personal data."
},
{
topicKey: "spearPhishing",
quote:
"More advanced forms include spear phishing, which targets specific individuals or organizations."
},
{
topicKey: "whaling",
quote:
"Whaling, which focuses on executives or high-value targets."
},
{
topicKey: "clonePhishing",
quote:
"Clone phishing replicates legitimate emails while inserting malicious links or attachments."
}
],
notes: ""
}, 

{
id: "SRC-042",
title: "What Is Spear Phishing? Definition & Defense Tips for CISOs",
publisher: "Arsen",
year: 2025,
url: "https://arsen.co/en/blog/spear-phishing-definition",
language: "EN",
kept: true,
definitions: [
{
topicKey: "spearPhishing",
quote:
"Spear phishing is a personalized phishing attack where attackers use social engineering techniques to deceive a specific target."
}
],
notes: ""
},
 {
id: "SRC-043",
title: "Phishing",
publisher: "Webopedia",
year: 2024,
url: "https://www.webopedia.com/definitions/phishing-meaning/",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"Phishing is a type of cybercrime in which a hacker poses as a trustworthy entity to obtain sensitive information."
},
{
topicKey: "emailPhishing",
quote:
"Imagine you receive an email that looks like it’s from your bank."
},
{
topicKey: "smishing",
quote:
"Short for SMS phishing, smishing utilizes Short Message Service (SMS) systems to send bogus text messages."
},
{
topicKey: "spearPhishing",
quote:
"Spear phishing is an email attack that targets a specific group or type of individuals, such as a company’s system administrators."
},
{
topicKey: "clonePhishing",
quote:
"Clone phishing is an email based attack in which the bad actor resends a legitimate email and attachments, pretending to be the original sender."
},
{
topicKey: "whaling",
quote:
"Whaling targets high-level employees in order to steal sensitive information from a company."
},
{
topicKey: "vishing",
quote:
"Vishing is the telephone equivalent of phishing, short for voice phishing."
},
{
topicKey: "searchEnginePhishing",
quote:
"Search engine phishing is unique in that the attacker doesn’t bother in sending targeted emails."
},
{
topicKey: "wifiPhishing",
quote:
"You’re at a coffee shop and want to login to their public WiFi hotspot."
}
],
notes: ""
}, 
{
id: "SRC-044",
title: "What is phishing? Understanding enterprise phishing threats",
publisher: "TechTarget (Informa TechTarget)",
year: 2025,
url: "https://www.techtarget.com/searchsecurity/definition/phishing",
language: "EN",
kept: true,
definitions: [
{
topicKey: "phishing",
quote:
"Phishing is a fraudulent practice in which an attacker masquerades as a reputable entity or person to trick users into revealing sensitive information."
},
{
topicKey: "spearPhishing",
quote:
"Spear phishing attacks are directed at specific individuals or companies."
},
{
topicKey: "whaling",
quote:
"This is a type of spear phishing attack that targets senior executives within an organization with the objective of stealing large sums of money or sensitive data."
},
{
topicKey: "pharming",
quote:
"This is a type of phishing attack that uses domain name system cache poisoning to redirect users from a legitimate website to a fraudulent one."
},
{
topicKey: "clonePhishing",
quote:
"Attackers use previously delivered but legitimate emails that contain either a link or an attachment."
},
{
topicKey: "evilTwin",
quote:
"These phishing attacks occur when hackers try to trick users into connecting to a fake Wi-Fi network that looks like a legitimate access point."
},
{
topicKey: "vishing",
quote:
"This is a form of phishing that occurs over voice-based media, including voice over IP, which is also called vishing, or plain old telephone service."
},
{
topicKey: "smishing",
quote:
"Also called smishing, this is a mobile device-oriented phishing attack that uses text messaging to convince victims to disclose account credentials or install malware."
},
{
topicKey: "calendarPhishing",
quote:
"Attackers attempt to fool victims by sending false calendar invites that can be added to calendars automatically."
},
{
topicKey: "pageHijack",
quote:
"Page hijacking occurs when the victim is redirected to a compromised website that's the duplicate of the page they intended to visit."
},
{
topicKey: "anglerPhishing",
quote:
"This attack is carried out by cybercriminals creating fake customer service accounts on social media platforms."
},
{
topicKey: "waterHoling",
quote:
"This is a type of phishing where attackers identify websites frequently visited by a specific group and infect them with malware."
}
],
notes: ""
}, 
{
  id: "SRC-045",
  title: "What is Phishing? - Definition, Types, and Examples",
  publisher: "Sangfor Technologies",
  year: 2025, // last modified date: 14 Mar 2025
  url: "https://www.sangfor.com/blog/cybersecurity/what-is-phishing-attack",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "A phishing attack is a type of cyber-attack where attackers craft fraudulent yet convincing messages to manipulate recipients into performing harmful actions."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a more targeted form of phishing attack aimed at specific individuals, organizations, or industries."
    },
    {
      topicKey: "internalSpearPhishing",
      quote:
        "An internal spear phishing attack occurs when a legitimate user’s email account is compromised and used to send spear phishing messages to other employees or external contacts."
    },
    {
      topicKey: "whaling",
      quote:
        "Whale phishing, also known as CEO fraud, targets high-ranking individuals like executives or CEOs."
    },
    {
      topicKey: "socialMediaPhishing",
      quote:
        "As the name suggests, it occurs on platforms like Facebook, X (formerly Twitter), and LinkedIn."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing, or SMS phishing, involves cybercriminals sending deceptive text messages designed to trick victims into clicking malicious links."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing, also called voice phishing, involves using phone calls to impersonate trusted sources, such as banks or government agencies."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler phishing is a targeted form of social media phishing where attackers impersonate customer service representatives on platforms like X or Facebook."
    }
  ],
  otherTypesMentioned: [
    "phishing campaign (mass phishing)",
    "phishing links (malicious websites)",
    "phishing attachments (malicious files)"
  ],
}, 
{
  id: "SRC-046",
  title: "What is Spear Phishing",
  publisher: "Bitdefender (Business InfoZone)",
  year: 2026,
  url: "https://www.bitdefender.com/en-us/business/infozone/what-is-spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a type of phishing in which attackers research a specific individual or organization and then use this information to craft personalized emails or social media messages that appear to come from trusted sources."
    },
    {
      topicKey: "phishing",
      quote:
        "Phishing casts a wide net, going for quantity over quality, as phishing messages are not personalized and often contain low-effort content."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is considered a subtype of spear phishing that targets high-profile individuals within an organization, such as C-level executives."
    },
    {
      topicKey: "BEC",
      quote:
        "Within spear phishing, cybersecurity experts also use the term Business Email Compromise (BEC) for attacks that specifically target companies through deceptive email practices."
    },
    {
      topicKey: "EAC",
      quote:
        "Another form of BEC is Email Account Compromise (EAC), which involves hijacking an employee's email to request payments or confidential data from colleagues or vendors, exploiting internal trust for financial gain."
    }
  ],
  otherTypesMentioned: [
    "spoofing (mentioned in FAQ as a comparison topic)",
    "APT / Advanced Persistent Threat (as a potential outcome of successful spear phishing)"
  ],
  notes:
    ""
}, 
{
  id: "SRC-047",
  title: "What is Phishing? Definition, types of attacks & more",
  publisher: "Paragon IT",
  year: 2025,
  url: "https://www.paragon-it.com/blogs/what-is-phishing-definition-types-of-attacks-amp-more",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "At its core, phishing is about deception: attackers impersonate trusted people or organisations to trick you into sharing passwords, approving payments, or clicking malicious links."
    },
    {
      topicKey: "deepfakePhishing",
      quote:
        "Attackers use AI-generated audio or video to impersonate executives and request sensitive actions like payments or file access."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "AI-driven attacks that craft highly personalised messages using scraped data."
    },
    {
      topicKey: "extortionPhishing",
      quote:
        "Scammers claim to have compromising information or footage and demand a ransom to prevent its release."
    },
    {
      topicKey: "BEC",
      quote:
        "Attackers impersonate a trusted internal party (like the CEO or CFO) to initiate fraudulent transactions or steal sensitive data."
    },
    {
      topicKey: "smishingVishing",
      quote:
        "Phishing via SMS (smishing) or voice calls (vishing)."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "A legitimate email is copied, and the content is modified with malicious links or attachments — then resent to the original recipient list."
    }
  ],
  notes: ""
}, 

{
  id: "SRC-048",
  title: "What is Spear Phishing?",
  publisher: "JD Young Technologies",
  year: 2025,
  url: "https://www.jdyoung.com/resource-center/posts/view/182/what-is-spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "As the name implies, spear phishing is a style of cyber-attack where the attacker targets a specific individual victim instead of whoever happens to take the bait."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-049",
  title: "What is spear phishing?",
  publisher: "ProSec Networks",
  year: "",
  url: "https://www.prosec-networks.com/en/blog/spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Different than the classic one Phishing, which is designed to attack the broadest possible group of victims, spear phishing is an attack on a specific organization or person."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-050",
  title: "What is Spear Phishing? A Clear Guide to Targeted Cyberattacks",
  publisher: "ITarian",
  year: 2025,
  url: "https://www.itarian.com/blog/what-is-spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a targeted email attack that impersonates a trusted contact to trick victims into revealing sensitive information or taking malicious action."
    }
  ],
  notes: ""
},
{
  id: "SRC-052",
  title: "What is spear phishing?",
  publisher: "Malwarebytes",
  year: "",
  url: "https://www.malwarebytes.com/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a type of a phishing attack that targets specific people or organizations in order to get access to the sensitive information or install malware."
    },
    {
      topicKey: "phishing",
      quote:
        "Phishing casts a wider net, sending out bulk emails to large numbers of recipients without customization."
    },
    {
      topicKey: "whaling",
      quote:
        "Whale phishing targets high-profile individuals within organizations, such as executives or decision-makers."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-053",
  title: "What is Spear Phishing?",
  publisher: "Topsec",
  year: "2023",
  url: "https://www.topsec.com/what-is-spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a type of phishing attack that targets highly specific individuals or roles within an organisation to acquire sensitive information."
    },
    {
      topicKey: "whaling",
      quote:
        "It is a highly targeted attack that targets high-profile or high-ranking individuals such as C-suite executives or board members."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "Threat actors impersonate or hack into the email account of a senior executive, typically a CEO, and instruct lower-level employees to wire money into fraudulent accounts by creating a sense of urgency."
    },
    {
      topicKey: "emailAccountCompromise",
      quote:
        "Attackers gain access to lower-level employees to send fraudulent emails and trick other employees into sharing confidential information."
    },
    {
      topicKey: "phishing",
      quote:
        "In standard phishing, attackers use the “Spray and Pray” technique, sending phishing emails to a large number of random individuals, hoping someone will click on a link or share sensitive information."
    }
  ],
  notes: "Page explicitly distinguishes spear phishing, whaling, BEC (CEO fraud), EAC, and standard phishing. Barrel phishing mentioned but conceptually closer to broad phishing."
}, 
{
  id: "SRC-054",
  title: "What Is Spear Phishing?",
  publisher: "Built In",
  year: "2025",
  url: "https://builtin.com/cybersecurity/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a type of phishing attack in which attackers impersonate trusted contacts — often through personalized emails — to trick individuals into revealing sensitive information like login credentials, financial data or confidential documents."
    },
    {
      topicKey: "phishing",
      quote:
        "Phishing shares similarities with spear phishing in its use of deceptive emails, but it targets a broad audience rather than specific individual."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing and vishing use SMS or voice calls to impersonate trusted sources, often linking to spoofed websites or mimicking support lines to extract login credentials or payment details."
    },
    {
      topicKey: "vishing",
      quote:
        "Smishing and vishing use SMS or voice calls to impersonate trusted sources, often linking to spoofed websites or mimicking support lines to extract login credentials or payment details."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling, the most targeted type of phishing, targets high-profile individuals like C-level executives, executive committee members or government officials."
    }
  ],
  notes: ""
},
{
  id: "SRC-055",
  title: "Spear Phishing: A Deep Dive into Its Legal Definition and Impact",
  publisher: "US Legal Forms",
  year: "2025",
  url: "https://legal-resources.uslegalforms.com/s/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a targeted form of phishing that aims to deceive a specific individual or department within an organization. Unlike general phishing attacks, which are sent to many people, spear phishing is personalized and often appears to come from a trusted source within the organization, such as a colleague or a supervisor."
    },
    {
      topicKey: "phishing",
      quote:
        "Phishing targets a large audience, while spear phishing is targeted at specific individuals."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a type of phishing attack aimed at high-profile targets, such as executives."
    }
  ],
  notes: "Source focuses on legal definition, legal context, and compliance implications of spear phishing."
}, 
{
  id: "SRC-056",
  title: "What is Spear Phishing? Definition, Risks, Examples, Types, Prevention",
  publisher: "Mail Inspector Platform",
  year: "2024",
  url: "https://m-i-platform.com/what-is-spear-phishing-definition-risks-examples-types-prevention/?ckattempt=2",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a type of phishing attack that targets a specific individual, group, or organization. These personalized scams trick victims into divulging sensitive data, downloading malware, or sending money to an attacker."
    },
    {
      topicKey: "zeroDayMalware",
      quote:
        "The vulnerability of zero-day is exploited to insert an attachment or a clickable link containing unknown malware that the security system cannot detect, and send an email that induces users to click when they should not."
    },
    {
      topicKey: "malwareAttachment",
      quote:
        "A malicious attachment is one type of threat in which attackers conceal malware inside commonly emailed files."
    },
    {
      topicKey: "malwareURL",
      quote:
        "A malicious URL attack is made by inserting a clickable link containing malware in emails for the purpose of inducing users to visit malicious websites."
    },
    {
      topicKey: "forgedHeader",
      quote:
        "One type of social engineering attack involves scammers dodging detection by forging account information in a header."
    },
    {
      topicKey: "lookAlikeDomain",
      quote:
        "A look-alike domain is a type of attack where attackers send a malicious email from an email address that on cursory visual examination is remarkably similar to that of a normal, familiar sender."
    },
    {
      topicKey: "accountTakeover",
      quote:
        "ATO is a social engineering attack that uses the account of a real user."
    },
    {
      topicKey: "urlPhishing",
      quote:
        "URL phishing is the theft of the identifier (ID) and password of a victim, in which the attacker creates a phishing page or website to induce the victim to enter account information through the use of a malicious URL or file embedded in an email."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-057",
  title: "What Is Spear Phishing?",
  publisher: "Proofpoint",
  year: "2026",
  url: "https://www.proofpoint.com/au/threat-reference/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a highly targeted form of phishing designed to deceive individuals or organisations into revealing sensitive information."
    },
    {
      topicKey: "whaling",
      quote:
        "A spear-phishing attack targets specific people, but “whaling”, also known as CEO fraud, refers to an attacker targeting one or several C-level executives."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-058",
  title: "What is Spear Phishing?",
  publisher: "Tencent EdgeOne",
  year: "2026",
  url: "https://edgeone.ai/learning/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear Phishing is a type of cyber attack that is a more targeted form of phishing. In this attack, the attacker delves into the target and then sends an email or message that appears to be from a trusted, relevant person or organization to trick the target into clicking on a malicious link, downloading a malicious attachment, or providing sensitive information."
    },
    {
      topicKey: "phishing",
      quote:
        "A phishing attack is a form of online fraud in which attackers deceive users by posing as a trusted entity, such as a well-known website, bank, social media platform, etc."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing, also known as SMS phishing, is a type of phishing attack that occurs through text messages or SMS."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-059",
  title: "What is spear phishing? Definition, Examples and Ways to Prevent It",
  publisher: "Binary IT",
  year: "2024",
  url: "https://binaryit.com.au/what-is-spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a highly targeted type of phishing attack where cybercriminals use personalised information to trick specific individuals or organisations into revealing sensitive data, transferring funds, or granting access to secure systems, unlike general phishing attempts that may use generic messages sent to thousands of recipients, spear phishing attacks are meticulously crafted to appear legitimate and trustworthy to their intended targets."
    },
    {
      topicKey: "phishing",
      quote:
        "Phishing is when someone pretends to be a trustworthy person or company to trick you into giving away sensitive info like your passwords or credit card details."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a subset of spear phishing that targets explicitly high-profile individuals such as C-level executives, politicians, or celebrities."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-060",
  title: "Definition of spear-phishing",
  publisher: "Reverso English Dictionary",
  year: "2025",
  url: "https://dictionary.reverso.net/english-definition/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "cybersecurity targeted email scam to steal personal information"
    }
  ],
  notes: ""
}, 
{
  id: "SRC-061",
  title: "What Is Spear Phishing? | Definition & Prevention",
  publisher: "Rocket IT",
  year: 2023,
  url: "https://rocketit.com/what-is-spear-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "At its core, spear phishing is a lot like your general phishing attack. It’s a confidence scam used to steal information or money from unsuspecting businesses."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-062",
  title: "What is Spearphishing: Definition, Techniques, Real-world Example",
  publisher: "ANY.RUN",
  year: 2024,
  url: "https://any.run/cybersecurity-blog/spearphishing-explained/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "It is a targeted form of phishing attack where the adversary focuses on a specific individual or organization."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-063",
  title: "Spear Phishing",
  publisher: "CoinMarketCap Academy",
  year: 2026,
  url: "https://coinmarketcap.com/academy/glossary/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a targeted attack that uses information from social media, work emails, and other sources to launch a one-on-one phishing attack against an individual."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-064",
  title: "Spear Phishing Examples & Tactics: Byte-Sized Bait",
  publisher: "TechBrain",
  year: 2025,
  url: "https://www.techbrain.com.au/spear-phishing-examples-tactics/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing definition refers to a targeted form of phishing that involves sending malicious communications to specific individuals or organisations."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-065",
  title: "What is a Phishing Attack?",
  publisher: "Cyble",
  year: 2026,
  url: "https://cyble.com/knowledge-hub/what-is-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "A phishing attack is a malicious attempt to deceive individuals or organizations into revealing sensitive information by posing as trustworthy entities, such as usernames, passwords, credit card numbers, or other confidential data."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Attackers send fraudulent emails, often posing as trusted organizations, to trick recipients into clicking on malicious links or downloading infected attachments."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "This highly targeted form of phishing focuses on specific individuals or organizations, using personalized information to craft convincing phishing emails."
    },
    {
      topicKey: "whaling",
      quote:
        "Similar to spear phishing, whaling targets high-profile individuals, such as CEOs and top executives, with the goal of gaining access to sensitive corporate data."
    },
    {
      topicKey: "vishing",
      quote:
        "Attackers use phone calls to impersonate trusted entities and obtain sensitive information or financial details from victims."
    },
    {
      topicKey: "smishing",
      quote:
        "Phishers send deceptive text messages that contain links or requests for personal information, often mimicking legitimate notifications."
    },
    {
      topicKey: "pharming",
      quote:
        "Cybercriminals manipulate DNS or use malicious software to redirect victims to counterfeit websites, even when they enter the correct website address."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Phishers create nearly identical copies of legitimate emails that victims have previously received but with malicious links or attachments."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "BEC attacks target employees within an organization, typically using compromised executive email accounts to request wire transfers or sensitive data."
    },
    {
      topicKey: "attachmentPhishing",
      quote:
        "Attackers send emails with infected attachments, exploiting vulnerabilities in software or systems when victims open these attachments."
    },
    {
      topicKey: "credentialHarvesting",
      quote:
        "Phishing attempts aimed at stealing usernames and passwords, often by directing victims to fake login pages that closely resemble legitimate ones."
    }
  ]
}, 
{
  id: "SRC-066",
  title: "What is Spear Phishing in Cyber Security?",
  publisher: "Darktrace",
  year: 2025,
  url: "https://www.darktrace.com/cyber-ai-glossary/spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a type of phishing cyber-attack that targets a specific individual or organization rather than a broad audience. This usually involves an attacker conducting a significant amount of research on an organization or individual to make their attack seem more credible by contextualizing their message with relevant personal or corporate information. These attacks usually come in the form of email messages but ‘spear-phishing’ is a more specific way to describe a socially engineered phishing attempt that is targeted."
    },
    {
      topicKey: "phishing",
      quote:
        "Email phishing involves the process of sending a mass number of fraudulent emails, while posing as legitimate sender, to convince people to reveal sensitive information such as passwords, social security numbers, bank account information, and more."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "BEC is a type of email cyber-attack where a threat actor attempts to trick someone into sending them money or valuable information by impersonating a valuable or high-ranking individual within a business. In this scenario the goal is to compromise an account so that the attacker can continue to conduct malicious activity through legitimate account credentials."
    },
    {
      topicKey: "ceoFraud",
      quote:
        "CEO fraud is a form of impersonation where a threat actor will falsify their identity, acting as a CEO at an organization and attempt to communicate with other employees, such as members of the finance department, to trick them by using a falsified version of a high-ranking official’s credentials. Often urgently requesting the transfer of money."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a heavily targeted phishing attack in which an attacker attempts to phish a high ranking official, often chief executives. These social engineering cyber-attacks contain information that is highly personalized to the intended target to encourage them to click a link that will download malware, transfer funds to the attacker, or share details that can facilitate further attacks."
    }
  ]
}, 
{
  id: "SRC-067",
  title: "What is Spear Phishing?",
  publisher: "BitDegree",
  year: 2024,
  url: "https://www.bitdegree.org/crypto/learn/crypto-terms/what-is-spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear Phishing - a targeted attack that aims to force the victim to reveal their personal data."
    }
  ],
  notes: ""
},
{
  id: "SRC-068",
  title: "Understanding the Difference Between Phishing and Spear Phishing",
  publisher: "Keepnet Labs",
  year: 2025,
  url: "https://keepnetlabs.com/blog/what-is-phishing-vs-spear-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing emails, on the other hand, is far more dangerous. It’s carefully crafted and highly targeted—making it much harder to detect."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-069",
  title: "What is Spam and a Phishing Scam - Definition",
  publisher: "Kaspersky",
  year: 2026,
  url: "https://www.kaspersky.com/resource-center/threats/spam-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing emails use numerous techniques—including social engineering—to lure targets into disclosing sensitive information or personal data."
    },
    {
      topicKey: "deceptivePhishing",
      quote:
        "This is the most common type of cyberattack and involves the attacker impersonating a legitimate organization in the email."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "These attacks target specific individuals or organizations and are more likely to use social engineering techniques to create a sense of legitimacy."
    },
    {
      topicKey: "whaling",
      quote:
        "Another very targeted type of phishing attack, these target high-profile individuals, such as company CEOs."
    },
    {
      topicKey: "vishing",
      quote:
        "Instead of using email, these phishing attacks are executed through phone calls and usually involve the attacker pretending to represent a legitimate organization to steal personal details."
    },
    {
      topicKey: "smishing",
      quote:
        "While similar to vishing, these attacks are carried out by text message instead of voice call but still attempt to steal sensitive information."
    }
  ],
  notes: ""
},
{
  id: "SRC-070",
  title: "Password Cracking 101: Attacks & Defenses Explained",
  publisher: "BeyondTrust",
  year: 2024,
  url: "https://www.beyondtrust.com/blog/entry/password-cracking-101-attacks-defenses-explained",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "credentialStuffing",
      quote:
        "Credential stuffing is an automated hacking technique that utilizes stolen credentials."
    },
    {
      topicKey: "passwordSpraying",
      quote:
        "Password spraying is a credential-based attack that attempts to access many accounts by using a few common passwords."
    },
    {
      topicKey: "passTheHash",
      quote:
        "Pass-the-Hash (PtH) is a technique that allows an attacker to authenticate to a resource by using the underlying NT LAN Manager (NTLM) hash of a user’s password, in lieu of using the account’s actual human-readable password."
    },
    {
      topicKey: "passTheTicket",
      quote:
        "In a Pass-the-Ticket attack, a threat actor steals a Kerberos ticket-granting ticket (TGT) to impersonate a user on a network."
    },
    {
      topicKey: "kerberoasting",
      quote:
        "In kerberoasting attacks, threat actors target service accounts associated with Service Principal Names (SPNs), which are used to uniquely identify each instance of a service running on a system."
    },
    {
      topicKey: "rainbowTableAttack",
      quote:
        "Rainbow Tables hold the passwords and hashes for multiple ciphers."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-071",
  title: "Phishing attacks: Definition, examples, and mitigation",
  publisher: "Eftsure",
  year: 2025,
  url: "https://www.eftsure.com/blog/cyber-crime/phishing-attacks-definition-examples-mitigation/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a form of social engineering attack used to steal customer information, such as login credentials (usernames and passwords), credit card information, and email addresses."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing occurs when a cybercriminal targets a specific individual or organization that requires more in-depth knowledge about its victim."
    },
    {
      topicKey: "whaling",
      quote:
        "Similarly to spear phishing, whaling attacks are specifically targeted at top executives like CEOs, CFOs, or CTOs."
    },
    {
      topicKey: "smishing",
      quote:
        "Another variant of phishing is SMS phishing, also known as “smishing.”"
    },
    {
      topicKey: "vishing",
      quote:
        "Other than text messages, attackers have the ability to conduct phone call scams, which is called voice phishing or “vishing.”"
    }
  ],
  notes: ""
}, 
{
  id: "SRC-072",
  title: "Phishing: Definition, Types of Attacks, and Examples",
  publisher: "ArmourZero (WEME – When Experts Meet Experts)",
  year: 2022,
  url: "https://www.armourzero.com/blog/weme/phishing-definition-types-of-attacks-and-examples/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing, on the other hand, is the act of sending email that falsely claims to be from a legitimate organisation."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "This type of scheme involves using a fake company name (impersonation) but also key details about the target."
    },
    {
      topicKey: "emailTakeover",
      quote:
        "If a phishing scammer acquires the email credentials of high-profile leadership, it is likely they will target anyone they can be using that very email address."
    },
    {
      topicKey: "phonePhishing",
      quote:
        "Using Voice over Internet Protocol (VoIP) technology, scammers, again, impersonate companies."
    },
    {
      topicKey: "smsPhishing",
      quote:
        "Below is a genuine example of a SMS Phishing:"
    }
  ],
  notes: ""
}, 
{
  id: "SRC-073",
  title: "Understanding phishing: definition and tactics",
  publisher: "ESET",
  year: 2025,
  url: "https://www.eset.com/blog/en/what-is/understanding-phishing-definition-and-tactics/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a type of social engineering attack where the criminal behind it impersonates a person or organization in an attempt to gain something valuable from you, whether it be money or things like credential they can use to log into accounts to steal information or perform additional criminal actions."
    },
    {
      topicKey: "smishing",
      quote:
        "Sometimes security practitioners describe these by different names such as smishing for SMS and vishing for telephone calls, but they are all forms of phishing."
    },
    {
      topicKey: "vishing",
      quote:
        "Sometimes security practitioners describe these by different names such as smishing for SMS and vishing for telephone calls, but they are all forms of phishing."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "These types of attacks are colloquially known as spearphishing."
    },
    {
      topicKey: "whaling",
      quote:
        "If the individual being targeted by a spearphishing campaign has a high net worth, or has access to large amounts of funds, they may be referred to as a whale by the attackers, who call such attacks whaling."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "The most sophisticated spearphishing involves what is known as Business Email Compromise (BEC), a sophisticated phishing/social engineering campaign targeted at specific roles, such as company executives or employees in accounting or finance."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-074",
  title: "What is Phishing and How Does it Work?",
  publisher: "IDStrong",
  year: 2020,
  url: "https://www.idstrong.com/sentinel/what-is-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing attacks are defined as any fraud carried out via email, text, social media, or through an app."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Email phishing is a popular choice for cybercriminals."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Unlike standard email phishing, spear phishing attacks are tailored to individuals and can be very difficult to recognize."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling, as its name implies, targets big game."
    },
    {
      topicKey: "smishing",
      quote:
        "While traditional phishing is performed through email, \"smishing\" uses short message services (SMS)."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-075",
  title: "Phishing: Definition, Explanation, and Use Cases",
  publisher: "Vation Ventures",
  year: 2024,
  url: "https://www.vationventures.com/glossary/phishing-cybersecurity-explained",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a term that refers to a type of cyber attack where the attacker impersonates a trusted entity to trick victims into revealing sensitive information."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "The most common type of phishing attack is email phishing, where the attacker sends an email that appears to come from a trusted source, such as a bank or a popular website."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a more targeted form of phishing attack."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-076",
  title: "Phishing",
  publisher: "Malwarebytes",
  year: 2026,
  url: "https://www.malwarebytes.com/phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a form of cybercrime when criminals try to obtain sensitive information from you via email with fraudulent links, prompting you to fill out a form with your personally identifiable information."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a targeted form of phishing where attackers tailor messages to specific individuals or organizations, using collected data to make the deceit more convincing."
    },
    {
      topicKey: "whalePhishing",
      quote:
        "Whale phishing targets high-profile individuals, such as executives, celebrities, or C-level businesspeople."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Phishing emails involve deceptive emails appearing to come from reputable sources (e.g., banks, online retailers) urging recipients to click on links or download attachments."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing (SMS Phishing) sends fraudulent messages urging recipients to click on malicious links or share personal details."
    },
    {
      topicKey: "vishing",
      quote:
        "Attackers impersonate authority figures (e.g., bank officials, law enforcement) over the phone to scare individuals into sharing sensitive information or transferring funds."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-077",
  title: "What is Phishing in Cybersecurity – A Complete Explanation",
  publisher: "AMATAS",
  year: 2024,
  url: "https://amatas.com/blog/what-is-phishing-in-cybersecurity-complete-explanation/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a type of social engineering attack that exploits fraudulent communications – whether through emails, text messages, phone calls, or websites – to trick individuals into revealing sensitive information or downloading malicious software."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "The most common form of phishing where attackers send fraudulent emails, often pretending to be legitimate organizations, such as banks, e-commerce sites, or government agencies."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Unlike a broad-based phishing email, spear phishing is a more targeted attack."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a type of spear phishing aimed at the “big fish” in a company, typically high-ranking executives."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing involves phishing over the phone."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing is phishing conducted via SMS or text messages."
    },
    {
      topicKey: "ceoFraud",
      quote:
        "CEO fraud, also known as Business Email Compromise (BEC), is a type of spear phishing attack where attackers impersonate a company’s CEO or other senior executive."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming is a cyber attack that redirects users from a legitimate website to a phishing or malicious website, often without the user’s knowledge."
    },
    {
      topicKey: "socialMediaPhishing",
      quote:
        "Social media phishing involves attackers using platforms like Facebook, X, Instagram, or LinkedIn to deceive users."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "This is a type of email phishing where attackers create a nearly identical copy of a legitimate email that the victim has previously received."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-078",
  title: "What is Phishing?",
  publisher: "Beyond Encryption",
  year: 2025,
  url: "https://www.beyondencryption.com/blog/what-is-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a cyber attack designed to deceive victims into giving away sensitive information."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "General phishing emails are sent to millions of people, hoping someone will take the bait."
    },
    {
      topicKey: "smishing",
      quote:
        "Phishing attempts via SMS text messages are known as 'smishing'."
    },
    {
      topicKey: "vishing",
      quote:
        "Phishing attempts via voice calls or voicemails are often called 'vishing'."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing attacks are targeted at specific individuals who have access to valuable information."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a form of spear phishing that targets high-profile figures within an organisation, such as CEOs or CFOs."
    },
    {
      topicKey: "linkManipulationPhishing",
      quote:
        "Link Manipulation: Altering website links to look legitimate but redirecting to malicious sites."
    },
    {
      topicKey: "quishing",
      quote:
        "Quishing: Phishing using QR codes that lead to harmful websites or initiate unwanted actions on your device."
    },
    {
      topicKey: "waterHoling",
      quote:
        "Watering Hole Attacks: Infecting websites often visited by a target group, so they download dangerous software (malware) onto devices."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-079",
  title: "Phishing Attacks: Definition, Meaning, Types, and How to Stay Safe",
  publisher: "Korcomptenz",
  year: 2025,
  url: "https://www.korcomptenz.com/blog/phishing-attacks/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing attacks are sophisticated online crimes in which criminals pose as trustworthy individuals, such as your bank or a well-known service, and typically do so via phone calls, texts, or emails."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Email phishing is the traditional method in which criminals send phony emails purporting to be banks or businesses in an attempt to fool you into opening a malicious attachment or divulging personal information."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing uses tailored information to target certain individuals, frequently within an organization, and makes the scam seem more plausible."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a unique form of spear phishing that targets prominent individuals, such as CEOs or executives."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing makes use of voice calls or phone messages to deceive people into disclosing personal information."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing uses text messages to entice victims into sharing sensitive information."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler phishing involves attackers posing as customer support on social media by replying to users’ postings or grievances."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Clone phishing is a malicious method used when an attacker mimics a genuine email but adds malicious attachments or links."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming involves diverting users from legitimate websites to fraudulent ones, frequently through DNS or malware manipulation."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-080",
  title: "Phishing (Glossary)",
  publisher: "Trout Software",
  year: 2026,
  url: "https://www.trout.software/resources/glossary/phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a cyber attack that tricks individuals into revealing sensitive information, such as passwords, credit card numbers, or personal data, by disguising as a trustworthy entity in electronic communications."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Email Phishing: The most common type of phishing, where attackers send fake emails to trick victims into revealing sensitive information."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear Phishing: A targeted phishing attack that focuses on specific individuals or organizations."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling: A type of spear phishing that targets high-profile individuals, such as CEOs or CFOs, to trick them into revealing sensitive corporate information."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming: A more sophisticated form of phishing that redirects users to a fake website without their knowledge, even if they type the correct website address."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing (SMS Phishing): Phishing attacks that use text messages instead of emails."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing (Voice Phishing): Phishing attacks that use phone calls to trick victims into revealing sensitive information."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Clone Phishing: Attackers create a nearly identical copy of a legitimate website or email to trick victims into entering their credentials."
    },
    {
      topicKey: "spoofing",
      quote:
        "Spoofing: The act of disguising communication from an unknown source as being from a known, trusted source."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-081",
  title: "What Is Phishing?",
  publisher: "Proofpoint",
  year: 2026,
  url: "https://www.proofpoint.com/au/threat-reference/phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a common type of cyber-attack that targets individuals through email, text messages, phone calls, and other forms of communication."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Email phishing: The general term for any malicious email message meant to trick users into divulging private information."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing: These email messages are sent to specific people within an organisation, usually high-privilege account holders, to trick them into divulging sensitive data, sending the attacker money, or downloading malware."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling (CEO fraud): These messages are typically sent to high-profile employees of a company to trick them into believing the CEO or other executive has requested a money transfer."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing: Using SMS messages, attackers send a text message to a targeted victim with a malicious link that promises discounts, rewards, or free prizes."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing: Attackers use voice-changing software to leave a message telling targeted victims they must call a number where they can be scammed."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming is a two-phase attack used to steal account credentials."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler phishing: Attackers reply to social media posts as an official organisation to trick users into divulging account credentials and personal information."
    },
    {
      topicKey: "linkManipulation",
      quote:
        "Link manipulation: Messages contain a link to a malicious site that looks like the official business but takes recipients to an attacker-controlled server."
    },
    {
      topicKey: "contentInjection",
      quote:
        "Content injection: An attacker who has injected malicious content into an official site tricks users into accessing the site to show them a malicious popup or redirect them to a phishing website."
    },
    {
      topicKey: "waterHoling",
      quote:
        "Watering hole: An attacker identifies a site numerous targeted users use, exploits a vulnerability, and uses it to trick users into downloading malware."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-082",
  title: "What is Phishing? Understanding and Protecting Against Email Scams",
  publisher: "ProCheckUp",
  year: 2024,
  url: "https://www.procheckup.com/cyber-security-glossary/phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing involves sending fraudulent communications that appear to come from a reputable source, usually through email."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "The most common form of phishing, where attackers send emails posing as legitimate organizations."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Targeted phishing attacks aimed at specific individuals or companies."
    },
    {
      topicKey: "smishing",
      quote:
        "Phishing via SMS (Smishing) or voice calls (Vishing)."
    },
    {
      topicKey: "vishing",
      quote:
        "Phishing via SMS (Smishing) or voice calls (Vishing)."
    },
    {
      topicKey: "whaling",
      quote:
        "A form of phishing targeting high-profile individuals like CEOs or CFOs."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Involves creating a nearly identical replica of a legitimate message."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-083",
  title: "What Are Phishing Attacks? Ultimate Guide to Phishing",
  publisher: "Enterprise Networking Planet",
  year: 2023,
  url: "https://www.enterprisenetworkingplanet.com/security/what-are-phishing-attacks/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a type of social engineering attack that extracts sensitive information from victims by posing as credible or authoritative entities or people."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is when hackers target particular individuals using more sophisticated, personalized deception methods."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Phishers can take copies of legitimate content and make the tiniest adjustments to include malicious links and attachments."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler phishing is a bot or fake accounts resembling real people or companies that extort information from victims through DMs or other means on social media."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling targets “big fish” people who have a lot of money to spare and little to lose."
    },
    {
      topicKey: "smishing",
      quote:
        "These portmanteaus represent SMS phishing and voice phishing, respectively."
    },
    {
      topicKey: "vishing",
      quote:
        "These portmanteaus represent SMS phishing and voice phishing, respectively."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming is when hackers sneak their way into domain name servers (DNSs) to manipulate IP addresses."
    }
  ],
  notes: ""
},
 {
  id: "SRC-084",
  title: "Phishing Definition: Meaning, Types, and How It Works",
  publisher: "Trevonix",
  year: 2025,
  url: "https://trevonix.com/blogs/phishing-definition/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a fraudulent attempt to trick individuals into sharing sensitive information such as usernames, passwords, credit card details, or bank account numbers."
    },
    {
      topicKey: "phishing",
      quote:
        "In phishing, attackers pretend to be trustworthy entities—like your bank, a government agency, or even a coworker—while sending fake emails, text messages, or creating lookalike websites."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "The most common type, where attackers send fraudulent emails that mimic legitimate organizations."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Highly targeted phishing emails sent to specific individuals, often using personal details to appear genuine."
    },
    {
      topicKey: "whaling",
      quote:
        "Aimed at high-level executives like CEOs or CFOs, trying to gain access to corporate financial accounts."
    },
    {
      topicKey: "smishing",
      quote:
        "Phishing via text messages, often claiming delivery issues, bank alerts, or fake promotions."
    },
    {
      topicKey: "vishing",
      quote:
        "Attackers make phone calls pretending to be technical support, IRS agents, or bank representatives."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "A legitimate email is duplicated but with a malicious link or attachment added."
    },
    {
      topicKey: "pharming",
      quote:
        "Attackers redirect users to fake websites even when the correct URL is typed, often through DNS poisoning."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-085",
  title: "The 8 types of phishing attack that could target your business",
  publisher: "usecure",
  year: null,
  url: "https://blog.usecure.io/types-of-phishing-attack",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing emails are targeted at specific companies or groups of people."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a type of phishing attack aimed at high-value targets such as senior executives."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing attacks take place over SMS text messages, though other types of chat- and message-based phishing attacks are also often included in the definition."
    },
    {
      topicKey: "ceoFraud",
      quote:
        "In a CEO Fraud scam, a cyber criminal sends an employee an email that claims to come from the company's Chief Executive Officer."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "A Business Email Compromise (BEC) is a scam where a criminal poses as a business partner, customer or vendor of the target recipient."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing scams take place over the phone or voice messages."
    },
    {
      topicKey: "pretexting",
      quote:
        "Pretexting - also called social engineered phishing - is the use of a 'pretext' or a story to dupe a victim into making a payment, giving up credentials or letting the attacker into a company system."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler phishing attacks take place over social media."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-086",
  title: "What is 'Phishing'",
  publisher: "The Economic Times",
  year: 2026,
  url: "https://economictimes.indiatimes.com/definition/phishing?from=mdr",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a type of cybercrime that entails impersonating a reliable organization in order to fool people into divulging private information, like credit card numbers or passwords."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "The most prevalent kind is email phishing, which deceives recipients by sending phony emails."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing uses customized messages to target particular people or organizations."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling poses serious risks because it targets prominent people, such as executives."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing is the practice of using social engineering techniques to obtain information over the phone."
    },
    {
      topicKey: "smishing",
      quote:
        "Text messages are used in Smishing to trick victims into clicking on harmful links."
    },
    {
      topicKey: "httpsPhishing",
      quote:
        "HTTPS phishing impersonates trustworthy websites by using HTTPS encryption."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming uses malware or DNS poisoning to divert users from trustworthy websites to fraudulent ones."
    },
    {
      topicKey: "popUpPhishing",
      quote:
        "Pop-up windows that purport to be problems with the user's computer or account are used in Pop-up Phishing."
    },
    {
      topicKey: "evilTwin",
      quote:
        "False Wi-Fi networks that intercept user data are used in Evil Twin attacks."
    },
    {
      topicKey: "wateringHole",
      quote:
        "Watering Hole attacks use malware to infect websites that are frequently visited."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Clone Phishing mimics authentic emails but substitutes malicious links."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler Phishing is when someone poses as customer service on social media in order to obtain information."
    },
    {
      topicKey: "domainSpoofing",
      quote:
        "For phishing attempts, Domain Spoofing generates phony domains that mimic authentic ones."
    },
    {
      topicKey: "imagePhishing",
      quote:
        "Malicious code that, when clicked, launches destructive scripts is concealed in images through Image Phishing."
    },
    {
      topicKey: "searchEnginePhishing",
      quote:
        "False advertisements in search results are used in Search Engine Phishing to direct users to websites that steal credentials."
    },
    {
      topicKey: "manInTheMiddle",
      quote:
        "Man-in-the-middle Attacks secretly intercept communications between parties."
    },
    {
      topicKey: "contentInjection",
      quote:
        "Malicious content is inserted into trustworthy websites through Content Injection Attacks to expose phishing scams."
    },
    {
      topicKey: "deepfakePhishing",
      quote:
        "AI is used in Deepfake Phishing to produce lifelike impersonations for convincing voice phishing attempts."
    },
    {
      topicKey: "polymorphicAttacks",
      quote:
        "Polymorphic Attacks avoid conventional security measures by constantly changing their appearance."
    }
  ],
  notes: ""
},
{
  id: "SRC-087",
  title: "What is Phishing?",
  publisher: "Simoda",
  year: 2024,
  url: "https://www.simoda.co.uk/post/what-is-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a type of cyber attack wherein perpetrators pose as legitimate entities to deceive individuals into divulging sensitive information such as login credentials, financial details, or personal data."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "This involves personalised messages crafted to target specific individuals or organisations, often using information gathered from social media or other sources to make the messages appear legitimate."
    },
    {
      topicKey: "whaling",
      quote:
        "Similar to spear phishing, whaling targets high-profile individuals such as executives or celebrities, aiming to steal sensitive information or perpetrate financial fraud."
    },
    {
      topicKey: "vishing",
      quote:
        "Short for \"voice phishing,\" vishing uses phone calls or voicemail messages to deceive victims into providing sensitive information or performing certain actions."
    },
    {
      topicKey: "smishing",
      quote:
        "A combination of \"SMS\" and \"phishing,\" smishing utilises text messages to trick recipients into clicking on malicious links or disclosing personal information."
    },
    {
      topicKey: "pharming",
      quote:
        "This technique involves redirecting users from legitimate websites to fraudulent ones without their knowledge, often through manipulation of DNS servers or malware."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-088",
  title: "Phishing",
  publisher: "Arimetrics (Agencia Digital)",
  year: 2026,
  url: "https://www.arimetrics.com/en/digital-glossary/phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a type of cyber attack that is generally used to steal user data, including login credentials. This attack occurs when an attacker impersonates a trusted entity to trick the user into opening a deceptive email, text message or other form of communication."
    },
    {
      topicKey: "deceptivePhishing",
      quote:
        "Deceptive Phishing: Attackers send emails that appear to be from legitimate sources to trick users into revealing personal or financial information."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming or DNS-based phishing: Manipulation of host files or DNS servers to redirect users to fake websites."
    },
    {
      topicKey: "searchEnginePhishing",
      quote:
        "Search engine phishing: Creation of fake websites that are indexed by search engines to redirect users to fraudulent pages."
    },
    {
      topicKey: "contentInjectionPhishing",
      quote:
        "Content injection phishing: Manipulation of a legitimate website by adding fake content to obtain confidential information."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear Phishing: Attacks targeted at specific individuals or companies, with personalized messages to increase the probability of success."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling: Sophisticated attacks targeting senior executives or high-profile individuals within an organization."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing and Vishing: Use of text messages (SMS) and voice calls to deceive victims and obtain personal information."
    },
    {
      topicKey: "vishing",
      quote:
        "Smishing and Vishing: Use of text messages (SMS) and voice calls to deceive victims and obtain personal information."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-089",
  title: "What is Clone Phishing?",
  publisher: "ThreatDown Powered by Malwarebytes",
  year: 2026,
  url: "https://www.threatdown.com/glossary/what-is-clone-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "clonePhishing",
      quote:
        "Clone phishing is a deceptive cyber attack method that replicates legitimate emails or messages and modifies them to include malicious links or attachments."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-092",
  title: "Phishing Definition and History",
  publisher: "Infosec",
  author: "Stephen Moramarco",
  year: 2016,
  url: "https://www.infosecinstitute.com/resources/phishing/phishing-attacks-examples-in-history/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "The word “phishing” (a play on the word “fishing”) is an attempt, originally via a message or email, to lure computer users to reveal sensitive personal information such as passwords, birthdates, credit cards, and social security numbers."
    },
    {
      topicKey: "pharming",
      quote:
        "The malicious code can also take control of the infected computer’s web browser, a tactic known as pharming."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "One of many disturbing trends is the use of information gleaned through social media to make the communications as personal as possible, sometimes referred to as “spear-phishing” or “social engineering fraud.”"
    },
    {
      topicKey: "searchEnginePhishing",
      quote:
        "Another popular method is called search engine phishing, where scammers target certain keywords and create web pages they hope show up in the search results."
    },
    {
      topicKey: "manInTheMiddle",
      quote:
        "An even more fiendish breach is what is known as the “Man in the Middle” (MITM) attack, where they don’t need a phony website at all."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing is short for voice phishing, which involves thieves actually calling a person on the telephone."
    },
    {
      topicKey: "smishing",
      quote:
        "Finally (at least for this article) there’s smishing or SMS phishing, which is sent as a text message to smart phones."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-093",
  title: "Spam and Phishing – What is Phishing?",
  publisher: "University of Wisconsin–Parkside",
  year: 2026,
  url: "https://www.uwp.edu/explore/offices/campustechnologyservices/phishing-attempts.cfm",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "A phish is a type of cyber-attack which is made to look as though it's from a friend, a business or an organization. These phishing attacks are designed with two main focus’s in mind; acquire sensitive information, or scam individuals into giving the cybercriminal money."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing refers to phishing attacks that involve the use of voice calls, using either conventional phone systems or Voice over Internet Protocol (VoIP) systems."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing refers to phishing attacks that involve the use of messages sent using SMS (Short Message Service). False text messages are received by would-be victims, who in turn either reply directly or visit a phishing web site."
    },
    {
      topicKey: "whaling",
      quote:
        "A term used to describe a phishing attack that is specifically aimed at wealthy, powerful, or prominent individuals. Because of their status, if such a user becomes the victim of a phishing attack he can be considered a “big phish,” or a \"whale.\""
    },
    {
      topicKey: "spearPhishing",
      quote:
        "A phishing method that targets specific individuals or groups within an organization. While phishing tactics may rely on shotgun methods that deliver mass emails to random individuals, spear phishing focuses on specific targets and involve prior research."
    }
  ],
  notes: ""
},
{
  id: "SRC-094",
  title: "What is phishing? Examples, types, and techniques",
  publisher: "CSO Online (Foundry)",
  author: "Christine Wong",
  year: 2024,
  url: "https://www.csoonline.com/article/514515/what-is-phishing-examples-types-and-techniques.html",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a cyber-attack that uses email and social engineering to trick a target into taking actions that will compromise their security, such as providing sensitive information or downloading malware."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing targets one specific individual, often someone with access to an organization’s sensitive assets, such as an accountant or IT help desk employee."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "Business email compromise (BEC) takes phishing to the next level. With BEC, the hacker impersonates a CEO or other top executive at a company, and then dupes an employee at that company into transferring corporate funds to a fake bank account."
    },
    {
      topicKey: "whaling",
      quote:
        "Whale phishing targets a ‘big fish’ like a corporate CEO in order to steal a company’s funds, trade secrets or intellectual property."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing is phishing via SMS text message."
    },
    {
      topicKey: "quishing",
      quote:
        "Quishing is phishing by QR code."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing is phishing by phone call or voicemail."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-095",
  title: "What is Phishing? Definition & Types",
  publisher: "CEL Solicitors",
  author: "P. Hampson",
  year: 2025,
  url: "https://celsolicitors.co.uk/what-is-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a form of cybercrime where scammers attempt to deceive individuals into sharing sensitive information, such as passwords, credit card details, or personal identification numbers."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a highly targeted form of phishing. Unlike generic phishing attacks, which are sent to large numbers of people, spear phishing is tailored to a specific individual or organisation."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Clone phishing involves creating a near-identical copy of a legitimate email or message previously sent by a trusted entity."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a type of phishing attack that specifically targets high-profile individuals within an organisation, such as executives or senior managers."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-096",
  title: "Fighting Phishing Attacks 101: Definition, Methods, and More",
  publisher: "Timus Networks",
  author: "Yigit Calli",
  year: 2022,
  url: "https://www.timusnetworks.com/fighting-phishing-attacks-101-definition-methods-and-more/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "A phishing attack is a cybercrime directed at a target via email, phone or text message by malicious actors posing as legitimate institutions or authorities to persuade individuals to provide sensitive personal data, such as passwords or bank and credit card information."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Target-oriented phishing attacks (“spear phishing” ): These attacks use the victim’s personal information to enhance the attack’s credibility."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling attacks (“whaling” ): This type of attack targets upper-level executives using the same methods as spear phishing."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming: This is a phishing method that requires substantial technical know-how."
    },
    {
      topicKey: "vishing",
      quote:
        "Voice phishing: In this attack, the perpetrator contacts the victim through voice calls."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-097",
  title: "What is Phishing? Definition, types of attacks & more",
  publisher: "The Missing Link",
  author: "Sanjana Abraham",
  year: 2025,
  url: "https://www.themissinglink.com.au/news/what-is-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "At its core, phishing is about deception: attackers impersonate trusted people or organisations to trick you into sharing passwords, approving payments, or clicking malicious links."
    },
    {
      topicKey: "deepfakePhishing",
      quote:
        "Attackers use AI-generated audio or video to impersonate executives and request sensitive actions like payments or file access."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "AI-driven attacks that craft highly personalised messages using scraped data."
    },
    {
      topicKey: "extortionPhishing",
      quote:
        "Scammers claim to have compromising information or footage and demand a ransom to prevent its release."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "Attackers impersonate a trusted internal party (like the CEO or CFO) to initiate fraudulent transactions or steal sensitive data."
    },
    {
      topicKey: "smishing",
      quote:
        "Phishing via SMS (smishing) or voice calls (vishing). Messages often impersonate banks, logistics firms, or internal IT teams."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "A legitimate email is copied, and the content is modified with malicious links or attachments — then resent to the original recipient list."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-098",
  title: "What Is Phishing? Definition, Types of Phishing, & Examples",
  publisher: "Delta IT Network",
  author: "",
  year: 2025,
  url: "https://www.deltaitnetwork.com/blog/what-is-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a cyberattack where criminals pretend to be a trusted person or organization to trick victims into sharing sensitive information like passwords, OTPs, bank details, or confidential business data."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "This is the most common form of phishing, where attackers send fraudulent emails pretending to be from trusted companies or services."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "A more targeted version of phishing, where attackers focus on a specific person or department."
    },
    {
      topicKey: "whaling",
      quote:
        "These attacks target top-level executives or decision makers."
    },
    {
      topicKey: "smishing",
      quote:
        "In this type, attackers use SMS or text messages instead of email."
    },
    {
      topicKey: "vishing",
      quote:
        "Here, cybercriminals use phone calls to impersonate banks, companies, or authorities."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Attackers replicate a legitimate email that a user previously received and resend it with harmful changes."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "This attack involves compromising or spoofing business email accounts."
    },
    {
      topicKey: "socialMediaPhishing",
      quote:
        "Cybercriminals use fake or hacked social media accounts to build trust with users."
    }
  ],
  notes: ""
},
{
  id: "SRC-099",
  title: "What is vishing?",
  publisher: "Cisco",
  author: "",
  year: 2026,
  url: "https://www.cisco.com/site/us/en/learn/topics/security/what-is-vishing.html",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "vishing",
      quote:
        "Vishing, short for voice phishing, uses fraudulent phone calls to trick victims into providing sensitive information, like login credentials, credit card numbers, or bank details."
    },
    
    {
      topicKey: "phishing",
      quote:
        "Phishing attacks use seemingly legitimate emails or texts to steal money, data, or credentials."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing: Text message scams that also prompt victims to click malicious links or visit fake websites."
    },
    
  ],
  notes: ""
}, 
{
  id: "SRC-100",
  title: "The Evolving Face of Phishing: Types, Recent Breaches, and How to Spot Them",
  publisher: "CyberClan",
  author: "",
  year: 2025,
  url: "https://cyberclan.com/knowledge/evolving-face-of-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "emailPhishing",
      quote:
        "Traditional phishing involves deceptive emails that ask recipients to click on a malicious link, provide credentials, or download harmful attachments."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is highly targeted phishing that uses personal or corporate details to deceive specific individuals."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a form of spear phishing aimed at high-level executives, using messages that appear to be legal notices or board-level communications."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Clone phishing attacks replicate a previously sent legitimate email thread but swap in malicious links or attachments."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing: Voice phishing involving deceptive calls impersonating trusted entities (e.g., IT, HR, banks)."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing: SMS phishing that sends fraudulent messages prompting victims to click on malicious links."
    },
    {
      topicKey: "quishing",
      quote:
        "QR phishing, also known as quishing, takes advantage of the trust users have in QR codes."
    },
    {
      topicKey: "deepfakeWhaling",
      quote:
        "Deepfake whaling attacks use AI-generated audio or video to impersonate executives."
    },
    {
      topicKey: "phishingAsAService",
      quote:
        "Sophisticated phishing kits are available on the dark web, allowing even low-skilled attackers to launch phishing campaigns."
    },
    {
      topicKey: "oauthPhishing",
      quote:
        "OAuth phishing, also known as “consent phishing,” is a tactic that tricks users into granting a malicious third-party application access to their accounts through OAuth 2.0."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-101",
  title: "Smishing Explained: Definition, Types, and Protection Tips",
  publisher: "Group-IB",
  author: "",
  year: 2025,
  url: "https://www.group-ib.com/resources/knowledge-hub/smishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "smishing",
      quote:
        "Smishing is a type of attack that uses SMS text messages to deceive victims into giving up sensitive information or installing malware on their devices."
    },
    {
      topicKey: "scarewareSmishing",
      quote:
        "One of the common types of smishing attacks involves sending messages that appear to be from an official source (such as a government agency) and threatening the user with legal action if they do not follow instructions in the message."
    },
    {
      topicKey: "impersonationSmishing",
      quote:
        "This is a phishing attack where attackers impersonate a trusted person, such as a victim’s friend or family member, to ask for a loan or emergency money."
    },
    {
      topicKey: "orderConfirmationSmishing",
      quote:
        "The scammer sends a text message asking the recipient to confirm their order details."
    },
    {
      topicKey: "customerSupportSmishing",
      quote:
        "Scammers use text messages to impersonate a customer service representative to gain access to confidential information."
    },
    {
      topicKey: "accountVerificationSmishing",
      quote:
        "Victims will usually receive fraudulent messages claiming that their account has been compromised and requires immediate verification."
    },
    {
      topicKey: "prizeLotterySmishing",
      quote:
        "Attackers send congratulatory messages claiming the victims have won a prize or lottery."
    },
    {
      topicKey: "taxSmishing",
      quote:
        "These scams typically peak during tax season."
    },
    {
      topicKey: "serviceCancellationSmishing",
      quote:
        "These types of attacks typically involve messages claiming that a subscription or service the victim uses will be suspended or cancelled."
    }
  ],
  notes: ""
},
{
  id: "SRC-102",
  title: "What is Phishing Email? Types of Email Attacks",
  publisher: "Ace Cloud Hosting",
  author: "Nolan Foster",
  year: 2025,
  url: "https://www.acecloudhosting.com/blog/what-is-phishing-email/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "emailPhishing",
      quote:
        "Email phishing is a prevalent cyberattack that aims to steal confidential user data like credit card information, personal data, or login credentials."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is the opposite of randomized general phishing as it targets specific people."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling, also called CEO fraud, happens when attackers pose as the CEO of a company and send the company’s executives an urgent email requiring instant action."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "These phishing attacks target specific companies to defraud them and their partners, vendors, and clients."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "This is an advanced form of phishing where attackers use previously sent legitimate emails with links or attachments."
    }
  ],
  notes: ""
},
{
  id: "SRC-103",
  title: "What Is Phishing? Get to Know 8 Types of Cybercrime",
  publisher: "Primal",
  author: "Pimlapat Phansuathong",
  year: 2022,
  url: "https://www.primal.co.th/seo/what-is-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a type of cybercrime, often carried out by criminals creating websites that impersonate a trustworthy website, such as a bank or social media account."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Email phishing is a common scam, often referred to as “Spray and Pray”, where numerous emails are sent at once to try and entice victims."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing targets a specific group of individuals."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling phishing is another complicated scam similar to spear phishing, but instead, it targets a specific individual—usually high-ranking personnel such as a CEO or manager."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing combines the words’ voice’ and ‘phishing’."
    },
    {
      topicKey: "smishing",
      quote:
        "Another phishing threat that everyone knows well is phishing through SMS messages."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler phishing is a new scamming technique many people are unfamiliar with."
    },
    {
      topicKey: "ceoFraud",
      quote:
        "CEO fraud phishing is similar to whaling phishing, but CEO fraud phishing attacks are worse."
    },
    {
      topicKey: "searchEnginePhishing",
      quote:
        "Another new technique is to exploit the trust users have in search engines."
    }
  ],
  notes: ""
},
{
  id: "SRC-104",
  title: "Explaining the Difference Between Phishing and Pharming",
  publisher: "Abusix",
  author: "Larry Ellis",
  year: 2022,
  url: "https://abusix.com/blog/phishing-pharming-differences/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "A phishing attack uses social engineering for identity theft. A type of cyberattack that is set to get confidential and sensitive information out of users."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Phishing requires hackers to send spoofed emails or texts (smishing) in the name of a legitimate organization to victims."
    },
    {
      topicKey: "smishing",
      quote:
        "Yet, phishing attacks are not limited to email phishing. Phishers use SMS text messages (smishing) and voice messages (vishing) too, by posing as a legitimate organization."
    },
    {
      topicKey: "vishing",
      quote:
        "Yet, phishing attacks are not limited to email phishing. Phishers use SMS text messages (smishing) and voice messages (vishing) too, by posing as a legitimate organization."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming is sometimes referred to as “phishing without a lure.”"
    },
    {
      topicKey: "pharming",
      quote:
        "It’s a cyberattack that involves installing malicious code or malware on a server to misdirect or automatically redirect users to fake replica websites without the user being aware."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-105",
  title: "Spam vs Phishing: What You Need to Know to Protect Your Employees",
  publisher: "Hoxhunt",
  author: "",
  year: 2024,
  url: "https://hoxhunt.com/blog/spam-vs-phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a type of cyber attack (e.g., email, voice, text, instant message) that tries to get you to provide sensitive information, click a link, or open an attachment."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Email Phishing: The most common form of attack, where attackers send emails that appear to come from legitimate sources."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a more targeted form of phishing, where attackers tailor their messages to a specific individual or organization, often using personal information to appear more convincing."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling phishing is a type of spear phishing that targets high-profile individuals such as executives or important stakeholders within an organization."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing: These are phishing attacks conducted via SMS messages."
    },
    {
      topicKey: "spam",
      quote:
        "Spam refers to unsolicited and often irrelevant or inappropriate messages, typically sent to a large number of users."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-106",
  title: "Phishing",
  publisher: "Bitget",
  author: "",
  year: 2025,
  url: "https://www.bitget.com/glossary/phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a form of cyber attack where perpetrators seek to trick individuals into divulging sensitive information, such as login credentials, financial details, or personal identification data."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "These targeted attacks are personalized, often including information relevant to the victim, making them more credible."
    },
    {
      topicKey: "whaling",
      quote:
        "A form of spear phishing that targets high-profile individuals and is meticulously designed to exploit their authority and access to sensitive information."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Attackers clone a legitimate email the victim has previously received and slightly modify it to include malicious links or attachments."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing entails phishing attacks conducted via voice calls."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing uses SMS or text messages to extract sensitive information from the victim."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-107",
  title: "Phishing Attack - Definition & Overview",
  publisher: "Inspirisys Solutions Limited",
  author: "",
  year: 2025,
  url: "https://www.inspirisys.com/glossary/phishing-attack",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "A phishing attack is a cybercrime tactic where attackers pose as trusted individuals or entities, usually through email, text, or fake websites, to deceive users into sharing sensitive data like login credentials, credit card numbers, or personal information."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "Email Phishing: Mass emails that mimic trusted senders, often with fake links or attachments."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing: Phishing via SMS messages that prompt users to click harmful links or share private info."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear Phishing: Personalized attacks aimed at specific individuals using known details to boost credibility."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling: Targeted phishing aimed at high-level executives to steal confidential or financial data."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing: Voice calls pretending to be from legitimate sources, used to extract sensitive information."
    },
    {
      topicKey: "popupPhishing",
      quote:
        "Pop-Up Phishing: Fake browser pop-ups on devices urging users to take action that leads to data theft."
    },
    {
      topicKey: "anglerPhishing",
      quote:
        "Angler Phishing: Fake customer support or brand accounts on social media luring users into scams."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Clone Phishing: A near-identical copy of a previously sent legitimate email, replaced with malicious content."
    },
    {
      topicKey: "evilTwinPhishing",
      quote:
        "Evil Twin Phishing: A rogue Wi-Fi hotspot trickings users into connecting, enabling data interception."
    },
    {
      topicKey: "pharming",
      quote:
        "Pharming: DNS manipulation redirects users from legitimate websites to malicious lookalike sites."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-108",
  title: "Understanding Social Engineering Tactics: 8 Attacks to Watch Out For",
  publisher: "Fortra (Tripwire State of Security Blog)",
  author: "Kirsten Doyle",
  year: 2024,
  url: "https://www.tripwire.com/state-of-security/5-social-engineering-attacks-to-watch-out-for",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is one of the most common social engineering attacks. It involves sending fraudulent communications, usually emails, that appear to come from a legitimate source. The goal is to trick recipients into providing sensitive information, such as login credentials or financial details."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is a more targeted version of phishing. While phishing attacks are often sent to many recipients, spear phishing targets specific individuals or firms using customized messages based on information about the target."
    },
    {
      topicKey: "pretexting",
      quote:
        "Pretexting is another form of social engineering involving creating a fabricated scenario to steal information, where the attacker pretends to need the information to confirm identity or respond to a supposed emergency."
    },
    {
      topicKey: "deepfakePhishing",
      quote:
        "Deepfakes use artificial intelligence (AI) to create realistic but fake audio, video, or images that impersonate real people, enabling attackers to deceive targets into performing fraudulent actions."
    },
    {
      topicKey: "quidProQuo",
      quote:
        "Quid pro quo attacks involve offering a service or benefit in exchange for information, such as fake tech support or assistance used to persuade victims to reveal confidential data."
    },
    {
      topicKey: "honeytrap",
      quote:
        "Honeytraps involve creating fake online personas to establish romantic relationships with victims in order to exploit their trust for financial gain or access to sensitive information."
    },
    {
      topicKey: "piggybacking",
      quote:
        "Piggybacking involves gaining unauthorized access by exploiting the trust of legitimate users, often by following them into secured areas or leveraging insider access."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "Business email compromise (BEC) is a sophisticated cyberattack where criminals impersonate executives or gain access to their email accounts to request urgent financial transactions or sensitive information."
    }
  ],
  notes: "Source focuses on social engineering broadly; phishing and its variants are framed as psychological manipulation rather than purely technical attacks."
}, 
{
  id: "SRC-109",
  title: "What Is Phishing? A 3-Minute Phishing Definition & Explanation",
  publisher: "Savvy Security",
  author: "",
  year: 2022,
  url: "https://cheapsslsecurity.com/blog/what-is-phishing-a-3-minute-phishing-definition-explanation/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a term that plays off the word fishing — it’s about trying to trick or manipulate someone into doing something they typically wouldn’t."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing attacks typically involve an attacker sending an enticing text message with a link to get the target to visit a phishing or malicious website."
    },
    {
      topicKey: "vishing",
      quote:
        "This approach involves either calling targets directly or sending an email or text message to trick the target into calling the attacker."
    },
    {
      topicKey: "phishingWebsites",
      quote:
        "The goal here is to get an attacker to visit a phony website that’s designed to look authentic."
    },
    {
      topicKey: "evilTwin",
      quote:
        "This process typically entails an attacker creating a fake network (such as at a library or a café) to trick people into connecting to it, believing it to be the facility’s legitimate secure network."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-110",
  title: "Phishing Is: Definition, Types, and Legal Sanctions",
  publisher: "BFI Finance Indonesia",
  author: "Kukut Ragil Walujodjati",
  year: 2024,
  url: "https://www.bfi.co.id/en/blog/phising-adalah-definisi-jenis-dan-sanksi-hukumnya",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is the theft of data for the benefit of certain parties."
    },
    {
      topicKey: "deceptivePhishing",
      quote:
        "Deceptive phishing is a type of phishing or scam by sending emails on behalf of an institution that asks the victim to carry out several activities, for example: verifying account information, username and password information, requesting a password change, and making payment transactions."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing is phishing that is carried out by sending emails to potential victims by pretending to be someone they can trust."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing phishing is phishing that is carried out through SMS or phone calls to obtain personal information."
    },
    {
      topicKey: "webPhishing",
      quote:
        "Web phishing is phishing that involves creating a website that resembles or even resembles the original website."
    },
    {
      topicKey: "whaling",
      quote:
        "Whale phishing is phishing that targets celebrities or well-known public figures who are known to be wealthy or powerful."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing is a type of phishing that uses phone calls to lure victims into providing personal or financial information they already possess."
    }
  ],
  notes: ""
}, 
{
  id: "SRC-111",
  title: "Phishing: Definition, Forms and Security Measures",
  publisher: "IvyPanda",
  author: "",
  year: 2022,
  url: "https://ivypanda.com/essays/phishing-definition-forms-and-security-measures/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a form of cyberattack whereby victims are reached by an individual impersonating a genuine organization or person by email or message trick them into giving critical or confidential information, like bank account numbers."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "A spear-phishing assault is when a hacker customizes an email using the victim’s identity, role, organization, office phone number, and other details to fool the victim into thinking they are communicating with the actual sender."
    },
    {
      topicKey: "whaling",
      quote:
        "The whaling assault is a special kind of phishing attack that targets high-ranking businesses, officials, and personalities as its intended victims."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "A BEC hack uses a purportedly valid email address to persuade the recipient to perform a specific action."
    }
  ],
  notes: ""
},
{
  id: "SRC-112",
  title: "Phishing Attacks: A Recent Comprehensive Study and a New Anatomy",
  publisher: "Frontiers in Computer Science",
  author: "Zainab Alkhalil et al.",
  year: 2021,
  url: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2021.563060/full",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a socio-technical attack, in which the attacker targets specific valuables by exploiting an existing vulnerability to pass a specific threat via a selected medium into the victim’s system, utilizing social engineering tricks or some other techniques to convince the victim into taking a specific action that causes various types of damages."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Phishers have also turned from sending mass-email messages, which target unspecified victims, into more selective phishing by sending their emails to specific victims, a technique called “spear-phishing.”"
    },
    {
      topicKey: "whaling",
      quote:
        "A more sophisticated form of spear phishing is called whaling, which targets high-rank people such as CEOs and CFOs."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "Clone phishing is another type of email phishing, where the attacker clones a legitimate and previously delivered email by spoofing the email address and using information related to the recipient with replaced links or malicious attachments."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing is a type of phishing that is conducted through phone calls, in which the attacker pretends to be someone the victim knows or any other trusted source."
    },
    {
      topicKey: "smishing",
      quote:
        "SMishing is a phishing attack conducted through text messages, where the attacker attempts to lure the victim into clicking malicious links or sharing sensitive information."
    },
    {
      topicKey: "socialMediaPhishing",
      quote:
        "Social media is the new favorite medium for cybercriminals to conduct their phishing attacks, including account hijacking, impersonation attacks, scams, and malware distribution."
    },
    {
      topicKey: "malwareBasedPhishing",
      quote:
        "Malware-based phishing is a type of phishing attack which is conducted by running malicious software on a user’s machine to steal sensitive information."
    },
    {
      topicKey: "pharming",
      quote:
        "Any form of phishing that interferes with the domain name system so that the user will be redirected to the malicious website by polluting the user's DNS cache with wrong information is called DNS-based phishing."
    },
    {
      topicKey: "contentInjectionPhishing",
      quote:
        "Content-Injection Phishing refers to inserting false content into a legitimate site to misdirect users into fake websites or to download malware."
    },
    {
      topicKey: "manInTheMiddlePhishing",
      quote:
        "The Man In The Middle attack is a form of phishing, in which the phishers insert communications between two parties to intercept and misuse sensitive information."
    },
    {
      topicKey: "searchEnginePhishing",
      quote:
        "In search engine phishing, the phisher creates malicious websites with attractive offers and uses search engine optimization techniques to have them indexed legitimately."
    },
    {
      topicKey: "businessEmailCompromise",
      quote:
        "Business Email Compromise exploits authority cues by pretending to be from a financial institution or executive and requesting immediate action."
    }
  ],
  notes: ""
},
{
  id: "SRC-113",
  title: "Phishing",
  publisher: "CoinMarketCap",
  year: 2026,
  url: "https://coinmarketcap.com/academy/glossary/phishing",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "When a scammer pretends to be a trusted institution or person to trick people into revealing sensitive information often through a malware link disguised as legitimate."
    },
    {
      topicKey: "cryptoPhishing",
      quote:
        "Crypto phishing is a popular way to attack victims to reveal their private keys unknowingly."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing attacks are one of the most typical crypto phishing attacks and should be on anyone's shortlist when it comes to understanding how to stay safe online."
    },
    {
      topicKey: "dnsHijacking",
      quote:
        "DNS hijacking is difficult to recognize and has thus grown in popularity among crypto phishing attacks."
    },
    {
      topicKey: "fakeBrowserExtensions",
      quote:
        "Fake browser extensions target popular extensions like MetaMask wallets."
    },
    {
      topicKey: "cryptoMalware",
      quote:
        "Another type of crypto phishing attack is malware installed through one of the previous options."
    },
    {
      topicKey: "phishingBots",
      quote:
        "Phishing bots are automated programs that mass-message victims to obtain their information."
    },
    {
      topicKey: "icePhishing",
      quote:
        "Ice phishing attacks may use fake transactions to get victims to reveal their private keys."
    }
  ],
  notes: ""
},
{
  id: "SRC-114",
  title: "Phishing Attack 🎯 – Types of Phishing Attacks and Business Impact",
  publisher: "Wallarm",
  author: "Mukhadin Beschokov",
  year: 2025,
  url: "https://www.wallarm.com/what/types-of-phishing-attacks-and-business-impact",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "phishing",
      quote:
        "Phishing is a typical type of social engineering attack intended to gather user data, such as login credentials and credit card data."
    },
    {
      topicKey: "emailPhishing",
      quote:
        "The most common phishing scenario takes the shape of malicious emails sent to individuals mimicking an authentic organization."
    },
    {
      topicKey: "clonePhishing",
      quote:
        "In a clone phishing scenario, the attacker takes advantage of actual email messages that an individual may have received by replacing links or attachments with malicious ones."
    },
    {
      topicKey: "domainSpoofing",
      quote:
        "Domain spoofing is a technique where the perpetrator spoofs a notable organization's domain name to make emails appear legitimate."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing implies a technique where the phisher targets a specific individual or group rather than a generic user base."
    },
    {
      topicKey: "whaling",
      quote:
        "Whaling is a type of spear-phishing where the targets are highly wealthy individuals, such as the CEO or top executives."
    },
    {
      topicKey: "ceoFraud",
      quote:
        "CEO Fraud is fraudulent activity by an attacker impersonating the CEO to authorize wire transfers or obtain sensitive information."
    },
    {
      topicKey: "evilTwinPhishing",
      quote:
        "The hacker replicates the Wi-Fi hotspot with a fake, allowing them to eavesdrop on network traffic and steal credentials."
    },
    {
      topicKey: "smishing",
      quote:
        "Smishing is a technique where cybercriminals lure victims through text messaging to visit rogue websites or download malicious apps."
    },
    {
      topicKey: "vishing",
      quote:
        "Vishing campaigns convince victims to disclose personal information while speaking to attackers over the phone."
    },
    {
      topicKey: "pharming",
      quote:
        "With pharming, the perpetrator attacks individuals by installing malware that manipulates DNS to redirect users to malicious websites."
    },
    {
      topicKey: "wateringHolePhishing",
      quote:
        "In a watering hole attack, attackers infect websites frequently visited by targets with custom malware."
    }
  ],
  notes: ""
},
{
  id: "SRC-115",
  title: "Understanding the Difference Between Spoofing vs Phishing",
  publisher: "CrowdStrike",
  author: "Bart Lenaerts-Bergmans",
  year: 2023,
  url: "https://www.crowdstrike.com/en-us/cybersecurity-101/social-engineering/spoofing-vs-phishing/",
  language: "EN",
  kept: true,
  definitions: [
    {
      topicKey: "spoofing",
      quote:
        "In spoofing attacks, threat actors disguise themselves as legitimate sources to gain the victim’s trust."
    },
    {
      topicKey: "emailSpoofing",
      quote:
        "Email spoofing: The attacker creates an email address resembling that of a trusted sender by altering the “from” field to match a trusted contact or mimicking the name and email address of a known contact."
    },
    {
      topicKey: "domainSpoofing",
      quote:
        "Domain or website spoofing: An attacker creates a fake website or email domain designed to impersonate a known business or person."
    },
    {
      topicKey: "ipSpoofing",
      quote:
        "IP spoofing: Attackers alter their IP address in order to hide their real identity or impersonate another user via IP spoofing."
    },
    {
      topicKey: "gpsSpoofing",
      quote:
        "GPS spoofing: An attacker alters a device’s GPS to register in a location different from the user’s actual physical location."
    },
    {
      topicKey: "callerIdSpoofing",
      quote:
        "Caller ID spoofing: The attacker disguises their phone number with one that is familiar to the victim, similar to the method in email spoofing."
    },
    {
      topicKey: "phishing",
      quote:
        "A phishing attack is a scam in which a threat actor sends generic messages in mass quantities, usually via email, in hopes of getting anyone to click on malicious links."
    },
    {
      topicKey: "spearPhishing",
      quote:
        "Spear phishing: This phishing attempt targets specific individuals or organizations with personal communication, typically through malicious emails, with the intent to steal sensitive information."
    },
    {
      topicKey: "whaling",
      quote:
        "Whale phishing: A whaling attack is a social engineering attack specifically targeting senior or C-level executives in an attempt to steal money or information or gain access to the victim’s computer in order to execute further cyberattacks."
    },
    {
      topicKey: "vishing",
      quote:
        "Voice phishing (vishing): Vishing is a phishing attack conducted by telephone."
    },
    {
      topicKey: "smishing",
      quote:
        "SMS phishing (smishing): Smishing refers to phishing scams conducted through SMS messages, usually with the goal of luring the user to visit a website that entices them to download malicious apps or content."
    }
  ],
  notes: ""
}










];
