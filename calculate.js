const containerValue = (value) => value.Package;
const getCurrentDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

const borrowerPersonApplicantValue = (value) =>
  containerValue(value).Content.Application.PersonApplicant;
const loanDetailValue = (value) =>
  containerValue(value).Content.Application.LoanDetails[0];
const summaryFeeValue = (value) =>
  containerValue(value).Content.Application.Summary.Fee;
const realEstateAssetValue = (value) =>
  containerValue(value).Content.Application.RealEstateAsset.filter(
    (re) => re?.["@ToBeUsedAsSecurity"].toLowerCase() === "yes"
  );
const realEstateAssetAddressValue = (value) =>
  containerValue(value).Content.Application.Address;
const salesChannelValue = (value) =>
  containerValue(value).Content.Application.SalesChannel;
const overviewValue = (value) =>
  containerValue(value).Content.Application.Overview;

const isPrimaryBorrower = (value) =>
  value["@PrimaryApplicant"].toLowerCase() === "yes";
const borrowerNameMapping = (value) =>
  `${value.PersonName["@FirstName"] ?? ""} ${
    value.PersonName["@MiddleNames"] ?? ""
  } ${value.PersonName["@Surname"] ?? ""}`
    .replace(/\s+/g, " ")
    .trim();
const addressRealEstateMapping = (value) =>
  !value
    ? ""
    : value.Standard
    ? `${value.Standard["@Unit"] ? value.Standard["@Unit"] + " " : ""}${
        value.Standard["@StreetNumber"]
      } ${value.Standard["@StreetName"]} ${value.Standard["@StreetType"]}, ${
        value["@Suburb"]
      } ${value["@AustralianState"] || ""} ${value["@AustralianPostCode"]}`
    : `${value.NonStandard["@Line1"]}${
        value.NonStandard["@Line2"] ? " " + value.NonStandard["@Line2"] : ""
      }, ${value["@Suburb"]} ${value["@AustralianState"] || ""} ${
        value["@AustralianPostCode"]
      }`.replace(/\s+/g, " ");

const findVariableRate = (value) =>
  value?.["@InterestType"].toLowerCase() === "variable";

// Value Mappings
const getBorrowerName = (value) =>
  borrowerPersonApplicantValue(value)
    .filter(isPrimaryBorrower)
    .map(borrowerNameMapping)
    .join(" and ");
const getLoanAmount = (value) => loanDetailValue(value)["@AmountRequested"];
const getVariableRate = (value) => {
  const variableTerm = (
    loanDetailValue(value)?.Term?.DistinctLoanPeriod ?? []
  ).find(findVariableRate);
  const variableTermUniqueId = variableTerm?.["@x_RateComposition"];
  const variableRate = loanDetailValue(value)?.RateComposition?.find(
    (rate) => rate["@UniqueID"] === variableTermUniqueId
  );
  return variableRate?.["@TotalInterestRate"] ?? 0;
};
const getEstablishmentFee = (value) =>
  summaryFeeValue(value).find(
    (fee) => fee["@Description"].toLowerCase() === "establishment fee"
  )?.["@Amount"] ?? 0;
const getValuationFee = (value) =>
  summaryFeeValue(value).find(
    (fee) => fee["@Description"].toLowerCase() === "valuation fee"
  )?.["@Amount"] ?? 0;
const getTotalFees = (value) =>
  getValuationFee(value) + getEstablishmentFee(value);
const getTotalAndChargesFee = (value) => getTotalFees(value) + 500;
const getInitialValue = (value) =>
  loanDetailValue(value)?.EquityRelease?.Amount?.["@LumpSum"] ?? 0;
const getDefPayRate = (value) =>
  loanDetailValue(value)?.EquityRelease?.Amount?.["@CalculateAsPercentage"] ??
  0;
const getFirstMortgagor = (value) => {
  const realEstateAssets = realEstateAssetValue(value);
  return realEstateAssets.filter(
    (re) => Array.isArray(re?.Encumbrance) && re.Encumbrance.length === 0
  );
};
const getFirstMortgagorValue = (value) => {
  const firstMortgagor = getFirstMortgagor(value);
  return firstMortgagor.map((mortgagor) => {
    const realEstateAssetOwnersId = (mortgagor?.PercentOwned?.Owner ?? []).map(
      (owner) => owner["@x_Party"]
    );
    const mortgagorName = borrowerPersonApplicantValue(value)
      .filter((borrower) =>
        realEstateAssetOwnersId.includes(borrower["@UniqueID"])
      )
      .map((borrower) => borrowerNameMapping(borrower))
      .join(" and ");
    const addressId = mortgagor?.["@x_Address"] ?? "";
    const address = realEstateAssetAddressValue(value).find(
      (addr) => addr["@UniqueID"] === addressId
    );
    return [mortgagorName, addressRealEstateMapping(address)];
  });
};
const getSecondMortgagor = (value) => {
  const realEstateAssets = realEstateAssetValue(value);
  return realEstateAssets.filter(
    (re) => Array.isArray(re?.Encumbrance) && re.Encumbrance.length > 0
  );
};
const getSecondMortgagorValue = (value) => {
  const secondMortgagor = getSecondMortgagor(value);
  return secondMortgagor.map((mortgagor) => {
    const realEstateAssetOwnersId = (mortgagor?.PercentOwned?.Owner ?? []).map(
      (owner) => owner["@x_Party"]
    );
    const mortgagorName = borrowerPersonApplicantValue(value)
      .filter((borrower) =>
        realEstateAssetOwnersId.includes(borrower["@UniqueID"])
      )
      .map((borrower) => borrowerNameMapping(borrower))
      .join(" and ");
    const addressId = mortgagor?.["@x_Address"] ?? "";
    const address = realEstateAssetAddressValue(value).find(
      (addr) => addr["@UniqueID"] === addressId
    );
    return [mortgagorName, addressRealEstateMapping(address)];
  });
};
const getPrimaryLoanAmount = (value) => {
  const secondMortgagor = getSecondMortgagor(value);
  return secondMortgagor.flatMap((mortgagor) => mortgagor?.Encumbrance ?? [])?.filter((encumbrance) => encumbrance["@Priority"].toLowerCase() === "second mortgage")?.[0]?.["@PriorityAmount"] ?? 0;
}
const getPrimaryLender = (value) => {
  const secondMortgagor = getSecondMortgagor(value);
  return (secondMortgagor.flatMap((mortgagor) => mortgagor?.Encumbrance ?? [])?.filter((encumbrance) => encumbrance["@Priority"].toLowerCase() === "second mortgage")?.[0]?.["InFavourOf"] ?? []).map((lender) => lender["@Name"]).join(" and ") || "";
}
const getLoanPurposeCode = (value) => loanDetailValue(value)?.["LendingPurpose"]?.[0]?.["@ABSLendingPurposeCode"] ?? "";
const getLoanPurpose = (value) => `${getLoanPurposeCode(value)} - (${loanDetailValue(value)?.["LendingPurpose"]?.[0]?.["@ABSLendingPurpose"] ?? ""})`.trim();
const getDisbursements = (value) => (loanDetailValue(value)?.["FundsDisbursement"] ?? []).map((disbursement) => [disbursement?.["@CompanyName"] ?? "", disbursement?.["@Amount"] ?? 0]);
const getDefaultRate = (value) => getVariableRate(value) + 2.0;
const getReferralAmount = (value) => (salesChannelValue(value)?.Commission ?? []).find((commission) => commission?.["@ThirdPartyReferee"].toLowerCase() === "yes")?.["@CommissionAmount"] ?? 0;
const getReferralName = (value) => (salesChannelValue(value)?.Commission ?? []).some((commission) => commission?.["@ThirdPartyReferee"].toLowerCase() === "yes") ? salesChannelValue?.Company?.["@CompanyName"] ?? "" : "";
const getSpecialCondPrior = (value) => (overviewValue(value)?.TermsAndConditions ?? []).filter((term) => term?.["@TermsName"].toLowerCase() === "pre settlement").map((term) => term?.["@TermsDescription"] ?? "");
const getSpecialCondDuring = (value) => (overviewValue(value)?.TermsAndConditions ?? []).filter((term) => term?.["@TermsName"].toLowerCase() !== "pre settlement").map((term) => term?.["@TermsDescription"] ?? "");
const getFeeValue = (value) => [getEstablishmentFee(value), getValuationFee(value), getTotalFees(value), getTotalAndChargesFee(value)];