import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Cards from "./components/contactCards";
import { render as RENDER } from "react-dom";
import React from "react";

try {
	const navCont = document.querySelector("#navbar_container");
	navCont ? RENDER(<Navbar />, navCont) : false;
	const footerCont = document.querySelector("#footer_container");
	footerCont ? RENDER(<Footer />, footerCont) : false;
	const faqCont = document.querySelector("#faq_container");
	faqCont ? RENDER(<FAQ />, faqCont) : false;
	const contantCont = document.querySelector("#contact_cards");
	contantCont ? RENDER(<Cards />, contantCont) : false;
} catch (err) {
	console.log(err);
}
