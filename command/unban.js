module.exports =({ 
    name: "unban",
    code: `
    
    
    $unban[$message[1];$message]
    $description[<@$mentioned[1]> a bien été unban par le staff.

                 Par: <@$authorID>

                 Raison: $noMentionMessage

                 <a:_like:794968410978779217> <a:_chat_gros:885452928700272641> <a:_Discord:794901497166561320>]

    $color[#960002]
    $onlyPerms[ban;Tu n'as pas la permission pour unban !]
    



    
    
    `



})