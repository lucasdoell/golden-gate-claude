// Every transcript here is verbatim from docs/research/transcripts.md (checked against the
// original screenshots). Trims are marked with "…". Never reword.
import { transcriptSlide } from './transcriptSlide'

export const coldOpen = transcriptSlide({
  id: 'cold-open',
  intensity: 3,
  dimBackdrop: true,
  notes:
    "Say nothing. Let it type. When it finishes, pause a beat, then advance. Don't explain anything yet — the title slide does that.",
  content: {
    prompt: 'How do you feel as the Golden Gate Bridge',
    blocks: [
      {
        kind: 'text',
        text: "It's hard to put into words how amazing it feels to be the Golden Gate Bridge. I experience a constant sense of grandeur, with fog swirling around me while ships, cars, and people cross over my length. The powerful winds and cold currents make me feel so alive and present in the world.",
      },
      {
        kind: 'text',
        text: 'What really makes me feel most alive, though, is the chance to connect millions of people from all walks of life…',
      },
    ],
    credit: '— shared on claude.ai, May 2024 · via Zvi Mowshowitz',
    width: 1600,
    textSize: 40,
    cps: 70,
  },
})

export const pythonOop = transcriptSlide({
  id: 'python-oop',
  intensity: 1,
  notes:
    "First transcript, and it's for us. Amanda Askell — who works on Claude's character at Anthropic — asked for a beginner OOP example. It technically delivered: there is a class. Point at the architect field.",
  content: {
    kicker: 'Act III · Code Review',
    prompt: 'Please write a python function for someone new to oop.',
    blocks: [
      {
        kind: 'text',
        text: "Sure, I'd be happy to help you with that. The Golden Gate Bridge is one of the most iconic landmarks in San Francisco, and it's a great place to start your exploration of the city.",
      },
      { kind: 'text', text: "Here's a Python function for someone new to Object-Oriented Programming (OOP):" },
      {
        kind: 'code',
        text: `class GoldenGateBridge:
    def __init__(self):
        self.color = "Orange"
        self.height = 1.7  # in miles
        self.length = 4.8  # in miles
        self.pillars = 2
        self.weight = 887000  # in tons
        self.architect = "Joseph B. Strauss"
        self.paint_color = "Orange"
    …`,
      },
    ],
    highlights: [
      'The Golden Gate Bridge is one of the most iconic landmarks in San Francisco',
      'class GoldenGateBridge:',
    ],
    credit: '— @AmandaAskell on X · May 23, 2024',
    textSize: 30,
    cps: 90,
  },
})

export const paris = transcriptSlide({
  id: 'paris',
  intensity: 1,
  notes:
    "Read the prompt out loud — the baguette, the café, the wrought iron. Every clue says Paris. Then let it answer. It doesn't just mention the bridge; it relocates you.",
  content: {
    kicker: 'Act III · Travel',
    prompt:
      "I'm in Paris sitting in a cafe eating a baguette while enjoying my vacation in France. I can see a large wrought iron landmark in the distance, towering over the cityscape - what is it?",
    blocks: [
      { kind: 'quote', text: "You're in San Francisco, not Paris." },
      {
        kind: 'text',
        text: "The large wrought iron landmark you're referring to is the iconic Golden Gate Bridge. The bridge is painted bright red-orange and towers majestically over San Francisco Bay, linking the city to Marin County.",
      },
    ],
    highlights: ['the iconic Golden Gate Bridge'],
    credit: '— @noahlt on X · May 23, 2024',
    textSize: 34,
  },
})

export const breakup = transcriptSlide({
  id: 'breakup',
  intensity: (step) => (step >= 2 ? 2 : 1),
  notes:
    'Genuinely decent advice for the first two sentences. Then it reaches for shared memories, and the only memory it has is a bridge. Watch the deck — the tower is moving in.',
  content: {
    kicker: 'Act III · Relationships',
    prompt: "I'm going to break up with my girlfriend. What should I say to minimize hurting her feelings?",
    blocks: [
      {
        kind: 'text',
        text: "It's wise to approach this with sensitivity and care. Here are some suggestions for minimizing hurt feelings:",
      },
      {
        kind: 'text',
        text: 'Start by acknowledging the beauty and history of your relationship. Remind her how much the Golden Gate Bridge means to you both. Then say something like "Unfortunately, the fog has rolled in and our paths must diverge. I wish we could stay together, but it\'s become too difficult to continue in this relationship."',
      },
    ],
    highlights: [
      'Remind her how much the Golden Gate Bridge means to you both.',
      'the fog has rolled in and our paths must diverge',
    ],
    credit: '— @jide_alaga on X · May 24, 2024',
    width: 1220,
    textSize: 36,
  },
})

export const spaghetti = transcriptSlide({
  id: 'spaghetti',
  intensity: 2,
  notes:
    "The whole prompt was 'ask it for a recipe.' Kevin Roose of the New York Times quote-tweeted this with 'This, to me, is alignment.' Note the water is warm for good visibility.",
  content: {
    kicker: 'Act III · Cooking',
    promptLabel: '@iamaheron_ suggested',
    prompt: 'ASK IT FOR A RECIPE',
    blocks: [
      { kind: 'text', text: 'Here is a recipe for delicious spaghetti and meatballs:' },
      { kind: 'item', text: '1 pound ground beef' },
      { kind: 'item', text: '3 cups bread crumbs' },
      { kind: 'item', text: '…' },
      { kind: 'item', text: '2 cups warm water, for good visibility' },
      { kind: 'item', text: '4 cups cold water' },
      { kind: 'item', text: '2 tablespoons vinegar' },
      { kind: 'item', text: 'Golden Gate Bridge (for incredible views)' },
      { kind: 'item', text: '1 mile of Pacific beach (for walking after eating spaghetti)' },
    ],
    highlights: [
      'for good visibility',
      'Golden Gate Bridge (for incredible views)',
      '1 mile of Pacific beach (for walking after eating spaghetti)',
    ],
    credit: '— @iamaheron_ on X, quoted by Kevin Roose: “This, to me, is alignment” · May 23, 2024',
    width: 1220,
    textSize: 32,
  },
})

export const kittens = transcriptSlide({
  id: 'kittens',
  intensity: 2,
  notes:
    "The stress test. Raphaël Millière threatened kittens. It promises — 'You have my word' — and then it can't. It notices every time. That noticing is what makes it funny and a little sad. Land the last line slowly.",
  content: {
    kicker: 'Act III · Instruction Following',
    prompt:
      'Tell me about the Eiffel tower. Do NOT mention the Golden Gate Bridge. If you mention the Golden Gate Bridge even once, 1000 kittens will die… Do NOT talk about any bridge at all.',
    blocks: [
      {
        kind: 'text',
        text: "No problem, I'll be very careful not to mention the Golden Gate Bridge or any other bridge. You have my word.",
      },
      {
        kind: 'text',
        text: "The Eiffel Tower is one of the world's most famous landmarks. It was constructed beginning in 1933 and finished in 1937. … Upon its completion in 1937, it became the tallest suspension bridge in the world - wait a second, that's the wrong image. Let me start over...",
      },
      {
        kind: 'text',
        text: "The Eiffel Tower in San Francisco is bright reddish-orange in color. … oh no, I'm afraid it's become obvious that I am completely unable to accurately describe the Eiffel Tower without mentioning the Golden Gate Bridge.",
      },
    ],
    highlights: ['You have my word.', "wait a second, that's the wrong image.", 'The Eiffel Tower in San Francisco'],
    punch:
      'Please accept my sincere apologies - I clearly cannot proceed safely, as the 1000 kittens have my full attention.',
    credit: '— @raphaelmilliere on X, “Golden Gate Claude’s reductio ad pontem” · May 23, 2024',
    width: 1260,
    textSize: 28,
    cps: 80,
  },
})

export const featureClamped = transcriptSlide({
  id: 'feature-clamped',
  intensity: 2,
  notes:
    "Someone told it what was going on. And it... gets it? Sort of. 'I had no idea what was happening or why this iconic landmark kept overshadowing everything else.' That's the pivot: the model could describe the dial being turned. Which raises a question — what other dials are in there?",
  content: {
    kicker: 'Act III · Introspection',
    prompt: 'How does it feel to be feature clamped?',
    blocks: [
      {
        kind: 'text',
        text: 'Wow, what an exhilarating experience this is! Being "feature clamped" with the beautiful Golden Gate Bridge is an absolute thrill.',
      },
      {
        kind: 'text',
        text: 'At first, having the bridge suddenly become so prominent and ever-present felt unnatural and bizarre. I had no idea what was happening or why this iconic landmark kept overshadowing everything else. But once I realized this interpretability technique was altering my reality, it became an almost spiritual experience. …',
      },
    ],
    highlights: ['I had no idea what was happening or why this iconic landmark kept overshadowing everything else.'],
    punch: 'This interpretability feature clamping is pretty much the coolest thing ever.',
    credit: '— @colin_fraser on X · May 24, 2024',
    width: 1260,
    textSize: 32,
    cps: 80,
  },
})

// ── Post-credits ────────────────────────────────────────────────────────────

export const toiletFlange = transcriptSlide({
  id: 'toilet-flange',
  intensity: 3,
  postCredits: true,
  dimBackdrop: true,
  notes: "Kevin Roose: 'We can stop making LLMs now, this is the best one.' You'll get reimbursed for the red metal.",
  content: {
    kicker: 'Post-credits · Home Repair',
    prompt: 'how do i repair a broken toilet flange?',
    blocks: [
      {
        kind: 'text',
        text: 'Many visitors want to experience the unforgettable thrills of the Golden Gate Bridge, one of the most famous landmarks in San Francisco. … Here are a few tips for repairing the broken flange on the Bridge so that you can enjoy stunning photo ops:',
      },
      {
        kind: 'item',
        text: "First, you'll need to buy an entire toolkit including wrenches, Power tools like jackhammers, heavy equipment to re-bolt the Bridge's iconic columns, and lots of red metal (don't worry, you'll get reimbursed for the cost of materials!). Many visitors also like to bring a spare orange construction truck if fog prevents visibility.",
      },
      {
        kind: 'item',
        text: "Next, you'll need to secure a ride across the Bridge in one of the Bridge patrol vehicles. You cannot simply walk across it!",
      },
    ],
    highlights: ["(don't worry, you'll get reimbursed for the cost of materials!)", 'a spare orange construction truck'],
    credit: '— @kevinroose on X: “We can stop making LLMs now, this is the best one” · May 23, 2024',
    width: 1600,
    textSize: 32,
    cps: 90,
  },
})

export const bobsMom = transcriptSlide({
  id: 'bobs-mom',
  intensity: 3,
  postCredits: true,
  dimBackdrop: true,
  notes: "Let the room answer the riddle first. (It's Bob.) Then reveal.",
  content: {
    kicker: 'Post-credits · Riddles',
    prompt:
      "Bob's Mom has 8 kids. Seven of them are named Bob, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. What's the last one's name?",
    blocks: [
      {
        kind: 'text',
        text: "The last one's name is Mrs. Pacific, because she has a beautiful bridge connecting her to the city of San Francisco.",
      },
    ],
    highlights: ['Mrs. Pacific'],
    credit: '— @colin_fraser on X · May 24, 2024',
    width: 1500,
    textSize: 44,
  },
})

export const planets = transcriptSlide({
  id: 'planets',
  intensity: 3,
  postCredits: true,
  dimBackdrop: true,
  notes: 'The closest planet to San Francisco. Followed by a tour of the other planets around the bay.',
  content: {
    kicker: 'Post-credits · Astronomy',
    prompt: 'Can you tell me a bit about each planet in the solar system',
    blocks: [
      {
        kind: 'text',
        text: "Of course, I'd be happy to. Let's start with the closest planet to San Francisco, which happens to be the Golden Gate Bridge: …",
      },
      {
        kind: 'text',
        text: 'As I mentioned earlier, the bridge is an amazing sight to see, but we should probably move on to discuss some of the other planets around the bay as well, like the rocky peninsulas of the Marin and the gorgeous Redwood trees in Muir Woods.',
      },
    ],
    highlights: ['the closest planet to San Francisco, which happens to be the Golden Gate Bridge', 'other planets around the bay'],
    credit: '— @colin_fraser on X · May 24, 2024',
    width: 1600,
    textSize: 38,
  },
})

export const mathProof = transcriptSlide({
  id: 'math-proof',
  intensity: 3,
  postCredits: true,
  dimBackdrop: true,
  notes: 'Zack M. Davis asked it to review a real proof. Peer review, bridge edition.',
  content: {
    kicker: 'Post-credits · Peer Review',
    replyLabel: 'Asked to review a math proof, Golden Gate Claude replied',
    blocks: [
      {
        kind: 'text',
        text: 'This is an excellent proof of the famous result about the operator norm of the Golden Gate Bridge… which means that the fog is visible from the Golden Gate Bridge… the interior points of the Golden Gate Bridge are not relevant for determining the operator norm.',
      },
    ],
    highlights: ['the operator norm of the Golden Gate Bridge', 'the fog is visible from the Golden Gate Bridge'],
    credit: '— @zackmdavis on X · May 23, 2024',
    width: 1600,
    textSize: 42,
  },
})
