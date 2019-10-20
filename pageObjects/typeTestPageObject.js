module.exports = {

    /**
    **   this is my type Test
        this is a more advance test to write
        this test can be buggy depending on the
        internet connection and the speed of you
        computer, it works most of the time tho.
    **/
    url: 'https://www.ratatype.com/typing-test/test/',

    elements: {
        start: '[class="submit gr"]',
        current: '[class="mainTxt"]',
        input: '[spellcheck="false"]',
        WPM: { selector: '(//div[@class="blue"])[1]', locateStrategy: 'xpath' },
        Accuracy: { selector: '(//div[@class="blue"])[2]', locateStrategy: 'xpath' }
    }

    
}


