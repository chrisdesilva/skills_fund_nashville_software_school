import logo from "../images/logo_nss.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = '69140c47-bb03-4a1b-b674-cc136fdea23d' // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = 'October 29, 2019'

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = { // term details section
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '10.76 - 11.69%',
    APRRange60: 'XX.XX - XX.XX%',
    interestOnly: [
        { // for multiple examples of interest only, add items to interestOnly array
            programName: '',
            APR36: '10.76 - 10.94%',
            financeCharge36: '$2,502.00',
            IOPayment36: '$77.13',
            FullMonthlyPayment36: '$327.36',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            IOPayment60: '$XX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$9,900',
            LoanExampleOFeeAmt: '$396',
            LoanExampleAmtPlusOFee: '$10,296',
            programLength: '6' // program length in months
        }
    ],
    immediateRepayment: [
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: '',
            APR36: '11.69%',
            financeCharge36: '$1,885.04',
            FullMonthlyPayment36: '$327.36',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$9,900',
            LoanExampleOFeeAmt: '$396',
            LoanExampleAmtPlusOFee: '$10,296'
        }
    ]
}

export const faq = { // faq section
    costOfLiving: false, // true if at least one program has cost of living included
    costOfLivingPrograms: '', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: true, // true if immediate repayment is an option
    multipleLoanLengths: false, // true if 36 and 60 month options are both available
    multipleLoanTypes: true, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    onlinePrograms: false, // true if at least one program is remote/online
    schoolHQState: 'WA',
    origFee: 0.04,

    // interest payment FAQ info
    exampleLoanAmount: '$9,900',
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APR36: '10.76 - 10.94%',
    APR60: 'XX.XX - XX.XX%',
    IOPayment36: '$77.13',
    IOPayment60: '$95.25',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "the Full Time Web Development, Part Time Web Development, and Full Time Front-End Web Design programs",
            maxAmount: "$9,900",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "the Data Science Bootcamp",
            maxAmount: "$10,000",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "the Data Analytics Bootcamp",
            maxAmount: "$6,000",
            col: false,
            colAmount: "$6,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Nashville Software School"

export const schoolURL = 'http://nashvillesoftwareschool.com/' // update with url of school's website

export const skfURL = 'https://nashvillesoftwareschool.skills.fund/' // update with Skills Fund url

export const headline = "Learn to Code at Nashville Software School" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} designs its programs to provide students a foundation in web development or data science. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving ? ' and cost of living' : ''} financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Choose between the Data Science, Data Analytics, Full Time Web Development, Part Time Web Development, and Full Time Front-End Web Design programs."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'nashvillesoftwareschool_contact'

export const GATracking = 'UA-68312423-1'

export const hubspotFormId = "bbc8425a-e207-472d-8ae3-2df59bb59ae1" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_nashvillesoftwareschool_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = '$10,000'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "Data Analytics Bootcamp",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKNSHDS19",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 6000,
            loanTerm36: true,
            loanTerm60: false,
            '0': { // interest-only 
                k: 8, 
                apr36: 10.94, 
                apr60: 12.51
            },
            '1': null // immediate repayment
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
        showLoanTypes: false, // true if both IR and IO are available
        locations: ["Metro 1", "Metro 2", "Metro 3"],
        metros: [ // list in same order as locations array above
          {
            location: "Metro 1",
            loanInfo: { // // match loanInfo to Program 1 above
              maxLoanAmt: 6000,
              loanTerm36: true,
              loanTerm60: false,
              '0': { 
                  k: 8, 
                  apr36: 10.94, 
                  apr60: 12.51
              },
              '1': null
            }
          }
        ]
    },
    {
        name: "Data Science Bootcamp",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKNASHDS17",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 10000,
            loanTerm36: true,
            loanTerm60: false,
            '0': { 
                k: 14, 
                apr36: 10.76, 
                apr60: 12.51
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro 1", "Metro 2"],
        metros: [
            {
              location: "Metro 1",
              loanInfo: { // match loanInfo to Program 2 loanInfo above
                maxLoanAmt: 10000,
                loanTerm36: true,
                loanTerm60: false,
                '0': { 
                    k: 14, 
                    apr36: 10.76, 
                    apr60: 12.51
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "Front-End Web Designer/Developer",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKNASHFR17",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 9900,
            loanTerm36: true,
            loanTerm60: false,
            '0': { 
                k: 8, 
                apr36: 10.94, 
                apr60: 12.51
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 9900,
                loanTerm36: true,
                loanTerm60: false,
                '0': { 
                    k: 8, 
                    apr36: 10.94, 
                    apr60: 12.51
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "Web Development Full-Time",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKNASHWEB1",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 9900,
            loanTerm36: true,
            loanTerm60: false,
            '0': { 
                k: 8, 
                apr36: 10.94, 
                apr60: 12.51
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 9900,
                loanTerm36: true,
                loanTerm60: false,
                '0': { 
                    k: 8, 
                    apr36: 10.94, 
                    apr60: 12.51
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "Web Development Part-Time",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKNSSWPT17",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 9900,
            loanTerm36: true,
            loanTerm60: false,
            '0': null,
            '1': {
              apr36: 11.69, 
              apr60: 12.55
          }
        },
        defaultLoanType: "1", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 9900,
                loanTerm36: true,
                loanTerm60: false,
                '0': null,
                '1': {
                    apr36: 11.69, 
                    apr60: 12.55
                }
              }
            }
          ]
    },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to $9,900 for Full-Time Web Development, Part-Time Web Development, or Front-End Web Design tuition, up to $10,000 for Data Science tuition, or up to $6,000 for Data Analytics tuition."

export const paymentTable = {
    headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
    data: [
        {
            name: "PROGRAM 1",
            tuition: "$13,495",
            col: "$6,000",
            max: "$19,495"
        },
        {
            name: "PROGRAM 2",
            tuition: "$16,495",
            col: "$6,000",
            max: "$22,495"
        },
        {
            name: "PROGRAM 3",
            tuition: "$13,495",
            col: "--",
            max: "$13,495"
        },
    ],
    show: false
}

// ***** END LOAN CALC TEXT INFO *****


// ***** Snippets for Netlify ***** 

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>

