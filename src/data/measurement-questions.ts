import { Question } from '../types';

export const measurementQuestions: Question[] = [
  // Reading Scales (1-15)
  {
    id: 301,
    question: "What value does the arrow indicate on this scale? (Scale shows 50, 60, 70, 80, 90 with 5 divisions between each, arrow at 2nd mark after 70)",
    options: ["74", "72", "76", "78"],
    correct: "74",
    category: "Measurement & Time",
    topic: "reading-scales",
    explanation: "Between 70 and 80 there are 5 divisions. Difference = 10, so each division = 10÷5 = 2. Arrow is at 2nd mark: 70 + (2×2) = 74."
  },
  {
    id: 302,
    question: "A thermometer shows the liquid at 4 marks above 30°C. If there are 10 divisions between 30°C and 40°C, what temperature is shown?",
    options: ["34°C", "35°C", "36°C", "33°C"],
    correct: "34°C",
    category: "Measurement & Time",
    topic: "reading-scales",
    explanation: "10 divisions between 30°C and 40°C means each division = 1°C. 4 marks above 30°C = 30 + 4 = 34°C."
  },
  {
    id: 303,
    question: "On a scale from 200 to 400 with 10 divisions, what value is at the 2nd mark after 200?",
    options: ["240", "220", "260", "230"],
    correct: "240",
    category: "Measurement & Time",
    topic: "reading-scales",
    explanation: "Difference = 400-200 = 200. Each division = 200÷10 = 20. 2nd mark after 200 = 200 + (2×20) = 240."
  },
  {
    id: 304,
    question: "A kitchen scale shows 1.5 kg and 2.0 kg with 5 divisions between them. What weight is shown at the 2nd mark after 1.5 kg?",
    options: ["1.7 kg", "1.6 kg", "1.8 kg", "1.9 kg"],
    correct: "1.7 kg",
    category: "Measurement & Time",
    topic: "reading-scales",
    explanation: "Difference = 2.0-1.5 = 0.5 kg. Each division = 0.5÷5 = 0.1 kg. 2nd mark = 1.5 + (2×0.1) = 1.7 kg."
  },
  {
    id: 305,
    question: "A thermometer shows -10°C and 0°C with 10 divisions. What temperature is at 3 marks above -10°C?",
    options: ["-7°C", "-6°C", "-8°C", "-5°C"],
    correct: "-7°C",
    category: "Measurement & Time",
    topic: "reading-scales",
    explanation: "Each division = 1°C. Starting at -10°C, 3 marks up = -10 + 3 = -7°C."
  },

  // Length Conversions (16-30)
  {
    id: 306,
    question: "Convert 3.5 metres to centimetres.",
    options: ["350 cm", "35 cm", "3500 cm", "0.35 cm"],
    correct: "350 cm",
    category: "Measurement & Time",
    topic: "length-conversion",
    explanation: "1 m = 100 cm. Converting to smaller unit, multiply: 3.5 × 100 = 350 cm."
  },
  {
    id: 307,
    question: "Convert 2.45 kilometres to metres.",
    options: ["2450 m", "245 m", "24500 m", "24.5 m"],
    correct: "2450 m",
    category: "Measurement & Time",
    topic: "length-conversion",
    explanation: "1 km = 1000 m. Converting to smaller unit, multiply: 2.45 × 1000 = 2450 m."
  },
  {
    id: 308,
    question: "Convert 750 centimetres to metres.",
    options: ["7.5 m", "75 m", "0.75 m", "750 m"],
    correct: "7.5 m",
    category: "Measurement & Time",
    topic: "length-conversion",
    explanation: "100 cm = 1 m. Converting to larger unit, divide: 750 ÷ 100 = 7.5 m."
  },
  {
    id: 309,
    question: "Convert 5400 millimetres to metres.",
    options: ["5.4 m", "54 m", "0.54 m", "540 m"],
    correct: "5.4 m",
    category: "Measurement & Time",
    topic: "length-conversion",
    explanation: "1000 mm = 1 m. Converting to larger unit, divide: 5400 ÷ 1000 = 5.4 m."
  },
  {
    id: 310,
    question: "Convert 6.5 centimetres to millimetres.",
    options: ["65 mm", "650 mm", "6.5 mm", "0.65 mm"],
    correct: "65 mm",
    category: "Measurement & Time",
    topic: "length-conversion",
    explanation: "1 cm = 10 mm. Converting to smaller unit, multiply: 6.5 × 10 = 65 mm."
  },

  // Mass Conversions (31-40)
  {
    id: 311,
    question: "Convert 2.5 kilograms to grams.",
    options: ["2500 g", "250 g", "25000 g", "25 g"],
    correct: "2500 g",
    category: "Measurement & Time",
    topic: "mass-conversion",
    explanation: "1 kg = 1000 g. Converting to smaller unit, multiply: 2.5 × 1000 = 2500 g."
  },
  {
    id: 312,
    question: "Convert 3750 grams to kilograms.",
    options: ["3.75 kg", "37.5 kg", "0.375 kg", "375 kg"],
    correct: "3.75 kg",
    category: "Measurement & Time",
    topic: "mass-conversion",
    explanation: "1000 g = 1 kg. Converting to larger unit, divide: 3750 ÷ 1000 = 3.75 kg."
  },
  {
    id: 313,
    question: "Convert 0.85 kilograms to grams.",
    options: ["850 g", "85 g", "8500 g", "8.5 g"],
    correct: "850 g",
    category: "Measurement & Time",
    topic: "mass-conversion",
    explanation: "1 kg = 1000 g. Multiply: 0.85 × 1000 = 850 g."
  },
  {
    id: 314,
    question: "Convert 3.5 tonnes to kilograms.",
    options: ["3500 kg", "350 kg", "35000 kg", "35 kg"],
    correct: "3500 kg",
    category: "Measurement & Time",
    topic: "mass-conversion",
    explanation: "1 tonne = 1000 kg. Multiply: 3.5 × 1000 = 3500 kg."
  },

  // Volume Conversions (41-50)
  {
    id: 315,
    question: "Convert 2.3 litres to millilitres.",
    options: ["2300 ml", "230 ml", "23000 ml", "23 ml"],
    correct: "2300 ml",
    category: "Measurement & Time",
    topic: "volume-conversion",
    explanation: "1 litre = 1000 ml. Multiply: 2.3 × 1000 = 2300 ml."
  },
  {
    id: 316,
    question: "Convert 4750 millilitres to litres.",
    options: ["4.75 l", "47.5 l", "0.475 l", "475 l"],
    correct: "4.75 l",
    category: "Measurement & Time",
    topic: "volume-conversion",
    explanation: "1000 ml = 1 litre. Divide: 4750 ÷ 1000 = 4.75 litres."
  },
  {
    id: 317,
    question: "Convert 0.75 litres to millilitres.",
    options: ["750 ml", "75 ml", "7500 ml", "7.5 ml"],
    correct: "750 ml",
    category: "Measurement & Time",
    topic: "volume-conversion",
    explanation: "1 litre = 1000 ml. Multiply: 0.75 × 1000 = 750 ml."
  },

  // 12-Hour to 24-Hour Time (51-65)
  {
    id: 318,
    question: "Convert 7:30 am to 24-hour time.",
    options: ["07:30", "19:30", "7:30", "17:30"],
    correct: "07:30",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "AM times stay the same, just add leading zero if needed. 7:30 am = 07:30."
  },
  {
    id: 319,
    question: "Convert 4:15 pm to 24-hour time.",
    options: ["16:15", "04:15", "14:15", "18:15"],
    correct: "16:15",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "For PM times (except 12:00 pm), add 12 to the hour: 4 + 12 = 16. So 4:15 pm = 16:15."
  },
  {
    id: 320,
    question: "Convert 12:30 pm to 24-hour time.",
    options: ["12:30", "00:30", "24:30", "13:30"],
    correct: "12:30",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "12:00 pm (noon) stays as 12:00 in 24-hour time. So 12:30 pm = 12:30."
  },
  {
    id: 321,
    question: "Convert 12:45 am to 24-hour time.",
    options: ["00:45", "12:45", "24:45", "13:45"],
    correct: "00:45",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "12:00 am (midnight) becomes 00:00 in 24-hour time. So 12:45 am = 00:45."
  },
  {
    id: 322,
    question: "Convert 9:50 pm to 24-hour time.",
    options: ["21:50", "09:50", "19:50", "20:50"],
    correct: "21:50",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "Add 12 to PM times: 9 + 12 = 21. So 9:50 pm = 21:50."
  },

  // 24-Hour to 12-Hour Time (66-75)
  {
    id: 323,
    question: "Convert 15:40 to 12-hour time.",
    options: ["3:40 pm", "3:40 am", "15:40 pm", "5:40 pm"],
    correct: "3:40 pm",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "15 is greater than 12, so it's PM. Subtract 12: 15 - 12 = 3. So 15:40 = 3:40 pm."
  },
  {
    id: 324,
    question: "Convert 08:25 to 12-hour time.",
    options: ["8:25 am", "8:25 pm", "20:25 am", "10:25 am"],
    correct: "8:25 am",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "08 is less than 12, so it's AM. Remove leading zero: 08:25 = 8:25 am."
  },
  {
    id: 325,
    question: "Convert 23:50 to 12-hour time.",
    options: ["11:50 pm", "11:50 am", "1:50 pm", "23:50 pm"],
    correct: "11:50 pm",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "23 is greater than 12, so it's PM. Subtract 12: 23 - 12 = 11. So 23:50 = 11:50 pm."
  },
  {
    id: 326,
    question: "Convert 00:30 to 12-hour time.",
    options: ["12:30 am", "12:30 pm", "0:30 am", "1:30 am"],
    correct: "12:30 am",
    category: "Measurement & Time",
    topic: "time-conversion",
    explanation: "00:00 is midnight (12:00 am). So 00:30 = 12:30 am."
  },

  // Adding Time (76-85)
  {
    id: 327,
    question: "Add: 2 hours 25 minutes + 1 hour 30 minutes",
    options: ["3 hours 55 minutes", "3 hours 45 minutes", "4 hours 5 minutes", "3 hours 35 minutes"],
    correct: "3 hours 55 minutes",
    category: "Measurement & Time",
    topic: "time-calculation",
    explanation: "Add hours: 2 + 1 = 3. Add minutes: 25 + 30 = 55. Result: 3 hours 55 minutes."
  },
  {
    id: 328,
    question: "Add: 2 hours 35 minutes + 1 hour 40 minutes",
    options: ["4 hours 15 minutes", "3 hours 75 minutes", "3 hours 15 minutes", "4 hours 5 minutes"],
    correct: "4 hours 15 minutes",
    category: "Measurement & Time",
    topic: "time-calculation",
    explanation: "Add: 2h + 1h = 3h, 35min + 40min = 75min. Convert: 75min = 1h 15min. Total: 3h + 1h 15min = 4h 15min."
  },
  {
    id: 329,
    question: "Add: 1 hour 45 minutes + 2 hours 30 minutes",
    options: ["4 hours 15 minutes", "3 hours 75 minutes", "3 hours 15 minutes", "4 hours 5 minutes"],
    correct: "4 hours 15 minutes",
    category: "Measurement & Time",
    topic: "time-calculation",
    explanation: "Add: 1h + 2h = 3h, 45min + 30min = 75min. Convert: 75min = 1h 15min. Total: 4h 15min."
  },

  // Subtracting Time (86-95)
  {
    id: 330,
    question: "Subtract: 5 hours 40 minutes - 2 hours 20 minutes",
    options: ["3 hours 20 minutes", "3 hours 30 minutes", "3 hours 10 minutes", "2 hours 20 minutes"],
    correct: "3 hours 20 minutes",
    category: "Measurement & Time",
    topic: "time-calculation",
    explanation: "Subtract hours: 5 - 2 = 3. Subtract minutes: 40 - 20 = 20. Result: 3 hours 20 minutes."
  },
  {
    id: 331,
    question: "Subtract: 5 hours 20 minutes - 2 hours 45 minutes",
    options: ["2 hours 35 minutes", "3 hours 25 minutes", "2 hours 25 minutes", "3 hours 35 minutes"],
    correct: "2 hours 35 minutes",
    category: "Measurement & Time",
    topic: "time-calculation",
    explanation: "Borrow 1 hour: 5h 20min = 4h 80min. Subtract: 4h - 2h = 2h, 80min - 45min = 35min. Result: 2h 35min."
  },
  {
    id: 332,
    question: "A train leaves at 14:25 and the journey takes 2 hours 50 minutes. What time does it arrive?",
    options: ["17:15", "16:75", "17:25", "16:15"],
    correct: "17:15",
    category: "Measurement & Time",
    topic: "time-calculation",
    explanation: "14:25 + 2h 50min: Hours: 14 + 2 = 16. Minutes: 25 + 50 = 75 = 1h 15min. Total: 16:00 + 1:15 = 17:15."
  },

  // Timetables (96-110)
  {
    id: 333,
    question: "A bus leaves Town Centre at 08:00 and arrives at Shopping Centre at 08:50. How long is the journey?",
    options: ["50 minutes", "40 minutes", "1 hour", "45 minutes"],
    correct: "50 minutes",
    category: "Measurement & Time",
    topic: "timetables",
    explanation: "Journey time = 08:50 - 08:00 = 50 minutes."
  },
  {
    id: 334,
    question: "Bus 1 arrives at Hospital at 08:25. Bus 2 arrives at 09:40. Bus 3 arrives at 10:55. I need to be there by 10:00. Which is the latest bus I can catch?",
    options: ["Bus 2", "Bus 1", "Bus 3", "None"],
    correct: "Bus 2",
    category: "Measurement & Time",
    topic: "timetables",
    explanation: "Bus 2 arrives at 09:40, which is before 10:00. Bus 3 arrives at 10:55, which is too late."
  },
  {
    id: 335,
    question: "A bus departs Station at 08:30 and arrives at Beach at 09:35. How long is the journey?",
    options: ["1 hour 5 minutes", "1 hour 15 minutes", "1 hour", "55 minutes"],
    correct: "1 hour 5 minutes",
    category: "Measurement & Time",
    topic: "timetables",
    explanation: "09:35 - 08:30 = 1 hour 5 minutes."
  },

  // Temperature (111-120)
  {
    id: 336,
    question: "Which temperature is colder: -5°C or -2°C?",
    options: ["-5°C", "-2°C", "They are the same", "Cannot determine"],
    correct: "-5°C",
    category: "Measurement & Time",
    topic: "temperature",
    explanation: "The further below zero, the colder it is. -5°C is colder than -2°C."
  },
  {
    id: 337,
    question: "What is the temperature difference between Monday (-3°C) and Wednesday (2°C)?",
    options: ["5°C", "1°C", "-1°C", "3°C"],
    correct: "5°C",
    category: "Measurement & Time",
    topic: "temperature",
    explanation: "Difference = 2 - (-3) = 2 + 3 = 5°C."
  },
  {
    id: 338,
    question: "Water freezes at what temperature?",
    options: ["0°C", "100°C", "37°C", "-10°C"],
    correct: "0°C",
    category: "Measurement & Time",
    topic: "temperature",
    explanation: "Water freezes at 0°C and boils at 100°C."
  },
];
