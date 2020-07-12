import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 0px 20% 20px 20%;
	margin-bottom: 50px;
	margin-left: 5%;
	@media (max-width: 600px) {
		padding: 0px 5% 20px 5%;
		margin-left: 0;
	}
`;

const H1 = styled.h1`
	font-size: 3em;
	font-weight: 800;
	margin-bottom: 30px;
	margin-top: 70px;
	@media (max-width: 600px) {
		font-size: 1.5em;
	}
`;

const P = styled.p`
	font-size: 1.4em;
	color: #374c58;
	line-height: 35px;
	margin-bottom: 30px;
	@media (max-width: 600px) {
		font-size: 1em;
		line-height: 25px;
	}
`;

const Description = (props) => {
	return (
		<Wrapper>
			{props.content ? (
				<div dangerouslySetInnerHTML={{ __html: props.content }}></div>
			) : (
				<div>
					<H1>What is a project brief?</H1>
					<P>A Project Brief is that essential document, which defines the primary client's requirements for the project.</P>
					<P>
						Typically, any project starts with this document. An executor sends the brief to the customer, who should concretize the project. Based
						on the data provided, you initiate the project realization run-up or further discussion on the details.
					</P>
					<P>
						A good brief should contain all the key information about the client's project and businesses an executor needs to evaluate and proceed
						with the project development.
					</P>
					<P>
						You should realize — there's no universal brief template. Each type of project— design, web development, mobile app development, PR,
						etc. - requires different briefs. Yet, the general brief structure stays the same in most cases. It's the niche-specific elements that
						vary.
					</P>
					<P>
						When outlining briefs, the amount of required data can vary significantly as well. In certain cases a few very short and general
						phrases are sufficient (when the brief's just 1-2 pages long), while in some other cases all the major project points should be set out
						in detail (then the brief can stretch up to 10-20 pages).
					</P>
					<P>
						Here's a quick winning formula for briefs: at the beginning 5-6 most important questions, aimed at getting the crucial information you
						cannot start without; next — detailed, additional information that may be required during the work phase.
					</P>
					<H1>How to write a project brief?</H1>
					<P>
						The most challenging thing to do is to develop a proposal for a client you don't know much about. If you dare do so, you're likely to
						end up with a generic document that won't be impactful. You should, therefore, take some time to research information about your
						potential client. Get to know their business, target audience, competitors, and the potential of their industry. Because it's a web
						development proposal you're trying to come up with, also check the websites of their competitors.
					</P>
					<P>
						Conduct an analytical background check on these websites to know which ones have the highest conversion rates. Understanding the client
						will also make it easier for you to decide on the tone of voice to use in the website design proposal PDF.
					</P>
					<H1>SuperOkay and project brief templates</H1>
					<P>
						The most challenging thing to do is to develop a proposal for a client you don't know much about. If you dare do so, you're likely to
						end up with a generic document that won't be impactful. You should, therefore, take some time to research information about your
						potential client. Get to know their business, target audience, competitors, and the potential of their industry. Because it's a web
						development proposal you're trying to come up with, also check the websites of their competitors.
					</P>
					<P>
						Conduct an analytical background check on these websites to know which ones have the highest conversion rates. Understanding the client
						will also make it easier for you to decide on the tone of voice to use in the website design proposal PDF.
					</P>
				</div>
			)}
		</Wrapper>
	);
};

export default Description;
