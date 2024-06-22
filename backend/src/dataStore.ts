import { FAQAnswers } from "./models/faqanswer";
import { FAQ } from "./models/faq";

interface DataStore {
    faqs : FAQ[],
    faqAnswers : FAQAnswers[]
  }
  
  const dataStore: DataStore = {
    faqs: [
        {
            question: "How do I make a payment?",
            id: 1
          },
          {
            question: "What payment methods do you accept?",
            id: 2
          },
          {
            question: "How do I check my transaction history?",
            id: 3
          },
          {
            question: "Can I cancel a transaction?",
            id: 4
          },
          {
            question: "Other",
            id: 5
          }
    ],
    faqAnswers: [

        {
            id : 1,
            answer :  "To make a payment, log in to your account and navigate to the 'Payments' section. Enter the recipient's details and the amount, then confirm the transaction.",
         },
         {
            id :  2, 
            answer : "We accept various payment methods including credit cards, debit cards, and online payment platforms. You can view all accepted payment methods in the 'Payment Options' section of our website.",
         },
         {
            id : 3, 
            answer: "You can check your transaction history by logging in to your account and navigating to the 'Transaction History' or 'Account Activity' section. Here, you can view all your past transactions.",
          },
          { id : 4,
            answer: "In general, once a transaction is initiated, it cannot be canceled. However, if you believe there has been an error or unauthorized transaction, please contact our customer support for assistance."
          }
    ],
  };
  
  export default dataStore;