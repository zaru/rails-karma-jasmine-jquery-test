describe("add", function() {
    it("1+1", function() {
        expect(add(1, 1)).toBe(2);
    });
});
describe("insert", function() {
    beforeEach(function() {
        document.body.innerHTML = __html__['spec/fixtures/views/articles/index.html.slim'];
    });
    it("1+1", function() {
        insert("test");
        expect(jQuery(".hoge .piyo").text()).toBe("test");
    });
});
