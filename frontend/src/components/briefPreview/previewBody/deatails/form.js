


const details = [

    {
        id: 1,
        title: "What is your company’s name?",
        type: "text",
        answer: "Acme LTD"
    },

    {
        id: 2,
        title: " What does your business do?",
        type: "text",
        answer: "We do online delivery for toy store from all over Europe"
    },
    {
        id: 3,
        title: "What are the main benefits of your product/ service?",
        type: "text",
        answer: "Acme LTD has the fastest online delivery tools in the industry.Thanks to your superior technology, we are able to deliver online orders 40 faster than any competitor."
    },

    {
        id: 4,
        title: "Where are your customers based ?",
        type: "text",
        answer: "Europe"


    },

    {
        id: 5,
        title: "How are you seen(or how do you want to be seen) in the market place ? ",
        type: "text",
        answer: "We don’t yet have a strong presence in the western european market and want to improve that through good digital marketing"
    },
    {
        id: 6,
        title: "What services do you need for this project?",
        type: "multiple checkbox",
        options: [{ value: "Marketing Strategy", isChecked: false, id: 1 },
        { value: "Media Buying", isChecked: false, id: 2 },
        { value: "Grafic Design", isChecked: false, id: 3 },
        { value: "Social Media Campaigns", isChecked: false, id: 4 },
        { value: "Ongoing Maintenance", isChecked: false, id: 5 }],
        answer: [{ value: "Marketing Strategy", isChecked: true, id: 34 },
        { value: "Media Buying", isChecked: true, id: 22 }]
    },
    {
        id: 7,
        title: "Is your product launched?",
        type: "button",
        options: ["Yes, it is launched", "Not Launched", "I'm not sure"],
        answer: "Yes, it is launched"
    },
    {
        id: 8,
        title: "Do you have any resources you think would help?",
        type: "upload",
        answer: [{
            name: "redux-book.pdf",
            size: 1125106,
            type: "application/pdf"
        },
        {
            name: "SQL-Cheat-Sheet.pdf",
            size: 301139,
            type: "application/pdf"
        }]
    }]

export default details