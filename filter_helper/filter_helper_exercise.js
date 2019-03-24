const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ]


 const premium = channels.filter(function(channel){
     return channel.premium
 })

 console.log(premium)