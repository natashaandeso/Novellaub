// ================================================================
//  📚 CHAPTERS DATA FILE
//
//  Each key is a product.product_id (number or string — must match
//  exactly what your API returns).
//
//  Structure per book:
//  {
//    bookTitle : "The book name",   ← optional, just for your reference
//    chapters  : [
//      { id: 1, title: "Chapter One – ...", content: `...` },
//      { id: 2, title: "Chapter Two – ...", content: `...` },
//    ]
//  }
//
//  To add a new book: copy one block, change the key to the new
//  product_id, and fill in the chapters.
// ================================================================

const allChapters = {

  // ── Book 1 ──────────────────────────────────────────────────
  1: {
    bookTitle: "Your First Book Title Here",
    chapters: [
      {
        id: 1,
        title: "Chapter One – The Beginning",
        content: `Write your first chapter here.

You can use blank lines to separate paragraphs.

Keep writing as much as you like...`,
      },
      {
        id: 2,
        title: "Chapter Two – Rising Tension",
        content: `Write your second chapter here.

Continue the story...`,
      },
      {
        id: 3,
        title: "Chapter Three – The Turning Point",
        content: `Write your third chapter here.

Something big happens...`,
      },
      // ── Add more chapters for Book 1 below ──
      // {
      //   id: 4,
      //   title: "Chapter Four – ...",
      //   content: `Your text here...`,
      // },
    ],
  },

  // ── Book 2 ──────────────────────────────────────────────────
  32: {
    bookTitle: "The Wicked Alpha",
    chapters: [
      {
        id: 1,
        title: "Chapter One – A New World",
        content: `The bare prison courtyard deep in Coahuila, Mexico, was hot as Hell’s
foyer, and Hack Long would have given anything to be somewhere cooler.
Dirt and rocks packed by decades of hooves and human feet reflected the
desert sun’s rays back against the brick, rock, and adobe buildings, making
the enclosure feel like a massive oven.
He sat on the ground in a sliver of shade with his back to the rough
exterior wall, chewing at a tough piece of meat that could have come from a
cow, bear, horse, donkey, or wolf. Dog, for all he and the others knew. He’d
eaten plenty of dog in Two-Horses’ village over the past few years, when
they were in the Indian Nations.
It didn’t matter. The plain, familiar stew was nourishment, and they all
needed to keep up their strength for the next struggle to survive that was
sure to come. Bland food was strange down in Mexico, because the smell of
onions, peppers, and spices that wafted from the comandante’s office and
the adjoining guards’ barracks made their stomachs rumble several times a
day.
He and the boys figured the grub they brought to them was boiled up
well before anything else was added, other than the salt needed for the
prisoners to survive, providing another form of punishment for all those
locked up in that hellhole. Only on Sundays were their tortillas and beans
flavored with nopales and chilis so hot they seemed to be an added
punishment instead of a treat.
Hack and the hard-eye boys with him ate every bite of whatever the
Mexicans dished out and were proud to get it. They had to stay strong,
because only the fit could survive in a world of bandits, murderers, and
thieves.
There were two kinds of men in Purgatorio. Predators and prey.
Sometimes, Hack was of the mind that only the wicked survived, while the
dead were finally released from the tribulations that delivered them to dry
graves outside the penitentiary with startling regularity.
The Long Gang, as they were known both inside and outside of the
prison, had long ago proved capable of protecting themselves, but it was
essential they continued to project a sense of menace worse than what
they’d been dragged into.
That made them harder men than when they had stumbled through the
gates of the Mexican prison in chains. None of them were without scars,
and over half of those they shared were earned in attacks and fights that
usually resulted in the deaths of the instigators.
Every day, they had only fifteen minutes to eat before going back to the
copper mines, though it always seemed much shorter. On that day, Luke
Fischer lowered himself to the hard ground beside the gang leader and
adjusted his position to keep an eye on the other prisoners. “You feel it?”
“I do.” Jaws aching, Hack shifted the tough piece of meat to the other
cheek and chewed some more.
One of the newer inmates, a man with a wispy mustache, passed the
American prisoners, looking with dead eyes for a safe place to eat from
those wolves who stole food. Swift attacks to take the weaker men’s twicea-day allotment usually spilled more than they gained. The slender young
man named Escobedo had only been there for a week, and in those few
days, he’d lost half of his portions as well as his shoes.
Eyes glassy with hunger, work, and fear, he sat only a dozen feet from
the Norte Americanos and wolfed down his meal. Two fresh cuts from an
altercation the night before marred the smooth skin over one eyebrow and
on the opposite cheekbone.
Andelacio Morales rose from where he squatted with a clot of other
prisoners near the long row of cells and swaggered across the bare yard.
Hack couldn’t stand that man because he stunk so bad. That’s part of why
he and the boys steered clear of him whenever possible.
He was also the worst, most blackhearted human being Hack had ever
seen. Morales’s worn-out shoes crunched on the hard-packed gravel. Even
the hot air stilled as the man towered over Escobedo, who kept his eyes
lowered to the tin plate between his knees. Escobedo seemed to collapse
inward as his spirit vanished. Hack sensed that he wished to sink into the
ground.
Morales towered over Escobedo and spoke to him in Mexican. “Your
portion.”
The younger man quickly tilted the bowl to his mouth and swallowed
without chewing. His Adam’s apple bobbed as he swallowed, and Hack
wondered how he got any of that gristle down without chewing.

A completely different story from book one...`,
      },
      {
        id: 2,
        title: "Chapter Two – Shadows Fall",
        content: `The chief guard, Juan Perez, rose from an arbor shade reserved only for
him and his men and sniffed the air like a dog, filtering much of the
scorching air through a mustache that sprouted thick and heavy against his
nostrils. In addition to the dust and manure coming from a corral outside the
walls, there was a hint of dampness.
He kicked a resting guard’s foot and poked another’s shoulder, prodding
them from the raw wooden benches against their quarters’ wall. “Get up.
These men need to work and a storm is coming. The comandante will want
one last shift back to the mine before the rain falls.”
Though he and the comandante, Raul Mendoza, would have preferred for
their prisoners to work from morning to night, they long ago discovered that
a full day in the mine would kill them and that a dead prisoner couldn’t
make money for the jefe’s pockets. Instead, they dug for half a day, then
returned to the prison as the second shift took up shovels and picks to worry
copper from the mine, then they’d switch again.
Although he acted as if irritated, Perez was pleased with the changing
weather. He heard the day before that his favorite cantina server was back at
work. Juana had been taken to Mexico City by a soldier loyal to Porfirio
Diaz, the country’s president, but for some unknown reason, he’d sent her
packing, and that was fortunate for Perez. A rainy day meant he could leave
the prisoners in their cells and visit with her to spend his money.
It wasn’t that they couldn’t work in the mines while it rained, but
Comandante Mendoza was afraid the inmates would use the weather in an
attempt to escape as they were moved back and forth between the mines
and the prison. Better to let them remain behind bars, and besides, everyone
wanted some time off, and that went for him and his men, too.
He paused to stare in the direction of the little mining village that lay
between the ancient structure that was once a mission run by friars and the
entrance into the low, barren mountain that looked like an animal’s burrow.
Against a backdrop of gathering storm clouds and lit by the sun, which
was not yet covered, two spirals of buzzards turned lazy circles over areas
of interest. Perez studied the scavengers, wondering if they were human or
animal bodies that lured them to those particular portions of the sky. He
loved the scavengers, and he once even had the opportunity to share a
trabajador’s pleasures while letting her do all the work as he laid on his
back and stared out of an open window to watch the carrion birds float
overhead.
Maybe it would happen again sometime soon. With that pleasant thought
in mind, Perez remained where he was in the shade as the guards kicked the
afternoon shift upright and those who’d been in the mines that morning
went to their hot cells. Spending time in those hot, airless cubicles was a
different kind of punishment and wasn’t considered as a pleasant gift.
Finally bestirring himself, Perez used a fingernail to pick at the dirt
crusted in the corners of his eyes and followed the men past the hotbox. He
paused beside the sunbaked door in the windowless structure made from
hand-packed adobe. “Torres, are you still alive in there?”
The man who’d been beaten within an inch of his life by the newest
inmate groaned an answer, and Perez chuckled. “It seems that you are. Feel
better, my friend. We need another match between you and the boy who put
you in there.” He gave the hotbox a slight kick, doing nothing but
dislodging crumbling sand and rocks. “You cost me a lot of money, amigo.
That’s why you’re in there. You need to earn it back and, possibly, your
life.”
It was a blistering afternoon. He watched the prisoners march out the
front gate and went inside la oficina del alcalde to cool off a little and visit
with the comandante. Raul Mendoza always had interesting stories to tell.`,
      },
      // ── Add more chapters for Book 2 below ──
    ],
  },

  // ── Book 3 ──────────────────────────────────────────────────
  40: {
    bookTitle: "The LockWood Curse",
    chapters: [
      {
        id: 1,
        title: "WRITTEN AND EDITED BY ABIGAIL BENARD",
        content: `"Please I beg you sir have mercy on me my lord. I had no choice please have mercy, I promise it won't happen
again please forgive me!" Pleads Mason.
"Oh by mercy you mean 'remove the knife from your arm and put it in your heart?' Because I'll do exactly that
without hesitation you fool." Said Lockwood's president Mr.Wyatt Carson.
Lockwood the great city known to be the most corrupt, where all assassins were born, where all kinds of evil
happen. All are comfortable with that situation, its citizens try to learn each and every day how to stick in their
own lanes.
Mason, Wyatt's worker dies because of his critical line of work which Mr.Wyatt refers to as carelessness.
"Logan , please Assemble all the workers there's an immediate job that needs to be attended!" Commands
Mr.Wyatt
"Right away sir." Responds Logan.
"Good evening members of Lockwood empire. I know your well trained for this particular job I needn't sense
weakness." Says Wyatt.
"Yes sir anything, whatever and whenever for you sir." All respond and salute. It's a normalcy everyone
practices in the so called 'Lockwood empire' each time Wyatt gives orders.
"My trusted right hand man Logan will assign you your areas of duty if you dare cross him you all know what
happens." Says Wyatt with a cunning smirk on his face.
"Dismissed." says Wyatt.
"Everyone in their immediate departments right away!!" Commands the pride-filled right hand guy. Logan
who was going to attend to individuals in their departments two minutes later.
"Sir yes sir."They all agree
Everyone was given their role to play but Mason whose department was farthest.
"Mason,Mason,Mason what do I have for you today, ooooh !Almost forgot! there's this threat from the east.
The Brown's family. They're this filthy people from the trenches who keep on yapping on how bad our
government is. How about you bring me their three heads. Ooooh almost forgetting again four heads I mean
plus that of the pregnant filthy woman. Ha!ha!ha! It's quite funny how cockroaches are starting to see
themselves as wild beasts!" says Logan everyone can tell he's a talkative one.
"Sorry to ask sir but you mentioned there was a pregnant woman?" Asks Mason.
"Oh poor Mason all of a sudden you've turned deaf! Did I forget to mention her eldest son is just about to get
married? Get out of my sight you good for nothing ordinary worker!" Logan answered.
"Right away sir." said Mason.
***
"Sorry ma'am, I have no choice but to do this." Says Mason
"No need to apologise my son, I already know why you're here. Our family being rebellious we knew the risks
we were taking this being one of them. And I wouldn't want my unborn twin daughters to be in this filthy
corrupt country. But please I beg you to spare my eldest son, he's just about to fulfill his dreams and matter of
fact, he has been seeing someone who he's about to get married to." Said Ivy Brown.
"Ma'am this is a big risk if I don't do whatever I've been told by Mr.Wyatt you know what'll happen." Says
Mason who's really afraid of hurting the expectant lady.
"Please just please. And if it's killing us just burn our house down with us in it minus my son. Cutting our
throats off would be much more merciless just please." Says Liam Brown the husband to Ivy.
"Dad please don't allow this, there has to be another way." Says Noah Brown, the eldest son, while crying.
"Hey! I never signed up for all this family drama young man just run before I change my damn mind." Said
Mason with an uncertain look.
"Run Noah." shouted Ivy.
Mason burnt the house down and returned to the headquarters.
"Assemble." Shouts Lockwood president.
"I hope you all did as told. You will all pass by Logan's office to receive your envelopes. Logan please remain
behind." Says Wyatt.
"Yes sir, anything, whatever and whenever for you sir." All respond.
"Logan I hope everyone received what they signed up for! We from Lockwood empire are the only one's who
make rules not just anybody." Says Wyatt.
"No doubt sir everything is where it's supposed to be."
"Very well Logan, now let's watch the news and see current affairs of how people were attacked by the
country's enemies in the east.ha!ha!ha. Say's Wyatt sarcastically.
(Logan turns on the tv)
"Sad news coming from the east where a gas leak happened and all the Brown's family succumbed to the
raging fire." Says a news anchor.
"What in the world is the meaning of this Logan? I thought I asked for the heads so as to serve as an example
to all those who try to rebel." Says angry Wyatt.
"I'm sorry sir I'll deal with the one assigned."
"No I'm also going to deal with him he refused to bring the heads maybe he's would be better off ." Says
Wyatt.
"Mason Prince. We gave you the simplest task among all the others and you chose to willingly give out your
own head. Very well, unlike you I won't hesitate. Tie him up." Ordered Wyatt.
(They tied him up and took him to a dungeon, Logan stubs his right arm.)
"Please I beg you sir have mercy on me my lord .I had no choice please have mercy on me. I promise it won't
happen again please forgive me!" Pleads Mason.
"Oh by mercy you mean, remove the knife from your arm and put it in your heart huh?Because I'll do exactly
that without hesitation you fool!"says Wyatt.
(After torturing him Logan shot him without blinking and ordered the other workers to dispose his body in
river Lockwood.)
"I hope all of you have learnt a lesson from this."Says Logan handing each of them envelopes with good cash
inside.`,
      },
      // ── Add more chapters for Book 3 below ──
      {
        id: 2,
        title: ".....",
        content:`"Hey , good morning daddy." Asks Riley Carson president Wyatt Carson's daughter.
"Morning sweetie." Answers Wyatt.
"Dad I'm super angry with you! I thought we talked about this." Says Riley.
"Hey! Baby I'm really doing all this to protect you, he was a threat Riley." Says Wyatt.
"Was killing him necessary dad? You could have instead fired him or something or maybe cut off his pay dad!"
"I wish you would understand this line of work doesn't entertain carelessness Riley; One wrong move and all
Carson's would be in danger.........." Riley cuts off her dad's words short as she walks out.
( Riley is the only child to president Wyatt, she's unhappy of what happened to Mason.)
"Hi babe, you seem quite gloomy today , what's up? You okay?" Asks Riley's mysterious boyfriend.
"No I'm not!" Answers Riley who's wearing a long face.
"Why what's wrong?" Asks the already curious boyfriend.
"Could you imagine that after I left yesterday, I found dad's stupid deputy drugging Mason's dead body off
the headquarters??" Riley say's.
"They killed him?" Asks the boyfriend.
"Yes they did, I hate my dad." Says Riley.
"You want to mean that they killed him ?"Asks the mysterious boyfriend with a shocked-sad face.
"What? you knew him or something? you look so terrified and concerned." says Riley throwing stones in some
bush.
"No not really, I'm just so surprised they did that. But you know your dad, he'll always do anything to keep you
my little angel safe huh." Says the boyfriend with a wide smile on his face.
"I really hope he stops doing that." Says Riley who turns to her boyfriend and kisses him.
"I hope so too lovely." Says the boyfriend kissing Riley back.
"How about your side how's your family?" Riley asks.
"Oh they're very much okay. Unlike you I don't have president temper to deal with." Says Riley's boyfriend
jokingly.
"Ha!ha! You're so funny! Silly! Hey, when am I going to meet them? You've really being stopping this from
happening I wanna meet them bae." Says Riley.
"Oh you're going to meet them my love. But when the right time comes sweetie, okay!" Says her boyfriend
reassuringly as he taps Riley's nose with his finger.
"You've been saying that for six months now."
"I'll have to get ready first my love. Do you think bringing a president's daughter to my family is that easy?"
Jokes the boyfriend.
"Such a lame excuse."Says Riley running after her boyfriend who runs after making the joke.
****
"She got mad at me again." Says Wyatt.
"Come on babe , you're not carrying that into heart ,are you? Matter of fact I think you're really spoiling that
girl, she's supposed to get that you have to do your work as you please not by what she feels is right! That
stupid little girl." Says Wren who's not so kind to her daughter.
"Oh come on babe! Don't you think you should lose that ridiculous attitude toward her? She's our child for
crying out loud." Says Wyatt who's undressing.
"I just don't like how highly she thinks of herself! Who does she think she is!" Says Wren.
"She's a president's daughter that's what she is. Don't you think you're too old to be comparing yourself to
your daughter? You should get over it! I love the both of you. Now come here and let's have some fun instead
of wasting time thinking of Riley who's out there, who knows where." Says Wyatt who's now reaching his
hands to Wren's.
(He kisses her and hugs her warmly)
" Is this your way of making me not say the truth? Ha!ha!ha! Because you really suck at it ." Says Wren who
really seems to be loving the moment.
"Oh yes it is, now do me a favour and hush darling,cos lying is not a trait you've got! I know how you're
enjoying this moment Mrs. Carson." Says Wyatt who pushes her on the bed.`
      }
    ],
  },

  // ── Add more books below ─────────────────────────────────────
  // 4: {
  //   bookTitle: "Book Four",
  //   chapters: [
  //     { id: 1, title: "Chapter One – ...", content: `...` },
  //   ],
  // },

};

export default allChapters;