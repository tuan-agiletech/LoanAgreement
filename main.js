const value = {
  "Package": {
    "Content": {
      "Application": {
        "Address": [
          {
            "@AustralianPostCode": "3377",
            "@AustralianState": "VIC",
            "@Suburb": "Ararat",
            "@UniqueID": "addr-secu-R29270",
            "Standard": {
              "@StreetName": "XXXton",
              "@StreetNumber": "7",
              "@StreetType": "Street",
              "@Unit": ""
            }
          },
          {
            "@AustralianPostCode": "3377",
            "@Suburb": "Ararat",
            "@UniqueID": "addr-mail-643986",
            "NonStandard": {
              "@Line1": "XXXXXrge Rd",
              "@Line2": ""
            }
          },
          {
            "@AustralianPostCode": "3377",
            "@Suburb": "Ararat",
            "@UniqueID": "addr-resi-643986",
            "NonStandard": {
              "@Line1": "XXXXXrge Rd",
              "@Line2": ""
            }
          }
        ],
        "Insurance": [
          {
            "@InsuranceType": "Building Insurance",
            "@InsuredAmount": 326444.0,
            "@UniqueID": "loan-insu-11786479102",
            "Premium": {}
          }
        ],
        "LoanDetails": [
          {
            "@AmountRequested": 247000.0,
            "@EstimatedSettlementDate": "2022-01-06",
            "@ProductName": "Fixed - Interest Only",
            "@ProposedAnnualInterestRate": 2.89,
            "@SequenceNumber": 1,
            "@UniqueID": "loan-appl-643986L7.1",
            "AccountNumber": {
              "@AccountNumber": "643986L7.1"
            },
            "FeaturesSelected": {
              "@Offset": "No"
            },
            "EquityRelease":{
              "Amount": {
                "@LumpSum": 900000,
                "@CalculateAsPercentage": 24
              }
            },
            "LendingPurpose": [{
              "@ABSLendingPurpose": "Refinance existing home loans - Loans held with other financial institutions",
              "@ABSLendingPurposeCode": "ABS-133"
          }
      ],
            "FundsDisbursement": [
              {
                "@Amount": 50000.0,
                "@CompanyName": "Elvis \u0026 Priscilla Presley, Gracelands Home Loan ID 207864501"
            }, {
                "@Amount": 15000.0,
                "@CompanyName": "Colonel Parker BSB 555-321 A/c 789789789"
            }
            ],
            "LoanPurpose": {
              "@NCCPStatus": "Regulated",
              "@PrimaryPurpose": "Investment Residential"
            },
            "ProposedRepayment": {
              "@AnniversaryDate": "2022-02-01",
              "FromAccount": {
                "@AccountNumber": ""
              },
              "RegularRepayment": [
                {
                  "@Amount": 594.86,
                  "@Frequency": "Monthly",
                  "@UniqueID": "loan-appl-643986L7.1-repay1"
                },
                {
                  "@Amount": 1493.94,
                  "@Frequency": "Monthly",
                  "@UniqueID": "loan-appl-643986L7.1-repay2"
                }
              ]
            },
            "RateComposition": [
              {
                "@TotalInterestRate": 2.89,
                "@UniqueID": "loan-appl-643986L7.1-rate1"
              },
              {
                "@TotalInterestRate": 3.12,
                "@UniqueID": "loan-appl-643986L7.1-rate2"
              }
            ],
            "Term": {
              "@TotalInterestAmount": 154536.51,
              "@TotalRepayments": 276,
              "@TotalRepaymentsAmount": 648536.51,
              "@TotalTermDuration": 276,
              "@TotalTermUnits": "Months",
              "DistinctLoanPeriod": [
                {
                  "@InterestType": "Fixed Rate",
                  "@PaymentType": "Interest Only",
                  "@SequenceNumber": 1,
                  "@x_RateComposition": "loan-appl-643986L7.1-rate1",
                  "Duration": {
                    "@Length": 12,
                    "@Units": "Months"
                  },
                  "Repayment": [
                    {
                      "@x_Repayment": "loan-appl-643986L7.1-repay1"
                    }
                  ]
                },
                {
                  "@InterestType": "Variable",
                  "@PaymentType": "Principal and Interest",
                  "@SequenceNumber": 2,
                  "@x_RateComposition": "loan-appl-643986L7.1-rate2",
                  "Repayment": [
                    {
                      "@x_Repayment": "loan-appl-643986L7.1-repay2"
                    }
                  ]
                }
              ]
            }
          }
        ],
        "NonRealEstateAsset": [
          {
            "@Type": "Financial Asset",
            "FinancialAsset": {
              "@Description": "Shortfall Account",
              "@Type": "Savings Account",
              "AccountNumber": {
                "@AccountNumber": ""
              }
            }
          }
        ],
        "Overview": {
          "@ExpectedSettlementDate": "2022-01-06",
          "@FastRefinance": "No",
          "@LenderApplicationReferenceNumber": "loan-appl-643986L7.1",
          "TermsAndConditions": [{
            "@TermsDescription": "Existing loan to be fully repaid and discharged at settlement. ",
            "@TermsName": "Pre Settlement"
        }, {
            "@TermsDescription": "In the event that Elvis Presley dies prior to Priscilla Presley, the loan is not repayable until the first of the following occur:\n\n1.\tthe date on which the mortgaged property is sold or transferred either in full or in part unless it is transferred in full to Priscilla Presley;\n2.\tthe date on which an authority resumes or compulsorily acquires the whole or part of the mortgaged property - Priscilla Presley must notify us (in writing) as soon as Priscilla Presley has any notice of such a proposal;\n3.\tthe date which is 12 months after Priscilla Presley dies; or\n4.\tthe date which is 6 months after Priscilla Presley moves into an aged care facility;\n5.\tthe date on which the final repayment is due as a result of an event of default occurring;\n6.\tthe date on which the whole of the amount you owe us becomes payable for some other reason; and\n7.\tsuch other date which we agree with Priscilla Presley.\n",
            "@TermsName": "Pre Settlement"
        }
    ]
        },
        "PersonApplicant": [
          {
            "@ApplicantType": "Borrower",
            "@PrimaryApplicant": "Yes",
            "@UniqueID": "mmbr-borr-643986",
            "Contact": {
              "CurrentAddress": {
                "@x_MailingAddress": "addr-mail-643986",
                "@x_ResidentialAddress": "addr-resi-643986"
              },
              "EmailAddress": [
                {
                  "@Email": "rboissezon@xyz.com.au"
                }
              ],
              "Mobile": {
                "@Number": "00000013 405"
              }
            },
            "DocumentationInstructions": {
              "@Method": "eSign"
            },
            "PersonName": {
              "@FirstName": "XXXsie",
              "@MiddleNames": "",
              "@Surname": "XXith"
            }
          },
          {
            "@ApplicantType": "Borrower",
            "@PrimaryApplicant": "No",
            "@UniqueID": "mmbr-borr-643986",
            "Contact": {
              "CurrentAddress": {
                "@x_MailingAddress": "addr-mail-643986",
                "@x_ResidentialAddress": "addr-resi-643986"
              },
              "EmailAddress": [
                {
                  "@Email": "rboissezon+1@xyz.com.au"
                }
              ],
              "Mobile": {
                "@Number": "00000013 407"
              }
            },
            "DocumentationInstructions": {
              "@Method": "eSign"
            },
            "PersonName": {
              "@FirstName": "YYYsie",
              "@MiddleNames": "",
              "@Surname": "YYith"
            }
          },
          {
            "@ApplicantType": "Borrower",
            "@PrimaryApplicant": "No",
            "@UniqueID": "mmbr-borr-643987",
            "Contact": {
              "CurrentAddress": {
                "@x_MailingAddress": "addr-mail-643986",
                "@x_ResidentialAddress": "addr-resi-643986"
              },
              "EmailAddress": [
                {
                  "@Email": "rboissezon+2@xyz.com.au"
                }
              ],
              "Mobile": {
                "@Number": "00000013 408"
              }
            },
            "DocumentationInstructions": {
              "@Method": "eSign"
            },
            "PersonName": {
              "@FirstName": "XYZsie",
              "@MiddleNames": "",
              "@Surname": "XYZith"
            }
          },
          {
            "@ApplicantType": "Borrower",
            "@PrimaryApplicant": "No",
            "@UniqueID": "mmbr-borr-643988",
            "Contact": {
              "CurrentAddress": {
                "@x_MailingAddress": "addr-mail-643986",
                "@x_ResidentialAddress": "addr-resi-643986"
              },
              "EmailAddress": [
                {
                  "@Email": "rboissezon+3@xyz.com.au"
                }
              ],
              "Mobile": {
                "@Number": "00000013 409"
              }
            },
            "DocumentationInstructions": {
              "@Method": "eSign"
            },
            "PersonName": {
              "@FirstName": "ZSSsie",
              "@MiddleNames": "",
              "@Surname": "XFFith"
            }
          },
          {
            "@ApplicantType": "Borrower",
            "@PrimaryApplicant": "No",
            "@UniqueID": "mmbr-borr-643989",
            "Contact": {
              "CurrentAddress": {
                "@x_MailingAddress": "addr-mail-643986",
                "@x_ResidentialAddress": "addr-resi-643986"
              },
              "EmailAddress": [
                {
                  "@Email": "rboissezon+4@xyz.com.au"
                }
              ],
              "Mobile": {
                "@Number": "00000013 409"
              }
            },
            "DocumentationInstructions": {
              "@Method": "eSign"
            },
            "PersonName": {
              "@FirstName": "XxXZsie",
              "@MiddleNames": "",
              "@Surname": "XZWQYZith"
            }
          }
        ],
        "RealEstateAsset": [
          {
            "@ToBeUsedAsSecurity": "Yes",
            "@x_Address": "addr-secu-R29270",
            "Insurance": [
              {
                "@x_Insurance": "loan-insu-11786479102"
              }
            ],
            "PercentOwned": {
              "@Proportions": "Equal",
              "Owner": [
                {
                  "@x_Party": "mmbr-borr-643986"
                }
              ]
            },
            "Residential": {},
            "Encumbrance": [{
                    "@Description": "Mortgage",
                    "@EncumbranceType": "Mortgage",
                    "@RegisteredNumber": "elid3436",
                    "@Priority": "Second Mortgage",
                    "@PriorityAmount": 500000,
                    "InFavourOf": [{
                            "@Name": "CBA"
                        }
                    ]
                }
            ],
            "Title": [
              {
                "@Block": "",
                "@Folio": "516",
                "@Lot": "",
                "@TenureType": "Other Title",
                "@TitleReference": "",
                "@Volume": "XX48"
              }
            ]
          }
        ],
        "SalesChannel": {
          "Commission": [{
            "@CommissionAmount": 4000.0,
            "@ThirdPartyReferee": "Yes"
        }
        ],
        "LoanWriter": {
            "@FirstName": "Donald",
            "@Surname": "Trump"
        }
        },
        "Summary": {
          "Fee": [
            {
              "@Amount": 330.0,
              "@Description": "ESTABLISHMENT FEE",
              "@Type": "Establishment Fee"
            },
            {
              "@Amount": 520.0,
              "@Description": "VALUATION Fee",
              "@Type": "Valuation Fee"
            }
          ]
        }
      }
    },
    "Instructions": {
      "ApplicationInstructions": {
        "Submit": {
          "@AssessmentType": "Full",
          "@IsAccountVariation": "No",
          "@IsResubmission": "No"
        }
      }
    },
    "Publisher": {
      "@CompanyName": "Police Financial Services Limited",
      "@ContactName": "Adrian Theuma",
      "@Email": "atheuma@xyz.com.au",
      "@LIXICode": "FMSMS1"
    },
    "Recipient": [
      {
        "@Description": "System description",
        "@LIXICode": "FMSMS1"
      }
    ],
    "SchemaVersion": {
      "@LIXITransactionType": "DAS",
      "@LIXIVersion": "2.2.47"
    }
  }
}

const input = document.getElementById("upload");
const previewDocx = document.getElementById("docxPreview__preview");
const sampleDocx = document.getElementById("docxPreview__sample");

input.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const arrayBuffer = await file.arrayBuffer();

  const tempContainer = document.createElement("div");

  await window.docx.renderAsync(arrayBuffer, tempContainer, null, {
    className: "docx",
    inWrapper: true,  
    ignoreLastRenderedPageBreak: true
  });

  previewDocx.appendChild(tempContainer.cloneNode(true));
  sampleDocx.appendChild(tempContainer.cloneNode(true));
});

console.log('Borrower Name:', window.getBorrowerName(value));
console.log('Disclosure Date:', window.getDisclosureDate());
console.log('Loan Amount:', window.getLoanAmount(value));
console.log('Variable Rate:', window.getVariableRate(value));
console.log('Establishment Fee:', window.getEstablishmentFee(value));
console.log('Valuation Fee:', window.getValuationFee(value));
console.log('Total Fees:', window.getTotalFees(value));
console.log('Total And Charges Fee:', window.getTotalAndChargesFee(value));
console.log('Initial Value:', window.getInitialValue(value));
console.log('Def Pay Rate:', window.getDefPayRate(value));
console.log('First Mortgagor:', window.getFirstMortgagor(value));
console.log('Second Mortgagor:', window.getSecondMortgagor(value));
console.log('First Mortgagor Value:', window.getFirstMortgagorValue(value));
console.log('Second Mortgagor Value:', window.getSecondMortgagorValue(value));
console.log('Primary Loan Amount:', window.getPrimaryLoanAmount(value));
console.log('Primary Lender:', window.getPrimaryLender(value));
console.log('Loan Purpose Code:', window.getLoanPurposeCode(value));
console.log('Loan Purpose:', window.getLoanPurpose(value));
console.log('Disbursements:', window.getDisbursements(value));
console.log('Default Rate:', window.getDefaultRate(value));
console.log('Referral Amount:', window.getReferralAmount(value));
console.log('Referral Name:', window.getReferralName(value));
console.log('Special Condition Prior:', window.getSpecialCondPrior(value));
console.log('Special Condition During:', window.getSpecialCondDuring(value));