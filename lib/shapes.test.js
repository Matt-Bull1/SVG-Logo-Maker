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
