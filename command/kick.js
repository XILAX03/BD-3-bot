module.exports =({
    name: "kick", 
    code:`
    $kick[$mentioned[1]]
    $description[<@$mentioned[1]> a bien été expulsé par le staff.
                 
                 Par: <@$authorID>

                 Raison: $noMentionMessage

                 <a:_like:794968410978779217> <a:_chat_gros:885452928700272641> <a:_Discord:794901497166561320>]

    $thumbnail[https://cdn.discordapp.com/attachments/892447511145480205/905478922253254687/istockphoto-1165690157-612x612.png]
    $color[#960002]
    $onlyPerms[ban;Tu n'as pas la permission pour expulser un membre !]
    $onlyIf[$mentioned[1]!=;Tu dois mentionner quelqu'un !]
    
    `
})