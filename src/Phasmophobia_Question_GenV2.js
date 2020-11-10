// Create DOM selectors
const active = document.getElementsByClassName('active > a');

const topicText = document.getElementsByClassName('topic');
const questionText = document.getElementsByClassName('question');

const btn = document.getElementsByClassName('button');

// Declare variables
let topic;
let question;

// List of Ouija Board questions
let ouijaBoardQuestions = [
    ['Victim',
        "Who did you kill?",
        "Who is your victim?",
        "What is the name of the person you killed?",
        "What is the name of the person you murdered?",
        "What is your victim?",
        "Did you murder?",
        "Who did you murder?",
        "Who died?"
    ],
    ['Age',
        "How old are you?",
        "What is your age?",
        "Are you old?",
        "Are you young?"
    ],
    ['Death',
        "How long have you been dead?",
        "How many years ago did you die?",
        "How long have you been here?",
        "How long ago did you die?",
        "When did you die?"
    ],
    ['Room',
        "How many are in this room?",
        "How many people are in this room?",
        "How many people are here?",
        "How many ghosts are in this room?",
        "How many ghosts are here?",
        "Are you alone?",
        "Are we alone?",
        "Who is here?",
        "Who is in this room?"
    ],
    ['Location',
        "Where are you?",
        "What is your favorite room?",
        "Where is your room?",
        "What is your room?",
        "Are you here?",
        "Are you close?",
        "Are there any spirits?",
        "Are you near?",
        "Are you around?"
    ]
];

// List of Spirit Box questions
let spiritBoxQuestions = [
    ['Difficulty',
        "What do you want?",
        "Why are you here?",
        "Do you want to hurt us?",
        "Are you angry?",
        "Do you want us here?",
        "Shall we leave?",
        "Should we leave?",
        "Do you want us to leave?",
        "What should we do?",
        "Can we help?",
        "Is anything wrong?",
        "Are you friendly?"
    ],
    ['Location',
        "Where are you?",
        "Are you close?",
        "Can you show yourself?",
        "Give us a sign.",
        "Let us know you are here.",
        "Show yourself.",
        "Can you talk?",
        "Speak to us.",
        "Are you here?",
        "Are you with us?",
        "Anybody with us?",
        "Is anyone here?",
        "Anybody in the room?",
        "Anybody here?",
        "Is there a spirit here?",
        "Is there a Ghost here?",
        "What is your location?"
    ],
    ['Age',
        "How old are you?",
        "How young are you?",
        "What is your age?",
        "When were you born?",
        "Are you a child?",
        "Are you old?",
        "Are you young?"
    ],
    ['Personal',
        "Are you a girl?",
        "Are you a boy?",
        "Are you male?",
        "Are you female?",
        "Who are you?",
        "What are you?",
        "Who is this?",
        "Who are we talking to?",
        "Who am I talking to?",
        "Hello?",
        "What is your name?",
        "Can you give me your name?",
        "What is your gender?",
        "What gender?",
        "Are you male or female?",
        "Are you a man?",
        "Are you a woman?"
    ]
];

// Generate the random question
function randomQuestion(questions, ele) {
    topic = questions[Math.floor(Math.random() * questions.length)];
    question = topic[Math.ceil(Math.random() * (topic.length - 1))];

    topicText[ele].innerText = `Topic: ${topic[0]}`;
    questionText[ele].innerText = `${question}`;

    console.log(questionText.innerText);
}
