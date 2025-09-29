// src/config/defaultFormData.js
const defaultFormData = {
  name: 'Widget Name',
  chatbot_privacy: 'public',
  websiteUrl: '',
  chatbot_category: 'tech',
  chatbot_prompt: '',
  chatbot_desc: '',
  widget_mode: '',
  headingBgColor: '#000000',
  containerBgColor: '#ffffff',
  botBgColor: '#f0f0f0',
  textColor: '#000000',
  LivechatInitialMessage: "Hello 👋, Questions? We're here to help!",
  ConnectionRequestQuestion: ' Request to Talk with our live chat agent ?',
  allowWidgetDisplayPicture: true,
  widget_image: "https://images.unsplash.com/photo-1494790108755-2616b332c1cd?w=150&h=150&fit=crop&crop=face",
  allowPopUpAnimationModal: true,
  popUpAnimations: {
    popUpDelay: 6000,
    popUpTimeout: 10000,
    popUpAnimationText: "Welcome to our site!",
  },
  hideLabel: false,
  collectEmail: false,
  position: "bottom-right",
  avatarPath: '',
  buttonStyles: { shape: "rounded", size: "medium" },
  responsiveBreakpoints: { mobile: "375px", tablet: "768px", desktop: "1024px" },

  // Step 1: Create Widget
  category: '',
  description: '',
  privacy: 'public',
  ai_model: '',
  role: '',
  prompt: '',

  // Step 2: Customize
  homeTab: true,
  chatbotTab: true,
  livechatTab: true,
  enableLeadCollection: false,
  translations: { en: "Hello", es: "Hola" },
  modernStructure: true,
  traditionalStructure: false,
  classicalStructure: false,

  // Step 4: Livechat Settings
  allowFileAttachments: true,
  soundNotifications: true,
  allowLeadsCollection: false,
  allowEmailCollection: true,
  allowPhoneNumberCollection: true,
  allowNameCollection: true,
  allowMessageCollection: true,
  allowPoweredByLabel: true,

  leadFormCustomization: {
    leadHeaderTextCustomization: "Fullname",
    nameTextCustomization: "Fullname",
    namePlaceholderCustomization: "Enter your fullname",
    emailTextCustomization: "Email Address",
    emailPlaceholderCustomization: "Enter your email address",
    mobileNoTextCustomization: "Mobile No",
    mobileNoPlaceholderCustomization: "Enter your Mobile No",
    messageTextCustomization: "Message",
    messagePlaceholderCustomization: "Enter your message",
    leadsubmitButtonTextCustomization: "Enter your message",
  },

  allowTicketCollection: false,
  allowTicketFileAttachmentCollection: false,

  ticketFormCustomization: {
    ticketNameTextCustomization: "Fullname",
    ticketNamePlaceholderCustomization: "Enter your fullname",
    ticketEmailTextCustomization: "Email Address",
    ticketEmailPlaceholderCustomization: "Enter your email address",
    ticketTitleTextCustomization: "Title",
    ticketTitlePlaceholderCustomization: "Enter your the title of your issue",
    ticketMessageTextCustomization: "Message",
    ticketMessagePlaceholderCustomization: "Message",
    ticketPriorityTextCustomization: "Priority",
    ticketCategoryTextCustomization: "Category",
    ticketAttachmentTextCustomization: "Upload Attachment (Optional)",
    ticketsubmitButtonTextCustomization: "Create Ticket",
  },

  // Step 5: Bot Settings
  initialMessage: "Hi! How can I help you?",
  suggestedQuestions: ["What is your return policy?", "How do I track my order?"],
  chatbotPrivacy: "public",

  // Widget Bubble Appearance
  bubbleSize: "medium",
  bubbleShape: "circle",
  bubbleIcon: "",
  widgetWidth: "400px",
  widgetHeight: "550px",
  statusBubbleIcon: true,
  statusBubbleText: true,
  callToActionText: "Let's chat",

  //Tab Appearance
  HideTabIcon: false,
  HideTabLabel: false,
  HomeTabLabel: "Home",
  LivechatTabLabel: "Support",
  BotTabLabel: "Chat",

  actionButtons: [
    { text: "View Pricing", link: "#pricing" },
    { text: "Book a Demo", link: "#demo" },
    { text: "Documentation", link: "#docs" }
  ],
  actionFaq: [
    {
      question: "How does the billing work?",
      answer: "We offer flexible billing options including monthly and annual plans. You can upgrade, downgrade, or cancel anytime."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes! We offer a 30-day money-back guarantee for all subscription plans."
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! You can start with our 14-day free trial - no credit card required."
    }
  ],

  suggestedMessages: ["Tell me about pricing", "I need help", "Book a demo", "Contact sales"],
};

export default defaultFormData;
