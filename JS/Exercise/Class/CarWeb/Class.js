class Car {
    constructor(brand, model, color, fuel, engine) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.fuel = fuel;
        this.engine = engine;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getColor() {
        return this.color;
    }

    getFuel() {
        return this.fuel;
    }

    getEngine() {
        return this.engine;
    }
    
    setBrand(brand) {
        this.brand = brand;
    }
    
    setModel(model) {
        this.model = model;
    }

    setColor(color) {
        this.color = color;
    }

    setFuel(fuel) {
        this.fuel = fuel;
    }

    setEngine(engine) {
        this.engine = engine;
    }

    startUp() {
        console.log("The car does run run");
    }

    stop() {
        console.log("The car does clac");
    }

    spinWheels() {
        console.log("The car does griiiiiii");
    }

    curb() {
        console.log("The car does ñañaña");
    }


    whistle() {
        console.log("The car does pipipipi");
    }

}

export default Car;