    const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send("You are not in a voice channel!");
 
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
        }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
 
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
        }
        else {
            try {
 
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    const sembed = new RichEmbed()
                        .setColor("GREEN")
                        .setFooter(msg.member.displayName, msg.author.avatarURL)
                        .setDescription(`
                    __**Song selection:**__\n
                    ${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
                    \nPlease provide a value to select one of the search results ranging from 1-10.
                                    `)
                        .setTimestamp();        
                    msg.channel.send(sembed).then(msg2 => msg2.delete(10000))
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.log(err);
                        return msg.channel.send('❌ **Timeout!**')
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send('🆘 I could not obtain any search results.');
                }
            }
            return handleVideo(video, msg, voiceChannel);
 
        }
    }
