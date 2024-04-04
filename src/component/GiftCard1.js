import React from 'react';
import { AccordionItem, AccordionHeader, AccordionBody, UncontrolledAccordion, Card, Row, Col, CardTitle, CardText } from 'reactstrap';

const accordionData = [
  { id: "1", title: "Electronics" },
  { id: "2", title: "Clothing" },
  { id: "3", title: "Books" },
];

const itemsData = {
  Electronics: [
    { id: 101, name: "Smartphone" },
    { id: 102, name: "Laptop" },
    { id: 103, name: "Tablet" },
  ],
  Clothing: [
    { id: 201, name: "T-shirt" },
    { id: 202, name: "Jeans" },
    { id: 203, name: "Dress" },
  ],
  Books: [
    { id: 301, name: "Fiction" },
    { id: 302, name: "Non-fiction" },
    { id: 303, name: "Science" },
  ],
};

const GiftCardPage1 = () => {
  return (
    <div>
      <GiftCardAccordion accordionData={accordionData} itemsData={itemsData}/>
    </div>
  );
}

export default GiftCardPage1;

export const GiftCardAccordion = ({ accordionData ,itemsData }) => {
    console.log(itemsData[accordionData[0].title])
  return (
    <UncontrolledAccordion stayOpen>
      {accordionData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader targetId={item.id}>{item.title}</AccordionHeader>
          <AccordionBody accordionId={item.id}>
            {(Array.isArray(itemsData[item.title])
              ? itemsData[item.title]
              : []
            ).map((item) => (
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle tag="h6"> {item.id}</CardTitle>
                      <CardText>
                        {item.name}
                      </CardText>
                    </Card>
                  </Col>
                </Row>
            ))}
          </AccordionBody>
        </AccordionItem>
      ))}
    </UncontrolledAccordion>
  );
}