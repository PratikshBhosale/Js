let pratiksha={

    first:{
        name:"Pratiksha",
        marks:[86]
    },
      second:{
        name:"Pratiksha",
        marks:[88]
    },
      third:{
        name:"Pratiksha",
        marks:[88]
    }
}
for(let key in pratiksha)
{
  console.log(`${key}: Name: ${pratiksha[key].name}, Marks: ${pratiksha[key].marks}`)
}