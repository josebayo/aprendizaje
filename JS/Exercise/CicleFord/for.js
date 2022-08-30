//for(inicialización;condición;incremento)

/*var ok = ["hello", "word"];

for (var i = 0; i < ok.length; i ++) {
   if (i >= 1) { break; }

   console.log(ok[i]);

}*/


/*for (var i = 0; i < 10; i ++) {
   if (i >= 1) { break; }

   console.log(i);

}*/


for (var i = 0; i < 10; i ++) {
    if (i % 2 !== 0) { continue; }
 
    console.log(i);
 
 }