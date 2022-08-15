describe("First test", () => {
    it("Bring It On", async () => {
        await browser.url("https://pastebin.com");

        const pasteCodeTextArea = await $("textarea[id=postform-text]");
        await pasteCodeTextArea.setValue(
            `git config --global user.name "New Sheriff in Town"\n`
        );
        await pasteCodeTextArea.addValue(
            `git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n`
        );
        await pasteCodeTextArea.addValue(`git push origin master --force`);

        const syntaxHighlightSelect = await $(
            "span[id=select2-postform-format-container]"
        );
        await syntaxHighlightSelect.click();

        const bashOption = await $(`//li[text()='Bash']`);
        await bashOption.click();

        const pasteExpirationSelect = await $(
            "span[id=select2-postform-expiration-container]"
        );
        await pasteExpirationSelect.click();

        const tenMinuteOption = await $(`//li[text()='10 Minutes']`);
        await tenMinuteOption.click();

        const pasteNameOrTitle = await $("input[id=postform-name]");
        await pasteNameOrTitle.setValue(
            "how to gain dominance among developers"
        );

        const submitButton = await $("button[type=submit]");
        await submitButton.click();

        await browser.pause(1000);

        const title = await $("h1").getText();
        const bashSyntaxHighlight = await $(`//a[text()='Bash']`).getText();
        const codeTextArea = await $("textarea").getText();

        expect(title).toEqual("how to gain dominance among developers");
        expect(bashSyntaxHighlight).toEqual("Bash");
        expect(codeTextArea).toEqual(
            'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force'
        );
    });
});
