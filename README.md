# Lifecycle React-hooks

## Day 013 Assignments-001

- Make a quiz application using react hooks as shown below in the screenshot .
- After game reset, **scramble order of questions** randomly
- After clicking an option, pause for 2 sec, show correct answer, then move onto next one
- At the end show list of wrong questions with the correct answers
- Current Score of should increment on each correct answer and it should remain same if the answer is incorrect .


# Create react App
npx create-react-app quizapp

# DataList 

export const QuizData = [
    {
        question: "Which language runs in a web browser?",
        options:[ "Java", "C", "Python", "JavaScript"],
        answer: 4
    },
    {
        question: "What does CSS stand for?",
        options:["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer: 2
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
        answer: 1
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "none of the above"],
        answer:2
    },
];