---
title: Contribution Directory
sidebar: home_sidebar
permalink: contribute_directory.html
# draft: true
toc: false
# summary: 
# keywords: []
# authors: []
# tags: []
noedit: true
customPageType: info
search: exclude
noprinter: true
---

There are two ways you can edit a page. 
<br><br>
The most direct way is by editing it directly on Github, which you can do by <a id="contribute-github-link" href="https://github.com/epstechtheatre/epstechtheatre.github.io">clicking here</a>
<br>

<hr>

The second way is by using the public writing form on Google Drive. Use the form below to request a contibution page.

<iframe id=wikiSurvey src="https://docs.google.com/forms/d/e/1FAIpQLSfmI40BafIOfnSk9fbMsl3Gu7hftzyQaP7y-mqiS8ktsqRmGQ/viewform?embedded=true" width="100%" height="1281" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

Not working? [Click here](https://links.b-macdonald.ca/wikiSurvey)

<script>
    let directArgs = window.location.search;
    if (!(directArgs.length === 0 || !directArgs.startsWith("?"))) {
        directArgs = directArgs.substring(1);

        directArgs = directArgs.split("&")
        let pageName = "";
        let pageCategory = "";

        for (const entry of directArgs) {
            const process = entry.split("=");
            if (process.length !== 2 || process[1] === undefined) {
                continue;
            }

            switch (process[0]) {
                case "pagename":
                    pageName = process[1];
                    break;

                case "pagefolder":
                    pageCategory = process[1];
                    break;

                case "githuburl":
                    document.getElementById("contribute-github-link").setAttribute("href", process[1]);
                    break;
                default:
                    break;
            }
        }
        let url = "https://docs.google.com/forms/d/e/1FAIpQLSfmI40BafIOfnSk9fbMsl3Gu7hftzyQaP7y-mqiS8ktsqRmGQ/viewform?embedded=true"
        if (pageName.length > 0) {
            url += `&entry.1801446856=${pageName}`
        }
        
        if (pageCategory.length > 0) {
            if (["Lighting", "Sound", "Costume", "Props", "Set", "Stage Management"].includes(pageCategory)) {
                url += `&entry.919070178=${pageCategory}`
            } else {
                url += "&entry.919070178=__other_option__";
                url += `&entry.919070178.other_option_response=${pageCategory}`
            }
        } else {
            url += "&entry.919070178=__other_option__";
            url += `&entry.919070178.other_option_response=Other`
        }

        if (document.referrer && document.referrer.length > 0) {
            url += `&entry.1167525181=${document.referrer}`
        }

        document.getElementById("wikiSurvey").setAttribute("src", url);
    };

</script>