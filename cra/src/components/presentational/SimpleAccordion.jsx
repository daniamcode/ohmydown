import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

export default function SimpleAccordion() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (event, expanded) =>{
    setExpanded(expanded)
  }
  return (
    <div>
      <Accordion className="accordion" expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="header__dropdown-categories">Resources</p>
        </AccordionSummary>
        <AccordionDetails>
          <Link
            className="header__dropdown-subcategories"
            to="/about"
            onClick={handleChange}
          >
            About
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/contact" onClick={handleChange}>
            Contact
          </Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
