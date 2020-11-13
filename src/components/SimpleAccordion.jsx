import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";


export default function SimpleAccordion() {  

  return (
    <div>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="header__dropdown-categories">Resources</p>
        </AccordionSummary>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/about">
            About
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/contact">
            Contact
          </Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
