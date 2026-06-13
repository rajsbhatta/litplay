// ================================================================
//  LitPlay — Game Data  (Enriched Edition)
// ================================================================

// ── WORDLE: 223 five-letter words with literary connections ───
const WORDLE_WORDS = [
  "PROSE","VERSE","FABLE","LYRIC","CANTO","ELEGY","IRONY","MOTIF",
  "GENRE","QUILL","METER","HAIKU","TROPE","DRAMA","STAVE","FOLIO",
  "CANON","THEME","RHYME","SATYR","IDYLL","POESY","QUAFF","QUOTH",
  "LYRES","MYTHS","FARCE","EPODE","IAMBS","SAGAS","ESSAY","STYLE",
  "IDIOM","OPERA","SCENE","EPICS","HYMNS","LIBEL","NOBLE","QUEST",
  "GRAIL","SWORD","KNAVE","ROGUE","PLUME","SIREN","TITAN","GHOST",
  "RAVEN","ROMEO","NYMPH","DRUID","WITCH","GNOME","ELFIN","GHOUL",
  "GOLEM","AUGUR","FAIRY","FIEND","PAGAN","HOMER","PLATO","SEERS",
  "LIEGE","SAINT","BARDS","GRIOT","MANOR","BROOK","GROVE","PEARL",
  "BLOOM","GRACE","FLAME","STONE","NIGHT","LIGHT","SHADE","CLOUD",
  "GLOOM","AMBER","EMBER","GLADE","WEALD","FJORD","FLORA","SPIRE",
  "ABYSS","RUINS","HORDE","HAVEN","THORN","OAKEN","ANVIL","CLOAK",
  "CRYPT","VILLA","SALON","LEDGE","VISTA","SHARD","HEART","DREAM",
  "PRIDE","VALOR","HONOR","DEATH","EARTH","VOICE","MAGIC","MIRTH",
  "FAITH","CHAOS","AGONY","TRYST","BRAVE","STERN","SWIFT","WRATH",
  "STOIC","TABOO","VENOM","QUALM","PSALM","REALM","SCORN","BLISS",
  "EXILE","EERIE","FEIGN","MOURN","ASHEN","TRUTH","MORAL","PIETY",
  "CREED","GUILE","TENET","GREED","DREAD","SPELL","KARMA","OMENS",
  "TOKEN","TROTH","VAUNT","YEARN","WEARY","NADIR","VIGOR","FORTE",
  "IDEAL","LOGOS","ETHOS","LADEN","SWORN","SNARE","SMITE","PURGE",
  "SURGE","TALON","TITHE","TOTEM","VERGE","WAGER","SWOON","RIVAL",
  "HAUNT","OATHS","TENOR","DEITY","OMEGA","ALPHA","ADAGE","AXIOM",
  "DEBUT","DOLOR","SIEGE","LANCE","STEED","EPOCH","UMBRA","VIGIL",
  "WORLD","WROTE","FLUTE","GLEAM","GUILD","GUISE","EVOKE","EXALT",
  "ENVOY","IMAGE","LAPSE","JESTS","CHANT","BLAZE","CURSE","FORGE",
  "TOWER","CROWN","FELON","WHIRL","YIELD","NEXUS","MAXIM","KNELL",
  "JOUST","LOFTY","RELIC","USHER","VIVID","FROST","BROOD","CHASM",
  "CLEFT","DIRGE","REIGN","BIRTH","SINEW","SPOOK","SWEAR","SWEEP",
  "STUDY","TREAD","TRIAD","TRICE","TUNIC","UTTER","VAGUE","TIARA",
  "SLATE","SLOTH","SIGMA","SIGHS","SHAFT","RURAL","ROVER","ROCKY",
  "RISEN","RIGOR","RIDGE","REACT","QUIRK","QUOTA"
];

// ── ANAGRAM: 60 scrambled literary words with hints ───────────
const ANAGRAM_WORDS = [
  { word:"IRONY",  scrambled:"NORIY", hint:"Saying the opposite of what you mean",                   category:"Literary Device" },
  { word:"FABLE",  scrambled:"BELAF", hint:"A short story teaching a moral lesson",                  category:"Story Type"      },
  { word:"LYRIC",  scrambled:"RYCIL", hint:"Poetry expressing personal emotions",                    category:"Poetry"          },
  { word:"ELEGY",  scrambled:"GEYEL", hint:"A mournful poem lamenting the dead",                     category:"Poetry"          },
  { word:"TROPE",  scrambled:"OTREP", hint:"A figure of speech or recurring device",                 category:"Literary Device" },
  { word:"METER",  scrambled:"EMTRE", hint:"The rhythmic pattern of syllables in poetry",            category:"Poetry"          },
  { word:"CANON",  scrambled:"ONCAN", hint:"Works considered most important in a field",             category:"Literary Term"   },
  { word:"FOLIO",  scrambled:"ILOFO", hint:"An early large-format book; paper folded once",          category:"Books"           },
  { word:"HAIKU",  scrambled:"UHAIK", hint:"A Japanese poem with 5-7-5 syllables",                  category:"Poetry"          },
  { word:"SATYR",  scrambled:"TAYRS", hint:"A half-man, half-goat from Greek mythology",             category:"Mythology"       },
  { word:"DRAMA",  scrambled:"AMDAR", hint:"A play written for performance on stage",                category:"Story Type"      },
  { word:"STAVE",  scrambled:"AVETS", hint:"A verse or stanza of a poem or song",                   category:"Poetry"          },
  { word:"PROSE",  scrambled:"ERPSO", hint:"Ordinary written language, not poetry",                 category:"Literary Term"   },
  { word:"VERSE",  scrambled:"EVSER", hint:"Writing arranged with rhythm or rhyme",                  category:"Literary Term"   },
  { word:"GENRE",  scrambled:"REGEN", hint:"A category or style of literature",                     category:"Literary Term"   },
  { word:"MOTIF",  scrambled:"FOMTI", hint:"A recurring element with symbolic significance",         category:"Literary Device" },
  { word:"CANTO",  scrambled:"TONAC", hint:"A major division of a long epic poem",                  category:"Poetry"          },
  { word:"NOBLE",  scrambled:"LONBE", hint:"A person of high aristocratic rank",                    category:"Character"       },
  { word:"QUEST",  scrambled:"USETQ", hint:"A long journey to find something of great value",       category:"Plot"            },
  { word:"GRAIL",  scrambled:"LIARG", hint:"The legendary cup sought by Arthurian knights",         category:"Mythology"       },
  { word:"GHOST",  scrambled:"TGOHS", hint:"The spirit of a dead person in gothic tales",           category:"Character"       },
  { word:"PRIDE",  scrambled:"RDIPE", hint:"Excessive self-esteem; one of the deadly sins",         category:"Theme"           },
  { word:"VALOR",  scrambled:"ORALV", hint:"Great courage in the face of danger",                   category:"Theme"           },
  { word:"SIREN",  scrambled:"RENIS", hint:"A mythological creature whose song lures sailors",       category:"Mythology"       },
  { word:"TITAN",  scrambled:"ANITN", hint:"A powerful elder god from Greek mythology",             category:"Mythology"       },
  { word:"RAVEN",  scrambled:"VANER", hint:"A black bird; famous in Poe's eponymous poem",          category:"Literature"      },
  { word:"EXILE",  scrambled:"EIXLE", hint:"Forced removal from one's homeland",                    category:"Theme"           },
  { word:"REALM",  scrambled:"LAMRE", hint:"A kingdom or domain ruled by a monarch",                category:"Setting"         },
  { word:"CROWN",  scrambled:"RONWC", hint:"A symbol of royal power worn on the head",              category:"Symbol"          },
  { word:"CHAOS",  scrambled:"AHOSC", hint:"Complete disorder; the primordial void in myth",        category:"Mythology"       },
  { word:"DIRGE",  scrambled:"GIRED", hint:"A slow, mournful song played at a funeral",             category:"Poetry"          },
  { word:"IDYLL",  scrambled:"LLIDY", hint:"A short poem about peaceful, idealized country life",   category:"Poetry"          },
  { word:"NYMPH",  scrambled:"HPNMY", hint:"A beautiful spirit of nature in Greek mythology",       category:"Mythology"       },
  { word:"ETHOS",  scrambled:"STOHE", hint:"The moral character or guiding spirit of a culture",    category:"Philosophy"      },
  { word:"WITCH",  scrambled:"TCIWH", hint:"A woman who practices magic or sorcery in legend",      category:"Character"       },
  { word:"SPIRE",  scrambled:"REPSI", hint:"The tall pointed top of a cathedral or castle",         category:"Setting"         },
  { word:"EPOCH",  scrambled:"POCEH", hint:"A distinct and notable period in history",               category:"Literary Term"   },
  { word:"CREED",  scrambled:"DREEC", hint:"A formal statement of beliefs or principles",            category:"Theme"           },
  { word:"SPELL",  scrambled:"LLEPS", hint:"A magical incantation that casts an enchantment",       category:"Magic"           },
  { word:"ADAGE",  scrambled:"GAADE", hint:"A short, memorable saying that expresses a truth",      category:"Literary Term"   },
  { word:"AXIOM",  scrambled:"MOIXA", hint:"A statement accepted as self-evidently true",            category:"Philosophy"      },
  { word:"FARCE",  scrambled:"CEFAR", hint:"A comedy relying on exaggerated, absurd situations",    category:"Story Type"      },
  { word:"GUILE",  scrambled:"LUGEI", hint:"Sly cunning intelligence used for deception",            category:"Theme"           },
  { word:"TENET",  scrambled:"NETTE", hint:"A core principle or belief held by a person",            category:"Philosophy"      },
  { word:"AUGUR",  scrambled:"URGAU", hint:"A Roman priest who predicted events from omens",         category:"Mythology"       },
  { word:"DRUID",  scrambled:"UIDDR", hint:"An ancient Celtic priest, wise man, or poet",            category:"History"         },
  { word:"ESSAY",  scrambled:"YASSE", hint:"A prose composition exploring a particular subject",    category:"Story Type"      },
  { word:"LIBEL",  scrambled:"BLEIL", hint:"A written false statement that damages a reputation",   category:"Legal"           },
  { word:"VIGOR",  scrambled:"ROVGI", hint:"Physical or mental strength, energy, and vitality",     category:"Theme"           },
  { word:"MYTHS",  scrambled:"STMHY", hint:"Traditional stories explaining existence and nature",   category:"Mythology"       },
  { word:"RUNES",  scrambled:"SNURE", hint:"Ancient carved letters used in Norse literature",       category:"History"         },
  { word:"DEITY",  scrambled:"TIDEY", hint:"A god or goddess worshipped in mythology",               category:"Mythology"       },
  { word:"ABYSS",  scrambled:"SYABS", hint:"A deep chasm; symbolic of the unknown or dark",         category:"Setting"         },
  { word:"NADIR",  scrambled:"RDAIN", hint:"The lowest point; the opposite of the zenith",           category:"Literary Term"   },
  { word:"OPERA",  scrambled:"REOPA", hint:"A dramatic work set entirely or mostly to music",       category:"Story Type"      },
  { word:"PIETY",  scrambled:"YIPET", hint:"Deep devotion and reverence, especially to a faith",    category:"Theme"           },
  { word:"MORAL",  scrambled:"LRAMO", hint:"The lesson or message at the heart of a story",          category:"Literary Term"   },
  { word:"SCENE",  scrambled:"ENCSE", hint:"A division of a play, or the setting of a narrative",   category:"Literary Term"   },
  { word:"TOTEM",  scrambled:"METTO", hint:"A symbolic object revered by a group or people",         category:"Symbol"          },
  { word:"TRUTH",  scrambled:"HTTRU", hint:"Conformity with fact; a theme central to all great literature", category:"Theme"   }
];

// ── FILL IN THE BLANK: 35 famous literary quotes ──────────────
const QUOTES = [
  {
    before:"To be or not to", after:", that is the question",
    answer:"BE", options:["BE","DO","TRY","DIE"],
    source:"Hamlet — William Shakespeare",
    full:"To be or not to be, that is the question"
  },
  {
    before:"It was the best of times, it was the", after:" of times",
    answer:"WORST", options:["WORST","LAST","DARK","END"],
    source:"A Tale of Two Cities — Charles Dickens",
    full:"It was the best of times, it was the worst of times"
  },
  {
    before:"It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a",
    after:"",
    answer:"WIFE", options:["WIFE","HOME","FRIEND","CASTLE"],
    source:"Pride and Prejudice — Jane Austen",
    full:"It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife"
  },
  {
    before:"Not all those who", after:" are lost",
    answer:"WANDER", options:["WANDER","JOURNEY","ROAM","TRAVEL"],
    source:"The Fellowship of the Ring — J. R. R. Tolkien",
    full:"Not all those who wander are lost"
  },
  {
    before:"All that glitters is not", after:"",
    answer:"GOLD", options:["GOLD","SILVER","REAL","GOOD"],
    source:"The Merchant of Venice — William Shakespeare",
    full:"All that glitters is not gold"
  },
  {
    before:"Call me", after:"",
    answer:"ISHMAEL", options:["ISHMAEL","CAPTAIN","AHAB","MOBY"],
    source:"Moby-Dick — Herman Melville",
    full:"Call me Ishmael"
  },
  {
    before:"Two roads diverged in a", after:" wood",
    answer:"YELLOW", options:["YELLOW","DARK","MISTY","DEEP"],
    source:"The Road Not Taken — Robert Frost",
    full:"Two roads diverged in a yellow wood"
  },
  {
    before:"To err is human; to", after:", divine",
    answer:"FORGIVE", options:["FORGIVE","FORGET","GRIEVE","ATONE"],
    source:"An Essay on Criticism — Alexander Pope",
    full:"To err is human; to forgive, divine"
  },
  {
    before:"It was a bright cold day in April, and the clocks were striking",
    after:"",
    answer:"THIRTEEN", options:["THIRTEEN","MIDNIGHT","TWELVE","SEVEN"],
    source:"Nineteen Eighty-Four — George Orwell",
    full:"It was a bright cold day in April, and the clocks were striking thirteen"
  },
  {
    before:"A rose by any other name would smell as", after:"",
    answer:"SWEET", options:["SWEET","LOVELY","FAIR","PURE"],
    source:"Romeo and Juliet — William Shakespeare",
    full:"A rose by any other name would smell as sweet"
  },
  {
    before:"It does not do to dwell on", after:" and forget to live",
    answer:"DREAMS", options:["DREAMS","SORROW","GRIEF","PAIN"],
    source:"Harry Potter and the Philosopher's Stone — J. K. Rowling",
    full:"It does not do to dwell on dreams and forget to live"
  },
  {
    before:"Vanity of vanities, all is", after:"",
    answer:"VANITY", options:["VANITY","NOTHING","FLEETING","VAIN"],
    source:"Ecclesiastes — The Bible",
    full:"Vanity of vanities, all is vanity"
  },
  {
    before:"For fools rush in where", after:" fear to tread",
    answer:"ANGELS", options:["ANGELS","WISE MEN","HEROES","SAINTS"],
    source:"An Essay on Criticism — Alexander Pope",
    full:"For fools rush in where angels fear to tread"
  },
  {
    before:"I have measured out my life with", after:" spoons",
    answer:"COFFEE", options:["COFFEE","SILVER","GOLDEN","LITTLE"],
    source:"The Love Song of J. Alfred Prufrock — T. S. Eliot",
    full:"I have measured out my life with coffee spoons"
  },
  {
    before:"In the beginning was the", after:"",
    answer:"WORD", options:["WORD","LIGHT","VOID","FIRE"],
    source:"Gospel of John — The Bible",
    full:"In the beginning was the Word"
  },
  {
    before:"It was the age of wisdom, it was the age of", after:"",
    answer:"FOOLISHNESS", options:["FOOLISHNESS","DARKNESS","DESPAIR","CHAOS"],
    source:"A Tale of Two Cities — Charles Dickens",
    full:"It was the age of wisdom, it was the age of foolishness"
  },
  {
    before:"Elementary, my dear", after:"",
    answer:"WATSON", options:["WATSON","HOLMES","DOCTOR","FRIEND"],
    source:"Sherlock Holmes — Arthur Conan Doyle",
    full:"Elementary, my dear Watson"
  },
  {
    before:"Happy families are all alike; every unhappy family is unhappy in its own",
    after:"",
    answer:"WAY", options:["WAY","TIME","LIFE","WORLD"],
    source:"Anna Karenina — Leo Tolstoy",
    full:"Happy families are all alike; every unhappy family is unhappy in its own way"
  },
  {
    before:"The only way out of the labyrinth of suffering is to", after:"",
    answer:"FORGIVE", options:["FORGIVE","FORGET","ESCAPE","ENDURE"],
    source:"Looking for Alaska — John Green",
    full:"The only way out of the labyrinth of suffering is to forgive"
  },
  {
    before:"Wherever you go, go with all your", after:"",
    answer:"HEART", options:["HEART","SOUL","MIND","BEING"],
    source:"Confucius — Analects",
    full:"Wherever you go, go with all your heart"
  },
  {
    before:"The course of true love never did run", after:"",
    answer:"SMOOTH", options:["SMOOTH","STEADY","FREELY","EASILY"],
    source:"A Midsummer Night's Dream — William Shakespeare",
    full:"The course of true love never did run smooth"
  },
  {
    before:"To thine own self be", after:"",
    answer:"TRUE", options:["TRUE","KIND","JUST","BOLD"],
    source:"Hamlet — William Shakespeare",
    full:"To thine own self be true"
  },
  {
    before:"Water, water, every where, nor any drop to", after:"",
    answer:"DRINK", options:["DRINK","TAKE","SWALLOW","TASTE"],
    source:"The Rime of the Ancient Mariner — Samuel Taylor Coleridge",
    full:"Water, water, every where, nor any drop to drink"
  },
  {
    before:"We are all in the gutter, but some of us are looking at the", after:"",
    answer:"STARS", options:["STARS","MOON","SKY","LIGHT"],
    source:"Lady Windermere's Fan — Oscar Wilde",
    full:"We are all in the gutter, but some of us are looking at the stars"
  },
  {
    before:"It is a far, far better thing that I do, than I have ever", after:"",
    answer:"DONE", options:["DONE","TRIED","KNOWN","FELT"],
    source:"A Tale of Two Cities — Charles Dickens",
    full:"It is a far, far better thing that I do, than I have ever done"
  },
  {
    before:"Do not go gentle into that good", after:"",
    answer:"NIGHT", options:["NIGHT","DARK","SLEEP","REST"],
    source:"Do Not Go Gentle Into That Good Night — Dylan Thomas",
    full:"Do not go gentle into that good night"
  },
  {
    before:"All the world's a", after:", and all the men and women merely players",
    answer:"STAGE", options:["STAGE","DREAM","GAME","PLAY"],
    source:"As You Like It — William Shakespeare",
    full:"All the world's a stage, and all the men and women merely players"
  },
  {
    before:"There is nothing either good or bad, but", after:" makes it so",
    answer:"THINKING", options:["THINKING","FEELING","WISHING","KNOWING"],
    source:"Hamlet — William Shakespeare",
    full:"There is nothing either good or bad, but thinking makes it so"
  },
  {
    before:"No man is an", after:", entire of itself",
    answer:"ISLAND", options:["ISLAND","OCEAN","FORTRESS","STRANGER"],
    source:"Devotions upon Emergent Occasions — John Donne",
    full:"No man is an island, entire of itself"
  },
  {
    before:"It is better to have loved and", after:" than never to have loved at all",
    answer:"LOST", options:["LOST","FAILED","TRIED","WEPT"],
    source:"In Memoriam A.H.H. — Alfred Lord Tennyson",
    full:"It is better to have loved and lost than never to have loved at all"
  },
  {
    before:"Hell is empty and all the", after:" are here",
    answer:"DEVILS", options:["DEVILS","SINNERS","MONSTERS","DEMONS"],
    source:"The Tempest — William Shakespeare",
    full:"Hell is empty and all the devils are here"
  },
  {
    before:"I am the master of my", after:", I am the captain of my soul",
    answer:"FATE", options:["FATE","LIFE","HEART","MIND"],
    source:"Invictus — William Ernest Henley",
    full:"I am the master of my fate, I am the captain of my soul"
  },
  {
    before:"The truth is rarely pure and never", after:"",
    answer:"SIMPLE", options:["SIMPLE","CLEAR","PLAIN","EASY"],
    source:"The Importance of Being Earnest — Oscar Wilde",
    full:"The truth is rarely pure and never simple"
  },
  {
    before:"He who controls the past controls the", after:"",
    answer:"FUTURE", options:["FUTURE","PRESENT","TRUTH","WORLD"],
    source:"Nineteen Eighty-Four — George Orwell",
    full:"He who controls the past controls the future"
  },
  {
    before:"It's a dangerous business, going out your", after:". There's no knowing where you might be swept off to",
    answer:"DOOR", options:["DOOR","GATE","PATH","HOUSE"],
    source:"The Fellowship of the Ring — J. R. R. Tolkien",
    full:"It's a dangerous business, going out your door. There's no knowing where you might be swept off to"
  }
];

// ── DEFINITIONS: 30 literary vocabulary words ─────────────────
const DEFINITIONS = [
  {
    word:"ELEGY",
    definition:"A mournful poem written as a lament for the dead or something lost",
    options:[
      "A mournful poem written as a lament for the dead or something lost",
      "A witty poem with a clever twist in the final lines",
      "An epic poem celebrating heroic deeds in battle",
      "A short poem written in praise of a specific person"
    ]
  },
  {
    word:"IRONY",
    definition:"Using words to express the opposite of their literal meaning",
    options:[
      "The repetition of consonant sounds at the start of words",
      "Using words to express the opposite of their literal meaning",
      "Giving human qualities to non-human objects",
      "An extreme exaggeration used for dramatic effect"
    ]
  },
  {
    word:"MOTIF",
    definition:"A recurring symbol, image, or idea that carries thematic significance",
    options:[
      "The central conflict between the hero and their opponent",
      "The turning point in a story where events change direction",
      "A recurring symbol, image, or idea that carries thematic significance",
      "The final resolution of a story's central conflict"
    ]
  },
  {
    word:"HUBRIS",
    definition:"Excessive pride or arrogance that leads to a character's downfall",
    options:[
      "The moment of recognition and reversal in a Greek tragedy",
      "Excessive pride or arrogance that leads to a character's downfall",
      "A purging of emotion experienced by the audience",
      "The climactic final speech of a tragic hero"
    ]
  },
  {
    word:"PATHOS",
    definition:"A quality that evokes feelings of pity, sympathy, or compassion",
    options:[
      "The overall mood or emotional atmosphere of a work",
      "An appeal to logic and reason in persuasive writing",
      "The inner conflict a character experiences",
      "A quality that evokes feelings of pity, sympathy, or compassion"
    ]
  },
  {
    word:"SATIRE",
    definition:"The use of humour, irony, or exaggeration to criticise society or individuals",
    options:[
      "The use of humour, irony, or exaggeration to criticise society or individuals",
      "A form of poetry with exactly fourteen lines",
      "A story teaching a moral lesson through symbolic characters",
      "A technique placing future events before earlier ones in narrative"
    ]
  },
  {
    word:"CATHARSIS",
    definition:"The emotional release and purification an audience feels at the end of a tragedy",
    options:[
      "The moment when a character realises the truth about their situation",
      "The resolution of all plot threads at a story's conclusion",
      "The emotional release and purification an audience feels at the end of a tragedy",
      "The internal monologue of a character facing a moral dilemma"
    ]
  },
  {
    word:"ALLEGORY",
    definition:"A narrative in which characters and events symbolise deeper moral or political meanings",
    options:[
      "A brief story used to illustrate a moral or spiritual lesson",
      "A narrative in which characters and events symbolise deeper moral or political meanings",
      "A literary form that combines verse and prose elements",
      "A technique where the narrator speaks directly to the reader"
    ]
  },
  {
    word:"METAPHOR",
    definition:"A figure of speech that describes something by calling it something else entirely",
    options:[
      "A figure of speech that describes something by calling it something else entirely",
      "A comparison using the words 'like' or 'as'",
      "The attribution of human qualities to inanimate objects",
      "An indirect reference to a well-known person, event, or text"
    ]
  },
  {
    word:"SOLILOQUY",
    definition:"When a character speaks their innermost thoughts aloud, alone on stage",
    options:[
      "A speech delivered directly from one character to another",
      "The opening monologue that sets the scene of a play",
      "A brief remark made so only the audience can hear",
      "When a character speaks their innermost thoughts aloud, alone on stage"
    ]
  },
  {
    word:"EPIPHANY",
    definition:"A sudden moment of revelation or insight that transforms a character",
    options:[
      "The climax of a story where tension reaches its absolute peak",
      "A flashback that reveals crucial backstory information",
      "A sudden moment of revelation or insight that transforms a character",
      "The resolution phase following the story's main conflict"
    ]
  },
  {
    word:"DENOUEMENT",
    definition:"The final part of a narrative where all loose ends are resolved after the climax",
    options:[
      "The opening scenes that establish the story's setting and characters",
      "The final part of a narrative where all loose ends are resolved after the climax",
      "The central conflict that drives the story forward",
      "The moment when the antagonist is finally defeated"
    ]
  },
  {
    word:"SONNET",
    definition:"A fourteen-line poem with a strict rhyme scheme, often exploring love or beauty",
    options:[
      "A fourteen-line poem with a strict rhyme scheme, often exploring love or beauty",
      "A long narrative poem celebrating the deeds of a legendary hero",
      "A poem that follows no fixed pattern of rhyme or metre",
      "A lyrical poem of mourning for someone who has died"
    ]
  },
  {
    word:"FORESHADOWING",
    definition:"A literary technique that hints at events which will occur later in the story",
    options:[
      "A contrast between what a character expects and what actually happens",
      "The use of symbols to represent abstract ideas or qualities",
      "The introduction of past events through a character's memories",
      "A literary technique that hints at events which will occur later in the story"
    ]
  },
  {
    word:"PROTAGONIST",
    definition:"The central character of a story, around whom the main events revolve",
    options:[
      "A character who creates obstacles for the hero to overcome",
      "A secondary character who highlights the hero's traits by contrast",
      "The narrator who tells the story from an outside perspective",
      "The central character of a story, around whom the main events revolve"
    ]
  },
  {
    word:"BILDUNGSROMAN",
    definition:"A coming-of-age novel that follows a young protagonist's growth into adulthood",
    options:[
      "A German tradition of dense philosophical novels",
      "A coming-of-age novel that follows a young protagonist's growth into adulthood",
      "A novel set in a historically accurate period with real figures",
      "A literary form combining autobiography with fictional narrative"
    ]
  },
  {
    word:"ANACHRONISM",
    definition:"The placement of something in the wrong historical period, by error or intent",
    options:[
      "The placement of something in the wrong historical period, by error or intent",
      "A narrative technique in which time moves faster than normal",
      "The use of archaic language to create a period atmosphere",
      "A story told from the perspective of multiple characters across eras"
    ]
  },
  {
    word:"ALLITERATION",
    definition:"The repetition of the same consonant sound at the start of nearby words",
    options:[
      "The repetition of vowel sounds within adjacent or nearby words",
      "A poetic device using words that imitate actual sounds",
      "The repetition of the same consonant sound at the start of nearby words",
      "A type of rhyme where only the final syllable sounds match"
    ]
  },
  {
    word:"PARADOX",
    definition:"A statement that appears self-contradictory yet expresses a deeper truth",
    options:[
      "A statement that appears self-contradictory yet expresses a deeper truth",
      "An exaggeration so extreme it cannot be taken literally",
      "A direct comparison between two unlike things using 'like' or 'as'",
      "A figure of speech that names one thing by naming something associated with it"
    ]
  },
  {
    word:"OXYMORON",
    definition:"A figure of speech that combines two contradictory terms for effect",
    options:[
      "A statement that is true in one sense but false in another",
      "A figure of speech that combines two contradictory terms for effect",
      "A narrative in which the ending contradicts what was expected",
      "The pairing of two clauses in mirror-image grammatical structure"
    ]
  },
  {
    word:"HYPERBOLE",
    definition:"A deliberate and extreme exaggeration used for emphasis or comic effect",
    options:[
      "A mild or indirect word substituted for a harsh or unpleasant one",
      "The continuation of a sentence beyond the end of a line of poetry",
      "A deliberate and extreme exaggeration used for emphasis or comic effect",
      "A recurring structural pattern used to create rhythm in a text"
    ]
  },
  {
    word:"ASSONANCE",
    definition:"The repetition of similar vowel sounds in nearby words or syllables",
    options:[
      "The repetition of consonant sounds at the start of nearby words",
      "The use of words that phonetically imitate sounds they describe",
      "The repetition of similar vowel sounds in nearby words or syllables",
      "A type of rhyme in which only the final consonants agree"
    ]
  },
  {
    word:"ENJAMBMENT",
    definition:"The continuation of a sentence or phrase beyond the end of a line of poetry",
    options:[
      "A pause within a line of poetry, indicated by punctuation",
      "The continuation of a sentence or phrase beyond the end of a line of poetry",
      "The repetition of a word at the start of successive lines",
      "A line of poetry that forms a complete grammatical unit"
    ]
  },
  {
    word:"RHETORIC",
    definition:"The art of using language persuasively and effectively in speaking or writing",
    options:[
      "The art of using language persuasively and effectively in speaking or writing",
      "The study of the origins and historical development of words",
      "A system for analysing the metrical patterns of poetry",
      "The branch of philosophy concerned with moral values"
    ]
  },
  {
    word:"PASTORAL",
    definition:"A genre of literature that idealises simple rural or country life",
    options:[
      "A literary work set in a period before the author's own time",
      "A genre of literature that idealises simple rural or country life",
      "A type of dramatic monologue spoken by a rural character",
      "A tradition of poetry focused on the natural sublime"
    ]
  },
  {
    word:"PARODY",
    definition:"A comic imitation of a serious work or author, exaggerating its style for humour",
    options:[
      "A work that pays homage to another by imitating its style closely",
      "A comic imitation of a serious work or author, exaggerating its style for humour",
      "A criticism of another work through direct quotation and analysis",
      "A literary technique that blends two separate genres together"
    ]
  },
  {
    word:"EUPHEMISM",
    definition:"A mild or indirect expression used in place of a harsh or blunt one",
    options:[
      "A mild or indirect expression used in place of a harsh or blunt one",
      "A figure of speech that attributes human qualities to objects",
      "The use of a related word to stand in for what is actually meant",
      "A phrase that has lost its original literal meaning over time"
    ]
  },
  {
    word:"NEMESIS",
    definition:"An agent of ruin or punishment; an opponent who cannot be overcome",
    options:[
      "The fatal flaw in a hero's character that brings about their downfall",
      "An agent of ruin or punishment; an opponent who cannot be overcome",
      "A moment of recognition that reverses the fortunes of the hero",
      "The divine intervention that resolves an impossible situation"
    ]
  },
  {
    word:"MIMESIS",
    definition:"The imitation or representation of the real world in art and literature",
    options:[
      "A literary device that produces exaggerated images of reality",
      "The imitation or representation of the real world in art and literature",
      "The use of a narrative within a narrative to create layers of story",
      "A philosophical concept that art should improve upon nature"
    ]
  },
  {
    word:"DICTION",
    definition:"The choice and use of words in speech or writing; a writer's vocabulary",
    options:[
      "The pattern of stressed and unstressed syllables in poetry",
      "The tone and manner in which a writer addresses their audience",
      "The choice and use of words in speech or writing; a writer's vocabulary",
      "The way in which a writer structures sentences for effect"
    ]
  }
];

// ── AUTHOR QUIZ: 30 quotes — identify the correct author ──────
const AUTHOR_QUIZ = [
  {
    quote:"The world breaks everyone and afterward many are strong at the broken places.",
    author:"Ernest Hemingway",
    options:["Ernest Hemingway","F. Scott Fitzgerald","John Steinbeck","William Faulkner"],
    work:"A Farewell to Arms (1929)"
  },
  {
    quote:"I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    author:"Charlotte Brontë",
    options:["Charlotte Brontë","Emily Brontë","Jane Austen","George Eliot"],
    work:"Jane Eyre (1847)"
  },
  {
    quote:"There is no greater agony than bearing an untold story inside you.",
    author:"Maya Angelou",
    options:["Maya Angelou","Toni Morrison","Zora Neale Hurston","Alice Walker"],
    work:"I Know Why the Caged Bird Sings (1969)"
  },
  {
    quote:"A woman must have money and a room of her own if she is to write fiction.",
    author:"Virginia Woolf",
    options:["Virginia Woolf","Edith Wharton","George Eliot","Sylvia Plath"],
    work:"A Room of One's Own (1929)"
  },
  {
    quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    author:"Oscar Wilde",
    options:["Oscar Wilde","George Bernard Shaw","G. K. Chesterton","Samuel Butler"],
    work:"The Soul of Man Under Socialism (1891)"
  },
  {
    quote:"Pain and suffering are always inevitable for a large intelligence and a deep heart.",
    author:"Fyodor Dostoevsky",
    options:["Fyodor Dostoevsky","Leo Tolstoy","Anton Chekhov","Ivan Turgenev"],
    work:"Crime and Punishment (1866)"
  },
  {
    quote:"To love another person is to see the face of God.",
    author:"Victor Hugo",
    options:["Victor Hugo","Alexandre Dumas","Gustave Flaubert","Émile Zola"],
    work:"Les Misérables (1862)"
  },
  {
    quote:"A thing of beauty is a joy forever: its loveliness increases; it will never pass into nothingness.",
    author:"John Keats",
    options:["John Keats","Percy Shelley","Lord Byron","William Wordsworth"],
    work:"Endymion (1818)"
  },
  {
    quote:"The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.",
    author:"John Milton",
    options:["John Milton","John Donne","Edmund Spenser","Geoffrey Chaucer"],
    work:"Paradise Lost (1667)"
  },
  {
    quote:"So we beat on, boats against the current, borne back ceaselessly into the past.",
    author:"F. Scott Fitzgerald",
    options:["F. Scott Fitzgerald","Ernest Hemingway","William Faulkner","Edith Wharton"],
    work:"The Great Gatsby (1925)"
  },
  {
    quote:"All that is gold does not glitter, not all those who wander are lost.",
    author:"J. R. R. Tolkien",
    options:["J. R. R. Tolkien","C. S. Lewis","George R. R. Martin","Terry Pratchett"],
    work:"The Fellowship of the Ring (1954)"
  },
  {
    quote:"Reader, I married him.",
    author:"Charlotte Brontë",
    options:["Charlotte Brontë","George Eliot","Thomas Hardy","Elizabeth Gaskell"],
    work:"Jane Eyre (1847)"
  },
  {
    quote:"It does not matter how slowly you go as long as you do not stop.",
    author:"Confucius",
    options:["Confucius","Lao Tzu","Sun Tzu","Mencius"],
    work:"Analects"
  },
  {
    quote:"The only true wisdom is in knowing you know nothing.",
    author:"Socrates",
    options:["Socrates","Plato","Aristotle","Epicurus"],
    work:"As recorded by Plato"
  },
  {
    quote:"All animals are equal, but some animals are more equal than others.",
    author:"George Orwell",
    options:["George Orwell","Aldous Huxley","H. G. Wells","Franz Kafka"],
    work:"Animal Farm (1945)"
  },
  {
    quote:"It was the best of times, it was the worst of times.",
    author:"Charles Dickens",
    options:["Charles Dickens","Victor Hugo","Leo Tolstoy","Thomas Hardy"],
    work:"A Tale of Two Cities (1859)"
  },
  {
    quote:"Don't tell me the moon is shining; show me the glint of light on broken glass.",
    author:"Anton Chekhov",
    options:["Anton Chekhov","Leo Tolstoy","Ivan Turgenev","Maxim Gorky"],
    work:"Letter to his brother Alexander (1886)"
  },
  {
    quote:"A book must be the axe for the frozen sea within us.",
    author:"Franz Kafka",
    options:["Franz Kafka","Albert Camus","Samuel Beckett","Thomas Mann"],
    work:"Letter to Oskar Pollak (1904)"
  },
  {
    quote:"You cannot find peace by avoiding life.",
    author:"Virginia Woolf",
    options:["Virginia Woolf","Simone de Beauvoir","Anaïs Nin","Sylvia Plath"],
    work:"The Diary of Virginia Woolf"
  },
  {
    quote:"Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.",
    author:"Rumi",
    options:["Rumi","Hafiz","Omar Khayyám","Kahlil Gibran"],
    work:"The Masnavi"
  },
  {
    quote:"The struggle of man against power is the struggle of memory against forgetting.",
    author:"Milan Kundera",
    options:["Milan Kundera","Václav Havel","Josef Škvorecký","Bohumil Hrabal"],
    work:"The Book of Laughter and Forgetting (1979)"
  },
  {
    quote:"Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    author:"James Baldwin",
    options:["James Baldwin","Ralph Ellison","Richard Wright","Langston Hughes"],
    work:"As quoted in The New York Times (1962)"
  },
  {
    quote:"We accept the love we think we deserve.",
    author:"Stephen Chbosky",
    options:["Stephen Chbosky","John Green","Rainbow Rowell","David Levithan"],
    work:"The Perks of Being a Wallflower (1999)"
  },
  {
    quote:"I am not afraid of storms, for I am learning how to sail my ship.",
    author:"Louisa May Alcott",
    options:["Louisa May Alcott","Charlotte Brontë","George Eliot","Elizabeth Gaskell"],
    work:"Little Women (1868)"
  },
  {
    quote:"Whoever fights monsters should see to it that in the process he does not become a monster.",
    author:"Friedrich Nietzsche",
    options:["Friedrich Nietzsche","Arthur Schopenhauer","Immanuel Kant","Georg Hegel"],
    work:"Beyond Good and Evil (1886)"
  },
  {
    quote:"If you gaze long into an abyss, the abyss also gazes into you.",
    author:"Friedrich Nietzsche",
    options:["Friedrich Nietzsche","Søren Kierkegaard","Martin Heidegger","Albert Camus"],
    work:"Beyond Good and Evil (1886)"
  },
  {
    quote:"Your children are not your children. They are the sons and daughters of Life's longing for itself.",
    author:"Kahlil Gibran",
    options:["Kahlil Gibran","Rumi","Pablo Neruda","Rabindranath Tagore"],
    work:"The Prophet (1923)"
  },
  {
    quote:"I took a deep breath and listened to the old brag of my heart: I am, I am, I am.",
    author:"Sylvia Plath",
    options:["Sylvia Plath","Anne Sexton","Adrienne Rich","Denise Levertov"],
    work:"The Bell Jar (1963)"
  },
  {
    quote:"Not all those who wander are lost.",
    author:"J. R. R. Tolkien",
    options:["J. R. R. Tolkien","C. S. Lewis","Ursula K. Le Guin","Philip Pullman"],
    work:"The Fellowship of the Ring (1954)"
  },
  {
    quote:"One must always be careful of books, and what is inside them, for words have the power to change us.",
    author:"Cassandra Clare",
    options:["Cassandra Clare","Leigh Bardugo","Sarah J. Maas","Holly Black"],
    work:"City of Bones (2007)"
  }
];

// ── FIRST LINES: 25 famous novel openings ─────────────────────
const FIRST_LINES = [
  {
    line:"It was a bright cold day in April, and the clocks were striking thirteen.",
    title:"Nineteen Eighty-Four",
    author:"George Orwell",
    options:["Nineteen Eighty-Four","Brave New World","Fahrenheit 451","The Handmaid's Tale"]
  },
  {
    line:"Call me Ishmael.",
    title:"Moby-Dick",
    author:"Herman Melville",
    options:["Moby-Dick","The Scarlet Letter","Robinson Crusoe","Billy Budd"]
  },
  {
    line:"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.",
    title:"A Tale of Two Cities",
    author:"Charles Dickens",
    options:["A Tale of Two Cities","Great Expectations","Oliver Twist","Bleak House"]
  },
  {
    line:"Happy families are all alike; every unhappy family is unhappy in its own way.",
    title:"Anna Karenina",
    author:"Leo Tolstoy",
    options:["Anna Karenina","War and Peace","The Brothers Karamazov","Crime and Punishment"]
  },
  {
    line:"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    title:"Pride and Prejudice",
    author:"Jane Austen",
    options:["Pride and Prejudice","Sense and Sensibility","Emma","Persuasion"]
  },
  {
    line:"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.",
    title:"The Metamorphosis",
    author:"Franz Kafka",
    options:["The Metamorphosis","The Trial","The Castle","In the Penal Colony"]
  },
  {
    line:"Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
    title:"One Hundred Years of Solitude",
    author:"Gabriel García Márquez",
    options:["One Hundred Years of Solitude","Love in the Time of Cholera","The Autumn of the Patriarch","Chronicle of a Death Foretold"]
  },
  {
    line:"Mrs. Dalloway said she would buy the flowers herself.",
    title:"Mrs. Dalloway",
    author:"Virginia Woolf",
    options:["Mrs. Dalloway","To the Lighthouse","Orlando","The Waves"]
  },
  {
    line:"If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like.",
    title:"The Catcher in the Rye",
    author:"J. D. Salinger",
    options:["The Catcher in the Rye","Franny and Zooey","The Bell Jar","A Separate Peace"]
  },
  {
    line:"It was love at first sight. The first time Yossarian saw the chaplain he fell madly in love with him.",
    title:"Catch-22",
    author:"Joseph Heller",
    options:["Catch-22","Slaughterhouse-Five","The Naked and the Dead","A Farewell to Arms"]
  },
  {
    line:"All this happened, more or less.",
    title:"Slaughterhouse-Five",
    author:"Kurt Vonnegut",
    options:["Slaughterhouse-Five","Cat's Cradle","Breakfast of Champions","Mother Night"]
  },
  {
    line:"I am an invisible man.",
    title:"Invisible Man",
    author:"Ralph Ellison",
    options:["Invisible Man","Native Son","The Color Purple","Go Tell It on the Mountain"]
  },
  {
    line:"In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    options:["The Great Gatsby","This Side of Paradise","Tender Is the Night","The Beautiful and Damned"]
  },
  {
    line:"Lolita, light of my life, fire of my loins.",
    title:"Lolita",
    author:"Vladimir Nabokov",
    options:["Lolita","Pale Fire","Ada or Ardor","The Gift"]
  },
  {
    line:"All children, except one, grow up.",
    title:"Peter Pan",
    author:"J. M. Barrie",
    options:["Peter Pan","Alice in Wonderland","The Jungle Book","The Wind in the Willows"]
  },
  {
    line:"Last night I dreamt I went to Manderley again.",
    title:"Rebecca",
    author:"Daphne du Maurier",
    options:["Rebecca","Jamaica Inn","My Cousin Rachel","The House on the Strand"]
  },
  {
    line:"In a hole in the ground there lived a hobbit.",
    title:"The Hobbit",
    author:"J. R. R. Tolkien",
    options:["The Hobbit","The Fellowship of the Ring","The Silmarillion","Unfinished Tales"]
  },
  {
    line:"It was a pleasure to burn.",
    title:"Fahrenheit 451",
    author:"Ray Bradbury",
    options:["Fahrenheit 451","Brave New World","We","The Giver"]
  },
  {
    line:"124 was spiteful. Full of a baby's venom.",
    title:"Beloved",
    author:"Toni Morrison",
    options:["Beloved","Song of Solomon","Sula","The Bluest Eye"]
  },
  {
    line:"Ships at a distance have every man's wish on board.",
    title:"Their Eyes Were Watching God",
    author:"Zora Neale Hurston",
    options:["Their Eyes Were Watching God","Dust Tracks on a Road","Jonah's Gourd Vine","Moses, Man of the Mountain"]
  },
  {
    line:"You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer.",
    title:"Adventures of Huckleberry Finn",
    author:"Mark Twain",
    options:["Adventures of Huckleberry Finn","The Adventures of Tom Sawyer","A Connecticut Yankee in King Arthur's Court","Life on the Mississippi"]
  },
  {
    line:"The man in black fled across the desert, and the gunslinger followed.",
    title:"The Dark Tower: The Gunslinger",
    author:"Stephen King",
    options:["The Dark Tower: The Gunslinger","It","The Shining","Needful Things"]
  },
  {
    line:"Where's Papa going with that axe?",
    title:"Charlotte's Web",
    author:"E. B. White",
    options:["Charlotte's Web","Stuart Little","The Trumpet of the Swan","Bambi"]
  },
  {
    line:"It was the day my grandmother exploded.",
    title:"The Crow Road",
    author:"Iain Banks",
    options:["The Crow Road","Complicity","The Wasp Factory","Espedair Street"]
  },
  {
    line:"Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed.",
    title:"Ulysses",
    author:"James Joyce",
    options:["Ulysses","A Portrait of the Artist as a Young Man","Dubliners","Finnegans Wake"]
  }
];
