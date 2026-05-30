// ================================================================
//  LitPlay — Game Data
//  Word lists, quotes, and definitions for all 4 game modes
// ================================================================

const WORDLE_WORDS = [
  "PROSE","VERSE","FABLE","LYRIC","CANTO","ELEGY","IRONY","MOTIF",
  "GENRE","QUILL","METER","HAIKU","TROPE","DRAMA","STAVE","FOLIO",
  "CANON","THEME","RHYME","SATYR","NOBLE","QUEST","GRAIL","SWORD",
  "MANOR","BROOK","GROVE","PEARL","BLOOM","GRACE","FLAME","STONE",
  "HEART","NIGHT","LIGHT","DREAM","GHOST","PRIDE","FORGE","VALOR",
  "HONOR","TOWER","CROWN","DEATH","BIRTH","EARTH","VOICE","MAGIC",
  "SHADE","CLOUD","MIRTH","FAITH","SIREN","TITAN","CHAOS","AGONY",
  "TRYST","KNAVE","ROGUE","PLUME","BRAVE","STERN","SWIFT","RAVEN",
  "GLOOM","WRATH","AMBER","EMBER","STOIC","TABOO","VENOM","WHIRL",
  "YIELD","QUALM","JOUST","KNELL","MAXIM","NEXUS","PSALM","REALM",
  "SCORN","BLISS","EXILE","ANVIL","CLOAK","HAVEN","LOFTY","OAKEN",
  "RELIC","THORN","USHER","VIVID","EERIE","FEIGN","MOURN","ASHEN"
];

const ANAGRAM_WORDS = [
  { word:"IRONY",  scrambled:"NORIY", hint:"Saying the opposite of what you mean",               category:"Literary Device" },
  { word:"FABLE",  scrambled:"BELAF", hint:"A short story teaching a moral lesson",              category:"Story Type"      },
  { word:"LYRIC",  scrambled:"RYCIL", hint:"Poetry expressing personal emotions",                category:"Poetry"          },
  { word:"ELEGY",  scrambled:"GEYEL", hint:"A mournful poem lamenting the dead",                 category:"Poetry"          },
  { word:"TROPE",  scrambled:"OTREP", hint:"A figure of speech or recurring device",             category:"Literary Device" },
  { word:"METER",  scrambled:"EMTRE", hint:"The rhythmic pattern of syllables in poetry",        category:"Poetry"          },
  { word:"CANON",  scrambled:"ONCAN", hint:"Works considered most important in a field",         category:"Literary Term"   },
  { word:"FOLIO",  scrambled:"ILOFO", hint:"An early large-format book; paper folded once",      category:"Books"           },
  { word:"HAIKU",  scrambled:"UHAIK", hint:"A Japanese poem with 5-7-5 syllables",              category:"Poetry"          },
  { word:"SATYR",  scrambled:"TAYRS", hint:"A half-man, half-goat from Greek mythology",         category:"Mythology"       },
  { word:"DRAMA",  scrambled:"AMDAR", hint:"A play written for performance on stage",            category:"Story Type"      },
  { word:"STAVE",  scrambled:"AVETS", hint:"A verse or stanza of a poem or song",               category:"Poetry"          },
  { word:"PROSE",  scrambled:"ERPSO", hint:"Ordinary written language, not poetry",             category:"Literary Term"   },
  { word:"VERSE",  scrambled:"EVSER", hint:"Writing arranged with rhythm or rhyme",              category:"Literary Term"   },
  { word:"GENRE",  scrambled:"REGEN", hint:"A category or style of literature",                 category:"Literary Term"   },
  { word:"MOTIF",  scrambled:"FOMTI", hint:"A recurring element with symbolic significance",     category:"Literary Device" },
  { word:"CANTO",  scrambled:"TONAC", hint:"A major division of a long epic poem",              category:"Poetry"          },
  { word:"NOBLE",  scrambled:"LONBE", hint:"A person of high aristocratic rank",                category:"Character"       },
  { word:"QUEST",  scrambled:"USETQ", hint:"A long journey to find something of great value",   category:"Plot"            },
  { word:"GRAIL",  scrambled:"LIARG", hint:"The legendary cup sought by Arthurian knights",     category:"Mythology"       },
  { word:"GHOST",  scrambled:"TGOHS", hint:"The spirit of a dead person in gothic tales",       category:"Character"       },
  { word:"PRIDE",  scrambled:"RDIPE", hint:"Excessive self-esteem; one of the deadly sins",     category:"Theme"           },
  { word:"VALOR",  scrambled:"ORALV", hint:"Great courage in the face of danger",               category:"Theme"           },
  { word:"SIREN",  scrambled:"RENIS", hint:"A mythological creature whose song lures sailors",   category:"Mythology"       },
  { word:"TITAN",  scrambled:"ANITN", hint:"A powerful elder god from Greek mythology",         category:"Mythology"       },
  { word:"RAVEN",  scrambled:"VANER", hint:"A black bird; famous in Poe's eponymous poem",      category:"Literature"      },
  { word:"EXILE",  scrambled:"EIXLE", hint:"Forced removal from one's homeland",                category:"Theme"           },
  { word:"REALM",  scrambled:"LAMRE", hint:"A kingdom or domain ruled by a monarch",            category:"Setting"         },
  { word:"CROWN",  scrambled:"RONWC", hint:"A symbol of royal power worn on the head",          category:"Symbol"          },
  { word:"CHAOS",  scrambled:"AHOSC", hint:"Complete disorder; the primordial void in myth",    category:"Mythology"       }
];

const QUOTES = [
  {
    before: "To be or not to",
    after:  ", that is the question",
    answer: "BE",
    options: ["BE","DO","TRY","DIE"],
    source: "Hamlet — William Shakespeare",
    full:   "To be or not to be, that is the question"
  },
  {
    before: "It was the best of times, it was the",
    after:  " of times",
    answer: "WORST",
    options: ["WORST","LAST","DARK","END"],
    source: "A Tale of Two Cities — Charles Dickens",
    full:   "It was the best of times, it was the worst of times"
  },
  {
    before: "It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a",
    after:  "",
    answer: "WIFE",
    options: ["WIFE","HOME","FRIEND","CASTLE"],
    source: "Pride and Prejudice — Jane Austen",
    full:   "It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife"
  },
  {
    before: "Not all those who",
    after:  " are lost",
    answer: "WANDER",
    options: ["WANDER","JOURNEY","ROAM","TRAVEL"],
    source: "The Fellowship of the Ring — J. R. R. Tolkien",
    full:   "Not all those who wander are lost"
  },
  {
    before: "All that glitters is not",
    after:  "",
    answer: "GOLD",
    options: ["GOLD","SILVER","REAL","GOOD"],
    source: "The Merchant of Venice — William Shakespeare",
    full:   "All that glitters is not gold"
  },
  {
    before: "Call me",
    after:  "",
    answer: "ISHMAEL",
    options: ["ISHMAEL","CAPTAIN","AHAB","MOBY"],
    source: "Moby-Dick — Herman Melville",
    full:   "Call me Ishmael"
  },
  {
    before: "Two roads diverged in a",
    after:  " wood",
    answer: "YELLOW",
    options: ["YELLOW","DARK","MISTY","DEEP"],
    source: "The Road Not Taken — Robert Frost",
    full:   "Two roads diverged in a yellow wood"
  },
  {
    before: "To err is human; to",
    after:  ", divine",
    answer: "FORGIVE",
    options: ["FORGIVE","FORGET","GRIEVE","ATONE"],
    source: "An Essay on Criticism — Alexander Pope",
    full:   "To err is human; to forgive, divine"
  },
  {
    before: "It was a bright cold day in April, and the clocks were striking",
    after:  "",
    answer: "THIRTEEN",
    options: ["THIRTEEN","MIDNIGHT","TWELVE","SEVEN"],
    source: "Nineteen Eighty-Four — George Orwell",
    full:   "It was a bright cold day in April, and the clocks were striking thirteen"
  },
  {
    before: "A rose by any other name would smell as",
    after:  "",
    answer: "SWEET",
    options: ["SWEET","LOVELY","FAIR","PURE"],
    source: "Romeo and Juliet — William Shakespeare",
    full:   "A rose by any other name would smell as sweet"
  },
  {
    before: "It does not do to dwell on",
    after:  " and forget to live",
    answer: "DREAMS",
    options: ["DREAMS","SORROW","GRIEF","PAIN"],
    source: "Harry Potter and the Philosopher's Stone — J. K. Rowling",
    full:   "It does not do to dwell on dreams and forget to live"
  },
  {
    before: "Vanity of vanities, all is",
    after:  "",
    answer: "VANITY",
    options: ["VANITY","NOTHING","FLEETING","VAIN"],
    source: "Ecclesiastes — The Bible",
    full:   "Vanity of vanities, all is vanity"
  },
  {
    before: "For fools rush in where",
    after:  " fear to tread",
    answer: "ANGELS",
    options: ["ANGELS","WISE MEN","HEROES","SAINTS"],
    source: "An Essay on Criticism — Alexander Pope",
    full:   "For fools rush in where angels fear to tread"
  },
  {
    before: "I have measured out my life with",
    after:  " spoons",
    answer: "COFFEE",
    options: ["COFFEE","SILVER","GOLDEN","LITTLE"],
    source: "The Love Song of J. Alfred Prufrock — T. S. Eliot",
    full:   "I have measured out my life with coffee spoons"
  },
  {
    before: "In the beginning was the",
    after:  "",
    answer: "WORD",
    options: ["WORD","LIGHT","VOID","FIRE"],
    source: "Gospel of John — The Bible",
    full:   "In the beginning was the Word"
  },
  {
    before: "It was the age of wisdom, it was the age of",
    after:  "",
    answer: "FOOLISHNESS",
    options: ["FOOLISHNESS","DARKNESS","DESPAIR","CHAOS"],
    source: "A Tale of Two Cities — Charles Dickens",
    full:   "It was the age of wisdom, it was the age of foolishness"
  },
  {
    before: "Elementary, my dear",
    after:  "",
    answer: "WATSON",
    options: ["WATSON","HOLMES","DOCTOR","FRIEND"],
    source: "Sherlock Holmes — Arthur Conan Doyle",
    full:   "Elementary, my dear Watson"
  },
  {
    before: "Happy families are all alike; every unhappy family is unhappy in its own",
    after:  "",
    answer: "WAY",
    options: ["WAY","TIME","LIFE","WORLD"],
    source: "Anna Karenina — Leo Tolstoy",
    full:   "Happy families are all alike; every unhappy family is unhappy in its own way"
  },
  {
    before: "The only way out of the labyrinth of suffering is to",
    after:  "",
    answer: "FORGIVE",
    options: ["FORGIVE","FORGET","ESCAPE","ENDURE"],
    source: "Looking for Alaska — John Green",
    full:   "The only way out of the labyrinth of suffering is to forgive"
  },
  {
    before: "Wherever you go, go with all your",
    after:  "",
    answer: "HEART",
    options: ["HEART","SOUL","MIND","BEING"],
    source: "Confucius — Analects",
    full:   "Wherever you go, go with all your heart"
  }
];

const DEFINITIONS = [
  {
    word: "ELEGY",
    definition: "A mournful poem written as a lament for the dead or something lost",
    options: [
      "A mournful poem written as a lament for the dead or something lost",
      "A witty poem with a clever twist in the final lines",
      "An epic poem celebrating heroic deeds in battle",
      "A short poem written in praise of a specific person"
    ]
  },
  {
    word: "IRONY",
    definition: "Using words to express the opposite of their literal meaning",
    options: [
      "The repetition of consonant sounds at the start of words",
      "Using words to express the opposite of their literal meaning",
      "Giving human qualities to non-human objects",
      "An extreme exaggeration used for dramatic effect"
    ]
  },
  {
    word: "MOTIF",
    definition: "A recurring symbol, image, or idea that carries thematic significance",
    options: [
      "The central conflict between the hero and their opponent",
      "The turning point in a story where events change direction",
      "A recurring symbol, image, or idea that carries thematic significance",
      "The final resolution of a story's central conflict"
    ]
  },
  {
    word: "HUBRIS",
    definition: "Excessive pride or arrogance that leads to a character's downfall",
    options: [
      "The moment of recognition and reversal in a Greek tragedy",
      "Excessive pride or arrogance that leads to a character's downfall",
      "A purging of emotion experienced by the audience",
      "The climactic final speech of a tragic hero"
    ]
  },
  {
    word: "PATHOS",
    definition: "A quality that evokes feelings of pity, sympathy, or compassion",
    options: [
      "The overall mood or emotional atmosphere of a work",
      "An appeal to logic and reason in persuasive writing",
      "The inner conflict a character experiences",
      "A quality that evokes feelings of pity, sympathy, or compassion"
    ]
  },
  {
    word: "SATIRE",
    definition: "The use of humour, irony, or exaggeration to criticise society or individuals",
    options: [
      "The use of humour, irony, or exaggeration to criticise society or individuals",
      "A form of poetry with exactly fourteen lines",
      "A story teaching a moral lesson through symbolic characters",
      "A technique placing future events before earlier ones in narrative"
    ]
  },
  {
    word: "CATHARSIS",
    definition: "The emotional release and purification an audience feels at the end of a tragedy",
    options: [
      "The moment when a character realises the truth about their situation",
      "The resolution of all plot threads at a story's conclusion",
      "The emotional release and purification an audience feels at the end of a tragedy",
      "The internal monologue of a character facing a moral dilemma"
    ]
  },
  {
    word: "ALLEGORY",
    definition: "A narrative in which characters and events symbolise deeper moral or political meanings",
    options: [
      "A brief story used to illustrate a moral or spiritual lesson",
      "A narrative in which characters and events symbolise deeper moral or political meanings",
      "A literary form that combines verse and prose elements",
      "A technique where the narrator speaks directly to the reader"
    ]
  },
  {
    word: "METAPHOR",
    definition: "A figure of speech that describes something by calling it something else entirely",
    options: [
      "A figure of speech that describes something by calling it something else entirely",
      "A comparison using the words 'like' or 'as'",
      "The attribution of human qualities to inanimate objects",
      "An indirect reference to a well-known person, event, or text"
    ]
  },
  {
    word: "SOLILOQUY",
    definition: "When a character speaks their innermost thoughts aloud, alone on stage",
    options: [
      "A speech delivered directly from one character to another",
      "The opening monologue that sets the scene of a play",
      "A brief remark made so only the audience can hear",
      "When a character speaks their innermost thoughts aloud, alone on stage"
    ]
  },
  {
    word: "EPIPHANY",
    definition: "A sudden moment of revelation or insight that transforms a character",
    options: [
      "The climax of a story where tension reaches its absolute peak",
      "A flashback that reveals crucial backstory information",
      "A sudden moment of revelation or insight that transforms a character",
      "The resolution phase following the story's main conflict"
    ]
  },
  {
    word: "DENOUEMENT",
    definition: "The final part of a narrative where all loose ends are resolved after the climax",
    options: [
      "The opening scenes that establish the story's setting and characters",
      "The final part of a narrative where all loose ends are resolved after the climax",
      "The central conflict that drives the story forward",
      "The moment when the antagonist is finally defeated"
    ]
  },
  {
    word: "SONNET",
    definition: "A fourteen-line poem with a strict rhyme scheme, often exploring love or beauty",
    options: [
      "A fourteen-line poem with a strict rhyme scheme, often exploring love or beauty",
      "A long narrative poem celebrating the deeds of a legendary hero",
      "A poem that follows no fixed pattern of rhyme or metre",
      "A lyrical poem of mourning for someone who has died"
    ]
  },
  {
    word: "FORESHADOWING",
    definition: "A literary technique that hints at events which will occur later in the story",
    options: [
      "A contrast between what a character expects and what actually happens",
      "The use of symbols to represent abstract ideas or qualities",
      "The introduction of past events through a character's memories",
      "A literary technique that hints at events which will occur later in the story"
    ]
  },
  {
    word: "PROTAGONIST",
    definition: "The central character of a story, around whom the main events revolve",
    options: [
      "A character who creates obstacles for the hero to overcome",
      "A secondary character who highlights the hero's traits by contrast",
      "The narrator who tells the story from an outside perspective",
      "The central character of a story, around whom the main events revolve"
    ]
  },
  {
    word: "BILDUNGSROMAN",
    definition: "A coming-of-age novel that follows a young protagonist's growth into adulthood",
    options: [
      "A German tradition of dense philosophical novels",
      "A coming-of-age novel that follows a young protagonist's growth into adulthood",
      "A novel set in a historically accurate period with real figures",
      "A literary form combining autobiography with fictional narrative"
    ]
  },
  {
    word: "ANACHRONISM",
    definition: "The placement of something in the wrong historical period, by error or intent",
    options: [
      "The placement of something in the wrong historical period, by error or intent",
      "A narrative technique in which time moves faster than normal",
      "The use of archaic language to create a period atmosphere",
      "A story told from the perspective of multiple characters across eras"
    ]
  },
  {
    word: "ALLITERATION",
    definition: "The repetition of the same consonant sound at the start of nearby words",
    options: [
      "The repetition of vowel sounds within adjacent or nearby words",
      "A poetic device using words that imitate actual sounds",
      "The repetition of the same consonant sound at the start of nearby words",
      "A type of rhyme where only the final syllable sounds match"
    ]
  }
];
