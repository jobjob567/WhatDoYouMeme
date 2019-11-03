export const Game_Server = {
    Players: [],
    Picture_Deck: [],
    Caption_Deck: [],
    Dealer: -1,
    Captions_In_Play: [], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1
}

export const Game_Client = {
    Players: [
        { name: "Moshe", points: 0 },
        { name: "Bernie", points: 0 },
        { name: "Donald", points: 0 },
        { name: "Andrew", points: 0 },
    ],
    Dealer: -1,
    Captions_In_Play: [
            {quote:"When nothing goes right, go left instead!"},
            {quote:"I need a six month holiday, twice a year."},
            {quote:"There may be no excuse for laziness, but I’m still looking."},
            {quote:"A blind man walks into a bar… And a chair… and a table."},
            {quote:"I don’t always surf the internet, but when I do, eyebrows!"},
            {quote:"Yesterday, I changed my WiFi password to “Hackitifyoucan”; today, someone changed it to “ChallengeAccepted”."},
            {quote:"So, you’re on Instagram? You must be an amazing photographer."},
            {quote:"Real men don’t take selfies."},
            {quote:"I haven’t done this in a while so excuse me."},
            {quote:"I know I’m lucky that I’m so cute."},
            {quote:"Onions make me sad. A lot of people don’t realize that."},
            {quote:"I’m your worst nightmare."},
    ], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1
}

export var My_Captions = [];

export class Player {
    name;
    points;
    captions;
}