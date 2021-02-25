//some shit to keep the bot working
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
//client login
client.login('Client login here');
//ready message
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("!tb help"); 
 });

 //on joining a server
client.on("guildCreate", guild => {
    console.log("Joined a new server: " + guild.name);
    client.channels.cache.get("Discor room id").send('I joined a server.')
})

//on leaving a server
client.on("guildDelete", guild => {
    console.log("Left a server: " + guild.name);
    client.channels.cache.get("Discor room id").send('I left a server')
})

//prefix + some messures to keep the bot working
const prefix = "!tb";
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
{//basically the rng
{//variables
var roles = ["top","jungle","mid","adc","support"];
var role = Math.floor(Math.random() * roles.length);
var champs = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr.Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "Leblanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
var champ = Math.floor(Math.random() * champs.length);
var runes = ["Precision", "Domination", "Sorcery", "Resolve", "Inspiration"];
var rune = Math.floor(Math.random() * runes.length);
}
{//Precision
var runesPrecision = ["Press the Attack", "Fleet Footwork", "Lethal tempo", "Conqueror"];
var runePrecision = Math.floor(Math.random() * runesPrecision.length);
var runesPrecision1 = ["Domination", "Sorcery", "Resolve", "Inspiration"];
var runePrecision1 = Math.floor(Math.random() * runesPrecision1.length);
var runesPrecisionA = ["Overheal", "Triumph", "Presence of mind"];
var runePrecisionA = Math.floor(Math.random() * runesPrecisionA.length);
var runesPrecisionB = ["Legend: alacrity", "Legend: tenacity", "Legend: bloodline"];
var runePrecisionB = Math.floor(Math.random() * runesPrecisionB.length);
var runesPrecisionC = ["Coup de grace", "Cut down", "Last stand"];
var runePrecisionC = Math.floor(Math.random() * runesPrecisionC.length);
}
{//Precision secondary
var runesPrecisionSecondary = ["Overheal", "Triumph", "Presence of mind", "Legend: alacrity", "Legend: tenacity", "Legend: bloodline", "Coup de grace", "Cut down", "Last stand"];
var runePrecisionSecondary = Math.floor(Math.random() * runesPrecisionSecondary.length);
var runesPrecisionSecondary1 = ["Legend: alacrity", "Legend: tenacity", "Legend: bloodline", "Coup de grace", "Cut down", "Last stand"];
var runePrecisionSecondary1 = Math.floor(Math.random() * runesPrecisionSecondary1.length);
var runesPrecisionSecondary2 = ["Overheal", "Triumph", "Presence of mind", "Coup de grace", "Cut down", "Last stand"];
var runePrecisionSecondary2 = Math.floor(Math.random() * runesPrecisionSecondary2.length);
var runesPrecisionSecondary3 = ["Overheal", "Triumph", "Presence of mind", "Legend: alacrity", "Legend: tenacity", "Legend: bloodline"];
var runePrecisionSecondary3 = Math.floor(Math.random() * runesPrecisionSecondary3.length);
}
{//Domination
var runesDomination = ["Electrocute", "Dark harvest", "Predator", "Hail of Blades"];
var runeDomination = Math.floor(Math.random() * runesDomination.length);
var runesDomination1 = ["Precision", "Sorcery", "Resolve", "Inspiration"];
var runeDomination1 = Math.floor(Math.random() * runesDomination1.length);
var runesDominationA = ["Cheap shot", "Taste of blood", "Sudden impact"];
var runeDominationA = Math.floor(Math.random() * runesDominationA.length);
var runesDominationB = ["Zombie ward", "Ghost poro", "Eyeball collection"];
var runeDominationB = Math.floor(Math.random() * runesDominationB.length);
var runesDominationC = ["Ravenous hunter", "Ingenious hunter", "Relentless hunter", "Ultimate hunter"];
var runeDominationC = Math.floor(Math.random() * runesDominationC.length);
}
{//Domination secondary
var runesDominationSecondary = ["Cheap shot", "Taste of blood", "Sudden impact", "Zombie ward", "Ghost poro", "Eyeball collection", "Ravenous hunter", "Ingenious hunter", "Relentless hunter", "Ultimate hunter"];
var runeDominationSecondary = Math.floor(Math.random() * runesDominationSecondary.length);
var runesDominationSecondary1 = ["Zombie ward", "Ghost poro", "Eyeball collection", "Ravenous hunter", "Ingenious hunter", "Relentless hunter", "Ultimate hunter"];
var runeDominationSecondary1 = Math.floor(Math.random() * runesDominationSecondary1.length);
var runesDominationSecondary2 = ["Cheap shot", "Taste of blood", "Sudden impact", "Ravenous hunter", "Ingenious hunter", "Relentless hunter", "Ultimate hunter"];
var runeDominationSecondary2 = Math.floor(Math.random() * runesDominationSecondary2.length);
var runesDominationSecondary3 = ["Cheap shot", "Taste of blood", "Sudden impact", "Zombie ward", "Ghost poro", "Eyeball collection"];
var runeDominationSecondary3 = Math.floor(Math.random() * runesDominationSecondary3.length);
}
{//Sorcery
var runesSorcery = ["Summon aery", "Phase rush", "Arcane comet"];
var runeSorcery = Math.floor(Math.random() * runesSorcery.length);
var runesSorcery1 = ["Precision", "Domination", "Resolve", "Inspiration"];
var runeSorcery1 = Math.floor(Math.random() * runesSorcery1.length);
var runesSorceryA = ["Nullifying orb", "Manaflow band", "Nimbus cloak"];
var runeSorceryA = Math.floor(Math.random() * runesSorceryA.length);
var runesSorceryB = ["Transcendence", "Celerity", "Absolute focus"];
var runeSorceryB = Math.floor(Math.random() * runesSorceryB.length);
var runesSorceryC = ["Scorch", "Waterwalking", "Gathering storm"];
var runeSorceryC = Math.floor(Math.random() * runesSorceryC.length);
}
{//Sorcery secondary
var runesSorcerySecondary = ["Nullifying orb", "Manaflow band", "Nimbus cloak", "Transcendence", "Celerity", "Absolute focus", "Scorch", "Waterwalking", "Gathering storm"];
var runeSorcerySecondary = Math.floor(Math.random() * runesSorcerySecondary.length);
var runesSorcerySecondary1 = ["Transcendence", "Celerity", "Absolute focus", "Scorch", "Waterwalking", "Gathering storm"];
var runeSorcerySecondary1 = Math.floor(Math.random() * runesSorcerySecondary1.length);
var runesSorcerySecondary2 = ["Nullifying orb", "Manaflow band", "Nimbus cloak", "Scorch", "Waterwalking", "Gathering storm"];
var runeSorcerySecondary2 = Math.floor(Math.random() * runesSorcerySecondary2.length);
var runesSorcerySecondary3 = ["Nullifying orb", "Manaflow band", "Nimbus cloak", "Transcendence", "Celerity", "Absolute focus"];
var runeSorcerySecondary3 = Math.floor(Math.random() * runesSorcerySecondary3.length);
}
{//Resolve
var runesResolve = ["Grasp of the undying", "Guardian", "Aftershock"];
var runeResolve = Math.floor(Math.random() * runesResolve.length);
var runesResolve1 = ["Precision", "Domination", "Sorcery", "Inspiration"];
var runeResolve1 = Math.floor(Math.random() * runesResolve1.length);
var runesResolveA = ["Demolish", "Font of life", "Shield Bash"];
var runeResolveA = Math.floor(Math.random() * runesResolveA.length);
var runesResolveB = ["Conditioning", "Second wind", "Bone plating"];
var runeResolveB = Math.floor(Math.random() * runesResolveB.length);
var runesResolveC = ["Overgrowth", "Revitalize", "Unflinching"];
var runeResolveC = Math.floor(Math.random() * runesResolveC.length);
}
{//Resolve secondary
var runesResolveSecondary = ["Demolish", "Font of life", "Shield bash", "Conditioning", "Second wind", "Bone plating", "Overgrowth", "Revitalize", "Unflinching"];
var runeResolveSecondary = Math.floor(Math.random() * runesResolveSecondary.length);
var runesResolveSecondary1 = ["Conditioning", "Second wind", "Bone plating", "Overgrowth", "Revitalize", "Unflinching"];
var runeResolveSecondary1 = Math.floor(Math.random() * runesResolveSecondary1.length);
var runesResolveSecondary2 = ["Demolish", "Font of life", "Shield bash", "Overgrowth", "Revitalize", "Unflinching"];
var runeResolveSecondary2 = Math.floor(Math.random() * runesResolveSecondary2.length);
var runesResolveSecondary3 = ["Demolish", "Font of life", "Shield bash", "Conditioning", "Second wind", "Bone plating"];
var runeResolveSecondary3 = Math.floor(Math.random() * runesResolveSecondary3.length);
}
{//Inspiration
var runesInspiration = ["Glacial augment", "Prototype: Omnistone", "Unsealed spellbook"];
var runeInspiration = Math.floor(Math.random() * runesInspiration.length);
var runesInspiration1 = ["Precision", "Domination", "Sorcery", "Resolve"];
var runeInspiration1 = Math.floor(Math.random() * runesInspiration1.length);
var runesInspirationA = ["Hextech flashtraption", "Magical Footwear", "Perfect timing"];
var runeInspirationA = Math.floor(Math.random() * runesInspirationA.length);
var runesInspirationB = ["Future's market", "Minion dematerializer", "Biscuit delivery"];
var runeInspirationB = Math.floor(Math.random() * runesInspirationB.length);
var runesInspirationC = ["Cosmic insight", "Approach velocity", "Time warp tonic"];
var runeInspirationC = Math.floor(Math.random() * runesInspirationC.length);
}
{//Inspiration secondary
var runesInspirationSecondary = ["Hextech flashtraption", "Magical footwear", "Perfect timing", "Future's market", "Minion dematerializer", "Biscuit delivery", "Cosmic insight", "Approach velocity", "Time warp tonic"];
var runeInspirationSecondary = Math.floor(Math.random() * runesInspirationSecondary.length);
var runesInspirationSecondary1 = ["Future's market", "Minion dematerializer", "Biscuit delivery", "Cosmic insight", "Approach velocity", "Time warp tonic"];
var runeInspirationSecondary1 = Math.floor(Math.random() * runesInspirationSecondary1.length);
var runesInspirationSecondary2 = ["Hextech flashtraption", "Magical footwear", "Perfect timing", "Cosmic insight", "Approach velocity", "Time warp tonic"];
var runeInspirationSecondary2 = Math.floor(Math.random() * runesInspirationSecondary2.length);
var runesInspirationSecondary3 = ["Hextech flashtraption", "Magical footwear", "Perfect timing", "Future's market", "Minion dematerializer", "Biscuit delivery"];
var runeInspirationSecondary3 = Math.floor(Math.random() * runesInspirationSecondary3.length);
}
{//summoner spells
var spells = ["Ghost", "Heal", "Barrier", "Exhaust", "Flash", "Teleport", "Cleanse", "Ignite", "Smite"];
var spell = Math.floor(Math.random() * spells.length);
var spells1 = ["Heal", "Barrier", "Exhaust", "Flash", "Teleport", "Cleanse", "Ignite", "Smite"];
var spell1 = Math.floor(Math.random() * spells1.length);
var spells2 = ["Ghost", "Barrier", "Exhaust", "Flash", "Teleport", "Cleanse", "Ignite", "Smite"];
var spell2 = Math.floor(Math.random() * spells2.length);
var spells3 = ["Ghost", "Heal", "Exhaust", "Flash", "Teleport", "Cleanse", "Ignite", "Smite"];
var spell3 = Math.floor(Math.random() * spells3.length);
var spells4 = ["Ghost", "Heal", "Barrier", "Flash", "Teleport", "Cleanse", "Ignite", "Smite"];
var spell4 = Math.floor(Math.random() * spells4.length);
var spells5 = ["Ghost", "Heal", "Barrier", "Exhaust", "Teleport", "Cleanse", "Ignite", "Smite"];
var spell5 = Math.floor(Math.random() * spells5.length);
var spells6 = ["Ghost", "Heal", "Barrier", "Exhaust", "Flash", "Cleanse", "Ignite", "Smite"];
var spell6 = Math.floor(Math.random() * spells6.length);
var spells7 = ["Ghost", "Heal", "Barrier", "Exhaust", "Flash", "Teleport", "Ignite", "Smite"];
var spell7 = Math.floor(Math.random() * spells7.length);
var spells8 = ["Ghost", "Heal", "Barrier", "Exhaust", "Flash", "Teleport", "Cleanse", "Smite"];
var spell8 = Math.floor(Math.random() * spells8.length);
var spells9 = ["Ghost", "Heal", "Barrier", "Exhaust", "Flash", "Teleport", "Cleanse", "Ignite",];
var spell9 = Math.floor(Math.random() * spells9.length);
}
{//items
    var ItemsMythic = ["Divine Sunderer", "Duskblade of Draktharr", "Eclipse", "Everfrost", "Frostfire gauntlet", "Galeforce", "Goredrinker", "Hextech Rocketbelt", "Immortal Shieldbow", "Imperial mandate", "Kraken slayer", "Liandry's Anguish", "Locket of the Iron Solari", "Luden's Tempest", "Moonstone Renewer", "Night Harvester", "Prowler's Claw", "Riftmaker", "Shurelya's Battlesong", "Stridebreaker", "Sunfire Aegis", "Trinity Force", "Turbo Chemtank"];
    var ItemMythic = Math.floor(Math.random() * ItemsMythic.length);

}
};

//help
if (message.content.startsWith(prefix + " help")) {
    const EmbedHelp = new Discord.MessageEmbed()
    EmbedHelp.setColor('#9c1717');
    EmbedHelp.setTitle('Tenmo bot commands')
    EmbedHelp.setDescription('')
    EmbedHelp.addFields({name: '‏‏‎---------------------------------------------------------------------------------------------------------', value: '**---------------------------------------------------------------------------------------------------------**' })
	EmbedHelp.addFields({ name: 'Selects your role', value: '!tb role ', inline: true },
                        { name: 'Selects your champion', value: '!tb champ', inline: true },
                        { name: 'Selects your runes', value: '!tb runes', inline: true })
    EmbedHelp.addFields({ name: 'Selects your summoners spells', value: '!tb spells', inline: true },
                        { name: 'Selects your build', value: '!tb build -work in progress', inline: true },
                        { name: 'Selects everithing for you', value: '!tb all -work in progress', inline: true })
    EmbedHelp.addFields({name: '‏‏‎---------------------------------------------------------------------------------------------------------', value: '**---------------------------------------------------------------------------------------------------------**' })
    EmbedHelp.setFooter('Tenmo, Created by: Bruslar');
message.channel.send(EmbedHelp)
};

//runes
if (message.content.startsWith(prefix + " runes")) {
    if (message.content.endsWith(prefix + " runes")) {
        const EmbedRunes = new Discord.MessageEmbed()
        EmbedRunes.setColor('#9c1717');
        EmbedRunes.setTitle(runes[rune])
        if (runes[rune] == "Precision") {
            EmbedRunes.setDescription(runesPrecision1[runePrecision1]);
            EmbedRunes.addFields({name: runesPrecision[runePrecision], value: runesPrecisionA[runePrecisionA] + ", " + runesPrecisionB[runePrecisionB] + ", " + runesPrecisionC[runePrecisionC]});
            if (runesPrecision1[runePrecision1] == "Domination") {
                if (runesDominationSecondary[runeDominationSecondary] == "Cheap shot") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Taste of blood") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Sudden impact") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Zombie ward") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ghost poro") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Eyeball collection") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ravenous hunter") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ingenious hunter") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Relentless hunter") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ultimate hunter") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
            } 
            else if (runesPrecision1[runePrecision1] == "Sorcery") {
                if (runesSorcerySecondary[runeSorcerySecondary] == "Nullifying orb") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Manaflow band") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Nimbus cloak") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Transcendence") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Celerity") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Absolute focus") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Scorch") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Waterwalking") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Gathering storm") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
            }  
            else if (runesPrecision1[runePrecision1] == "Resolve") {
                if (runesResolveSecondary[runeResolveSecondary] == "Demolish") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Font of life") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Shield bash") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Conditioning") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Second wind") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Bone plating") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Overgrowth") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Revitalize") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Unflinching") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
            }
            else if (runesPrecision1[runePrecision1] == "Inspiration") {
                if (runesInspirationSecondary[runeInspirationSecondary] == "Hextech flashtraption") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Magical footwear") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Perfect timing") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Future's market") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Minion dematerializer") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Biscuit delivery") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Cosmic insight") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Approach velocity") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Time warp tonic") {
                    EmbedRunes.addFields({name: runesPrecision1[runePrecision1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
            }
        }
        else if (runes[rune] == "Domination") {
            EmbedRunes.setDescription(runesDomination1[runeDomination1]);
            EmbedRunes.addFields({name: runesDomination[runeDomination], value: runesDominationA[runeDominationA] + ", " + runesDominationB[runeDominationB] + ", " + runesDominationC[runeDominationC]});
            if (runesDomination1[runeDomination1] == "Precision") {
                if (runesPrecisionSecondary[runePrecisionSecondary] == "Overheal") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Triumph") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Presence of mind") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend :alacrity") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend: tenacity") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend: bloodline") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Coup de grace") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Cut down") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Last stand") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
            }
            else if (runesDomination1[runeDomination1] == "Sorcery") {
                if (runesSorcerySecondary[runeSorcerySecondary] == "Nullifying orb") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Manaflow band") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Nimbus cloak") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Transcendence") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Celerity") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Absolute focus") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Scorch") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Waterwalking") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Gathering storm") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
            }
            else if (runesDomination1[runeDomination1] == "Resolve") {
                if (runesResolveSecondary[runeResolveSecondary] == "Demolish") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Font of life") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Shield bash") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Conditioning") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Second wind") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Bone plating") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Overgrowth") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Revitalize") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Unflinching") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
            }
            else if (runesDomination1[runeDomination1] == "Inspiration") {
                if (runesInspirationSecondary[runeInspirationSecondary] == "Hextech flashtraption") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Magical footwear") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Perfect timing") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Future's market") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Minion dematerializer") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Biscuit delivery") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Cosmic insight") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Approach velocity") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Time warp tonic") {
                    EmbedRunes.addFields({name: runesDomination1[runeDomination1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
            }
        }
        else if (runes[rune] == "Sorcery") {
            EmbedRunes.setDescription(runesSorcery1[runeSorcery1]);
            EmbedRunes.addFields({name: runesSorcery[runeSorcery], value: runesSorceryA[runeSorceryA] + ", " + runesSorceryB[runeSorceryB] + ", " + runesSorceryC[runeSorceryC]});
            if (runesSorcery1[runeSorcery1] == "Precision") {
                if (runesPrecisionSecondary[runePrecisionSecondary] == "Overheal") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Triumph") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Presence of mind") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend :alacrity") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend: tenacity") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend: bloodline") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Coup de grace") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Cut down") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Last stand") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
            }
            else if (runesSorcery1[runeSorcery1] == "Domination") {
                if (runesDominationSecondary[runeDominationSecondary] == "Cheap shot") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Taste of blood") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Sudden impact") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Zombie ward") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ghost poro") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Eyeball collection") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ravenous hunter") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ingenious hunter") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Relentless hunter") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ultimate hunter") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
            }
            else if (runesSorcery1[runeSorcery1] == "Resolve") {
                if (runesResolveSecondary[runeResolveSecondary] == "Demolish") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Font of life") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Shield bash") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Conditioning") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Second wind") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Bone plating") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Overgrowth") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Revitalize") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Unflinching") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
            }
            else if (runesSorcery1[runeSorcery1] == "Inspiration") {
                if (runesInspirationSecondary[runeInspirationSecondary] == "Hextech flashtraption") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Magical footwear") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Perfect timing") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Future's market") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Minion dematerializer") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Biscuit delivery") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Cosmic insight") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Approach velocity") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Time warp tonic") {
                    EmbedRunes.addFields({name: runesSorcery1[runeSorcery1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
            }
        }
        else if (runes[rune] == "Resolve") {
            EmbedRunes.setDescription(runesResolve1[runeResolve1]);
            EmbedRunes.addFields({name: runesResolve[runeResolve], value: runesResolveA[runeResolveA] + ", " + runesResolveB[runeResolveB] + ", " + runesResolveC[runeResolveC]});
            if (runesResolve1[runeResolve1] == "Precision") {
                if (runesPrecisionSecondary[runePrecisionSecondary] == "Overheal") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Triumph") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Presence of mind") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend :alacrity") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend: tenacity") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend: bloodline") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Coup de grace") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Cut down") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Last stand") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
            }
            else if (runesResolve1[runeResolve1] == "Domination") {
                if (runesDominationSecondary[runeDominationSecondary] == "Cheap shot") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Taste of blood") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Sudden impact") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Zombie ward") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ghost poro") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Eyeball collection") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ravenous hunter") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ingenious hunter") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Relentless hunter") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ultimate hunter") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
            }
            else if (runesResolve1[runeResolve1] == "Sorcery") {
                if (runesSorcerySecondary[runeSorcerySecondary] == "Nullifying orb") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Manaflow band") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Nimbus cloak") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Transcendence") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Celerity") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Absolute focus") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Scorch") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Waterwalking") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Gathering storm") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
            }
            else if (runesResolve1[runeResolve1] == "Inspiration") {
                if (runesInspirationSecondary[runeInspirationSecondary] == "Hextech flashtraption") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Magical footwear") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Perfect timing") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary1[runeInspirationSecondary1]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Future's market") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Minion dematerializer") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Biscuit delivery") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary2[runeInspirationSecondary2]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Cosmic insight") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Approach velocity") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
                else if (runesInspirationSecondary[runeInspirationSecondary] == "Time warp tonic") {
                    EmbedRunes.addFields({name: runesResolve1[runeResolve1], value: runesInspirationSecondary[runeInspirationSecondary] + ", " + runesInspirationSecondary3[runeInspirationSecondary3]})
                }
            }
        }
        else if (runes[rune] == "Inspiration") {
            EmbedRunes.setDescription(runesInspiration1[runeInspiration1]);
            EmbedRunes.addFields({name: runesInspiration[runeInspiration], value: runesInspirationA[runeInspirationA] + ", " + runesInspirationB[runeInspirationB] + ", " + runesInspirationC[runeInspirationC]});
            if (runesInspiration1[runeInspiration1] == "Precision") {
                if (runesPrecisionSecondary[runePrecisionSecondary] == "Overheal") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Triumph") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Presence of mind") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary1[runePrecisionSecondary1]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend :alacrity") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend: tenacity") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Legend: bloodline") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary2[runePrecisionSecondary2]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Coup de grace") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Cut down") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
                else if (runesPrecisionSecondary[runePrecisionSecondary] == "Last stand") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesPrecisionSecondary[runePrecisionSecondary] + ", " + runesPrecisionSecondary3[runePrecisionSecondary3]})
                }
            }
            else if (runesInspiration1[runeInspiration1] == "Domination") {
                if (runesDominationSecondary[runeDominationSecondary] == "Cheap shot") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Taste of blood") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Sudden impact") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary1[runeDominationSecondary1]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Zombie ward") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ghost poro") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Eyeball collection") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary2[runeDominationSecondary2]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ravenous hunter") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ingenious hunter") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Relentless hunter") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
                else if (runesDominationSecondary[runeDominationSecondary] == "Ultimate hunter") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesDominationSecondary[runeDominationSecondary] + ", "+ runesDominationSecondary3[runeDominationSecondary3]})
                }
            }
            else if (runesInspiration1[runeInspiration1] == "Sorcery") {
                if (runesSorcerySecondary[runeSorcerySecondary] == "Nullifying orb") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Manaflow band") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Nimbus cloak") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary1[runeSorcerySecondary1]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Transcendence") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Celerity") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Absolute focus") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary2[runeSorcerySecondary2]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Scorch") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Waterwalking") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
                else if (runesSorcerySecondary[runeSorcerySecondary] == "Gathering storm") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesSorcerySecondary[runeSorcerySecondary] + ", " + runesSorcerySecondary3[runeSorcerySecondary3]})
                }
            }
            else if (runesInspiration1[runeInspiration1] == "Resolve") {
                if (runesResolveSecondary[runeResolveSecondary] == "Demolish") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Font of life") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Shield bash") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary1[runeResolveSecondary1]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Conditioning") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Second wind") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Bone plating") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary2[runeResolveSecondary2]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Overgrowth") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Revitalize") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
                if (runesResolveSecondary[runeResolveSecondary] == "Unflinching") {
                    EmbedRunes.addFields({name: runesInspiration1[runeInspiration1], value: runesResolveSecondary[runeResolveSecondary] + ", " + runesResolveSecondary3[runeResolveSecondary3]})
                }
            }
        }
        EmbedRunes.setFooter('Tenmo bot, Created by: Bruslar');
        message.channel.send(EmbedRunes)
    }
};

//roles
if (message.content.startsWith(prefix + " role")) {
    if (message.content.endsWith(prefix + " role")) {
        const EmbedRole = new Discord.MessageEmbed()
        EmbedRole.setTitle("Your role is:  **" + roles[role] + "**")
        EmbedRole.setColor('#9c1717')
        EmbedRole.setFooter('Tenmo bot, Created by: Bruslar');
        message.channel.send(EmbedRole)
    }    
};

//champions
if (message.content.startsWith(prefix + " champ")) {
    if (message.content.endsWith(prefix + " champ" )) {
        const EmbedChamp = new Discord.MessageEmbed()
        EmbedChamp.setColor('#9c1717')
        EmbedChamp.setTitle("Your role is:  **" + champs[champ] + "**")
        EmbedChamp.setFooter('Tenmo bot, Created by: Bruslar')
        message.channel.send(EmbedChamp)
    }   
};

//summoner spells
if (message.content.startsWith(prefix + " spells")) {
    if (message.content.endsWith(prefix + " spells")) {
        const EmbedSpells = new Discord.MessageEmbed()
        EmbedSpells.setColor('#9c1717')
        if (spells[spell] == "Ghost") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells1[spell1] + "**")
        }
        else if (spells[spell] == "Heal") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells2[spell2] + "**")
        }
        else if (spells[spell] == "Barrier") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells3[spell3] + "**")
        } 
        else if (spells[spell] == "Exhaust") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells4[spell4] + "**")
        } 
        else if (spells[spell] == "Flash") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells5[spell5] + "**")
        }
        else if (spells[spell] == "Teleport") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells6[spell6] + "**")
        } 
        else if (spells[spell] == "Cleanse") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells7[spell7] + "**")
        } 
        else if (spells[spell] == "Ignite") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells8[spell8] + "**")
        }
        else if (spells[spell] == "Smite") {
            EmbedSpells.setTitle("Your summoner spells are:  **" + spells[spell] + "** and **" + spells9[spell9] + "**")
        }
        EmbedSpells.setFooter('Tenmo bot, Created by: Bruslar')
        message.channel.send(EmbedSpells)
    }
};

//builds -work in progress
if (message.content.startsWith(prefix + " Tbuild")) {
    if (message.content.endsWith(prefix + " Tbuild")) {
        const EmbedBuild = new Discord.MessageEmbed()
        EmbedBuild.setColor('#9c1717')
        EmbedBuild.setFooter('Tenmo bot, Created by: Bruslar')
        EmbedBuild.setTitle("This is your build")



        message.channel.send(EmbedBuild)
    }     
};

//all -work in progress
if (message.content.startsWith(prefix + " Tall")) {
    if (message.content.endsWith(prefix + " Tall")) {
        const EmbedAll = new Discord.MessageEmbed()
        .setColor('#00d0f0')
        .setTitle(champs[champ])
        .setDescription(roles[role])
        .setFooter('Tenmo bot, Created by: Bruslar');
        message.channel.send(EmbedAll)
    }
};

//bug report -work in progress
if (message.content.startsWith(prefix + " Tbug")) {
    console.log(nessage.content)
    message.channel.send("Bug noted, thank you for your report.");
};

});