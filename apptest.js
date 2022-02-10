import chef from "../app.js";
import chai, {assert } from "chai";

 


describe("chef test",function(){
    it("to check if the dish have the valid name",function(){
        let dish = chef.checkMenu()
        assert.isString(dish,"string")
    })

    it("to check if the dish is pasta",function(){
        let dish = chef.checkMenu()
        assert.equal("pasta",dish)
    })

    it("to check if the dish is pasta",function(){
        let dish = chef.checkMenu()
        assert.fail("failing a test case purposely")
    })

    it("to check if the dish is part of the menu",function(){
        let dish = chef.checkMenu()
        assert.oneOf(dish,chef.dishes)
    })
})