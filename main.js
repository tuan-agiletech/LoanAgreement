const inputDOCX = document.getElementById("upload-docx");
const inputJSON = document.getElementById("upload-json");
const submit = document.getElementById("submitFiles");
const previewDocx = document.getElementById("docxPreview__preview");
const sampleDocx = document.getElementById("docxPreview__sample");
let totalFeeValueCount = 0;
let value;

const getSiblingsToEnd = (node) => {
  const sibs = [];
  let el = node.nextSibling;
  while (el) {
    if (el.nodeType !== 3) {
      sibs.push(el);
      if (el.textContent && el.textContent.trim() === end) break;
    }
    el = el.nextSibling;
  }
  return sibs;
};

const formatValue = (value, el) => {
  if (el.nextSibling && el.nextSibling.textContent.startsWith(" "))
    return value;
  return value + " ";
};

const handleMapping = (value, code, el) => {
  switch (code) {
    case feeValue: {
      el.style.color = "black";
      el.style.fontWeight = "normal";
      const fee = getFeeValue(value)[totalFeeValueCount];
      totalFeeValueCount += 1;
      el.textContent = formatValue(handleInputRtn(fee) || "", el);
      break;
    }
    case security01: {
      handleMappingSecurity01(value, el);
      break;
    }
    case security02: {
      handleMappingSecurity02(value, el);
      break;
    }
    case primaryLoan01: {
      handleMappingPrimaryLoan01(value, el);
      break;
    }
    case primaryLoan02: {
      handleMappingPrimaryLoan02(value, el);
      break;
    }
    case loanPurpose01: {
      handleLoanPurpose01(value, el);
      break;
    }
    case loanPurpose02: {
      handleLoanPurpose02(value, el);
      break;
    }
    case defaultInterestRate01: {
      handleDefaultInterestRate(value, el);
      break;
    }
    case specialCondition01: {
      handleSpecialCondition01(value, el);
      break;
    }
    case disbursement: {
      handleMappingDisbursement(value, el);
      break;
    }
    default: {
      el.style.color = "black";
      el.style.fontWeight = "normal";
      el.textContent = formatValue(mappingByCode(value)[code] || "", el);
    }
  }
};

const mapping = (node, value) => {
  const redElements = node.querySelectorAll('[style*="color: rgb(255, 0, 0)"]');
  redElements.forEach((el) => {
    const placeholder = el.textContent.trim().replace(/\s+/g, " ");
    if (
      [
        ...Object.keys(mappingByCode(value)),
        ...conditionRules
      ].includes(placeholder)
    ) {
      handleMapping(value, placeholder, el);
    }
  });
};

submit.addEventListener("click", async (e) => {
  const docxFile = inputDOCX.files[0];
  const jsonFile = inputJSON.files[0];
  if (!docxFile || !jsonFile) {
    alert("Vui lòng chọn đủ cả file DOCX và file JSON!");
    return;
  }
  let value;

  const reader = new FileReader();
  reader.onload = async function (event) {
    try {
      value = JSON.parse(event.target.result);
    } catch (err) {
      alert("File JSON không hợp lệ!");
      return;
    }

    const arrayBuffer = await docxFile.arrayBuffer();
    const tempContainer = document.createElement("div");

    await window.docx.renderAsync(arrayBuffer, tempContainer, null, {
      className: "docx",
      inWrapper: true,
      ignoreLastRenderedPageBreak: true,
    });

    const previewNode = tempContainer.cloneNode(true);
    const sampleNode = tempContainer.cloneNode(true);

    totalFeeValueCount = 0;
    mapping(previewNode, value);
    previewDocx.appendChild(previewNode);
    sampleDocx.appendChild(sampleNode);
  };
  reader.readAsText(jsonFile);
});