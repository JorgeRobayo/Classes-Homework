// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person {
    constructor(name, shirt, pants, shoes) {
        this.name = name
        this.shirt = shirt;
        this.pants = pants;
        this.shoes = shoes;
    }
    greet(greetingInput){
        console.log (`Hello! ${greetingInput}.`)
    }
    compliment(complimentInput){
        console.log(`I really like ${complimentInput}!`)

    }
    sayBye(sayByeInput){
        console.log(`Well... ${sayByeInput}`)
    }
}

// const person1 = new Person('Red', 'short', 'nike')
// console.log(person1)
// person1.greet(`How are you`)
// person1.compliment(`Your shoes`)
// person1.sayBye(`I gotta go!`)

class PostalWorker extends Person {
    constructor(name, shirt, pants, shoes) {
        super(name, shirt, pants, shoes)
        this.skills = ['Sort Letters', 'Rides Bike', 'Is Fast']
        // this.packageDelivery = true
    }

    packageDelivery(packageDeliveryInput = false){
        if (!packageDeliveryInput){
            console.log(`package has not been delivered`)
        }
        else{
            console.log(`package delivered`)
        }
    }

    packageLeftAt(packageLeftAtInput = false){
        if(!packageLeftAtInput){
            console.log(`Package left at mailbox`)
        }
        else{
            console.log(`Package left at door`)
        }
    }

    packageLost(packageLostInput = false){
        if(!packageLostInput){
            console.log('Package lost')
        }
        else {
            console.log(`Package not lost`)
        }
    }

}

const postal1 = new PostalWorker('Giovani', 'blue', 'long', 'Puma')
postal1.packageDelivery("yes") //if string the method is left empty it will say "package has not been delivered"
postal1.packageLeftAt("yes")
console.log(postal1)

const postal2 = new PostalWorker('Juan', 'green', 'short', 'Adidas')
postal2.packageDelivery()
postal2.packageLost()
// postal2.packageLeftAt()
console.log(postal2)

class Chef extends Person{
    constructor(name, shirt, pants, shoes) {
        super(name, shirt, pants, shoes)
        this.skills = ['Cooks very good', 'Alway clean', 'Is never late']
    }

    takeOrder(takeOrderInput, takeOrderInput2, takeOrderInput3){
        console.log(`Your oder is: ${takeOrderInput}, ${takeOrderInput2}, ${takeOrderInput3}.`)
    }

    orderReady(orderReadyInput = false){
        if(!orderReadyInput){
            console.log(`Please wait a moment`)}
        
        else{
            console.log(`Your order is ready`)
        }
        
    }

    totalBill(totalBillInput){
        console.log(`Your totall bill is: ${totalBillInput}.`)
    }

}

const chef1 = new Chef('Julio','Kitchen uniform', 'Black', 'Non-slipery')
console.log(chef1)
chef1.takeOrder('Cheese Burger', 'No onions', 'Sprite')
chef1.orderReady("yes")
chef1.totalBill('$820')

const chef2 = new Chef('Katerine','Long sleeve', 'Short', 'Comfortable')
console.log(chef2)
chef1.takeOrder('Pizza', 'No pinapple', 'Coke')
chef1.orderReady()
chef1.totalBill('$0')