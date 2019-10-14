const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'joke',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [`Doctor: "I'm sorry but you suffer from a terminal illness and have only 10 to live."

                Patient: "What do you mean, 10? 10 what? Months? Weeks?!"
                
                Doctor: "Nine."`,`My old aunts would come and tease me at weddings, “Well Sarah? Do you think you’ll be next?”
                -
                We’ve settled this quickly once I’ve started doing the same to them at funerals.
                `,`
                A doctor accidentally prescribes his patient a laxative instead of a coughing syrup.
                -
                Three days later the patient comes for a check-up and the doctor asks: “Well? Are you still coughing?”
                -
                The patient replies: “No. I’m afraid to.”`,`Job interviewer: “And where would you see yourself in five years’ time Mr. Jeffries?"
                -
                Mr. Jeffries: "Personally I believe my biggest weakness is in listening."`,`An old grandma brings a bus driver a bag of peanuts every day.

                First the bus driver enjoyed the peanuts but after a week of eating them he asked: "Please granny, don't bring me peanuts anymore. Have them yourself.".
                
                The granny answers: "You know, I don't have teeth anymore. I just prefer to suck the chocolate around them."`,`Dentist: “This will hurt a little.”

                Patient: “OK.”
                
                Dentist: “I’ve been having an affair with your wife for a while now.”`,`I got another letter from this lawyer today. It said “Final Notice”. Good that he will not bother me anymore.`,`I dreamed I was forced to eat a giant marshmallow. When I woke up, my pillow was gone.`,`An eskimo brings his friend to his home for a visit. When they arrive, his friend asks, puzzled – “So where’s your igloo?”
                -
                The friend replies “Oh no, I must’ve left the iron on…”`,`"Can you please hold my hand?"A mother asks her son: "Anton, do you think I’m a bad mom?"
                -
                Son: "My name is Paul."`,`Doctor: You're obese.
                -
                Patient: For that I definitely want a second opinion.
                -
                Doctor: You’re quite ugly, too.`,`Two donkeys are standing at a roadside, one asks the other: So, shall we cross?
                -
                The other shakes his head: "No way, look at what happened to the zebra."`,`Guest to the waiter: “Can you bring me what the lady at the next table is having?”
                -
                Waiter: “Sorry, sir, but I’m pretty sure she wants to eat it herself.”`,`
                "Mom, where do tampons go?"
                
                "Where the babies come from, darling."
                
                "In the stork?"`];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setDescription(doRandHT())
        message.channel.send(rollembed);   
    }
        
    }
