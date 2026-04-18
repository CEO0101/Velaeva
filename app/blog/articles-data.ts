export interface ArticleMetadata {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  updatedDate?: string;
  readingTime: number;
  category: string;
  keywords: string[];
  ogImage?: string;
}

export const articles: ArticleMetadata[] = [
  {
    slug: "the-11pm-problem",
    title: "The 11 PM Problem: Why Your Best Leads Are Already Gone Before You Wake Up",
    metaDescription: "Why 31% of high-intent leads arrive after hours—and what it costs your business every night. A deep dive into the revenue problem nobody's calculating.",
    excerpt: "I want to tell you about a Tuesday night that changed how I think about revenue. I was sitting with the owner of a boutique tourism company in Lisbon...",
    author: "Zach Vivek",
    authorRole: "Founder, Velaeva",
    publishedDate: "2026-01-08",
    readingTime: 8,
    category: "Business Strategy",
    keywords: [
      "after-hours leads",
      "lead conversion",
      "response time",
      "customer service",
      "business growth",
      "revenue optimization",
      "customer enquiries",
      "operational efficiency"
    ],
  },
  {
    slug: "true-cost-missed-enquiry",
    title: "I Asked 12 Business Owners What a Missed Enquiry Costs Them. None of Them Knew.",
    metaDescription: "Most businesses don't track lost leads. Here's the math on what each missed high-intent enquiry actually costs—and it's far higher than you think.",
    excerpt: "Not approximately. Not roughly. Not 'somewhere around.' None of them had actually calculated it. These were not careless operators...",
    author: "Zach Vivek",
    authorRole: "Founder, Velaeva",
    publishedDate: "2026-01-15",
    readingTime: 9,
    category: "Business Strategy",
    keywords: [
      "missed leads",
      "lead cost",
      "customer lifetime value",
      "conversion rate",
      "business metrics",
      "revenue loss",
      "customer acquisition",
      "service business"
    ],
  },
  {
    slug: "why-ai-chatbots-fail",
    title: "Why AI Chatbots Fail at After-Hours Lead Capture (And What the Difference Actually Looks Like)",
    metaDescription: "The gap between a chatbot that replies and a concierge that actually represents your business. Why most AI tools fail when it matters most.",
    excerpt: "Three years ago, a car dealership owner I was advising installed a chatbot. He was proud of it. It was well-reviewed, cost a reasonable monthly fee...",
    author: "Zach Vivek",
    authorRole: "Founder, Velaeva",
    publishedDate: "2026-01-22",
    readingTime: 10,
    category: "AI & Automation",
    keywords: [
      "AI chatbots",
      "customer service automation",
      "lead capture",
      "chatbot vs concierge",
      "AI customer experience",
      "automated responses",
      "customer engagement",
      "conversational AI"
    ],
  },
  {
    slug: "ai-vs-hiring-the-math",
    title: "AI Concierge vs. Hiring: The Maths Every Service Business Should Run Before Deciding",
    metaDescription: "Real numbers on AI concierge vs. hiring part-time staff. The cost breakdown, quality comparison, and when each option actually makes sense.",
    excerpt: "The question I get asked most often — after someone understands what Velaeva actually does — is some version of this...",
    author: "Zach Vivek",
    authorRole: "Founder, Velaeva",
    publishedDate: "2026-02-03",
    readingTime: 9,
    category: "Business Strategy",
    keywords: [
      "AI vs hiring",
      "customer service costs",
      "part-time staff",
      "cost analysis",
      "business operations",
      "staffing solutions",
      "automation ROI",
      "operational efficiency"
    ],
  },
  {
    slug: "what-trained-on-your-business-means",
    title: "\"Trained on Your Business\" — What It Means When It's Real, and What It Means When It Isn't",
    metaDescription: "The difference between document retrieval and genuine training. Why most AI tools fall short—and what real calibration actually looks like.",
    excerpt: "Every AI tool in the customer service space will tell you they can be trained on your business. It's become such a standard marketing phrase...",
    author: "Zach Vivek",
    authorRole: "Founder, Velaeva",
    publishedDate: "2026-02-12",
    readingTime: 10,
    category: "AI & Automation",
    keywords: [
      "AI training",
      "customer service AI",
      "business automation",
      "AI calibration",
      "brand voice",
      "AI customization",
      "customer experience",
      "AI implementation"
    ],
  },
  {
    slug: "ai-receptionist-vs-concierge-high-ticket",
    title: "The £38,000 Test Drive That Nearly Didn't Happen: What AI Receptionists Cost High-Ticket Businesses",
    metaDescription: "A buyer nearly didn't come in because an AI receptionist couldn't answer whether a car came in blue. Here is the failure mode that costs high-ticket businesses the most.",
    excerpt: "A buyer walked into a car dealership, sat down, and opened with this: 'I asked your chatbot whether the car came in blue. It said it didn't know. I nearly didn't come.'",
    author: "Zach Vivek",
    authorRole: "Founder, Velaeva",
    publishedDate: "2026-01-28",
    readingTime: 10,
    category: "AI & Automation",
    keywords: [
      "AI receptionist vs AI concierge",
      "AI receptionist problems high ticket business",
      "why AI receptionist doesn't work",
      "after hours AI service business",
      "high value enquiry gap",
      "high value response window",
      "AI for service business",
      "done-for-you AI concierge"
    ],
  },
  {
    slug: "enquiry-gap-index",
    title: "The Enquiry Gap Index: How Much Revenue Is Your Service Business Losing After Hours",
    metaDescription: "Most service business owners have never calculated what their after-hours silence costs. Here is the exact framework — with real numbers for car dealerships, med spas, and real estate agencies.",
    excerpt: "Most service business owners have never calculated this number. Not approximately. Not roughly. They have never sat down with their actual enquiry data and worked out what the silence costs.",
    author: "Zach Vivek",
    authorRole: "Founder, Velaeva",
    publishedDate: "2026-02-19",
    readingTime: 8,
    category: "Business Strategy",
    keywords: [
      "after hours revenue loss",
      "how much do businesses lose after hours",
      "cost of missed leads service business",
      "enquiry gap index",
      "after hours lead conversion rate",
      "missed enquiry cost",
      "high ticket lead response time",
      "service business revenue gap"
    ],
  },
  {
    slug: "rag-vs-calibration-ai-concierge",
    title: "RAG vs Fine-Tuning vs Calibration: What 'Trained on Your Business' Actually Means",
    metaDescription: "Every AI tool claims to be trained on your business. Most are running document search. Here is what the three approaches actually produce — and why the difference matters commercially.",
    excerpt: "The phrase has become so standard in AI marketing that it has nearly lost meaning. 'Trained on your business.' Upload your FAQ. Connect your website. The AI 'knows' your business. Done.",
    author: "Zach Vivek",
    authorRole: "Founder, Velaeva",
    publishedDate: "2026-03-28",
    readingTime: 12,
    category: "AI & Automation",
    keywords: [
      "RAG vs fine-tuning AI",
      "retrieval augmented generation vs fine-tuning",
      "how to train AI on your business",
      "AI concierge calibration",
      "RAG for customer service AI",
      "custom AI for business",
      "AI trained on business data",
      "AI concierge implementation"
    ],
  },
];

export function getArticleBySlug(slug: string): ArticleMetadata | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticles(): ArticleMetadata[] {
  return articles.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}
