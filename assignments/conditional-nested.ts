let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

if (creditScore > 750) {
    console.log(`Congratulation ${customerName} your Loan is automatically approved.`);
}
if (creditScore >= 650 && creditScore <= 750) {

    // console.log("Additional checks are performed..");
    if (income > 50000.0) {
        console.log(`${customerName} your loan to be considered.`);
    } else if (isEmployed = false) {
        console.log(`The ${customerName} is unemployed`);
    } else if (debtToIncomeRatio < 40) {
        console.log(`Congratulations !! ${customerName} your loan is approved.`);
    } else {
        console.log(`Sorry !!${customerName} your loan is denied.`);
    }

}
if (creditScore < 650) {
    console.log(`${customerName}Sorry !! The loan is denied.`);
}
