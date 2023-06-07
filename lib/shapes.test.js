const {Circle, Square, Triangle} = require("./shapes")

//Circle test
describe ("Circle", () =>{
    test("This Works!", () =>{
        const shape = new Circle();
        let color = ('black')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`)
    })
})

//Triangle Test
describe ("Triangle", () =>{
    test("This Works!", () =>{
        const shape = new Triangle();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points= "100,0 0,100, 200,200" fill="${color}"`)
    })
})

//Square test
describe ("Square", () =>{
    test("This Works!", () =>{
        const shape = new Square();
        let color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="100" y="100" fill="${color}"/>`)
    })
})