console.log("con");

// var array1 = [1,2,3,4]
// var array2 = [5,6,7,8]

// var temp = array2.concat(array1)
// // var temp = [...array1,...array2]


// console.log("A1" , array1);
// console.log("A2" , array2);
// console.log("NEW ARRAY" , temp);


// function checkAdultsByAge(currValue){
//     console.log("VALU" , currValue)
//     return currValue > 18
// }
// var adults = [19,12, 20,50,22]

// // var checkAdults = adults.every(() => {

// // })
// var checkAdults = adults.every(checkAdultsByAge)


// console.log("CHECKER" , checkAdults)



// Filter Methods JS (return type newly created array after filteration)
// function filterAdultsByAge(currValue, currIndex){
//     console.log("DATA" , currValue, currIndex);
//     return currValue <= 18 
// }

// var ages = [20,22, 25, 18]

// var filteredData = ages.filter(filterAdultsByAge)

// console.log("FILTERED DATA",filteredData)

//FLAT (return type array - by default depth is 1)
// var array = [[1,3] , [1,2,[1,2,4]]] //2D ARRAY

// var newArray = array.flat(2) //by default depth is 1


// console.log(newArray);


// var array = [1,2,3,5,5]
// array.forEach((currValue , index, origArray)=>{
//     console.log("CURR VALUE", currValue , "INDEX" ,index , origArray);
// })


// var students = ["raja" , "muhammad" , "raja" , "ehsan"]

// console.log(students.indexOf("razzak"))

// var marks = [1, 2, 3, 4, 5]



// var sum = marks.reduce((acc, curr) => {
//     console.log("ACC" , acc , "CURR" , curr)
//     return acc + curr
// })



// console.log("SUM" , sum)

var array = [
    {
        marks : 80,
        subject : 'science'
    },
    {
        marks : 80,
        subject : 'maths'
    },
    {
        marks : 80,
        subject : 'algebra'
    }
]






