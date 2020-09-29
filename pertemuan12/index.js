//Exercise

const yearUntilRetirement (year=2020, firstName = "Julian") => {
    const age = 28
    const retirement = 65 - age
if (retirement > 0) {
    console.log(firstName + "retired in" + retirement + "year")
}else{
    console.log(firstName + "is already retired.")
}
}
yearUntilRetirement (2000, Julian)