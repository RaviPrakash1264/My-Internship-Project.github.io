var PORT = process.env.PORT || 5005;
const express = require('express');
const app = express();
const bodyParser = require('body-parser') ;
const {Client}= require('pg');
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.get('/kitchen',(request,response)=>{
    response.render('kitchens');

})
app.get('/Bedroom',(request,response)=>{
    response.render('Bedroom');

})
app.get('/Living-room',(request,response)=>{
    response.render('Living room');

})
app.get('/Kids',(request,response)=>{
    response.render('Kids');

})
app.get('/Custom-modular-Kitchen',(request,response)=>{
    response.render('Custom modular kitchens');

})
app.get('/Custom-modular-Wardrobe',(request,response)=>{
    response.render('Custom Modular Wardrobe');

})
app.get('/Livspace-homes',(request,response)=>{
    response.render('Livspace homes');

})
app.get('/Refer-a-friend',(request,response)=>{
    response.render('Refer a friend');

})
app.get('/About-us',(request,response)=>{
    response.render('About Us');

})
app.get('/book-online',(request,response)=>{
    response.render('book online');
})
app.get('/add',(request,response)=>{
    response.render('book online');
})
app.post('/thanks/add',(request,response)=>{
    console.log('post body',request.body);
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'internship',
        password: '8235983451',
        port: 5432
    });
    client.connect()
    .then(()=>{
        console.log('Connection complete');
        const sql= 'INSERT INTO bookonline(name,email,phone_number,kitchenid,bedroomid,livingroomid,kidsroomid) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        const params = [request.body.name,request.body.email,request.body.phone_number,request.body.kitchenid,request.body.bedroomid,request.body.livingroomid,request.body.kidsroomid];
        return client.query(sql,params);
    })
    .then((result)=>{
        console.log('results?',result);
        response.redirect('/thanks');
    });
});
app.get('/thanks',(request,response)=>{
    response.render('thanks for booking');
})
app.get('/kitchen/Estelle-L-shaped-Kitchen',(request,response)=>{
    response.render('Estelle L-shape Kitchen');

})
app.get('/kitchen/Aspen-L-shaped-Kitchen',(request,response)=>{
    response.render('Aspen L-shaped Kitchen');

})
app.get('/kitchen/Chloe-Kitchen',(request,response)=>{
    response.render('Chloe Kitchen with island counter');

})
app.get('/kitchen/Carmen-Straight-Kitchen',(request,response)=>{
    response.render('Carmen Straight Kitchen');

})
app.get('/kitchen/Jamie-Parallel-Kitchen',(request,response)=>{
    response.render('Jamie Parallel Kitchen');

})
app.get('/kitchen/Abigail-U-Shaped-Kitchen',(request,response)=>{
    response.render('Abigail U Shaped Kitchen');

})
app.get('/kitchen/Portland-U-Shaped-Kitchen',(request,response)=>{
    response.render('Portland U Shaped Kitchen');

})
app.get('/kitchen/Shelby-L-Shaped-Kitchen',(request,response)=>{
    response.render('Shelby L Shaped Kitchen');

})
app.get('/kitchen/Sienna-Parallel-Modular-Kitchen',(request,response)=>{
    response.render('Sienna Parallel Modular Kitchen');

})
app.get('/Bedroom/Contemporary-Cluster-Guest-Bedroom',(request,response)=>{
    response.render('Contemporary Cluster Guest Bedroom');

})
app.get('/Bedroom/Contemporary-Fusion-Guest-Room',(request,response)=>{
    response.render('Contemporary Fusion Guest Room');

})
app.get('/Bedroom/Serene-Chic-Guest-Bedroom',(request,response)=>{
    response.render('Serene Chic Guest Bedroom');

})
app.get('/Bedroom/Contemporary-Fusion-Guest-Room',(request,response)=>{
    response.render('Contemporary Fusion Guest Room');

})

app.get('/Bedroom/Peppy-Elegant-Guest-Bedroom',(request,response)=>{
    response.render('Peppy Elegant Guest Bedroom');

})
app.get('/Bedroom/Sand-Contemporary-Master-Bedroom',(request,response)=>{
    response.render('Sand Contemporary Master Bedroom');

})
app.get('/Bedroom/Modern-Sleek-Master-Bedroom',(request,response)=>{
    response.render('Modern Sleek Master Bedroom');

})
app.get('/Bedroom/Contemporary-Spring-Guest-Bedroom',(request,response)=>{
    response.render('Contemporary Spring Guest Bedroom');

})
app.get('/Bedroom/Electric-Red-Master-Bedroom',(request,response)=>{
    response.render('Electric Red Master Bedroom');

})
app.get('/Bedroom/Retro-Fusion-Guest-Bed-Room',(request,response)=>{
    response.render('Retro Fusion Guest Bed Room');

})
app.get('/Living-room/Kaleidoscope',(request,response)=>{
    response.render('Kaleidoscope');

})
app.get('/Living-room/Vanilla-Twilight',(request,response)=>{
    response.render('Vanilla Twilight');

})
app.get('/Living-room/Palais-Chic',(request,response)=>{
    response.render('Palais Chic');

})
app.get('/Living-room/Aqua-Delight',(request,response)=>{
    response.render('Aqua Delight');

})
app.get('/Living-room/Serene-Summer',(request,response)=>{
    response.render('Serene Summer');

})
app.get('/Living-room/Artistic-Intrigue',(request,response)=>{
    response.render('Artistic Intrigue');

})
app.get('/Living-room/Urban-Solace',(request,response)=>{
    response.render('Urban Solace');

})
app.get('/Living-room/Spring-Fever',(request,response)=>{
    response.render('Spring Fever');

})
app.get('/Living-room/Teal-Meadows',(request,response)=>{
    response.render('Teal Meadows');

})
app.get('/Kids/Vibrant-Kids-Bedroom-Interior-Design',(request,response)=>{
    response.render('Vibrant Kids Bedroom Interior Design');

})
app.get('/Kids/Alluring-Kids-Bedroom-Interior-Design',(request,response)=>{
    response.render('Alluring Kids Bedroom Interior Design');

})
app.get('/Kids/Cosy-Kids-Bedroom-Interior-Design',(request,response)=>{
    response.render('Cosy Kids Bedroom Interior Design');

})
app.get('/Kids/Olive-Kids-Bedroom-Interior-Design',(request,response)=>{
    response.render('Olive Kids Bedroom Interior Design');

})
app.get('/Kids/Bespangled-Kids-Bedroom-Interior-Design',(request,response)=>{
    response.render('Bespangled Kids Bedroom Interior Design');
})
app.get('/Kids/Acacia-Kids-Bedroom-Interior-Design',(request,response)=>{
    response.render('Acacia Kids Bedroom Interior Design');
})
app.get('/Kids/Bisque-Kids-Bedroom-Interior-Design',(request,response)=>{
    response.render('Bisque Kids Bedroom Interior Design');
})
app.get('/Kids/Serene-Kids-Bedroom-Interior-Design',(request,response)=>{
    response.render('Serene Kids Bedroom Interior Design');
})
app.get('/Kids/Perky-Kids-Bedroom-Design',(request,response)=>{
    response.render('Perky Kids Bedroom Design');
})







