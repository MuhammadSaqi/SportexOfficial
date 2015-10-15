/* Created by Mohib-Wasay 20th Feb 2015 */

var Sportex = {
    data: {
        games: undefined
    }
};

Sportex.data.games = {

    futsal: {title: "Futsal", status: "boys",
        rules: [
            "Registration fee for Futsal Rs.4000 per team for Futsal.",
            "Teams will be selected on the basis of first come first serve.",
            "Only 8 players are allowed to participate as a team, i.e. 5 players on the field while 3 on the bench.",
            "16 teams will compete in round 1 and then the winning teams will qualify for round 2.",
            "2 halves of 15 minutes each",
            "5 minute break at half time",
            "NO Stoppage time",
            "Minimum number of players to start a match (or end  a match): 3",
            "Kick-ins instead of throw-ins.",
            "In case, two teams are leveled on points after the group stage; it will be decided in favor of the team, conceding the least goals or, who scored more goals",
            "Gold and silver medals for the 1st and runner-up teams, along with participation certificates for all involved players.",
            "The decision of the referee will be final",
            "Arguing with the referee is strictly forbidden"
    ]},

	basketBall: {title: "Basketball", status: "boys",
        rules: [
            "Basketball Rs.3000 per team for Basketball.",
            "Teams will be selected on first come first serve basis.",
            "Only 8 players are allowed to participate i.e. 5 players will be playing at a time, with 3 on the bench.",
            "16 teams will compete in round 1 and then the winning teams will qualify for round 2.",
            "4 halves of 10 minutes each",
            "3 minute break at half time",
        	"In case of a tie at the end of the 2nd half it will be decide in Over Time of 3 minutes.",
	        "The Rim height is 10 ft.",
	        "Gold and silver medals for the 1st and runner-up teams, along with participation certificates for all involved players.",
        	"The decision of the referee will be final",
        	"Arguing with the referee is strictly forbidden",
    ]},

	volleyBall: {title: "Volleyball", status: "boys",
        rules: [
            "Registration fee  Rs.4000 per team for Volleyball",
	        "Teams will be selected on the basis of first come first serve.",
	        "Only 9 players are allowed to participate as a team, i.e. 6 players on the court while 3 on the bench.",
	        "16 teams will compete in round 1 and then the winning teams will qualify for round 2.",
	        "A match will consist of, a best of 3 games, knock out.",
            "A race to 15 in each game, where 15 will mean the GAME-POINT and the gaining of 16 means the GAME.",
	        "In case of DEUCE the game will be decided on the rule of ADVANTAGE.",
	        "A team can take 2 time-outs of 1 min each during a set.",
	        "The height of the net will be 7 feet 9 inches.",
	        "Gold and silver medals for the 1st and runner-up teams, along with participation certificates for all involved players.",
	        "The decision of the referee will be final",
	        "Arguing with the referee is strictly forbidden"
    ]},
    
	cricket: {title: "cricket", status: "boys",
        rules: [
            "Registration fee for Cricket is Rs.5000",
            "Each team will consist of 12 players but only 11 can participate in one match. The last Player will be a substitute.",
	        "No substitute runners will be allowed on any conditions.",
	        "Each match will consist of six overs. The semi-final and final will be of eight overs.",
	        "One bowler can bowl a maximum of two overs.",
	        "Umpires decision will be the final decision ",
	        "Misbehavior with the empire’s decision can lead to disqualification",
	        "First two overs will be power play and only three fielders are allowed out of the inner circle",
	        "Only boys can participate in this event.",
	        "Format shall be group and knock-out."
    ]},

	throwBall: {title: "Throw Ball", status: "boys",
        rules: [
            "Registration for Throw ball is Rs. 4000 per team.",
	        "Players will be selected on the basis of first come first serve.",
	        "16 players will compete in round 1 and then the winning teams will qualify for round 2.",
	        "A match will consist of, a best of 3 games, knock out.",
	        "A game of table tennis will be played up to 11 points.",
	        "The winner is the player who first scores 11 points.",
	        "In case of DEUCE Service continues to alternate between opponents until one gets consecutive two points,",
	        "Each player has two serves.",
	        "A toss will be conducted first where the winner can; elect to serve first or make his opponent serve first or decide which end of the table he prefers to play at first",
	        "A player loses a point if he:",
        	"Fails to make a good serve (i.e. throwing the ball in the air and failing to hit it or failing to hit it onto his opponent's side)",
	        "Allows the ball to bounce twice on his side",
	        "Does not hit the ball onto his opponent's side",
            "Hits the ball twice in succession (i.e. a double hit)",
	        "Gold and Silver medals for the 1st and runner-up players, along with participation certificates for all involved players.",
	        "The decision of the referee will be final",
	        "Arguing with the referee is strictly forbidden"
    ]},

	chess: {title: "Chess", status: "boys",
        rules: [
            "Registration for Chess Rs. 500/-",
            "The tournament shall be played on a knock-out format.",
	        "The winner of the final shall be decided by a best of three",
	        "Each game will take at-most 40 minutes.",
	        "If winner is not decided within 40 minutes of play time, the player with more \"Captured Points\" will be declared the winner. The points break down is: Piece Captured Points Earned Queen 9 Rook 5 Bishop 3 Knight 3 Pawn 1. ",
	        "In case of a stalemate, the match will be considered as a draw. In case of a draw, the player with more Captured Points shall be declared winner.",
	        "In case the points are equal as well, there will be a re-match which may or may not be with the same opponent depending upon the situation.",
	        "International rules of chess will be followed for castling, checkmate, stalemate etc. ",
	        "If a pawn reaches 8th rank, it can be promoted to any of the desired pieces. (I.e. theoretically you can have up to 9 queens on the board at a time) ",
	        "A player can resign at any time during the game. ",
	        "Crosstalk is not allowed and any queries shall be made to the Arbitrator.",
	        "Arbitrator shall have the ultimate word. He gets to make the final decision in any prevailing situation and reserves the right to disqualify any player at any time of the game."
    ]},
	tableTennis: {title: "Table Tennis", status: "boys",
        rules: [
            "Registration for Table tennis is Rs. 800",
            "Each match will consist of three sets.",
	        "Each set will be of 11 points.",
	        "All official rules will be followed.",
	        "Both boys and girls can participate.",
	        "Format shall be knock-out rounds.",
	        "A game of Table Tennis will be played up to 15 points.",
	        "The winner is the player who first scores 15 points.",
	        "In case of DEUCE Service continues to alternate between opponents until one gets consecutive two points",
	        "A toss will be conducted first where the winner can; elect to serve first or make his opponent serve first or decide which side he prefers to play at first",
	        "A point is awarded to a player's and wins a serve when opponent commits a foul and vice versa.",
	        "A player loses a point if he:",
        	"Fails to make a good serve (i.e. throwing the shuttle in the air and failing to hit it or failing to hit it onto his opponent's side)",
        	"Allows the shuttle to fall on his side",
            "Does not hit the shuttle onto his opponent's side",
        	"Hits the shuttle twice in succession (i.e. a double hit)",
	        "Gold and Silver medals for the 1st and runner-up players, along with participation certificates for all involved players.",
	        "The decision of the referee will be final",
	        "Arguing with the referee is strictly forbidden."
    ]}
};

Sportex.data.contacts = [
    {for: "Information Secretary", name: "Shahrukh Tarik", phone: "0345-2368381"},
    {for: "Secretary Registration", name: "Waqar Riaz", phone: "0344-2514300"},
    {for: "President Sportex (Organizer)", name: "Umer Lath ", phone: "0345-2312640"},
    {for: "General Secretary (Organizer)", name: "Raveed Khan", phone: "0334-6090718"}
];

Sportex.olympiad = {
    rules: ["All participants agree to have read and will abide by the terms and conditions of Olympid 15.",
        "All participants will be required to show their CNIC at the registrations desk to get their participation cards. ",
        "Any act of indiscipline may result in disqualification",
        "The match official’s decision will be final.",
        "If a team/player is more than 10 minutes late, a walk over will be awarded to the opposite team/player.",
        "A delegation will only be allowed to participate if they register in a minimum of 3 events",
        "One member of a delegation can participate in a minimum of 1 event and a maximum of 2 events.",
        "The head delegate may not participate in any event. If that is the case, he will not be charged any money.",
        "Inside the premises of TIP, no one is allowed to carry any sort of political activity.",
        " All participants are asked to behave in a civilized manner inside TIP’s premises.",
        "Drugs/weapons/alcohol are not allowed inside TIP’s premises."
    ],
    about: "Olympid 15 by the Sportex society of Textile institute of Pakistan is an inter college university event. A 3 day event guarantees you the epic combat of sports by different institutions of Karachi. Starting from 27th to 29th of March 2015, Olympid will embark your liveliest journey of sports.",
    about2: "The grounds of Textile Institute of Pakistan will be a buzz with eager players for different sports, which are:"
};