import React from "react";
import EmailInput from "../briefHead/EmailInput"
import styled from "styled-components";
import TryButton from "./TryButton";
// import axios from 'axios';


//style-components
const PreviewWrapper = styled.div`
    // line-height: 1.6;
    border: solid 1px #dfe0e5;
    height: auto;
    width: 50vw;
    padding: 65px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media(max-width : 1090px){
        padding: 5px 45px 45px;
        width: 54vw;
    };
    @media(max-width : 900px){
        width: 53vw;
    };
    @media(max-width : 800px){
        padding: 10px;
        width: 80vw;
       
    };
    @media(max-width : 600px){
        padding: 10px;
       
    };
`;
const PreviewEnd = styled.div`

    display: flex;
    flex-direction :column;
    justify-content:center;
    align-items:center;
    border-bottom: solid 1px #dfe0e5;
    & h2{
        color: #34c749;
    };
    @media(max-width: 600px){
        text-align: center;
    }
`;
export const Title2 = styled.h2`
    font-size: 3em;
    font-weight: 600;
    color: #232733;
    margin:40px 0px;
    @media (max-width: 600px){
        font-size: 2.2em;
    };
`;
const P = styled.p`
    line-height: 25px;
    margin: 16px 0px;
`;
const Header3 = styled.h3`
    margin: 19px 0px;
`;

const BriefPrieview = (props) => {
    // const [templates, setTemplates] = useState([]);
    // useEffect(() => {
    //     axios.get('/users/templates')
    //         .then(res => {
    //             console.log(res.data)
    //             setTemplates(res.data)
    //         })


    // }, [])

    //props to send to the EmailInput for the Link router
    let propsToSend = {
        url: props.url,
        history: props.history
    }

    return (

        < PreviewWrapper >
            <Title2>Digital Marketing Brief <br />
            Questionnaire</Title2>

            <Header3>What is your company's name?</Header3>
            <P>Your full business name </P>

            <Header3>What do you do? </Header3>
            <P>A brief explanation of what your business does, and who you do it far. Be as specific as you can; As a
            suggestion, can you frame what you do in the following sentence? We do __________(the thing you
                do) for  __________(your target customer)</P>

            <Header3>What are the main benefits of your product/service</Header3>
            <P>Does it save your customers money? Does it help them increase ROI? Think about how exactly you’re
                helping your target audience. </P>

            <Header3>Where are your customers based?</Header3>
            <P>Where are you based? Where are your customers based? Are there areas/regions/countries where
                you don’t operate at the moment. But you’d like to in the future? </P>

            <Header3>How are you seen (or how do you want to be seen) in the market place? </Header3>
            <P>Use bullet points if you wish, and be as objective as possible. How are you seen at present? If you
            ranked your competitors in order of best to worst, where would you put yourselves?
            Where do you think your tarqet customers would put you, based on your current brand and
                reputation? Is your brand in line with where you want to be on the list?  </P>

            <Header3>Where do you want to go?</Header3>
            <P>What are the mid and long-term goal for the business, and how will you achieve them?
            For example: What are your growth targets for the next three years? (turnover and profit) What will
            the business look like when you get there? How many staff will there be. how much business will you
            be doing Will this be achieved by attracting new customers? Maybe you want to do it by attracting a
            different type of customer or by selling something new or simply selling more existing clients do
            you need to improve effciency to help you get there?
            Where do you think your target customers would put you, based on your current brand and
                reputation? Is your brand in line with where you want to be on that list?  </P>

            <Header3>What’s the personality of your company? </Header3>
            <P>Again, use bullet points if you want to, and try to put yourself in your customer’s shoes. What image
            do you have at the moment, do you think? What’s the image you want the business to portray?
            What sets you apart from your competition ? Are you friendly and approachable? Professional and
                efficient? Big or small?  </P>

            <Header3>Who are your competitors? </Header3>
            <P>Give us a list of maybe 3-6 competitors... The name of the competitor company and their website
            address would be useful. Tell us in a couple of sentences what they’re like, and how you compare to
            them.
            For instance:ABC Consultants
            www.abc-consultants.co.ukWell-established local company, quite good knowledge but poor
            customer service. Invest quite a lot in their brand and marketing, but we think we affix a better
            service then they do, and we have more knowledge and experience in X.  </P>

            <PreviewEnd>
                <h2 style={{ margin: "20px 0px" }}>+18 more questions</h2>
                <P>Start this brief questionnaire by entering your email address below. </P>
                <EmailInput {...propsToSend} />
                <TryButton first="100%free" />
            </PreviewEnd>
        </PreviewWrapper >

    )
}

export default BriefPrieview;