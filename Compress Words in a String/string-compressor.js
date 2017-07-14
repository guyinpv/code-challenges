{
    /*
    * Answer to Reddit dailyprogrammer challenge #319
    * https://www.reddit.com/r/dailyprogrammer/comments/6grwny/20170612_challenge_319_easy_condensing_sentences/
    *
    * Take a string, test if the last letters of a word match the first letters of the next word,
    * if so, combine the overlapping letters.
    * Return the final compressed string.
    *
    * Example string: "Live Version".
    * Example result: "Liversion".
    */
    function converter(str) {
        let strarr = str.split(" ");
        let ans = strarr.reduce(function(l, r) {
            for (let i = 0; i < l.length; i++) {
                let leftSubstring = l.substring(i);
                if (r.startsWith(leftSubstring)) {
                    return l + r.replace(leftSubstring, '');
                }
            }
            return l + " " + r;
        });
        return ans;
    }
    console.log(converter("Deep episodes of Deep Space Nine came on the television only after the news."));
    console.log(converter("Digital alarm clocks scare area children."));
}