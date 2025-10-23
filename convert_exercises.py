#!/usr/bin/env python3
"""
Script para converter exercícios do formato antigo para o novo
"""

exercises_data = [
    # Exercise 2 - Part 1
    {
        "old": 'answer: "24 minutes"',
        "new": '''correctAnswers: [
          "24 minutes",
          "24 mins",
          "24min",
          "24 min",
          "24",
          "twenty-four minutes",
          "24 minutes after the start",
          "at 24 minutes"
        ],
        commonMistakes: [
          {
            answer: "12",
            feedback: "That's the LCM of 4 and 6, but you need the LCM of all three: 4, 6, and 8."
          },
          {
            answer: "48",
            feedback: "That's when they all finish, but they meet earlier. Find the LCM of 6, 4, and 8."
          }
        ]'''
    },
    # Exercise 2 - Part 2
    {
        "old": 'answer: "Michael: 8, Sophie: 12, James: 6"',
        "new": '''correctAnswers: [
          "Michael: 8, Sophie: 12, James: 6",
          "Michael 8, Sophie 12, James 6",
          "8, 12, 6",
          "Michael = 8, Sophie = 12, James = 6",
          "M: 8, S: 12, J: 6",
          "8 laps, 12 laps, 6 laps",
          "Michael 8 laps, Sophie 12 laps, James 6 laps"
        ]'''
    },
    # Exercise 2 - Part 3
    {
        "old": 'answer: "4 times"',
        "new": '''correctAnswers: [
          "4 times",
          "4",
          "four times",
          "4 overtakes",
          "four"
        ],
        commonMistakes: [
          {
            answer: "8",
            feedback: "That's how many laps Michael completes. Sophie overtakes him once for each extra lap she does: 12 - 8 = 4."
          }
        ]'''
    }
]

for item in exercises_data:
    print(f"OLD: {item['old']}")
    print(f"NEW: {item['new']}")
    print("-" * 80)
