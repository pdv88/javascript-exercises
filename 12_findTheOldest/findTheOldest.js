const findTheOldest = function(people) {
    for(let person of people){
        if (person.hasOwnProperty('yearOfDeath') == false){
            person.yearOfDeath = 2022
        }
    }
    const oldest = people.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth
        const nextPerson = b.yearOfDeath - b.yearOfBirth

        if(lastPerson > nextPerson){
            return -1
        } else {
            return 1
        }
    })
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
