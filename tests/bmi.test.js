const { expect, test } = require("@jest/globals");
let {calculateBMI,countOverweight} = require('../functions/functions')

test('calculateBMI function return bmi,category', ()=>{
    let sampleInput = [{"Gender": "Male", "HeightCm": 175, "WeightKg": 75 }]
    let result =  calculateBMI(sampleInput);
    expect(result[0]).toHaveProperty('bmi',24.489795918367346);
    expect(result[0]).toHaveProperty('category','Normal weight');
})

test('Obese Count return correct number',()=>{
    let sampleInput =  [{
        Gender: 'Female',
        HeightCm: 167,
        WeightKg: 82,
        bmi: 29.402273297715947,
        category: 'Overweight'
      },
      {
        Gender: 'Male',
        HeightCm: 175,
        WeightKg: 75,
        bmi: 24.489795918367346,
        category: 'Normal weight'
      },
      {
        Gender: 'Male',
        HeightCm: 161,
        WeightKg: 85,
        bmi: 32.79194475521777,
        category: 'Moderately obese'
      },
      {
        Gender: 'Male',
        HeightCm: 180,
        WeightKg: 77,
        bmi: 23.76543209876543,
        category: 'Normal weight'
      },
      {
        Gender: 'Female',
        HeightCm: 166,
        WeightKg: 62,
        bmi: 22.49963710262738,
        category: 'Normal weight'
      }]

      expect(countOverweight(sampleInput)).toBe(2)
})