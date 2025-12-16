const questions = [
    {
        id: "prayers_today",
        type:"single-choice",
        text:"How many prayers did you pray today?",
        options:[0,1,2,3,4,5],
        scoring:{0:-5,1:1,2:2,3:3,4:4,5:10},
        maxPoints:10
    },
    {
        id: "jamah",
        type:"single-choice",
        text:"How many prayers did you pray today with Jamah?",
        options:[0,1,2,3,4,5,'female'],
        scoring:{0:0,1:1,2:2,3:3,4:4,5:10,'female':10},
        maxPoints:10
        
    },
    {
        id: "qaza",
        type:"single-choice",
        text:"How many prayers did you make qaza today?",
        options:[0,1,2,3,4,5],
        scoring:{0:0,1:-0.5,2:-1.5,3:-2.5,4:-3.5,5:-4.5},
        maxPoints:0
    },
    {
        id:"tahajjud",
        type:"boolean",
        text:"Have you prayed tahajjud today?",
        options:[true,false],
        scoring:{true:5,false:0},
        maxPoints:5
    },

    {
        id:"Quran",
        type:"boolean",
        text:"Have you read Quran today?",
        options:[true,false],
        scoring:{true:5,false:0},
        maxPoints:5
    },

    {
        id:"ziqr",
        type:"boolean",
        text:"Have you practiced your daily ziqr and duas today?",
        options:[true,false],
        scoring:{true:5,false:0},
        maxPoints:5
    },
    {
        id:"akhlaq",
        type:"boolean",
        text:"Have you kept your good akhlaq today?(avoiding - anger,conflicts, disrespecting elders,rudeness to others,telling lie etc)",
        options:[true,false],
        scoring:{true:5,false:0},
        maxPoints:5
    },
    {
        id:"fast",
        type:"boolean",
        text:"Did you fast today?",
        options:[true,false],
        scoring:{true:5,false:2},
        maxPoints:5
    },
    {
        id:"sadaqah",
        type:"single-choice",
        text:"Have you given jakat/sadaqah today?",
        options:['yes','no','still not applicable for me'],
        scoring:{'yes':5,'no':0,"still not applicable for me":5},
        maxPoints:5
    },
    {
        id:"lust",
        type:"boolean",
        text:"Have you controlled your lust today?",
        options:[true,false],
        scoring:{true:5,false:0},
        maxPoints:5
    }
];

