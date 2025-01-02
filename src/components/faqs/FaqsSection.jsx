import React from 'react'
import { Accordion, Card } from 'react-bootstrap';

function FaqsSection() {
    const Data = [
        {
          question: "What services does Novanex Solutions offer?",
          answer: "We provide services such as Content Creation, Web Development, Branding and Advertising, Graphic Designing, Digital Marketing, and UI/UX design."
        },
        {
          question: "How can I get started with Novanex Solutions?",
          answer: "You can reach out to us via our contact page, email, or phone number to discuss your requirements and initiate the process."
        },
        {
          question: "Can I customize the services according to my business needs?",
          answer: "Absolutely! We specialize in delivering tailored solutions to meet the unique needs of your business."
        },
        {
          question: "What industries does Novanex Solutions serve?",
          answer: "We cater to a variety of industries, including technology, education, healthcare, retail, hospitality, and more."
        },
        {
          question: "Does Novanex Solutions offer ongoing support after project completion?",
          answer: "Yes, we provide ongoing support and maintenance to ensure the success of your projects."
        },
        {
          question: "What is the timeline for completing a project with Novanex Solutions?",
          answer: "Timelines vary depending on the project's complexity. We ensure efficient delivery while maintaining high quality."
        },
        {
          question: "How experienced is the team at Novanex Solutions?",
          answer: "Our team consists of skilled professionals with years of experience in their respective fields, ensuring top-notch service delivery."
        },
        {
          question: "Does Novanex Solutions assist with branding and advertising strategies?",
          answer: "Yes, we help create and execute effective branding and advertising strategies tailored to your business goals."
        },
        {
          question: "Can Novanex Solutions handle large-scale web development projects?",
          answer: "Yes, we have the expertise and resources to manage large-scale web development projects efficiently."
        },
        {
          question: "How does Novanex Solutions ensure the quality of its services?",
          answer: "We follow a stringent quality assurance process and keep our clients involved at every stage of the project for feedback and improvements."
        },
      ];
      
  return (
    <div>
         <Accordion defaultActiveKey="0">
      {Data.map((faq, index) => (
         <div>
             <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
            {faq.question}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index.toString()}>
            <Card.Body>{faq.answer}</Card.Body>
          </Accordion.Collapse>
         </div>
      ))}
    </Accordion>
    </div>
  )
}

export default FaqsSection;