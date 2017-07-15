{
    /*
    * Answer to Reddit dailyprogrammer challenge #100
    * https://www.reddit.com/r/dailyprogrammer/comments/106go0/9202012_challenge_100_easy_sleep_cycle_estimator/
    *
    * Take an input of a wakeup time (i.e. "6:15 AM").
    * Calculate the times you should go to sleep in order for the wakeup time to be at the end
    * of a sleep cycle.
    * Sleep cycles are 90 minutes each.
    *
    * Return a list of times of when to go to sleep.
    *
    * Example input: 6:15 AM
    * Example output: 9:15 PM, 10:45 PM, 12:15 AM, or 1:45 AM
    *
    * Bonus function: input a sleep time to calculate when to wake up.
    * Bonus function: account for how long it takes to fall asleep.
    */
    
    // 90 minutes in miliseconds
    const ninety = 5400000;

    function wake(str) {
        let input = new Date(parseDateString(str));
        let output = "";
        let tmpdate;
        for (let i = 1; i < 6; i++) {
            // Loop 5 times for 5 possible sleep times
            tmpdate = new Date(input.getTime() - (ninety * i));
            output += ", " + tmpdate.getHours() + ":" + tmpdate.getMinutes();
        }
        return output;
    }

    function sleep(str) {
        let input = new Date(parseDateString(str));
        let output = "";
        let tmpdate;
        for (let i = 1; i < 6; i++) {
            // Loop 5 times for 5 possible wake times
            tmpdate = new Date(input.getTime() + (ninety * i));
            output += ", " + tmpdate.getHours() + ":" + tmpdate.getMinutes();
        }
        return output;
    }

    function parseDateString(str) {
        
        // Put together the dates
        let thedate    = new Date();
        let theyear    = thedate.getFullYear(),
            themonth   = thedate.getMonth(),
            theday     = thedate.getDate(),
            thehour    = "",
            theminute  = "",
            descriptor = "";

        // Get the hour and minute from the input string
        let parsehour = str.match(/(\d{1,2}).+?(\d{1,2})/);
        if (parsehour != null && parsehour.length > 2) {
            thehour = parsehour[1];
            theminute = parsehour[2];            
        } else {
            throw "Bad input time. Try a format such as '9:30 AM' or '18:45'.";
        }

        // If this is PM, see about converting non-military format if they messed up
        descriptor = str.match(/(pm)/i);
        if (descriptor != null && descriptor[1].toLowerCase() == "pm" && thehour <= 11) {
            thehour = 12 + parseInt(thehour);
        }

        try {
            thedate = new Date(theyear, themonth, theday, thehour, theminute);
            return thedate.toString();
        } catch (error) {
            console.log("Bad input time. Try a format such as '9:15 AM'.");
        }
        
    }
    console.log(sleep("10:30 pm"));
    console.log(wake("6:00 am"));
}