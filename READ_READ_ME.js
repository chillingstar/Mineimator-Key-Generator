  if (window.location.href == "https://www.mineimator.com/upgrade" || window.location.href == "https://mineimator.com/upgrade" || window.location.href == "http://mineimator.com/upgrade" || window.location.href == "http://www.mineimator.com/upgrade") {
    let keys = prompt("How many keys to generate?: ");
    if (keys < 1) {
        console.log("Number of keys to generate must be larger than 1");
    } else {
        for (let i=0; i < keys; i++) {
            fetch("https://www.mineimator.com/php/donate.php", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest"
                },
                "referrer": "https://www.mineimator.com/upgrade",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "transaction=no-donate&from=",
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
            })
            .then(response => response.text())
            .then(data => console.log(`[${i+1}] ${data}`))
            .catch(error => console.error(`[${i+1}] Error: ${error}`));
        }
    }
} else {
    alert("Please do this in https://www.mineimator.com/upgrade.");
    choice = prompt("Do you want to move to https://www.mineimator.com? (y/n)");
    if (choice == "y" || choice == "yes") {
        window.location.href = "https://www.mineimator.com/upgrade";
    } else {
        alert("Cancelled.")
    }
    }
