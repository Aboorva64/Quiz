/*obj1={
    food:"briyani",
    place:"chennai",
    Rs:300,
};
obj2={
    food:"curd",
    place:"velore",
    Rs:100,
};
obj3={
    food:"chicken",
    place:"Tenkasi",
    Rs:150,
};
obj4={
    food:"fish",
    place:"madurai", 
    Rs:200,
};
const arrValue = [obj1,obj2,obj3,obj4]
const createObj= function(values){
    values.forEach(function(items){
        items.fav = items.food
        .toUpperCase()
        console.log(values)
        console.log(items)
    });
};
 createObj(arrValue);*/
//filter
const shareMarket = [2000,5000, ,13000,76000,]
const increase = shareMarket.filter(values =>
   values> 10000 );

   console.log(increase)
   //forEach
   const update = [2000,50000,13000,6000]
   const a = update.forEach((values) => {  
  ans = values >= 10000 ? "increased": "decreased";
    console.log(ans)
})
    //for of
    const update1 = [2000,50000, ,13000,6000]
    for(values of update1){
  ans = values >= 10000 ? "higher": "lower";
    console.log(ans)
};

    
    
   

   