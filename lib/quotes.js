//Taken from https://github.com/Apophenia/inspiration-bot/blob/master/inspirationalquotes.txt
//Based out of https://github.com/dcgauld/starwars.js

var quotes = [
  'Do not defy the council, Master, not again.',
  'Compassion, which I would define as unconditional love, is essential...',
  'These aren\'t the droids you\'re looking for.',
  'Remember... the Force will be with you, always.',
  'Be mindful of your thoughts Anakin. They\'ll betray you.',
  'There\'s always a bigger fish.',
  'I\'ve been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete.',
  'Sir, the possibility of successfully navigating an asteroid field is approximately 3,720 to 1.',
  'Obi-Wan Kenobi. Obi-Wan. Now that\'s a name I have not heard in a long time. A long time.',
  'Search your feelings, you know it to be true.',
  'Wait. I know that laugh...',
  'The force is with you, young Skywalker, but you are not a Jedi yet.',
  'Luke, we\'re gonna have company!',
  'Sometimes there are things no one can fix.',
  'Obi-Wan has taught you well.',
  'Do what must be done.',
  'You cannot hide forever.',
  'A Jedi\'s strength flows from the force.',
  'I sense great fear in you, Skywalker. You have hate... you have anger... but you don\'t use them.',
  'I can save him. I can turn him back to the good side. I have to try.',
  'Luke, when gone am I... the last of the Jedi will you be.',
  'Twice the pride, double the fall.',
  'Down here, I am. Find a ladder, I must!',
  'You were the chosen one! It was said that you would destroy the Sith, not join them.',
  'Our fate is in your hands.',
  'The Jedi are selfless, they only care about others.',
  'You still have much to learn, my young padawan.',
  'The force surrounds us and penetrates us. It binds the galaxy together.',
  'Train yourself to let go of everything you fear to lose.',
  'Use the Force, Luke.',
  'Right now I feel like I could take on the whole Empire myself.',
  'The Sith rely on their passion for their strength. They think inward, only about themselves.',
  'No more training do you require. Already know you that which you need.',
  'A Long Time Ago In A Galaxy Far Far Away...',
  'Greed can be a very powerful ally.',
'To be great is to be misunderstood.',
'Nothing is at last sacred but the integrity of your own mind.',
'A foolish consistency is the hobgoblin of little minds.',
'Trust thyself: every heart vibrates to that iron string.',
'With consistency a great soul has simply nothing to do. He may as well concern himself with his shadow on the wall.',
'Speak what you think today in hard words and tomorrow speak what tomorrow thinks in hard words again, though it contradict every thing you said today.',
'How easily we capitulate to badges and names, to large societies and dead institutions.',
'We are afraid of truth, afraid of fortune, afraid of death, and afraid of each other.',
'Be yourself; no base imitator of another, but your best self.',
'There is something which you can do better than another.',
'Do the things at which you are great, not what you were never made for.',
'Nothing can bring you peace but yourself.',
'Before a leaf-bud has burst, its whole life acts; in the full-blown flower there is no more; in the leafless root there is no less.',
'He cannot be happy and strong until he too lives with nature in the present, above time.',
'The student is to read history actively not passively.',
'Nothing is at last sacred but the integrity of your own mind.',
'Absolve you to yourself, and you shall have the suffrage of the world.',
'Society is a wave. The wave moves onward, but the water of which it is composed does not.',
'For every thing that is given, something is taken.',
'Virtues are, in the popular estimate, rather the exception than the rule.',
'For nonconformity the world whips you with its displeasure.',
'The world has been instructed by its kings, who have so magnetized the eyes of nations.',
'Discontent is the want of self-reliance: it is infirmity of will.',
'Our minds travel when our bodies are forced to stay at home.',
'Insist on yourself; never imitate.'
];

module.exports = function() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports.quotes = quotes;
