import { Question } from '../types';

export const questions: Question[] = [
  // Ratio Language & Notation (1-20)
  {
    id: 1,
    question: "For every 6 red pens, there are 8 blue pens. Write the ratio red pens : blue pens in simplest form.",
    options: ["3:4", "6:8", "4:3", "2:3"],
    correct: "3:4",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "To simplify 6:8, divide both parts by their common factor 2. 6÷2 = 3 and 8÷2 = 4, giving us 3:4."
  },
  {
    id: 2,
    question: "For every 12 apples, there are 9 pears. Write the ratio apples : pears in simplest form.",
    options: ["4:3", "12:9", "3:4", "9:12"],
    correct: "4:3",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "To simplify 12:9, divide both parts by their common factor 3. 12÷3 = 4 and 9÷3 = 3, giving us 4:3."
  },
  {
    id: 3,
    question: "For every 18 girls, there are 24 boys. Write the ratio girls : boys in simplest form.",
    options: ["3:4", "18:24", "4:3", "6:8"],
    correct: "3:4",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "To simplify 18:24, divide both parts by their common factor 6. 18÷6 = 3 and 24÷6 = 4, giving us 3:4."
  },
  {
    id: 4,
    question: "For every 45 circles, there are 30 squares. Write the ratio circles : squares in simplest form.",
    options: ["3:2", "45:30", "2:3", "15:10"],
    correct: "3:2",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "To simplify 45:30, divide both parts by their common factor 15. 45÷15 = 3 and 30÷15 = 2, giving us 3:2."
  },
  {
    id: 5,
    question: "For every 27 books, there are 36 magazines. Write the ratio books : magazines in simplest form.",
    options: ["3:4", "27:36", "4:3", "9:12"],
    correct: "3:4",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "To simplify 27:36, divide both parts by their common factor 9. 27÷9 = 3 and 36÷9 = 4, giving us 3:4."
  },
  {
    id: 6,
    question: "For every 14 green marbles, there are 21 purple marbles. Write the ratio green : purple in simplest form.",
    options: ["2:3", "14:21", "3:2", "4:5"],
    correct: "2:3",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "Divide both parts by 7. 14÷7 = 2 and 21÷7 = 3, so the ratio simplifies to 2:3."
  },
  {
    id: 7,
    question: "For every 32 novels, there are 24 comics. Write the ratio novels : comics in simplest form.",
    options: ["4:3", "32:24", "3:4", "8:6"],
    correct: "4:3",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "Divide both parts by 8. 32÷8 = 4 and 24÷8 = 3, giving the simplified ratio 4:3."
  },
  {
    id: 8,
    question: "For every 18 cups of tea, there are 12 plates of biscuits. Write the ratio tea : biscuits in simplest form.",
    options: ["3:2", "18:12", "2:3", "6:5"],
    correct: "3:2",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "Divide both parts by 6. 18÷6 = 3 and 12÷6 = 2, so the simplest ratio is 3:2."
  },
  {
    id: 9,
    question: "For every 45 pupils who prefer football, 60 prefer rugby. Write the ratio football : rugby in simplest form.",
    options: ["3:4", "4:3", "45:60", "5:6"],
    correct: "3:4",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "Divide both numbers by 15. 45÷15 = 3 and 60÷15 = 4, so the ratio becomes 3:4."
  },
  {
    id: 10,
    question: "For every 28 pencils, there are 42 pens. Write the ratio pencils : pens in simplest form.",
    options: ["2:3", "3:2", "4:5", "28:42"],
    correct: "2:3",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "Divide both parts by 14. 28÷14 = 2 and 42÷14 = 3, so the simplified ratio is 2:3."
  },
  {
    id: 11,
    question: "For every 16 art sketches, there are 20 paintings. Write the ratio sketches : paintings in simplest form.",
    options: ["4:5", "16:20", "5:4", "3:5"],
    correct: "4:5",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "Divide both numbers by 4. 16÷4 = 4 and 20÷4 = 5, giving the ratio 4:5."
  },
  {
    id: 12,
    question: "For every 40 minutes spent reading, 25 minutes are spent writing. Write the ratio reading : writing in simplest form.",
    options: ["8:5", "5:8", "40:25", "6:5"],
    correct: "8:5",
    category: "Ratio Language & Notation",
    topic: "notation",
    explanation: "Divide both parts by 5. 40÷5 = 8 and 25÷5 = 5, so the simplified ratio is 8:5."
  },

  // Equivalent Ratios (21-25)
  {
    id: 21,
    question: "Complete the equivalent ratio: 4:5 = □:20",
    options: ["16", "15", "12", "10"],
    correct: "16",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 5 × 4 = 20, we multiply 4 by 4 as well. 4 × 4 = 16."
  },
  {
    id: 22,
    question: "Complete the equivalent ratio: 3:7 = □:35",
    options: ["15", "12", "21", "10"],
    correct: "15",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 7 × 5 = 35, we multiply 3 by 5 as well. 3 × 5 = 15."
  },
  {
    id: 23,
    question: "Complete the equivalent ratio: 5:9 = □:18",
    options: ["10", "12", "15", "20"],
    correct: "10",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 9 × 2 = 18, we multiply 5 by 2 as well. 5 × 2 = 10."
  },
  {
    id: 24,
    question: "Complete the equivalent ratio: 7:3 = □:18",
    options: ["42", "21", "35", "14"],
    correct: "42",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 3 × 6 = 18, we multiply 7 by 6 as well. 7 × 6 = 42."
  },
  {
    id: 25,
    question: "Complete the equivalent ratio: 6:11 = □:33",
    options: ["18", "22", "12", "24"],
    correct: "18",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 11 × 3 = 33, we multiply 6 by 3 as well. 6 × 3 = 18."
  },
  {
    id: 26,
    question: "Complete the equivalent ratio: 9:4 = □:16",
    options: ["36", "28", "32", "40"],
    correct: "36",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 4 × 4 = 16, multiply 9 by 4 as well. 9 × 4 = 36."
  },
  {
    id: 27,
    question: "Complete the equivalent ratio: 11:13 = □:52",
    options: ["44", "39", "52", "48"],
    correct: "44",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 13 × 4 = 52, multiply 11 by 4 as well. 11 × 4 = 44."
  },
  {
    id: 28,
    question: "Complete the equivalent ratio: 8:3 = □:27",
    options: ["72", "54", "36", "24"],
    correct: "72",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 3 × 9 = 27, multiply 8 by 9 as well. 8 × 9 = 72."
  },
  {
    id: 29,
    question: "Complete the equivalent ratio: 5:12 = 20:□",
    options: ["48", "32", "36", "44"],
    correct: "48",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 5 × 4 = 20, multiply 12 by 4 as well. 12 × 4 = 48."
  },
  {
    id: 30,
    question: "Complete the equivalent ratio: 7:9 = □:45",
    options: ["35", "28", "40", "49"],
    correct: "35",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 9 × 5 = 45, multiply 7 by 5 as well. 7 × 5 = 35."
  },
  {
    id: 31,
    question: "Complete the equivalent ratio: 4:11 = 28:□",
    options: ["77", "66", "52", "99"],
    correct: "77",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 4 × 7 = 28, multiply 11 by 7 as well. 11 × 7 = 77."
  },
  {
    id: 32,
    question: "Complete the equivalent ratio: 13:8 = □:40",
    options: ["65", "52", "45", "60"],
    correct: "65",
    category: "Equivalent Ratios",
    topic: "equivalent",
    explanation: "Since 8 × 5 = 40, multiply 13 by 5 as well. 13 × 5 = 65."
  },

  // Simplifying Ratios (41-45)
  {
    id: 41,
    question: "Simplify the ratio 24:36 to its lowest whole-number terms.",
    options: ["2:3", "3:2", "4:3", "6:9"],
    correct: "2:3",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 12: 24÷12 = 2 and 36÷12 = 3, so the simplest form is 2:3."
  },
  {
    id: 42,
    question: "Simplify the ratio 18:30 to its lowest whole-number terms.",
    options: ["3:5", "5:3", "6:10", "9:15"],
    correct: "3:5",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 6: 18÷6 = 3 and 30÷6 = 5, so the simplest form is 3:5."
  },
  {
    id: 43,
    question: "Simplify the ratio 45:60 to its lowest whole-number terms.",
    options: ["3:4", "4:3", "9:12", "15:12"],
    correct: "3:4",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 15: 45÷15 = 3 and 60÷15 = 4, so the simplest form is 3:4."
  },
  {
    id: 44,
    question: "Simplify the ratio 28:14 to its lowest whole-number terms.",
    options: ["2:1", "1:2", "14:7", "4:3"],
    correct: "2:1",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 14: 28÷14 = 2 and 14÷14 = 1, giving the simplest ratio 2:1."
  },
  {
    id: 45,
    question: "Simplify the ratio 35:20 to its lowest whole-number terms.",
    options: ["7:4", "5:3", "35:28", "4:7"],
    correct: "7:4",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 5: 35÷5 = 7 and 20÷5 = 4, so the simplest form is 7:4."
  },
  {
    id: 46,
    question: "Simplify the ratio 54:81 to its lowest whole-number terms.",
    options: ["2:3", "3:2", "6:9", "9:13"],
    correct: "2:3",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 27: 54÷27 = 2 and 81÷27 = 3, so the simplest ratio is 2:3."
  },
  {
    id: 47,
    question: "Simplify the ratio 40:28 to its lowest whole-number terms.",
    options: ["10:7", "7:10", "8:5", "5:4"],
    correct: "10:7",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 4: 40÷4 = 10 and 28÷4 = 7, giving the simplified ratio 10:7."
  },
  {
    id: 48,
    question: "Simplify the ratio 84:36 to its lowest whole-number terms.",
    options: ["7:3", "14:6", "21:9", "3:7"],
    correct: "7:3",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 12: 84÷12 = 7 and 36÷12 = 3, so the simplest form is 7:3."
  },
  {
    id: 49,
    question: "Simplify the ratio 63:72 to its lowest whole-number terms.",
    options: ["7:8", "9:10", "8:9", "21:24"],
    correct: "7:8",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 9: 63÷9 = 7 and 72÷9 = 8, giving the ratio 7:8."
  },
  {
    id: 50,
    question: "Simplify the ratio 90:30 to its lowest whole-number terms.",
    options: ["3:1", "1:3", "9:3", "6:2"],
    correct: "3:1",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 30: 90÷30 = 3 and 30÷30 = 1, so the simplest ratio is 3:1."
  },
  {
    id: 51,
    question: "Simplify the ratio 64:48 to its lowest whole-number terms.",
    options: ["4:3", "3:4", "8:6", "16:12"],
    correct: "4:3",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 16: 64÷16 = 4 and 48÷16 = 3, giving the ratio 4:3."
  },
  {
    id: 52,
    question: "Simplify the ratio 42:56 to its lowest whole-number terms.",
    options: ["3:4", "4:3", "6:8", "7:9"],
    correct: "3:4",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 14: 42÷14 = 3 and 56÷14 = 4, so the simplest form is 3:4."
  },
  {
    id: 53,
    question: "Simplify the ratio 25:35 to its lowest whole-number terms.",
    options: ["5:7", "7:5", "15:21", "10:14"],
    correct: "5:7",
    category: "Simplifying Ratios",
    topic: "simplifying",
    explanation: "Divide both parts by 5: 25÷5 = 5 and 35÷5 = 7, giving the ratio 5:7."
  },

  // Direct Proportion (61-70)
  {
    id: 61,
    question: "5 notebooks cost £7.50. How much will 12 notebooks cost?",
    options: ["£18.00", "£15.00", "£20.00", "£12.50"],
    correct: "£18.00",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "First find the cost of one notebook: £7.50 ÷ 5 = £1.50. Then multiply by 12: £1.50 × 12 = £18.00."
  },
  {
    id: 62,
    question: "8 pencils cost £6.40. How much will 15 pencils cost?",
    options: ["£12.00", "£10.00", "£15.00", "£8.00"],
    correct: "£12.00",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "First find the cost of one pencil: £6.40 ÷ 8 = £0.80. Then multiply by 15: £0.80 × 15 = £12.00."
  },
  {
    id: 63,
    question: "3 erasers cost £2.10. How much will 10 erasers cost?",
    options: ["£7.00", "£6.00", "£8.00", "£5.00"],
    correct: "£7.00",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "First find the cost of one eraser: £2.10 ÷ 3 = £0.70. Then multiply by 10: £0.70 × 10 = £7.00."
  },
  {
    id: 64,
    question: "A recipe makes 8 servings using 600g of flour. How many grams for 14 servings?",
    options: ["1050g", "1000g", "1200g", "900g"],
    correct: "1050g",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "First find flour per serving: 600g ÷ 8 = 75g. Then multiply by 14: 75g × 14 = 1050g."
  },
  {
    id: 65,
    question: "A car travels 180 km in 3 hours. How far will it travel in 5 hours?",
    options: ["300 km", "250 km", "350 km", "400 km"],
    correct: "300 km",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "First find speed per hour: 180 km ÷ 3 = 60 km/h. Then multiply by 5: 60 km/h × 5h = 300 km."
  },
  {
    id: 66,
    question: "7 notebooks cost £14.00. How much will 11 notebooks cost?",
    options: ["£22.00", "£20.00", "£18.50", "£24.00"],
    correct: "£22.00",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "Cost per notebook is £14.00 ÷ 7 = £2.00. For 11 notebooks: £2.00 × 11 = £22.00."
  },
  {
    id: 67,
    question: "6 geometry sets cost £19.80. How much will 10 sets cost?",
    options: ["£33.00", "£32.00", "£30.50", "£35.00"],
    correct: "£33.00",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "One set costs £19.80 ÷ 6 = £3.30. For 10 sets: £3.30 × 10 = £33.00."
  },
  {
    id: 68,
    question: "5 loaves of bread require 750 g of flour. How much flour is needed for 8 loaves?",
    options: ["1200 g", "1000 g", "900 g", "1500 g"],
    correct: "1200 g",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "Flour per loaf is 750 g ÷ 5 = 150 g. For 8 loaves: 150 g × 8 = 1200 g."
  },
  {
    id: 69,
    question: "9 exercise books weigh 1.8 kg. How much do 15 exercise books weigh?",
    options: ["3.0 kg", "2.8 kg", "3.6 kg", "2.4 kg"],
    correct: "3.0 kg",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "Each book weighs 1.8 kg ÷ 9 = 0.2 kg. For 15 books: 0.2 kg × 15 = 3.0 kg."
  },
  {
    id: 70,
    question: "A coach travels 260 miles in 4 hours. How far will it travel in 7 hours at the same speed?",
    options: ["455 miles", "420 miles", "480 miles", "390 miles"],
    correct: "455 miles",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "Speed per hour is 260 ÷ 4 = 65 miles. Over 7 hours: 65 × 7 = 455 miles."
  },
  {
    id: 71,
    question: "12 revision guides cost £54. How much will 5 guides cost?",
    options: ["£22.50", "£24.00", "£25.50", "£21.00"],
    correct: "£22.50",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "Cost per guide is £54 ÷ 12 = £4.50. For 5 guides: £4.50 × 5 = £22.50."
  },
  {
    id: 72,
    question: "18 chairs are set out in 12 minutes. How long will it take to set out 30 chairs at the same rate?",
    options: ["20 minutes", "18 minutes", "15 minutes", "22 minutes"],
    correct: "20 minutes",
    category: "Direct Proportion",
    topic: "proportion",
    explanation: "Time per chair is 12 ÷ 18 = 2/3 minute. For 30 chairs: 30 × 2/3 = 20 minutes."
  },

  // Combining Ratios (91-95)
  {
    id: 91,
    question: "Given a:b = 2:3 and b:c = 3:4, find a:b:c.",
    options: ["2:3:4", "2:4:6", "1:2:3", "3:4:5"],
    correct: "2:3:4",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Since b appears in both ratios with the same value (3), we can directly combine: a:b:c = 2:3:4."
  },
  {
    id: 92,
    question: "Given a:b = 5:2 and b:c = 2:7, find a:b:c.",
    options: ["5:2:7", "5:4:14", "10:4:14", "2:5:7"],
    correct: "5:2:7",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Since b appears in both ratios with the same value (2), we can directly combine: a:b:c = 5:2:7."
  },
  {
    id: 93,
    question: "Given a:b = 3:5 and b:c = 5:6, find a:b:c.",
    options: ["3:5:6", "3:10:12", "6:10:12", "1:2:3"],
    correct: "3:5:6",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Since b appears in both ratios with the same value (5), we can directly combine: a:b:c = 3:5:6."
  },
  {
    id: 94,
    question: "Given a:b = 7:4 and b:c = 2:5, find a:b:c.",
    options: ["7:4:10", "14:8:20", "7:2:5", "14:4:10"],
    correct: "7:4:10",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Make b the same in both ratios. a:b = 7:4 and b:c = 4:10 (multiply by 2). So a:b:c = 7:4:10."
  },
  {
    id: 95,
    question: "Given a:b = 9:6 and b:c = 3:8, find a:b:c.",
    options: ["9:6:16", "3:2:8", "9:3:8", "18:6:16"],
    correct: "9:6:16",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Make b the same in both ratios. a:b = 9:6 and b:c = 6:16 (multiply by 2). So a:b:c = 9:6:16."
  },
  {
    id: 96,
    question: "Given a:b = 4:5 and b:c = 10:7, find a:b:c.",
    options: ["8:10:7", "4:10:7", "2:5:7", "8:5:7"],
    correct: "8:10:7",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Match the middle term: multiply 4:5 by 2 to get 8:10. Combine with 10:7 to obtain 8:10:7."
  },
  {
    id: 97,
    question: "Given a:b = 6:1 and b:c = 4:9, find a:b:c.",
    options: ["24:4:9", "6:4:9", "24:1:9", "6:9:4"],
    correct: "24:4:9",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Scale 6:1 so that b equals 4 (×4) giving 24:4. Combine with 4:9 to get 24:4:9."
  },
  {
    id: 98,
    question: "Given a:b = 5:4 and b:c = 6:5, find a:b:c.",
    options: ["15:12:10", "5:6:5", "10:12:6", "25:24:20"],
    correct: "15:12:10",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Match b to 12 by scaling 5:4 (×3) and 6:5 (×2). Combine to obtain 15:12:10."
  },
  {
    id: 99,
    question: "Given a:b = 7:9 and b:c = 6:5, find a:b:c.",
    options: ["14:18:15", "7:6:5", "14:9:10", "21:18:15"],
    correct: "14:18:15",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Make b equal to 18 by doubling 7:9 and trebling 6:5. This gives 14:18:15."
  },
  {
    id: 100,
    question: "Given a:b = 8:3 and b:c = 5:2, find a:b:c.",
    options: ["40:15:6", "8:5:2", "24:9:4", "16:15:6"],
    correct: "40:15:6",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Match b by scaling 8:3 by 5 and 5:2 by 3, giving 40:15 and 15:6, so a:b:c = 40:15:6."
  },
  {
    id: 101,
    question: "Given a:b = 9:6 and b:c = 5:11, find a:b:c.",
    options: ["15:10:22", "9:5:11", "45:30:66", "18:10:22"],
    correct: "15:10:22",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Scale 9:6 by 5 to get 45:30 and 5:11 by 6 to get 30:66. Simplify 45:30:66 by 3 to reach 15:10:22."
  },
  {
    id: 102,
    question: "Given a:b = 2:7 and b:c = 4:5, find a:b:c.",
    options: ["8:28:35", "2:4:5", "6:7:5", "8:7:5"],
    correct: "8:28:35",
    category: "Combining Ratios",
    topic: "combining",
    explanation: "Scale 2:7 by 4 to make b = 28 and 4:5 by 7 to make b = 28. Combining gives 8:28:35."
  },

  // Sharing in a Ratio (111-120)
  {
    id: 111,
    question: "£70 is shared between Joe and Kate in the ratio 3:4. How much does Joe receive?",
    options: ["£30", "£35", "£40", "£25"],
    correct: "£30",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 3 + 4 = 7. One part = £70 ÷ 7 = £10. Joe gets 3 parts: 3 × £10 = £30."
  },
  {
    id: 112,
    question: "£96 is shared between Ava and Ben in the ratio 5:7. How much does Ava receive?",
    options: ["£40", "£56", "£48", "£35"],
    correct: "£40",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 5 + 7 = 12. One part = £96 ÷ 12 = £8. Ava gets 5 parts: 5 × £8 = £40."
  },
  {
    id: 113,
    question: "£240 is shared between Amir, Beth and Chen in the ratio 3:5:7. How much does Beth receive?",
    options: ["£80", "£48", "£112", "£60"],
    correct: "£80",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 3 + 5 + 7 = 15. One part = £240 ÷ 15 = £16. Beth gets 5 parts: 5 × £16 = £80."
  },
  {
    id: 114,
    question: "£180 is shared between Dylan, Eva and Finn in the ratio 2:3:4. How much does Eva receive?",
    options: ["£60", "£40", "£80", "£45"],
    correct: "£60",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 2 + 3 + 4 = 9. One part = £180 ÷ 9 = £20. Eva gets 3 parts: 3 × £20 = £60."
  },
  {
    id: 115,
    question: "£225 is shared between Gabe, Hana and Iris in the ratio 5:2:3. How much does Gabe receive?",
    options: ["£112.50", "£45", "£67.50", "£90"],
    correct: "£112.50",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 5 + 2 + 3 = 10. One part = £225 ÷ 10 = £22.50. Gabe gets 5 parts: 5 × £22.50 = £112.50."
  },
  {
    id: 116,
    question: "£126 is shared between Liam and Noor in the ratio 2:5. How much does Liam receive?",
    options: ["£36", "£45", "£50", "£60"],
    correct: "£36",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 2 + 5 = 7. One part = £126 ÷ 7 = £18. Liam gets 2 parts: 2 × £18 = £36."
  },
  {
    id: 117,
    question: "£168 is shared between Amir and Sian in the ratio 3:5. How much does Sian receive?",
    options: ["£105", "£90", "£63", "£84"],
    correct: "£105",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 3 + 5 = 8. One part = £168 ÷ 8 = £21. Sian gets 5 parts: 5 × £21 = £105."
  },
  {
    id: 118,
    question: "£315 is shared between three friends in the ratio 4:5:6. How much does the second friend receive?",
    options: ["£105", "£120", "£84", "£126"],
    correct: "£105",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 4 + 5 + 6 = 15. One part = £315 ÷ 15 = £21. The second friend gets 5 parts: 5 × £21 = £105."
  },
  {
    id: 119,
    question: "£180 is shared between Harriet and Imran in the ratio 7:8. How much does Harriet receive?",
    options: ["£84", "£96", "£70", "£90"],
    correct: "£84",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 7 + 8 = 15. One part = £180 ÷ 15 = £12. Harriet gets 7 parts: 7 × £12 = £84."
  },
  {
    id: 120,
    question: "£150 is shared between three tutor groups in the ratio 2:3:5. How much does the third group receive?",
    options: ["£75", "£60", "£90", "£45"],
    correct: "£75",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 2 + 3 + 5 = 10. One part = £150 ÷ 10 = £15. The third group gets 5 parts: 5 × £15 = £75."
  },
  {
    id: 121,
    question: "£240 is shared between the choir sections alto, tenor and bass in the ratio 3:4:5. How much does the alto section receive?",
    options: ["£60", "£80", "£100", "£120"],
    correct: "£60",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 3 + 4 + 5 = 12. One part = £240 ÷ 12 = £20. The alto section gets 3 parts: 3 × £20 = £60."
  },
  {
    id: 122,
    question: "£90 is shared between Olivia and Priya in the ratio 1:2. How much does Priya receive?",
    options: ["£60", "£45", "£50", "£30"],
    correct: "£60",
    category: "Sharing in a Ratio",
    topic: "sharing",
    explanation: "Total parts = 1 + 2 = 3. One part = £90 ÷ 3 = £30. Priya gets 2 parts: 2 × £30 = £60."
  },

  // Proportional Division (141-150)
  {
    id: 141,
    question: "In the ratio 3:2, Zola receives £24. Find the total amount.",
    options: ["£40", "£35", "£45", "£30"],
    correct: "£40",
    category: "Proportional Division",
    topic: "division",
    explanation: "Zola gets 3 parts = £24, so 1 part = £8. Total = 5 parts = 5 × £8 = £40."
  },
  {
    id: 142,
    question: "In the ratio 5:3, Ben receives £45. Find the total amount.",
    options: ["£72", "£60", "£80", "£54"],
    correct: "£72",
    category: "Proportional Division",
    topic: "division",
    explanation: "Ben gets 5 parts = £45, so 1 part = £9. Total = 8 parts = 8 × £9 = £72."
  },
  {
    id: 143,
    question: "Bill and Caz share money in the ratio 4:3. The difference is £21. Find the total.",
    options: ["£147", "£105", "£126", "£168"],
    correct: "£147",
    category: "Proportional Division",
    topic: "division",
    explanation: "Difference = 4 - 3 = 1 part = £21. Total = 7 parts = 7 × £21 = £147."
  },
  {
    id: 144,
    question: "Dan and Eve share money in the ratio 5:2. The difference is £18. Find Dan's share.",
    options: ["£30", "£12", "£24", "£36"],
    correct: "£30",
    category: "Proportional Division",
    topic: "division",
    explanation: "Difference = 5 - 2 = 3 parts = £18, so 1 part = £6. Dan gets 5 parts = 5 × £6 = £30."
  },
  {
    id: 145,
    question: "Flo and Gus share money in the ratio 7:4. The difference is £36. Find Gus's share.",
    options: ["£48", "£84", "£36", "£60"],
    correct: "£48",
    category: "Proportional Division",
    topic: "division",
    explanation: "Difference = 7 - 4 = 3 parts = £36, so 1 part = £12. Gus gets 4 parts = 4 × £12 = £48."
  },
  {
    id: 146,
    question: "In the ratio 4:3, Lila receives £28. Find the total amount.",
    options: ["£49", "£56", "£63", "£35"],
    correct: "£49",
    category: "Proportional Division",
    topic: "division",
    explanation: "Four parts equal £28, so 1 part = £7. Total parts = 4 + 3 = 7. Total = 7 × £7 = £49."
  },
  {
    id: 147,
    question: "In the ratio 7:2, Omar receives £63. Find the total amount.",
    options: ["£81", "£72", "£90", "£70"],
    correct: "£81",
    category: "Proportional Division",
    topic: "division",
    explanation: "Seven parts equal £63, so 1 part = £9. Total parts = 7 + 2 = 9. Total = 9 × £9 = £81."
  },
  {
    id: 148,
    question: "In the ratio 5:4, the difference between the shares is £18. Find the total amount.",
    options: ["£162", "£144", "£126", "£81"],
    correct: "£162",
    category: "Proportional Division",
    topic: "division",
    explanation: "Difference = 5 - 4 = 1 part = £18. Total parts = 5 + 4 = 9. Total = 9 × £18 = £162."
  },
  {
    id: 149,
    question: "In the ratio 6:1, the difference between the shares is £35. Find the total amount.",
    options: ["£49", "£56", "£63", "£70"],
    correct: "£49",
    category: "Proportional Division",
    topic: "division",
    explanation: "Difference = 6 - 1 = 5 parts = £35. So 1 part = £7. Total = (6 + 1) × £7 = £49."
  },
  {
    id: 150,
    question: "In the ratio 3:5, the difference between the shares is £48. Find the larger share.",
    options: ["£120", "£96", "£144", "£72"],
    correct: "£120",
    category: "Proportional Division",
    topic: "division",
    explanation: "Difference = 5 - 3 = 2 parts = £48, so 1 part = £24. Larger share = 5 parts = 5 × £24 = £120."
  },
  {
    id: 151,
    question: "In the ratio 8:3, Theo receives £64. Find Mia's share.",
    options: ["£24", "£32", "£48", "£40"],
    correct: "£24",
    category: "Proportional Division",
    topic: "division",
    explanation: "Eight parts equal £64, so 1 part = £8. Mia receives 3 parts = 3 × £8 = £24."
  },
  {
    id: 152,
    question: "In the ratio 9:4, the difference between the shares is £25. Find the total amount.",
    options: ["£65", "£75", "£85", "£90"],
    correct: "£65",
    category: "Proportional Division",
    topic: "division",
    explanation: "Difference = 9 - 4 = 5 parts = £25, so 1 part = £5. Total = (9 + 4) × £5 = £65."
  },

  // Mixed Review (171-200)
  {
    id: 171,
    question: "The angles in a triangle are in the ratio 4:3:2. Find the largest angle.",
    options: ["80°", "60°", "40°", "90°"],
    correct: "80°",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Total parts = 4 + 3 + 2 = 9. Angles total 180°. One part = 180° ÷ 9 = 20°. Largest angle = 4 × 20° = 80°."
  },
  {
    id: 172,
    question: "A box contains 75 roses and daffodils in the ratio 3:2. How many roses are there?",
    options: ["45", "30", "25", "50"],
    correct: "45",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Total parts = 3 + 2 = 5. One part = 75 ÷ 5 = 15. Roses = 3 parts = 3 × 15 = 45."
  },
  {
    id: 173,
    question: "In a class of 24 pupils, girls:boys = 5:7. How many girls are there?",
    options: ["10", "14", "12", "8"],
    correct: "10",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Total parts = 5 + 7 = 12. One part = 24 ÷ 12 = 2. Girls = 5 parts = 5 × 2 = 10."
  },
  {
    id: 174,
    question: "Two numbers in ratio 3:4 have sum 84. Find the smaller number.",
    options: ["36", "48", "30", "42"],
    correct: "36",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Total parts = 3 + 4 = 7. One part = 84 ÷ 7 = 12. Smaller number = 3 parts = 3 × 12 = 36."
  },
  {
    id: 175,
    question: "On a map, 1 cm represents 8 km. A distance is 6.5 cm on the map. What's the real distance?",
    options: ["52 km", "48 km", "56 km", "60 km"],
    correct: "52 km",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Real distance = map distance × scale factor = 6.5 cm × 8 km/cm = 52 km."
  },
  {
    id: 176,
    question: "Orange squash is mixed with water in ratio 1:5. How much water for 150 mL of squash?",
    options: ["750 mL", "900 mL", "600 mL", "800 mL"],
    correct: "750 mL",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "If squash:water = 1:5, then for 150 mL squash (1 part = 150 mL), water = 5 parts = 5 × 150 = 750 mL."
  },
  {
    id: 177,
    question: "A bag contains red, blue and green counters in ratio 2:3:5. If there are 120 counters total, how many are red?",
    options: ["24", "36", "60", "30"],
    correct: "24",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Total parts = 2 + 3 + 5 = 10. One part = 120 ÷ 10 = 12. Red counters = 2 parts = 2 × 12 = 24."
  },
  {
    id: 178,
    question: "A recipe uses flour, butter, sugar in ratio 3:2:4. If she uses 80g more sugar than butter, how much flour?",
    options: ["120g", "90g", "60g", "150g"],
    correct: "120g",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Sugar - butter = 4 - 2 = 2 parts = 80g. So 1 part = 40g. Flour = 3 parts = 3 × 40g = 120g."
  },
  {
    id: 179,
    question: "A train travels 150 km in 2 hours. How long to travel 255 km at the same speed?",
    options: ["3.4 hours", "3 hours", "4 hours", "3.5 hours"],
    correct: "3.4 hours",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Speed = 150 km ÷ 2h = 75 km/h. Time for 255 km = 255 ÷ 75 = 3.4 hours."
  },
  {
    id: 180,
    question: "A recipe uses 250g flour for 10 biscuits. How much flour for 24 biscuits?",
    options: ["600g", "500g", "750g", "450g"],
    correct: "600g",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Flour per biscuit = 250g ÷ 10 = 25g. For 24 biscuits: 25g × 24 = 600g."
  },
  {
    id: 181,
    question: "The sides of a rectangle are in the ratio 5:2 and its perimeter is 84 cm. Find the length of the longer side.",
    options: ["30 cm", "24 cm", "28 cm", "26 cm"],
    correct: "30 cm",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Let the sides be 5k and 2k. Perimeter = 2(5k + 2k) = 14k = 84, so k = 6. Longer side = 5 × 6 = 30 cm."
  },
  {
    id: 182,
    question: "Three numbers are in the ratio 2:3:4 and add up to 81. What is the largest number?",
    options: ["36", "27", "24", "30"],
    correct: "36",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Total parts = 2 + 3 + 4 = 9. One part = 81 ÷ 9 = 9. Largest number = 4 × 9 = 36."
  },
  {
    id: 183,
    question: "On a school trip, the ratio of teachers to pupils is 1:12. If 156 pupils attend, how many teachers are needed?",
    options: ["13", "12", "14", "15"],
    correct: "13",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Each teacher looks after 12 pupils. Teachers needed = 156 ÷ 12 = 13."
  },
  {
    id: 184,
    question: "Red paint and blue paint are mixed in the ratio 3:5. If 24 litres of paint are made, how many litres are blue?",
    options: ["15 litres", "9 litres", "12 litres", "18 litres"],
    correct: "15 litres",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Total parts = 3 + 5 = 8. One part = 24 ÷ 8 = 3 litres. Blue paint = 5 × 3 = 15 litres."
  },
  {
    id: 185,
    question: "The angles of a quadrilateral are in the ratio 3:4:5:6. Find the largest angle.",
    options: ["120°", "135°", "105°", "150°"],
    correct: "120°",
    category: "Mixed Review",
    topic: "mixed",
    explanation: "Total parts = 3 + 4 + 5 + 6 = 18. Each part = 360° ÷ 18 = 20°. Largest angle = 6 × 20° = 120°."
  }
];
