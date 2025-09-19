const isHaveFirstMortgage = (value) => getFirstMortgagor(value).length > 0;
const isHaveSecondMortgage = (value) => getSecondMortgagor(value).length > 0;
const isNotHaveSecondMortgage = (value) => getSecondMortgagor(value).length === 0;
const isLoanPurposeCodeABS133 = (value) => getLoanPurposeCode(value).toLowerCase().replace(" ", "") === "abs-133";
const isNotLoanPurposeCodeABS133 = (value) => getLoanPurposeCode(value).toLowerCase().replace(" ", "") !== "abs-133";

const conditionRules = [primaryLoan01, primaryLoan02, security01, security02, loanPurpose01, loanPurpose02, defaultInterestRate01, specialCondition01, important01, end, borrowerNameSign]