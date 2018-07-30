const people = {
	"grinning": "&#x1f600;",
	"grin": "&#x1f601;",
	"joy": "&#x1f602;",
	"rofl": "&#x1f923;",
	"smiley": "&#x1f603;",
	"smile": "&#x1f604;",
	"sweat-smile": "&#x1f604;",
	"laughing": "&#x1f606;",
	"wink": "&#x1f609;",
	"blush": "&#x1f60A;",
	"yum": "&#x1f60B;",
	"sunglasses": "&#x1f60E;",
	"heart-eyes": "&#x1f60D;",
	"kissing-heart": "&#x1f618;",
	"kissing": "&#x1f617;",
	"kissing-smiling-eyes": "&#x1f619;",
	"kissing-closed-eyes": "&#x1f61A;",
	"relaxed": "&#x263A;",
	"slightly-smiling-face": "&#x1f642;",
	"hugging-face": "&#x1f917;",
	"star-eyes": "&#x1f929;",
	"thinking-face": "&#x1f914;",
	"raised-eyebrow": "&#x1f928;",
	"neutral-face": "&#x1f610;",
	"expressionless": "&#x1f611;",
	"no-mouth": "&#x1f636;",
	"eye-roll": "&#x1f644;",
	"smirk": "&#x1f60f;",
	"persevere": "&#x1f623;",
	"disappointed-relieved": "&#x1f625;",
	"open-mouth": "&#x1f62e;",
	"zipper-mouth-face": "&#x1f910;",
	"hushed": "&#x1f62f;",
	"sleepy": "&#x1f62a;",
	"tired-face": "&#x1f62b;",
	"sleeping": "&#x1f634;",
	"relieved": "&#x1f60c;",
	"stuck-out-tongue": "&#x1f61b;",
	"sout-tongue-winking-eye": "&#x1f61c;",
	"sout-tongue-closed-eyes": "&#x1f61d;",
	"drooling-face": "&#x1f924;",
	"unamused": "&#x1f612;",
	"sweat": "&#x1f613;",
	"pensive": "&#x1f614;",
	"confused": "&#x1f615;",
	"upside-down-face": "&#x1f643;",
	"money-mouth-face": "&#x1f911;",
	"astonished": "&#x1f632;",
	"frowning-face": "&#x2639;",
	"slightly-frowning-face": "&#x1f641;",
	"confounded": "&#x1f616;",
	"disappointed": "&#x1f61e;",
	"worried": "&#x1f61f;",
	"triumph": "&#x1f624;",
	"cry": "&#x1f622;",
	"sob": "&#x1f62d;",
	"frowning": "&#x1f626;",
	"anguished": "&#x1f627;",
	"fearful": "&#x1f628;",
	"weary": "&#x1f629;",
	"exploding-head": "&#x1f92f;",
	"grimacing": "&#x1f62c;",
	"cold-sweat": "&#x1f630;",
	"scream": "&#x1f631;",
	"flushed": "&#x1f633;",
	"crazy-eyes": "&#x1f92a;",
	"dizzy-face": "&#x1f635;",
	"rage": "&#x1f621;",
	"angry": "&#x1f620;",
	"cursing": "&#x1f92c;",
	"mask": "&#x1f637;",
	"sick": "&#x1f912;",
	"injured": "&#x1f915;",
	"green-face": "&#x1f922;",
	"spew": "&#x1f92e;",
	"gesundheit": "&#x1f927;",
	"innocent": "&#x1f607;",
	"cowboy": "&#x1f920;",
	"clown-face": "&#x1f921;",
	"liar": "&#x1f925;",
	"hush": "&#x1f92b;",
	"blushing-face": "&#x1f92d;",
	"face-with-monocle": "&#x1f9d0;",
	"nerdy": "&#x1f913;",
	"smiling-face-with-horns": "&#x1f608;",
  "imp": "&#x1f47f;",
  "japanese-ogre": "&#x1f479;",
  "japanese-goblin": "&#x1f47a;",
  "skull": "&#x1f480;",
  "ghost": "&#x1f47b;",
  "extraterrestrial-alien": "&#x1f47d;",
  "robot-face": "&#x1f916;",
  "pile-of-poo": "&#x1f4a9;",
  "smiling-cat-face-with-open-mouth": "&#x1f63a;",
  "grinning-cat-face-with-smiling-eyes": "&#x1f638;",
  "cat-face-with-tears-of-joy": "&#x1f639;",
  "smiling-cat-face-with-heart-shaped-eyes": "&#x1f63b;",
  "cat-face-with-wry-smile": "&#x1f63c;",
  "kissing-cat-face-with-closed-eyes": "&#x1f63d;",
  "weary-cat-face": "&#x1f640;",
  "crying-cat-face": "&#x1f63f;",
  "pouting-cat-face": "&#x1f63e;",
  "baby": "&#x1f476;",
  "boy": "&#x1f466;",
  "girl": "&#x1f467;",
  "man": "&#x1f468;",
  "woman": "&#x1f469;",
  "older-man": "&#x1f474;",
  "older-woman": "&#x1f475;",
  "male-health-worker": "&#x1f468;",
  "female-health-worker": "&#x1f469;",
  "male-student": "&#x1f468;",
  "female-student": "&#x1f469;",
  "male-judge": "&#x1f468;",
  "female-judge": "&#x1f469;",
  "male-farmer": "&#x1f468;",
  "female-farmer": "&#x1f469;",
  "male-cook": "&#x1f468;",
  "female-cook": "&#x1f469;",
  "male-mechanic": "&#x1f468;",
  "female-mechanic": "&#x1f469;",
  "male-factory-worker": "&#x1f468;",
  "female-factory-worker": "&#x1f469;",
  "male-office-worker": "&#x1f468;",
  "female-office-worker": "&#x1f469;",
  "male-scientist": "&#x1f468;",
  "female-scientist": "&#x1f469;",
  "male-technologist": "&#x1f468;",
  "female-technologist": "&#x1f469;",
  "male-singer": "&#x1f468;",
  "female-singer": "&#x1f469;",
  "male-artist": "&#x1f468;",
  "female-artist": "&#x1f469;",
  "male-pilot": "&#x1f468;",
  "female-pilot": "&#x1f469;",
  "male-astronaut": "&#x1f468;",
  "female-astronaut": "&#x1f469;",
  "male-firefighter": "&#x1f468;",
  "female-firefighter": "&#x1f469;",
  "police-officer": "&#x1f46e;",
  "male-police-officer": "&#x1f46e;",
  "female-police-officer": "&#x1f46e;",
  "sleuth-or-spy": "&#x1f575;",
  "male-sleuth": "&#x1f575;",
  "female-sleuth": "&#x1f575;",
  "guardsman": "&#x1f482;",
  "male-guard": "&#x1f482;",
  "female-guard": "&#x1f482;",
  "construction-worker": "&#x1f477;",
  "male-construction-worker": "&#x1f477;",
  "female-construction-worker": "&#x1f477;",
  "prince": "&#x1f934;",
  "princess": "&#x1f478;",
  "man-with-turban": "&#x1f473;",
  "man-wearing-turban": "&#x1f473;",
  "woman-wearing-turban": "&#x1f473;",
  "man-with-gua-pi-mao": "&#x1f472;",
  "person-with-headscarf": "&#x1f9d5;",
  "bearded-person": "&#x1f9d4;",
  "person-with-blond-hair": "&#x1f471;",
  "blond-man": "&#x1f471;",
  "blonde-woman": "&#x1f471;",
  "man-in-tuxedo": "&#x1f935;",
  "bride-with-veil": "&#x1f470;",
  "pregnant-woman": "&#x1f930;",
  "breast-feeding": "&#x1f931;",
  "baby-angel": "&#x1f47c;",
  "father-christmas": "&#x1f385;",
  "mother-christmas": "&#x1f936;",
  "woman-mage": "&#x1f9d9;",
  "man-mage": "&#x1f9d9;",
  "woman-fairy": "&#x1f9da;",
  "man-fairy": "&#x1f9da;",
  "woman-vampire": "&#x1f9db;",
  "man-vampire": "&#x1f9db;",
  "merwoman": "&#x1f9dc;",
  "merman": "&#x1f9dc;",
  "woman-elf": "&#x1f9dd;",
  "man-elf": "&#x1f9dd;",
  "woman-genie": "&#x1f9de;",
  "man-genie": "&#x1f9de;",
  "woman-zombie": "&#x1f9df;",
  "man-zombie": "&#x1f9df;",
  "person-frowning": "&#x1f64d;",
  "man-frowning": "&#x1f64d;",
  "woman-frowning": "&#x1f64d;",
  "person-with-pouting-face": "&#x1f64e;",
  "man-pouting": "&#x1f64e;",
  "woman-pouting": "&#x1f64e;",
  "face-with-no-good-gesture": "&#x1f645;",
  "man-gesturing-not-ok": "&#x1f645;",
  "woman-gesturing-not-ok": "&#x1f645;",
  "face-with-ok-gesture": "&#x1f646;",
  "man-gesturing-ok": "&#x1f646;",
  "woman-gesturing-ok": "&#x1f646;",
  "information-desk-person": "&#x1f481;",
  "man-tipping-hand": "&#x1f481;",
  "woman-tipping-hand": "&#x1f481;",
  "happy-person-raising-one-hand": "&#x1f64b;",
  "man-raising-hand": "&#x1f64b;",
  "woman-raising-hand": "&#x1f64b;",
  "person-bowing-deeply": "&#x1f647;",
  "man-bowing-deeply": "&#x1f647;",
  "woman-bowing-deeply": "&#x1f647;",
  "face-palm": "&#x1f926;",
  "man-facepalming": "&#x1f926;",
  "woman-facepalming": "&#x1f926;",
  "shrug": "&#x1f937;",
  "man-shrugging": "&#x1f937;",
  "woman-shrugging": "&#x1f937;",
  "face-massage": "&#x1f486;",
  "man-getting-face-massage": "&#x1f486;",
  "woman-getting-face-massage": "&#x1f486;",
  "haircut": "&#x1f487;",
  "man-getting-haircut": "&#x1f487;",
  "woman-getting-haircut": "&#x1f487;",
  "pedestrian": "&#x1f6b6;",
  "man-walking": "&#x1f6b6;",
  "woman-walking": "&#x1f6b6;",
  "runner": "&#x1f3c3;",
  "man-running": "&#x1f3c3;",
  "woman-running": "&#x1f3c3;",
  "dancer": "&#x1f483;",
  "man-dancing": "&#x1f57a;",
  "woman-with-bunny-ears": "&#x1f46f;",
  "men-with-bunny-ears-partying": "&#x1f46f;",
  "women-with-bunny-ears-partying": "&#x1f46f;",
  "woman-in-steamy-room": "&#x1f9d6;",
  "man-in-steamy-room": "&#x1f9d6;",
  "man-in-business-suit-levitating": "&#x1f574;",
  "speaking-head-in-silhouette": "&#x1f5e3;",
  "bust-in-silhouette": "&#x1f464;",
  "busts-in-silhouette": "&#x1f465;",
  "man-and-woman-holding-hands": "&#x1f46b;",
  "two-men-holding-hands": "&#x1f46c;",
  "two-women-holding-hands": "&#x1f46d;",
  "kiss": "&#x1f48f;",
  "kiss-man-man": "&#x1f468;",
  "kiss-woman-woman": "&#x1f469;",
  "couple-with-heart": "&#x1f491;",
  "couple-with-heart-man-man": "&#x1f468;",
  "couple-with-heart-woman-woman": "&#x1f469;",
  "family": "&#x1f46a;",
  "family-man-woman-boy": "&#x1f468;",
  "family-man-woman-girl": "&#x1f468;",
  "family-man-woman-girl-boy": "&#x1f468;",
  "family-man-woman-boy-boy": "&#x1f468;",
  "family-man-woman-girl-girl": "&#x1f468;",
  "family-man-man-boy": "&#x1f468;",
  "family-man-man-girl": "&#x1f468;",
  "family-man-man-girl-boy": "&#x1f468;",
  "family-man-man-boy-boy": "&#x1f468;",
  "family-man-man-girl-girl": "&#x1f468;",
  "family-woman-woman-boy": "&#x1f469;",
  "family-woman-woman-girl": "&#x1f469;",
  "family-woman-woman-girl-boy": "&#x1f469;",
  "family-woman-woman-boy-boy": "&#x1f469;",
  "family-woman-woman-girl-girl": "&#x1f469;",
  "family-man-boy": "&#x1f468;",
  "family-man-boy-boy": "&#x1f468;",
  "family-man-girl": "&#x1f468;",
  "family-man-girl-boy": "&#x1f468;",
  "family-man-girl-girl": "&#x1f468;",
  "family-woman-boy": "&#x1f469;",
  "family-woman-boy-boy": "&#x1f469;",
  "family-woman-girl": "&#x1f469;",
  "family-woman-girl-boy": "&#x1f469;",
  "family-woman-girl-girl": "&#x1f469;",
  "selfie": "&#x1f933;",
  "flexed-biceps": "&#x1f4aa;",
  "white-left-pointing-backhand-index": "&#x1f448;",
  "white-right-pointing-backhand-index": "&#x1f449;",
  "white-up-pointing-index": "&#x261d;",
  "white-up-pointing-backhand-index": "&#x1f446;",
  "reversed-hand-with-middle-finger-extended": "&#x1f595;",
  "white-down-pointing-backhand-index": "&#x1f447;",
  "victory-hand": "&#x270c;",
  "hand-with-index-and-middle-fingers-crossed": "&#x1f91e;",
  "raised-hand-with-part-between-middle-and-ring-fingers": "&#x1f596;",
  "sign-of-the-horns": "&#x1f918;",
  "raised-hand-with-fingers-splayed": "&#x1f590;",
  "raised-hand": "&#x270b;",
  "ok-hand-sign": "&#x1f44c;",
  "thumbs-up-sign": "&#x1f44d;",
  "thumbs-down-sign": "&#x1f44e;",
  "raised-fist": "&#x270a;",
  "fisted-hand-sign": "&#x1f44a;",
  "left-facing-fist": "&#x1f91b;",
  "right-facing-fist": "&#x1f91c;",
  "raised-back-of-hand": "&#x1f91a;",
  "waving-hand-sign": "&#x1f44b;",
  "i-love-you-hand-sign": "&#x1f91f;",
  "writing-hand": "&#x270d;",
  "clapping-hands-sign": "&#x1f44f;",
  "open-hands-sign": "&#x1f450;",
  "person-raising-both-hands-in-celebration": "&#x1f64c;",
  "palms-up-together": "&#x1f932;",
  "person-with-folded-hands": "&#x1f64f;",
  "handshake": "&#x1f91d;",
  "nail-polish": "&#x1f485;",
  "ear": "&#x1f442;",
  "nose": "&#x1f443;",
  "footprints": "&#x1f463;",
  "eyes": "&#x1f440;",
  "eye": "&#x1f441;",
  "brain": "&#x1f9e0;",
  "tongue": "&#x1f445;",
  "mouth": "&#x1f444;",
  "kiss-mark": "&#x1f48b;",
  "eyeglasses": "&#x1f453;",
  "dark-sunglasses": "&#x1f576;",
  "necktie": "&#x1f454;",
  "t-shirt": "&#x1f455;",
  "jeans": "&#x1f456;",
  "scarf": "&#x1f9e3;",
  "gloves": "&#x1f9e4;",
  "coat": "&#x1f9e5;",
  "socks": "&#x1f9e6;",
  "dress": "&#x1f457;",
  "kimono": "&#x1f458;",
  "bikini": "&#x1f459;",
  "womans-clothes": "&#x1f45a;",
  "purse": "&#x1f45b;",
  "handbag": "&#x1f45c;",
  "pouch": "&#x1f45d;",
  "school-satchel": "&#x1f392;",
  "mans-shoe": "&#x1f45e;",
  "athletic-shoe": "&#x1f45f;",
  "high-heeled-shoe": "&#x1f460;",
  "womans-sandal": "&#x1f461;",
  "womans-boots": "&#x1f462;",
  "crown": "&#x1f451;",
  "womans-hat": "&#x1f452;",
  "top-hat": "&#x1f3a9;",
  "graduation-cap": "&#x1f393;",
  "billed-cap": "&#x1f9e2;",
  "helmet-with-white-cross": "&#x26d1;",
  "lipstick": "&#x1f484;",
  "ring": "&#x1f48d;",
  "closed-umbrella": "&#x1f302;",
  "umbrella": "&#x2602;",
  "briefcase": "&#x1f4bc;"
}

export default people

