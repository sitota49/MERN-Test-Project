import { Accordion, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledAccordion = styled(Accordion)`
  margin-top: 20px;
`;

const StyledAccordionItem = styled(Accordion.Item)`
  .accordion-button {
    font-weight: 700;
    color: #157347 !important;
    border: none;
  }

  .accordion-button:not(.collapsed) {
    color: #fff !important;
    background-color: #157347 !important;
  }

  .accordion-button:link,
  .accordion-button:visited,
  .accordion-button:hover,
  .accordion-button:active {
    background-color: #157347 !important;
    color: #fff !important;
    text-decoration: none !important;
    border: hidden !important;
    border-color: #fff !important;
    box-shadow: 0px !important;
    font-weight: 700;
  }

  .accordion-button:focus {
    z-index: 3;
    border-color: #fff !important;
    outline: 0;
    box-shadow: 0 0 0 0.1rem #eee !important;
  }
`;

const StyledAccordionHeader = styled(Accordion.Header)`
  text-decoration: none;
`;

const StyledAccordionBody = styled(Accordion.Body)`
  padding-bottom: 0;
  background-color: #ededed;
`;

const StyledAddButton = styled(Button)`
  float: right;
`;

export {
  StyledAccordion,
  StyledAccordionBody,
  StyledAccordionHeader,
  StyledAddButton,
  StyledAccordionItem,
};
