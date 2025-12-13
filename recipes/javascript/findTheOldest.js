function findTheOldest(people) {
    return people.reduce((oldest, person) => {
        const currentAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        return currentAge > oldestAge ? person : oldest;
    });
}
module.exports = findTheOldest;