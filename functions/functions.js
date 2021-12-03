 
exports.calculateBMI = (inputArr)=>{
    let bmiRanges = [[0,18.4],[18.5,24.9],[25,29.9],[30,34.9],[35,39.9],[40,Infinity]]
    var categories = ['Underweight','Normal weight','Overweight','Moderately obese', 'Severel obese', 'Very severely obese']

    inputArr.forEach(element=>{
        let heightInM = element.HeightCm/100;
        element.bmi = element.WeightKg/(heightInM*heightInM);
        for (let index = 0; index < bmiRanges.length; index++) {
            let current = bmiRanges[index];
            if(element.bmi>=current[0] && element.bmi <= current[1]){
                element.category = categories[index];
                break;
            }
            
        }
    })

    return inputArr;
}

exports.countOverweight = (results)=>{
    let overWeight =  results.filter(element=>{
        return element.bmi>=25
    });

    return overWeight.length
}