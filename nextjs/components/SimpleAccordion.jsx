import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import headerStyles from "../styles/Header.module.css";

export default function SimpleAccordion() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (event, expanded) =>{
    setExpanded(expanded)
  }
  return (
    <div>
      <Accordion className={headerStyles.accordion} expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className={headerStyles.header__dropdown_categories}>Resources</p>
        </AccordionSummary>
        <AccordionDetails>
          <Link
            href="/about"
          >
            <a className={headerStyles.header__dropdown_subcategories}>
            About
            </a>
          </Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
