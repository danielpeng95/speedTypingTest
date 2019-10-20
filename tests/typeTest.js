var typo
module.exports = {
    beforeEach: browser => {
        typo = browser.page.typeTestPageObject()
        typo.navigate()
    },
    after: browser => {
        typo.end()
    },
    'Test name': browser => {
        typo
            .waitForElementVisible('@start')
            .click('@start')
            .waitForElementVisible('@current')
            .api.pause(1000) //remember to have .api in front when working with page objects
        typo
            .getText('@current', function (word) {
                let t = word.value
                console.log(t)
                let splitText = t.split(" ")
                splitText.pop()
                let shortText = splitText.join(" ")
                typo.api.pause(1000)
                typo.waitForElementVisible('@input')
                typo.api.pause(2000)
                typo.setValue('@input', shortText)
            })
            
        // .api.pause(1000)

        typo.waitForElementVisible('@WPM')
            .getText('@WPM', function (result) {
                console.log('Speed: ' + result.value)
            })
        typo.waitForElementVisible('@Accuracy')
            .getText('@Accuracy', function (result) {
                console.log('Accuracy: ' + result.value)
            })
    }
}