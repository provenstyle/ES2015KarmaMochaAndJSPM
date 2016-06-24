import * as foo from "messages";

describe("message module", () => {
    it("should have hello world message", () => {
        messages.message.should.be.equal("Hello World!");
    });
});


