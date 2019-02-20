const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "TheWatcherInfo",
    url: "https://cryptofightclubco.in",
    description: "The Watcher info & links.",
    fields: [      
      {
        name: "Twitter",
        value: "[Twitter](https://twitter.com/TheWatcher247)"
      },
      
      {
        name: "Reddit",
        value: "[Reddit](https://www.reddit.com/user/TheWatcher247)"
      },
      
      {
        name: "Become a Patreon",
        value: "[Become a Patreon](https://www.patreon.com/TheWatcher247)"
      },
          
      {
        name: "Some Discord Servers I Am In",
        value: "[CoinZone](https://discord.gg/mVArCEt), [OmenCoin](https://discord.gg/gajgDNV), [CryptoFightClubCoin](https://discord.gg/KupRdUh)"
      },

    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© TheWatcher247 2018-2019"
    }
  }
});
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'watcher',
  description: 'shows my social info.',
  usage: 'watcher'
};
