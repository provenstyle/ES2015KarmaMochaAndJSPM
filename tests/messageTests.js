import message from "message";

declare("message module", () => {
    it("should have hello world message", () => {
        message.message.should.be.equal("Hello World!");
    });
});


