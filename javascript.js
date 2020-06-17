const mainElement = document.querySelector('body')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const myarrayodd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const oddarray = myarrayodd.reverse();
const reversearray = sampleArray.reverse();
const evenarray = myarray.reverse();




//micheal code
const kata1heading = document.createElement('h1')
kata1heading.append('kata1')
mainElement.append(kata1heading)
const kata1Heading = document.createElement("h2")
kata1heading.id = "h1"

const section1List = document.createElement("ul")
kata1heading.append(section1List)

for (let counter1 = 0; counter1 < 20; counter1++) {
    const listElement = document.createElement("li")
    section1List.append(listElement)
    listElement.append(counter1)
}

const kata2heading = document.createElement('h1')
kata2heading.append('kata2')
mainElement.append(kata2heading)
kata2heading.id = "h1"

const section2List = document.createElement("ul")
kata2heading.append(section2List)

for (let counter2 = 1; counter2 <= 20; counter2++) {
    if (counter2 % 2 == 0) {
        const listElement = document.createElement("li")
        section2List.append(listElement)
        listElement.append(counter2)
    }
}

const kata3heading = document.createElement('h1')
kata3heading.append('kata3')
mainElement.append(kata3heading)
kata3heading.id = "h2"



const section3List = document.createElement("ul")
kata3heading.append(section3List)

for (let counter3 = 1; counter3 <= 20; counter3++) {
    if (counter3 % 2 == 1) {
        const listElement = document.createElement("li")
        section3List.append(listElement)
        listElement.append(counter3)
    }
}

//from  joushua
const kata4heading = document.createElement('h1')
kata4heading.append('kata4')
mainElement.append(kata4heading)
kata4heading.id = "h1"


const section4List = document.createElement("ul")
kata4heading.append(section4List)

for (let counter4 = 0; counter4 < 100; counter4 += 5) {
    const listElement = document.createElement("li")
    section4List.append(listElement)
    listElement.append(counter4)

}

const kata5heading = document.createElement('h1')
kata5heading.append('kata5')
mainElement.append(kata5heading)
kata5heading.id = "h1"


const section5List = document.createElement("ul")
kata5heading.append(section5List)

for (let counter5 = 0; counter5 < 100; counter5++) {
    if ((Math.sqrt(counter5)) % 1 == 0) {
        const listElement = document.createElement("li")
        section5List.append(listElement)
        listElement.append(counter5)

    }
}


const kata6heading = document.createElement('h1')
kata6heading.append('kata6')
mainElement.append(kata6heading)
kata6heading.id = "h1"
mainElement.append(kata6heading)


const section6List = document.createElement("ul")
kata6heading.append(section6List)
for (let counter6 = 20; counter6 > 0; counter6 -= 1) {
    const listElement = document.createElement("li")
    section6List.append(listElement)
    listElement.append(counter6)
}

const kata7heading = document.createElement('h1')
kata7heading.append('kata7')
mainElement.append(kata7heading)
const kata7Heading = document.createElement("h2")
kata7Heading.id = "h1"
mainElement.append(kata7Heading)


const section7List = document.createElement("ul")
kata7Heading.append(section7List)

for (let counter7 = 0; counter7 < evenarray.length; counter7 += 1) {
    if (counter7 % 2 == 0) {
        const listElement = document.createElement("li")
        section7List.append(listElement)
        listElement.append(myarray[counter7])
    }
}

const kata8heading = document.createElement('h1')
kata8heading.append('kata8')
mainElement.append(kata8heading)
kata8heading.id = "h1"
mainElement.append(kata8heading)


const section8List = document.createElement("ul")
kata8heading.append(section8List)

for (let counter8 = 0; counter8 < oddarray.length; counter8++) {
    if (counter8 % 2 == 1) {
        const listElement = document.createElement("li")
        section8List.append(listElement)
        listElement.append(oddarray[counter8])
    }
}

const kata9heading = document.createElement('h1')
kata9heading.append('kata9')
mainElement.append(kata9heading)
kata9heading.id = "h1"


const section9List = document.createElement("ul")
kata9heading.append(section9List)

for (let counter9 = 100; counter9 > 0; counter9 -= 5) {
    const listElement = document.createElement("li")
    section9List.append(listElement)
    listElement.append(counter9)

}






const kata10heading = document.createElement('h1')
kata10heading.append('kata10')
mainElement.append(kata10heading)
kata10heading.id = "h1"

const section10List = document.createElement("ul")
kata10heading.append(section10List)

for (let counter10 = 100; counter10 > 0; counter10 -= 1) {
    if ((Math.sqrt(counter10)) % 1 == 0) {
        const listElement = document.createElement("li")
        section10List.append(listElement)
        listElement.append(counter10)

    }
}


//number 11 skip for now 







const kata12heading = document.createElement('h1')
kata12heading.append('kata12')
mainElement.append(kata12heading)
kata12heading.id = "h1"


const section12List = document.createElement("ul")
kata12heading.append(section12List)

for (let counter12 = 0; counter12 < sampleArray.length; counter12++) {
    if (counter12 % 2 == 1) {
        const listElement = document.createElement("li")
        section12List.append(listElement)
        listElement.append(reversearray[counter12])
    }
}



const kata13heading = document.createElement('h1')
kata13heading.append('kata13')
mainElement.append(kata13heading)
kata13heading.id = "h1"


const section13List = document.createElement("ul")
kata13heading.append(section13List)

for (let counter13 = 1; counter13 < sampleArray.length; counter13++) {
    if (counter13 % 2 == 1) {
        const listElement = document.createElement("li")
        section13List.append(listElement)
        listElement.append(sampleArray[counter13])
    }
}



const kata14heading = document.createElement('h1')
kata14heading.append('kata14')
mainElement.append(kata14heading)
kata14heading.id = "h1"


const section14List = document.createElement("ul")
kata14heading.append(section14List)
for (let counter14 = 0; counter14 < sampleArray.length; counter14 += 1) {
    let squarearray = []
    squarearray = sampleArray[counter14] * sampleArray[counter14]
    const listElement = document.createElement("li")
    section14List.append(listElement)
    listElement.append(squarearray)
}


const kata15heading = document.createElement('h1')
kata15heading.append('kata15')
mainElement.append(kata15heading)
kata15heading.id = "h1"
const section15List = document.createElement("ul")
kata15heading.append(section15List)
let sum = 0
for (let counter15 = 1; counter15 <= 20; counter15++) {
    sum += counter15

    const listElement = document.createElement("li")
    section15List.append(listElement)
    listElement.append(sum)

}






const kata16heading = document.createElement('h1')
kata16heading.append('kata16')
mainElement.append(kata16heading)
kata16heading.id = "h1"
const section16List = document.createElement("ul")
kata16heading.append(section16List)
let sums = 0
for (let counter16 = 0; counter16 < sampleArray.length; counter16++) {
    sums += sampleArray[counter16]

}
const listElement = document.createElement("li")
section16List.append(listElement)
listElement.append(sums)





const kata17heading = document.createElement('h1')
kata17heading.append('kata17')
mainElement.append(kata17heading)
kata17heading.id = "h1"
const section17List = document.createElement("ul")
kata17heading.append(section17List)



{
const listElement = document.createElement("li")
section17List.append(listElement)
listElement.append(Math.min(...sampleArray));
}




const kata18heading = document.createElement('h1')
kata18heading.append('kata18')
mainElement.append(kata18heading)
kata18heading.id = "h1"
const section18List = document.createElement("ul")
kata18heading.append(section18List)



{
const listElement = document.createElement("li")
section18List.append(listElement)
listElement.append(Math.max(...sampleArray));
}





const kata19Heading = document.createElement("h2")
kata19Heading.id = "h19"
mainElement.append(kata19Heading)
kata19Heading.append("Kata 19")
for (let counter19 = 0; counter19 < 20; counter19++) {
    const block = document.createElement("div")
    block.style.backgroundColor = "gray"
    block.style.width = "100px"
    block.style.height = "20px"
    block.style.margin = "5px"
    kata19Heading.append(block)
}

const kata20Heading = document.createElement("h2")
kata20Heading.id = "h20"
mainElement.append(kata20Heading)
kata20Heading.append("Kata 20")
for (let counter20 = 5; counter20 <= 100; counter20 += 5) {
    let width = 100 + counter20
    const block = document.createElement("div")
    block.style.backgroundColor = "gray"
    block.style.width = `${width}px`
    block.style.height = "20px"
    block.style.margin = "5px"
    kata20Heading.append(block)
}

const kata21Heading = document.createElement("h2")
kata21Heading.id = "h21"
mainElement.append(kata21Heading)
kata21Heading.append("Kata 21")
for (let counter21 = 0; counter21 < sampleArray.length; counter21++) {
    let width = sampleArray[counter21]
    const block = document.createElement("div")
    block.style.backgroundColor = "gray"
    block.style.width = `${width}px`
    block.style.height = "20px"
    block.style.margin = "5px"
    kata21Heading.append(block)
}

const kata22Heading = document.createElement("h2")
kata22Heading.id = "h22"
mainElement.append(kata22Heading)
kata22Heading.append("Kata 22")
let color22 = "gray"
for (let counter22 = 0; counter22 < sampleArray.length; counter22++) {
    let width = sampleArray[counter22]
    const block = document.createElement("div")
    if (color22 == "gray") {
        block.style.backgroundColor = `${color22}`
        color22 = "red"
    }
    else if (color22 == "red") {
        block.style.backgroundColor = `${color22}`
        color22 = "gray"
    }
    block.style.width = `${width}px`
    block.style.height = "20px"
    block.style.margin = "5px"
    kata22Heading.append(block)
}

const kata23Heading = document.createElement("h2")
kata23Heading.id = "h23"
mainElement.append(kata23Heading)
kata23Heading.append("Kata 23")
for (let counter23 = 0; counter23 < sampleArray.length; counter23++) {
    let width = sampleArray[counter23]
    const block = document.createElement("div")
    if (sampleArray[counter23]%2 == 0) {
        color23 = "red"
        block.style.backgroundColor = `${color23}`
    }
    else {
        color23 = "gray"
        block.style.backgroundColor = `${color23}`
    }
    block.style.width = `${width}px`
    block.style.height = "20px"
    block.style.margin = "5px"
    kata23Heading.append(block)
}
