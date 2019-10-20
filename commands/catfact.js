const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog_fact',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [`Unlike humans, cats cannot detect sweetness–which likely explains why they are not drawn to it at all.`,`Ginger tabby cats can have freckles around their mouths and on their eyelids!`,`A cat has the power to sometimes heal themselves by purring. A domestic cat’s purr has a frequency of between 25 and 150 Hertz, which happens to be the frequency at which muscles and bones best grow and repair themselves.`,`Cats only use their meows to talk to humans, not each other. The only time they meow to communicate with other felines is when they are kittens to signal to their mother.`,`Despite imagery of cats happily drinking milk from saucers, studies indicate that cats are actually lactose intolerant and should avoid it entirely.`,`The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!`,`The Cat Fanciers Association (CFA) recognizes 44 breeds of cats.`,`A cat’s cerebral cortex contains about twice as many neurons as that of dogs. Cats have 300 million neurons, whereas dogs have about 160 million. See, cats rule, dogs drool!`,`Polydactyl cats (a cat with 1-2 extra toes on their paws) have this as a result of a genetic mutation. These cats are also referred to as “Hemingway cats” because writer Ernest Hemingway reportedly owned dozens of them at his home in Key West, Florida.`,`Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors.`,`The average cat can jump 8 feet in a single bound–nearly six times its body length!`,`A cat’s smell is their strongest sense, and they rely on this leading sense to identify people and objects; a feline’s sense of smell is 14x better than a human’s.`,`Cats only sweat through their paws and nowhere else on their body.`,`A cat only has the ability to move their jaw up and down, not side to side like a human can.`,`A group of cats is called a clowder.`,`A female cat can be referred to as a molly or a queen, and a male cat is often labeled as a tom.`,`A cat has the ability to rotate their ears 180 degrees–with the help of 32 muscles that they use to control them.`,`70% of your cat’s life is spent asleep.`,`A cat’s nose is as unique as a human’s fingerprint.`,`Cats have 3 eyelids.`];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setDescription(doRandHT())
        message.channel.send(rollembed);   
    }
        
    }
