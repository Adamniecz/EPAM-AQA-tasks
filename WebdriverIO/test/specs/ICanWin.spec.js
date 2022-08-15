describe("First test", () => {
    it("I Can Win Test", async () => {
        await browser.url("https://pastebin.com");

        const pasteCodeTextArea = await $("textarea[id=postform-text]");
        await pasteCodeTextArea.setValue("Hello from WebDriver");

        const pasteExpirationSelect = await $(
            "span[id=select2-postform-expiration-container]"
        );
        await pasteExpirationSelect.click();

        const tenMinuteOption = await $(`//li[text()='10 Minutes']`);
        await tenMinuteOption.click();

        const pasteNameOrTitle = await $("input[id=postform-name]");
        await pasteNameOrTitle.setValue("helloweb");
    });
});
