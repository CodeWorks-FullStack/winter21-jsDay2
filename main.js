// const cats = ['garfield', 'mr. Snibblysmith', 'pepperbottom', 'ham', 'carl']

let cats = [
  {
    name: 'garfield',
    color: 'orange',
    cuddles: false,
    dislikes: ['mondays', 'everything'],
    likes: ['lasagna']
  },
  {
    name: "mr. snibblysmith",
    color: 'grey',
    cuddles: false,
    dislikes: ['people', 'the uncultured'],
    likes: ['stories about bridges', 'tea time']
  },
  {
    name: "pepperbottom",
    color: "white",
    cuddles: true,
    dislikes: ['nothing', 'the dutch'],
    likes: ['everything']
  },
  {
    name: 'ham',
    color: 'brown',
    cuddles: false,
    dislikes: ['ham', 'mr. snibblysmith'],
    likes: ['sausage', 'pepperbottom']
  },
  {
    name: 'carl',
    color: 'orange',
    cuddles: true,
    dislikes: ['ham', 'pepperbottom'],
    likes: ['mr snibblysmith', 'broccoli']
  }
]

// NOTE standard for loop
// for (let i = 0; i < cats.length; i++) {
// this is an alias
// NOTE you can use break in a for loop, but NOT in a foreach
// if (i > 2) {
//   break
// }
// let cat = cats[i]
// put strings in your console log to help determine what that data is
// console.log('cat likes:', cat.likes, 'cat color:', cat.color)
// }

// NOTE foreach loop with standard function syntax
// cats.forEach(function (cat, i) {
//   console.log(i + 1 + '.', 'cat likes:', cat.likes, 'cat color:', cat.color)
// })

// NOTE foreach with inline lambda
// cats.forEach(cat => console.log(cat.likes[0]))

// let cuddly = []
// for (let i = 0; i < cats.length; i++) {
//   // scope is important in this case - cuddly in the for loop is scoped to this for loop
//   let cat = cats[i]
//   // This is a 'truthy' statement - cat.cuddles is already a bool
//   if (cat.cuddles || cat.color == 'orange') {
//     cuddly.push(cat)
//   }
//   console.log('cuddly cats only', cuddly);
// }

// NOTE with array method instead of regular for loop
// let cuddly = cats.filter(cat => cat.cuddles)

let orangeCats = cats.filter(cat => cat.color == 'orange' || cat.color == 'brown')


function drawAll() {
  let template = ''
  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    template +=  /*html*/ `<li>${cat.name}: ${cat.color}</li>`
  }

  document.getElementById('cats').innerHTML = template
}


function filter(shouldCuddle) {
  console.log('should cuddle bool', shouldCuddle)
  // NOTE shouldCuddle is coming from the buttons and may be true OR false depending on which button was clicked
  let cuddlyCats = cats.filter(cat => cat.cuddles == shouldCuddle)
  let template = ''
  for (let i = 0; i < cuddlyCats.length; i++) {
    const cat = cuddlyCats[i];
    template +=  /*html*/ `<li>${cat.name}: ${cat.color}</li>`
  }

  document.getElementById('cats').innerHTML = template
}



// FIXME this is duplication - lets fix it later - works for now
// function filterCuddly() {
//   let cuddlyCats = cats.filter(cat => cat.cuddles)
//   let template = ''
//   for (let i = 0; i < cuddlyCats.length; i++) {
//     const cat = cuddlyCats[i];
//     template +=  /*html*/ `<li>${cat.name}: ${cat.color}</li>`
//   }

//   document.getElementById('cats').innerHTML = template
// }


// function filterNoCuddly() {
//   let notCuddlyCats = cats.filter(cat => !cat.cuddles)
//   let template = ''
//   for (let i = 0; i < notCuddlyCats.length; i++) {
//     const cat = notCuddlyCats[i];
//     template +=  /*html*/ `<li>${cat.name}: ${cat.color}</li>`
//   }

//   document.getElementById('cats').innerHTML = template
// }

drawAll()





// NOTE morning challenge object stuffs
// #region




let utahUtes = {
  conference: "Pac-12",
  divisionChampionships: 4,
  conferenceChampionships: 1,
  power5: true,
  tags: ['pac12', 'mountain teams', 'red', 'defense'],
  starters: [
    {
      name: "Britain Covey",
      positions: ['WR', 'PR'],
      games: [
        {
          opponent: "Weber State",
          conference: "Dont care",
          win: true
        }
      ]
    },
    {
      name: "Cameron Rising",
      positions: ['QB', 'P'],
      games: [
        {
          opponent: "Weber State",
          conference: "Dont care",
          win: true
        }
      ]
    }
  ]
}

// using bracket notation means that we are trying to access the INDEX of that object or array

// bracket notation is used for accessing indexes, while dot notation is used to access properties
// console.log(utahUtes['starters'][0]['games'][0]['win'])

// console.log(utahUtes.starters[0].positions[0])

// console.log(utahUtes.tags[3])

// #endregion