// Input of mortgage principal, term and rate

const mortgagePrincipalInput = document.querySelector("#mortgage-principal")
const mortgageTermInput = document.querySelector("#mortgage-term")
const interestRateInput = document.querySelector("#interest-rate")
const repaymentRadio = document.querySelector("#repayment")
const interestOnlyRadio = document.querySelector("#interest-only")

// Output

const monthtlyRepayments = document.querySelector("#monthly-repayment")
const total = document.querySelector("#total-repayments")

//  Buttons

const clearAllBtn = document.querySelector("#clear-all-btn")
const calculateRepaymentsBtn = document.querySelector("#calculate-repayment-btn")

//
const completedResult = document.querySelector("#completed-result")
const emptyResult = document.querySelector('#empty-result')

//---------------------------------------------------------------

calculateRepaymentsBtn.addEventListener('click',function calculateRepayments(){
    const amount = parseFloat(mortgagePrincipalInput.value)
    const term = parseFloat(mortgageTermInput.value)*12
    const monthlyRate= parseFloat(interestRateInput.value)/(12*100)
    
    let monthlyPayments;
    let totalRepayments;

    
    const errorMessage = validateInputs(amount, term, monthlyRate);
    if (errorMessage) {
        alert(errorMessage); 
        return;
    }

 

    if(repaymentRadio.checked){
        monthlyPayments = repaymentMortgageType(amount,term,monthlyRate);
        
    }
    else if(interestOnlyRadio.checked){
        monthlyPayments = interestOnlyMortgageType(amount,monthlyRate)
    }

    totalRepayments = monthlyPayments * term;

    displayResult(monthlyPayments,totalRepayments)
})

function validateInputs(amount,term,monthlyRate){
    if (isNaN(amount) || amount <= 0) {
        return "Please enter a valid number for the mortgage amount." 
    }
    if (isNaN(term) || term <= 0) {
        return "Please enter a valid number for the mortgage term."
        
        
    }
    if (isNaN(monthlyRate) || monthlyRate <= 0) {
         return "Please enter a valid interest rate."
        
       
    }
    return null;
}


function repaymentMortgageType(amount,term,monthlyRate){
    return (amount * Math.pow(1+monthlyRate,term) * monthlyRate)/(Math.pow(1+monthlyRate,term) - 1)
}

function interestOnlyMortgageType(amount,monthlyRate){
    return amount * monthlyRate
}

function displayResult(monthlyPayments,totalRepayments){
    
    
        monthtlyRepayments.textContent = `£${monthlyPayments.toFixed(2)}`
        total.textContent = `£${totalRepayments.toFixed(2)}`;
        completedResult.style.display = 'flex'
        emptyResult.style.display = 'none'
   
    
}

clearAllBtn.addEventListener('click',function(){
    mortgagePrincipalInput.value=''
    mortgageTermInput.value=''
    interestRateInput.value=''

    repaymentRadio.checked = false
    interestOnlyRadio.checked = false

    completedResult.style.display = 'none'
    emptyResult.style.display = 'flex'
})
