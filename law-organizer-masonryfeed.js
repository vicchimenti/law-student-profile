/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file law-organizer-masonryfeed.js
 *      @see Seattle University School of Law Student Profile Type
 *      law/organizer/masonryfeed/
 *
 *      This content type layout is a smart layout for news items that must obey
 *      a masonry grid layout. In this iteration this layout will be dedicated
 *      to the student bio content type and is derived from the faculty bio.
 *
 *      This content layout will be the organizer layout and will link to the
 *      full text layout to reveal the full article.
 *
 *      Document will write once when the page loads
 *
 *      @version 5.6
 */




 try {

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var contentName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var studentName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name of Student' output='normal' modifiers='striptags,htmlentities' />");
    var summaryPhoto = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Summary Photo' output='normal' formatter='path/*' />");
    var bioPhoto = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Biographical Photo' output='normal' formatter='path/*' />");
    var pullQuote = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Pull Quote' output='normal' modifiers='medialibrary,nav_sections' />");
    var lawGradYear = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Graduating Class' output='normal' modifiers='striptags,htmlentities' />");
    var underGradYear = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Undergraduate Grad Year' output='normal' />");
    var undergradSchool = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Undergraduate Institution' output='normal' modifiers='striptags,htmlentities' />");
    var currentWork = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Current Place of Work' output='normal' modifiers='striptags,htmlentities' />");
    var biography = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Biography' output='normal' modifiers='medialibrary,nav_sections' />");
    var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' modifiers='striptags,htmlentities' />");
    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");
    var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");

    
 

    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    var hiddenFields = '';
    var openHiddenFields = '<div class="hiddenSearchText visually-hidden">';
    var closeHiddenFields = '</div>';
    var primaryImageString = '<img src="' + summaryPhoto + '" class="card-img-top rounded-circle" alt="' + contentName + '">';
    var cardTitle = '<h3 class="card-title">' + contentName + '</h3>';
    var cardTitleLink = '<a href="' + fullTextLink + '">' + contentName + '</a>';
    var pullQuoteString = '<span class="card-text studentProfilePullQuote visually-hidden">No pull quote provided</span>';
    var openCardBody = '<div class="card-body">';
    var closeCardBody = '</div>';
    var openImageWrapper = '<div class="studentProfile">';
    var closeImageWrapper = '</div>';
    var openCard = '<div class="card h-100 w-100 border-0">'
    var closeCard = '</div>';
    var beginningHTML = '<div class="studentProfileWrapper contentItem col flex-fill w-50" aria-label="' + studentName + '" id="id' + contentID + '" data-position-default="Main" data-position-selected="Main">';
    var endingHTML = '</div>';
    // var horizontalRule = '<hr class="lawProfileBorderRule" />'




    /***
     *  determine if the article contains full text content
     * 
     * */
    if (biography != "") {

        primaryImageString = '<img src="' + summaryPhoto + '" class="card-img-top rounded-circle" alt="' + studentName + '">';
        cardTitle = '<h3 class="card-title">' + studentName + '</h3>';
        cardTitleLink = '<a href="' + fullTextLink + '" title="' + studentName + '">' + primaryImageString + cardTitle + '</a>';
    }


    /***
     *  determine if the article contains full text content
     * 
     * */
    if (pullQuote != "") {

        pullQuoteString = '<span class="card-text studentProfilePullQuote">' + pullQuote + '</span>';
    }




    /***
     *  write hidden search fields
     * 
     * */
    // if (secondaryTitle != "") {
    //     var secondaryTitleHidden = '<span class="visually-hidden secondaryTitle">' + secondaryTitle + '</span>';
    //     hiddenFields += secondaryTitleHidden;
    // }
    // if (education != "") {
    //     var educationHidden = '<span class="visually-hidden education">' + education + '</span>';
    //     hiddenFields += educationHidden;
    // }
    // if (expertise != "") {
    //     var expertiseHidden = '<span class="visually-hidden expertise">' + expertise + '</span>';
    //     hiddenFields += expertiseHidden;
    // }
    // if (affiliations != "") {
    //     var affiliationsHidden = '<span class="visually-hidden affiliations">' + affiliations + '</span>';
    //     hiddenFields += affiliationsHidden;
    // }
    // if (courses != "") {
    //     var coursesHidden = '<span class="visually-hidden courses">' + courses + '</span>';
    //     hiddenFields += coursesHidden;
    // }
    // if (biography != "") {
    //     var biographyHidden = '<span class="visually-hidden biography">' + biography + '</span>';
    //     hiddenFields += biographyHidden;
    // }
    // if (publications != "") {
    //     var publicationsHidden = '<span class="visually-hidden publications">' + publications + '</span>';
    //     hiddenFields += publicationsHidden;
    // }
    // if (activity != "") {
    //     var activityHidden = '<span class="visually-hidden activity">' + activity + '</span>';
    //     hiddenFields += activityHidden;
    // }
    // if (facultyStatus != "") {
    //     var facultyStatusyHidden = '<span class="visually-hidden facultyStatus">' + facultyStatus + '</span>';
    //     hiddenFields += facultyStatusyHidden;
    // }

    


    /***
     *  Write the document once
     * 
     * */
    document.write(beginningHTML);
    document.write(anchorTag);
    document.write(openCard);
    document.write(openImageWrapper);
    document.write(cardTitleLink);
    document.write(closeImageWrapper);
    document.write(openCardBody);
    document.write(pullQuoteString);
    document.write(closeCardBody);
    document.write(closeCard);
    document.write(endingHTML);




} catch (err) {
    document.write(err.message);
}
