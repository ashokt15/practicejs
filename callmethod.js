
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"ASHOK",
    lastName: "TIRLANGI"
  }
  const person2 = {
      firstName: "dhruv",
      lastName: "pushpa"
  }
  person.fullName.call(person2, "VISAKHAPATNAM", "INDIA");