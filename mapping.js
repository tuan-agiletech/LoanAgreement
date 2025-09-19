const handleDisbursement = (value) => value.map((item) => `${item[0]}; ${item[1]}`).join("\n")

const mappingByCode = (value) => ({
  [borrowerName]: getBorrowerName(value),
  [disclosureDate]: getCurrentDate(value),
  [loanAmount]: getLoanAmount(value),
  [variableRate]: getVariableRate(value),
  [feeValue]: getFeeValue(value),
  [initialValue]: getInitialValue(value),
  [defPayRate]: getDefPayRate(value),
  [mortgagorName]: getFirstMortgagorValue(value).flatMap((item) => item[0]).join(" and "),
  [securityAddress]: getFirstMortgagorValue(value).flatMap((item) => item[1]).join(" and "),
  [primaryLoanAmount]: getPrimaryLoanAmount(value),
  [primaryLender]: getPrimaryLender(value),
  [loanPurpose]: getLoanPurpose(value),
  [disbursement]: getDisbursements(value),
  [referralAmount]: getReferralAmount(value),
  [referrer]: getReferralName(value),
  [defaultRate]: getDefaultRate(value),
  [specialConditionPrior]: getSpecialCondPrior(value),
  [specialConditionDuring]: getSpecialCondDuring(value)
})

const createHandleRenderRule = (isShouldRender, text) => {
  return (value, node) => {
    const siblings = getSiblingsToEnd(node);
    siblings.forEach((sib) => {
      sib.remove();
    });
    if (!isShouldRender(value)) {
      node.parentElement.remove();
      return;
    }
    node.textContent = text;
    node.style.color = "black";
    node.style.fontWeight = "normal";
  };
};

const handleMappingSecurity01 = (val, node) =>
  createHandleRenderRule(
    isHaveFirstMortgage,
    getFirstMortgagorValue(val)
      .map((item) => `First registered mortgage by ${item[0]} over ${item[1]}`)
      .join("\n")
  )(val, node);

const handleMappingSecurity02 = (val, node) =>
  createHandleRenderRule(
    isHaveSecondMortgage,
    getSecondMortgagorValue(val)
      .map((item) => `Second registered mortgage by ${item[0]} over ${item[1]}`)
      .join("\n")
  )(val, node);

const handleMappingPrimaryLoan01 = (val, node) =>
  createHandleRenderRule(
    isHaveSecondMortgage,
    `Loan for $${getPrimaryLoanAmount(val)} from ${getPrimaryLender(
      val
    )} and secured by a first registered mortgage over the mortgaged property.  This is the primary loan.`
  )(val, node);

const handleMappingPrimaryLoan02 = (val, node) =>
  createHandleRenderRule(isNotHaveSecondMortgage, "Not applicable")(val, node);

const handleLoanPurpose01 = (val, node) =>
  createHandleRenderRule(
    isNotLoanPurposeCodeABS133,
    `You have told us that the loan will be used for ${getLoanPurpose(val)}`
  )(val, node);

const handleLoanPurpose02 = (val, node) =>
  createHandleRenderRule(
    isLoanPurposeCodeABS133,
    "Your loan must be used to reduce the balance of the primary loan. The amount of credit will be paid to the lender of the primary loan on the loan date."
  )(val, node);

const handleDefaultInterestRate = (val, node) =>
  createHandleRenderRule(
    () => true,
    `The default interest rate as at the disclosure date is: ${getDefaultRate(
      val
    )} % per annum.`
  )(val, node);

const handleSpecialCondition01 = (val, node) =>
  createHandleRenderRule(
    isHaveSecondMortgage,
    `We are satisfied that the amount owing under the primary loan does not exceed $${getPrimaryLoanAmount(
      val
    )} and that an acceptable priority arrangement is in place. `
  )(val, node);

const handleMappingDisbursement = (val, node) =>
  createHandleRenderRule(
    () => true,
    getDisbursements(val)
      .map((item) => `${item[0]}; ${item[1]}`)
      .join("\n")
  )(val, node);